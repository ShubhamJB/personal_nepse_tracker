const API_BASE = "http://localhost:8000";

// State
let state = {
  summary: null,
  stocks: [],
  holdings: [],
  lots: [],
  sortField: "symbol",
  sortAsc: true,
  // For manual price flow during refresh
  failedQueue: [],
  failedQueueDate: null,
  currentFailedIndex: -1,
  // Item deletion temp storage
  deletingLotId: null
};

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  // Setup clock
  setInterval(updateClock, 1000);
  updateClock();

  // Set default dates to today
  const todayStr = new Date().toISOString().split("T")[0];
  document.getElementById("inp-refresh-date").value = todayStr;
  document.getElementById("inp-h-date").value = todayStr;

  // Sorting
  const headers = document.querySelectorAll("#tbl-holdings th[data-sort]");
  headers.forEach(th => {
    th.addEventListener("click", () => {
      const field = th.getAttribute("data-sort");
      if (state.sortField === field) {
        state.sortAsc = !state.sortAsc;
      } else {
        state.sortField = field;
        state.sortAsc = true;
      }
      updateHoldingsHeaders();
      renderHoldingsTable();
    });
  });

  // Load everything
  loadAll();
  
  // Setup Live Updates polling
  setupLiveUpdate();
});

// Update Status Bar Clock
function updateClock() {
  const now = new Date();
  const timeStr = now.toTimeString().split(" ")[0];
  document.getElementById("sb-time").textContent = timeStr;
}

// Set Status Bar Text
function setStatus(msg) {
  document.getElementById("sb-main").textContent = msg;
}

let liveUpdateInterval = null;

function setupLiveUpdate() {
  const chk = document.getElementById("chk-live-update");
  const led = document.getElementById("led-live");
  
  if (!chk || !led) return;

  function updateInterval() {
    if (chk.checked) {
      led.classList.remove("inactive");
      if (!liveUpdateInterval) {
        // Poll every 10 seconds silently
        liveUpdateInterval = setInterval(() => {
          loadAll(true);
        }, 10000);
      }
    } else {
      led.classList.add("inactive");
      if (liveUpdateInterval) {
        clearInterval(liveUpdateInterval);
        liveUpdateInterval = null;
      }
    }
  }

  chk.addEventListener("change", updateInterval);
  updateInterval(); // Initialize interval state
}

// Load data from API
async function loadAll(isSilent = false) {
  if (!isSilent) {
    setStatus("Loading data...");
  }
  
  const led = document.getElementById("led-live");
  if (led && !led.classList.contains("inactive")) {
    led.classList.add("flashing");
  }

  try {
    await Promise.all([
      fetchSummary(),
      fetchStocks(),
      fetchHoldings()
    ]);
    if (!isSilent) {
      setStatus("Data updated.");
    }
    renderTicker();
    populateStockDropdowns();
  } catch (err) {
    console.error(err);
    if (!isSilent) {
      setStatus("Error loading data from API.");
    }
  } finally {
    // Leave the LED lit briefly to visually indicate activity to user
    setTimeout(() => {
      if (led) {
        led.classList.remove("flashing");
      }
    }, 400);
  }
}

async function fetchSummary() {
  try {
    const res = await fetch(`${API_BASE}/portfolio/summary`);
    if (!res.ok) throw new Error("Failed to fetch summary");
    state.summary = await res.json();
    renderSummary();
  } catch (e) {
    console.error(e);
    setStatus("Error fetching portfolio summary");
  }
}

async function fetchStocks() {
  try {
    const res = await fetch(`${API_BASE}/stocks`);
    if (!res.ok) throw new Error("Failed to fetch stocks");
    state.stocks = await res.json();
    renderStocksTable();
  } catch (e) {
    console.error(e);
    setStatus("Error fetching stocks");
  }
}

