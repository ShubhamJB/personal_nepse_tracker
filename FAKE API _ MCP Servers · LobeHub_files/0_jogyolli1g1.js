(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,591479,e=>{"use strict";var t=e.i(206868),r=e.i(58125),o=e.i(184283),l=e.i(225913);let n=(0,o.createStaticStyles)(({css:e,cssVar:t})=>({borderless:r.staticStylish.variantBorderlessWithoutHover,clickableBorderless:r.staticStylish.variantBorderless,clickableFilled:r.staticStylish.variantFilled,clickableOutlined:r.staticStylish.variantOutlined,clickableRoot:e`
      cursor: pointer;
    `,filled:r.staticStylish.variantFilledWithoutHover,glass:r.staticStylish.blur,outlined:r.staticStylish.variantOutlinedWithoutHover,root:e`
      position: relative;
      border-radius: ${t.borderRadius};
    `,shadow:r.staticStylish.shadow})),a=(0,l.cva)(n.root,{compoundVariants:[{class:n.clickableBorderless,clickable:!0,variant:"borderless"},{class:n.clickableFilled,clickable:!0,variant:"filled"},{class:n.clickableOutlined,clickable:!0,variant:"outlined"}],defaultVariants:{clickable:!1,glass:!1,shadow:!1,variant:"filled"},variants:{variant:{filled:n.filled,outlined:n.outlined,borderless:n.borderless},clickable:{false:null,true:n.clickableRoot},glass:{false:null,true:n.glass},shadow:{false:null,true:n.shadow}}});var i=e.i(843476);let s=({className:e,variant:r="filled",shadow:l,glass:n,children:s,clickable:c,ref:u,...d})=>(0,i.jsx)(t.default,{className:(0,o.cx)(a({clickable:c,glass:n,shadow:l,variant:r}),e),ref:u,...d,children:s});s.displayName="Block",e.s(["default",0,s],591479)},123243,e=>{"use strict";var t=e.i(758188);e.s(["Center",()=>t.default])},206868,e=>{"use strict";let t=(e,t)=>{if(t)return"row";switch(e){case"horizontal":return"row";case"horizontal-reverse":return"row-reverse";case"vertical":default:return"column";case"vertical-reverse":return"column-reverse"}},r=e=>"number"==typeof e?`${e}px`:e;var o=e.i(271645),l=e.i(843476),n=(0,o.memo)(({visible:e,flex:o,gap:n,direction:a,horizontal:i,align:s,justify:c,distribution:u,height:d,width:f,allowShrink:p,padding:b,paddingInline:h,paddingBlock:g,prefixCls:m,as:v="div",className:y,style:_,children:k,wrap:w,ref:x,...S})=>{let C=c||u,O="row"===t(a,i)&&!f&&(e=>{if(e)return["space-between","space-around","space-evenly"].includes(e)})(C)?"100%":r(f),T={...void 0!==o?{"--lobe-flex":String(o)}:{},...a||i?{"--lobe-flex-direction":t(a,i)}:{},...void 0!==w?{"--lobe-flex-wrap":w}:{},...void 0!==C?{"--lobe-flex-justify":C}:{},...void 0!==s?{"--lobe-flex-align":s}:{},...void 0!==O?{"--lobe-flex-width":O}:{},...void 0!==d?{"--lobe-flex-height":r(d)}:{},...void 0!==b?{"--lobe-flex-padding":r(b)}:{},...void 0!==h?{"--lobe-flex-padding-inline":r(h)}:{},...void 0!==g?{"--lobe-flex-padding-block":r(g)}:{},...void 0!==n?{"--lobe-flex-gap":r(n)}:{},...p?{minWidth:0}:{},..._},$="lobe-flex",E=[$,!1===e?`${$}--hidden`:void 0,m?`${m}-flex`:void 0,y].filter(Boolean).join(" ");return(0,l.jsx)(v,{ref:x,...S,className:E,style:T,children:k})});e.s(["default",0,n],206868)},58125,e=>{"use strict";var t=e.i(184283);let r=t.keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`,o=(0,t.createStaticStyles)(({css:e,cssVar:t})=>({active:e`
    color: ${t.colorText};
    background: ${t.colorFillSecondary};

    &:hover {
      color: ${t.colorText};
      background: ${t.colorFill};
    }
  `,blur:e`
    backdrop-filter: saturate(150%) blur(10px);
  `,blurStrong:e`
    backdrop-filter: saturate(150%) blur(36px);
  `,bottomScrollbar:e`
    ::-webkit-scrollbar {
      width: 0;
      height: 4px;
      background-color: transparent;

      &-thumb {
        border-radius: 4px;
        background-color: ${t.colorFill};
        transition: background-color 500ms ${t.motionEaseOut};
      }

      &-corner {
        display: none;
        width: 0;
        height: 0;
      }
    }
  `,disabled:e`
    cursor: not-allowed;
    opacity: 0.5;
  `,gradientAnimation:e`
    border-radius: inherit;
    background-image: linear-gradient(
      -45deg,
      ${t.gold},
      ${t.magenta},
      ${t.geekblue},
      ${t.cyan}
    );
    background-size: 400% 400%;
    animation: 5s ${r} 5s ease infinite;
  `,noScrollbar:e`
    ::-webkit-scrollbar {
      display: none;
      width: 0;
      height: 0;
      background-color: transparent;
    }
  `,resetLinkColor:e`
    cursor: pointer;
    color: ${t.colorTextSecondary};

    &:hover {
      color: ${t.colorText};
    }
  `,shadow:e`
    box-shadow:
      0 1px 0 -1px ${t.colorBorder},
      0 1px 2px -0.5px ${t.colorBorder},
      0 2px 2px -1px ${t.colorBorderSecondary},
      0 3px 6px -4px ${t.colorBorderSecondary};
  `,variantBorderless:e`
    border: none;
    background: none;
    box-shadow: none;

    &:hover {
      background: ${t.colorFillTertiary};
    }
  `,variantBorderlessDanger:e`
    border: none;
    background: none;
    box-shadow: none;

    &:hover {
      background: ${t.colorErrorBg};
      box-shadow: inset 0 0 0 1px ${t.colorErrorBg};
    }
  `,variantBorderlessWithoutHover:e`
    border: none;
    background: none;
    box-shadow: none;
  `,variantFilled:e`
    background: ${t.colorFillTertiary};

    &:hover {
      background: ${t.colorFillSecondary};
    }
  `,variantFilledDanger:e`
    background: ${t.colorErrorBg};

    &:hover {
      background: ${t.colorErrorBgHover};
    }
  `,variantFilledWithoutHover:e`
    background: ${t.colorFillTertiary};
  `,variantOutlined:e`
    border: 1px solid ${t.colorBorderSecondary};
    background: ${t.colorBgContainer};

    &:hover {
      border: 1px solid ${t.colorBorder};
      background: ${t.colorBgContainer};
    }
  `,variantOutlinedDanger:e`
    border: 1px solid ${t.colorErrorBorder};

    &:hover {
      border: 1px solid ${t.colorErrorBorder};
    }
  `,variantOutlinedWithoutHover:e`
    border: 1px solid ${t.colorBorderSecondary};
    background: ${t.colorBgContainer};
  `}));e.s(["staticStylish",0,o])},342919,237582,e=>{"use strict";e.s(["getTag",0,function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}],342919),e.s(["isObjectLike",0,function(e){return"object"==typeof e&&null!==e}],237582)},396661,e=>{"use strict";e.s(["mergeClasses",0,(...e)=>e.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim()])},871987,388973,e=>{"use strict";e.s(["default",0,{xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}],871987),e.s(["hasA11yProp",0,e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1}],388973)},505014,e=>{"use strict";var t=e.i(271645),r=e.i(871987),o=e.i(388973),l=e.i(396661);let n=(0,t.createContext)({}),a=(0,t.forwardRef)(({color:e,size:a,strokeWidth:i,absoluteStrokeWidth:s,className:c="",children:u,iconNode:d,...f},p)=>{let{size:b=24,strokeWidth:h=2,absoluteStrokeWidth:g=!1,color:m="currentColor",className:v=""}=(0,t.useContext)(n)??{},y=s??g?24*Number(i??h)/Number(a??b):i??h;return(0,t.createElement)("svg",{ref:p,...r.default,width:a??b??r.default.width,height:a??b??r.default.height,stroke:e??m,strokeWidth:y,className:(0,l.mergeClasses)("lucide",v,c),...!u&&!(0,o.hasA11yProp)(f)&&{"aria-hidden":"true"},...f},[...d.map(([e,r])=>(0,t.createElement)(e,r)),...Array.isArray(u)?u:[u]])});e.s(["default",0,a],505014)},492435,876841,128850,e=>{"use strict";var t=e.i(271645),r=e.i(843476);let o=(0,t.createContext)({}),l=(0,t.memo)(({children:e,config:t={}})=>(0,r.jsx)(o,{value:t,children:e})),n=()=>(0,t.use)(o);e.s(["IconProvider",0,l,"useIconContext",0,n],876841);var a=e.i(342919),i=e.i(237582);function s(e){return"number"==typeof e||(0,i.isObjectLike)(e)&&"[object Number]"===(0,a.getTag)(e)}e.s(["isNumber",0,s],128850);var c=e.i(184283),u=e.i(225913);let d=c.keyframes`
  0% {
    rotate: 0deg;
  }
  100% {
    rotate: 360deg;
  }
`,f=(0,u.cva)("anticon",{defaultVariants:{spin:!1},variants:{spin:{false:null,true:(0,c.createStaticStyles)(({css:e})=>({spin:e`
      animation: ${d} 1s linear infinite;
    `})).spin}}}),p=(0,t.memo)(({icon:e,size:o,color:l,fill:a="transparent",className:i,focusable:u,spin:d,fillRule:p,fillOpacity:b,ref:h,...g})=>{let{color:m,fill:v,fillOpacity:y,fillRule:_,focusable:k,className:w,size:x,...S}=n(),{size:C,strokeWidth:O}=(0,t.useMemo)(()=>(e=>{let t,r;if(s(e))return{size:e};switch(e){case"large":t=24,r=2;break;case"middle":t=20,r=2;break;case"small":t=14,r=2;break;default:e?(t=e?.size||24,r=e?.strokeWidth||2):(t="1em",r=2)}return{size:t,strokeWidth:r}})(o||x),[o,x]);return(0,r.jsx)("span",{className:(0,c.cx)(f({spin:d}),w,i),role:"img",...S,...g,children:e&&((0,t.isValidElement)(e)?e:(0,r.jsx)(e,{color:l||m,fill:a||v,fillOpacity:b||y,fillRule:p||_,focusable:u||k,height:C,ref:h,size:C,strokeWidth:O,width:C}))})});p.displayName="Icon",e.s(["default",0,p],492435)},456420,e=>{"use strict";var t=e.i(271645),r=e.i(396661);let o=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)};var l=e.i(505014);e.s(["default",0,(e,n)=>{let a=(0,t.forwardRef)(({className:a,...i},s)=>(0,t.createElement)(l.default,{ref:s,iconNode:n,className:(0,r.mergeClasses)(`lucide-${o(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,a),...i}));return a.displayName=o(e),a}],456420)},755838,(e,t,r)=>{"use strict";var o=e.r(271645),l="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},n=o.useState,a=o.useEffect,i=o.useLayoutEffect,s=o.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!l(e,r)}catch(e){return!0}}var u="u"<typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),o=n({inst:{value:r,getSnapshot:t}}),l=o[0].inst,u=o[1];return i(function(){l.value=r,l.getSnapshot=t,c(l)&&u({inst:l})},[e,r,t]),a(function(){return c(l)&&u({inst:l}),e(function(){c(l)&&u({inst:l})})},[e]),s(r),r};r.useSyncExternalStore=void 0!==o.useSyncExternalStore?o.useSyncExternalStore:u},802239,(e,t,r)=>{"use strict";t.exports=e.r(755838)},758188,e=>{"use strict";var t=e.i(206868),r=e.i(843476);e.s(["default",0,({children:e,ref:o,...l})=>(0,r.jsx)(t.default,{...l,align:"center",justify:"center",ref:o,children:e})])},208544,e=>{"use strict";var t=e.i(206868);e.s(["Flexbox",()=>t.default])},732176,364895,e=>{"use strict";let t=(0,e.i(456420).default)("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);e.s(["default",0,t],364895),e.s(["ArrowRightIcon",0,t],732176)},752822,(e,t,r)=>{"use strict";var o=e.r(271645),l=e.r(802239),n="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=l.useSyncExternalStore,i=o.useRef,s=o.useEffect,c=o.useMemo,u=o.useDebugValue;r.useSyncExternalStoreWithSelector=function(e,t,r,o,l){var d=i(null);if(null===d.current){var f={hasValue:!1,value:null};d.current=f}else f=d.current;var p=a(e,(d=c(function(){function e(e){if(!s){if(s=!0,a=e,e=o(e),void 0!==l&&f.hasValue){var t=f.value;if(l(t,e))return i=t}return i=e}if(t=i,n(a,e))return t;var r=o(e);return void 0!==l&&l(t,r)?(a=e,t):(a=e,i=r)}var a,i,s=!1,c=void 0===r?null:r;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]},[t,r,o,l]))[0],d[1]);return s(function(){f.hasValue=!0,f.value=p},[p]),u(p),p}},430224,(e,t,r)=>{"use strict";t.exports=e.r(752822)},346554,e=>{"use strict";var t=e.i(271645);function r(e,t){if("function"==typeof e)return e(t);e&&(e.current=t)}var o=parseInt(t.version.split(".")[0],10)>=19?function(e){return t=>{let o=[];for(let l of e){let e=r(l,t),n="function"==typeof e;o.push(n?e:()=>r(l,null))}return()=>{for(let e of o)e()}}}:function(e){return t=>{for(let o of e)r(o,t)}};e.s(["mergeRefs",0,o,"useMergeRefs",0,function(e){return(0,t.useMemo)(()=>o(e),e)}])},660655,e=>{"use strict";var t=e.i(456420);e.s(["createLucideIcon",()=>t.default])},867772,358729,e=>{"use strict";var t=e.i(456420);let r=(0,t.default)("arrow-up",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);e.s(["ArrowUpIcon",0,r],867772);let o=(0,t.default)("chevron-up",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);e.s(["ChevronUpIcon",0,o],358729)},302573,e=>{"use strict";var t=e.i(271645),r=e.i(752533),o=e.i(184283),l=e.i(225913);let n=(0,o.createStaticStyles)(({css:e,cssVar:t})=>({code:e`
    font-family: ${t.fontFamilyCode};
  `,danger:e`
    color: ${t.colorError};
  `,delete:e`
    text-decoration: line-through;
  `,disabled:e`
    cursor: not-allowed;
    color: ${t.colorTextDisabled};
  `,ellipsis:e`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,ellipsisMulti:e`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
  `,h1:e`
    font-size: calc(${t.fontSize} * 2.5);
    font-weight: bold;
    line-height: 1.25;
  `,h2:e`
    font-size: calc(${t.fontSize} * 2);
    font-weight: bold;
    line-height: 1.25;
  `,h3:e`
    font-size: calc(${t.fontSize} * 1.5);
    font-weight: bold;
    line-height: 1.25;
  `,h4:e`
    font-size: calc(${t.fontSize} * 1.25);
    font-weight: bold;
    line-height: 1.25;
  `,h5:e`
    font-size: ${t.fontSize};
    font-weight: bold;
    line-height: 1.25;
  `,info:e`
    color: ${t.colorInfo};
  `,italic:e`
    font-style: italic;
  `,mark:e`
    color: #000;
    background-color: ${t.yellow};
  `,p:e`
    margin-block: 0;
  `,secondary:e`
    color: ${t.colorTextDescription};
  `,strong:e`
    font-weight: bold;
  `,success:e`
    color: ${t.colorSuccess};
  `,text:e`
    color: ${t.colorText};
  `,underline:e`
    text-decoration: underline;
  `,warning:e`
    color: ${t.colorWarning};
  `})),a=(0,l.cva)(n.text,{defaultVariants:{},variants:{as:{h1:n.h1,h2:n.h2,h3:n.h3,h4:n.h4,h5:n.h5,p:n.p},code:{true:n.code},delete:{true:n.delete},disabled:{true:n.disabled},ellipsis:{multi:n.ellipsisMulti,true:n.ellipsis},italic:{true:n.italic},mark:{true:n.mark},strong:{true:n.strong},type:{danger:n.danger,info:n.info,secondary:n.secondary,success:n.success,warning:n.warning},underline:{true:n.underline}}});var i=e.i(843476);let s=({as:e="div",align:l,className:n,children:s,style:c,type:u,disabled:d,strong:f,italic:p,underline:b,delete:h,fontSize:g,lineClamp:m,lineHeight:v,mark:y,code:_,color:k,weight:w,ellipsis:x,noWrap:S,textDecoration:C,textTransform:O,whiteSpace:T,wordBreak:$,...E})=>{let j=(0,t.useRef)(null),P=((e,r,o)=>{let[l,n]=(0,t.useState)(!1),a="object"==typeof r&&r.tooltipWhenOverflow;return(0,t.useEffect)(()=>{if(!a)return;let t=()=>{let t=e.current;if(!t)return;let o="object"==typeof r?r.rows:void 0;o&&o>1?n(t.scrollHeight>t.clientHeight):n(t.scrollWidth>t.clientWidth)};t();let o=new ResizeObserver(t);return e.current&&o.observe(e.current),()=>o.disconnect()},[a,r,o,e]),l})(j,x,s),R="object"==typeof x&&!!x.rows&&x.rows>1,F="object"==typeof x&&x.tooltipWhenOverflow,L=(0,i.jsx)(e,{ref:j,style:{...k&&{color:k},...w&&{fontWeight:w},...v&&{lineHeight:v},...O&&{textTransform:O},...C&&{textDecoration:C},...$&&{wordBreak:$},..."object"==typeof x&&x.rows&&{WebkitLineClamp:x.rows},...!x&&!!m&&{WebkitBoxOrient:"vertical",WebkitLineClamp:m,display:"-webkit-box",overflow:"hidden",textOverflow:"ellipsis"},...g&&{fontSize:g},...l&&{textAlign:l},...!R&&S&&{whiteSpace:"nowrap"},...T&&{whiteSpace:T},...c},className:(0,o.cx)(a({as:["h1","h2","h3","h4","h5","p"].includes(e)?e:void 0,code:_,delete:h,disabled:d,ellipsis:x?"object"!=typeof x||!x.rows||"multi":void 0,italic:p,mark:y,strong:f,type:u,underline:b}),n),...E,children:s});if(x&&"object"==typeof x&&(x.tooltip||x.tooltipWhenOverflow)){if(F&&!P)return L;let e="string"==typeof x.tooltip?x.tooltip:s;return x.tooltip&&"object"==typeof x.tooltip?(0,i.jsx)(r.default,{...x.tooltip,title:x.tooltip?.title||e,children:L}):(0,i.jsx)(r.default,{title:e,children:L})}return L};s.displayName="Text",e.s(["default",0,s],302573)},128709,e=>{"use strict";var t=e.i(302573);e.s(["Text",()=>t.default])},943243,e=>{"use strict";var t=e.i(591479);e.s(["Block",()=>t.default])},498660,e=>{"use strict";e.s(["isDev",0,!1,"isOnServerSide",0,!1])},892766,889515,e=>{"use strict";var t=e.i(552503);let r="landing",o={about:"about",blog:"blog",blogPost:"blog_post",changelog:"changelog",codingAgents:"coding_agents",creator:"creator",discover:"discover",discoverAgentDetail:"discover_agent_detail",discoverMcpDetail:"discover_mcp_detail",discoverSkillsDetail:"discover_skills_detail",docs:"docs",downloads:"downloads",globalFooter:"global_footer",globalHeader:"global_header",homeHero:"home_hero",homeOverview:"home_overview",icons:"icons",imIntegration:"im_integration",llmContext:"llm_context",pages:"pages",pricing:"pricing",resources:"resources",siteRedirect:"site_redirect",task:"task"},l={blogMdxAppLink:"blog_mdx_app_link",callbackFooterAbout:"callback_footer_about",callbackFooterBlog:"callback_footer_blog",callbackFooterChangelog:"callback_footer_changelog",callbackFooterCodingAgents:"callback_footer_coding_agents",callbackFooterDiscord:"callback_footer_discord",callbackFooterDiscover:"callback_footer_discover",callbackFooterDownloads:"callback_footer_downloads",callbackFooterIcons:"callback_footer_icons",callbackFooterImessage:"callback_footer_imessage",callbackFooterPages:"callback_footer_pages",callbackFooterPricing:"callback_footer_pricing",callbackFooterResources:"callback_footer_resources",callbackFooterSlack:"callback_footer_slack",callbackFooterTask:"callback_footer_task",callbackFooterTelegram:"callback_footer_telegram",chatPathRedirect:"chat_path_redirect",creatorInspiration:"creator_inspiration",discoverAgentAuthor:"discover_agent_author",discoverFloatCTA:"discover_float_cta",discoverInstallAgent:"discover_install_agent",discoverInstallMcp:"discover_install_mcp",discoverReadmeMdx:"discover_readme_mdx",docsCloudAlert:"docs_cloud_alert",featureOverviewGetStarted:"feature_overview_get_started",footerCTA:"footer_cta",globalFooterCTA:"global_footer_cta",headerGetStarted:"header_get_started",headerNavPlatformWeb:"header_nav_platform_web",heroGetStarted:"hero_get_started",iconsFloatCTA:"icons_float_cta",pricingFreeStart:"pricing_free_start",pricingStart:"pricing_start",skillsTryInLobeHub:"skills_try_in_lobehub"},n={utmContent:l.heroGetStarted,utmMedium:o.homeHero},a={about:{utmContent:l.callbackFooterAbout,utmMedium:o.about},blog:{utmContent:l.callbackFooterBlog,utmMedium:o.blog},changelog:{utmContent:l.callbackFooterChangelog,utmMedium:o.changelog},codingAgents:{utmContent:l.callbackFooterCodingAgents,utmMedium:o.codingAgents},discord:{utmContent:l.callbackFooterDiscord,utmMedium:o.imIntegration},discover:{utmContent:l.callbackFooterDiscover,utmMedium:o.discover},downloads:{utmContent:l.callbackFooterDownloads,utmMedium:o.downloads},icons:{utmContent:l.callbackFooterIcons,utmMedium:o.icons},imessage:{utmContent:l.callbackFooterImessage,utmMedium:o.imIntegration},pages:{utmContent:l.callbackFooterPages,utmMedium:o.pages},pricing:{utmContent:l.callbackFooterPricing,utmMedium:o.pricing},resources:{utmContent:l.callbackFooterResources,utmMedium:o.resources},slack:{utmContent:l.callbackFooterSlack,utmMedium:o.imIntegration},task:{utmContent:l.callbackFooterTask,utmMedium:o.task},telegram:{utmContent:l.callbackFooterTelegram,utmMedium:o.imIntegration}};e.s(["CALLBACK_FOOTER_CLOUD_UTM",0,a,"HOME_LANDING_HERO_CLOUD_CTA",0,n,"UTM_CONTENT",0,l,"UTM_MEDIUM",0,o,"UTM_SOURCE",0,r,"UTM_SOURCE_BLOG",0,"blog"],889515);let i=e.i(498660).isDev?"http://localhost:3009":"https://lobehub.com",s="https://github.com/lobehub/lobehub";(0,t.default)(s,"issues/new/choose"),(0,t.default)(s,"discussions");let c=(0,t.default)(s,"issues/new"),u=(0,t.default)(s,"tree/main/docs");e.s(["BASE_MAIL",0,"hello@lobehub.com","BASE_URL",0,i,"DISCORD_URL",0,"https://discord.gg/AYFPHvv2jT","DOCS_GITHUB_URL",0,u,"DOCS_ISSUES_URL",0,c,"DOCS_WITH_HOLOCRON",0,"https://holocron.so/github/pr/lobehub/lobehub/main/editor","GITHUB_CONTRIBUTORS_APIS",0,["https://api.github.com/repos/lobehub/lobehub/contributors","https://api.github.com/repos/lobehub/sd-webui-lobe-theme/contributors","https://api.github.com/repos/lobehub/lobe-ui/contributors","https://api.github.com/repos/lobehub/lobe-chat-plugins/contributors","https://api.github.com/repos/lobehub/lobe-chat-agents/contributors"],"GITHUB_URL",0,s,"LOBE_APP_HOST",0,"app.lobehub.com","LOBE_CHAT_URL",0,"https://app.lobehub.com","LOBE_ICONS_REPO_URL",0,"https://github.com/lobehub/lobe-icons","OPEN_COLLECTIVE_URL",0,"https://opencollective.com/lobehub/members/all.json","REDDIT_URL",0,"https://www.reddit.com/r/lobehub","STATUS_URL",0,"https://status.lobehub.com","SUPPORT_MAIL",0,"support@lobehub.com","X_URL",0,"https://x.com/lobehub","YOUTUBE_URL",0,"https://www.youtube.com/@lobehub","getHubApacPublicUrl",0,e=>(0,t.default)("https://hub-apac-1.lobeobjects.space",e.replace(/^\/+/,"")),"getR2Url",0,e=>(0,t.default)("https://hub-apac-1.lobeobjects.space/landing/",e),"mailTo",0,e=>`mailto:${e}`,"urlWithUTM",0,(e,t)=>{let o=new URL(e);return o.searchParams.set("utm_source",t.utmSource||r),t.utmContent&&o.searchParams.set("utm_content",t.utmContent),t.utmMedium&&o.searchParams.set("utm_medium",t.utmMedium),t.utmTerm&&o.searchParams.set("utm_term",t.utmTerm),t.utmCampaign&&o.searchParams.set("utm_campaign",t.utmCampaign),o.toString()}],892766)},233525,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return o}});let o=e=>{}},998183,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={assign:function(){return s},searchParamsToUrlQuery:function(){return n},urlQueryToSearchParams:function(){return i}};for(var l in o)Object.defineProperty(r,l,{enumerable:!0,get:o[l]});function n(e){let t={};for(let[r,o]of e.entries()){let e=t[r];void 0===e?t[r]=o:Array.isArray(e)?e.push(o):t[r]=[e,o]}return t}function a(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function i(e){let t=new URLSearchParams;for(let[r,o]of Object.entries(e))if(Array.isArray(o))for(let e of o)t.append(r,a(e));else t.set(r,a(o));return t}function s(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,o]of r.entries())e.append(t,o)}return e}},718967,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={DecodeError:function(){return m},MiddlewareNotFoundError:function(){return k},MissingStaticPage:function(){return _},NormalizeError:function(){return v},PageNotFoundError:function(){return y},SP:function(){return h},ST:function(){return g},WEB_VITALS:function(){return n},execOnce:function(){return a},getDisplayName:function(){return d},getLocationOrigin:function(){return c},getURL:function(){return u},isAbsoluteUrl:function(){return s},isResSent:function(){return f},loadGetInitialProps:function(){return b},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return w}};for(var l in o)Object.defineProperty(r,l,{enumerable:!0,get:o[l]});let n=["CLS","FCP","FID","INP","LCP","TTFB"];function a(e){let t,r=!1;return(...o)=>(r||(r=!0,t=e(...o)),t)}let i=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,s=e=>i.test(e);function c(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function u(){let{href:e}=window.location,t=c();return e.substring(t.length)}function d(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function b(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await b(t.Component,t.ctx)}:{};let o=await e.getInitialProps(t);if(r&&f(r))return o;if(!o)throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${o}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return o}let h="u">typeof performance,g=h&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class m extends Error{}class v extends Error{}class y extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class _ extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class k extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function w(e){return JSON.stringify({message:e.message,stack:e.stack})}},818581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return l}});let o=e.r(271645);function l(e,t){let r=(0,o.useRef)(null),l=(0,o.useRef)(null);return(0,o.useCallback)(o=>{if(null===o){let e=r.current;e&&(r.current=null,e());let t=l.current;t&&(l.current=null,t())}else e&&(r.current=n(e,o)),t&&(l.current=n(t,o))},[e,t])}function n(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},195057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={formatUrl:function(){return i},formatWithValidation:function(){return c},urlObjectKeys:function(){return s}};for(var l in o)Object.defineProperty(r,l,{enumerable:!0,get:o[l]});let n=e.r(190809)._(e.r(998183)),a=/https?|ftp|gopher|file/;function i(e){let{auth:t,hostname:r}=e,o=e.protocol||"",l=e.pathname||"",i=e.hash||"",s=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(c+=":"+e.port)),s&&"object"==typeof s&&(s=String(n.urlQueryToSearchParams(s)));let u=e.search||s&&`?${s}`||"";return o&&!o.endsWith(":")&&(o+=":"),e.slashes||(!o||a.test(o))&&!1!==c?(c="//"+(c||""),l&&"/"!==l[0]&&(l="/"+l)):c||(c=""),i&&"#"!==i[0]&&(i="#"+i),u&&"?"!==u[0]&&(u="?"+u),l=l.replace(/[?#]/g,encodeURIComponent),u=u.replace("#","%23"),`${o}${c}${l}${u}${i}`}let s=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return i(e)}},573668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return n}});let o=e.r(718967),l=e.r(652817);function n(e){if(!(0,o.isAbsoluteUrl)(e))return!0;try{let t=(0,o.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,l.hasBasePath)(r.pathname)}catch(e){return!1}}},284508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return o}});let o=e=>{}},522016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var o={default:function(){return m},useLinkStatus:function(){return y}};for(var l in o)Object.defineProperty(r,l,{enumerable:!0,get:o[l]});let n=e.r(190809),a=e.r(843476),i=n._(e.r(271645)),s=e.r(195057),c=e.r(8372),u=e.r(818581),d=e.r(718967),f=e.r(405550);e.r(233525);let p=e.r(388540),b=e.r(91949),h=e.r(573668),g=e.r(509396);function m(t){var r,o;let l,n,m,[y,_]=(0,i.useOptimistic)(b.IDLE_LINK_STATUS),k=(0,i.useRef)(null),{href:w,as:x,children:S,prefetch:C=null,passHref:O,replace:T,shallow:$,scroll:E,onClick:j,onMouseEnter:P,onTouchStart:R,legacyBehavior:F=!1,onNavigate:L,transitionTypes:M,ref:A,unstable_dynamicOnHover:U,...B}=t;l=S,F&&("string"==typeof l||"number"==typeof l)&&(l=(0,a.jsx)("a",{children:l}));let I=i.default.useContext(c.AppRouterContext),N=!1!==C,D=!1!==C?null===(o=C)||"auto"===o?g.FetchStrategy.PPR:g.FetchStrategy.Full:g.FetchStrategy.PPR,z="string"==typeof(r=x||w)?r:(0,s.formatUrl)(r);if(F){if(l?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});n=i.default.Children.only(l)}let W=F?n&&"object"==typeof n&&n.ref:A,H=i.default.useCallback(e=>(null!==I&&(k.current=(0,b.mountLinkInstance)(e,z,I,D,N,_)),()=>{k.current&&((0,b.unmountLinkForCurrentNavigation)(k.current),k.current=null),(0,b.unmountPrefetchableInstance)(e)}),[N,z,I,D,_]),V={ref:(0,u.useMergedRef)(H,W),onClick(t){F||"function"!=typeof j||j(t),F&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(t),!I||t.defaultPrevented||function(t,r,o,l,n,a,s){if("u">typeof window){let c,{nodeName:u}=t.currentTarget;if("A"===u.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,h.isLocalURL)(r)){l&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),a){let e=!1;if(a({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:d}=e.r(699781);i.default.startTransition(()=>{d(r,l?"replace":"push",!1===n?p.ScrollBehavior.NoScroll:p.ScrollBehavior.Default,o.current,s)})}}(t,z,k,T,E,L,M)},onMouseEnter(e){F||"function"!=typeof P||P(e),F&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),I&&N&&(0,b.onNavigationIntent)(e.currentTarget,!0===U)},onTouchStart:function(e){F||"function"!=typeof R||R(e),F&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),I&&N&&(0,b.onNavigationIntent)(e.currentTarget,!0===U)}};return(0,d.isAbsoluteUrl)(z)?V.href=z:F&&!O&&("a"!==n.type||"href"in n.props)||(V.href=(0,f.addBasePath)(z)),m=F?i.default.cloneElement(n,V):(0,a.jsx)("a",{...B,...V,children:l}),(0,a.jsx)(v.Provider,{value:y,children:m})}e.r(284508);let v=(0,i.createContext)(b.IDLE_LINK_STATUS),y=()=>(0,i.useContext)(v);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},552503,e=>{"use strict";e.s(["default",0,function(){var e;return e="object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments),function(e){var t=[];if(0===e.length)return"";if("string"!=typeof e[0])throw TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var r=e.shift();e[0]=r+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var o=0;o<e.length;o++){var l=e[o];if("string"!=typeof l)throw TypeError("Url must be a string. Received "+l);""!==l&&(o>0&&(l=l.replace(/^[\/]+/,"")),l=o<e.length-1?l.replace(/[\/]+$/,""):l.replace(/[\/]+$/,"/"),t.push(l))}var n=t.join("/"),a=(n=n.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return a.shift()+(a.length>0?"?":"")+a.join("&")}(e)}])},758379,e=>{"use strict";let t=(0,e.i(456420).default)("loader-circle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);e.s(["default",0,t])},920228,e=>{"use strict";let t=e.i(334596).default;e.s(["default",0,t])},534281,e=>{"use strict";var t=e.i(758379);e.s(["Loader2Icon",()=>t.default])},464571,e=>{"use strict";var t=e.i(920228);e.s(["Button",()=>t.default])},177025,e=>{"use strict";var t=e.i(492435),r=e.i(58125),o=e.i(184283),l=e.i(225913);let n=(0,o.createStaticStyles)(({css:e,cssVar:t})=>({glass:r.staticStylish.blur,root:e`
      &[class*='ant-btn'] {
        > [class*='ant-btn-icon'] {
          display: flex;
        }
      }
    `,shadow:e`
      box-shadow: ${t.boxShadowTertiary} !important;
    `})),a=(0,l.cva)(n.root,{defaultVariants:{glass:!1,shadow:!1},variants:{glass:{false:null,true:n.glass},shadow:{false:null,true:n.shadow}}});var i=e.i(271645),s=e.i(843476),c=e.i(464571),u=e.i(639007),d=e.i(534281);e.s(["default",0,({icon:e,variant:r,glass:l,shadow:n,loading:f,className:p,type:b,color:h,danger:g,children:m,iconProps:v,ref:y,..._})=>{let{isDarkMode:k}=(0,u.useThemeMode)(),w=b?void 0:r||(k?"filled":"outlined");return(0,s.jsx)(c.Button,{color:h||("filled"===w?"default":void 0),danger:g,ref:y,type:b,variant:w,className:(0,o.cx)(a({glass:l,shadow:n}),p),icon:e&&((0,i.isValidElement)(e)?e:(0,s.jsx)(t.default,{icon:e,...v,size:v?.size||{size:"1.2em"}})),loading:!!f&&{icon:(0,s.jsx)(t.default,{icon:d.Loader2Icon,...v,spin:!0,size:v?.size||{size:"1.2em"}})},..._,children:m})}],177025)},450354,e=>{"use strict";var t=e.i(177025);e.s(["Button",()=>t.default])}]);