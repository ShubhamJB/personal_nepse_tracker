(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,546061,e=>{"use strict";var t=e.i(201175);e.s(["LobeHub",()=>t.default])},638464,e=>{"use strict";var t=e.i(58125);e.s(["lobeStaticStylish",()=>t.staticStylish])},486642,e=>{"use strict";var t=e.i(843476),r=e.i(128709),n=e.i(184283),i=e.i(271645);let a=(0,n.createStaticStyles)(({css:e,cssVar:t})=>({desc:e`
    font-size: 16px;
    color: ${t.colorTextDescription};
    ${n.responsive.sm} {
      text-align: center;
    }
  `,subtitle:e`
    font-size: 20px;
    font-weight: 400;
    line-height: 1.6;
    ${n.responsive.sm} {
      font-size: 16px;
    }
  `,title:e`
    margin: 0;

    font-size: 32px;
    font-weight: 700;
    line-height: 1.6;
    text-align: center;

    box-decoration-break: clone;

    -webkit-text-fill-color: transparent;
    ${n.responsive.sm} {
      font-size: 24px;
    }
  `})),o=(0,i.memo)(({children:e,className:i,...o})=>(0,t.jsx)(r.Text,{className:(0,n.cx)(a.subtitle,i),...o,children:e}));e.s(["default",0,o],486642)},748619,e=>{"use strict";var t=e.i(843476),r=e.i(128709),n=e.i(184283),i=e.i(271645);let a=(0,n.createStaticStyles)(({css:e})=>({container:e`
    flex-wrap: wrap;
    column-gap: 0.3em;

    min-height: 60px;

    font-size: 48px;
    font-weight: bold;
    line-height: 1.2;
    ${n.responsive.sm} {
      font-size: 32px;
    }
  `})),o=(0,i.memo)(({as:e="h2",children:i,className:o,...l})=>(0,t.jsx)(r.Text,{as:e,className:(0,n.cx)(a.container,o),...l,children:i}));e.s(["default",0,o])},347782,e=>{"use strict";var t=e.i(843476),r=e.i(522016),n=e.i(271645);e.s(["default",0,({prefetch:e,onMouseEnter:i,...a})=>{let o=(0,n.useRef)(!1),[,l]=(0,n.useState)(0),s=(0,n.useCallback)(e=>{o.current||l(e=>e+1),o.current=!0,i?.(e)},[i]);return(0,t.jsx)(r.default,{...a,onMouseEnter:s,prefetch:e??(!!o.current&&null)})}])},297355,e=>{"use strict";let t="%[a-f0-9]{2}",r=RegExp("("+t+")|([^%]+?)","gi"),n=RegExp("("+t+")+","gi");function i(e,t){if("string"!=typeof e||"string"!=typeof t)throw TypeError("Expected the arguments to be of type `string`");if(""===e||""===t)return[];let r=e.indexOf(t);return -1===r?[]:[e.slice(0,r),e.slice(r+t.length)]}let a=Symbol("encodeFragmentIdentifier");function o(e){if("string"!=typeof e||1!==e.length)throw TypeError("arrayFormatSeparator must be single character string")}function l(e,t){return t.encode?t.strict?encodeURIComponent(e).replaceAll(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`):encodeURIComponent(e):e}function s(e,t){if(t.decode){if("string"!=typeof e)throw TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return decodeURIComponent(e)}catch{var i=e;let t={"%FE%FF":"��","%FF%FE":"��"},a=n.exec(i);for(;a;){try{t[a[0]]=decodeURIComponent(a[0])}catch{let e=function(e){try{return decodeURIComponent(e)}catch{let t=e.match(r)||[];for(let n=1;n<t.length;n++)t=(e=(function e(t,r){try{return[decodeURIComponent(t.join(""))]}catch{}if(1===t.length)return t;r=r||1;let n=t.slice(0,r),i=t.slice(r);return Array.prototype.concat.call([],e(n),e(i))})(t,n).join("")).match(r)||[];return e}}(a[0]);e!==a[0]&&(t[a[0]]=e)}a=n.exec(i)}for(let e of(t["%C2"]="�",Object.keys(t)))i=i.replace(RegExp(e,"g"),t[e]);return i}}return e}function c(e){let t=e.indexOf("#");return -1!==t&&(e=e.slice(0,t)),e}function u(e){let t=e.indexOf("?");return -1===t?e:e.slice(0,t)}function d(e,t,r){return"string"===r&&"string"==typeof e?e:"function"==typeof r&&"string"==typeof e?r(e):"boolean"===r&&null===e||("boolean"===r&&null!==e&&("true"===e.toLowerCase()||"false"===e.toLowerCase())?"true"===e.toLowerCase():"boolean"===r&&null!==e&&("1"===e.toLowerCase()||"0"===e.toLowerCase())?"1"===e.toLowerCase():"string[]"===r&&"none"!==t.arrayFormat&&"string"==typeof e?[e]:"number[]"!==r||"none"===t.arrayFormat||Number.isNaN(Number(e))||"string"!=typeof e||""===e.trim()?"number"!==r||Number.isNaN(Number(e))||"string"!=typeof e||""===e.trim()?t.parseBooleans&&null!==e&&("true"===e.toLowerCase()||"false"===e.toLowerCase())?"true"===e.toLowerCase():t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?Number(e):e:Number(e):[Number(e)])}function p(e){let t=(e=c(e)).indexOf("?");return -1===t?"":e.slice(t+1)}function m(e,t){o((t={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,types:Object.create(null),...t}).arrayFormatSeparator);let r=function(e){let t;switch(e.arrayFormat){case"index":return(e,r,n)=>{if(t=/\[(\d*)]$/.exec(e),e=e.replace(/\[\d*]$/,""),!t){n[e]=r;return}void 0===n[e]&&(n[e]={}),n[e][t[1]]=r};case"bracket":return(e,r,n)=>{if(t=/(\[])$/.exec(e),e=e.replace(/\[]$/,""),!t){n[e]=r;return}if(void 0===n[e]){n[e]=[r];return}if(!Array.isArray(n[e])){n[e]=[n[e],r];return}n[e].push(r)};case"colon-list-separator":return(e,r,n)=>{if(t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),!t){n[e]=r;return}if(void 0===n[e]){n[e]=[r];return}if(!Array.isArray(n[e])){n[e]=[n[e],r];return}n[e].push(r)};case"comma":case"separator":return(t,r,n)=>{let i="string"==typeof r&&r.includes(e.arrayFormatSeparator)?r.split(e.arrayFormatSeparator).map(t=>s(t,e)):null===r?r:s(r,e);n[t]=i};case"bracket-separator":return(t,r,n)=>{let i=/(\[])$/.test(t);if(t=t.replace(/\[]$/,""),!i){n[t]=r?s(r,e):r;return}let a=null===r?[]:s(r,e).split(e.arrayFormatSeparator);if(void 0===n[t]){n[t]=a;return}for(let e of(Array.isArray(n[t])||(n[t]=[n[t]]),a))n[t].push(e)};default:return(e,t,r)=>{if(void 0===r[e]){r[e]=t;return}Array.isArray(r[e])?r[e].push(t):r[e]=[r[e],t]}}}(t),n=Object.create(null);if("string"!=typeof e||!(e=e.trim().replace(/^[?#&]/,"")))return n;let a=0;for(let o=0;o<=e.length;o++){if(o<e.length&&"&"!==e[o])continue;if(o===a){a=o+1;continue}let l=e.slice(a,o);a=o+1;let c=t.decode?l.replaceAll("+"," "):l,[u,d]=i(c,"=");void 0===u&&(u=c),d=void 0===d?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?d:s(d,t),r(s(u,t),d,n)}for(let[e,r]of Object.entries(n))if("object"==typeof r&&null!==r&&"string"!==t.types[e])for(let[n,i]of Object.entries(r)){let a=t.types[e],o="function"==typeof a?a:a?a.replace("[]",""):void 0;r[n]=d(i,t,o)}else"object"==typeof r&&null!==r&&"string"===t.types[e]?n[e]=Object.values(r).join(t.arrayFormatSeparator):n[e]=d(r,t,t.types[e]);return!1===t.sort?n:(!0===t.sort?Object.keys(n).sort():Object.keys(n).sort(t.sort)).reduce((e,t)=>{let r=n[t];return e[t]=r&&"object"==typeof r&&!Array.isArray(r)?function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(r):r,e},Object.create(null))}function f(e,t){if(!e)return"";o((t={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...t}).arrayFormatSeparator);let r=r=>t.skipNull&&null==e[r]||t.skipEmptyString&&""===e[r],n=function(e){switch(e.arrayFormat){case"index":return t=>(r,n)=>{let i=r.length;return void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n||(null===n?r.push(l(t,e)+"["+i+"]"):r.push(l(t,e)+"["+l(i,e)+"]="+l(n,e))),r};case"bracket":return t=>(r,n)=>(void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n||(null===n?r.push(l(t,e)+"[]"):r.push(l(t,e)+"[]="+l(n,e))),r);case"colon-list-separator":return t=>(r,n)=>(void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n||(null===n?r.push(l(t,e)+":list="):r.push(l(t,e)+":list="+l(n,e))),r);case"comma":case"separator":case"bracket-separator":{let t="bracket-separator"===e.arrayFormat?"[]=":"=";return r=>(n,i)=>(void 0===i||e.skipNull&&null===i||e.skipEmptyString&&""===i||((i=null===i?"":i,0===n.length)?n.push([l(r,e),t,l(i,e)].join("")):n.push(l(i,e))),n)}default:return t=>(r,n)=>(void 0===n||e.skipNull&&null===n||e.skipEmptyString&&""===n||(null===n?r.push(l(t,e)):r.push(l(t,e)+"="+l(n,e))),r)}}(t),i={};for(let[t,n]of Object.entries(e))r(t)||(i[t]=n);let a=Object.keys(i);return!1!==t.sort&&a.sort(t.sort),a.map(r=>{let i=e[r];if(t.replacer&&void 0===(i=t.replacer(r,i))||void 0===i)return"";if(null===i)return l(r,t);if(Array.isArray(i)){if(0===i.length&&"bracket-separator"===t.arrayFormat)return l(r,t)+"[]";let e=i;t.replacer&&(e=i.map((e,n)=>t.replacer(`${r}[${n}]`,e)).filter(e=>void 0!==e));let a=e.reduce(n(r),[]),o=["comma","separator","bracket-separator"].includes(t.arrayFormat)?t.arrayFormatSeparator:"&";return a.join(o)}return l(r,t)+"="+l(i,t)}).filter(e=>e.length>0).join("&")}function g(e,t){t={decode:!0,...t};let[r,n]=i(e,"#");return void 0===r&&(r=e),{url:u(r??""),query:m(p(e),t),...t&&t.parseFragmentIdentifier&&n?{fragmentIdentifier:s(n,t)}:{}}}function h(e,t){var r;let n,i;t={encode:!0,strict:!0,[a]:!0,...t};let o=u(c(e.url))||"",l=f({...m(p(e.url),{sort:!1,...t}),...e.query},t);l&&=`?${l}`;let s=(r=e.url,n="",-1!==(i=r.indexOf("#"))&&(n=r.slice(i)),n);if("string"==typeof e.fragmentIdentifier){let r=new URL(o,"https://query-string.invalid");r.hash=e.fragmentIdentifier,s=t[a]?r.hash:`#${e.fragmentIdentifier}`}return`${o}${l}${s}`}function y(e,t,r){let{url:n,query:i,fragmentIdentifier:o}=g(e,r={parseFragmentIdentifier:!0,[a]:!1,...r});return h({url:n,query:function(e,t){let r={};if(Array.isArray(t))for(let n of t){let t=Object.getOwnPropertyDescriptor(e,n);t?.enumerable&&Object.defineProperty(r,n,t)}else for(let n of Reflect.ownKeys(e)){let i=Object.getOwnPropertyDescriptor(e,n);if(i.enumerable){let a=e[n];t(n,a,e)&&Object.defineProperty(r,n,i)}}return r}(i,t),fragmentIdentifier:o},r)}e.s(["exclude",0,function(e,t,r){if(Array.isArray(t)){let n=new Set(t);return y(e,e=>!n.has(e),r)}return y(e,(e,r)=>!t(e,r),r)},"extract",0,p,"parse",0,m,"parseUrl",0,g,"pick",0,y,"stringify",0,f,"stringifyUrl",0,h],681324);var w=e.i(681324);e.s(["default",0,w],297355)},484479,e=>{"use strict";let t=(0,e.i(456420).default)("download",[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]);e.s(["default",0,t])},923388,e=>{"use strict";var t=e.i(484479);e.s(["DownloadIcon",()=>t.default])},924886,576792,e=>{"use strict";var t,r=e.i(271645);let n=async()=>{try{let e=navigator.userAgentData;if(!e?.getHighEntropyValues)return"unknown";let t=await e.getHighEntropyValues(["architecture"]),r=String(t.architecture||"").toLowerCase();if(r.includes("arm"))return"apple-silicon";if(r.includes("x86"))return"intel"}catch{}return"unknown"};e.s(["usePlatformDetection",0,()=>{let[e,t]=(0,r.useState)({macArchitecture:"unknown",platform:"unknown"});return(0,r.useEffect)(()=>{let e,r,i=!1,a=(e=window.navigator.userAgent.toLowerCase(),r=window.navigator.platform?.toLowerCase()||"",/iphone|ipad|ipod/.test(e)||r.includes("mac")&&"ontouchend"in document?{platform:"ios"}:e.includes("android")?{platform:"android"}:e.includes("mac")||r.includes("mac")||e.includes("darwin")?{macArchitecture:"unknown",platform:"mac"}:e.includes("win")||r.includes("win")||e.includes("windows")?{platform:"win"}:e.includes("linux")||r.includes("linux")||e.includes("x11")?{platform:"linux"}:{platform:"unknown"});return t(a),"mac"===a.platform&&(async()=>{let e=await n(),r="unknown"!==e?e:(()=>{try{let e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");if(!t)return"unknown";let r=t.getExtension("WEBGL_debug_renderer_info");if(!r)return"unknown";let n=String(t.getParameter(r.UNMASKED_RENDERER_WEBGL)||"");if(/apple\s*(m\d|gpu|silicon)/i.test(n))return"apple-silicon";if(/intel/i.test(n)||/(amd|radeon|ati)/i.test(n))return"intel"}catch{}return"unknown"})();i||"unknown"!==r&&t(e=>"mac"===e.platform?{...e,macArchitecture:r}:e)})(),()=>{i=!0}},[]),e}],924886);var i=e.i(297355),a=((t={}).Android="android",t.Linux="linux",t.MacosAppleSilicon="macosAppleSilicon",t.MacosIntel="macosIntel",t.Windows="windows",t.iOS="ios",t);let o=new class{latestEndpoint="https://app.lobehub.com/api/desktop/latest";getApiType=e=>{switch(e){case"macosAppleSilicon":return"mac-arm";case"macosIntel":return"mac-intel";case"windows":return"windows";case"linux":return"linux";case"ios":case"android":return null}};getLatestDesktopRelease=async e=>{let t=await fetch(i.default.stringifyUrl({query:{as_json:1},url:this.latestEndpoint}),{signal:e});if(!t.ok)throw Error(`Failed to fetch desktop releases: ${t.status}`);return t.json()};getPlatformDownloadUrl=e=>{if("ios"===e)return"https://apps.apple.com/app/id6749615954";if("android"===e)return"https://play.google.com/store/apps/details?id=com.lobehub.app";let t=this.getApiType(e);return t?i.default.stringifyUrl({query:{type:t},url:this.latestEndpoint}):"/downloads"};getPlatformDownloadPage=e=>{switch(e.platform){case"ios":return"https://apps.apple.com/app/id6749615954";case"android":return"https://play.google.com/store/apps/details?id=com.lobehub.app";case"mac":return"/downloads/mac";case"win":return"/downloads/win";case"linux":return"/downloads/linux";default:return"/downloads"}};getPlatformDownloadPageLegacy=e=>{switch(e){case"mac":return"/downloads/mac";case"win":return"/downloads/win";case"linux":return"/downloads/linux";default:return"/downloads"}};getRecommendedDownloadPlatform=e=>{switch(e.platform){case"ios":return"ios";case"android":return"android";case"mac":if("intel"===e.macArchitecture)return"macosIntel";if("apple-silicon"===e.macArchitecture);return"macosAppleSilicon";case"win":return"windows";case"linux":return"linux";default:return null}};getRecommendedDownloadPlatformLegacy=e=>{switch(e){case"mac":return"macosAppleSilicon";case"win":return"windows";case"linux":return"linux";default:return null}};getPlatformDisplayName=e=>{switch(e.platform){case"ios":return"iOS";case"android":return"Android";case"mac":if("intel"===e.macArchitecture)return"macOS";if("apple-silicon"===e.macArchitecture);return"macOS";case"win":return"Windows";case"linux":return"Linux";default:return"Unknown Platform"}};getPlatformDisplayNameLegacy=e=>{switch(e){case"mac":return"macOS";case"win":return"Windows";case"linux":return"Linux";default:return"Unknown Platform"}}};e.s(["DownloadPlatforms",()=>a,"downloadService",0,o],576792)},813097,263543,e=>{"use strict";var t=e.i(247167),r=e.i(843476),n=e.i(450354),i=e.i(123243),a=e.i(184283),o=e.i(271645);e.i(785269);var l=e.i(322831),s=e.i(923388),c=e.i(347782),u=e.i(924886),d=e.i(576792);let p=(0,o.memo)(({...e})=>{let{t}=(0,l.useTranslation)("downloads"),i=(0,u.usePlatformDetection)(),{text:a,url:p,isLoading:m,isExternal:f}=(0,o.useMemo)(()=>{if("unknown"===i.platform)return{isExternal:!1,isLoading:!0,text:t("page.downloadLatest"),url:"/downloads"};let e=d.downloadService.getPlatformDisplayName(i),r=d.downloadService.getPlatformDownloadPage(i);return{isExternal:"ios"===i.platform||"android"===i.platform,isLoading:!1,text:t("page.downloadFor",{platform:e}),url:r}},[t,i]);return f?(0,r.jsx)(n.Button,{href:p,icon:s.DownloadIcon,iconPlacement:"end",loading:m,size:"large",target:"_blank",...e,children:a}):(0,r.jsx)(c.default,{href:p,children:(0,r.jsx)(n.Button,{icon:s.DownloadIcon,iconPlacement:"end",loading:m,size:"large",...e,children:a})})});e.s(["default",0,p],263543);var m=e.i(892766),f=e.i(889515);let g=(0,a.createStaticStyles)(({css:e,cssVar:t})=>({button:e`
    display: flex;
    gap: 4px;
    align-items: center;
    justify-content: center;

    height: 48px !important;
    padding-inline: 32px;
    border: none !important;

    font-size: 16px;
    font-weight: 500;
    line-height: 1.5;

    box-shadow: 0 0 0 1px ${t.colorFillTertiary} inset !important;
  `,downloadButton:e`
    gap: 8px;
    padding-inline: 16px;
    background: color-mix(in srgb, ${t.colorBgContainer} 85%, transparent);

    &:hover {
      background: ${t.colorBgContainer} !important;
    }
  `})),h=(0,o.memo)(({cloudCtaUtm:e,mobile:o,utmTerm:s})=>{let{t:u}=(0,l.useTranslation)(["landing","blog"]),d=e?.utmContent&&e.utmMedium?e:(t.default,{utmContent:f.UTM_CONTENT.callbackFooterDiscover,utmMedium:f.UTM_MEDIUM.discover});return(0,r.jsxs)(i.Center,{gap:16,horizontal:!o,children:[(0,r.jsx)(c.default,{href:(0,m.urlWithUTM)(m.LOBE_CHAT_URL,{utmContent:d.utmContent,utmMedium:d.utmMedium,...s?{utmTerm:s}:{}}),children:(0,r.jsx)(n.Button,{block:o,className:g.button,size:"large",type:"primary",children:u("buttons.getStartedForFree",{ns:"common"})})}),!o&&(0,r.jsx)(p,{className:(0,a.cx)(g.button,g.downloadButton),variant:"filled"})]})});e.s(["default",0,h],813097)},404010,e=>{"use strict";let t=new Set(["agent","mcp","skills"]);e.s(["getDiscoverResourceIdFromPathname",0,e=>{let r=e.split("/").filter(Boolean);for(let e=0;e<r.length;e+=1)if(t.has(r[e])&&e+1<r.length)return decodeURIComponent(r.slice(e+1).join("/"))},"getIconsResourceIdFromPathname",0,e=>{let t=e.split("/").filter(Boolean),r=t.indexOf("icons");if(!(r<0)&&!(r+1>=t.length))return decodeURIComponent(t.slice(r+1).join("/"))}])},171858,e=>{"use strict";var t=e.i(843476),r=e.i(943243),n=e.i(123243),i=e.i(208544),a=e.i(638464),o=e.i(546061),l=e.i(184283),s=e.i(618566),c=e.i(271645);e.i(785269);var u=e.i(322831),d=e.i(813097),p=e.i(748619),m=e.i(486642),f=e.i(889515),g=e.i(404010);let h=(0,l.createStaticStyles)(({css:e,cssVar:t})=>({container:e`
      position: relative;
      padding-block: 96px;

      &::before {
        content: '';

        position: absolute;
        inset-block-start: 0;
        inset-inline-start: 0;

        display: block;

        width: 100%;
        height: 1px;

        background: linear-gradient(
          90deg,
          transparent 0,
          ${t.colorFillSecondary} 10%,
          ${t.colorFillSecondary} 90%,
          transparent 100%
        );
      }

      &::after {
        pointer-events: none;
        content: '';

        position: absolute;
        z-index: 1;
        inset-block-start: 0;
        inset-inline-start: 0;

        display: block;

        width: 100%;
        height: 100%;

        opacity: 0.05;
        background: radial-gradient(50% 50% at 50% 0, ${t.gold} 0, transparent 100%);
      }
    `,desc:e`
      font-size: 18px;
      color: ${t.colorTextDescription};
      ${l.responsive.sm} {
        margin-block-end: 24px;
        font-size: 16px;
        text-align: center;
      }
    `,hightlight:(0,l.cx)(a.lobeStaticStylish.gradientAnimation,e`
        position: relative;
        z-index: 5;
        background-clip: text;

        -webkit-text-fill-color: transparent;

        &::selection {
          -webkit-text-fill-color: #000 !important;
        }
      `),title:e`
      margin-block-end: 0.5em;
      font-size: 32px;
      font-weight: bold;
      line-height: 1.2;
      ${l.responsive.sm} {
        font-size: 26px;
        text-align: center;
      }
    `})),y=(0,c.memo)(({actions:e,description:a,mobile:l,style:y,title:w,variant:x})=>{let{t:b}=(0,u.useTranslation)("landing"),k=(0,s.usePathname)(),v=f.CALLBACK_FOOTER_CLOUD_UTM[x]??f.CALLBACK_FOOTER_CLOUD_UTM.discover,S=(0,c.useMemo)(()=>"discover"===x?(0,g.getDiscoverResourceIdFromPathname)(k)??void 0:"icons"===x?(0,g.getIconsResourceIdFromPathname)(k)??void 0:void 0,[x,k]);return(0,t.jsxs)(n.Center,{className:h.container,gap:32,style:y,children:[(0,t.jsx)(r.Block,{align:"center",height:128,justify:"center",style:{borderRadius:28,boxShadow:"0 8px 32px rgba(0, 0, 0, 0.05)",zIndex:10},variant:"outlined",width:128,children:(0,t.jsx)(o.LobeHub,{size:100})}),(0,t.jsxs)(i.Flexbox,{align:"center",style:{zIndex:1},children:[(0,t.jsx)(p.default,{align:l?"center":void 0,style:{letterSpacing:"-0.04em",minHeight:"unset"},weight:"bolder",children:w??"Your Chief Agent Operator"}),(0,t.jsx)(m.default,{align:l?"center":void 0,as:"h3",children:a??b("footer.desc")})]}),e||(0,t.jsx)(d.default,{cloudCtaUtm:v,mobile:l,utmTerm:S})]})});e.s(["default",0,y,"styles",0,h])},307243,e=>{"use strict";var t=e.i(843476),r=e.i(450354),n=e.i(546061),i=e.i(184283),a=e.i(618566),o=e.i(271645);e.i(785269);var l=e.i(322831),s=e.i(892766),c=e.i(889515),u=e.i(404010);let d=(0,i.createStyles)(({css:e,responsive:t})=>({container:e`
    position: fixed;
    z-index: 1200;
    inset-block-end: 24px;
    inset-inline-end: 24px;

    ${t.mobile} {
      inset-block-end: 16px;
      inset-inline-end: 16px;
      display: none;
    }
  `,link:e`
    display: inline-flex;
    gap: 8px;
    align-items: center;
    font-size: 15px;
  `})),p=(0,o.memo)(({mobile:e})=>{let{styles:i}=d(),o=(0,a.usePathname)(),{t:p}=(0,l.useTranslation)("discover");if(e)return null;let m=(0,u.getDiscoverResourceIdFromPathname)(o),f=o.includes("/skills")?p("floatingCta.skills",{defaultValue:"Run any SKILL with one click"}):o.includes("/mcp")?p("floatingCta.mcp",{defaultValue:"Run any MCP with one click"}):o.includes("/agent")?p("floatingCta.agent",{defaultValue:"Run any Agent with one click"}):p("floatingCta.default",{defaultValue:"Run in LobeHub with one click"});return(0,t.jsx)("div",{className:i.container,children:(0,t.jsx)(r.Button,{className:i.link,href:(0,s.urlWithUTM)(s.LOBE_CHAT_URL,{utmContent:c.UTM_CONTENT.discoverFloatCTA,utmMedium:c.UTM_MEDIUM.discover,...m?{utmTerm:m}:{}}),icon:(0,t.jsx)(n.LobeHub,{size:24}),shape:"round",size:"large",target:"_blank",type:"primary",children:f})})});e.s(["default",0,p])},343349,e=>{"use strict";var t=e.i(271645);e.i(785269);var r=e.i(322831),n=e.i(498660);let i="discover",a=(e,t,r)=>{e.addResourceBundle(t,i,r,!0,!0)},o=(0,t.memo)(({children:e,locale:o,resource:l})=>{let{i18n:s}=(0,r.useTranslation)();return(n.isOnServerSide||!s.hasResourceBundle(o,i))&&a(s,o,l),(0,t.useEffect)(()=>{a(s,o,l)},[s,o,l]),e});o.displayName="DiscoverLocaleClient",e.s(["default",0,o])}]);