async function fetchHoldings() {
  try {
    const res = await fetch(`${API_BASE}/holdings`);
    if (!res.ok) throw new Error("Failed to fetch holdings");
    state.lots = await res.json();
    renderLotsTable();
    document.getElementById("sb-count").textContent = `${state.lots.length} position(s)`;
  } catch (e) {
    console.error(e);
    setStatus("Error fetching holdings");
  }
}

// Rendering Functions
function renderSummary() {
  if (!state.summary) return;

  const s = state.summary;
  
  // Update LCDs
  const investedLcd = document.getElementById("lcd-invested");
  investedLcd.textContent = formatNumber(s.total_invested);
  investedLcd.classList.remove("dim");

  const valueLcd = document.getElementById("lcd-value");
  valueLcd.textContent = formatNumber(s.total_current_value);
  valueLcd.classList.remove("dim");
  
  const pnlLcd = document.getElementById("lcd-pnl");
  pnlLcd.textContent = (s.total_unrealized_pnl_amount >= 0 ? "+" : "") + formatNumber(s.total_unrealized_pnl_amount);
  pnlLcd.classList.remove("dim");
  if (s.total_unrealized_pnl_amount < 0) {
    pnlLcd.classList.add("neg");
  } else {
    pnlLcd.classList.remove("neg");
  }

  const pctLcd = document.getElementById("lcd-pct");
  pctLcd.textContent = (s.total_unrealized_pnl_percent >= 0 ? "+" : "") + formatPercent(s.total_unrealized_pnl_percent);
  pctLcd.classList.remove("dim");
  if (s.total_unrealized_pnl_percent < 0) {
    pctLcd.classList.add("neg");
  } else {
    pctLcd.classList.remove("neg");
  }

  // Meta
  document.getElementById("meta-asof").textContent = `As of: ${formatDateTime(s.as_of)}`;
  document.getElementById("meta-missing").textContent = `Missing prices: ${s.stocks_missing_price}`;

  // Update banner if needed
  const banner = document.getElementById("update-banner");
  const needsUpdate = s.stock_breakdown.some(item => item.needs_price_update);
  if (needsUpdate) {
    banner.classList.add("show");
  } else {
    banner.classList.remove("show");
  }

  renderHoldingsTable();
}

function renderStocksTable() {
  const tbody = document.getElementById("stocks-body");
  if (state.stocks.length === 0) {
    tbody.innerHTML = `<tr><td colspan="3" class="empty-cell">No stocks added yet.</td></tr>`;
    return;
  }

  tbody.innerHTML = state.stocks.map(s => `
    <tr>
      <td style="font-weight:bold">${escapeHtml(s.symbol)}</td>
      <td title="${escapeHtml(s.company_name)}">${escapeHtml(s.company_name)}</td>
      <td>${escapeHtml(s.sector || "N/A")}</td>
    </tr>
  `).join("");
}

