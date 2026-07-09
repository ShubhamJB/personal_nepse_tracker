(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,196016,e=>{"use strict";var t=e.i(752533);e.s(["Tooltip",()=>t.default])},474134,e=>{"use strict";var t=e.i(267820),r=e.i(708262),r=r,n=e.i(271645);e.s(["useResponsive",0,function(){var e=r.default.useBreakpoint();return(0,n.useMemo)(function(){return(0,t.convertBreakpointToResponsive)(e)},[e])}],474134)},650246,302467,e=>{"use strict";var t=e.i(492435),r=e.i(149167),n=e.i(184283);let i=(0,n.createStaticStyles)(({css:e,cssVar:t})=>({content:e`
      [class*='ant-modal-footer'] {
        margin: 0;
        padding: 16px;
      }

      [class*='ant-modal-header'] {
        display: flex;
        gap: 4px;
        align-items: center;
        justify-content: center;

        height: 56px;
        margin-block-end: 0;
        padding: 16px;
      }

      [class*='ant-modal-container'] {
        overflow: hidden;
        padding: 0;
        border: 1px solid ${t.colorSplit};
        border-radius: ${t.borderRadiusLG};
      }
    `,drawerContent:e`
      [class*='ant-drawer-close'] {
        padding: 0;
      }

      [class*='ant-drawer-header'] {
        flex: none;
        height: ${56}px !important;
        padding-block: 0;
        padding-inline: 16px;
      }

      [class*='ant-drawer-footer'] {
        display: flex;
        align-items: center;
        justify-content: flex-end;

        padding: 16px;
        border: none;
      }
    `,wrap:e`
      overflow: hidden auto;
    `}));var o=e.i(271645),a=e.i(843476),l=e.i(464571),s=e.i(592143),d=e.i(608856),c=e.i(212931),u=e.i(474134),p=e.i(456420);let f=(0,p.default)("maximize-2",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"m21 3-7 7",key:"1l2asr"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]),m=(0,p.default)("minimize-2",[["path",{d:"m14 10 7-7",key:"oa77jy"}],["path",{d:"M20 10h-6V4",key:"mjg0md"}],["path",{d:"m3 21 7-7",key:"tjx5ai"}],["path",{d:"M4 14h6v6",key:"rmj7iw"}]]);var h=e.i(263676);let y=(0,o.memo)(({panelRef:e,allowFullscreen:p,children:y,title:b=" ",className:g,classNames:v,width:x=700,onCancel:w,open:k,destroyOnHidden:j,paddings:$,height:S="75dvh",enableResponsive:N=!0,footer:C,styles:T,okText:B,onOk:E,cancelText:I,okButtonProps:F,cancelButtonProps:R,confirmLoading:z,...M})=>{let[A,O]=(0,o.useState)(!1),{mobile:L}=(0,u.useResponsive)(),W=!1===C||null===C;return N&&L?(0,a.jsx)(s.ConfigProvider,{theme:{token:{colorBgElevated:n.cssVar.colorBgContainer}},children:(0,a.jsx)(d.Drawer,{className:(0,n.cx)(i.drawerContent,g),closeIcon:(0,a.jsx)(r.default,{icon:h.X}),destroyOnHidden:j,height:A?"calc(100% - env(safe-area-inset-top))":S,open:k,panelRef:e,placement:"bottom",title:b,classNames:"function"==typeof v?v:{...v,wrapper:(0,n.cx)(i.wrap,v?.wrapper)},extra:p&&(0,a.jsx)(r.default,{icon:A?m:f,onClick:()=>O(!A)}),footer:W?null:C||(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Button,{color:"default",variant:"filled",onClick:w,...R,children:I||"Cancel"}),(0,a.jsx)(l.Button,{loading:z,type:"primary",onClick:E,...F,style:{marginInlineStart:8,...F?.style},children:B||"OK"})]}),styles:"function"==typeof T?T:{...T,body:{paddingBlock:`16px ${C?0:"16px"}`,paddingInline:$?.desktop??16,...T?.body}},onClose:w,...M,children:y})}):(0,a.jsx)(s.ConfigProvider,{theme:{token:{colorBgElevated:n.cssVar.colorBgContainer}},children:(0,a.jsx)(c.Modal,{closable:!0,cancelText:I,className:(0,n.cx)(i.content,g),closeIcon:(0,a.jsx)(t.default,{icon:h.X,size:20}),confirmLoading:z,destroyOnHidden:j,footer:W?null:C,mask:{closable:!0},okButtonProps:F,okText:B,open:k,panelRef:e,title:b,width:x,cancelButtonProps:{color:"default",variant:"filled",...R},classNames:"function"==typeof v?v:{...v,wrapper:(0,n.cx)(i.wrap,v?.wrapper)},styles:"function"==typeof T?T:{...T,body:{maxHeight:S,overflow:"hidden auto",paddingBlock:`0 ${null===C?"16px":0}`,paddingInline:$?.desktop??16,...T?.body}},onCancel:w,onOk:E,...M,children:y})})});y.displayName="Modal",e.s(["default",0,y],302467),e.s(["Modal",0,y],650246)},121749,e=>{"use strict";var t=e.i(848357);e.s(["Input",()=>t.default])},121309,e=>{"use strict";var t=e.i(343420);e.s(["InfoIcon",()=>t.default])},350861,311267,e=>{"use strict";var t=e.i(271645),r=e.i(843476),n=(0,t.forwardRef)(({as:e="div",...t},n)=>(0,r.jsx)(e,{...t,ref:n}));let i="onloadTurnstileCallback",o={normal:{width:300,height:65},compact:{width:150,height:140},invisible:{width:0,height:0,overflow:"hidden"},flexible:{minWidth:300,width:"100%",height:65},interactionOnly:{width:"fit-content",height:"auto",display:"flex"}},a="unloaded",l,s=new Promise((e,t)=>{l={resolve:e,reject:t},"ready"===a&&e(void 0)}),d=(e=i)=>("unloaded"===a&&(a="loading",window[e]=()=>{l.resolve(),a="ready",delete window[e]}),s),c=(0,t.forwardRef)((e,l)=>{let{scriptOptions:s,options:c={},siteKey:u,onWidgetLoad:p,onSuccess:f,onExpire:m,onError:h,onBeforeInteractive:y,onAfterInteractive:b,onUnsupported:g,onTimeout:v,onLoadScript:x,id:w,style:k,as:j="div",injectScript:$=!0,rerenderOnCallbackChange:S=!1,...N}=e,C=c.size,T=(0,t.useCallback)(()=>void 0===C?{}:"execute"===c.execution?o.invisible:"interaction-only"===c.appearance?o.interactionOnly:o[C],[c.execution,C,c.appearance]),[B,E]=(0,t.useState)(T()),I=(0,t.useRef)(null),[F,R]=(0,t.useState)(!1),z=(0,t.useRef)(void 0),M=(0,t.useRef)(!1),A=w||"cf-turnstile",O=(0,t.useRef)({onSuccess:f,onError:h,onExpire:m,onBeforeInteractive:y,onAfterInteractive:b,onUnsupported:g,onTimeout:v});(0,t.useEffect)(()=>{S||(O.current={onSuccess:f,onError:h,onExpire:m,onBeforeInteractive:y,onAfterInteractive:b,onUnsupported:g,onTimeout:v})});let L=s?.id||"cf-turnstile-script",W=function(e="cf-turnstile-script"){let[r,n]=(0,t.useState)(!1);return(0,t.useEffect)(()=>{let t=()=>{document.getElementById(e)&&n(!0)},r=new MutationObserver(t);return r.observe(document,{childList:!0,subtree:!0}),t(),()=>{r.disconnect()}},[e]),r}(L),P=s?.onLoadCallbackName||"onloadTurnstileCallback",V=c.appearance||"always",D=(0,t.useMemo)(()=>({sitekey:u,action:c.action,cData:c.cData,theme:c.theme||"auto",language:c.language||"auto",tabindex:c.tabIndex,"response-field":c.responseField,"response-field-name":c.responseFieldName,size:function(e){if("invisible"!==e&&"interactionOnly"!==e)return e}(C),retry:c.retry||"auto","retry-interval":c.retryInterval||8e3,"refresh-expired":c.refreshExpired||"auto","refresh-timeout":c.refreshTimeout||"auto",execution:c.execution||"render",appearance:c.appearance||"always","feedback-enabled":c.feedbackEnabled??!0,callback:e=>{M.current=!0,S?f?.(e):O.current.onSuccess?.(e)},"error-callback":S?h:(...e)=>O.current.onError?.(...e),"expired-callback":S?m:(...e)=>O.current.onExpire?.(...e),"before-interactive-callback":S?y:(...e)=>O.current.onBeforeInteractive?.(...e),"after-interactive-callback":S?b:(...e)=>O.current.onAfterInteractive?.(...e),"unsupported-callback":S?g:(...e)=>O.current.onUnsupported?.(...e),"timeout-callback":S?v:(...e)=>O.current.onTimeout?.(...e)}),[c.action,c.appearance,c.cData,c.execution,c.language,c.refreshExpired,c.responseField,c.responseFieldName,c.retry,c.retryInterval,c.tabIndex,c.theme,c.feedbackEnabled,c.refreshTimeout,u,C,S,S?f:null,S?h:null,S?m:null,S?y:null,S?b:null,S?g:null,S?v:null]),G=(0,t.useCallback)(()=>"u">typeof window&&!!window.turnstile,[]);return(0,t.useEffect)(function(){$&&!F&&(d(P),(({render:e="explicit",onLoadCallbackName:t=i,scriptOptions:{nonce:r="",defer:n=!0,async:o=!0,id:a="",appendTo:l,onError:s,crossOrigin:d=""}={}})=>{let c=a||"cf-turnstile-script";if(document.getElementById(c))return;let u=document.createElement("script");u.id=c,u.src=`https://challenges.cloudflare.com/turnstile/v0/api.js?onload=${t}&render=${e}`,document.querySelector(`script[src="${u.src}"]`)||(u.defer=!!n,u.async=!!o,r&&u.setAttribute("nonce",r),d&&(u.crossOrigin=d),s&&(u.onerror=s,delete window[t]),("body"===l?document.body:document.getElementsByTagName("head")[0]).appendChild(u))})({onLoadCallbackName:P,scriptOptions:{...s,id:L}}))},[$,F,s,L,P]),(0,t.useEffect)(function(){"ready"!==a&&d(P).then(()=>R(!0)).catch(console.error)},[P]),(0,t.useEffect)(function(){if(!I.current||!F)return;let e=!1;return(async()=>{e||!I.current||(z.current=window.turnstile.render(I.current,D),z.current&&p?.(z.current))})(),()=>{e=!0,z.current&&(window.turnstile.remove(z.current),M.current=!1)}},[A,F,D]),(0,t.useImperativeHandle)(l,()=>{let{turnstile:e}=window;return{getResponse:()=>e?.getResponse&&z.current&&G()?e.getResponse(z.current):void console.warn("Turnstile has not been loaded"),getResponsePromise:async(e=3e4,t=100)=>new Promise((r,n)=>{let i,o=async()=>{if(M.current&&window.turnstile&&z.current)try{let e=window.turnstile.getResponse(z.current);return i&&clearTimeout(i),e?r(e):n(Error("No response received"))}catch(e){return i&&clearTimeout(i),console.warn("Failed to get response",e),n(Error("Failed to get response"))}i||=setTimeout(()=>{i&&clearTimeout(i),n(Error("Timeout"))},e),await new Promise(e=>setTimeout(e,t)),await o()};o()}),reset(){if(!e?.reset||!z.current||!G())return void console.warn("Turnstile has not been loaded");"execute"===c.execution&&E(o.invisible);try{M.current=!1,e.reset(z.current)}catch(e){console.warn(`Failed to reset Turnstile widget ${z.current}`,e)}},remove(){e?.remove&&z.current&&G()?(E(o.invisible),M.current=!1,e.remove(z.current),z.current=null):console.warn("Turnstile has not been loaded")},render(){if(!e?.render||!I.current||!G()||z.current)return void console.warn("Turnstile has not been loaded or container not found");let t=e.render(I.current,D);return z.current=t,z.current&&p?.(z.current),"execute"!==c.execution&&E(C?o[C]:{}),t},execute(){"execute"!==c.execution?console.warn('Execution mode is not set to "execute"'):e?.execute&&I.current&&z.current&&G()?(e.execute(I.current),E(C?o[C]:{})):console.warn("Turnstile has not been loaded or container not found")},isExpired:()=>e?.isExpired&&z.current&&G()?e.isExpired(z.current):(console.warn("Turnstile has not been loaded"),!1)}},[z,c.execution,C,D,I,G,F,p]),(0,t.useEffect)(()=>{if(F||!W)return;if(window.turnstile)return void R(!0);let e=setInterval(()=>{window.turnstile&&(R(!0),clearInterval(e))},50);return()=>{clearInterval(e)}},[F,W]),(0,t.useEffect)(()=>{E(T())},[c.execution,C,V]),(0,t.useEffect)(()=>{W&&"function"==typeof x&&x()},[W]),(0,r.jsx)(n,{ref:I,as:j,id:A,style:{...B,...k},...N})});c.displayName="Turnstile",e.s(["Turnstile",0,c],350861);var u=e.i(450354),p=e.i(208544),f=e.i(206868),m=e.i(492435),h=e.i(126021),y=e.i(58125),b=e.i(184283),g=e.i(225913);let v=(0,b.createStaticStyles)(({css:e,cssVar:t})=>({borderless:e`
    gap: 48px;
    .${"ant"}-collapse .${"ant"}-collapse-header {
      padding-block-end: 16px;
      border-block-end: 1px solid ${t.colorBorderSecondary};
    }

    .${"ant"}-collapse-body {
      padding-inline: 0 !important;
    }
  `,filled:e`
    .${"ant"}-collapse-body {
      padding-block: 0 !important;
    }
  `,outlined:e`
    .${"ant"}-collapse-body {
      padding-block: 0 !important;
    }
  `,root:e`
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 16px;

    width: 100%;

    .${"ant"}-form-item {
      margin: 0 !important;
    }

    .${"ant"}-form-item .${"ant"}-form-item-label > label {
      height: unset;
    }

    .${"ant"}-row {
      position: relative;
      flex-wrap: nowrap;
    }

    .${"ant"}-form-item-label {
      position: relative;
      flex: 1;
      max-width: 100%;
    }

    .${"ant"}-form-item-row {
      align-items: center;
    }

    .${"ant"}-form-item-control {
      position: relative;
      flex: 0;
      min-width: unset !important;
    }

    .${"ant"}-collapse-item {
      border-radius: ${t.borderRadius} !important;
    }

    ${b.responsive.sm} {
      gap: 0 !important;
    }
  `})),x=(0,g.cva)(v.root,{defaultVariants:{variant:"borderless"},variants:{variant:{filled:v.filled,outlined:v.outlined,borderless:v.borderless}}}),w=(0,b.createStaticStyles)(({cx:e,css:t,cssVar:r})=>({borderless:e(y.staticStylish.variantBorderlessWithoutHover,t`
        padding-inline: 0;
      `),filled:e(y.staticStylish.variantFilledWithoutHover,t`
        background: ${r.colorFillQuaternary};
      `),mobile:t`
      padding-block: 0;
      padding-inline: 16px;
      border-radius: 0;
      background: ${r.colorBgContainer};
    `,outlined:y.staticStylish.variantOutlinedWithoutHover,root:t`
      padding-inline: 16px;
      border-radius: ${r.borderRadiusLG};
    `})),k=(0,g.cva)(w.root,{defaultVariants:{variant:"borderless"},variants:{variant:{filled:w.filled,outlined:w.outlined,borderless:w.borderless}}});(0,b.createStaticStyles)(({css:e,cssVar:t})=>({root:e`
      ${b.responsive.sm} {
        padding: 16px;
        border-block-start: 1px solid ${t.colorBorderSecondary};
        background: ${t.colorBgContainer};
      }
    `}));let j=(0,b.createStaticStyles)(({css:e,cssVar:t})=>({mobileGroupBody:e`
      padding-block: 0;
      padding-inline: 16px;
      background: ${t.colorBgContainer};
    `,mobileGroupHeader:e`
      padding: 16px;
      background: ${t.colorBgLayout};
    `,title:e`
      align-items: center;
      font-size: 16px;
      font-weight: bold;
    `,titleBorderless:e`
      font-size: 18px;
      font-weight: bold;
    `,titleMobile:e`
      ${b.responsive.sm} {
        font-size: 14px;
        font-weight: 400;
        opacity: 0.5;
      }
    `})),$=(0,g.cva)(j.title,{defaultVariants:{variant:"borderless"},variants:{variant:{filled:null,outlined:null,borderless:j.titleBorderless}}}),S=(0,b.createStaticStyles)(({css:e})=>({itemMinWidth:e`
    &.${"ant"}-form-item .${"ant"}-form-item-control {
      width: var(--form-item-min-width) !important;
    }
  `,itemNoDivider:e`
    &:not(:first-child) {
      padding-block-start: 0;
    }
  `,root:e`
    &.${"ant"}-form-item {
      padding-block: 16px;
      padding-inline: 0;

      .${"ant"}-form-item-label {
        text-align: start;
      }

      .${"ant"}-row {
        gap: 12px;
        justify-content: space-between;

        > div {
          flex: unset;
          flex-grow: unset;
        }
      }

      .${"ant"}-form-item-required::before {
        align-self: flex-start;
      }

      ${b.responsive.sm} {
        &.${"ant"}-form-item-horizontal {
          .${"ant"}-form-item-label {
            flex: 1 !important;
          }
          .${"ant"}-form-item-control {
            flex: none !important;
          }
        }
      }
    }
  `,verticalLayout:e`
    &.${"ant"}-form-item {
      .${"ant"}-row {
        align-items: stretch;
      }
    }
  `})),N=(0,g.cva)(S.root,{defaultVariants:{divider:!1,itemMinWidth:!1,layout:"vertical"},variants:{itemMinWidth:{true:S.itemMinWidth,false:null},divider:{true:null,false:S.itemNoDivider},layout:{vertical:S.verticalLayout,horizontal:null}}}),C=(0,b.createStaticStyles)(({css:e,cssVar:t})=>({floatFooter:e`
    position: fixed;
    z-index: 1000;
    inset-block-end: 24px;
    inset-inline-start: 50%;
    transform: translateX(-50%);

    width: max-content;
    padding: 8px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: 48px;

    background: ${t.colorBgContainer};
    box-shadow: ${t.boxShadowSecondary};
  `,footer:e`
    ${b.responsive.sm} {
      margin-block-start: calc(-1 * ${t.borderRadius});
      padding: 16px;
      border-block-start: 1px solid ${t.colorBorderSecondary};
      background: ${t.colorBgContainer};
    }
  `})),T=(0,b.createStaticStyles)(({css:e,cssVar:t})=>({content:e`
    position: relative;
    text-align: start;
  `,desc:e`
    display: block;

    line-height: 1.44;
    color: ${t.colorTextDescription};
    word-wrap: break-word;
    white-space: pre-wrap;
  `,title:e`
    font-weight: 500;
    line-height: 1;
  `}));var B=e.i(474134);function E(e){return void 0===e}let I=(0,t.memo)(({className:e,icon:t,title:n,children:i,extra:o,variant:a="borderless",defaultActive:l=!0,collapsible:s,active:d,keyValue:c="group",onCollapse:u,desc:p,...y})=>{let{mobile:g}=(0,B.useResponsive)(),v="borderless"===a,x=E(s)?!v:s,w=(0,r.jsxs)(f.default,{horizontal:!0,className:(0,b.cx)($({variant:a}),j.titleMobile),gap:8,children:[t&&(0,r.jsx)(m.default,{icon:t}),n]});return g?(0,r.jsxs)(f.default,{className:e,children:[(0,r.jsxs)(f.default,{horizontal:!0,className:j.mobileGroupHeader,justify:"space-between",children:[w,o]}),(0,r.jsx)("div",{className:j.mobileGroupBody,children:i})]}):(0,r.jsx)(h.default,{activeKey:E(d)?void 0:d?[c]:[],className:e,collapsible:x,defaultActiveKey:l?[c]:void 0,variant:a,classNames:{header:v?j.titleBorderless:void 0,title:v?j.titleBorderless:void 0},items:[{children:i,desc:p,extra:o,icon:t,key:c,label:n}],onChange:e=>u?.(e.length>0),...y})});I.displayName="FormGroup";var F=e.i(185345);let R=({tag:e,title:t,desc:n,avatar:i,classNames:o,styles:a,...l})=>(0,r.jsxs)(f.default,{horizontal:!0,align:"center",gap:8,...l,children:[i,(0,r.jsxs)(f.default,{className:(0,b.cx)(T.content,o?.content),gap:8,style:a?.content,children:[(0,r.jsxs)(f.default,{align:"center",className:(0,b.cx)(T.title,o?.title),direction:"horizontal",gap:8,style:a?.title,children:[t,e&&(0,r.jsx)(F.default,{className:o?.tag,style:a?.tag,children:e})]}),n&&(0,r.jsx)("small",{className:(0,b.cx)(T.desc,o?.desc),style:a?.desc,children:n})]})]});R.displayName="FormTitle";var z=e.i(312361);let M=(0,b.createStaticStyles)(({css:e})=>({root:e`
      margin: 0;
      opacity: 0.66;
    `})),A=({visible:e=!0,style:t,className:n,...i})=>(0,r.jsx)(z.Divider,{className:(0,b.cx)(M.root,n),style:{opacity:+!!e,...t},...i});A.displayName="FormDivider";var O=e.i(648601),O=O;let{Item:L}=O.default,W=(0,t.memo)(({desc:e,tag:n,minWidth:i,avatar:o,className:a,label:l,children:s,divider:d,layout:c,variant:u,...p})=>{let f=(0,t.useMemo)(()=>({"--form-item-min-width":null!=i&&""!==i?"number"==typeof i?`${i}px`:i:""}),[i]),m=null!=i&&""!==i,{style:h,...y}=p;return(0,r.jsxs)(r.Fragment,{children:[d&&(0,r.jsx)(A,{visible:"borderless"!==u}),(0,r.jsx)(L,{className:(0,b.cx)(N({divider:d,itemMinWidth:m,layout:c}),a),label:(0,r.jsx)(R,{avatar:o,desc:e,tag:n,title:l}),layout:c,style:{...f,...h},...y,children:s})]})});W.displayName="FormItem";var P=e.i(155747),V=e.i(177025),D=e.i(28662),G={"form.reset":"Reset","form.submit":"Submit","form.unsavedChanges":"Unsaved changes","form.unsavedWarning":"You have unsaved changes. Are you sure you want to leave?"};let H=(0,t.createContext)({}),U=(0,t.memo)(({children:e,config:t})=>(0,r.jsx)(H,{value:t,children:e}));var K=e.i(65242),X=e.i(744144),q=e.i(532780),Q=e.i(861749);function Y(e){return"symbol"==typeof e||e instanceof Symbol}var _=e.i(887141),J=e.i(647608),Z=e.i(452019),ee=e.i(338489);function et(e){let t=[];for(let r in e)t.push(r);return t}var er=e.i(656996);let en=e=>(0,K.isObject)(e)?Array.isArray(e)?e.map(e=>en(e)).filter(e=>void 0!==e):function(e,t){if(null==e)return{};let r=(0,Q.iteratee)(t??_.identity),n={},i=(0,q.isArrayLike)(e)?function(e,t,r=1){if(null==t&&(t=e,e=0),!Number.isInteger(r)||0===r)throw Error("The step value must be a non-zero integer.");let n=Math.max(Math.ceil((t-e)/r),0),i=Array(n);for(let t=0;t<n;t++)i[t]=e+t*r;return i}(0,e.length):[...function(e){if(null==e)return[];switch(typeof e){case"object":case"function":if((0,q.isArrayLike)(e)){var t;let r,n,i;return n=new Set(r=function(e,t){var r,n;let i,o;if((e=(o=(i=(r=e)?(r=Y(n=r)?NaN:Number(n))===1/0||r===-1/0?(r<0?-1:1)*Number.MAX_VALUE:r==r?r:0:0===r?r:0)%1)?i-o:i)<1||!Number.isSafeInteger(e))return[];let a=Array(e);for(let r=0;r<e;r++)a[r]="function"==typeof t?t(r):r;return a}((t=e).length,e=>`${e}`)),(0,J.isBuffer)(t)&&(n.add("offset"),n.add("parent")),(0,ee.isTypedArray)(t)&&(n.add("buffer"),n.add("byteLength"),n.add("byteOffset")),i=et(t).filter(e=>!n.has(e)),Array.isArray(t)?[...r,...i]:[...r.filter(e=>Object.hasOwn(t,e)),...i]}if((0,Z.isPrototype)(e))return et(e).filter(e=>"constructor"!==e);return et(e);default:return et(Object(e))}}(e),...function(e){let t=[];for(;e;)t.push(...(0,er.getSymbols)(e)),e=Object.getPrototypeOf(e);return t}(e)];for(let t=0;t<i.length;t++){let o=Y(i[t])?i[t]:i[t].toString(),a=e[o];r(a,o,e)&&(n[o]=a)}return n}(Object.entries(e).reduce((e,[t,r])=>(e[t]=en(r),e),{}),e=>void 0!==e):e;var O=O,ei=e.i(121309),eo=e.i(629801);let ea=(0,t.memo)(({enableReset:e=!0,buttonProps:n,float:i,onReset:o,saveButtonProps:a,resetButtonProps:l,enableUnsavedWarning:s,children:d,texts:c,className:u,...p})=>{let h=(0,P.useMotionComponent)(),{form:y,initialValues:g,submitLoading:v}=(0,t.use)(H),[x,w]=(0,t.useState)(!1),k=O.default.useWatch([],y)||{},{t:j}=(0,D.useTranslation)(G),$=(0,t.useMemo)(()=>en(k),[k]),S=(0,t.useMemo)(()=>en(g),[g]),N=(0,t.useMemo)(()=>(0,X.mergeWith)({},S,$,(e,t)=>{if(Array.isArray(e))return t}),[$,S]);(0,t.useEffect)(()=>{w(!(0,eo.default)(N,S))},[N,S,v]);let T=c?.unSavedWarning??j("form.unsavedWarning"),B=c?.unSaved??j("form.unsavedChanges"),E=c?.reset??j("form.reset"),I=c?.submit??j("form.submit"),F=e=>{x?e.returnValue=T:delete e.returnValue};(0,t.useEffect)(()=>{if(s&&"u">typeof window&&x)return window.addEventListener("beforeunload",F),()=>window.removeEventListener("beforeunload",F)},[s,x,T]);let R=(0,r.jsxs)(r.Fragment,{children:[(i||x)&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m.default,{color:b.cssVar.colorTextDescription,icon:ei.InfoIcon,size:12,style:{marginLeft:8}}),(0,r.jsx)("span",{style:{color:b.cssVar.colorTextDescription,flex:"none",fontSize:12,marginRight:i?16:4},children:B})]}),d,e&&(i||x)&&(0,r.jsx)(V.default,{htmlType:"button",shape:i?"round":void 0,variant:"filled",onClick:()=>{o?.($,S),y?.resetFields()},...n,...l,children:E}),(0,r.jsx)(V.default,{htmlType:"submit",loading:v,shape:i?"round":void 0,type:"primary",...n,...a,children:I})]});return i?(0,r.jsx)(h.div,{animate:x?"visible":"hidden",className:C.floatFooter,initial:"hidden",transition:{duration:.1,ease:"easeOut"},variants:{hidden:{opacity:0,x:"-50%",y:20},visible:{opacity:1,x:"-50%",y:0}},children:(0,r.jsx)(f.default,{horizontal:!0,align:"center",className:u,gap:8,justify:"center",...p,children:R})}):(0,r.jsx)(f.default,{horizontal:!0,align:"center",className:(0,b.cx)(C.footer,u),gap:8,justify:"flex-end",...p,children:R})});ea.displayName="FormSubmitFooter";let el=(0,t.memo)(({className:e,children:t,variant:n="borderless",...i})=>{let{mobile:o}=(0,B.useResponsive)();return(0,r.jsx)(f.default,{className:(0,b.cx)(o?w.mobile:k({variant:n}),e),...i,children:t})});el.displayName="FormFlatGroup";var O=O;let es=(0,t.memo)(({className:e,itemMinWidth:n,footer:i,form:o,items:a=[],children:l,itemsType:s="group",itemVariant:d,variant:c="borderless",classNames:u,styles:p,gap:f,style:m,collapsible:h,defaultActiveKey:y,initialValues:g,activeKey:v,onCollapse:w,onFinish:k,ref:j,layout:$,...S})=>{let{mobile:N}=(0,B.useResponsive)(),[C,T]=(0,t.useState)(!1),F=(0,t.useCallback)((e,t)=>(0,r.jsx)(W,{className:u?.item,divider:0!==t,minWidth:n,style:p?.item,variant:c,...e},t),[n,c,u,p]),R=(0,t.useCallback)((e,t)=>{let n=e?.key||t;return(0,r.jsx)(I,{active:v&&e?.key?v.includes(n):void 0,className:u?.group,classNames:u,collapsible:E(e.collapsible)?h:e.collapsible,extra:e?.extra,icon:e?.icon,keyValue:n,style:p?.group,styles:p,title:e.title,variant:e?.variant||c,defaultActive:y&&e?.key?y.includes(n):e?.defaultActive,onCollapse:e=>{let t=v||y||[];t=t.filter(e=>e!==n),w?.(e?[...t,n]:t)},children:Array.isArray(e.children)?e.children.filter(e=>!e.hidden).map((e,t)=>F(e,t)):e.children},n)},[v,h,y,w,c,u,p]);return(0,r.jsx)(U,{config:{form:o,initialValues:g,submitLoading:C},children:(0,r.jsxs)(O.default,{className:(0,b.cx)(x({variant:c}),e),colon:!1,form:o,initialValues:g,layout:$||(N?"vertical":"horizontal"),ref:j,variant:d,style:{gap:f,...m},onFinish:async(...e)=>{k&&(T(!0),await k(...e),T(!1))},...S,children:[a&&a?.length>0?"group"===s?a?.map((e,t)=>R(e,t)):(0,r.jsx)(el,{className:u?.group,style:p?.group,variant:c,children:a?.filter(e=>!e.hidden).map((e,t)=>F(e,t))}):void 0,l,i]})})});es.displayName="Form";var O=O;es.Item=W,es.Group=I,es.Title=R,es.useForm=O.default.useForm,es.Provider=O.default.Provider,es.SubmitFooter=ea;var ed=e.i(650246);let ec=(0,b.createStyles)(({css:e,responsive:t,token:r})=>({footer:e`
    position: absolute;
    z-index: 10;
    inset-block-end: 0;
    inset-inline: 0;

    width: 100%;
    margin: 0;
    padding: 16px;

    background: linear-gradient(
      to bottom,
      color-mix(in srgb, ${r.colorBgContainer} 0%, transparent) 0%,
      ${r.colorBgContainer} 10%
    );
  `,form:e`
    position: static;

    .ant-form-group-title {
      font-size: 15px;
      font-weight: 500;
    }

    ${t.sm} {
      .ant-form-group-title {
        font-size: 14px;
        font-weight: normal;
      }

      .ant-form-group {
        width: calc(100% + 32px);
        margin-inline: -16px;
        background: transparent;
      }
    }
  `})),eu=(0,t.memo)(({classNames:e={},className:t,style:n,closable:i,styles:o={},allowFullscreen:a,title:l,afterOpenChange:s,width:d,onCancel:c,centered:f,open:m,afterClose:h,destroyOnHidden:y,closeIcon:g,paddings:v,height:x,enableResponsive:w,zIndex:k,mask:j,getContainer:$,keyboard:S,focusable:N,forceRender:C,loading:T,footer:E,submitButtonProps:I,submitLoading:F,onFinish:R,submitText:z,variant:M="borderless",gap:A,onSubmit:O,children:L,ref:W,...P})=>{let{styles:V}=ec(),{mobile:D}=(0,B.useResponsive)(),{form:G,...H}=e,{form:U,...K}="function"==typeof o?{form:void 0}:o,X=null===E?void 0:(0,r.jsx)(p.Flexbox,{align:"center",className:V.footer,gap:8,horizontal:!0,children:E??(0,r.jsx)(u.Button,{block:!0,htmlType:"submit",loading:F,type:"primary",...I,onClick:O,style:{flex:1,...I?.style},children:z||"Submit"})});return(0,r.jsx)(ed.Modal,{afterClose:h,afterOpenChange:s,allowFullscreen:a,centered:f,className:t,classNames:H,closable:i,closeIcon:g,confirmLoading:F,destroyOnHidden:y,enableResponsive:w,focusable:N,footer:null,forceRender:C,getContainer:$,height:x,keyboard:S,loading:T,mask:j,onCancel:c,open:m,paddings:v,style:n,styles:"function"==typeof o?o:{...K,body:{paddingTop:D?0:void 0,...K?.body}},title:l,width:d,zIndex:k,children:(0,r.jsx)(es,{className:(0,b.cx)(V.form,G||""),clearOnDestroy:y,footer:X,gap:A??("borderless"===M?24:void 0),onFinish:R,ref:W,style:{paddingBottom:56*(null!==E),...U},styles:{title:{fontSize:14}},variant:M,...P,children:L})})});eu.displayName="FormModal",e.s(["default",0,eu],311267)}]);