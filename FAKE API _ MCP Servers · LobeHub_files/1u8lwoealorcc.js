(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,587015,e=>{"use strict";var t=e.i(843476),i=e.i(208544),l=e.i(177025),r=e.i(58125),s=e.i(184283);let a=(0,s.createStaticStyles)(({css:e,cssVar:t})=>{let i="var(--gradient-button-border-radius, var(--ant-border-radius))";return{buttonDark:e`
      position: relative;
      z-index: 1;
      border: none;
      border-radius: ${i} !important;

      &::before {
        ${r.staticStylish.gradientAnimation}
        content: '';

        position: absolute;
        z-index: -2;
        inset: 0;

        border-radius: ${i};
      }

      &::after {
        content: '';

        position: absolute;
        z-index: -1;
        inset-block-start: 1px;
        inset-inline-start: 1px;

        width: calc(100% - 2px);
        height: calc(100% - 2px);
        border-radius: calc(${i} - 1px);

        background: ${t.colorBgLayout};
      }

      &:hover {
        &::after {
          background: color-mix(in srgb, ${t.colorBgLayout} 90%, transparent);
        }
      }

      &:active {
        &::after {
          background: color-mix(in srgb, ${t.colorBgLayout} 85%, transparent);
        }
      }
    `,buttonLight:e`
      position: relative;
      z-index: 1;
      border: none;
      border-radius: ${i} !important;

      &::before {
        ${r.staticStylish.gradientAnimation}
        content: '';

        position: absolute;
        z-index: -2;
        inset: 0;

        border-radius: ${i};
      }

      &::after {
        content: '';

        position: absolute;
        z-index: -1;
        inset-block-start: 1px;
        inset-inline-start: 1px;

        width: calc(100% - 2px);
        height: calc(100% - 2px);
        border-radius: calc(${i} - 1px);

        background: ${t.colorBgContainer};
      }

      &:hover {
        &::after {
          background: color-mix(in srgb, ${t.colorBgContainer} 95%, transparent);
        }
      }

      &:active {
        &::after {
          background: color-mix(in srgb, ${t.colorBgContainer} 90%, transparent);
        }
      }
    `,glow:(0,s.cx)(r.staticStylish.gradientAnimation,e`
        position: absolute;
        z-index: -2;
        inset-block-start: 0;
        inset-inline-start: 0;

        width: 100%;
        height: 100%;
        border-radius: inherit;

        opacity: 0.5;
        filter: blur(0.5em);
      `)}});var n=e.i(271645),o=e.i(639007);let c=(0,n.memo)(({glow:e=!0,children:i,className:r,size:c,disabled:d,style:p,...x})=>{let{isDarkMode:h}=(0,o.useThemeMode)(),m=(0,n.useMemo)(()=>{let e;if(!c||d)return{};switch(c){case"large":e=s.cssVar.borderRadiusLG;break;case"small":e=s.cssVar.borderRadiusSM;break;default:e=s.cssVar.borderRadius}return{"--gradient-button-border-radius":e}},[c,d]);return(0,t.jsxs)(l.default,{disabled:d,size:c,variant:d?void 0:"text",className:(0,s.cx)(!d&&(h?a.buttonDark:a.buttonLight),r),style:{...m,...p},...x,children:[e&&(0,t.jsx)("div",{className:a.glow}),i]})});c.displayName="GradientButton";var d=e.i(456420);let p=(0,d.default)("gift",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M20 11v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8",key:"1sqzm4"}],["path",{d:"M7.5 7a1 1 0 0 1 0-5A4.8 8 0 0 1 12 7a4.8 8 0 0 1 4.5-5 1 1 0 0 1 0 5",key:"kc0143"}],["rect",{x:"3",y:"7",width:"18",height:"4",rx:"1",key:"1hberx"}]]);e.i(785269);var x=e.i(322831),h=e.i(171858),m=e.i(790882),u=e.i(347782),g=e.i(748619),b=e.i(486642),j=e.i(892766),f=e.i(889515),y=e.i(23582),k=e.i(658726),w=e.i(302670);let S=e=>{let t=w.subscriptionPlan[e].limit.credit*w.CREDIT_UNIT;return{normal:t/w.TOKEN_PER_MESSAGE,pro:t/(10*w.TOKEN_PER_MESSAGE)}},v=()=>{let{t:e}=(0,x.useTranslation)("subscription"),t={...w.subscriptionPlan[k.Plans.Free],children:{creditPackage:e("plans.creditPackage.unavailable"),message:S(k.Plans.Free),support:e("plans.support.starter")},desc:e("plans.plan.free.desc"),title:e("plans.plan.free.title")},i={...w.subscriptionPlan[k.Plans.Starter],children:{creditPackage:e("plans.creditPackage.available"),message:S(k.Plans.Starter),support:e("plans.support.starter")},desc:e("plans.plan.starter.desc"),title:e("plans.plan.starter.title")},l={...w.subscriptionPlan[k.Plans.Premium],children:{creditPackage:e("plans.creditPackage.available"),message:S(k.Plans.Premium),support:e("plans.support.premium")},desc:e("plans.plan.premium.desc"),title:e("plans.plan.premium.title")},r={...w.subscriptionPlan[k.Plans.Ultimate],children:{creditPackage:e("plans.creditPackage.available"),message:S(k.Plans.Ultimate),support:e("plans.support.ultimate")},desc:e("plans.plan.ultimate.desc"),title:e("plans.plan.ultimate.title")};return{[k.Plans.Free]:t,[k.Plans.Starter]:i,[k.Plans.Premium]:l,[k.Plans.Ultimate]:r}},P=(0,d.default)("cloudy",[["path",{d:"M17.5 12a1 1 0 1 1 0 9H9.006a7 7 0 1 1 6.702-9z",key:"44yre2"}],["path",{d:"M21.832 9A3 3 0 0 0 19 7h-2.207a5.5 5.5 0 0 0-10.72.61",key:"leugyv"}]]);var z=e.i(420985),z=z;let F=(0,d.default)("sparkle",[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}]]);var M=e.i(928051);let N=(0,d.default)("badge-cent",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M15.4 10a4 4 0 1 0 0 4",key:"2eqtx8"}]]);var T=e.i(770225),I=e.i(352455),$=e.i(33612),C=e.i(491816),C=C,B=e.i(123243),E=e.i(834101),U=e.i(593698),_=e.i(176699),_=_;let A=(0,n.memo)(({type:e="check"})=>{let i,l,r=(0,s.useTheme)();switch(e){case"check":i=U.CheckIcon,l=r.colorSuccess;break;case"none":i=_.default,l=r.colorFill}return(0,t.jsx)(B.Center,{flex:"none",height:18,style:{background:l,borderRadius:"50%"},width:18,children:(0,t.jsx)(E.Icon,{color:r.colorBgContainer,icon:i,size:14})})}),R=(0,s.createStaticStyles)(({css:e,cssVar:t})=>({desc:e`
    font-size: 12px;
    color: ${t.colorTextDescription};
  `,title:e`
    font-size: 14px;
  `})),L=(0,n.memo)(({extra:e,tooltip:l,showIcon:r,title:s,desc:a,type:n})=>{let o=s||a,c=(0,t.jsxs)(i.Flexbox,{gap:8,children:[r&&(0,t.jsx)(A,{type:n}),o&&(0,t.jsxs)(i.Flexbox,{children:[s&&(0,t.jsxs)(i.Flexbox,{align:"center",className:R.title,gap:8,horizontal:!0,children:[s,e]}),a&&(0,t.jsx)("div",{className:R.desc,children:a})]})]});return l?(0,t.jsx)(C.default,{title:l,children:c}):c}),W=(0,s.createStaticStyles)(({css:e,cssVar:t})=>({icon:e`
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: 8px;
    background: ${t.colorBgElevated};
  `,sticky:e`
    position: sticky;
    inset-block-start: 162px;
    background: ${t.colorBgContainer};
  `,td:e`
    padding-block: 18px;

    &:first-child {
      width: 280px;
      padding-inline-end: 24px;
    }

    &:not(:first-child) {
      padding-inline-start: 24px;
    }
  `,tdMobile:e`
    width: 100%;
    padding-block: 18px;
  `,title:e`
    margin: 0;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.2;
  `})),D=(0,n.memo)(({title:e,icon:l,mobile:r})=>(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{className:(0,s.cx)(r?W.tdMobile:W.td,!r&&W.sticky),children:(0,t.jsxs)(i.Flexbox,{align:"center",gap:12,horizontal:!0,children:[(0,t.jsx)(B.Center,{className:W.icon,flex:"none",height:32,width:32,children:(0,t.jsx)(E.Icon,{icon:l,size:20})}),(0,t.jsx)("h3",{className:W.title,children:e})]})}),!r&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("td",{className:W.td}),(0,t.jsx)("td",{className:W.td}),(0,t.jsx)("td",{className:W.td}),(0,t.jsx)("td",{className:W.td})]})]}));var C=C,V=e.i(235056);let H=(0,s.createStaticStyles)(({css:e,cssVar:t})=>({icon:e`
    border-radius: 8px;
    background: ${t.colorPrimary};
  `,td:e`
    padding-block: 18px;

    &:first-child {
      width: 280px;
      padding-inline-end: 24px;
    }

    &:not(:first-child) {
      padding-inline-start: 24px;
    }
  `,tdMobile:e`
    padding-block: 18px;

    &:not(:first-child) {
      display: flex;
      align-items: center;
      justify-content: flex-end;

      padding-inline-start: 24px;

      text-align: end;
    }
  `,title:e`
    font-size: 14px;
  `,tr:e`
    border-block-start: 1px solid ${t.colorBorderSecondary};
  `,trMobile:e`
    display: flex;
    justify-content: space-between;
    border-block-start: 1px solid ${t.colorBorderSecondary};
  `})),O=(0,n.memo)(({title:e,tooltip:l,items:r,mobile:a})=>(0,t.jsxs)("tr",{className:a?H.trMobile:H.tr,children:[(0,t.jsx)("td",{className:a?H.tdMobile:H.td,children:(0,t.jsxs)(i.Flexbox,{align:"center",className:H.title,gap:8,horizontal:!0,width:"100%",children:[e,l&&(0,t.jsx)(C.default,{title:l,children:(0,t.jsx)(E.Icon,{color:s.cssVar.colorTextDescription,icon:V.CircleHelp,style:{cursor:"pointer"}})})]})}),(0,t.jsx)("td",{className:(0,s.cx)(a?H.tdMobile:H.td),children:r?.[0]}),!a&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("td",{className:H.td,children:r?.[1]}),(0,t.jsx)("td",{className:H.td,children:r?.[2]}),(0,t.jsx)("td",{className:H.td,children:r?.[3]})]})]})),G=(0,n.memo)(({items:e,mobile:l,models:r})=>{let{t:s}=(0,x.useTranslation)("subscription");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(D,{icon:N,mobile:l,title:s("plans.credit.title")}),(0,t.jsx)(O,{items:e.map(e=>(0,t.jsx)(L,{title:[(0,I.formatIntergerNumber)(e.limit.credit*w.CREDIT_UNIT),s("recurring.perMonth")].join(" / ")},e.id)),mobile:l,title:s("compare.monthlyCredit"),tooltip:s("plans.credit.tooltip")}),(r??T.default.chatModels).map(r=>(0,t.jsx)(O,{items:e.map(e=>{if(!r?.pricing?.input||!r?.pricing?.output)return null;let i=(0,$.formatModelMessageCount)(e.limit.credit,r.pricing.input,r.pricing.output);return"0"===i?(0,t.jsx)(L,{desc:s("plans.message.unsupported")},e.id):(0,t.jsx)(L,{title:s("plans.message.count",{number:i})},e.id)}),mobile:l,title:(0,t.jsxs)(i.Flexbox,{align:"center",gap:8,horizontal:!0,children:[(0,t.jsx)(M.ModelIcon,{model:r.id,size:24}),`${r.displayName} (${(0,I.formatTokenNumber)(Number(r.contextWindowTokens))})`]}),tooltip:s("plans.message.tooltip",{number:(0,I.formatIntergerNumber)(w.TOKEN_PER_MESSAGE)})},r.id))]})}),K=(0,d.default)("folder-closed",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M2 10h20",key:"1ir3d8"}]]),q=(0,n.memo)(({items:e,mobile:i})=>{let{t:l}=(0,x.useTranslation)("subscription");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(D,{icon:K,mobile:i,title:l("plans.knowledgeBase.title")}),(0,t.jsx)(O,{items:e.map(e=>(0,t.jsx)(L,{showIcon:!0,tooltip:l("plans.knowledgeBase.filetype")},e.id)),mobile:i,title:l("plans.knowledgeBase.desc"),tooltip:l("plans.knowledgeBase.tooltip")}),(0,t.jsx)(O,{items:e.map(e=>(0,t.jsx)(L,{title:(0,I.formatSize)(e.limit.fileStorage)},e.id)),mobile:i,title:l("plans.fileStorage.title"),tooltip:l("plans.fileStorage.tooltip")}),(0,t.jsx)(O,{items:e.map(e=>(0,t.jsx)(L,{desc:`≈ ${e.limit.embeddingStorage/100}MB`,title:[(0,I.formatNumber)(e.limit.embeddingStorage,0),l("plans.embeddingStorage.embeddings")].join(" ")},e.id)),mobile:i,title:l("plans.embeddingStorage.title"),tooltip:l("plans.embeddingStorage.tooltip")})]})}),Y=(0,n.memo)(({mobile:e,items:i,models:l})=>{let{t:r}=(0,x.useTranslation)("subscription");return(0,t.jsxs)("tbody",{children:[(0,t.jsx)(G,{items:i,mobile:e,models:l}),(0,t.jsx)(q,{items:i,mobile:e}),(0,t.jsx)(D,{icon:P,mobile:e,title:r("plans.llm.title")}),(0,t.jsx)(O,{items:i.map(e=>(0,t.jsx)(L,{showIcon:!0},e.id)),mobile:e,title:r("plans.llm.customAPI")}),(0,t.jsx)(O,{items:i.map(e=>(0,t.jsx)(L,{showIcon:!0},e.id)),mobile:e,title:r("plans.llm.messageRequest")}),(0,t.jsx)(D,{icon:P,mobile:e,title:r("plans.cloud.title")}),(0,t.jsx)(O,{items:i.map(e=>(0,t.jsx)(L,{showIcon:!0},e.id)),mobile:e,title:r("plans.cloud.history")}),(0,t.jsx)(O,{items:i.map(e=>(0,t.jsx)(L,{showIcon:!0},e.id)),mobile:e,title:r("plans.cloud.sync")}),(0,t.jsx)(D,{icon:F,mobile:e,title:r("plans.features.title")}),(0,t.jsx)(O,{items:i.map(e=>(0,t.jsx)(L,{showIcon:!0},e.id)),mobile:e,title:r("plans.features.agents")}),(0,t.jsx)(O,{items:i.map(e=>(0,t.jsx)(L,{showIcon:!0},e.id)),mobile:e,title:r("plans.features.plugins")}),(0,t.jsx)(O,{items:i.map(e=>(0,t.jsx)(L,{showIcon:!0},e.id)),mobile:e,title:r("plans.features.internet")}),(0,t.jsx)(D,{icon:z.default,mobile:e,title:r("plans.support.title")}),(0,t.jsx)(O,{items:i.map(e=>(0,t.jsx)(L,{title:e.children.support},e.id)),mobile:e,title:r("plans.support.channel")}),(0,t.jsx)(O,{items:i.map(e=>(0,t.jsx)(L,{title:e.children.creditPackage},e.id)),mobile:e,title:r("plans.creditPackage.title")})]})});var Z=e.i(450354),X=e.i(215648);let J=(0,d.default)("atom",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]]),Q=(0,d.default)("circle-slash",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9",key:"1dfufj"}]]),ee=(0,d.default)("zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),et={[k.Plans.Free]:{icon:Q,theme:{background:void 0,color:void 0}},[k.Plans.Starter]:{icon:F,theme:{background:"linear-gradient(45deg, #C57948, #803718)",color:"#FFC385"}},[k.Plans.Premium]:{icon:ee,theme:{background:"linear-gradient(45deg, #A5B4C2, #606E7B)",color:"#FCFDFF"}},[k.Plans.Ultimate]:{icon:J,theme:{background:"linear-gradient(45deg, #F7A82F, #BB7227)",color:"#FCFA6E"}}},ei=(0,s.createStaticStyles)(({css:e,cssVar:t})=>({icon:e`
    flex: none;
    border-radius: ${t.borderRadiusLG};
    box-shadow: 0 0 0 1px ${t.colorFillSecondary};
  `})),el=(0,n.memo)(({type:e="icon",plan:l,size:r=36,mono:a,style:n,className:o,onClick:c})=>{let{icon:d,theme:p}=et[l],{t:h}=(0,x.useTranslation)("subscription"),m=l===k.Plans.Free;if("tag"===e)return(0,t.jsx)(X.Tag,{bordered:!1,className:o,onClick:c,style:{...p||{background:s.cssVar.colorFillSecondary,color:s.cssVar.colorText},border:"none",borderRadius:12,cursor:"pointer",flex:"none",margin:0,...n},children:h(`plans.plan.${l}.title`)});let u=(0,t.jsx)(B.Center,{className:(0,s.cx)(ei.icon,o),height:r,onClick:c,style:a?n:{...p,border:m?void 0:`2px solid ${p.color}`,...n},width:r,children:(0,t.jsx)(E.Icon,{color:a?void 0:p.color,icon:d,size:r/2})});return"combine"===e?(0,t.jsxs)(i.Flexbox,{align:"center",gap:8,horizontal:!0,children:[u,(0,t.jsx)("span",{children:h(`plans.plan.${l}.title`)})]}):u}),er=(0,s.createStaticStyles)(({css:e,cssVar:t})=>({btn:e`
    margin-block-start: 12px;
    border-radius: 6px;
    font-size: 13px;
  `,desc:e`
    font-size: 12px;
    font-weight: 400;
    color: ${t.colorTextDescription};
    text-align: start;
  `,planTitle:e`
    margin: 0;

    font-size: 16px;
    font-weight: bold;
    line-height: 1.2;
    text-align: start;
  `,sticky:e`
    position: sticky;
    z-index: 20;
    inset-block-start: 0;
    background: ${t.colorBgContainer};
  `,th:e`
    padding-block: 18px;
    padding-block-start: 114px !important;

    &:first-child {
      width: 280px;
      padding-inline-end: 24px;
    }

    &:not(:first-child) {
      padding-inline-start: 24px;
    }
  `,thMobile:e`
    width: 100%;
    padding-block: 18px;
  `,title:e`
    margin-block: 0;

    font-size: 20px;
    font-weight: bold;
    line-height: 1.5;
    text-align: start;
    ${s.responsive.sm} {
      font-size: 16px;
    }
  `})),es=(0,n.memo)(({mobile:e,items:l})=>{let{t:r}=(0,x.useTranslation)("subscription");return(0,t.jsx)("thead",{className:(0,s.cx)(!e&&er.sticky),children:(0,t.jsxs)("tr",{children:[!e&&(0,t.jsx)("th",{className:er.th,children:(0,t.jsx)("h2",{className:er.title,children:r("compare.title")})}),l.map(l=>(0,t.jsxs)("th",{className:e?er.thMobile:er.th,children:[(0,t.jsxs)(i.Flexbox,{align:"center",gap:12,horizontal:!0,children:[(0,t.jsx)(el,{plan:l.id,size:36}),(0,t.jsxs)(i.Flexbox,{children:[(0,t.jsx)("h2",{className:er.planTitle,children:l.title}),(0,t.jsxs)("div",{className:er.desc,children:["$"+(0,I.formatPrice)(l.price.monthly,1)," ",r("recurring.perMonth")," / ","$"+(0,I.formatPrice)(12*l.price.yearly,1)," ",r("recurring.perYear")]})]})]}),(0,t.jsx)(u.default,{href:(0,j.urlWithUTM)(j.LOBE_CHAT_URL,{utmContent:f.UTM_CONTENT.pricingStart,utmMedium:f.UTM_MEDIUM.pricing}),target:"_blank",children:(0,t.jsx)(Z.Button,{block:!0,className:er.btn,size:"small",type:"primary",children:r("btn.start",{ns:"price"})})})]},l.id))]})})}),ea=(0,s.createStaticStyles)(({css:e,cssVar:t})=>({mobileSelect:e`
    position: sticky;
    z-index: 10;
    inset-block-start: 72px;

    width: 100%;
    padding-block: 8px;

    background: ${t.colorBgContainer};
  `,table:e`
    table-layout: fixed;
    border-collapse: collapse;

    width: 100%;
    border-color: inherit;

    text-indent: 0;
  `,title:e`
    margin-block: 0;
    font-size: 20px;
    font-weight: bold;
    line-height: 1.5;
    ${s.responsive.sm} {
      font-size: 16px;
    }
  `})),en=(0,n.memo)(({mobile:e,models:l})=>{let[r,s]=(0,n.useState)(k.Plans.Free),{t:a}=(0,x.useTranslation)("subscription"),o=v(),c=[o[k.Plans.Free],o[k.Plans.Starter],o[k.Plans.Premium],o[k.Plans.Ultimate]],d=e?[o[r]]:c;return(0,t.jsxs)(i.Flexbox,{children:[e&&(0,t.jsx)("h2",{className:ea.title,children:a("compare.title")}),e&&(0,t.jsxs)(i.Flexbox,{align:"center",className:ea.mobileSelect,horizontal:!0,justify:"space-between",children:[(0,t.jsx)("div",{children:a("plans.changePlan")}),(0,t.jsx)(y.Select,{defaultValue:k.Plans.Free,onChange:e=>s(e),options:c.map(e=>({label:e.title,value:e.id})),style:{minWidth:100},value:r})]}),(0,t.jsxs)("table",{className:ea.table,children:[(0,t.jsx)(es,{items:d,mobile:e}),(0,t.jsx)(Y,{items:d,mobile:e,models:l})]})]})});var eo=e.i(943243),C=C,ec=e.i(689664),ed=e.i(560964);let ep=(0,s.createStaticStyles)(({css:e,cssVar:t})=>({content:e`
    line-height: 1.2;
  `,desc:e`
    font-size: 12px;
    line-height: 1.2;
    color: ${t.colorTextDescription};
  `,title:e`
    font-size: 14px;
    font-weight: 500;
    line-height: 1.2;
    color: ${t.colorTextSecondary};
  `})),ex=(0,n.memo)(({icon:e,iconColor:l,title:r,tooltip:a,children:n,showIcon:o,items:c,desc:d,included:p=!0})=>{let x=(0,t.jsxs)(i.Flexbox,{gap:8,width:"100%",children:[r&&(0,t.jsxs)(i.Flexbox,{align:"center",className:ep.title,gap:4,horizontal:!0,width:"100%",children:[r,a&&(0,t.jsx)(C.default,{title:a,children:(0,t.jsx)(E.Icon,{icon:V.CircleHelp,style:{cursor:"pointer"}})})]}),n&&(0,t.jsx)("div",{className:ep.content,children:n}),d&&(0,t.jsx)("div",{className:ep.desc,children:d})]});return(o&&(x=(0,t.jsxs)(i.Flexbox,{align:"flex-start",gap:8,horizontal:!0,width:"100%",children:[(0,t.jsx)(B.Center,{flex:"none",height:16,width:16,children:(0,t.jsx)(E.Icon,{color:l||(e?s.cssVar.colorTextSecondary:p?s.cssVar.colorSuccess:s.cssVar.colorError),icon:e||(p?ec.Check:ed.XIcon)})}),x]})),c)?(0,t.jsxs)(i.Flexbox,{gap:12,width:"100%",children:[x,c]}):x}),eh=(0,s.createStaticStyles)(({css:e,cssVar:t})=>({card:e`
    position: relative;

    overflow: hidden;

    padding: 48px;
    border-radius: 20px !important;

    background: color-mix(in srgb, ${t.colorBgContainer} 85%, transparent);
    box-shadow:
      0 0 1px ${t.colorFillSecondary},
      0 12px 24px -12px #4a15271a;

    ${s.responsive.sm} {
      padding: 24px;
    }
  `,desc:e`
    font-size: 16px;
    color: ${t.colorTextSecondary};
  `,features:e`
    font-size: 16px;
  `,title:e`
    font-size: 28px;
    font-weight: bold;
  `})),em=(0,n.memo)(({mobile:e})=>{let{t:l}=(0,x.useTranslation)("price");return(0,t.jsxs)(eo.Block,{className:eh.card,gap:24,horizontal:!0,justify:"space-between",variant:"outlined",width:"100%",wrap:"wrap",children:[(0,t.jsxs)(i.Flexbox,{children:[(0,t.jsx)("h2",{className:eh.title,children:l("enterprise.title")}),(0,t.jsx)("div",{className:eh.desc,children:l("enterprise.desc")})]}),(0,t.jsxs)(i.Flexbox,{className:eh.features,gap:16,children:[(0,t.jsx)(ex,{showIcon:!0,children:l("enterprise.features.license")}),(0,t.jsx)(ex,{showIcon:!0,children:l("enterprise.features.brand")}),(0,t.jsx)(ex,{showIcon:!0,children:l("enterprise.features.auth")})]}),(0,t.jsxs)(i.Flexbox,{className:eh.features,gap:16,children:[(0,t.jsx)(ex,{showIcon:!0,children:l("enterprise.features.provider")}),(0,t.jsx)(ex,{showIcon:!0,children:l("enterprise.features.llm")}),(0,t.jsx)(ex,{showIcon:!0,children:l("enterprise.features.support")})]}),(0,t.jsx)(u.default,{href:(0,j.mailTo)(j.BASE_MAIL),style:e?{flex:1}:{},target:"_blank",children:(0,t.jsx)(Z.Button,{block:e,size:"large",style:{fontWeight:500,minWidth:200},type:"primary",children:l("btn.contact")})})]})});var eu=e.i(367324),eu=eu,eg=e.i(52655);let eb=(0,s.createStaticStyles)(({css:e,cssVar:t})=>({table:e`
    overflow-x: auto;
    min-width: 320px;
    border: 1px solid ${t.colorBorderSecondary};
    border-radius: ${t.borderRadiusLG};
  `,title:e`
    margin-block-end: 0.5em;
    font-size: 32px;
    font-weight: bold;
    line-height: 1.2;
    ${s.responsive.sm} {
      font-size: 26px;
      text-align: center;
    }
  `})),ej=(0,n.memo)(({mobile:e,locale:l,models:r})=>{let{t:s}=(0,x.useTranslation)("price");return(0,t.jsxs)(i.Flexbox,{align:"flex-start",gap:24,horizontal:!0,paddingBlock:16,width:"100%",wrap:"wrap",children:[(0,t.jsxs)(i.Flexbox,{flex:1,gap:16,children:[(0,t.jsx)("h2",{className:eb.title,children:s("modelPricing.title")}),(0,t.jsx)("div",{children:s("modelPricing.desc",{name:"LobeHub Cloud"})}),(0,t.jsx)(i.Flexbox,{gap:8,horizontal:!0,children:(0,t.jsx)(u.default,{href:"/docs/usage/subscription/model-pricing",style:e?{flex:1}:{},children:(0,t.jsx)(Z.Button,{block:e,icon:eu.default,size:"large",style:{minWidth:240},children:s("modelPricing.button")})})})]}),(0,t.jsx)(i.Flexbox,{className:eb.table,flex:2,children:(0,t.jsx)(eg.default,{locale:"zh"===l?"zh":"en",models:r,style:{minWidth:"100%"}})})]})});var ef=e.i(43884),ey=e.i(256017);let ek=(0,n.memo)(({type:e="off",percent:i,prices:l=[1,1]})=>{let{t:r}=(0,x.useTranslation)("subscription"),s=l[0]>l[1]?l[0]:l[1],a=l[0]<l[1]?l[0]:l[1];return(0,t.jsx)(X.Tag,{color:"success",variant:"filled",children:r(`discount.${e}`,{percent:i||Math.floor((1-a/s)*100)})})});var ew=e.i(262633),eS=e.i(809584),ev=e.i(374491),ev=ev,eP=e.i(150285);let ez=(0,d.default)("headphones",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);var eF=e.i(770990);let eM=(0,d.default)("shopping-bag",[["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}],["path",{d:"M3.103 6.034h17.794",key:"awc11p"}],["path",{d:"M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",key:"o988cm"}]]);var eN=e.i(328623),eT=e.i(438583);let eI=(0,n.memo)(({children:e,limit:l,id:r,planCardModels:s})=>{let{t:a}=(0,x.useTranslation)("subscription"),n=r===k.Plans.Starter?a("plans.includesFrom.free"):r===k.Plans.Premium?a("plans.includesFrom.starter"):r===k.Plans.Ultimate?a("plans.includesFrom.premium"):null;return(0,t.jsxs)(i.Flexbox,{gap:16,style:{fontSize:15},width:"100%",children:[n&&(0,t.jsx)("div",{style:{fontSize:13,fontWeight:500,opacity:.7},children:n}),(0,t.jsx)(ex,{icon:N,showIcon:!0,children:a("plans.credit.creditsPerMonth",{count:(0,I.formatIntergerNumber)(l.credit*w.CREDIT_UNIT)})}),s?.map(e=>{if(!e.pricing.input||!e.pricing.output)return null;let i=(0,$.formatModelMessageCount)(l.credit,e.pricing.input,e.pricing.output);return(0,t.jsx)(ex,{showIcon:!0,title:(0,t.jsx)("span",{style:{overflowWrap:"anywhere"},children:e.displayName}),tooltip:a("plans.message.tooltip",{number:(0,I.formatIntergerNumber)(w.TOKEN_PER_MESSAGE)}),children:"0"===i?a("plans.message.unsupported"):a("plans.message.count",{number:i})},e.id)}),s&&s.length>0&&(0,t.jsx)(ex,{showIcon:!0,title:a("plans.message.more")}),(0,t.jsx)(ex,{icon:ez,showIcon:!0,children:e.support}),(0,t.jsx)(ex,{icon:eP.HardDrive,showIcon:!0,children:[a("plans.fileStorage.title"),(0,I.formatSize)(l.fileStorage)].join(": ")}),r!==k.Plans.Free&&(0,t.jsx)(ex,{icon:eS.Database,showIcon:!0,children:[a("plans.embeddingStorage.title"),(0,I.formatIntergerNumber)(l.embeddingStorage)+" "+a("plans.embeddingStorage.embeddings")].join(": ")}),r!==k.Plans.Free&&(0,t.jsx)(ex,{icon:eM,showIcon:!0,children:e.creditPackage}),r!==k.Plans.Free&&(0,t.jsx)(ex,{icon:ee,showIcon:!0,title:a("plans.features.earlyAccess"),tooltip:a("plans.features.earlyAccessTooltip")}),r!==k.Plans.Free&&(0,t.jsx)(ex,{icon:ew.Brain,showIcon:!0,children:a("plans.features.agentMemory")}),r===k.Plans.Free&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(ex,{icon:ev.default,showIcon:!0,children:a("plans.features.unlimitedPages")}),(0,t.jsx)(ex,{icon:eF.ImageIcon,showIcon:!0,children:a("plans.features.imageGeneration")}),(0,t.jsx)(ex,{icon:eT.Video,showIcon:!0,children:a("plans.features.videoGeneration")}),(0,t.jsx)(ex,{icon:eN.Sparkles,showIcon:!0,children:a("plans.features.agents")})]})]})}),e$=(0,s.createStaticStyles)(({css:e})=>({price:e`
    font-size: 24px;
    font-weight: bold;
  `,recurring:e`
    font-size: 14px;
    font-weight: normal;
  `})),eC=(0,n.memo)(({extra:e,price:l,recurring:r,fontSize:s=24,style:a})=>(0,t.jsxs)(i.Flexbox,{align:"baseline",as:"h3",gap:4,horizontal:!0,style:{margin:0,...a},children:[(0,t.jsxs)(i.Flexbox,{align:"center",className:e$.price,gap:2,horizontal:!0,style:{fontSize:s},children:["$",(0,t.jsx)("span",{style:{fontSize:"1.2em",lineHeight:1},children:(0,I.formatPrice)(l,1)})]}),(0,t.jsx)("div",{className:e$.recurring,children:`/ ${r}`}),e]})),eB=(0,s.createStaticStyles)(({css:e,cssVar:t})=>({desc:e`
    line-height: 1.4;
    color: ${t.colorTextSecondary};
  `,freeLabel:e`
    margin: 0;
    font-size: 28.8px;
    font-weight: bold;
    line-height: 1.4;
  `,title:e`
    font-size: 16px;
    font-weight: bold;
    line-height: 1.2;
  `})),eE=(0,n.memo)(({title:e,price:l,id:r,recurring:s})=>{let{t:a}=(0,x.useTranslation)(["subscription","price"]),n=s===k.Recurring.Yearly,o=r===k.Plans.Free,c=o?a("plans.credit.monthlyRefresh"):e;return(0,t.jsxs)(i.Flexbox,{gap:16,width:"100%",children:[(0,t.jsx)(el,{plan:r}),(0,t.jsxs)(i.Flexbox,{children:[o?(0,t.jsx)("h3",{className:eB.freeLabel,children:a("plans.plan.free.title")}):(0,t.jsx)(eC,{price:n?l.yearly:l.monthly,recurring:a("recurring.perMonth")}),(0,t.jsx)("div",{className:eB.desc,children:c})]}),(0,t.jsx)(u.default,{href:(0,j.urlWithUTM)(j.LOBE_CHAT_URL,{utmContent:f.UTM_CONTENT.pricingStart,utmMedium:f.UTM_MEDIUM.pricing}),target:"_blank",children:(0,t.jsx)(Z.Button,{block:!0,style:{fontWeight:500},type:r===k.Plans.Premium?"primary":"default",children:a("btn.start",{ns:"price"})})})]})}),eU=(0,s.createStaticStyles)(({css:e,cssVar:t})=>({badge:e`
    position: absolute;
    inset-block-start: 0;
    inset-inline-end: 0;

    padding-block: 6px;
    padding-inline: 16px;
    border-end-start-radius: 12px;

    font-size: 12px;
    font-weight: 600;
    line-height: 1.4;
    color: ${t.colorBgContainer};

    background: ${t.colorPrimary};
  `,card:e`
    position: relative;

    overflow: hidden;

    border-radius: 20px !important;

    background: color-mix(in srgb, ${t.colorBgContainer} 85%, transparent);
    box-shadow:
      0 0 1px ${t.colorFillSecondary},
      0 12px 24px #4a15271a;
  `,highlight:e`
    border: 2px solid ${t.colorPrimary};
    background: ${t.colorBgContainer};
  `})),e_=(0,n.memo)(({highlight:e,mobile:l,...r})=>{let{t:a}=(0,x.useTranslation)("subscription");return(0,t.jsxs)(i.Flexbox,{className:(0,s.cx)(eU.card,e&&eU.highlight),gap:24,padding:24,style:{borderRadius:12,paddingBottom:32},children:[e&&(0,t.jsx)("div",{className:eU.badge,children:a("plans.mostPicked")}),(0,t.jsx)(eE,{highlight:e,...r}),(0,t.jsx)(eI,{mobile:l,...r})]})});(0,s.createStaticStyles)(({css:e,cssVar:t})=>({segmentedMobile:e`
    z-index: 10;
    width: 100%;
    padding-block: 8px;
    background: ${t.colorBgContainer};
  `}));let eA=(0,n.memo)(({mobile:e,planCardModels:l})=>{let{t:r}=(0,x.useTranslation)("subscription"),[a,o]=(0,n.useState)(k.Recurring.Yearly),c=v(),d=[c[k.Plans.Free],c[k.Plans.Starter],c[k.Plans.Premium],c[k.Plans.Ultimate]],p=e?void 0:100,h=[{label:(0,t.jsxs)(i.Flexbox,{align:"center",gap:6,horizontal:!0,justify:"center",style:{minWidth:p},children:[r("plans.navs.yearly"),(0,t.jsx)(ek,{prices:[c.premium.price.monthly,c.premium.price.yearly],type:"off"})]}),value:k.Recurring.Yearly},{label:(0,t.jsx)(i.Flexbox,{align:"center",gap:6,horizontal:!0,justify:"center",style:{minWidth:p},children:r("plans.navs.monthly")}),value:k.Recurring.Monthly}];return(0,t.jsxs)(i.Flexbox,{align:"center",gap:24,width:"100%",children:[(0,t.jsx)(ey.Segmented,{block:e,onChange:e=>o(e),options:h,size:e?void 0:"large",style:{background:s.cssVar.colorBgLayout,width:e?"100%":void 0},value:a,variant:"outlined"}),(0,t.jsx)(ef.Grid,{gap:e?16:12,rows:4,width:"100%",children:d.map(i=>(0,t.jsx)(e_,{highlight:i.id===k.Plans.Premium,mobile:e,planCardModels:l,recurring:a,...i},i.id))})]})});var eR=e.i(520469);let eL=(0,n.memo)(({mobile:e,locale:l,pricingConfig:r})=>{let{t:s}=(0,x.useTranslation)(["price","notice"]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(m.default,{}),(0,t.jsxs)(i.Flexbox,{align:"center",gap:16,style:{maxWidth:800,paddingTop:48,zIndex:1},children:[(0,t.jsx)(g.default,{align:e?"center":void 0,children:s("title")}),(0,t.jsx)(b.default,{align:e?"center":void 0,as:"h3",style:{opacity:.6},children:s("freeTrial",{name:r.featuredModelNames})}),(0,t.jsx)(u.default,{href:(0,j.urlWithUTM)(j.LOBE_CHAT_URL,{utmContent:f.UTM_CONTENT.pricingFreeStart,utmMedium:f.UTM_MEDIUM.pricing}),children:(0,t.jsx)(c,{block:!0,icon:p,size:"large",style:{fontWeight:500,minWidth:200},children:s("freeStart")})})]}),(0,t.jsx)(i.Flexbox,{align:"center",style:{maxWidth:1440,paddingInline:24,width:"100vw"},children:(0,t.jsx)(eA,{mobile:e,planCardModels:r.planCardModels})}),(0,t.jsx)(em,{mobile:e}),(0,t.jsx)(ej,{locale:l,mobile:e,models:r.models}),(0,t.jsx)(en,{mobile:e,models:r.models}),(0,t.jsx)(eR.default,{mobile:e}),(0,t.jsx)(h.default,{mobile:e,variant:"pricing"})]})});e.s(["default",0,eL],587015)}]);