function renderHoldingsTable() {
  if (!state.summary || !state.summary.stock_breakdown) return;

  const tbody = document.getElementById("holdings-body");
  let list = [...state.summary.stock_breakdown];

  if (list.length === 0) {
    tbody.innerHTML = `<tr><td colspan="12" class="empty-cell">No holdings tracked. Add some holdings to start!</td></tr>`;
    return;
  }

  // Sort breakdown
  list.sort((a, b) => {
    let valA = a[state.sortField];
    let valB = b[state.sortField];

    if (valA === null || valA === undefined) return 1;
    if (valB === null || valB === undefined) return -1;

    if (typeof valA === "string") {
      return state.sortAsc ? valA.localeCompare(valB) : valB.localeCompare(valA);
    } else {
      return state.sortAsc ? valA - valB : valB - valA;
    }
  });

  tbody.innerHTML = list.map(item => {
    const isPriced = item.latest_ltp !== null;
    const pnlClass = item.unrealized_pnl_amount >= 0 ? "pos" : "neg";
    const dayClass = item.day_change_percent >= 0 ? "pos" : "neg";

    return `
      <tr>
        <td style="font-weight:bold">${escapeHtml(item.symbol)}</td>
        <td title="${escapeHtml(item.company_name)}">${escapeHtml(item.company_name)}</td>
        <td class="num">${item.quantity}</td>
        <td class="num">${formatNumber(item.avg_buy_price)}</td>
        <td class="num">${isPriced ? formatNumber(item.latest_ltp) : "N/A"}</td>
        <td class="num">${isPriced ? formatNumber(item.current_value) : "N/A"}</td>
        <td class="num ${isPriced ? pnlClass : ''}">${isPriced ? (item.unrealized_pnl_amount >= 0 ? '+' : '') + formatNumber(item.unrealized_pnl_amount) : "N/A"}</td>
        <td class="num ${isPriced ? pnlClass : ''}">${isPriced ? (item.unrealized_pnl_percent >= 0 ? '+' : '') + formatPercent(item.unrealized_pnl_percent) : "N/A"}</td>
        <td class="num ${item.day_change_percent !== null ? dayClass : ''}">${item.day_change_percent !== null ? (item.day_change_percent >= 0 ? '+' : '') + formatPercent(item.day_change_percent) : "N/A"}</td>
        <td>${item.price_date ? item.price_date : "N/A"}</td>
        <td>${item.price_source ? escapeHtml(item.price_source) : "N/A"}</td>
        <td>
          ${item.needs_price_update 
            ? `<span class="indicator-warn" title="Needs update"></span><span style="font-size:9px;color:var(--red-neg)">UPDATE</span>` 
            : `<span class="indicator-ok" title="Up to date"></span><span style="font-size:9px;color:var(--green-pos)">OK</span>`
          }
        </td>
      </tr>
    `;
  }).join("");
}

function renderLotsTable() {
  const tbody = document.getElementById("lots-body");
  if (state.lots.length === 0) {
    tbody.innerHTML = `<tr><td colspan="8" class="empty-cell">No lots recorded. Add a holding first.</td></tr>`;
    return;
  }

  // Sort lots by id descending
  const sortedLots = [...state.lots].sort((a, b) => b.id - a.id);

  tbody.innerHTML = sortedLots.map(lot => `
    <tr>
      <td style="font-family:monospace">${lot.id}</td>
      <td style="font-weight:bold">${escapeHtml(lot.symbol)}</td>
      <td title="${escapeHtml(lot.company_name)}">${escapeHtml(lot.company_name)}</td>
      <td class="num">${lot.quantity}</td>
      <td class="num">${formatNumber(lot.buy_price)}</td>
      <td>${lot.buy_date}</td>
      <td title="${escapeHtml(lot.notes || '')}">${escapeHtml(lot.notes || "—")}</td>
      <td style="text-align:center">
        <button class="btn btn-sm" onclick="askDeleteLot(${lot.id})" style="color:var(--red-neg); font-weight:bold">✕</button>
      </td>
    </tr>
  `).join("");
}

function updateHoldingsHeaders() {
  const headers = document.querySelectorAll("#tbl-holdings th[data-sort]");
  headers.forEach(th => {
    th.classList.remove("sort-asc", "sort-desc");
    if (th.getAttribute("data-sort") === state.sortField) {
      th.classList.add(state.sortAsc ? "sort-asc" : "sort-desc");
    }
  });
}

function renderTicker() {
  const tickerInner = document.getElementById("ticker-inner");
  if (!state.summary || !state.summary.stock_breakdown || state.summary.stock_breakdown.length === 0) {
    tickerInner.textContent = "● Track stock holdings to see ticker prices here.";
    return;
  }

  const items = state.summary.stock_breakdown.map(item => {
    const isPriced = item.latest_ltp !== null;
    const ltpStr = isPriced ? `${formatNumber(item.latest_ltp)}` : "No Price";
    let changeStr = "";
    if (isPriced && item.day_change_percent !== null) {
      const sign = item.day_change_percent >= 0 ? "▲" : "▼";
      changeStr = ` (${sign}${Math.abs(item.day_change_percent)}%)`;
    }
    return `${item.symbol}: ${ltpStr}${changeStr}`;
  });

  tickerInner.textContent = " ● " + items.join("  |  ● ");
}

