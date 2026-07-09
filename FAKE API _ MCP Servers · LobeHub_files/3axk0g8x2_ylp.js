(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,534300,e=>{"use strict";e.i(247167);var t=e.i(271645),o=e.i(201072),i=e.i(726289),n=e.i(864517),r=e.i(562901),l=e.i(779573),a=e.i(128473);e.i(63335);var s=e.i(232839),c=e.i(259089),d=e.i(207670),m=e.i(478375),u=e.i(806520),p=e.i(242064);e.i(296059);var h=e.i(915654),f=e.i(183293),b=e.i(246422);let g=(e,t,o)=>({background:e,[`${o}-icon`]:{color:t}}),x=(0,b.genStyleHooks)("Alert",e=>[(e=>{let{componentCls:t,motionDurationSlow:o,marginXS:i,marginSM:n,fontSize:r,fontSizeLG:l,lineHeight:a,borderRadiusLG:s,motionEaseInOutCirc:c,withDescriptionIconSize:d,colorText:m,colorTextHeading:u,withDescriptionPadding:p,defaultPadding:b,lineWidth:g,lineType:x,colorSuccessBorder:y,colorWarningBorder:v,colorErrorBorder:w,colorInfoBorder:k}=e;return{[t]:{...(0,f.resetComponent)(e),position:"relative",display:"flex",alignItems:"center",padding:b,wordWrap:"break-word",borderRadius:s,borderWidth:(0,h.unit)(g),borderStyle:x,[`&${t}-success`]:{borderColor:y},[`&${t}-info`]:{borderColor:k},[`&${t}-warning`]:{borderColor:v},[`&${t}-error`]:{borderColor:w},[`&${t}-filled`]:{borderColor:"transparent"},[`&${t}-rtl`]:{direction:"rtl"},[`${t}-section`]:{flex:1,minWidth:0},[`${t}-icon`]:{marginInlineEnd:i,lineHeight:0},"&-description":{display:"none",fontSize:r,lineHeight:a},"&-title":{color:u},[`&${t}-motion-leave`]:{overflow:"hidden",opacity:1,transition:["max-height","opacity","padding-top","padding-bottom","margin-bottom"].map(e=>`${e} ${o} ${c}`).join(", ")},[`&${t}-motion-leave-active`]:{maxHeight:0,marginBottom:"0 !important",paddingTop:0,paddingBottom:0,opacity:0},[`&${t}-with-description`]:{alignItems:"flex-start",padding:p,[`${t}-icon`]:{marginInlineEnd:n,fontSize:d,lineHeight:0},[`${t}-title`]:{display:"block",marginBottom:i,color:u,fontSize:l},[`${t}-description`]:{display:"block",color:m}},[`&${t}-banner`]:{marginBottom:0,border:"0 !important",borderRadius:0}}}})(e),(e=>{let{componentCls:t,colorSuccess:o,colorSuccessBg:i,colorWarning:n,colorWarningBg:r,colorError:l,colorErrorBg:a,colorInfo:s,colorInfoBg:c}=e;return{[t]:{"&-success":g(i,o,t),"&-info":g(c,s,t),"&-warning":g(r,n,t),"&-error":{...g(a,l,t),[`${t}-description > pre`]:{margin:0,padding:0}}}}})(e),(e=>{let{componentCls:t,iconCls:o,motionDurationMid:i,marginXS:n,fontSizeIcon:r,colorIcon:l,colorIconHover:a}=e;return{[t]:{[`${t}-actions`]:{marginInlineStart:n},[`${t}-close-icon`]:{marginInlineStart:n,padding:0,overflow:"hidden",fontSize:r,lineHeight:(0,h.unit)(r),backgroundColor:"transparent",border:"none",cursor:"pointer",...(0,f.genFocusStyle)(e),[`${o}-close`]:{color:l,transition:`color ${i}`,"&:hover":{color:a}}},"&-close-text":{color:l,transition:`color ${i}`,"&:hover":{color:a}}}}})(e)],e=>({withDescriptionIconSize:e.fontSizeHeading3,defaultPadding:`${e.paddingContentVerticalSM}px 12px`,withDescriptionPadding:`${e.paddingMD}px ${e.paddingContentHorizontalLG}px`})),y=e=>{let{icon:n,type:a,className:s,style:c,successIcon:d,infoIcon:m,warningIcon:u,errorIcon:p}=e,h={success:d??t.createElement(o.default,null),info:m??t.createElement(l.default,null),error:p??t.createElement(i.default,null),warning:u??t.createElement(r.default,null)};return t.createElement("span",{className:s,style:c},n??h[a])},v=e=>{let{isClosable:o,prefixCls:i,closeIcon:r,handleClose:l,ariaProps:a,className:s,style:c}=e,m=!0===r||void 0===r?t.createElement(n.default,null):r;return o?t.createElement("button",{type:"button",onClick:l,className:(0,d.clsx)(`${i}-close-icon`,s),tabIndex:0,style:c,...a},m):null},w=t.forwardRef((e,o)=>{let{description:i,prefixCls:n,message:r,title:l,banner:h,className:f,rootClassName:b,style:g,onMouseEnter:w,onMouseLeave:k,onClick:$,afterClose:C,showIcon:j,closable:E,closeText:N,closeIcon:S,action:I,id:z,styles:M,classNames:R,...P}=e,A=l??r,[T,L]=t.useState(!1),D=t.useRef(null);t.useImperativeHandle(o,()=>({nativeElement:D.current}));let{getPrefixCls:K,direction:H,variant:F,closable:O,closeIcon:B,className:W,style:G,classNames:U,styles:V,successIcon:X,infoIcon:Q,warningIcon:Y,errorIcon:Z}=(0,p.useComponentConfig)("alert"),q=K("alert",n),[J,_]=x(q),{onClose:ee,afterClose:et}=(0,u.isPlainObject)(E)?E:{},eo=t=>{L(!0),(ee??e.onClose)?.(t)},ei=t.useMemo(()=>void 0!==e.type?e.type:h?"warning":"info",[e.type,h]),en=e.variant??F??"outlined",er=t.useMemo(()=>!!(0,u.isPlainObject)(E)&&!!E.closeIcon||!!N||("boolean"==typeof E?E:!!(!1!==S&&(0,u.isNonNullable)(S))||!!O),[N,S,E,O]),el=!!h&&void 0===j||j,ea={...e,prefixCls:q,variant:en,type:ei,showIcon:el,closable:er},es=(0,m.useSemanticRootStyle)(G),ec=(0,m.useSemanticRootStyle)(g),[ed,em]=(0,m.useMergeSemantic)([U,R],[V,es,M,ec],{props:ea}),eu=(0,d.clsx)(q,`${q}-${ei}`,`${q}-${en}`,{[`${q}-with-description`]:!!i,[`${q}-no-icon`]:!el,[`${q}-banner`]:!!h,[`${q}-rtl`]:"rtl"===H},W,f,b,ed.root,_,J),ep=(0,c.pickAttrs)(P,{aria:!0,data:!0}),eh=t.useMemo(()=>(0,u.isPlainObject)(E)&&E.closeIcon?E.closeIcon:N||(void 0!==S?S:(0,u.isPlainObject)(O)&&O.closeIcon?O.closeIcon:B),[S,E,O,N,B]),ef=t.useMemo(()=>{let e=E??O;return(0,u.isPlainObject)(e)?(0,c.pickAttrs)(e,{data:!0,aria:!0}):{}},[E,O]);return t.createElement(a.default,{visible:!T,motionName:`${q}-motion`,motionAppear:!1,motionEnter:!1,onLeaveStart:e=>({maxHeight:e.offsetHeight}),onLeaveEnd:et??C},({className:o,style:n},r)=>t.createElement("div",{id:z,ref:(0,s.composeRef)(D,r),"data-show":!T,className:(0,d.clsx)(eu,o),style:{...em.root,...n},onMouseEnter:w,onMouseLeave:k,onClick:$,role:"alert",...ep},el?t.createElement(y,{className:(0,d.clsx)(`${q}-icon`,ed.icon),style:em.icon,description:i,icon:e.icon,prefixCls:q,type:ei,successIcon:X,infoIcon:Q,warningIcon:Y,errorIcon:Z}):null,t.createElement("div",{className:(0,d.clsx)(`${q}-section`,ed.section),style:em.section},A?t.createElement("div",{className:(0,d.clsx)(`${q}-title`,ed.title),style:em.title},A):null,i?t.createElement("div",{className:(0,d.clsx)(`${q}-description`,ed.description),style:em.description},i):null),I?t.createElement("div",{className:(0,d.clsx)(`${q}-actions`,ed.actions),style:em.actions},I):null,t.createElement(v,{className:ed.close,style:em.close,isClosable:er,prefixCls:q,closeIcon:eh,handleClose:eo,ariaProps:ef})))});var k=e.i(278409),$=e.i(233848),C=e.i(487806),j=e.i(479671),E=e.i(480002),N=e.i(868917);let S=function(e){function o(){var e,t,i;return(0,k.default)(this,o),t=o,i=arguments,t=(0,C.default)(t),(e=(0,E.default)(this,(0,j.default)()?Reflect.construct(t,i||[],(0,C.default)(this).constructor):t.apply(this,i))).state={error:void 0,info:{}},e}return(0,N.default)(o,e),(0,$.default)(o,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,info:t})}},{key:"render",value:function(){let{message:e,title:o,description:i,id:n,children:r}=this.props,{error:l,info:a}=this.state,s=o??e,c=a?.componentStack||null,d=(0,u.isNonNullable)(s)?s:l?.toString(),m=(0,u.isNonNullable)(i)?i:c;return l?t.createElement(w,{id:n,type:"error",title:d,description:t.createElement("pre",{style:{fontSize:"0.9em",overflowX:"auto"}},m)}):r}}])}(t.PureComponent);w.ErrorBoundary=S,e.s(["default",0,w],534300)},671938,e=>{"use strict";var t=e.i(184283);let o=(0,t.createStaticStyles)(({cssVar:e,css:t})=>{let o=t`
    --lobe-markdown-font-size: 16px;
    --lobe-markdown-header-multiple: 1;
    --lobe-markdown-margin-multiple: 2;
    --lobe-markdown-line-height: 1.8;
    --lobe-markdown-border-radius: ${e.borderRadiusLG};
    --lobe-markdown-border-color: ${e.colorFillQuaternary};

    position: relative;

    width: 100%;
    max-width: 100%;
    padding-inline: 1px;

    font-size: var(--lobe-markdown-font-size);
    line-height: var(--lobe-markdown-line-height);
    overflow-wrap: break-word;
  `,i=t`
    a {
      color: ${e.colorInfoText};

      &:hover {
        color: ${e.colorInfoHover};
      }
    }
  `,n=t`
    blockquote {
      margin-block: calc(var(--lobe-markdown-margin-multiple) * 0.5em);
      margin-inline: 0;
      padding-block: 0;
      padding-inline: 1em;
      border-inline-start: solid 4px ${e.colorBorder};

      color: ${e.colorTextSecondary};
    }
  `,r=t`
    code {
      &:not(:has(span)) {
        display: inline;

        margin-inline: 0.25em;
        padding-block: 0.2em;
        padding-inline: 0.4em;
        border: 1px solid var(--lobe-markdown-border-color);
        border-radius: 0.25em;

        font-family: ${e.fontFamilyCode};
        font-size: 0.875em;
        line-height: 1;
        overflow-wrap: break-word;
        white-space: break-spaces;

        background: ${e.colorFillSecondary};
      }
    }
  `,l=t`
    del {
      color: ${e.colorTextDescription};
      text-decoration: line-through;
    }
  `,a=t`
    details {
      margin-block: calc(var(--lobe-markdown-margin-multiple) * 0.5em);
      padding-block: 0.75em;
      padding-inline: 1em;
      border-radius: calc(var(--lobe-markdown-border-radius) * 1px);

      background: ${e.colorFillTertiary};
      box-shadow: 0 0 0 1px var(--lobe-markdown-border-color);

      summary {
        cursor: pointer;
        display: flex;
        align-items: center;
        list-style: none;

        &::before {
          content: '';

          position: absolute;
          inset-inline-end: 1.25em;
          transform: rotateZ(-45deg);

          display: block;

          width: 0.4em;
          height: 0.4em;
          border-block-end: 1.5px solid ${e.colorTextSecondary};
          border-inline-end: 1.5px solid ${e.colorTextSecondary};

          font-family: ${e.fontFamily};

          transition: transform 200ms ${e.motionEaseOut};
        }
      }

      &[open] {
        summary {
          padding-block-end: 0.75em;
          border-block-end: 1px dashed ${e.colorBorder};

          &::before {
            transform: rotateZ(45deg);
          }
        }
      }
    }
  `,s=t`
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-block: max(
        calc(var(--lobe-markdown-header-multiple) * var(--lobe-markdown-margin-multiple) * 0.4em),
        var(--lobe-markdown-font-size)
      );
      font-weight: bold;
      line-height: 1.25;
    }

    h1 {
      font-size: calc(
        var(--lobe-markdown-font-size) * (1 + 1.5 * var(--lobe-markdown-header-multiple))
      );
    }

    h2 {
      font-size: calc(var(--lobe-markdown-font-size) * (1 + var(--lobe-markdown-header-multiple)));
    }

    h3 {
      font-size: calc(
        var(--lobe-markdown-font-size) * (1 + 0.5 * var(--lobe-markdown-header-multiple))
      );
    }

    h4 {
      font-size: calc(
        var(--lobe-markdown-font-size) * (1 + 0.25 * var(--lobe-markdown-header-multiple))
      );
    }

    h5,
    h6 {
      font-size: calc(var(--lobe-markdown-font-size) * 1);
    }
  `,c=t`
    hr {
      width: 100%;
      margin-block: calc(var(--lobe-markdown-margin-multiple) * 1.5em);
      border-color: ${e.colorBorder};
      border-style: dashed;
      border-width: 1px;
      border-block-start: none;
      border-inline-start: none;
      border-inline-end: none;
    }
  `,d=t`
    img {
      max-width: 100%;
    }

    > img,
    > p > img {
      margin-block: calc(var(--lobe-markdown-margin-multiple) * 0.5em);
      border-radius: calc(var(--lobe-markdown-border-radius) * 1px);
      box-shadow: 0 0 0 1px var(--lobe-markdown-border-color);
    }
  `,m=t`
    li {
      margin-block: calc(var(--lobe-markdown-margin-multiple) * 0.33em);

      p:first-child {
        display: inline;
      }
    }

    ul,
    ol {
      margin-block: calc(var(--lobe-markdown-margin-multiple) * 0.5em);
      margin-inline-start: 1em;
      padding-inline-start: 0;
      list-style-position: outside;

      > ul,
      > ol {
        margin-block: 0;
      }

      > li {
        margin-inline-start: 1em;
      }
    }

    ol {
      list-style: auto;
    }

    ul {
      list-style-type: none;

      > li {
        &::before {
          content: '-';

          position: absolute;

          display: inline-block;

          margin-inline: -1em 0.5em;

          opacity: 0.5;
        }
      }
    }

    .task-list-item {
      &::before {
        display: none !important;
      }

      input[type='checkbox'] {
        margin-block: 0 0.25em;
        margin-inline: -1.6em 0.2em;
        vertical-align: middle;
      }

      input[type='checkbox']:dir(rtl) {
        margin: 0 -1.6em 0.25em 0.2em;
      }
    }
  `,u=t`
    p {
      margin-block: 4px;
      line-height: var(--lobe-markdown-line-height);
      letter-spacing: 0.02em;

      &:not(:first-child) {
        margin-block-start: calc(var(--lobe-markdown-margin-multiple) * 0.5em);
      }

      &:not(:last-child) {
        margin-block-end: calc(var(--lobe-markdown-margin-multiple) * 0.5em);
      }
    }
  `,p=t`
    pre {
      font-size: calc(var(--lobe-markdown-font-size) * 0.85);
    }
  `,h=t`
    strong {
      font-weight: 600;
    }
  `,f=t`
    svg {
      line-height: 1;
    }
  `,b=t`
    table {
      unicode-bidi: isolate;
      overflow: auto hidden;
      display: block;
      border-spacing: 0;
      border-collapse: collapse;

      box-sizing: border-box;
      width: max-content;
      max-width: 100%;
      margin-block: calc(var(--lobe-markdown-margin-multiple) * 0.5em);
      border-radius: calc(var(--lobe-markdown-border-radius) * 1px);

      text-align: start;
      text-indent: initial;
      text-wrap: pretty;
      word-break: auto-phrase;
      overflow-wrap: break-word;

      box-shadow: 0 0 0 1px ${e.colorBorderSecondary};

      code {
        overflow-wrap: break-word;
      }

      thead {
        background: ${e.colorFillQuaternary};
      }

      tr {
        box-shadow: 0 1px 0 ${e.colorBorderSecondary};
      }

      th,
      td {
        min-width: 120px;
        padding-block: 0.75em;
        padding-inline: 1em;
        text-align: start;
      }
    }
  `,g=t`
    > video,
    > p > video {
      margin-block: calc(var(--lobe-markdown-margin-multiple) * 0.5em);
      border-radius: calc(var(--lobe-markdown-border-radius) * 1px);
      box-shadow: 0 0 0 1px var(--lobe-markdown-border-color);
    }

    video {
      max-width: 100%;
    }
  `,x=t`
    .footnotes {
      margin-block-start: calc(var(--lobe-markdown-margin-multiple) * 1em);
      font-size: smaller;
      color: #8b949e;

      #footnote-label {
        display: none;
      }

      > ol {
        margin: 0 !important;
      }
    }
  `,y=t`
    sup {
      position: relative;
      inset-block-start: -0.25em;

      font-size: 0.75em;
      line-height: var(--lobe-markdown-line-height);
      vertical-align: baseline;
    }
  `;return{root:t`
      :not(:has(${".ignore-markdown-style"})),
      .markdown {
        ${[o,i,n,r,l,a,s,c,d,m,u,p,h,f,b,g,x,t`
    sub {
      position: relative;
      inset-block-end: -0.25em;

      font-size: 0.75em;
      line-height: var(--lobe-markdown-line-height);
      vertical-align: baseline;
    }
  `,y]}
      }
    `}});var i=e.i(271645),n=e.i(843476);let r=(0,i.memo)(({ref:e,children:i,className:r,fontSize:l=16,headerMultiple:a=1,marginMultiple:s=2,lineHeight:c=1.8,borderRadius:d=8,style:m,...u})=>(0,n.jsx)("article",{className:(0,t.cx)(o.root,r),ref:e,style:{"--lobe-markdown-border-radius":d,"--lobe-markdown-font-size":`${l}px`,"--lobe-markdown-header-multiple":a,"--lobe-markdown-line-height":c,"--lobe-markdown-margin-multiple":s,...m},...u,children:i}));r.displayName="Typography",e.s(["default",0,r],671938)},686227,421303,e=>{"use strict";var t=e.i(271645),o=e.i(843476);let i=(0,t.createContext)(null),n=(0,t.createContext)(null),r=(0,t.memo)(({children:e,expandedKeys:n,isOpenKey:r,isOpen:l,itemKey:a,onToggleKey:s,onToggleKeys:c,preferProviderKeyForNestedItems:d})=>(0,o.jsx)(i,{value:(0,t.useMemo)(()=>({isOpenKey:r,isOpen:l,itemKey:a,onToggle:()=>s(a),onToggleKey:s,onToggleNestedKey:e=>c([a,e],d?a:e)}),[n,r,l,a,s,c,d]),children:e}));r.displayName="AccordionItemStateProvider",e.s(["AccordionConfigContext",0,n,"AccordionItemStateProvider",0,r,"useAccordionConfig",0,()=>(0,t.use)(n),"useAccordionItemState",0,()=>(0,t.use)(i)],686227);let l=(0,e.i(184283).createStaticStyles)(({css:e,cssVar:t})=>({action:e`
      opacity: 0;
      transition: opacity 150ms ${t.motionEaseOut};
    `,actionVisible:e`
      opacity: 1;
    `,base:e`
      display: flex;
      flex-direction: column;
      width: 100%;
    `,content:e`
      overflow: hidden;
    `,contentInner:e`
      /* Content wrapper for animation */
    `,divider:e`
      margin-block: 0;
    `,header:e`
      &:hover .accordion-action {
        opacity: 1;
      }

      &:focus-visible {
        border-radius: ${t.borderRadiusLG};
        outline: 2px solid ${t.colorPrimary};
        outline-offset: 2px;
      }
    `,icon:e`
      transition: transform 200ms ${t.motionEaseOut};
    `,iconRotate:e`
      transform: rotate(90deg);
    `,indicator:e`
      display: flex;
      flex-shrink: 0;
      align-items: center;

      font-size: 18px;
      color: ${t.colorTextDescription};

      transition: transform 200ms ${t.motionEaseOut};
    `,item:e`
      position: relative;
      display: flex;
      flex-direction: column;
    `,titleWrapper:e`
      user-select: none;
    `}));e.s(["styles",0,l],421303)},835048,e=>{"use strict";var t=e.i(686227),o=e.i(421303),i=e.i(271645),n=e.i(843476),r=e.i(312361),l=e.i(184283),a=e.i(231178);let s=(0,i.createContext)(null);var c=e.i(287022),d=e.i(674008);let m=e=>!e.isLayoutDirty&&e.willUpdate(!1),u=({children:e,id:t,inherit:o=!0})=>{let r=(0,i.useContext)(a.LayoutGroupContext),l=(0,i.useContext)(s),[u,p]=function(){let e,t=(e=(0,i.useRef)(!1),(0,d.useIsomorphicLayoutEffect)(()=>(e.current=!0,()=>{e.current=!1}),[]),e),[o,n]=(0,i.useState)(0),r=(0,i.useCallback)(()=>{t.current&&n(o+1)},[o]);return[(0,i.useCallback)(()=>c.frame.postRender(r),[r]),o]}(),h=(0,i.useRef)(null),f=r.id||l;if(null===h.current){let e,i,n,l;(!0==(!0===(l=o))||"id"===l)&&f&&(t=t?f+"-"+t:f),h.current={id:t,group:!0===o&&r.group||(e=new Set,i=new WeakMap,{add:t=>{e.add(t),i.set(t,t.addEventListener("willUpdate",n))},remove:t=>{e.delete(t);let o=i.get(t);o&&(o(),i.delete(t)),n()},dirty:n=()=>e.forEach(m)})}}let b=(0,i.useMemo)(()=>({...h.current,forceRender:u}),[p]);return(0,n.jsx)(a.LayoutGroupContext.Provider,{value:b,children:e})};var p=e.i(760035);let h=(0,i.memo)(({children:e,className:a,style:s,accordion:c=!1,defaultExpandedKeys:d,expandedKeys:m,onExpandedChange:h,variant:f="borderless",gap:b,showDivider:g=!1,disableAnimation:x=!1,hideIndicator:y=!1,indicatorPlacement:v="start",keepContentMounted:w=!0,classNames:k,styles:$,motionProps:C,ref:j,...E})=>{let N=i.Children.toArray(e).filter(i.isValidElement),S=N.map((e,t)=>e.props.itemKey||t),[I,z]=(0,p.default)(d??S,{onChange:h,value:m}),M=(0,i.useRef)(I);M.current=I;let R=(0,i.useRef)(z);R.current=z;let P=(0,i.useCallback)(e=>M.current.includes(e),[]),A=(0,i.useCallback)(e=>{let t,o=M.current;t=c?o.includes(e)?[]:[e]:o.includes(e)?o.filter(t=>t!==e):[...o,e],R.current(t)},[c]),T=(0,i.useCallback)((e,t)=>{let o,i=M.current,n=e.some(e=>i.includes(e));o=c?n?[]:[t]:n?i.filter(t=>!e.includes(t)):[...i,t],R.current(o)},[c]),L=(0,i.useMemo)(()=>({disableAnimation:x,hideIndicator:y,indicatorPlacement:v,keepContentMounted:w,motionProps:C,showDivider:g,variant:f}),[x,y,v,w,C,g,f]),D=void 0!==m||void 0!==d,K=(0,n.jsx)(n.Fragment,{children:N.map((e,l)=>{let a=void 0!==e.props.itemKey,s=a?e.props.itemKey:l,c=I.includes(s);return(0,n.jsxs)(i.Fragment,{children:[(0,n.jsx)(t.AccordionItemStateProvider,{expandedKeys:a?void 0:I,isOpen:c,isOpenKey:P,itemKey:s,preferProviderKeyForNestedItems:!D,onToggleKey:A,onToggleKeys:T,children:e}),g&&l<N.length-1&&(0,n.jsx)(r.Divider,{className:o.styles.divider})]},s)})});return(0,n.jsx)(t.AccordionConfigContext,{value:L,children:(0,n.jsx)("div",{className:(0,l.cx)(o.styles.base,k?.base,a),ref:j,style:{gap:b,...$?.base,...s},...E,children:x?K:(0,n.jsx)(u,{children:K})})})});h.displayName="Accordion",e.s(["default",0,h],835048)},746935,e=>{"use strict";var t=e.i(155747),o=e.i(686227),i=e.i(421303),n=e.i(206868),r=e.i(591479),l=e.i(302573),a=e.i(767093),s=e.i(271645),c=e.i(843476);let d=(0,s.memo)(({size:e="1em",style:t,...o})=>(0,c.jsx)("svg",{fill:"currentColor",fillRule:"evenodd",height:e,style:{flex:"none",lineHeight:1,...t},viewBox:"0 0 16 16",width:e,xmlns:"http://www.w3.org/2000/svg",...o,children:(0,c.jsx)("path",{d:"M7.002 10.624a.5.5 0 01-.752-.432V5.808a.5.5 0 01.752-.432l3.758 2.192a.5.5 0 010 .864l-3.758 2.192z"})}));var m=e.i(184283);e.i(247167);var u=e.i(231178),p=e.i(947414),h=e.i(674008),f=e.i(821476),b=e.i(772846),g=s,x=e.i(737806);function y(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}class v extends g.Component{getSnapshotBeforeUpdate(e){let t=this.props.childRef.current;if((0,b.isHTMLElement)(t)&&e.isPresent&&!this.props.isPresent&&!1!==this.props.pop){let e=t.offsetParent,o=(0,b.isHTMLElement)(e)&&e.offsetWidth||0,i=(0,b.isHTMLElement)(e)&&e.offsetHeight||0,n=getComputedStyle(t),r=this.props.sizeRef.current;r.height=parseFloat(n.height),r.width=parseFloat(n.width),r.top=t.offsetTop,r.left=t.offsetLeft,r.right=o-r.width-r.left,r.bottom=i-r.height-r.top,r.direction=n.direction}return null}componentDidUpdate(){}render(){return this.props.children}}function w({children:e,isPresent:t,anchorX:o,anchorY:i,root:n,pop:r}){let l=(0,g.useId)(),a=(0,g.useRef)(null),d=(0,g.useRef)({width:0,height:0,top:0,left:0,right:0,bottom:0,direction:"ltr"}),{nonce:m}=(0,g.useContext)(x.MotionConfigContext),u=function(...e){return s.useCallback(function(...e){return t=>{let o=!1,i=e.map(e=>{let i=y(e,t);return o||"function"!=typeof i||(o=!0),i});if(o)return()=>{for(let t=0;t<i.length;t++){let o=i[t];"function"==typeof o?o():y(e[t],null)}}}}(...e),e)}(a,e.props?.ref??e?.ref);return(0,g.useInsertionEffect)(()=>{let{width:e,height:s,top:c,left:u,right:p,bottom:h,direction:f}=d.current;if(t||!1===r||!a.current||!e||!s)return;let b="rtl"===f,g="left"===o?b?`right: ${p}`:`left: ${u}`:b?`left: ${u}`:`right: ${p}`,x="bottom"===i?`bottom: ${h}`:`top: ${c}`;a.current.dataset.motionPopId=l;let y=document.createElement("style");m&&(y.nonce=m);let v=n??document.head;return v.appendChild(y),y.sheet&&y.sheet.insertRule(`
          [data-motion-pop-id="${l}"] {
            position: absolute !important;
            width: ${e}px !important;
            height: ${s}px !important;
            ${g}px !important;
            ${x}px !important;
          }
        `),()=>{a.current?.removeAttribute("data-motion-pop-id"),v.contains(y)&&v.removeChild(y)}},[t]),(0,c.jsx)(v,{isPresent:t,childRef:a,sizeRef:d,pop:r,children:!1===r?e:g.cloneElement(e,{ref:u})})}let k=({children:e,initial:t,isPresent:o,onExitComplete:i,custom:n,presenceAffectsLayout:r,mode:l,anchorX:a,anchorY:d,root:m})=>{let u=(0,p.useConstant)($),b=(0,s.useId)(),g=(0,s.useRef)(o),x=(0,s.useRef)(i);(0,h.useIsomorphicLayoutEffect)(()=>{g.current=o,x.current=i});let y=!0,v=(0,s.useMemo)(()=>(y=!1,{id:b,initial:t,isPresent:o,custom:n,onExitComplete:e=>{for(let t of(u.set(e,!0),u.values()))if(!t)return;i&&i()},register:e=>(u.set(e,!1),()=>{u.delete(e),g.current||u.size||x.current?.()})}),[o,u,i]);return r&&y&&(v={...v}),(0,s.useMemo)(()=>{u.forEach((e,t)=>u.set(t,!1))},[o]),s.useEffect(()=>{o||u.size||!i||i()},[o]),e=(0,c.jsx)(w,{pop:"popLayout"===l,isPresent:o,anchorX:a,anchorY:d,root:m,children:e}),(0,c.jsx)(f.PresenceContext.Provider,{value:v,children:e})};function $(){return new Map}var C=e.i(259073);let j=e=>e.key||"";function E(e){let t=[];return s.Children.forEach(e,e=>{(0,s.isValidElement)(e)&&t.push(e)}),t}let N=({children:e,custom:t,initial:o=!0,onExitComplete:i,presenceAffectsLayout:n=!0,mode:r="sync",propagate:l=!1,anchorX:a="left",anchorY:d="top",root:m})=>{let[f,b]=(0,C.usePresence)(l),g=(0,s.useMemo)(()=>E(e),[e]),x=l&&!f?[]:g.map(j),y=(0,s.useRef)(!0),v=(0,s.useRef)(g),w=(0,p.useConstant)(()=>new Map),$=(0,s.useRef)(new Set),[N,S]=(0,s.useState)(g),[I,z]=(0,s.useState)(g);(0,h.useIsomorphicLayoutEffect)(()=>{y.current=!1,v.current=g;for(let e=0;e<I.length;e++){let t=j(I[e]);x.includes(t)?(w.delete(t),$.current.delete(t)):!0!==w.get(t)&&w.set(t,!1)}},[I,x.length,x.join("-")]);let M=[];if(g!==N){let e=[...g];for(let t=0;t<I.length;t++){let o=I[t],i=j(o);x.includes(i)||(e.splice(t,0,o),M.push(o))}return"wait"===r&&M.length&&(e=M),z(E(e)),S(g),null}let{forceRender:R}=(0,s.useContext)(u.LayoutGroupContext);return(0,c.jsx)(c.Fragment,{children:I.map(e=>{let s=j(e),u=(!l||!!f)&&(g===I||x.includes(s));return(0,c.jsx)(k,{isPresent:u,initial:(!y.current||!!o)&&void 0,custom:t,presenceAffectsLayout:n,mode:r,root:m,onExitComplete:u?void 0:()=>{if($.current.has(s)||!w.has(s))return;$.current.add(s),w.set(s,!0);let e=!0;w.forEach(t=>{t||(e=!1)}),e&&(R?.(),z(v.current),l&&b?.(),i&&i())},anchorX:a,anchorY:d,children:e},s)})})};var S=e.i(760035);let I={overflow:"hidden"},z=(0,s.memo)(({className:e,style:t,children:o,contentInnerClassName:i,isOpen:n,keepContentMounted:r})=>r?(0,c.jsx)("div",{className:e,role:"region",style:{display:n?"block":"none",...t},children:(0,c.jsx)("div",{className:i,children:o})}):n?(0,c.jsx)("div",{className:e,role:"region",style:t,children:(0,c.jsx)("div",{className:i,children:o})}):null);z.displayName="AccordionStaticContent";let M=(0,s.memo)(({contextMotionProps:e,className:o,style:i,children:n,contentInnerClassName:r,isOpen:l,skipInitialAnimation:a})=>{let d=(0,t.useMotionComponent)(),m=(0,s.useMemo)(()=>({animate:"enter",exit:"exit",initial:!a&&"exit",variants:{enter:{height:"auto",opacity:1,transition:{duration:.2,ease:[.4,0,.2,1]}},exit:{height:0,opacity:0,transition:{duration:.2,ease:[.4,0,.2,1]}}},...e}),[e,a]);return(0,c.jsx)(N,{initial:!1,children:l?(0,c.jsx)(d.div,{...m,style:I,children:(0,c.jsx)("div",{className:o,role:"region",style:i,children:(0,c.jsx)("div",{className:r,children:n})})}):null})});M.displayName="AccordionMotionContent";let R=(0,s.memo)(({disableAnimation:e,isOpen:t,keepContentMounted:o,className:i,style:n,children:r,contentInnerClassName:l,contextMotionProps:a,skipInitialAnimation:s})=>e||!o?(0,c.jsx)(z,{className:i,contentInnerClassName:l,isOpen:t,keepContentMounted:o,style:n,children:r}):(0,c.jsx)(M,{className:i,contentInnerClassName:l,contextMotionProps:a,isOpen:t,skipInitialAnimation:s,style:n,children:r}));R.displayName="AccordionItemContent";let P=(0,s.memo)(({itemKey:e,title:t,children:u,action:p,alwaysShowAction:h=!1,disabled:f=!1,allowExpand:b=!0,hideIndicator:g,indicatorPlacement:x,indicator:y,classNames:v,paddingInline:w=16,paddingBlock:k=8,padding:$,ref:C,variant:j,styles:E,headerWrapper:N,defaultExpand:I,expand:z,onExpandChange:M})=>{let P=(0,o.useAccordionItemState)(),A=(0,o.useAccordionConfig)(),T=void 0!==z||void 0!==I,[L,D]=(0,S.default)(I??!1,{onChange:M,value:z}),K=A?.hideIndicator,H=A?.indicatorPlacement,F=A?.keepContentMounted,O=A?.disableAnimation,B=A?.motionProps,W=A?.variant??"borderless",G=(0,s.useRef)(!0);(0,s.useEffect)(()=>{G.current=!1},[]);let U=P?.itemKey===e,V=!1;T?V=L:P&&(V=U?P.isOpen:P.isOpen||P.isOpenKey(e));let X=g??K??!1,Q=x??H??"start",Y=j||W,Z=(0,s.useCallback)(()=>{if(P){if(P.itemKey===e)return void P.onToggle();P.onToggleNestedKey(e)}},[P,e]),q=(0,s.useCallback)(()=>{b&&!f&&(T?D(!L):Z&&Z())},[b,f,T,D,L,Z]),J=(0,s.useCallback)(e=>{if(b&&!f)switch(e.key){case"Enter":case" ":e.preventDefault(),q()}},[b,f,q]),_=(0,s.useCallback)(e=>{e?.detail>1&&e.preventDefault()},[]),ee=(0,s.useMemo)(()=>!b||X?null:y?"function"==typeof y?(0,c.jsx)("span",{"aria-hidden":"true",className:(0,m.cx)(i.styles.indicator,v?.indicator),style:E?.indicator,children:y({isDisabled:f,isOpen:V})}):(0,c.jsx)("span",{"aria-hidden":"true",className:(0,m.cx)(i.styles.indicator,v?.indicator),style:E?.indicator,children:y}):(0,c.jsx)("span",{"aria-hidden":"true",className:(0,m.cx)(i.styles.indicator,v?.indicator),style:E?.indicator,children:(0,c.jsx)(d,{className:(0,m.cx)(i.styles.icon,V&&i.styles.iconRotate)})}),[b,X,y,f,V,v,E]),et=G.current&&V,eo=(0,s.useMemo)(()=>(0,m.cx)("accordion-content",i.styles.content,v?.content),[v?.content]),ei=(0,s.useMemo)(()=>"string"==typeof t?(0,c.jsx)(l.default,{ellipsis:!0,className:v?.title,style:E?.title,children:t}):t,[t,v?.title,E?.title]),en=(0,s.useMemo)(()=>p&&(0,c.jsx)(n.default,{horizontal:!0,align:"center",flex:"none",gap:4,style:E?.action,className:(0,m.cx)("accordion-action",i.styles.action,h&&i.styles.actionVisible,v?.action),onClick:a.stopPropagation,children:p}),[p,h,v?.action,E?.action]),er=(0,s.useMemo)(()=>{let e=(0,c.jsx)(r.default,{horizontal:!0,className:(0,m.cx)("accordion-header",i.styles.header,v?.header),clickable:!f&&b,gap:4,justify:"space-between",padding:$,paddingBlock:k,paddingInline:w,ref:C,variant:j||Y,style:{alignItems:"center",cursor:f?"not-allowed":b?"pointer":"default",opacity:f?.5:void 0,overflow:"hidden",width:"100%",...E?.header},onClick:q,onKeyDown:J,children:"start"===Q?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.default,{horizontal:!0,align:"center",className:i.styles.titleWrapper,flex:1,gap:2,style:{overflow:"hidden"},onDoubleClick:_,onMouseDown:_,children:[ei,ee]}),(0,c.jsx)(n.default,{horizontal:!0,align:"center",flex:"none",gap:4,children:en})]}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.default,{horizontal:!0,align:"center",className:i.styles.titleWrapper,flex:1,gap:2,style:{overflow:"hidden"},onDoubleClick:_,onMouseDown:_,children:ei}),(0,c.jsxs)(n.default,{horizontal:!0,align:"center",flex:"none",gap:4,children:[en,ee]})]})});return N?N(e):e},[v?.header,f,b,$,k,w,C,j,Y,E?.header,q,J,Q,_,ei,ee,en,N]);return(0,c.jsxs)("div",{className:(0,m.cx)("accordion-item",i.styles.item,v?.base),style:E?.base,children:[er,(0,c.jsx)(R,{className:eo,contentInnerClassName:i.styles.contentInner,contextMotionProps:B,disableAnimation:!!O,isOpen:V,keepContentMounted:!!(F??!0),skipInitialAnimation:et,style:E?.content,children:u})]})});P.displayName="AccordionItem",e.s(["default",0,P],746935)}]);