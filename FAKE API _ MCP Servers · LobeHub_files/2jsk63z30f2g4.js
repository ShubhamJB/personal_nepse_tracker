(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,953552,e=>{"use strict";var t=e.i(843476),i=e.i(128709),a=e.i(184283),r=e.i(271645);let n=(0,a.createStaticStyles)(({css:e})=>({container:e`
    width: min(100%, 560px);

    font-size: 44px;
    font-weight: bold;
    line-height: 1.4;
    letter-spacing: -0.04em;
    ${a.responsive.sm} {
      font-size: 28px;
    }
  `})),o=(0,r.memo)(({children:e,className:r,...o})=>(0,t.jsx)(i.Text,{as:"h2",className:(0,a.cx)(n.container,r),...o,children:e}));e.s(["default",0,o])},578379,e=>{"use strict";var t=e.i(206868),i=e.i(184283);let a=(0,i.createStaticStyles)(({css:e})=>e`
    --rows: var(--grid-rows, 3);
    --max-item-width: var(--grid-max-item-width, 240px);
    --gap: var(--grid-gap, 1em);

    display: grid !important;
    grid-template-columns: repeat(
      auto-fill,
      minmax(
        max(var(--max-item-width), calc((100% - var(--gap) * (var(--rows) - 1)) / var(--rows))),
        1fr
      )
    );
  `);var r=e.i(271645),n=e.i(843476);function o(e){return"string"==typeof e||e instanceof String}let l=({className:e,gap:l="1em",rows:s=3,children:c,maxItemWidth:d=240,ref:u,style:p,...m})=>{let f=(0,r.useMemo)(()=>({"--grid-gap":o(l)?l:`${l}px`,"--grid-max-item-width":o(d)?d:`${d}px`,"--grid-rows":`${s}`}),[l,d,s]);return(0,n.jsx)(t.default,{className:(0,i.cx)(a,e),gap:l,ref:u,style:{...f,...p},...m,children:c})};l.displayName="Grid",e.s(["default",0,l],578379)},43884,e=>{"use strict";var t=e.i(578379);e.s(["Grid",()=>t.default])},126021,e=>{"use strict";var t=e.i(206868),i=e.i(492435),a=e.i(58125),r=e.i(184283),n=e.i(225913);let o="12px 16px",l=e=>e||0===e?`${"string"==typeof e?e:`${e}px`} !important`:o,s=(0,r.createStaticStyles)(({css:e,cssVar:t})=>({borderless:e`
      &.${"ant"}-collapse {
        .${"ant"}-collapse-header {
          padding-inline: 0;
        }
        .${"ant"}-collapse-panel {
          padding-inline: 0;
          .${"ant"}-collapse-body {
            padding-inline: 0;
          }
        }
      }
    `,desc:e`
      font-size: 12px;
      color: ${t.colorTextDescription};
    `,filledDark:e`
      &.${"ant"}-collapse {
        .${"ant"}-collapse-item {
          background: ${t.colorBgLayout};
          .${"ant"}-collapse-panel {
            margin-inline: 3px;
            margin-block-end: 3px;
            border-radius: ${t.borderRadius};
            ${a.staticStylish.variantOutlinedWithoutHover};
          }
        }
      }
    `,filledLight:e`
      &.${"ant"}-collapse {
        .${"ant"}-collapse-item {
          background: ${t.colorFillQuaternary};
          .${"ant"}-collapse-panel {
            margin-inline: 3px;
            margin-block-end: 3px;
            border-radius: ${t.borderRadius};
            ${a.staticStylish.variantOutlinedWithoutHover};
            background: ${t.colorBgContainer};
            ${a.staticStylish.shadow};
          }
        }
      }
    `,gapOutlined:e`
      &.${"ant"}-collapse {
        border: none;
        background: transparent;
        .${"ant"}-collapse-item {
          border: 1px solid ${t.colorFillSecondary};
          background: ${t.colorBgContainer};
        }

        .${"ant"}-collapse-item:not(:first-child) {
          .${"ant"}-collapse-header {
            border-block-start: none;
          }
        }
      }
    `,gapRoot:e`
      &.${"ant"}-collapse {
        display: flex;
        flex-direction: column;
        border: none;
        box-shadow: none;
        .${"ant"}-collapse-item {
          border: none;
          border-radius: ${t.borderRadiusLG};
        }
      }
    `,hideCollapsibleIcon:e`
      .${"ant"}-collapse-expand-icon {
        display: none !important;
      }
    `,icon:e`
      cursor: pointer;
      transition: all 100ms ${t.motionEaseOut};
    `,outlined:e`
      &.${"ant"}-collapse {
        border: 1px solid ${t.colorFillSecondary};
        background: ${t.colorBgContainer};
        .${"ant"}-collapse-item .${"ant"}-collapse-header {
          transition: none;
        }
        .${"ant"}-collapse-item-active .${"ant"}-collapse-header {
          border-block-end: 1px solid ${t.colorFillTertiary};
        }
        .${"ant"}-collapse-item:not(:first-child) {
          .${"ant"}-collapse-header {
            border-block-start: 1px solid ${t.colorFillTertiary};
          }
        }
      }
    `,root:e`
      &.${"ant"}-collapse {
        display: flex;
        flex-direction: column;
        background: transparent;

        .${"ant"}-collapse-header {
          overflow: hidden;
          display: flex;
          flex: none;
          gap: 0.75em;
          align-items: flex-start;

          border-radius: 0 !important;

          .${"ant"}-collapse-header-text {
            flex: 1;
          }

          .${"ant"}-collapse-expand-icon {
            align-items: center;
            min-height: 28px;
            margin: 0;
            padding: 0;
          }

          .${"ant"}-collapse-extra {
            display: flex;
            align-items: center;
            min-height: 28px;
          }
        }

        .${"ant"}-collapse-panel {
          background: transparent;
        }
      }
    `,title:e`
      font-size: 16px;
      font-weight: 500;
      line-height: 28px;
    `})),c=(0,n.cva)(s.root,{compoundVariants:[{class:s.gapOutlined,gap:!0,variant:"outlined"},{class:s.filledDark,isDarkMode:!0,variant:"filled"},{class:s.filledLight,isDarkMode:!1,variant:"filled"}],defaultVariants:{collapsible:!0,gap:!1,isDarkMode:!1},variants:{collapsible:{false:s.hideCollapsibleIcon,true:null},gap:{false:null,true:s.gapRoot},isDarkMode:{false:null,true:null},variant:{borderless:s.borderless,filled:null,outlined:s.outlined}}});var d=e.i(271645),u=e.i(843476),p=e.i(988122),p=p,m=e.i(592143),f=e.i(639007),h=e.i(716327);let g=(0,d.memo)(({style:e,variant:a="filled",gap:n=0,className:g,padding:b=o,size:y,collapsible:x=!0,items:w,styles:v,classNames:k,ref:S,...$})=>{let{isDarkMode:C}=(0,f.useThemeMode)(),N=(0,d.useMemo)(()=>w.map(({icon:e,desc:a,label:n,...o})=>{let l=(0,u.jsx)("div",{className:(0,r.cx)(s.title,!e&&!a&&k?.header,k?.title),style:{...!e&&!a?v?.header:{},...v?.title},children:n});return e&&(l=(0,u.jsxs)(t.default,{horizontal:!0,className:(0,r.cx)(s.title,!a&&k?.header),gap:8,style:a?void 0:v?.header,children:[(0,d.isValidElement)(e)?e:(0,u.jsx)(i.default,{icon:e,size:{size:"1.1em"}}),l]})),a&&(l=(0,u.jsxs)(t.default,{className:k?.header,style:v?.header,children:[l,(0,u.jsx)("div",{className:(0,r.cx)(s.desc,k?.desc),style:v?.desc,children:a})]})),{label:l,...o}}),[w,k,v,s]);return(0,u.jsx)(m.ConfigProvider,{theme:{components:{Collapse:{contentPadding:l("object"==typeof b?b?.body:b),headerPadding:l("object"==typeof b?b?.header:b)}}},children:(0,u.jsx)(p.default,{ghost:!0,className:(0,r.cx)(c({collapsible:x,gap:!!n,isDarkMode:C,variant:a}),g),collapsible:x?"header":"icon",items:N,ref:S,size:y,expandIcon:({isActive:e})=>(0,u.jsx)(i.default,{className:s.icon,icon:h.ChevronDown,size:16,style:{rotate:e?void 0:"-90deg"}}),style:{gap:n,...e},...$})})});g.displayName="Collapse",e.s(["default",0,g],126021)},765812,e=>{"use strict";var t=e.i(126021);e.s(["Collapse",()=>t.default])},459817,e=>{"use strict";e.i(247167);var t=e.i(271645),i=e.i(931067),a=e.i(440383),r=e.i(180573),n=e.i(232839),o=e.i(207670),l=e.i(128473),s=e.i(401676);let c=(e,t)=>{if(!e)return null;let i={left:e.offsetLeft,right:e.parentElement.clientWidth-e.clientWidth-e.offsetLeft,width:e.clientWidth,top:e.offsetTop,bottom:e.parentElement.clientHeight-e.clientHeight-e.offsetTop,height:e.clientHeight};return t?{left:0,right:0,width:0,top:i.top,bottom:i.bottom,height:i.height}:{left:i.left,right:i.right,width:i.width,top:0,bottom:0,height:0}},d=e=>void 0!==e?`${e}px`:void 0;function u(e){let{prefixCls:i,containerRef:a,value:r,getValueIndex:u,motionName:p,onMotionStart:m,onMotionEnd:f,direction:h,vertical:g=!1}=e,b=t.useRef(null),[y,x]=t.useState(r),w=e=>{let t=u(e),r=a.current?.querySelectorAll(`.${i}-item`)[t];return r?.offsetParent&&r},[v,k]=t.useState(null),[S,$]=t.useState(null);(0,s.default)(()=>{if(y!==r){let e=w(y),t=w(r),i=c(e,g),a=c(t,g);x(r),k(i),$(a),e&&t?m():f()}},[r]);let C=t.useMemo(()=>g?d(v?.top??0):"rtl"===h?d(-v?.right):d(v?.left),[g,h,v]),N=t.useMemo(()=>g?d(S?.top??0):"rtl"===h?d(-S?.right):d(S?.left),[g,h,S]);return v&&S?t.createElement(l.default,{visible:!0,motionName:p,motionAppear:!0,onAppearStart:()=>g?{transform:"translateY(var(--thumb-start-top))",height:"var(--thumb-start-height)"}:{transform:"translateX(var(--thumb-start-left))",width:"var(--thumb-start-width)"},onAppearActive:()=>g?{transform:"translateY(var(--thumb-active-top))",height:"var(--thumb-active-height)"}:{transform:"translateX(var(--thumb-active-left))",width:"var(--thumb-active-width)"},onVisibleChanged:()=>{k(null),$(null),f()}},({className:e,style:a},r)=>{let l={...a,"--thumb-start-left":C,"--thumb-start-width":d(v?.width),"--thumb-active-left":N,"--thumb-active-width":d(S?.width),"--thumb-start-top":C,"--thumb-start-height":d(v?.height),"--thumb-active-top":N,"--thumb-active-height":d(S?.height)},s={ref:(0,n.composeRef)(b,r),style:l,className:(0,o.clsx)(`${i}-thumb`,e)};return t.createElement("div",s)}):null}let p=({prefixCls:e,className:i,style:a,styles:r,classNames:n,data:l,disabled:s,checked:c,label:d,title:u,value:p,name:m,onChange:f,onFocus:h,onBlur:g,onKeyDown:b,onKeyUp:y,onMouseDown:x,itemRender:w=e=>e})=>w(t.createElement("label",{className:(0,o.clsx)(i,{[`${e}-item-disabled`]:s}),style:a,onMouseDown:x},t.createElement("input",{name:m,className:`${e}-item-input`,type:"radio",disabled:s,checked:c,onChange:e=>{s||f(e,p)},onFocus:h,onBlur:g,onKeyDown:b,onKeyUp:y}),t.createElement("div",{className:(0,o.clsx)(`${e}-item-label`,n?.label),title:u,style:r?.label},d)),{item:l}),m=t.forwardRef((e,l)=>{let{prefixCls:s="rc-segmented",direction:c,vertical:d,options:m=[],disabled:f,defaultValue:h,value:g,name:b,onChange:y,className:x="",style:w,styles:v,classNames:k,motionName:S="thumb-motion",itemRender:$,...C}=e,N=t.useRef(null),T=t.useMemo(()=>(0,n.composeRef)(N,l),[N,l]),j=t.useMemo(()=>m.map(e=>{if("object"==typeof e&&null!==e){let t=void 0!==e.title?e.title:"object"!=typeof e.label?e.label?.toString():void 0;return{...e,title:t}}return{label:e?.toString(),title:e?.toString(),value:e}}),[m]),[A,I]=(0,a.default)(h??j[0]?.value,g),[P,R]=t.useState(!1),M=(e,t)=>{I(t),y?.(t)},O=(0,r.default)(C,["children"]),[E,F]=t.useState(!1),[L,z]=t.useState(!1),D=()=>{z(!0)},H=()=>{z(!1)},B=()=>{F(!1)},U=e=>{"Tab"===e.key&&F(!0)},q=e=>{let t=j.findIndex(e=>e.value===A),i=j.length,a=j[(t+e+i)%i];a&&(I(a.value),y?.(a.value))},W=e=>{switch(e.key){case"ArrowLeft":case"ArrowUp":q(-1);break;case"ArrowRight":case"ArrowDown":q(1)}};return t.createElement("div",(0,i.default)({role:"radiogroup","aria-label":"segmented control",tabIndex:f?void 0:0,"aria-orientation":d?"vertical":"horizontal",style:w},O,{className:(0,o.clsx)(s,{[`${s}-rtl`]:"rtl"===c,[`${s}-disabled`]:f,[`${s}-vertical`]:d},x),ref:T}),t.createElement("div",{className:`${s}-group`},t.createElement(u,{vertical:d,prefixCls:s,value:A,containerRef:N,motionName:`${s}-${S}`,direction:c,getValueIndex:e=>j.findIndex(t=>t.value===e),onMotionStart:()=>{R(!0)},onMotionEnd:()=>{R(!1)}}),j.map(e=>{let{value:a,disabled:r}=e;return t.createElement(p,(0,i.default)({},e,{name:b,data:e,itemRender:$,key:a,prefixCls:s,className:(0,o.clsx)(e.className,`${s}-item`,k?.item,{[`${s}-item-selected`]:a===A&&!P,[`${s}-item-focused`]:L&&E&&a===A}),style:v?.item,classNames:k,styles:v,checked:a===A,onChange:M,onFocus:D,onBlur:H,onKeyDown:W,onKeyUp:U,onMouseDown:B,disabled:!!f||!!r}))})))});e.i(63335);var f=e.i(601340),h=e.i(548817),g=e.i(478375),b=e.i(806520),y=e.i(242064),x=e.i(517455),w=e.i(491816);e.i(296059);var v=e.i(915654),k=e.i(183293),S=e.i(246422),$=e.i(838378);function C(e,t){return{[`${e}, ${e}:hover, ${e}:focus`]:{color:t.colorTextDisabled,cursor:"not-allowed"}}}let N=e=>({background:e.itemSelectedBg,boxShadow:e.boxShadowTertiary}),T={overflow:"hidden",...k.textEllipsis},j=(0,S.genStyleHooks)("Segmented",e=>{let{lineWidth:t,calc:i}=e;return(e=>{let{componentCls:t,motionDurationSlow:i,motionEaseInOut:a,motionDurationMid:r}=e,n=e.calc(e.controlHeight).sub(e.calc(e.trackPadding).mul(2)).equal(),o=e.calc(e.controlHeightLG).sub(e.calc(e.trackPadding).mul(2)).equal(),l=e.calc(e.controlHeightSM).sub(e.calc(e.trackPadding).mul(2)).equal();return{[t]:{...(0,k.resetComponent)(e),display:"inline-block",padding:e.trackPadding,color:e.itemColor,background:e.trackBg,borderRadius:e.borderRadius,transition:`all ${r}`,...(0,k.genFocusStyle)(e),[`${t}-group`]:{position:"relative",display:"flex",alignItems:"stretch",justifyItems:"flex-start",flexDirection:"row",width:"100%"},[`&${t}-rtl`]:{direction:"rtl"},[`&${t}-vertical`]:{[`${t}-group`]:{flexDirection:"column"},[`${t}-thumb`]:{width:"100%",height:0,padding:`0 ${(0,v.unit)(e.paddingXXS)}`}},[`&${t}-block`]:{display:"flex"},[`&${t}-block ${t}-item`]:{flex:1,minWidth:0},[`${t}-item`]:{position:"relative",textAlign:"center",cursor:"pointer",transition:`color ${r}`,borderRadius:e.borderRadiusSM,transform:"translateZ(0)","&-selected":{...N(e),color:e.itemSelectedColor},"&-focused":(0,k.genFocusOutline)(e),"&::after":{content:'""',position:"absolute",zIndex:-1,width:"100%",height:"100%",top:0,insetInlineStart:0,borderRadius:"inherit",opacity:0,pointerEvents:"none",transition:["opacity","background-color"].map(e=>`${e} ${r}`).join(", ")},[`&:not(${t}-item-selected):not(${t}-item-disabled)`]:{"&:hover, &:active":{color:e.itemHoverColor},"&:hover::after":{opacity:1,backgroundColor:e.itemHoverBg},"&:active::after":{opacity:1,backgroundColor:e.itemActiveBg}},"&-label":{minHeight:n,lineHeight:(0,v.unit)(n),padding:`0 ${(0,v.unit)(e.segmentedPaddingHorizontal)}`,...T},"&-icon + *":{marginInlineStart:e.calc(e.marginSM).div(2).equal()},"&-input":{position:"absolute",insetBlockStart:0,insetInlineStart:0,width:0,height:0,opacity:0,pointerEvents:"none"}},[`${t}-thumb`]:{...N(e),position:"absolute",insetBlockStart:0,insetInlineStart:0,width:0,height:"100%",padding:`${(0,v.unit)(e.paddingXXS)} 0`,borderRadius:e.borderRadiusSM,[`& ~ ${t}-item:not(${t}-item-selected):not(${t}-item-disabled)::after`]:{backgroundColor:"transparent"}},[`&${t}-lg`]:{borderRadius:e.borderRadiusLG,[`${t}-item-label`]:{minHeight:o,lineHeight:(0,v.unit)(o),padding:`0 ${(0,v.unit)(e.segmentedPaddingHorizontal)}`,fontSize:e.fontSizeLG},[`${t}-item, ${t}-thumb`]:{borderRadius:e.borderRadius}},[`&${t}-sm`]:{borderRadius:e.borderRadiusSM,[`${t}-item-label`]:{minHeight:l,lineHeight:(0,v.unit)(l),padding:`0 ${(0,v.unit)(e.segmentedPaddingHorizontalSM)}`},[`${t}-item, ${t}-thumb`]:{borderRadius:e.borderRadiusXS}},...C(`&-disabled ${t}-item`,e),...C(`${t}-item-disabled`,e),[`${t}-thumb-motion-appear-active`]:{willChange:"transform, width",transition:["transform","width"].map(e=>`${e} ${i} ${a}`).join(", ")},[`&${t}-shape-round`]:{borderRadius:9999,[`${t}-item, ${t}-thumb`]:{borderRadius:9999}}}}})((0,$.mergeToken)(e,{segmentedPaddingHorizontal:i(e.controlPaddingHorizontal).sub(t).equal(),segmentedPaddingHorizontalSM:i(e.controlPaddingHorizontalSM).sub(t).equal()}))},e=>{let{colorTextLabel:t,colorText:i,colorFillSecondary:a,colorBgElevated:r,colorFill:n,lineWidthBold:o,colorBgLayout:l}=e;return{trackPadding:o,trackBg:l,itemColor:t,itemHoverColor:i,itemHoverBg:a,itemSelectedBg:r,itemActiveBg:n,itemSelectedColor:i}}),A=t.forwardRef((e,i)=>{let a=(0,f.useId)(),{prefixCls:r,className:n,rootClassName:l,block:s,options:c=[],size:d,style:u,vertical:p,orientation:v,shape:k="default",name:S=a,styles:$,classNames:C,...N}=e,{getPrefixCls:T,direction:A,className:I,style:P,classNames:R,styles:M}=(0,y.useComponentConfig)("segmented"),O={...e,options:c,size:d,shape:k},E=(0,g.useSemanticRootStyle)(P),F=(0,g.useSemanticRootStyle)(u),[L,z]=(0,g.useMergeSemantic)([R,C],[M,E,$,F],{props:O}),D=T("segmented",r),[H,B]=j(D),U=(0,x.default)(d),q=t.useMemo(()=>c.map(e=>{if((0,b.isPlainObject)(e)&&e?.icon){let{icon:i,label:a,...r}=e;return{...r,label:t.createElement(t.Fragment,null,t.createElement("span",{className:(0,o.clsx)(`${D}-item-icon`,L.icon),style:z.icon},i),a&&t.createElement("span",null,a))}}return e}),[c,D,L.icon,z.icon]),[,W]=(0,h.useOrientation)(v,p),G=(0,o.clsx)(n,l,I,L.root,{[`${D}-block`]:s,[`${D}-sm`]:"small"===U,[`${D}-lg`]:"large"===U,[`${D}-vertical`]:W,[`${D}-shape-${k}`]:"round"===k},H,B);return t.createElement(m,{...N,name:S,className:G,style:z.root,classNames:L,styles:z,itemRender:(e,{item:i})=>{if(!i.tooltip)return e;let a=(0,b.isPlainObject)(i.tooltip)?i.tooltip:{title:i.tooltip};return t.createElement(w.default,{...a},e)},options:q,ref:i,prefixCls:D,direction:A,vertical:W})});e.s(["default",0,A],459817)},191817,560025,e=>{"use strict";var t=e.i(58125),i=e.i(184283),a=e.i(225913);let r=(0,i.createStaticStyles)(({css:e,cssVar:i})=>({borderless:t.staticStylish.variantBorderlessWithoutHover,filled:e`
      border: 1px solid ${i.colorFillQuaternary};
      background: ${i.colorBgLayout};
    `,glass:t.staticStylish.blur,outlined:e`
      border: 1px solid ${i.colorBorderSecondary};
      background: transparent;
    `,root:e``,shadow:t.staticStylish.shadow})),n=(0,a.cva)(r.root,{defaultVariants:{glass:!1,shadow:!1,variant:"filled"},variants:{variant:{filled:r.filled,outlined:r.outlined,borderless:r.borderless},glass:{false:null,true:r.glass},shadow:{false:null,true:r.shadow}}});var o=e.i(271645),l=e.i(843476),s=e.i(459817);e.s(["Segmented",()=>s.default],560025);var s=s;let c=(0,o.memo)(({ref:e,padding:t,style:a,className:r,variant:o="filled",shadow:c,glass:d,...u})=>(0,l.jsx)(s.default,{className:(0,i.cx)(n({glass:d,shadow:c,variant:o}),r),ref:e,style:{padding:t,...a},...u}));c.displayName="Segmented",e.s(["default",0,c],191817)},256017,e=>{"use strict";var t=e.i(191817);e.s(["Segmented",()=>t.default])},643957,e=>{"use strict";let t=(0,e.i(456420).default)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);e.s(["default",0,t])},689664,e=>{"use strict";var t=e.i(643957);e.s(["Check",()=>t.default])},328235,e=>{"use strict";var t=e.i(649637),i=e.i(232839),a=e.i(207670),r=e.i(271645),n=e.i(830731),o=e.i(737434);let{ESC:l,TAB:s}=n.default,c=(0,r.forwardRef)((e,t)=>{let{overlay:a,arrow:n,prefixCls:o}=e,l=(0,r.useMemo)(()=>"function"==typeof a?a():a,[a]),s=(0,i.composeRef)(t,(0,i.getNodeRef)(l));return r.default.createElement(r.default.Fragment,null,n&&r.default.createElement("div",{className:`${o}-arrow`}),r.default.cloneElement(l,{ref:(0,i.supportRef)(l)?s:void 0}))}),d={adjustX:1,adjustY:1},u=[0,0],p={topLeft:{points:["bl","tl"],overflow:d,offset:[0,-4],targetOffset:u},top:{points:["bc","tc"],overflow:d,offset:[0,-4],targetOffset:u},topRight:{points:["br","tr"],overflow:d,offset:[0,-4],targetOffset:u},bottomLeft:{points:["tl","bl"],overflow:d,offset:[0,4],targetOffset:u},bottom:{points:["tc","bc"],overflow:d,offset:[0,4],targetOffset:u},bottomRight:{points:["tr","br"],overflow:d,offset:[0,4],targetOffset:u}};function m(){return(m=Object.assign.bind()).apply(this,arguments)}let f=r.default.forwardRef((e,n)=>{let{arrow:d=!1,prefixCls:u="rc-dropdown",transitionName:f,animation:h,align:g,placement:b="bottomLeft",placements:y=p,getPopupContainer:x,showAction:w,hideAction:v,overlayClassName:k,overlayStyle:S,visible:$,trigger:C=["hover"],autoFocus:N,overlay:T,children:j,onVisibleChange:A,...I}=e,[P,R]=r.default.useState(),M="visible"in e?$:P,O=h?`${u}-${h}`:f,E=r.default.useRef(null),F=r.default.useRef(null),L=r.default.useRef(null);r.default.useImperativeHandle(n,()=>E.current);let z=e=>{R(e),A?.(e)};!function({visible:e,triggerRef:t,onVisibleChange:i,autoFocus:a,overlayRef:n}){let c=r.useRef(!1),d=()=>{e&&(t.current?.focus?.(),i?.(!1))},u=()=>!!n.current?.focus&&(n.current.focus(),c.current=!0,!0),p=e=>{switch(e.keyCode){case l:d();break;case s:{let t=!1;c.current||(t=u()),t?e.preventDefault():d()}}};r.useEffect(()=>e?(window.addEventListener("keydown",p),a&&(0,o.default)(u,3),()=>{window.removeEventListener("keydown",p),c.current=!1}):()=>{c.current=!1},[e])}({visible:M,triggerRef:L,onVisibleChange:z,autoFocus:N,overlayRef:F});let D=()=>r.default.createElement(c,{ref:F,overlay:T,prefixCls:u,arrow:d}),H=r.default.cloneElement(j,{className:(0,a.clsx)(j.props?.className,M&&(()=>{let{openClassName:t}=e;return void 0!==t?t:`${u}-open`})()),ref:(0,i.supportRef)(j)?(0,i.composeRef)(L,(0,i.getNodeRef)(j)):void 0}),B=v;return B||-1===C.indexOf("contextMenu")||(B=["click"]),r.default.createElement(t.default,m({builtinPlacements:y},I,{prefixCls:u,ref:E,popupClassName:(0,a.clsx)(k,{[`${u}-show-arrow`]:d}),popupStyle:S,action:C,showAction:w,hideAction:B,popupPlacement:b,popupAlign:g,popupMotion:{motionName:O},popupVisible:M,stretch:(()=>{let{minOverlayWidthMatchTrigger:t,alignPoint:i}=e;return"minOverlayWidthMatchTrigger"in e?t:!i})()?"minWidth":"",popup:"function"==typeof T?D:D(),onOpenChange:z,onPopupClick:t=>{let{onOverlayClick:i}=e;R(!1),i&&i(t)},getPopupContainer:x}),H)});e.s(["default",0,f],328235)},546061,e=>{"use strict";var t=e.i(201175);e.s(["LobeHub",()=>t.default])},638464,e=>{"use strict";var t=e.i(58125);e.s(["lobeStaticStylish",()=>t.staticStylish])},486642,e=>{"use strict";var t=e.i(843476),i=e.i(128709),a=e.i(184283),r=e.i(271645);let n=(0,a.createStaticStyles)(({css:e,cssVar:t})=>({desc:e`
    font-size: 16px;
    color: ${t.colorTextDescription};
    ${a.responsive.sm} {
      text-align: center;
    }
  `,subtitle:e`
    font-size: 20px;
    font-weight: 400;
    line-height: 1.6;
    ${a.responsive.sm} {
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
    ${a.responsive.sm} {
      font-size: 24px;
    }
  `})),o=(0,r.memo)(({children:e,className:r,...o})=>(0,t.jsx)(i.Text,{className:(0,a.cx)(n.subtitle,r),...o,children:e}));e.s(["default",0,o],486642)},748619,e=>{"use strict";var t=e.i(843476),i=e.i(128709),a=e.i(184283),r=e.i(271645);let n=(0,a.createStaticStyles)(({css:e})=>({container:e`
    flex-wrap: wrap;
    column-gap: 0.3em;

    min-height: 60px;

    font-size: 48px;
    font-weight: bold;
    line-height: 1.2;
    ${a.responsive.sm} {
      font-size: 32px;
    }
  `})),o=(0,r.memo)(({as:e="h2",children:r,className:o,...l})=>(0,t.jsx)(i.Text,{as:e,className:(0,a.cx)(n.container,o),...l,children:r}));e.s(["default",0,o])},347782,e=>{"use strict";var t=e.i(843476),i=e.i(522016),a=e.i(271645);e.s(["default",0,({prefetch:e,onMouseEnter:r,...n})=>{let o=(0,a.useRef)(!1),[,l]=(0,a.useState)(0),s=(0,a.useCallback)(e=>{o.current||l(e=>e+1),o.current=!0,r?.(e)},[r]);return(0,t.jsx)(i.default,{...n,onMouseEnter:s,prefetch:e??(!!o.current&&null)})}])},297355,e=>{"use strict";let t="%[a-f0-9]{2}",i=RegExp("("+t+")|([^%]+?)","gi"),a=RegExp("("+t+")+","gi");function r(e,t){if("string"!=typeof e||"string"!=typeof t)throw TypeError("Expected the arguments to be of type `string`");if(""===e||""===t)return[];let i=e.indexOf(t);return -1===i?[]:[e.slice(0,i),e.slice(i+t.length)]}let n=Symbol("encodeFragmentIdentifier");function o(e){if("string"!=typeof e||1!==e.length)throw TypeError("arrayFormatSeparator must be single character string")}function l(e,t){return t.encode?t.strict?encodeURIComponent(e).replaceAll(/[!'()*]/g,e=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`):encodeURIComponent(e):e}function s(e,t){if(t.decode){if("string"!=typeof e)throw TypeError("Expected `encodedURI` to be of type `string`, got `"+typeof e+"`");try{return decodeURIComponent(e)}catch{var r=e;let t={"%FE%FF":"��","%FF%FE":"��"},n=a.exec(r);for(;n;){try{t[n[0]]=decodeURIComponent(n[0])}catch{let e=function(e){try{return decodeURIComponent(e)}catch{let t=e.match(i)||[];for(let a=1;a<t.length;a++)t=(e=(function e(t,i){try{return[decodeURIComponent(t.join(""))]}catch{}if(1===t.length)return t;i=i||1;let a=t.slice(0,i),r=t.slice(i);return Array.prototype.concat.call([],e(a),e(r))})(t,a).join("")).match(i)||[];return e}}(n[0]);e!==n[0]&&(t[n[0]]=e)}n=a.exec(r)}for(let e of(t["%C2"]="�",Object.keys(t)))r=r.replace(RegExp(e,"g"),t[e]);return r}}return e}function c(e){let t=e.indexOf("#");return -1!==t&&(e=e.slice(0,t)),e}function d(e){let t=e.indexOf("?");return -1===t?e:e.slice(0,t)}function u(e,t,i){return"string"===i&&"string"==typeof e?e:"function"==typeof i&&"string"==typeof e?i(e):"boolean"===i&&null===e||("boolean"===i&&null!==e&&("true"===e.toLowerCase()||"false"===e.toLowerCase())?"true"===e.toLowerCase():"boolean"===i&&null!==e&&("1"===e.toLowerCase()||"0"===e.toLowerCase())?"1"===e.toLowerCase():"string[]"===i&&"none"!==t.arrayFormat&&"string"==typeof e?[e]:"number[]"!==i||"none"===t.arrayFormat||Number.isNaN(Number(e))||"string"!=typeof e||""===e.trim()?"number"!==i||Number.isNaN(Number(e))||"string"!=typeof e||""===e.trim()?t.parseBooleans&&null!==e&&("true"===e.toLowerCase()||"false"===e.toLowerCase())?"true"===e.toLowerCase():t.parseNumbers&&!Number.isNaN(Number(e))&&"string"==typeof e&&""!==e.trim()?Number(e):e:Number(e):[Number(e)])}function p(e){let t=(e=c(e)).indexOf("?");return -1===t?"":e.slice(t+1)}function m(e,t){o((t={decode:!0,sort:!0,arrayFormat:"none",arrayFormatSeparator:",",parseNumbers:!1,parseBooleans:!1,types:Object.create(null),...t}).arrayFormatSeparator);let i=function(e){let t;switch(e.arrayFormat){case"index":return(e,i,a)=>{if(t=/\[(\d*)]$/.exec(e),e=e.replace(/\[\d*]$/,""),!t){a[e]=i;return}void 0===a[e]&&(a[e]={}),a[e][t[1]]=i};case"bracket":return(e,i,a)=>{if(t=/(\[])$/.exec(e),e=e.replace(/\[]$/,""),!t){a[e]=i;return}if(void 0===a[e]){a[e]=[i];return}if(!Array.isArray(a[e])){a[e]=[a[e],i];return}a[e].push(i)};case"colon-list-separator":return(e,i,a)=>{if(t=/(:list)$/.exec(e),e=e.replace(/:list$/,""),!t){a[e]=i;return}if(void 0===a[e]){a[e]=[i];return}if(!Array.isArray(a[e])){a[e]=[a[e],i];return}a[e].push(i)};case"comma":case"separator":return(t,i,a)=>{let r="string"==typeof i&&i.includes(e.arrayFormatSeparator)?i.split(e.arrayFormatSeparator).map(t=>s(t,e)):null===i?i:s(i,e);a[t]=r};case"bracket-separator":return(t,i,a)=>{let r=/(\[])$/.test(t);if(t=t.replace(/\[]$/,""),!r){a[t]=i?s(i,e):i;return}let n=null===i?[]:s(i,e).split(e.arrayFormatSeparator);if(void 0===a[t]){a[t]=n;return}for(let e of(Array.isArray(a[t])||(a[t]=[a[t]]),n))a[t].push(e)};default:return(e,t,i)=>{if(void 0===i[e]){i[e]=t;return}Array.isArray(i[e])?i[e].push(t):i[e]=[i[e],t]}}}(t),a=Object.create(null);if("string"!=typeof e||!(e=e.trim().replace(/^[?#&]/,"")))return a;let n=0;for(let o=0;o<=e.length;o++){if(o<e.length&&"&"!==e[o])continue;if(o===n){n=o+1;continue}let l=e.slice(n,o);n=o+1;let c=t.decode?l.replaceAll("+"," "):l,[d,u]=r(c,"=");void 0===d&&(d=c),u=void 0===u?null:["comma","separator","bracket-separator"].includes(t.arrayFormat)?u:s(u,t),i(s(d,t),u,a)}for(let[e,i]of Object.entries(a))if("object"==typeof i&&null!==i&&"string"!==t.types[e])for(let[a,r]of Object.entries(i)){let n=t.types[e],o="function"==typeof n?n:n?n.replace("[]",""):void 0;i[a]=u(r,t,o)}else"object"==typeof i&&null!==i&&"string"===t.types[e]?a[e]=Object.values(i).join(t.arrayFormatSeparator):a[e]=u(i,t,t.types[e]);return!1===t.sort?a:(!0===t.sort?Object.keys(a).sort():Object.keys(a).sort(t.sort)).reduce((e,t)=>{let i=a[t];return e[t]=i&&"object"==typeof i&&!Array.isArray(i)?function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((e,t)=>Number(e)-Number(t)).map(e=>t[e]):t}(i):i,e},Object.create(null))}function f(e,t){if(!e)return"";o((t={encode:!0,strict:!0,arrayFormat:"none",arrayFormatSeparator:",",...t}).arrayFormatSeparator);let i=i=>t.skipNull&&null==e[i]||t.skipEmptyString&&""===e[i],a=function(e){switch(e.arrayFormat){case"index":return t=>(i,a)=>{let r=i.length;return void 0===a||e.skipNull&&null===a||e.skipEmptyString&&""===a||(null===a?i.push(l(t,e)+"["+r+"]"):i.push(l(t,e)+"["+l(r,e)+"]="+l(a,e))),i};case"bracket":return t=>(i,a)=>(void 0===a||e.skipNull&&null===a||e.skipEmptyString&&""===a||(null===a?i.push(l(t,e)+"[]"):i.push(l(t,e)+"[]="+l(a,e))),i);case"colon-list-separator":return t=>(i,a)=>(void 0===a||e.skipNull&&null===a||e.skipEmptyString&&""===a||(null===a?i.push(l(t,e)+":list="):i.push(l(t,e)+":list="+l(a,e))),i);case"comma":case"separator":case"bracket-separator":{let t="bracket-separator"===e.arrayFormat?"[]=":"=";return i=>(a,r)=>(void 0===r||e.skipNull&&null===r||e.skipEmptyString&&""===r||((r=null===r?"":r,0===a.length)?a.push([l(i,e),t,l(r,e)].join("")):a.push(l(r,e))),a)}default:return t=>(i,a)=>(void 0===a||e.skipNull&&null===a||e.skipEmptyString&&""===a||(null===a?i.push(l(t,e)):i.push(l(t,e)+"="+l(a,e))),i)}}(t),r={};for(let[t,a]of Object.entries(e))i(t)||(r[t]=a);let n=Object.keys(r);return!1!==t.sort&&n.sort(t.sort),n.map(i=>{let r=e[i];if(t.replacer&&void 0===(r=t.replacer(i,r))||void 0===r)return"";if(null===r)return l(i,t);if(Array.isArray(r)){if(0===r.length&&"bracket-separator"===t.arrayFormat)return l(i,t)+"[]";let e=r;t.replacer&&(e=r.map((e,a)=>t.replacer(`${i}[${a}]`,e)).filter(e=>void 0!==e));let n=e.reduce(a(i),[]),o=["comma","separator","bracket-separator"].includes(t.arrayFormat)?t.arrayFormatSeparator:"&";return n.join(o)}return l(i,t)+"="+l(r,t)}).filter(e=>e.length>0).join("&")}function h(e,t){t={decode:!0,...t};let[i,a]=r(e,"#");return void 0===i&&(i=e),{url:d(i??""),query:m(p(e),t),...t&&t.parseFragmentIdentifier&&a?{fragmentIdentifier:s(a,t)}:{}}}function g(e,t){var i;let a,r;t={encode:!0,strict:!0,[n]:!0,...t};let o=d(c(e.url))||"",l=f({...m(p(e.url),{sort:!1,...t}),...e.query},t);l&&=`?${l}`;let s=(i=e.url,a="",-1!==(r=i.indexOf("#"))&&(a=i.slice(r)),a);if("string"==typeof e.fragmentIdentifier){let i=new URL(o,"https://query-string.invalid");i.hash=e.fragmentIdentifier,s=t[n]?i.hash:`#${e.fragmentIdentifier}`}return`${o}${l}${s}`}function b(e,t,i){let{url:a,query:r,fragmentIdentifier:o}=h(e,i={parseFragmentIdentifier:!0,[n]:!1,...i});return g({url:a,query:function(e,t){let i={};if(Array.isArray(t))for(let a of t){let t=Object.getOwnPropertyDescriptor(e,a);t?.enumerable&&Object.defineProperty(i,a,t)}else for(let a of Reflect.ownKeys(e)){let r=Object.getOwnPropertyDescriptor(e,a);if(r.enumerable){let n=e[a];t(a,n,e)&&Object.defineProperty(i,a,r)}}return i}(r,t),fragmentIdentifier:o},i)}e.s(["exclude",0,function(e,t,i){if(Array.isArray(t)){let a=new Set(t);return b(e,e=>!a.has(e),i)}return b(e,(e,i)=>!t(e,i),i)},"extract",0,p,"parse",0,m,"parseUrl",0,h,"pick",0,b,"stringify",0,f,"stringifyUrl",0,g],681324);var y=e.i(681324);e.s(["default",0,y],297355)},484479,e=>{"use strict";let t=(0,e.i(456420).default)("download",[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]);e.s(["default",0,t])},923388,e=>{"use strict";var t=e.i(484479);e.s(["DownloadIcon",()=>t.default])},924886,576792,e=>{"use strict";var t,i=e.i(271645);let a=async()=>{try{let e=navigator.userAgentData;if(!e?.getHighEntropyValues)return"unknown";let t=await e.getHighEntropyValues(["architecture"]),i=String(t.architecture||"").toLowerCase();if(i.includes("arm"))return"apple-silicon";if(i.includes("x86"))return"intel"}catch{}return"unknown"};e.s(["usePlatformDetection",0,()=>{let[e,t]=(0,i.useState)({macArchitecture:"unknown",platform:"unknown"});return(0,i.useEffect)(()=>{let e,i,r=!1,n=(e=window.navigator.userAgent.toLowerCase(),i=window.navigator.platform?.toLowerCase()||"",/iphone|ipad|ipod/.test(e)||i.includes("mac")&&"ontouchend"in document?{platform:"ios"}:e.includes("android")?{platform:"android"}:e.includes("mac")||i.includes("mac")||e.includes("darwin")?{macArchitecture:"unknown",platform:"mac"}:e.includes("win")||i.includes("win")||e.includes("windows")?{platform:"win"}:e.includes("linux")||i.includes("linux")||e.includes("x11")?{platform:"linux"}:{platform:"unknown"});return t(n),"mac"===n.platform&&(async()=>{let e=await a(),i="unknown"!==e?e:(()=>{try{let e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");if(!t)return"unknown";let i=t.getExtension("WEBGL_debug_renderer_info");if(!i)return"unknown";let a=String(t.getParameter(i.UNMASKED_RENDERER_WEBGL)||"");if(/apple\s*(m\d|gpu|silicon)/i.test(a))return"apple-silicon";if(/intel/i.test(a)||/(amd|radeon|ati)/i.test(a))return"intel"}catch{}return"unknown"})();r||"unknown"!==i&&t(e=>"mac"===e.platform?{...e,macArchitecture:i}:e)})(),()=>{r=!0}},[]),e}],924886);var r=e.i(297355),n=((t={}).Android="android",t.Linux="linux",t.MacosAppleSilicon="macosAppleSilicon",t.MacosIntel="macosIntel",t.Windows="windows",t.iOS="ios",t);let o=new class{latestEndpoint="https://app.lobehub.com/api/desktop/latest";getApiType=e=>{switch(e){case"macosAppleSilicon":return"mac-arm";case"macosIntel":return"mac-intel";case"windows":return"windows";case"linux":return"linux";case"ios":case"android":return null}};getLatestDesktopRelease=async e=>{let t=await fetch(r.default.stringifyUrl({query:{as_json:1},url:this.latestEndpoint}),{signal:e});if(!t.ok)throw Error(`Failed to fetch desktop releases: ${t.status}`);return t.json()};getPlatformDownloadUrl=e=>{if("ios"===e)return"https://apps.apple.com/app/id6749615954";if("android"===e)return"https://play.google.com/store/apps/details?id=com.lobehub.app";let t=this.getApiType(e);return t?r.default.stringifyUrl({query:{type:t},url:this.latestEndpoint}):"/downloads"};getPlatformDownloadPage=e=>{switch(e.platform){case"ios":return"https://apps.apple.com/app/id6749615954";case"android":return"https://play.google.com/store/apps/details?id=com.lobehub.app";case"mac":return"/downloads/mac";case"win":return"/downloads/win";case"linux":return"/downloads/linux";default:return"/downloads"}};getPlatformDownloadPageLegacy=e=>{switch(e){case"mac":return"/downloads/mac";case"win":return"/downloads/win";case"linux":return"/downloads/linux";default:return"/downloads"}};getRecommendedDownloadPlatform=e=>{switch(e.platform){case"ios":return"ios";case"android":return"android";case"mac":if("intel"===e.macArchitecture)return"macosIntel";if("apple-silicon"===e.macArchitecture);return"macosAppleSilicon";case"win":return"windows";case"linux":return"linux";default:return null}};getRecommendedDownloadPlatformLegacy=e=>{switch(e){case"mac":return"macosAppleSilicon";case"win":return"windows";case"linux":return"linux";default:return null}};getPlatformDisplayName=e=>{switch(e.platform){case"ios":return"iOS";case"android":return"Android";case"mac":if("intel"===e.macArchitecture)return"macOS";if("apple-silicon"===e.macArchitecture);return"macOS";case"win":return"Windows";case"linux":return"Linux";default:return"Unknown Platform"}};getPlatformDisplayNameLegacy=e=>{switch(e){case"mac":return"macOS";case"win":return"Windows";case"linux":return"Linux";default:return"Unknown Platform"}}};e.s(["DownloadPlatforms",()=>n,"downloadService",0,o],576792)},813097,263543,e=>{"use strict";var t=e.i(247167),i=e.i(843476),a=e.i(450354),r=e.i(123243),n=e.i(184283),o=e.i(271645);e.i(785269);var l=e.i(322831),s=e.i(923388),c=e.i(347782),d=e.i(924886),u=e.i(576792);let p=(0,o.memo)(({...e})=>{let{t}=(0,l.useTranslation)("downloads"),r=(0,d.usePlatformDetection)(),{text:n,url:p,isLoading:m,isExternal:f}=(0,o.useMemo)(()=>{if("unknown"===r.platform)return{isExternal:!1,isLoading:!0,text:t("page.downloadLatest"),url:"/downloads"};let e=u.downloadService.getPlatformDisplayName(r),i=u.downloadService.getPlatformDownloadPage(r);return{isExternal:"ios"===r.platform||"android"===r.platform,isLoading:!1,text:t("page.downloadFor",{platform:e}),url:i}},[t,r]);return f?(0,i.jsx)(a.Button,{href:p,icon:s.DownloadIcon,iconPlacement:"end",loading:m,size:"large",target:"_blank",...e,children:n}):(0,i.jsx)(c.default,{href:p,children:(0,i.jsx)(a.Button,{icon:s.DownloadIcon,iconPlacement:"end",loading:m,size:"large",...e,children:n})})});e.s(["default",0,p],263543);var m=e.i(892766),f=e.i(889515);let h=(0,n.createStaticStyles)(({css:e,cssVar:t})=>({button:e`
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
  `})),g=(0,o.memo)(({cloudCtaUtm:e,mobile:o,utmTerm:s})=>{let{t:d}=(0,l.useTranslation)(["landing","blog"]),u=e?.utmContent&&e.utmMedium?e:(t.default,{utmContent:f.UTM_CONTENT.callbackFooterDiscover,utmMedium:f.UTM_MEDIUM.discover});return(0,i.jsxs)(r.Center,{gap:16,horizontal:!o,children:[(0,i.jsx)(c.default,{href:(0,m.urlWithUTM)(m.LOBE_CHAT_URL,{utmContent:u.utmContent,utmMedium:u.utmMedium,...s?{utmTerm:s}:{}}),children:(0,i.jsx)(a.Button,{block:o,className:h.button,size:"large",type:"primary",children:d("buttons.getStartedForFree",{ns:"common"})})}),!o&&(0,i.jsx)(p,{className:(0,n.cx)(h.button,h.downloadButton),variant:"filled"})]})});e.s(["default",0,g],813097)},404010,e=>{"use strict";let t=new Set(["agent","mcp","skills"]);e.s(["getDiscoverResourceIdFromPathname",0,e=>{let i=e.split("/").filter(Boolean);for(let e=0;e<i.length;e+=1)if(t.has(i[e])&&e+1<i.length)return decodeURIComponent(i.slice(e+1).join("/"))},"getIconsResourceIdFromPathname",0,e=>{let t=e.split("/").filter(Boolean),i=t.indexOf("icons");if(!(i<0)&&!(i+1>=t.length))return decodeURIComponent(t.slice(i+1).join("/"))}])},171858,e=>{"use strict";var t=e.i(843476),i=e.i(943243),a=e.i(123243),r=e.i(208544),n=e.i(638464),o=e.i(546061),l=e.i(184283),s=e.i(618566),c=e.i(271645);e.i(785269);var d=e.i(322831),u=e.i(813097),p=e.i(748619),m=e.i(486642),f=e.i(889515),h=e.i(404010);let g=(0,l.createStaticStyles)(({css:e,cssVar:t})=>({container:e`
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
    `,hightlight:(0,l.cx)(n.lobeStaticStylish.gradientAnimation,e`
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
    `})),b=(0,c.memo)(({actions:e,description:n,mobile:l,style:b,title:y,variant:x})=>{let{t:w}=(0,d.useTranslation)("landing"),v=(0,s.usePathname)(),k=f.CALLBACK_FOOTER_CLOUD_UTM[x]??f.CALLBACK_FOOTER_CLOUD_UTM.discover,S=(0,c.useMemo)(()=>"discover"===x?(0,h.getDiscoverResourceIdFromPathname)(v)??void 0:"icons"===x?(0,h.getIconsResourceIdFromPathname)(v)??void 0:void 0,[x,v]);return(0,t.jsxs)(a.Center,{className:g.container,gap:32,style:b,children:[(0,t.jsx)(i.Block,{align:"center",height:128,justify:"center",style:{borderRadius:28,boxShadow:"0 8px 32px rgba(0, 0, 0, 0.05)",zIndex:10},variant:"outlined",width:128,children:(0,t.jsx)(o.LobeHub,{size:100})}),(0,t.jsxs)(r.Flexbox,{align:"center",style:{zIndex:1},children:[(0,t.jsx)(p.default,{align:l?"center":void 0,style:{letterSpacing:"-0.04em",minHeight:"unset"},weight:"bolder",children:y??"Your Chief Agent Operator"}),(0,t.jsx)(m.default,{align:l?"center":void 0,as:"h3",children:n??w("footer.desc")})]}),e||(0,t.jsx)(u.default,{cloudCtaUtm:k,mobile:l,utmTerm:S})]})});e.s(["default",0,b,"styles",0,g])},675849,e=>{"use strict";let t=(0,e.i(456420).default)("image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);e.s(["default",0,t])},770990,e=>{"use strict";var t=e.i(675849);e.s(["ImageIcon",()=>t.default])},790882,e=>{"use strict";var t=e.i(843476),i=e.i(184283),a=e.i(271645);let r=(0,i.createStaticStyles)(({css:e})=>({bg1:e`
    position: absolute;
    inset-block-start: 25%;
    inset-inline-end: 0;

    aspect-ratio: 1;
    width: 50%;
    border-radius: 50%;

    background: var(--bg1-color);
  `,bg2:e`
    position: absolute;
    inset-block-end: 0;
    inset-inline-start: 0;

    aspect-ratio: 1;
    width: 50%;
    border-radius: 50%;

    background: var(--bg2-color);
  `,container:e`
    position: absolute;
    z-index: 0;
    inset-block-start: 16vh;
    inset-inline-start: 0;
    transform: scale(1.2);

    width: 100%;
    height: 100vh;

    opacity: 0.5;
    filter: blur(320px);
  `})),n=(0,a.memo)(({colors:e=[i.cssVar.purple,i.cssVar.gold]})=>(0,t.jsxs)("div",{className:r.container,style:{"--bg1-color":e[0],"--bg2-color":e[1]},children:[(0,t.jsx)("div",{className:r.bg1}),(0,t.jsx)("div",{className:r.bg2})]}));e.s(["default",0,n])},593698,e=>{"use strict";var t=e.i(643957);e.s(["CheckIcon",()=>t.default])},463134,e=>{"use strict";let t=(0,e.i(456420).default)("video",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]);e.s(["default",0,t])},438583,e=>{"use strict";var t=e.i(463134);e.s(["Video",()=>t.default])},291542,e=>{"use strict";var t=e.i(221479);e.s(["Table",()=>t.default])},425444,e=>{"use strict";let t=(0,e.i(456420).default)("brain",[["path",{d:"M12 18V5",key:"adv99a"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4",key:"1e3is1"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5",key:"1gqd8o"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77",key:"iwvgf7"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464",key:"efp6ie"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517",key:"1gq6am"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464",key:"k1g0md"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77",key:"q97ue3"}]]);e.s(["default",0,t])},33612,658726,302670,e=>{"use strict";e.i(822315);var t,i,a,r,n=e.i(643289);(t={}).Payment="payment",t.Subscription="subscription";var o=((i={}).Free="free",i.Premium="premium",i.Starter="starter",i.Ultimate="ultimate",i),l=((a={}).Monthly="monthly",a.Yearly="yearly",a);e.s(["Plans",()=>o,"Recurring",()=>l],658726),(r={})[r.Active=0]="Active",r[r.Cancelled=1]="Cancelled",r[r.Inactive=2]="Inactive";let s={[o.Free]:{id:o.Free,limit:{credit:.5,embeddingStorage:100,fileStorage:0xa00000},price:{monthly:0,yearly:0}},[o.Starter]:{id:o.Starter,limit:{credit:5,embeddingStorage:5e3,fileStorage:0x40000000},price:{monthly:12.9,yearly:9.9}},[o.Premium]:{id:o.Premium,limit:{credit:15,embeddingStorage:1e4,fileStorage:0x80000000},price:{monthly:24.9,yearly:19.9}},[o.Ultimate]:{id:o.Ultimate,limit:{credit:35,embeddingStorage:2e4,fileStorage:0x100000000},price:{monthly:49.9,yearly:39.9}}};s[o.Free].limit.credit,e.s(["CREDIT_UNIT",0,1e6,"TOKEN_PER_MESSAGE",0,2500,"subscriptionPlan",0,s],302670);var c=e.i(352455);let d=e=>(0,n.default)(e).format("0,0");e.s(["formatCredit",0,e=>d(1e6*e),"formatCreditPerKToken",0,e=>d(1e3*e),"formatModelMessageCount",0,(e,t,i)=>(0,c.formatIntergerNumber)(100*Math.round(1e6*e/(2500*(.3*i+.7*t))/100))],33612)},235056,275043,e=>{"use strict";let t=(0,e.i(456420).default)("circle-question-mark",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);e.s(["default",0,t],275043),e.s(["CircleHelp",0,t],235056)},522571,e=>{"use strict";var t=e.i(843476),i=e.i(208544),a=e.i(215648);let r=(0,e.i(271645).memo)(({children:e,tag:r,...n})=>(0,t.jsxs)(i.Flexbox,{align:"center",flex:"none",gap:12,horizontal:!0,style:{textWrap:"nowrap"},...n,children:[e,r&&(0,t.jsx)(a.Tag,{style:{margin:0},children:r})]}));e.s(["default",0,r])},52655,928051,770225,e=>{"use strict";var t=e.i(843476),i=e.i(836516);e.s(["ModelIcon",()=>i.default],928051);var i=i,a=e.i(291542);let r={chatModels:[{abilities:{functionCall:!0,vision:!0},contextWindowTokens:1047576,description:"GPT-4.1 是我们用于复杂任务的旗舰模型。它非常适合跨领域解决问题。",displayName:"GPT-4.1",enabled:!0,id:"gpt-4.1",maxOutput:32768,pricing:{cachedInput:.5,input:2,output:8},releasedAt:"2025-04-14",type:"chat"},{abilities:{functionCall:!0,vision:!0},contextWindowTokens:1047576,description:"GPT-4.1 mini 提供了智能、速度和成本之间的平衡，使其成为许多用例中有吸引力的模型。",displayName:"GPT-4.1 mini",enabled:!0,id:"gpt-4.1-mini",maxOutput:32768,pricing:{cachedInput:.1,input:.4,output:1.6},releasedAt:"2025-04-14",type:"chat"},{abilities:{functionCall:!0,vision:!0},contextWindowTokens:1047576,description:"GPT-4.1 mini 提供了智能、速度和成本之间的平衡，使其成为许多用例中有吸引力的模型。",displayName:"GPT-4.1 nano",enabled:!0,id:"gpt-4.1-nano",maxOutput:32768,pricing:{cachedInput:.025,input:.1,output:.4},releasedAt:"2025-04-14",type:"chat"},{abilities:{functionCall:!0,vision:!0},contextWindowTokens:128e3,description:"GPT-4o mini是OpenAI在GPT-4 Omni之后推出的最新模型，支持图文输入并输出文本。作为他们最先进的小型模型，它比其他近期的前沿模型便宜很多，并且比GPT-3.5 Turbo便宜超过60%。它保持了最先进的智能，同时具有显著的性价比。GPT-4o mini在MMLU测试中获得了 82% 的得分，目前在聊天偏好上排名高于 GPT-4。",displayName:"GPT-4o mini",id:"gpt-4o-mini",maxOutput:16385,pricing:{cachedInput:.075,input:.15,output:.6},releasedAt:"2024-07-18",type:"chat"},{abilities:{functionCall:!0,vision:!0},contextWindowTokens:128e3,description:"ChatGPT-4o 是一款动态模型，实时更新以保持当前最新版本。它结合了强大的语言理解与生成能力，适合于大规模应用场景，包括客户服务、教育和技术支持。",displayName:"GPT-4o",enabled:!0,id:"gpt-4o",pricing:{cachedInput:1.25,input:2.5,output:10},releasedAt:"2024-05-13",type:"chat"},{abilities:{vision:!0},contextWindowTokens:128e3,description:"ChatGPT-4o 是一款动态模型，实时更新以保持当前最新版本。它结合了强大的语言理解与生成能力，适合于大规模应用场景，包括客户服务、教育和技术支持。",displayName:"ChatGPT-4o",enabled:!0,id:"chatgpt-4o-latest",pricing:{input:5,output:15},releasedAt:"2024-08-14",type:"chat"},{abilities:{functionCall:!0,vision:!0},contextWindowTokens:128e3,description:"最新的 GPT-4 Turbo 模型具备视觉功能。现在，视觉请求可以使用 JSON 模式和函数调用。 GPT-4 Turbo 是一个增强版本，为多模态任务提供成本效益高的支持。它在准确性和效率之间找到平衡，适合需要进行实时交互的应用程序场景。",displayName:"GPT-4 Turbo",id:"gpt-4-turbo",pricing:{input:10,output:30},type:"chat"},{contextWindowTokens:128e3,description:"o1-mini是一款针对编程、数学和科学应用场景而设计的快速、经济高效的推理模型。该模型具有128K上下文和2023年10月的知识截止日期。",displayName:"OpenAI o1-mini",enabled:!0,id:"o1-mini",maxOutput:65536,pricing:{cachedInput:.55,input:1.1,output:4.4},releasedAt:"2024-09-12",type:"chat"},{abilities:{functionCall:!0,reasoning:!0,vision:!0},contextWindowTokens:2e5,description:"Claude 3.7 Sonnet 是 Anthropic 迄今为止最智能的模型，也是市场上首个混合推理模型。Claude 3.7 Sonnet 可以产生近乎即时的响应或延长的逐步思考，用户可以清晰地看到这些过程。API 用户还可以对模型思考的时间进行细致的控制",displayName:"Claude 3.7 Sonnet",enabled:!0,id:"claude-3-7-sonnet-latest",maxOutput:8192,pricing:{cachedInput:.3,input:3,output:15,writeCacheInput:3.75},settings:{extendParams:["disableContextCaching","enableReasoning","reasoningBudgetToken"]},type:"chat"},{abilities:{functionCall:!0,vision:!0},contextWindowTokens:2e5,description:"Claude 3.5 Sonnet 提供了超越 Opus 的能力和比 Sonnet 更快的速度，同时保持与 Sonnet 相同的价格。Sonnet 特别擅长编程、数据科学、视觉处理、代理任务。",displayName:"Claude 3.5 Sonnet New",enabled:!0,id:"claude-3-5-sonnet-latest",maxOutput:8192,pricing:{cachedInput:.3,input:3,output:15,writeCacheInput:3.75},settings:{extendParams:["disableContextCaching"]},type:"chat"},{abilities:{functionCall:!0,vision:!0},contextWindowTokens:2e5,description:"Claude 3.5 Sonnet 提供了超越 Opus 的能力和比 Sonnet 更快的速度，同时保持与 Sonnet 相同的价格。Sonnet 特别擅长编程、数据科学、视觉处理、代理任务。",displayName:"Claude 3.5 Sonnet 0620",id:"claude-3-5-sonnet-20240620",maxOutput:8192,pricing:{cachedInput:.3,input:3,output:15,writeCacheInput:3.75},releasedAt:"2024-06-20",settings:{extendParams:["disableContextCaching"]},type:"chat"},{abilities:{functionCall:!0},contextWindowTokens:2e5,description:"Claude 3.5 Haiku 是 Anthropic 最快的下一代模型。与 Claude 3 Haiku 相比，Claude 3.5 Haiku 在各项技能上都有所提升，并在许多智力基准测试中超越了上一代最大的模型 Claude 3 Opus。",displayName:"Claude 3.5 Haiku",enabled:!0,id:"claude-3-5-haiku-latest",maxOutput:8192,pricing:{cachedInput:.1,input:1,output:5,writeCacheInput:1.25},releasedAt:"2024-11-05",settings:{extendParams:["disableContextCaching"]},type:"chat"},{abilities:{functionCall:!0,vision:!0},contextWindowTokens:2e5,description:"Claude 3 Opus 是 Anthropic 用于处理高度复杂任务的最强大模型。它在性能、智能、流畅性和理解力方面表现卓越。",displayName:"Claude 3 Opus",enabled:!0,id:"claude-3-opus-20240229",maxOutput:4096,pricing:{input:15,output:75},releasedAt:"2024-02-29",type:"chat"},{abilities:{functionCall:!0,vision:!0},contextWindowTokens:2e5,description:"Claude 3 Haiku 是 Anthropic 的最快且最紧凑的模型，旨在实现近乎即时的响应。它具有快速且准确的定向性能。",displayName:"Claude 3 Haiku",id:"claude-3-haiku-20240307",maxOutput:4096,pricing:{input:.25,output:1.25},releasedAt:"2024-03-07",type:"chat"},{abilities:{vision:!0},contextWindowTokens:1048576,displayName:"Gemini 2.5 Pro Preview",enabled:!0,id:"gemini-2.5-pro-preview-03-25",maxOutput:8192,pricing:{cachedInput:.875,input:1.25,output:10},releasedAt:"2025-03-25",type:"chat"},{abilities:{imageOutput:!0,vision:!0},contextWindowTokens:32768,description:"Gemini 2.0 Flash 实验模型，支持图像生成",displayName:"Gemini 2.0 Flash (Image Generation) Experimental",enabled:!0,id:"gemini-2.0-flash-exp-image-generation",maxOutput:8192,pricing:{input:0,output:0},releasedAt:"2025-03-14",type:"chat"},{abilities:{functionCall:!0,vision:!0},contextWindowTokens:1056768,description:"Gemini 2.0 Flash 提供下一代功能和改进，包括卓越的速度、原生工具使用、多模态生成和1M令牌上下文窗口。",displayName:"Gemini 2.0 Flash",enabled:!0,id:"gemini-2.0-flash",maxOutput:8192,pricing:{cachedInput:.025,input:.1,output:.4},releasedAt:"2025-02-05",type:"chat"},{abilities:{functionCall:!0},contextWindowTokens:65536,description:"最新模型 DeepSeek-V3 多项评测成绩超越 Qwen2.5-72B 和 Llama-3.1-405B 等开源模型，性能对齐领军闭源模型 GPT-4o 与 Claude-3.5-Sonnet。",displayName:"DeepSeek V3",enabled:!0,id:"deepseek-chat",pricing:{cachedInput:.07,input:.28,output:1.1},releasedAt:"2024-12-26",type:"chat"},{abilities:{reasoning:!0},contextWindowTokens:65536,description:"DeepSeek 推出的推理模型。在输出最终回答之前，模型会先输出一段思维链内容，以提升最终答案的准确性。",displayName:"DeepSeek R1",enabled:!0,id:"deepseek-reasoner",pricing:{cachedInput:.14,input:.55,output:2.19},releasedAt:"2025-01-20",type:"chat"}],description:"LobeHub Cloud 通过官方部署的 API 来实现 AI 模型的调用，并采用 Credits 计算积分的方式来衡量 AI 模型的用量，对应大模型使用的 Tokens。",enabled:!0,id:"lobehub",modelsUrl:"https://lobehub.com/zh/docs/usage/subscription/model-pricing",name:"LobeHub",smoothing:{text:!0},url:"https://lobehub.com"};e.s(["default",0,r],770225);var n=e.i(352455),o=e.i(522571);e.s(["default",0,({locale:e="en",models:l,style:s,...c})=>{let d="en"===e,u=[{dataIndex:"displayName",key:"displayName",render:(e,a)=>(0,t.jsxs)(o.default,{children:[(0,t.jsx)(i.default,{model:a.id,size:24}),`${e} (${(0,n.formatTokenNumber)(a.contextWindowTokens)})`]}),title:d?"Modals":"模型",width:250},{align:"right",dataIndex:"pricing",key:"input",render:e=>(0,t.jsx)(o.default,{justify:"flex-end",tag:d?"Credits":"计算积分",children:(0,t.jsx)("span",{style:{fontWeight:500},children:(0,n.formatNumber)(e?.input)+"M"})}),title:(0,t.jsx)(o.default,{justify:"flex-end",tag:"1M Tokens",children:d?"Input":"输入"}),width:180},{align:"right",dataIndex:"pricing",key:"output",render:e=>(0,t.jsx)(o.default,{justify:"flex-end",tag:d?"Credits":"计算积分",children:(0,t.jsx)("span",{style:{fontWeight:500},children:(0,n.formatNumber)(e?.output)+"M"})}),title:(0,t.jsx)(o.default,{justify:"flex-end",tag:"1M Tokens",children:d?"Output":"输出"}),width:180}];return(0,t.jsx)(a.Table,{columns:u,dataSource:l??r.chatModels,pagination:!1,rowKey:"id",style:{width:"fit-content",...s},...c})}],52655)},262633,e=>{"use strict";var t=e.i(425444);e.s(["Brain",()=>t.default])},809584,e=>{"use strict";let t=(0,e.i(456420).default)("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);e.s(["Database",0,t],809584)},150285,e=>{"use strict";let t=(0,e.i(456420).default)("hard-drive",[["path",{d:"M10 16h.01",key:"1bzywj"}],["path",{d:"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"18tbho"}],["path",{d:"M21.946 12.013H2.054",key:"zqlbp7"}],["path",{d:"M6 16h.01",key:"1pmjb7"}]]);e.s(["HardDrive",0,t],150285)},328623,e=>{"use strict";var t=e.i(188873);e.s(["Sparkles",()=>t.default])},176699,e=>{"use strict";let t=(0,e.i(456420).default)("minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);e.s(["default",0,t])},420985,e=>{"use strict";let t=(0,e.i(456420).default)("life-buoy",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);e.s(["default",0,t])},520469,e=>{"use strict";var t=e.i(843476),i=e.i(450354),a=e.i(765812),r=e.i(208544),n=e.i(184283);let o=(0,e.i(456420).default)("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]);var l=e.i(271645);e.i(785269);var s=e.i(322831),c=e.i(953552),d=e.i(347782),u=e.i(892766);let p="LobeHub Cloud",m=(0,n.createStaticStyles)(({css:e,cssVar:t})=>({icon:e`
    transition: all 100ms ${t.motionEaseOut};
  `,itemTitle:e`
    .ant-collapse-title {
      flex: 1 !important;
    }
  `,title:e`
    margin-block-end: 0.5em;
    font-size: 32px;
    font-weight: bold;
    line-height: 1.2;
    ${n.responsive.sm} {
      font-size: 26px;
      text-align: center;
    }
  `})),f=(0,l.memo)(({mobile:e})=>{let{t:n}=(0,s.useTranslation)("subscription"),l=[{children:n("qa.list.whatIs.a"),key:"whatIs",label:n("qa.list.whatIs.q")},{children:n("qa.list.howToUse.a"),key:"howToUse",label:n("qa.list.howToUse.q")},{children:n("qa.list.cost.a",{cloud:p}),key:"cost",label:n("qa.list.cost.q")},{children:n("qa.list.credit.a",{cloud:p}),key:"credit",label:n("qa.list.credit.q",{cloud:p})},{children:n("qa.list.community.a"),key:"community",label:n("qa.list.community.q")},{children:n("qa.list.opensource.a"),key:"opensource",label:n("qa.list.opensource.q")}];return(0,t.jsxs)(r.Flexbox,{gap:32,horizontal:!e,paddingBlock:16,width:"100%",wrap:"wrap",children:[(0,t.jsxs)(r.Flexbox,{flex:1,gap:16,children:[(0,t.jsx)(c.default,{children:n("qa.title")}),(0,t.jsxs)(r.Flexbox,{gap:8,horizontal:!e,paddingBlock:24,children:[(0,t.jsx)(d.default,{href:(0,u.mailTo)(u.SUPPORT_MAIL),style:e?{flex:1}:{},target:"_blank",children:(0,t.jsx)(i.Button,{block:e,icon:o,size:"large",style:{minWidth:144},children:n("qa.support.email")})}),(0,t.jsx)(d.default,{href:u.DISCORD_URL,style:e?{flex:1}:{},target:"_blank",children:(0,t.jsx)(i.Button,{block:e,size:"large",style:{minWidth:144},children:n("qa.support.community")})})]})]}),(0,t.jsx)(r.Flexbox,{flex:2,children:(0,t.jsx)(a.Collapse,{accordion:!0,className:m.itemTitle,expandIconPlacement:"end",gap:12,items:l,variant:"outlined"})})]})});e.s(["default",0,f],520469)}]);