function populateStockDropdowns() {
  const select = document.getElementById("inp-h-stock");
  // Keep first option
  select.innerHTML = `<option value="">— Select Stock —</option>`;
  
  // Sort stocks alphabetically by symbol
  const sorted = [...state.stocks].sort((a,b) => a.symbol.localeCompare(b.symbol));
  sorted.forEach(stock => {
    const opt = document.createElement("option");
    opt.value = stock.id;
    opt.textContent = `${stock.symbol} (${stock.company_name})`;
    select.appendChild(opt);
  });
}

// Dialog Controls
function openDialog(id) {
  document.getElementById(id).classList.add("open");
}

function closeDialog(id) {
  document.getElementById(id).classList.remove("open");
  // Clear any errors when closing
  const errorDivs = document.querySelectorAll(".form-error");
  errorDivs.forEach(d => {
    d.classList.remove("show");
    d.textContent = "";
  });
}

// Minimize / Restore Main Window
function toggleMinimize() {
  const body = document.getElementById("main-body");
  const toolbar = document.getElementById("toolbar");
  const btn = document.getElementById("btn-minimize");
  if (body.style.display === "none") {
    body.style.display = "block";
    toolbar.style.display = "flex";
    btn.textContent = "_";
  } else {
    body.style.display = "none";
    toolbar.style.display = "none";
    btn.textContent = "■";
  }
}

// Create dialog open functions
function openAddStockDialog() {
  document.getElementById("inp-s-sym").value = "";
  document.getElementById("inp-s-name").value = "";
  document.getElementById("inp-s-sector").value = "";
  openDialog("dlg-add-stock");
}

function openAddHoldingDialog() {
  document.getElementById("inp-h-stock").value = "";
  document.getElementById("inp-h-qty").value = "";
  document.getElementById("inp-h-price").value = "";
  document.getElementById("inp-h-notes").value = "";
  openDialog("dlg-add-holding");
}

function openImportCsvDialog() {
  document.getElementById("inp-csv-file").value = "";
  const errDiv = document.getElementById("err-import-csv");
  errDiv.textContent = "";
  errDiv.classList.remove("show");

  document.getElementById("import-csv-summary").style.display = "none";
  document.getElementById("import-csv-errors-list").style.display = "none";
  document.getElementById("import-csv-errors-list").innerHTML = "";

  const submitBtn = document.getElementById("btn-submit-import-csv");
  submitBtn.textContent = "Import";
  submitBtn.disabled = false;
  submitBtn.onclick = submitImportCsv;

  openDialog("dlg-import-csv");
}

async function submitImportCsv() {
  const fileInput = document.getElementById("inp-csv-file");
  const errDiv = document.getElementById("err-import-csv");
  const submitBtn = document.getElementById("btn-submit-import-csv");
  const summaryDiv = document.getElementById("import-csv-summary");
  const resultTxt = document.getElementById("import-csv-result-txt");
  const errorsList = document.getElementById("import-csv-errors-list");

  errDiv.classList.remove("show");
  errDiv.textContent = "";
  summaryDiv.style.display = "none";
  errorsList.style.display = "none";
  errorsList.innerHTML = "";

  if (fileInput.files.length === 0) {
    errDiv.textContent = "Please select a CSV file first.";
    errDiv.classList.add("show");
    return;
  }

  const file = fileInput.files[0];
  const formData = new FormData();
  formData.append("file", file);

  setStatus("Uploading and importing CSV...");
  submitBtn.disabled = true;
  submitBtn.textContent = "Importing...";

  try {
    const res = await fetch(`${API_BASE}/holdings/import-csv`, {
      method: "POST",
      body: formData
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.detail || "CSV import request failed.");
    }

    setStatus(`Import completed: ${data.imported} imported, ${data.failed} failed.`);
    
    // Show summary
    summaryDiv.style.display = "block";
    resultTxt.textContent = `Successfully imported: ${data.imported} row(s). Failed/skipped: ${data.failed} row(s).`;

    if (data.failed > 0 && data.errors && data.errors.length > 0) {
      errorsList.style.display = "block";
      errorsList.innerHTML = data.errors.map(err => `
        <div class="failed-item" style="color:var(--red-neg); font-size:10px">
          ${escapeHtml(err)}
        </div>
      `).join("");
    }

    submitBtn.textContent = "Done";
    submitBtn.disabled = false;
    submitBtn.onclick = () => {
      closeDialog("dlg-import-csv");
      loadAll();
    };

  } catch (err) {
    console.error(err);
    errDiv.textContent = err.message;
    errDiv.classList.add("show");
    submitBtn.textContent = "Import";
    submitBtn.disabled = false;
    submitBtn.onclick = submitImportCsv;
    setStatus("CSV import failed.");
  }
}


