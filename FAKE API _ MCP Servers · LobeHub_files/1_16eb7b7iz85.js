(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,975409,665282,e=>{"use strict";let t;var r=e.i(757023),a=e.i(654128),o=e.i(206868),i=e.i(767093),n=e.i(149167),l=e.i(74152),s=e.i(709939),d=e.i(755072),c=e.i(619963);let u="allow-scripts allow-forms allow-modals",m=["<!doctype html","<html","<HTML"],h=e=>{if(!e)return!1;let t=e.slice(0,1024).toLowerCase();return m.some(e=>t.includes(e.toLowerCase()))},f=e=>!!e&&e.slice(-1024).toLowerCase().includes("</html>"),p=e=>!!e&&/<script\b/i.test(e);e.s(["DEFAULT_SANDBOX",0,u,"SRCDOC_MAX_LENGTH",0,5242880,"containsScript",0,p,"isFullHtmlDocument",0,h,"isHtmlContentClosed",0,f],665282);var y=e.i(271645),g=e.i(843476),x=e.i(184283);let b=x.keyframes`
  0%, 100% { opacity: 0.3; }
  50%      { opacity: 1; }
`,v=x.keyframes`
  0%   { transform: translateX(0);                     opacity: 0.5; }
  50%  {                                                opacity: 1; }
  100% { transform: translateX(var(--flow-distance));  opacity: 0.5; }
`,w=x.keyframes`
  100% { transform: rotate(360deg); }
`,k=x.keyframes`
  0%, 100% { transform: scale(0.8); opacity: 0.5; }
  50%      { transform: scale(1);   opacity: 1; }
`,j=(0,x.createStaticStyles)(({css:e,cssVar:t})=>({center:e`
    fill: ${t.colorTextSecondary};
    animation: ${k} 2s infinite;
  `,connection:e`
    opacity: 0.3;
    stroke: ${t.colorTextSecondary};
    stroke-width: 0.5;
  `,container:e`
    display: flex;
    align-items: center;
    justify-content: center;
  `,node:e`
    fill: ${t.colorTextSecondary};
    animation: ${b} 2s infinite;
  `,particle:e`
    fill: ${t.colorTextSecondary};
    animation: ${v} 2s infinite;
  `,ring:e`
    transform-origin: center;

    fill: none;
    stroke: ${t.colorFill};
    stroke-dasharray: 0 8;
    stroke-width: 1;

    animation: ${w} 20s infinite linear;
  `,svg:e`
    width: 100%;
    height: 100%;
  `})),N=(0,y.memo)(({size:e=16,className:t,style:r})=>{let a=[];for(let e=0;e<3;e++)for(let t=0;t<3;t++){let r=25+25*e,o=25+25*t,i=(3*e+t)*.2;a.push((0,g.jsx)("circle",{className:j.node,cx:r,cy:o,r:"3",style:{animationDelay:`${i}s`}},`node-${e}-${t}`))}let o=[];for(let e=0;e<2;e++)for(let t=0;t<3;t++){let r=25+25*e,a=25+25*t;for(let i=0;i<3;i++){let n=25+(e+1)*25,l=25+25*i;o.push((0,g.jsx)("line",{className:j.connection,x1:r,x2:n,y1:a,y2:l},`connection-${e}-${t}-${i}`))}}let i=[0,1,2].map(e=>(0,g.jsx)("circle",{className:j.particle,cx:25,cy:50,r:"1.5",style:{"--flow-distance":"50px",animationDelay:`${.6*e}s`}},`particle-${e}`));return(0,g.jsx)("div",{className:[j.container,t].filter(Boolean).join(" "),style:{height:e,width:e,...r},children:(0,g.jsxs)("svg",{className:j.svg,viewBox:"0 0 100 100",xmlns:"http://www.w3.org/2000/svg",children:[o,a,i,(0,g.jsx)("rect",{className:j.center,height:"6",width:"6",x:"47",y:"47"}),(0,g.jsx)("circle",{className:j.ring,cx:"50",cy:"50",r:"40"})]})})});N.displayName="NeuralNetworkLoading";var M=e.i(191817);let S=e=>`
(function () {
  var frameId = ${JSON.stringify(e)};
  function post() {
    try {
      var h = Math.max(
        document.documentElement.scrollHeight,
        document.body ? document.body.scrollHeight : 0,
      );
      parent.postMessage({ type: ${JSON.stringify("lobe-html-resize")}, frameId: frameId, height: h }, '*');
    } catch (_) {}
  }

  function attach() {
    post();
    try {
      var ro = new ResizeObserver(post);
      if (document.body) ro.observe(document.body);
      if (document.documentElement) ro.observe(document.documentElement);
    } catch (_) {}
    window.addEventListener('load', post);
    window.addEventListener('resize', post);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attach);
  } else {
    attach();
  }
})();
`,E=`
(function () {
  function createStorage() {
    var store = Object.create(null);
    return {
      get length() {
        return Object.keys(store).length;
      },
      key: function (i) {
        var keys = Object.keys(store);
        return i >= 0 && i < keys.length ? keys[i] : null;
      },
      getItem: function (k) {
        return Object.prototype.hasOwnProperty.call(store, k) ? store[k] : null;
      },
      setItem: function (k, v) {
        store[String(k)] = String(v);
      },
      removeItem: function (k) {
        delete store[k];
      },
      clear: function () {
        store = Object.create(null);
      },
    };
  }

  function tryShim(name) {
    try {
      // Accessing the property in a sandboxed (no allow-same-origin) frame
      // throws synchronously — that's the signal to install the shim.
      // eslint-disable-next-line no-unused-expressions
      window[name];
      return;
    } catch (_) {}
    try {
      Object.defineProperty(window, name, {
        configurable: true,
        value: createStorage(),
      });
    } catch (_) {}
  }

  tryShim('localStorage');
  tryShim('sessionStorage');
})();
`,T="lobe-html-shell-update",C=(0,x.createStyles)(({css:e,cssVar:t})=>({fallback:e`
    padding: 16px;
    font-size: 13px;
    color: ${t.colorTextDescription};
  `,iframe:e`
    display: block;
    width: 100%;
    border: none;
    background: transparent;
  `})),L=/<\/head\s*>|<body[\s>]/i,$=(t=null,e=>{if("u"<typeof window)return null;if(!e)return{bodyHtml:"",headExtrasHtml:"",styleContent:""};t||(t=new DOMParser);let r=t.parseFromString(e,"text/html"),a=[],o=[];if(r.head)for(let e of Array.from(r.head.children))"STYLE"===e.tagName?a.push(e.textContent||""):o.push(e.outerHTML);return{bodyHtml:r.body?r.body.innerHTML:"",headExtrasHtml:L.test(e)?o.join(""):"",styleContent:a.join("\n")}}),D=(0,y.memo)(({animated:e,background:t,content:r,className:a,defaultHeight:o=400,ref:i,sandbox:n=u,style:l,title:s="HTML preview"})=>{let{styles:d}=C(),c=(0,y.useRef)(null),m=(0,y.useId)(),[h,f]=(0,y.useState)(o),p=(0,y.useRef)(o);(0,y.useEffect)(()=>{p.current=o},[o]);let b=r.length>5242880,v=(0,y.useMemo)(()=>e||b?null:(({background:e,content:t,frameId:r})=>{let a=`<style>html,body{margin:0;padding:0;${e?`background:${e};`:""}color-scheme:light dark;}</style><script>${E}</script><script>${S(r)}</script>`,o=t.toLowerCase();if(!o.includes("<html"))return`<!DOCTYPE html><html><head><meta charset="utf-8">${a}</head><body>${t}</body></html>`;let i=t.match(/<head\b[^>]*>/i);if(i){let e=i.index+i[0].length;return t.slice(0,e)+a+t.slice(e)}let n=o.indexOf("</head>");if(-1!==n)return t.slice(0,n)+a+t.slice(n);let l=t.match(/<html\b[^>]*>/i);if(l){let e=l.index+l[0].length;return t.slice(0,e)+`<head>${a}</head>`+t.slice(e)}return`<!DOCTYPE html><html><head>${a}</head><body>${t}</body></html>`})({background:t,content:r,frameId:m}),[e,t,r,m,b]),w=(0,y.useMemo)(()=>!e||b?null:(({background:e,frameId:t})=>{let r=`html,body{margin:0;padding:0;${e?`background:${e};`:""}color-scheme:light dark;}`,a=`
(function () {
  var FRAME_ID = ${JSON.stringify(t)};
  var UPDATE_TYPE = ${JSON.stringify(T)};

  function cloneScript(src) {
    // <script> elements parsed via DOMParser are inert. Rebuild them as
    // proper DOM scripts so the browser executes them.
    //
    // Important: only set .text for inline scripts. Setting it on a
    // src-bearing script (even to an empty string) causes some browser /
    // extension combinations to treat the element as an inline script
    // with empty body and skip the external fetch — so the CDN never
    // loads. We just copy attributes; the browser will fetch the src on
    // append.
    var s = document.createElement('script');
    for (var i = 0; i < src.attributes.length; i++) {
      var a = src.attributes[i];
      s.setAttribute(a.name, a.value);
    }
    if (!src.hasAttribute('src')) {
      var text = src.textContent;
      if (text) s.text = text;
    }
    return s;
  }

  function importNode(node) {
    if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'SCRIPT') {
      return cloneScript(node);
    }
    return document.importNode(node, true);
  }

  function markFadeIn(node) {
    if (node.nodeType === Node.ELEMENT_NODE && node.classList) {
      node.classList.add('lobe-html-new');
    }
  }

  // Recursive prefix-match morph. For each parent we match leading children
  // that already exist (by outerHTML or recursive morph), then we remove
  // trailing children that no longer exist, and finally append the new
  // tail with a fade-in class.
  function morph(oldEl, newEl) {
    if (oldEl.nodeType !== newEl.nodeType) return false;
    if (oldEl.nodeType !== Node.ELEMENT_NODE) return false;
    if (oldEl.tagName !== newEl.tagName) return false;

    // Sync attributes
    var oldAttrs = oldEl.attributes;
    for (var i = oldAttrs.length - 1; i >= 0; i--) {
      var an = oldAttrs[i].name;
      if (!newEl.hasAttribute(an)) oldEl.removeAttribute(an);
    }
    var newAttrs = newEl.attributes;
    for (var j = 0; j < newAttrs.length; j++) {
      var na = newAttrs[j];
      if (oldEl.getAttribute(na.name) !== na.value) {
        oldEl.setAttribute(na.name, na.value);
      }
    }

    var oldKids = oldEl.childNodes;
    var newKids = newEl.childNodes;
    var commonLen = 0;

    while (commonLen < oldKids.length && commonLen < newKids.length) {
      var o = oldKids[commonLen];
      var n = newKids[commonLen];
      if (o.nodeType !== n.nodeType) break;
      if (o.nodeType === Node.TEXT_NODE) {
        if (o.textContent !== n.textContent) {
          // Update text content in place — no fade for text.
          o.textContent = n.textContent;
        }
        commonLen++;
      } else if (o.nodeType === Node.ELEMENT_NODE) {
        // Cheap identity check before recursing.
        if (o.outerHTML === n.outerHTML) {
          commonLen++;
        } else if (morph(o, n)) {
          commonLen++;
        } else {
          break;
        }
      } else {
        commonLen++;
      }
    }

    // Trim old trailing children that no longer exist.
    while (oldEl.childNodes.length > commonLen) {
      oldEl.removeChild(oldEl.lastChild);
    }

    // Append the new tail with fade-in markers, batched through a
    // DocumentFragment. A flat sequence of appendChild calls fires one
    // mutation per element — MutationObserver libraries (Tailwind Play
    // CDN, Stimulus, etc.) that batch their work can drop intermediate
    // notifications if they arrive too quickly. Going through a fragment
    // delivers exactly one childList mutation that lists all new nodes
    // at once, which observers handle reliably.
    if (commonLen < newKids.length) {
      var frag = document.createDocumentFragment();
      for (var k = commonLen; k < newKids.length; k++) {
        var imported = importNode(newKids[k]);
        markFadeIn(imported);
        frag.appendChild(imported);
      }
      oldEl.appendChild(frag);
    }

    return true;
  }

  // Track which head extras (scripts/links/meta/title/base) we've already
  // mounted so re-arriving chunks don't re-execute scripts or duplicate
  // resources. Keyed by outerHTML — for streaming partial URLs each
  // partial-and-then-complete tag is a distinct key, which means a partial
  // CDN URL may briefly 404 before the complete one succeeds. That's
  // acceptable; the alternative (waiting for the closing tag heuristic) is
  // fragile and would defeat the live-CDN use case entirely.
  var headSeen = Object.create(null);

  function syncHeadExtras(headExtrasHtml) {
    if (typeof headExtrasHtml !== 'string') return;
    var parser = new DOMParser();
    var doc = parser.parseFromString(
      '<!doctype html><html><head>' + headExtrasHtml + '</head></html>',
      'text/html',
    );
    var children = doc.head ? doc.head.children : [];
    for (var i = 0; i < children.length; i++) {
      var src = children[i];
      var key = src.outerHTML;
      if (headSeen[key]) continue;
      headSeen[key] = true;
      var clone = importNode(src);
      // Tag for debugging — also keeps these distinguishable from the
      // shell's own head children if anything ever needs to inspect them.
      if (clone.setAttribute) clone.setAttribute('data-lobe-user', '');
      document.head.appendChild(clone);
    }
  }

  function applyUpdate(payload) {
    if (!payload) return;

    // 1) Inline user styles: merged into a single growing <style> element.
    //    Streaming partial CSS just keeps overwriting this text until the
    //    rules become complete, so we don't stack half-parsed <style>
    //    blocks in the head.
    var styleEl = document.getElementById('lobe-user-style');
    if (styleEl && styleEl.textContent !== payload.styleContent) {
      styleEl.textContent = payload.styleContent || '';
    }

    // 2) Everything else in the user's <head> (scripts, links, meta, …):
    //    append-with-dedupe so head-loaded resources actually run.
    syncHeadExtras(payload.headExtrasHtml);

    // 3) Body: in-place morph with fade-in on new nodes.
    var bodyParser = new DOMParser();
    var newDoc = bodyParser.parseFromString(
      '<!doctype html><html><body>' + (payload.bodyHtml || '') + '</body></html>',
      'text/html',
    );

    // morph() returns false only for type mismatch on the root — body to
    // body always matches, so this is safe.
    morph(document.body, newDoc.body);

    // Nudge class-engine CDNs (Tailwind Play CDN, Stimulus, etc.) into
    // re-scanning the document. They watch via MutationObserver but some
    // implementations only consider the directly-mutated nodes from each
    // record and skip recursing into nested descendants, so deeply-styled
    // subtrees can end up with un-generated utility classes. Toggling a
    // throwaway class on body produces an attribute mutation that prompts
    // a fresh full-document scan.
    try {
      document.body.classList.add('_lobe-rescan');
      document.body.classList.remove('_lobe-rescan');
    } catch (_) {}
  }

  window.addEventListener('message', function (event) {
    var data = event.data;
    if (!data || data.type !== UPDATE_TYPE || data.frameId !== FRAME_ID) return;
    applyUpdate(data.payload);
  });

  // Signal the parent that the listener is wired up so it can flush any
  // pending content that was queued before this script ran.
  try {
    parent.postMessage({ type: UPDATE_TYPE + ':ready', frameId: FRAME_ID }, '*');
  } catch (_) {}
})();
`;return`<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>${r}@keyframes lobe-html-fade{from{opacity:0}to{opacity:1}}.lobe-html-new{animation:lobe-html-fade 240ms ease-out both;}</style>
<style id="lobe-user-style"></style>
<script>${E}</script>
<script>${S(t)}</script>
<script>${a}</script>
</head>
<body></body>
</html>`})({background:t,frameId:m}),[e,t,m,b]),[k,j]=(0,y.useState)(!1);(0,y.useEffect)(()=>{j(!1)},[w]);let N=(0,y.useMemo)(()=>!e||b?null:$(r),[e,r,b]);(0,y.useEffect)(()=>{if(!e||!k||!N)return;let t=c.current?.contentWindow;t&&t.postMessage({frameId:m,payload:N,type:T},"*")},[e,N,k,m]),(0,y.useEffect)(()=>{let e=e=>{let t=e.data;if(t&&"object"==typeof t&&t.frameId===m&&e.source===c.current?.contentWindow){if("lobe-html-shell-update:ready"===t.type)return void j(!0);if("lobe-html-resize"===t.type){let e=Number(t.height);if(!Number.isFinite(e)||e<=0)return;let r=Math.max(e,p.current);f(e=>1>Math.abs(e-r)?e:r)}}};return window.addEventListener("message",e),()=>window.removeEventListener("message",e)},[m]);let M=(0,y.useCallback)(e=>{c.current=e,"function"==typeof i?i(e):i&&(i.current=e)},[i]);if(b)return(0,g.jsx)("div",{className:(0,x.cx)(d.fallback,a),style:l,children:"Content too large to preview inline."});let L=v??w??"",D=e?"shell":"static";return(0,g.jsx)("iframe",{className:(0,x.cx)(d.iframe,a),ref:M,sandbox:n,srcDoc:L,style:{height:h,...l},title:s},D)});D.displayName="HtmlPreviewIframe";var B=e.i(762368);let z=(0,e.i(456420).default)("expand",[["path",{d:"m15 15 6 6",key:"1s409w"}],["path",{d:"m15 9 6-6",key:"ko1vev"}],["path",{d:"M21 16v5h-5",key:"1ck2sf"}],["path",{d:"M21 8V3h-5",key:"1qoq8a"}],["path",{d:"M3 16v5h5",key:"1t08am"}],["path",{d:"m3 21 6-6",key:"wwnumi"}],["path",{d:"M3 8V3h5",key:"1ln10m"}],["path",{d:"M9 9 3 3",key:"v551iv"}]]),A=x.keyframes`
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
`,O=(0,x.createStyles)(({css:e,cssVar:t,isDarkMode:r})=>({loadingBackdrop:e`
    pointer-events: none;

    position: absolute;
    z-index: 1;
    inset: 0;

    /* Subtle moving sheen so it doesn't look frozen. */
    background: linear-gradient(
      90deg,
      transparent 0%,
      ${r?"rgba(255, 255, 255, 0.04)":"rgba(0, 0, 0, 0.04)"} 50%,
      transparent 100%
    );
    background-repeat: no-repeat;
    background-size: 200% 100%;

    animation: ${A} 1.6s ${t.motionEaseInOut} infinite;
  `,loadingBadge:e`
    position: absolute;
    z-index: 2;
    inset-block-start: 12px;
    inset-inline-start: 12px;

    display: inline-flex;
    gap: 8px;
    align-items: center;

    padding-block: 4px;
    padding-inline: 6px 10px;
    border-radius: 999px;

    font-size: 12px;
    color: ${t.colorTextDescription};

    background: ${t.colorBgContainer};
    backdrop-filter: blur(8px);
    box-shadow: 0 0 0 1px ${t.colorBorderSecondary};
  `,loadingSource:e`
    pointer-events: none;
    overflow: hidden;
    height: 100%;

    /* Faded out so the iframe transition feels like content lighting up,
       not like one document jump-cutting to another. */
    opacity: 0.45;

    /* SyntaxHighlighter sets its own background; flatten so the shimmer
       overlay reads cleanly on top. */
    & [data-code-type='highlighter'] {
      background: transparent;
      box-shadow: none;
    }

    /* Tail-follow is layout-only — we anchor the scrollable element to
       its scrollHeight via the ref + effect; CSS just keeps the
       overflow hidden. */
    & pre,
    & code {
      background: transparent !important;
    }
  `,loadingRoot:e`
    position: relative;
    overflow: hidden;
    background: ${r?"#1f1f1f":"#fafafa"};
  `,toolbar:(0,x.cx)(c.actionsHoverCls,e`
      position: absolute;
      z-index: 2;
      inset-block-start: 8px;
      inset-inline-end: 8px;

      padding: 4px;
      border-radius: ${t.borderRadiusLG};

      opacity: 0;
      background: ${t.colorBgContainer};
      backdrop-filter: blur(8px);
      box-shadow: 0 0 0 1px ${t.colorBorderSecondary};

      transition: opacity 0.2s ${t.motionEaseOut};

      &:focus-within {
        opacity: 1;
      }
    `)})),R=async(e,t)=>{let r=new Blob([e],{type:"text/html;charset=utf-8"}),a=URL.createObjectURL(r);try{await (0,d.downloadBlob)(a,t)}finally{URL.revokeObjectURL(a)}},P=(0,y.memo)(({actionIconSize:e,actionsRender:t,animated:r,bodyRender:a,children:d,className:u,classNames:m,copyable:b=!0,defaultHeight:v,defaultMode:w="preview",downloadable:k=!0,fileName:j,language:S="html",onExpand:E,sandbox:T,shadow:C,streamingMode:L="auto",style:$,styles:A,theme:P,variant:H="filled",fullFeatured:I,showLanguage:F,defaultExpand:_,...U})=>{let V=(0,y.useMemo)(()=>(d||"").trim(),[d]),W=(0,y.useMemo)(()=>!h(V),[V]),[q,K]=(0,y.useState)(!1),[X,Y]=(0,y.useState)(!1),[G,J]=(0,y.useState)(!1),Q=(0,y.useRef)(r),Z=(0,y.useRef)(0),ee=(0,y.useRef)(null),et=(0,y.useRef)(V);(0,y.useEffect)(()=>{et.current=V},[V]),(0,y.useEffect)(()=>{r&&!Q.current&&(K(!1),Y(!1),J(!1),Z.current=0,ee.current&&(clearTimeout(ee.current),ee.current=null)),Q.current=r},[r]),(0,y.useEffect)(()=>{r&&!q&&p(V)&&K(!0)},[V,r,q]),(0,y.useEffect)(()=>{if(r&&!X){let e=V.toLowerCase();(e.includes("</head>")||e.includes("</style>"))&&Y(!0)}},[V,r,X]);let[er,ea]=(0,y.useState)(V);(0,y.useEffect)(()=>{if(!r){ee.current&&(clearTimeout(ee.current),ee.current=null),Z.current=Date.now(),ea(V);return}if(!X)return;let e=Date.now(),t=e-Z.current;if(t>=250){ee.current&&(clearTimeout(ee.current),ee.current=null),Z.current=e,ea(V);return}null===ee.current&&(ee.current=setTimeout(()=>{Z.current=Date.now(),ee.current=null,ea(et.current)},250-t))},[V,r,X]),(0,y.useEffect)(()=>()=>{ee.current&&clearTimeout(ee.current)},[]),(0,y.useEffect)(()=>{r&&!G&&X&&("live"!==L&&("auto"!==L||q)||J(!0))},[r,X,G,q,L]);let eo=!r||f(V)||G,[ei,en]=(0,y.useState)(w),el=W?"source":ei,es=(0,y.useRef)(V);(0,y.useEffect)(()=>{es.current=V},[V]);let ed=(0,y.useRef)(null);(0,y.useEffect)(()=>{if(eo)return;let e=ed.current;e&&(e.scrollTop=e.scrollHeight)},[V,eo]);let ec=(0,y.useCallback)(()=>es.current,[]),eu=(0,y.useCallback)(()=>{R(es.current,j||"preview.html")},[j]),em=(0,y.useCallback)(()=>{E?.(es.current)},[E]),eh="dark"===P?"#1f1f1f":"light"===P?"#ffffff":void 0,ef=(0,y.useMemo)(()=>(0,g.jsx)(l.default,{animated:r,className:m?.content,language:"html",style:{height:"100%",...A?.content},variant:H,children:V}),[r,m?.content,A?.content,V,H]),{styles:ep}=O(),ey=(0,y.useMemo)(()=>(0,g.jsx)(D,{animated:r,background:eh,className:m?.iframe,content:er,defaultHeight:v,sandbox:T,style:A?.iframe}),[eh,m?.iframe,A?.iframe,v,T,er]),eg=(0,y.useMemo)(()=>(0,g.jsxs)("div",{className:ep.loadingRoot,style:{height:v??400},children:[(0,g.jsx)("div",{className:ep.loadingSource,ref:ed,children:(0,g.jsx)(l.default,{animated:r,language:"html",variant:"borderless",children:V})}),(0,g.jsx)("div",{className:ep.loadingBackdrop}),(0,g.jsxs)("div",{className:ep.loadingBadge,children:[(0,g.jsx)(N,{size:16}),(0,g.jsx)("span",{children:"Preparing preview…"})]})]}),[r,v,ep,V]),ex="preview"===el?eo?ey:eg:ef,eb=(0,y.useMemo)(()=>a?a({content:V,mode:el,originalNode:ex}):ex,[a,ex,el,V]),ev=(0,y.useMemo)(()=>[{label:"Preview",value:"preview"},{label:"Source",value:"source"}],[]),ew=e||"small",ek=(0,g.jsxs)(g.Fragment,{children:[!W&&(0,g.jsx)(M.default,{options:ev,size:"small",value:el,onChange:e=>en(e)}),b&&(0,g.jsx)(s.default,{content:ec,size:ew}),k&&(0,g.jsx)(n.default,{icon:B.Download,size:ew,title:"Download HTML",onClick:eu}),E&&(0,g.jsx)(n.default,{icon:z,size:ew,title:"Open full preview",onClick:em})]}),ej=t?t({actionIconSize:ew,content:V,getContent:ec,mode:el,originalNode:ek,setMode:en}):ek;return(0,g.jsxs)("div",{className:(0,x.cx)((0,c.variants)({shadow:C,variant:H}),u),"data-code-type":"html-preview","data-html-preview-language":S,style:$,...U,children:[(0,g.jsx)(o.default,{horizontal:!0,align:"center",className:(0,x.cx)(ep.toolbar,m?.header),flex:"none",gap:4,style:A?.header,onClick:i.stopPropagation,children:ej}),eb]})});P.displayName="HtmlPreview";var H=e.i(185345),I=e.i(302573),F=e.i(585151),_=e.i(716327),U=e.i(867927);let V=(0,y.memo)(({fileName:e,language:t,showLanguage:r})=>r?(0,g.jsxs)(o.default,{horizontal:!0,align:"center",className:"languageTitle",flex:1,gap:4,justify:"flex-start",paddingInline:8,children:[(0,g.jsx)(F.default,{fallbackUnknownType:!1,filename:e||t,size:18,type:"file",variant:"raw"}),(0,g.jsx)(I.default,{ellipsis:!0,fontSize:13,children:e||"Mermaid"})]}):null,(e,t)=>e.fileName===t.fileName&&e.language===t.language&&e.showLanguage===t.showLanguage),W=(0,y.memo)(({showLanguage:e,styles:t,classNames:r,content:a,children:l,className:d,copyable:u,actionsRender:m,style:h,variant:f,shadow:p,language:b="mermaid",fileName:v,defaultExpand:w=!0,...k})=>{let[j,N]=(0,y.useState)(w),M=(0,y.useRef)(a);(0,y.useEffect)(()=>{M.current=a},[a]);let S=(0,y.useCallback)(()=>M.current,[]),E=(0,y.useMemo)(()=>u?(0,g.jsx)(s.default,{content:S,size:"small"}):null,[u,S]),T=(0,y.useMemo)(()=>m?m({actionIconSize:"small",content:a,getContent:S,originalNode:E}):E,[m,a,S,E]),C=(0,y.useCallback)(()=>{N(e=>!e)},[]);return(0,g.jsxs)(o.default,{className:(0,x.cx)((0,c.variants)({shadow:p,variant:f}),d),"data-code-type":"mermaid",style:h,...k,children:[(0,g.jsxs)(o.default,{horizontal:!0,align:"center",className:(0,x.cx)((0,c.headerVariants)({variant:f}),r?.header),justify:"space-between",style:t?.header,onClick:C,children:[(0,g.jsx)(V,{fileName:v,language:b,showLanguage:e}),(0,g.jsxs)(o.default,{horizontal:!0,align:"center",flex:"none",gap:4,onClick:i.stopPropagation,children:[(0,g.jsx)(o.default,{horizontal:!0,align:"center",className:"panel-actions",flex:"none",gap:4,children:T}),(0,g.jsx)(n.default,{icon:j?_.ChevronDown:U.ChevronRight,size:"small",onClick:C})]})]}),(0,g.jsx)(o.default,{className:(0,x.cx)((0,c.bodyVariants)({expand:j}),r?.body),style:t?.body,children:l})]})});var q=e.i(869712);let K=[{displayName:"Lobe Theme",id:"lobe-theme"},{background:"#fbf9ff",displayName:"Mermaid Default",id:"default"},{background:"#fffcf8",displayName:"Mermaid Base",id:"base"},{background:"#000",displayName:"Mermaid Dark",id:"dark"},{background:"#f9ffeb",displayName:"Mermaid Forest",id:"forest"},{background:"#fff",displayName:"Mermaid Neutral",id:"neutral"}];var X=e.i(168726);let Y=new Map,G=null,J=()=>"u"<typeof window?Promise.resolve(null):(G||(G=e.A(695802).then(e=>e.default)),G),Q=(e,t,r="strict")=>({fontFamily:e.fontFamilyCode,gantt:{useWidth:1920},securityLevel:r,startOnLoad:!1,theme:t||(e.isDarkMode?"dark":"neutral"),themeVariables:t?void 0:{errorBkgColor:e.colorTextDescription,errorTextColor:e.colorTextDescription,fontFamily:e.fontFamily,lineColor:e.colorTextSecondary,mainBkg:e.colorBgContainer,noteBkgColor:e.colorInfoBg,noteTextColor:e.colorInfoText,pie1:e.geekblue,pie2:e.colorWarning,pie3:e.colorSuccess,pie4:e.colorError,primaryBorderColor:e.colorBorder,primaryColor:e.colorBgContainer,primaryTextColor:e.colorText,secondaryBorderColor:e.colorInfoBorder,secondaryColor:e.colorInfoBg,secondaryTextColor:e.colorInfoText,tertiaryBorderColor:e.colorSuccessBorder,tertiaryColor:e.colorSuccessBg,tertiaryTextColor:e.colorSuccessText,textColor:e.colorText}});var Z=e.i(172345),ee=e.i(851197),et=e.i(248857);function er(e){return(0,Z.kebabCase)((0,et.normalizeForCase)((0,ee.deburr)(e)))}let ea=(0,y.memo)(({children:e,className:t,fallbackClassName:r,ref:a,style:o,theme:i,variant:n})=>{let l="lobe-theme"===i||!i,s=(0,y.useMemo)(()=>{if(!l)return K.find(e=>e.id===i)?.background},[l,i]),d=((e,{id:t,theme:r,securityLevel:a})=>{let o=(0,x.useTheme)(),[i,n]=(0,y.useState)(""),l=(0,y.useMemo)(()=>Q(o,r,a),[o.fontFamilyCode,o.isDarkMode,o.colorTextDescription,o.fontFamily,o.colorTextSecondary,o.colorBgContainer,o.colorInfoBg,o.colorInfoText,o.geekblue,o.colorWarning,o.colorSuccess,o.colorError,o.colorBorder,o.colorInfoBorder,o.colorSuccessBorder,o.colorSuccessBg,o.colorSuccessText,o.colorText,r,a]),s=(0,y.useMemo)(()=>{let a=e.length<1e4?e:X.Md5.hashStr(e);return[t,r||(o.isDarkMode?"d":"l"),a].filter(Boolean).join("-")},[e,t,o.isDarkMode,r]);return(0,y.useEffect)(()=>{let r=Y.get(s);if(r)return void r.then(e=>{n(e)}).catch(()=>{});let a=(async()=>{try{let r=await J();if(!r)return"";if(await r.parse(e)){r.initialize(l);let{svg:a}=await r.render(t,e);return a}throw Error("Mermaid 语法无效")}catch(e){return console.error("Mermaid 解析错误:",e),""}})();if(Y.set(s,a),Y.size>500){let e=Math.floor(100);for(let t of Array.from(Y.keys()).slice(0,e))Y.delete(t)}a.then(e=>{Y.get(s)===a&&n(e)}).catch(()=>{Y.get(s)===a&&Y.delete(s)})},[s,e,t,l]),i})(e??"",{id:er(`mermaid-${(0,y.useId)()}`),theme:l?void 0:i}),c=!d,[u,m]=(0,y.useState)();(0,y.useEffect)(()=>()=>{u&&URL.revokeObjectURL(u)},[u]),(0,y.useEffect)(()=>{if(c||!d)return;let e=d;if("u">typeof window&&"u">typeof navigator&&navigator.userAgent.includes("Firefox")){let t=new DOMParser().parseFromString(d,"image/svg+xml"),r=t.documentElement;if(r&&r.hasAttribute("viewBox")){let a=r.getAttribute("viewBox").split(" ");Array.isArray(a)&&4===a.length&&(r.setAttribute("width",a[2]),r.setAttribute("height",a[3])),e=new XMLSerializer().serializeToString(t)}}let t=new Blob([e],{type:"image/svg+xml"});m(URL.createObjectURL(t))},[c,d]);let h={background:"filled"===n?s:void 0,margin:0,minWidth:300,padding:16*("borderless"!==n),position:"relative",width:"100%",...o};return u?(0,g.jsx)(q.default,{alt:"mermaid",className:t,maxHeight:480,minWidth:300,objectFit:"contain",ref:a,src:u,style:h,variant:"borderless",width:"100%"}):(0,g.jsx)("div",{className:r,style:o,children:(0,g.jsx)("div",{style:{padding:16},children:"Loading..."})})});ea.displayName="StaticMermaid";let eo=(0,y.memo)(({children:e,className:t,fallbackClassName:r,ref:a,style:o,theme:i,variant:n})=>{let l="lobe-theme"===i||!i,s=(0,y.useMemo)(()=>{if(!l)return K.find(e=>e.id===i)?.background},[l,i]),d=((e,{enabled:t=!0,id:r,theme:a})=>{let o=(0,x.useTheme)(),[i,n]=(0,y.useState)(""),l=(0,y.useRef)(""),s=(0,y.useRef)(e),d=(0,y.useRef)(void 0),c=(0,y.useMemo)(()=>Q(o,a),[o.fontFamilyCode,o.isDarkMode,o.colorTextDescription,o.fontFamily,o.colorTextSecondary,o.colorBgContainer,o.colorInfoBg,o.colorInfoText,o.geekblue,o.colorWarning,o.colorSuccess,o.colorError,o.colorBorder,o.colorInfoBorder,o.colorSuccessBorder,o.colorSuccessBg,o.colorSuccessText,o.colorText,a]);return(0,y.useEffect)(()=>{s.current=e},[e]),(0,y.useEffect)(()=>{if(!t){n(""),l.current="";let e=d.current;e&&clearTimeout(e);return}let e=s.current;if(e===l.current&&i)return;let a=d.current;return a&&clearTimeout(a),d.current=setTimeout(async()=>{let t=s.current;if(t===e)try{let e=await J();if(!e)return;if(await e.parse(t)){e.initialize(c);let{svg:a}=await e.render(r,t);s.current===t&&(n(a),l.current=t)}}catch(e){t===s.current&&console.error("Mermaid 解析错误:",e)}},300),()=>{let e=d.current;e&&clearTimeout(e)}},[t,e,r,c,i]),i})(e??"",{enabled:!0,id:er(`mermaid-${(0,y.useId)()}`),theme:l?void 0:i}),c=!d,[u,m]=(0,y.useState)();(0,y.useEffect)(()=>()=>{u&&URL.revokeObjectURL(u)},[u]),(0,y.useEffect)(()=>{if(c||!d)return void m(void 0);let e=d;if("u">typeof window&&"u">typeof navigator&&navigator.userAgent.includes("Firefox")){let t=new DOMParser().parseFromString(d,"image/svg+xml"),r=t.documentElement;if(r&&r.hasAttribute("viewBox")){let a=r.getAttribute("viewBox").split(" ");Array.isArray(a)&&4===a.length&&(r.setAttribute("width",a[2]),r.setAttribute("height",a[3])),e=new XMLSerializer().serializeToString(t)}}let t=new Blob([e],{type:"image/svg+xml"});m(URL.createObjectURL(t))},[c,d]);let h={background:"filled"===n?s:void 0,margin:0,minWidth:300,padding:16*("borderless"!==n),position:"relative",width:"100%",...o};return u?(0,g.jsx)(q.default,{alt:"mermaid",className:t,maxHeight:480,minWidth:300,objectFit:"contain",ref:a,src:u,style:h,variant:"borderless",width:"100%"}):(0,g.jsx)("div",{className:r,style:o,children:(0,g.jsx)("div",{style:{padding:16},children:"Rendering..."})})});eo.displayName="StreamMermaid";var ei=e.i(225913);let en=x.keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`,el=(0,x.createStaticStyles)(({css:e,cssVar:t})=>({animated:e`
      img {
        opacity: 1;
        animation: ${en} 0.5s ease-in-out;
      }
    `,mermaid:(0,x.cx)("ant-mermaid-mermaid",e`
        img {
          display: block;
          width: 100%;
          height: auto;
        }
      `),noBackground:e`
      img {
        background: transparent !important;
      }
    `,noPadding:e`
      padding: 0;
    `,padding:e`
      padding: 16px;
    `,root:e`
      direction: ltr;
      margin: 0;
      padding: 0;
      text-align: start;
    `,unmermaid:e`
      color: ${t.colorTextDescription};
    `})),es=(0,ei.cva)(el.root,{defaultVariants:{animated:!1,mermaid:!0,showBackground:!1,variant:"borderless"},variants:{mermaid:{false:el.unmermaid,true:el.mermaid},showBackground:{false:el.noBackground,true:null},animated:{true:el.animated,false:null},variant:{filled:el.padding,outlined:el.padding,borderless:el.noPadding}}}),ed=(0,y.memo)(({animated:e,children:t,className:r,fallbackClassName:a,ref:o,style:i,theme:n,variant:l="borderless"})=>{let s="lobe-theme"===n||!n,d=!s&&"filled"===l,c=s?void 0:n,u=(0,x.cx)(es({animated:e,mermaid:!0,showBackground:d,variant:l}),r),m=(0,x.cx)(es({animated:e,mermaid:!1,showBackground:d,variant:l}),a);return e?(0,g.jsx)(eo,{className:u,fallbackClassName:m,ref:o,style:i,theme:c,variant:l,children:t}):(0,g.jsx)(ea,{className:u,fallbackClassName:m,ref:o,style:i,theme:c,variant:l,children:t})},(e,t)=>e.children===t.children&&e.animated===t.animated);ed.displayName="SyntaxMermaid";let ec=(0,y.memo)(({actionIconSize:e,animated:t,bodyRender:r,children:a,classNames:i,className:n,copyable:l=!0,defaultExpand:d=!0,fileName:u,fullFeatured:m,language:h="mermaid",actionsRender:f,shadow:p,showLanguage:b=!0,style:v,styles:w,theme:k,variant:j="filled",...N})=>{let M=a.trim(),S=(0,y.useRef)(M);(0,y.useEffect)(()=>{S.current=M},[M]);let E=(0,y.useCallback)(()=>S.current,[]),T=(0,y.useMemo)(()=>l?(0,g.jsx)(s.default,{content:E,size:e||{blockSize:28,size:16}}):null,[e,l,E]),C=(0,y.useMemo)(()=>f?f({actionIconSize:e,content:M,getContent:E,originalNode:T}):T,[e,f,E,T,M]),L=(0,y.useMemo)(()=>(0,g.jsx)(ed,{animated:t,className:i?.content,style:w?.content,theme:k,variant:j,children:M}),[t,k,M,j,i?.content,w?.content]),$=(0,y.useMemo)(()=>r?r({content:M,originalNode:L}):L,[r,L,M]);return m?(0,g.jsx)(W,{actionsRender:f,className:n,classNames:i,content:M,copyable:l,defaultExpand:d,fileName:u,language:h,shadow:p,showLanguage:b,style:v,styles:w,variant:j,...N,children:$}):(0,g.jsxs)("div",{className:(0,x.cx)((0,c.variants)({shadow:p,variant:j}),n),"data-code-type":"mermaid",style:v,...N,children:[(0,g.jsx)(o.default,{horizontal:!0,align:"center",className:c.styles.actions,flex:"none",gap:4,children:C}),b&&(0,g.jsx)(H.default,{className:c.styles.lang,children:h.toLowerCase()}),$]})});ec.displayName="Mermaid";var eu=e.i(450156);let em=(0,x.createStaticStyles)(({css:e})=>({container:e`
    overflow: hidden;
    margin-block: calc(var(--lobe-markdown-margin-multiple) * 0.5em);
    border-radius: calc(var(--lobe-markdown-border-radius) * 1px);
    box-shadow: 0 0 0 1px var(--lobe-markdown-border-color) inset;
  `})),eh=({fullFeatured:e,fileName:t,allowChangeLanguage:o,language:i=r.FALLBACK_LANG,children:n,className:l,style:s,variant:d="filled",icon:c,theme:u,...m})=>(0,g.jsx)(a.default,{allowChangeLanguage:o,className:(0,x.cx)(em.container,l),fileName:t,fullFeatured:e,icon:c,language:i,style:s,theme:u,variant:d,...m,children:n});eh.displayName="MdxPre",e.s(["PreHtmlPreview",0,({animated:e,fullFeatured:t,children:r,className:a,style:o,variant:i="filled",theme:n,...l})=>(0,g.jsx)(P,{animated:e,className:(0,x.cx)(em.container,a),fullFeatured:t,style:o,theme:n,variant:i,...l,children:r}),"PreMermaid",0,({animated:e,fullFeatured:t,children:r,className:a,style:o,variant:i="filled",theme:n,...l})=>(0,g.jsx)(ec,{animated:e,className:(0,x.cx)(em.container,a),fullFeatured:t,style:o,theme:n,variant:i,...l,children:r}),"PreSingleLine",0,({language:e=r.FALLBACK_LANG,children:t,className:a,style:o,variant:i="filled",...n})=>(0,g.jsx)(eu.default,{className:(0,x.cx)(em.container,a),"data-code-type":"highlighter",language:e,style:o,variant:i,...n,children:t}),"default",0,eh],975409)},513650,e=>{"use strict";var t=e.i(382162),r=e.i(271645),a=e.i(843476);let o=e=>{let o=(0,r.use)(t.ConfigContext)?.aAs||"a";return(0,a.jsx)((0,r.useMemo)(()=>(0,r.memo)(e=>(0,r.createElement)(o,e)),[o]),{...e})};o.displayName="A",e.s(["default",0,o])},42184,282786,e=>{"use strict";var t=e.i(513650),r=e.i(184283);let a=(0,r.createStaticStyles)(({css:e,cssVar:t})=>({container:e`
    display: inline-flex;
    line-height: var(--lobe-markdown-line-height);
    vertical-align: baseline;

    a {
      color: inherit;
    }
  `,link:e`
    cursor: pointer;
    color: ${t.colorTextSecondary};

    :hover {
      color: ${t.colorText};
    }
  `,supContainer:e`
    vertical-align: super;
  `,url:e`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;

    max-width: 400px;

    text-overflow: ellipsis;
  `}));var o=e.i(206868),i=e.i(492435),n=e.i(271645),l=e.i(843476),s=e.i(829672);e.s(["Popover",()=>s.default],282786);var s=s,d=e.i(732176);let c=({children:e,usePopover:t,title:r,alt:c,url:u})=>{let[m,h,f]=(0,n.useMemo)(()=>{try{let e=new URL(u),t=e.host,a=r;r===u&&(a="");let o=e.hostname.replace("www.","");return a||(o=u),[a,o,t]}catch{return[r,u,u]}},[u,r]);return t&&u?(0,l.jsx)(s.default,{arrow:!1,trigger:"hover",content:(0,l.jsxs)(o.default,{gap:8,children:[(0,l.jsxs)(o.default,{horizontal:!0,className:a.link,gap:12,justify:"space-between",onClick:()=>{window.open(u,"_blank")},children:[(0,l.jsxs)(o.default,{horizontal:!0,align:"center",gap:4,children:[(0,l.jsx)("img",{alt:c||r||u,height:14,src:`https://icons.duckduckgo.com/ip3/${f}.ico`,style:{borderRadius:4},width:14}),(0,l.jsx)("span",{className:a.url,children:h})]}),(0,l.jsx)(i.default,{icon:d.ArrowRightIcon})]}),m]}),children:e}):e};c.displayName="MdxPopoverPanel";var u=e.i(725345);let m=({children:e,href:t,inSup:o,id:i,citationDetail:n})=>{let s=!(0,u.isEmpty)(n),d=n?.url||t;return o?(0,l.jsx)(c,{...n,usePopover:s,children:(0,l.jsx)("span",{className:a.container,children:(0,l.jsx)("a",{"aria-describedby":"footnote-label","data-footnote-ref":"true",href:d,id:i,rel:"noreferrer",target:n?.url?"_blank":void 0,children:e})})}):(0,l.jsx)(c,{...n,usePopover:s,children:(0,l.jsx)("sup",{className:(0,r.cx)(a.container,a.supContainer),children:d?(0,l.jsx)("a",{"aria-describedby":"footnote-label","data-footnote-ref":!0,href:d,rel:"noreferrer",target:"_blank",children:e}):(0,l.jsx)("span",{"aria-describedby":"footnote-label","data-footnote-ref":!0,children:e})})})};m.displayName="MdxCitation";let h=({href:e,target:r,citations:a,...o})=>{if(o["data-footnote-ref"])return(0,l.jsx)(m,{inSup:!0,citationDetail:(e=>{let t;if("string"==typeof e){try{t=JSON.parse(e)}catch{return}return t}})(o["data-link"]),href:e,id:o.id,children:o.children});let i=e?.match(/citation-(\d+)/);if(i){let e=Number.parseInt(i[1])-1,t=a?.[e];return(0,l.jsx)(m,{citationDetail:t,id:i[1],children:i[1]})}let n=e?.startsWith("http");return(0,l.jsx)(t.default,{href:e,target:r||n?"_blank":void 0,...o})};h.displayName="MdxLink",e.s(["default",0,h],42184)},743426,e=>{"use strict";var t=e.i(206868),r=e.i(149167),a=e.i(58125),o=e.i(184283),i=e.i(225913);let n="lobe-video-mask",l=(0,o.createStaticStyles)(({css:e,cssVar:t})=>{let r=e`
    pointer-events: none;

    position: absolute;
    z-index: 1;
    inset: 0;

    width: 100%;
    height: 100%;

    opacity: 0;
    background: ${t.colorBgMask};

    transition: opacity 0.2s ease;
  `;return{borderless:a.staticStylish.variantBorderlessWithoutHover,filled:(0,o.cx)(a.staticStylish.variantOutlinedWithoutHover,a.staticStylish.variantFilledWithoutHover),mask:(0,o.cx)(n,r),outlined:a.staticStylish.variantOutlinedWithoutHover,root:e`
      position: relative;

      overflow: hidden;

      width: 100%;
      min-width: var(--video-min-width, unset);
      max-width: var(--video-max-width, 100%);
      height: auto;
      min-height: var(--video-min-height, unset);
      max-height: var(--video-max-height, 100%);
      margin-block: 0 1em;
      border-radius: ${t.borderRadius};

      background: ${t.colorFillTertiary};

      &:hover {
        [class*='${n}'] {
          opacity: 1;
        }
      }
    `,video:e`
      cursor: pointer;
      width: 100%;
    `}}),s=(0,i.cva)(l.root,{defaultVariants:{variant:"filled"},variants:{variant:{filled:l.filled,outlined:l.outlined,borderless:l.borderless}}});var d=e.i(271645),c=e.i(843476),u=e.i(981339),m=e.i(57095);let h=(0,d.memo)(({ref:e,preload:a="auto",src:i,style:n,classNames:h,className:f,maxHeight:p="100%",maxWidth:y="100%",minHeight:g,minWidth:x,onEnded:b,onPause:v,onPlay:w,onPlaying:k,width:j,height:N,onMouseEnter:M,styles:S,onMouseLeave:E,preview:T=!0,isLoading:C,variant:L="filled",autoPlay:$,...D})=>{let[B,z]=(0,d.useState)(!1),[A,O]=(0,d.useState)(!1),R=(0,d.useMemo)(()=>{let e={};return void 0!==p&&(e["--video-max-height"]="number"==typeof p?`${p}px`:p),void 0!==y&&(e["--video-max-width"]="number"==typeof y?`${y}px`:y),void 0!==g&&(e["--video-min-height"]="number"==typeof g?`${g}px`:g),void 0!==x&&(e["--video-min-width"]="number"==typeof x?`${x}px`:x),e},[p,y,g,x]);return C?(0,c.jsx)(u.Skeleton.Avatar,{active:!0,style:{borderRadius:o.cssVar.borderRadiusLG,height:N,maxHeight:p,maxWidth:y,minHeight:g,minWidth:x,width:j}}):(0,c.jsxs)(t.default,{className:(0,o.cx)(s({variant:L}),f,h?.wrapper),height:N,ref:e,width:j,style:{...R,...n,...S?.wrapper},children:[T&&!B&&(0,c.jsx)(t.default,{align:"center",className:(0,o.cx)(l.mask,h?.mask),justify:"center",style:S?.mask,children:(0,c.jsx)(r.default,{color:"#fff",icon:m.PlayIcon,variant:"filled"})}),(0,c.jsx)("video",{autoPlay:$,className:(0,o.cx)(l.video,h?.video),controls:A,height:N,preload:a,width:j,style:{height:"auto",maxWidth:"100%",...S?.video},onEnded:e=>{z(!1),b?.(e)},onMouseEnter:e=>{O(!0),M?.(e)},onMouseLeave:e=>{O(!1),E?.(e)},onPause:e=>{z(!1),v?.(e)},onPlay:e=>{z(!0),w?.(e)},onPlaying:e=>{z(!0),k?.(e)},...D,children:(0,c.jsx)("source",{src:i})})]})});h.displayName="Video";let f=({style:e,...t})=>(0,c.jsx)(h,{preview:!1,style:{borderRadius:"calc(var(--lobe-markdown-border-radius) * 1px)",marginBlock:"calc(var(--lobe-markdown-margin-multiple) * 1em)",...e},...t});f.displayName="MdxVdieo",e.s(["default",0,f],743426)},853138,810818,e=>{"use strict";let t=(0,e.i(456420).default)("triangle-alert",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);e.s(["AlertTriangle",0,t],853138);var r=e.i(343420);e.s(["Info",()=>r.default],810818)},108926,e=>{"use strict";var t=e.i(843476),r=e.i(834101),a=e.i(184283),o=e.i(172345),i=e.i(456420);let n=(0,i.default)("heading-2",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1",key:"9jr5yi"}]]),l=(0,i.default)("heading-3",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2",key:"68ncm8"}],["path",{d:"M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2",key:"1ejuhz"}]]),s=(0,i.default)("heading-4",[["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17 10v3a1 1 0 0 0 1 1h3",key:"tj5zdr"}],["path",{d:"M21 10v8",key:"1kdml4"}],["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}]]),d=(0,i.default)("heading-5",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17 13v-3h4",key:"1nvgqp"}],["path",{d:"M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17",key:"2nebdn"}]]);var c=e.i(271645),u=e.i(347782),m=e.i(58687);let h=e=>{let t="";return c.Children.forEach(e,e=>{"string"==typeof e||"number"==typeof e?t+=e:(0,c.isValidElement)(e)&&e.props.children&&(t+=h(e.props.children))}),t},f={h2:n,h3:l,h4:s,h5:d},p=(0,a.createStaticStyles)(({css:e,cx:t})=>({anchor:t("title-anchor",e`
        display: none;
        margin-inline-start: 0.5rem;
        color: ${a.cssVar.colorTextDescription} !important;
      `),container:e`
      &:hover {
        .title-anchor {
          display: inline;
        }
      }
    `})),y=e=>({children:i,className:n,style:l,...s})=>{let{setToc:d,setFinished:y}=(0,m.useToc)(),g=(0,c.useMemo)(()=>h(i),[i]),x=(0,o.kebabCase)(g);return((0,c.useEffect)(()=>{d&&(("h2"===e||"h3"===e)&&d?.((t=[])=>[...t,{href:`#${x}`,level:"h2"===e?2:3,title:g}]),y())},[x]),"h1"===e)?(0,t.jsx)(e,{style:{color:a.cssVar.colorText,...l},...s,id:x,children:i}):(0,t.jsxs)(e,{className:(0,a.cx)(p.container,n),style:{color:a.cssVar.colorText,...l},...s,id:x,children:[i,(0,t.jsx)(u.default,{"aria-label":"Permalink for this section",className:p.anchor,href:`#${x}`,style:{scrollMarginTop:96},children:(0,t.jsx)(r.Icon,{icon:f[e]})})]})},g=y("h1"),x=y("h2"),b=y("h3"),v=y("h4"),w=y("h5");e.s(["H1",0,g,"H2",0,x,"H3",0,b,"H4",0,v,"H5",0,w,"styles",0,p],108926)}]);