function openRefreshDialog() {
  // Reset phases
  document.getElementById("refresh-p1").classList.add("active");
  document.getElementById("refresh-p2").classList.remove("active");
  document.getElementById("refresh-p3").classList.remove("active");

  document.getElementById("refresh-failed-block").style.display = "none";
  document.getElementById("refresh-api-error").style.display = "none";

  // Reset footer buttons
  const okBtn = document.getElementById("refresh-ok-btn");
  okBtn.textContent = "Refresh";
  okBtn.disabled = false;
  okBtn.onclick = doRefresh;

  openDialog("dlg-refresh");
}

// Refresh Prices Execution
async function doRefresh() {
  const dateVal = document.getElementById("inp-refresh-date").value;
  
  // Shift to Phase 2: Progress
  document.getElementById("refresh-p1").classList.remove("active");
  document.getElementById("refresh-p2").classList.add("active");

  const okBtn = document.getElementById("refresh-ok-btn");
  okBtn.disabled = true;
  okBtn.textContent = "Processing...";

  setStatus("Refreshing prices (trying NEPSE → MeroLagani → Chukul)...");

  try {
    const res = await fetch(`${API_BASE}/prices/refresh`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ date: dateVal || null })
    });

    if (!res.ok) {
      const errData = await res.json();
      throw new Error(errData.detail || "Price refresh request failed");
    }

    const data = await res.json(); // RefreshResult schema

    // Shift to Phase 3: Results
    document.getElementById("refresh-p2").classList.remove("active");
    document.getElementById("refresh-p3").classList.add("active");

    const resultLine = document.getElementById("refresh-result-line");
    const failedBlock = document.getElementById("refresh-failed-block");
    const errorBlock = document.getElementById("refresh-api-error");

    const succeededCount = data.succeeded ? data.succeeded.length : 0;
    const failedCount = data.failed ? data.failed.length : 0;

    resultLine.textContent = `Completed: ${succeededCount} succeeded, ${failedCount} failed.`;

    if (data.error) {
      errorBlock.style.display = "block";
      document.getElementById("refresh-error-txt").textContent = data.error;
    } else {
      errorBlock.style.display = "none";
    }

    if (failedCount > 0) {
      failedBlock.style.display = "block";
      const failedList = document.getElementById("refresh-failed-list");
      failedList.innerHTML = data.failed.map(symbol => `
        <div class="failed-item">
          <b>${escapeHtml(symbol)}</b>
          <button class="btn btn-sm" onclick="startManualFlow('${escapeHtml(symbol)}', '${dateVal}')">Manual Entry</button>
        </div>
      `).join("");

      // Prepare state for sequential manual dialogs
      state.failedQueue = [...data.failed];
      state.failedQueueDate = dateVal;
      state.currentFailedIndex = -1;

      // Update dialog button to point to "Manual Flow"
      okBtn.textContent = "Enter Failed Manually";
      okBtn.disabled = false;
      okBtn.onclick = startManualQueue;
    } else {
      failedBlock.style.display = "none";
      okBtn.textContent = "OK";
      okBtn.disabled = false;
      okBtn.onclick = () => {
        closeDialog("dlg-refresh");
        loadAll();
      };
    }

  } catch (err) {
    console.error(err);
    document.getElementById("refresh-p2").classList.remove("active");
    document.getElementById("refresh-p3").classList.add("active");
    
    document.getElementById("refresh-result-line").textContent = "Request failed.";
    const errorBlock = document.getElementById("refresh-api-error");
    errorBlock.style.display = "block";
    document.getElementById("refresh-error-txt").textContent = err.message;

    okBtn.textContent = "Close";
    okBtn.disabled = false;
    okBtn.onclick = () => closeDialog("dlg-refresh");
    setStatus("Price refresh failed.");
  }
}

// Sequential Manual Price Queue
function startManualQueue() {
  closeDialog("dlg-refresh");
  if (state.failedQueue.length === 0) return;
  state.currentFailedIndex = 0;
  presentManualItem();
}

function startManualFlow(symbol, date) {
  closeDialog("dlg-refresh");
  state.failedQueue = [symbol];
  state.failedQueueDate = date;
  state.currentFailedIndex = 0;
  presentManualItem();
}

function presentManualItem() {
  if (state.currentFailedIndex < 0 || state.currentFailedIndex >= state.failedQueue.length) {
    // Done with queue
    closeDialog("dlg-manual");
    loadAll();
    return;
  }

  const symbol = state.failedQueue[state.currentFailedIndex];
  const date = state.failedQueueDate || new Date().toISOString().split("T")[0];

  document.getElementById("manual-header").textContent = symbol;
  document.getElementById("inp-m-date").value = date;
  document.getElementById("inp-m-ltp").value = "";
  document.getElementById("inp-m-open").value = "";
  document.getElementById("inp-m-high").value = "";
  document.getElementById("inp-m-low").value = "";
  document.getElementById("inp-m-vol").value = "";

  document.getElementById("manual-counter").textContent = `Item ${state.currentFailedIndex + 1} of ${state.failedQueue.length}`;
  openDialog("dlg-manual");
}

async function submitManual() {
  const symbol = state.failedQueue[state.currentFailedIndex];
  const date = document.getElementById("inp-m-date").value;
  const ltp = parseFloat(document.getElementById("inp-m-ltp").value);
  const openPrice = parseFloat(document.getElementById("inp-m-open").value);
  const highPrice = parseFloat(document.getElementById("inp-m-high").value);
  const lowPrice = parseFloat(document.getElementById("inp-m-low").value);
  const volume = parseInt(document.getElementById("inp-m-vol").value);

  if (isNaN(ltp) || ltp <= 0) {
    alert("Please enter a valid LTP price.");
    return;
  }

  setStatus(`Saving manual entry for ${symbol}...`);

  try {
    // We need to look up the stock id by symbol
    const stock = state.stocks.find(s => s.symbol.toUpperCase() === symbol.toUpperCase());
    if (!stock) {
      throw new Error(`Tracked stock not found for symbol ${symbol}`);
    }

    const res = await fetch(`${API_BASE}/prices/manual`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        stock_id: stock.id,
        date: date,
        ltp: ltp,
        open_price: isNaN(openPrice) ? null : openPrice,
        high_price: isNaN(highPrice) ? null : highPrice,
        low_price: isNaN(lowPrice) ? null : lowPrice,
        volume: isNaN(volume) ? null : volume
      })
    });

    if (!res.ok) {
      const err = await res.json();
      throw new Error(err.detail || "Manual entry failed");
    }

    setStatus(`Saved entry for ${symbol}.`);
    
    // Go to next item in queue
    state.currentFailedIndex++;
    presentManualItem();

  } catch (e) {
    console.error(e);
    alert(`Error saving price for ${symbol}: ${e.message}`);
    setStatus(`Manual price error.`);
  }
}

function skipManual() {
  setStatus("Manual entry skipped.");
  state.currentFailedIndex++;
  presentManualItem();
}

// Add Stock Submission
async function submitAddStock() {
  const sym = document.getElementById("inp-s-sym").value.trim().toUpperCase();
  const name = document.getElementById("inp-s-name").value.trim();
  const sector = document.getElementById("inp-s-sector").value.trim() || null;
  const errDiv = document.getElementById("err-add-stock");

  if (!sym || !name) {
    errDiv.textContent = "Symbol and Company Name are required.";
    errDiv.classList.add("show");
    return;
  }

  setStatus(`Adding stock ${sym}...`);
  errDiv.classList.remove("show");

  try {
    const res = await fetch(`${API_BASE}/stocks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ symbol: sym, company_name: name, sector: sector })
    });

    if (!res.ok) {
      if (res.status === 409) {
        throw new Error(`Stock symbol '${sym}' already exists.`);
      }
      const data = await res.json();
      throw new Error(data.detail || "Failed to create stock.");
    }

    closeDialog("dlg-add-stock");
    setStatus(`Stock ${sym} added successfully.`);
    loadAll();
  } catch (err) {
    console.error(err);
    errDiv.textContent = err.message;
    errDiv.classList.add("show");
    setStatus("Add stock failed.");
  }
}

// Add Holding Submission
async function submitAddHolding() {
  const stockId = parseInt(document.getElementById("inp-h-stock").value);
  const qty = parseInt(document.getElementById("inp-h-qty").value);
  const price = parseFloat(document.getElementById("inp-h-price").value);
  const date = document.getElementById("inp-h-date").value;
  const notes = document.getElementById("inp-h-notes").value.trim() || null;
  const errDiv = document.getElementById("err-add-holding");

  if (isNaN(stockId) || isNaN(qty) || isNaN(price) || !date) {
    errDiv.textContent = "Please fill out all required fields.";
    errDiv.classList.add("show");
    return;
  }

  if (qty <= 0 || price <= 0) {
    errDiv.textContent = "Quantity and buy price must be greater than zero.";
    errDiv.classList.add("show");
    return;
  }

  setStatus("Adding holding lot...");
  errDiv.classList.remove("show");

  try {
    const res = await fetch(`${API_BASE}/holdings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        stock_id: stockId,
        quantity: qty,
        buy_price: price,
        buy_date: date,
        notes: notes
      })
    });

    if (!res.ok) {
      const data = await res.json();
      throw new Error(data.detail || "Failed to create holding.");
    }

    closeDialog("dlg-add-holding");
    setStatus("Holding lot added.");
    loadAll();
  } catch (err) {
    console.error(err);
    errDiv.textContent = err.message;
    errDiv.classList.add("show");
    setStatus("Add holding lot failed.");
  }
}

// Delete Holding / Lot
function askDeleteLot(id) {
  state.deletingLotId = id;
  document.getElementById("confirm-del-msg").textContent = `Are you sure you want to delete Lot ID ${id}? This cannot be undone.`;
  openDialog("dlg-confirm-del");
}

async function confirmDelete() {
  const id = state.deletingLotId;
  if (!id) return;

  setStatus(`Deleting lot ${id}...`);
  closeDialog("dlg-confirm-del");

  try {
    const res = await fetch(`${API_BASE}/holdings/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Delete failed.");

    setStatus(`Lot ${id} deleted.`);
    state.deletingLotId = null;
    loadAll();
  } catch (err) {
    console.error(err);
    alert(`Could not delete lot: ${err.message}`);
    setStatus("Delete lot failed.");
  }
}

// Formatting helpers
function formatNumber(num) {
  if (num === null || num === undefined) return "";
  return Number(num).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function formatPercent(num) {
  if (num === null || num === undefined) return "";
  return Number(num).toFixed(2) + "%";
}

function formatDateTime(isoStr) {
  if (!isoStr) return "N/A";
  try {
    const d = new Date(isoStr);
    return d.toLocaleString();
  } catch (e) {
    return isoStr;
  }
}

function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
