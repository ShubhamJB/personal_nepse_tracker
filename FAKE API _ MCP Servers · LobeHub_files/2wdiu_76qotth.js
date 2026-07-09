(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,765812,e=>{"use strict";var t=e.i(126021);e.s(["Collapse",()=>t.default])},986253,e=>{"use strict";let t=(0,e.i(456420).default)("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);e.s(["default",0,t])},867927,e=>{"use strict";var t=e.i(986253);e.s(["ChevronRight",()=>t.default])},125950,e=>{"use strict";var t=e.i(913469),a=e.i(216795),i=e.i(956283),r=e.i(836877),l=e.i(192459),o=e.i(244964),n=e.i(575881),s=e.i(830341),d=e.i(271645),c=e.i(843476),u=e.i(184283),p=e.i(558860);let g=({children:e,disableDestroyOnInvalidTrigger:g=!1,disableZeroOriginGuard:m=!1,layoutAnimation:y=!1,popupContainer:h,...x})=>{let[{handle:b,key:M},f]=(0,d.useState)(()=>({handle:p.Tooltip.createHandle(),key:0})),j=(0,d.useRef)(null),v=(0,d.useCallback)(()=>{j.current=null,f(({key:e})=>({handle:p.Tooltip.createHandle(),key:e+1}))},[]),k=(0,d.useCallback)(e=>{j.current?.onOpenChange?.(e)},[]),w=(0,i.useAppElement)(),N=(0,a.useFloatingLayer)()??w;return(0,s.useDestroyOnInvalidActiveTriggerElement)(b.store,v,{enabled:!g}),(0,s.useHidePopupWhenPositionerAtOrigin)(b.store,{enabled:!m}),(0,c.jsx)(t.TooltipGroupHandleContext,{value:b,children:(0,c.jsxs)(t.TooltipGroupPropsContext,{value:x,children:[e,(0,c.jsx)(p.Tooltip.Root,{handle:b,onOpenChange:k,children:({payload:e})=>{let t=e??null;if(j.current=t,!t||null==t.title&&!t.hotkey)return null;let a=t.arrow??!1,i=t.placement??"top",s=r.placementMap[i]??r.placementMap.top,d={arrow:(0,u.cx)(o.styles.arrow,t.classNames?.arrow),popup:(0,u.cx)(o.styles.popup,t.className,t.classNames?.root,t.classNames?.container),positioner:o.styles.positioner,viewport:(0,u.cx)(o.styles.viewport,t.classNames?.content)},g=(()=>{if("function"!=typeof t.styles)return t.styles})(),m={arrow:g?.arrow,popup:{...g?.root,...g?.container},positioner:{zIndex:t.zIndex??114514},viewport:g?.content},x=(0,c.jsx)(p.Tooltip.Viewport,{className:d.viewport,style:m.viewport,children:(0,c.jsx)(n.default,{hotkey:t.hotkey,hotkeyProps:t.hotkeyProps,title:t.title})}),b=(0,c.jsx)(p.Tooltip.Positioner,{align:s.align,className:d.positioner,"data-layout-animation":y||void 0,"data-placement":i,side:s.side,sideOffset:a?8:6,style:m.positioner,...t.positionerProps,children:(0,c.jsxs)(p.Tooltip.Popup,{className:d.popup,"data-layout-animation":y||void 0,style:m.popup,...t.popupProps,children:[a&&(0,c.jsx)(p.Tooltip.Arrow,{className:d.arrow,style:m.arrow,children:l.TooltipArrowIcon}),x]})}),M=t.popupContainer??h??N;return M?(0,c.jsx)(p.Tooltip.Portal,{container:M,children:b}):null}},M)]})})};g.displayName="TooltipGroup",e.s(["default",0,g])},73575,549793,755072,762368,825398,169382,e=>{"use strict";var t=e.i(58125),a=e.i(184283),i=e.i(225913);let r=(0,a.createStaticStyles)(({css:e,cssVar:a})=>({actionsHidden:e`
      cursor: pointer;

      position: absolute;
      z-index: 1;
      inset-block-start: 0;
      inset-inline-end: 0;

      opacity: 0;
    `,actionsVisible:e`
      cursor: pointer;

      position: absolute;
      z-index: 1;
      inset-block-start: 0;
      inset-inline-end: 0;

      opacity: 1;
    `,borderless:t.staticStylish.variantBorderlessWithoutHover,filled:e`
      ${t.staticStylish.variantOutlinedWithoutHover};
      ${t.staticStylish.variantFilledWithoutHover};
    `,image:e`
      display: flex;
      align-items: center;
      justify-content: center;

      width: auto;
      height: auto;
    `,mask:e`
      ${t.staticStylish.blur};
      backdrop-filter: blur(8px);
    `,outlined:t.staticStylish.variantOutlinedWithoutHover,preview:e`
      .${"ant"}-image-preview-mask {
        background: color-mix(in srgb, ${a.colorBgLayout} 90%, transparent);
      }

      .${"ant"}-image-preview-close {
        color: ${a.colorTextDescription};
        background: ${a.colorBgContainer};
        box-shadow: ${a.boxShadowTertiary};

        svg {
          stroke: ${a.colorTextDescription};
        }

        &:hover {
          color: ${a.colorText};
          background: ${a.colorBgContainer};

          svg {
            stroke: ${a.colorText};
          }
        }
      }

      .${"ant"}-image-preview-img {
        width: 100%;
      }

      .${"ant"}-image-preview-switch {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 32px;
        height: 32px;
        padding: 0;

        color: ${a.colorTextDescription};

        background: ${a.colorBgContainer};
        box-shadow: ${a.boxShadowTertiary};

        svg {
          transform: scale(0.75);
        }

        &:hover {
          color: ${a.colorText};
          background: ${a.colorBgContainer};
        }
      }

      .${"ant"}-image-preview-switch-disabled {
        display: none;
      }

      .ant-image-preview-progress {
        color: ${a.colorTextDescription};
      }

      img {
        min-width: 100%;
      }
    `,root:e`
      cursor: pointer;
      user-select: none;

      position: relative;

      overflow: hidden;

      width: fit-content;
      border-radius: ${a.borderRadius};

      line-height: 1;

      .${"ant"}-image-cover {
        display: none !important;
      }

      &:hover {
        .actions-hidden {
          opacity: 1;
        }
      }
    `,toolbar:e`
      ${t.staticStylish.variantOutlinedWithoutHover};
      padding: 4px;
      border-color: ${a.colorFillTertiary};
      border-radius: ${a.borderRadiusLG};
    `,wrapper:e`
      position: relative;
      overflow: hidden;
      max-width: 100%;
      height: auto;
    `})),l=(0,i.cva)(r.root,{defaultVariants:{variant:"filled"},variants:{variant:{filled:r.filled,outlined:r.outlined,borderless:r.borderless}}});e.s(["FALLBACK_DARK",0,"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjM0IzQjNCIi8+CjxwYXRoIGQ9Ik0xNTYuODg4IDkxLjAwMkgxMDAuMTEyQzk1LjYzMjkgOTEuMDAyIDkyLjAwMTUgOTQuNjMzNCA5Mi4wMDE1IDk5LjExMjdWMTU1Ljg4OEM5Mi4wMDE1IDE2MC4zNjcgOTUuNjMyOSAxNjMuOTk5IDEwMC4xMTIgMTYzLjk5OUgxNTYuODg4QzE2MS4zNjcgMTYzLjk5OSAxNjQuOTk4IDE2MC4zNjcgMTY0Ljk5OCAxNTUuODg4Vjk5LjExMjdDMTY0Ljk5OCA5NC42MzM0IDE2MS4zNjcgOTEuMDAyIDE1Ni44ODggOTEuMDAyWiIgc3Ryb2tlPSIjNjI2MjYyIiBzdHJva2Utd2lkdGg9IjguMTEwNzciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTY0Ljk5OCAxMzkuNjY4TDE1Mi40ODQgMTI3LjE1M0MxNTAuOTYyIDEyNS42MzIgMTQ4LjkgMTI0Ljc3OCAxNDYuNzQ5IDEyNC43NzhDMTQ0LjU5OSAxMjQuNzc4IDE0Mi41MzYgMTI1LjYzMiAxNDEuMDE1IDEyNy4xNTNMMTA0LjE2OCAxNjRNMTE2LjMzNCAxMjMuNDQ1QzEyMC44MTMgMTIzLjQ0NSAxMjQuNDQ1IDExOS44MTQgMTI0LjQ0NSAxMTUuMzM0QzEyNC40NDUgMTEwLjg1NSAxMjAuODEzIDEwNy4yMjQgMTE2LjMzNCAxMDcuMjI0QzExMS44NTUgMTA3LjIyNCAxMDguMjIzIDExMC44NTUgMTA4LjIyMyAxMTUuMzM0QzEwOC4yMjMgMTE5LjgxNCAxMTEuODU1IDEyMy40NDUgMTE2LjMzNCAxMjMuNDQ1WiIgc3Ryb2tlPSIjNjI2MjYyIiBzdHJva2Utd2lkdGg9IjguMTEwNzciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K","FALLBACK_LIGHT",0,"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDI1NiAyNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIyNTYiIGhlaWdodD0iMjU2IiBmaWxsPSIjRUNFQ0VDIi8+CjxwYXRoIGQ9Ik0xNTYuODg4IDkxLjAwMkgxMDAuMTEyQzk1LjYzMjkgOTEuMDAyIDkyLjAwMTUgOTQuNjMzNCA5Mi4wMDE1IDk5LjExMjdWMTU1Ljg4OEM5Mi4wMDE1IDE2MC4zNjcgOTUuNjMyOSAxNjMuOTk5IDEwMC4xMTIgMTYzLjk5OUgxNTYuODg4QzE2MS4zNjcgMTYzLjk5OSAxNjQuOTk4IDE2MC4zNjcgMTY0Ljk5OCAxNTUuODg4Vjk5LjExMjdDMTY0Ljk5OCA5NC42MzM0IDE2MS4zNjcgOTEuMDAyIDE1Ni44ODggOTEuMDAyWiIgc3Ryb2tlPSIjRDdEN0Q3IiBzdHJva2Utd2lkdGg9IjguMTEwNzciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNMTY0Ljk5OCAxMzkuNjY4TDE1Mi40ODQgMTI3LjE1M0MxNTAuOTYyIDEyNS42MzIgMTQ4LjkgMTI0Ljc3OCAxNDYuNzQ5IDEyNC43NzhDMTQ0LjU5OSAxMjQuNzc4IDE0Mi41MzYgMTI1LjYzMiAxNDEuMDE1IDEyNy4xNTNMMTA0LjE2OCAxNjRNMTE2LjMzNCAxMjMuNDQ1QzEyMC44MTMgMTIzLjQ0NSAxMjQuNDQ1IDExOS44MTQgMTI0LjQ0NSAxMTUuMzM0QzEyNC40NDUgMTEwLjg1NSAxMjAuODEzIDEwNy4yMjQgMTE2LjMzNCAxMDcuMjI0QzExMS44NTUgMTA3LjIyNCAxMDguMjIzIDExMC44NTUgMTA4LjIyMyAxMTUuMzM0QzEwOC4yMjMgMTE5LjgxNCAxMTEuODU1IDEyMy40NDUgMTE2LjMzNCAxMjMuNDQ1WiIgc3Ryb2tlPSIjRDdEN0Q3IiBzdHJva2Utd2lkdGg9IjguMTEwNzciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8L3N2Zz4K","styles",0,r,"variants",0,l],73575);var o=e.i(271645),n=e.i(843476);let s=(0,o.memo)(({children:e,visible:t})=>{let a=(0,o.useRef)(null);return(0,o.useEffect)(()=>{if(!a.current)return;let e=e=>{e.preventDefault()};t?a.current.addEventListener("wheel",e,{passive:!1}):a.current.removeEventListener("wheel",e)},[t]),(0,n.jsx)("div",{ref:a,children:e})});e.s(["default",0,s],549793);var d=e.i(206868),c=e.i(125950),u=e.i(149167),p=e.i(28662);let g=async(e,t)=>new Promise((a,i)=>{try{let i=document.createElement("a");i.href=e,i.download=t,i.style.display="none",document.body.append(i),i.click(),i.remove(),a()}catch(e){i(e)}});e.s(["downloadBlob",0,g],755072);var m={"image.copy":"Copy","image.copyFailed":"Copy Failed","image.copySuccess":"Copy Success","image.download":"Download","image.downloadFailed":"Download Failed","image.downloadSuccess":"Download Success","image.flipHorizontal":"Flip Horizontal","image.flipVertical":"Flip Vertical","image.rotateLeft":"Rotate Left","image.rotateRight":"Rotate Right","image.zoomIn":"Zoom In","image.zoomOut":"Zoom Out"};let y=async e=>{let t=(e.type||"").toLowerCase();return"image/png"===t||"image/svg+xml"===t?{[t]:e}:{"image/png":await new Promise((t,a)=>{let i=new Image,r=URL.createObjectURL(e);i.onload=()=>{URL.revokeObjectURL(r);let e=document.createElement("canvas");e.width=i.naturalWidth,e.height=i.naturalHeight;let l=e.getContext("2d");l?(l.drawImage(i,0,0),e.toBlob(e=>{e?t(e):a(Error("Failed to convert to PNG"))},"image/png",1)):a(Error("Canvas context not available"))},i.onerror=()=>{URL.revokeObjectURL(r),a(Error("Failed to load image"))},i.src=r})}};var h=e.i(998573),x=e.i(508734),b=e.i(484479);e.s(["Download",()=>b.default],762368);var b=b,M=e.i(456420);let f=(0,M.default)("square-centerline-dashed-horizontal",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3",key:"1i73f7"}],["path",{d:"M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3",key:"saxlbk"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 2v2",key:"tus03m"}]]),j=(0,M.default)("square-centerline-dashed-vertical",[["path",{d:"M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3",key:"14bfxa"}],["path",{d:"M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3",key:"14rx03"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]]),v=(0,M.default)("rotate-ccw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]),k=(0,M.default)("rotate-cw",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);e.s(["RotateCw",0,k],825398);let w=(0,M.default)("zoom-in",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),N=(0,M.default)("zoom-out",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]),T=(0,o.memo)(({children:e,info:t,minScale:a,maxScale:i})=>{let{t:l}=(0,p.useTranslation)(m),[s,M]=(0,o.useState)(null),[T,I]=(0,o.useState)(!1),[S,C]=(0,o.useState)(!1),{transform:{scale:z},actions:{onFlipY:D,onFlipX:L,onRotateLeft:A,onRotateRight:E,onZoomOut:O,onZoomIn:$},image:{url:R}}=t,H=(0,o.useCallback)(async()=>{C(!0);try{let e,t=await (await fetch(R,{mode:"cors"})).blob(),a=URL.createObjectURL(t),i=(e=>{try{let t=new URL(e).pathname.match(/\/([^/]+)$/);return t?decodeURIComponent(t[1]):"image"}catch{return"image"}})(R),r=(e=t.type,({"image/svg+xml":"svg","image/png":"png","image/jpeg":"jpg","image/jpg":"jpg","image/webp":"webp","image/gif":"gif"})[e?.toLowerCase()]||e?.split("/")[1]?.split("+")[0]||"png");i.includes(".")?i.endsWith(".svg+xml")&&(i=i.replace(/\.svg\+xml$/i,".svg")):i=`${i}.${r}`,await g(a,i),URL.revokeObjectURL(a),h.message.success(l("image.downloadSuccess"))}catch{h.message.error(l("image.downloadFailed"))}finally{C(!1)}},[R,l]),P=(0,o.useCallback)(async()=>{I(!0);try{let e=await y(await (await fetch(R,{mode:"cors"})).blob());await navigator.clipboard.write([new ClipboardItem(e)]),h.message.success(l("image.copySuccess"))}catch{h.message.error(l("image.copyFailed"))}finally{I(!1)}},[R,l]);return(0,n.jsx)(c.default,{popupContainer:s??void 0,children:(0,n.jsxs)(d.default,{horizontal:!0,className:r.toolbar,gap:4,ref:M,children:[(0,n.jsx)(u.default,{icon:f,title:l("image.flipHorizontal"),onClick:L}),(0,n.jsx)(u.default,{icon:j,title:l("image.flipVertical"),onClick:D}),(0,n.jsx)(u.default,{icon:v,title:l("image.rotateLeft"),onClick:A}),(0,n.jsx)(u.default,{icon:k,title:l("image.rotateRight"),onClick:E}),(0,n.jsx)(u.default,{disabled:z===a,icon:N,title:l("image.zoomOut"),onClick:O}),(0,n.jsx)(u.default,{disabled:z===i,icon:w,title:l("image.zoomIn"),onClick:$}),(0,n.jsx)(u.default,{icon:x.Copy,loading:T,title:l("image.copy"),onClick:P}),(0,n.jsx)(u.default,{icon:b.default,loading:S,title:l("image.download"),onClick:H}),e]})})});e.s(["default",0,T],169382)},677810,e=>{"use strict";var t=e.i(492435),a=e.i(73575),i=e.i(549793),r=e.i(169382),l=e.i(271645),o=e.i(843476),n=e.i(184283),s=e.i(263676);e.s(["default",0,e=>{let[d,c]=(0,l.useState)(!1);return(0,l.useMemo)(()=>{if(!1===e)return e;let{onVisibleChange:l,onOpenChange:u,minScale:p=.32,maxScale:g=32,toolbarAddon:m,rootClassName:y,imageRender:h,toolbarRender:x,actionsRender:b,...M}=!0===e?{}:e||{};return{actionsRender:b||((e,t)=>{let a=(0,o.jsx)(r.default,{info:t,maxScale:g,minScale:p,children:m});return x?x(a,t):a}),closeIcon:(0,o.jsx)(t.default,{color:"#fff",icon:s.X}),imageRender:(e,t)=>{let a=(0,o.jsx)(i.default,{visible:d,children:e});return h?h(a,t):a},maxScale:g,minScale:p,onOpenChange:e=>{c(e),u?.(e),l?.(e,!e)},rootClassName:(0,n.cx)(a.styles.preview,y),styles:{mask:{backdropFilter:"blur(8px)"}},...M}},[e,d,a.styles])}])},560844,e=>{"use strict";var t=e.i(839598);e.s(["Image",()=>t.default])},981339,e=>{"use strict";var t=e.i(185793);e.s(["Skeleton",()=>t.default])},233073,e=>{"use strict";var t=e.i(206868),a=e.i(73575),i=e.i(677810),r=e.i(271645),l=e.i(843476),o=e.i(560844),n=e.i(981339),s=e.i(184283),d=e.i(639007);let c=(0,r.memo)(({ref:e,style:r,preview:c,isLoading:u,maxHeight:p="100%",maxWidth:g="100%",minHeight:m,minWidth:y,actions:h,className:x,alwaysShowActions:b,variant:M="filled",objectFit:f="cover",classNames:j,styles:v,onClick:k,width:w,height:N,...T})=>{let{isDarkMode:I}=(0,d.useThemeMode)(),S=b?a.styles.actionsVisible:a.styles.actionsHidden,C=(0,i.default)(c);return u?(0,l.jsx)("div",{onClick:k,children:(0,l.jsx)(n.Skeleton.Avatar,{active:!0,style:{borderRadius:s.cssVar.borderRadius,height:N,maxHeight:p,maxWidth:g,minHeight:m,minWidth:y,width:w}})}):(0,l.jsxs)(t.default,{className:(0,s.cx)((0,a.variants)({variant:M}),x),ref:e,style:r,children:[h&&(0,l.jsx)("div",{className:(0,s.cx)(S,b?"":"actions-hidden"),children:h}),(0,l.jsx)(o.Image,{className:(0,s.cx)(a.styles.image,j?.image),fallback:I?a.FALLBACK_DARK:a.FALLBACK_LIGHT,height:N,loading:"lazy",preview:!1!==c&&C,width:w,classNames:{root:(0,s.cx)(a.styles.wrapper,j?.wrapper)},style:{maxHeight:p,maxWidth:g,minHeight:m,minWidth:y,objectFit:f||"cover",...v?.image},styles:{root:v?.wrapper},onClick:k,...T})]})});c.displayName="Image",e.s(["default",0,c])},989106,e=>{"use strict";var t=e.i(492435),a=e.i(73575),i=e.i(549793),r=e.i(169382),l=e.i(271645),o=e.i(843476),n=e.i(184283),s=e.i(263676);e.s(["default",0,e=>{let[d,c]=(0,l.useState)(!1);return(0,l.useMemo)(()=>{if(!1===e)return e;let{onVisibleChange:l,onOpenChange:u,minScale:p=.32,maxScale:g=32,toolbarAddon:m,rootClassName:y,imageRender:h,toolbarRender:x,...b}=!0===e?{}:e||{};return{actionsRender:(e,t)=>{let a=(0,o.jsx)(r.default,{info:t,maxScale:g,minScale:p,children:m});return x?x(a,t):a},closeIcon:(0,o.jsx)(t.default,{color:"#fff",icon:s.X}),imageRender:(e,t)=>{let a=(0,o.jsx)(i.default,{visible:d,children:e});return h?h(a,t):a},maxScale:g,minScale:p,onOpenChange:(e,t)=>{c(e),u?.(e,t),l?.(e,!e,t.current)},rootClassName:(0,n.cx)(a.styles.preview,y),...b}},[e,d,a.styles])}])},414990,e=>{"use strict";var t=e.i(989106),a=e.i(271645),i=e.i(843476);let{PreviewGroup:r}=e.i(560844).Image,l=(0,a.memo)(({items:e,children:a,enable:l=!0,preview:o})=>{let n=(0,t.default)(o);return l?(0,i.jsx)(r,{items:e,preview:n,children:a}):a});l.displayName="PreviewGroup",e.s(["default",0,l])},869712,e=>{"use strict";var t=e.i(233073),a=e.i(414990);let i=t.default;i.PreviewGroup=a.default,e.s(["default",0,i])},633500,e=>{"use strict";var t=e.i(869712),a=e.i(843476);let i=({style:e,alt:i="img",...r})=>(0,a.jsx)(t.default,{alt:i,style:{borderRadius:"calc(var(--lobe-markdown-border-radius) * 1px)",marginBlock:"calc(var(--lobe-markdown-margin-multiple) * 1em)",...e},...r});i.displayName="MdxImage",e.s(["default",0,i])},737623,e=>{"use strict";let t=(0,e.i(456420).default)("play",[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]]);e.s(["default",0,t])},57095,e=>{"use strict";var t=e.i(737623);e.s(["PlayIcon",()=>t.default])},450156,e=>{"use strict";var t=e.i(206868),a=e.i(74152),i=e.i(709939),r=e.i(266894),l=e.i(58125),o=e.i(184283),n=e.i(225913);let s=(0,o.createStaticStyles)(({css:e,cssVar:t})=>({borderless:l.staticStylish.variantBorderlessWithoutHover,filled:l.staticStylish.variantFilledWithoutHover,hightlight:e`
      overflow: auto hidden;
      flex: 1;
      height: 100%;
      padding: 0;

      pre {
        display: flex;
        align-items: center;
        height: 100%;
      }
    `,outlined:l.staticStylish.variantOutlinedWithoutHover,root:e`
      position: relative;

      overflow: hidden;

      max-width: 100%;
      height: 38px;
      padding-block: 0;
      padding-inline: 12px 8px;
      border-radius: ${t.borderRadius};
    `,shadow:l.staticStylish.shadow})),d=(0,n.cva)(s.root,{defaultVariants:{shadow:!1,variant:"filled"},variants:{variant:{filled:s.filled,outlined:s.outlined,borderless:s.borderless},shadow:{false:null,true:s.shadow}}});var c=e.i(843476);let u=({ref:e,prefix:l,language:n="tsx",children:u,copyable:p=!0,variant:g="filled",spotlight:m,shadow:y,className:h,...x})=>{let b=u.trim();return(0,c.jsxs)(t.default,{horizontal:!0,align:"center",className:(0,o.cx)(d({shadow:y,variant:g}),h),"data-code-type":"highlighter",gap:8,ref:e,...x,children:[m&&(0,c.jsx)(r.default,{}),(0,c.jsx)(a.default,{className:s.hightlight,language:n,children:[l,b].filter(Boolean).join(" ")}),p&&(0,c.jsx)(i.default,{content:b,size:"small"})]})};u.displayName="Snippet",e.s(["default",0,u],450156)},619928,560972,e=>{"use strict";let t=(0,e.i(456420).default)("ellipsis",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);e.s(["default",0,t],560972),e.s(["MoreHorizontalIcon",0,t],619928)},757871,e=>{"use strict";var t=e.i(149167),a=e.i(184283),i=e.i(225913);let r=(0,a.createStaticStyles)(({css:e,cssVar:t})=>({compact:e`
      &.${"ant"}-tabs {
        .${"ant"}-tabs-tab {
          margin: 4px;

          + [class*='ant-tabs-tab'] {
            margin: 4px;
          }
        }
      }
    `,dropdown:e`
      .${"ant"}-tabs-dropdown-menu {
        padding: 4px;
        border: 1px solid ${t.colorBorderSecondary};

        .${"ant"}-tabs-dropdown-menu-item {
          border-radius: ${t.borderRadius};
        }
      }
    `,hideHolder:e`
      &.${"ant"}-tabs {
        .${"ant"}-tabs-content-holder {
          display: none;
        }

        .${"ant"}-tabs-nav {
          margin: 0;

          &::before {
            display: none;
          }
        }
      }
    `,margin:e`
      &.${"ant"}-tabs {
        .${"ant"}-tabs-tab {
          margin: 8px;

          + .${"ant"}-tabs-tab {
            margin: 8px;
          }
        }
      }
    `,point:e`
      &.${"ant"}-tabs {
        &.${"ant"}-tabs-top {
          .${"ant"}-tabs-ink-bar {
            width: 8px !important;
            height: 4px;
            border-start-start-radius: 4px;
            border-start-end-radius: 4px;
          }
        }

        &.${"ant"}-tabs-bottom {
          .${"ant"}-tabs-ink-bar {
            width: 8px !important;
            height: 4px;
            border-end-start-radius: 4px;
            border-end-end-radius: 4px;
          }
        }

        &.${"ant"}-tabs-left {
          .${"ant"}-tabs-ink-bar {
            width: 4px;
            height: 8px !important;
            border-start-start-radius: 4px;
            border-end-start-radius: 4px;
          }
        }

        &.${"ant"}-tabs-right {
          .${"ant"}-tabs-ink-bar {
            width: 4px;
            height: 8px !important;
            border-start-end-radius: 4px;
            border-end-end-radius: 4px;
          }
        }
      }
    `,root:e`
      &.${"ant"}-tabs {
        .${"ant"}-tabs-tab {
          padding-block: 8px;
          padding-inline: 12px;
          color: ${t.colorTextSecondary};
          transition: background-color 100ms ease-out;

          &:hover {
            border-radius: ${t.borderRadius};
            color: ${t.colorText};
            background: ${t.colorFillTertiary};
          }
        }
      }
    `,rounded:e`
      &.${"ant"}-tabs {
        &.${"ant"}-tabs-top {
          .${"ant"}-tabs-ink-bar {
            height: 3px;
            border-start-start-radius: 3px;
            border-start-end-radius: 3px;
          }
        }

        &.${"ant"}-tabs-bottom {
          .${"ant"}-tabs-ink-bar {
            height: 3px;
            border-end-start-radius: 3px;
            border-end-end-radius: 3px;
          }
        }

        &.${"ant"}-tabs-left {
          .${"ant"}-tabs-ink-bar {
            width: 3px;
            border-start-start-radius: 3px;
            border-end-start-radius: 3px;
          }
        }

        &.${"ant"}-tabs-right {
          .${"ant"}-tabs-ink-bar {
            width: 3px;
            border-start-end-radius: 3px;
            border-end-end-radius: 3px;
          }
        }
      }
    `})),l=(0,i.cva)(r.root,{defaultVariants:{compact:!1,underlined:!1,variant:"rounded"},variants:{variant:{square:null,rounded:r.rounded,point:r.point},compact:{false:r.margin,true:r.compact},underlined:{false:r.hideHolder,true:null}}});var o=e.i(843476),n=e.i(721369),n=n,s=e.i(619928);let d=({className:e,compact:i,variant:d="rounded",items:c,classNames:u,...p})=>{let g=c?.some(e=>!!e.children),m={root:r.dropdown,..."function"==typeof u?void 0:u?.popup},y="function"==typeof u?Object.assign(e=>u(e),{popup:m}):{...u,popup:m};return(0,o.jsx)(n.default,{className:(0,a.cx)(l({compact:i,underlined:g,variant:d}),e),items:c,...p,classNames:y,more:{icon:(0,o.jsx)(t.default,{icon:s.MoreHorizontalIcon}),...p?.more}})};d.displayName="Tabs",e.s(["default",0,d],757871)},725345,e=>{"use strict";var t=e.i(647608),a=e.i(532780),i=e.i(568482),r=e.i(452019),l=e.i(338489);e.s(["isEmpty",0,function(e){if(null==e)return!0;if((0,a.isArrayLike)(e))return("function"==typeof e.splice||"string"==typeof e||!!(0,t.isBuffer)(e)||!!(0,l.isTypedArray)(e)||!!(0,i.isArguments)(e))&&0===e.length;if("object"==typeof e||"function"==typeof e){if(e instanceof Map||e instanceof Set)return 0===e.size;let t=Object.keys(e);return(0,r.isPrototype)(e)?0===t.filter(e=>"constructor"!==e).length:0===t.length}return!0}])},58687,e=>{"use strict";var t=e.i(843476),a=e.i(113464),i=e.i(48608),r=e.i(861749),l=e.i(361902),o=e.i(271645);let n=(0,o.createContext)({isLoading:!0,setFinished:()=>{},setToc:()=>{},toc:[]});e.s(["TocProvider",0,({children:e})=>{let[a,i]=(0,o.useState)(!0),[r,l]=(0,o.useState)([]);return(0,t.jsx)(n.Provider,{value:{isLoading:a,setFinished:()=>i(!1),setToc:e=>{l(e)},toc:r},children:e})},"createTOCTree",0,function(e){let t=[],o=1;for(let n of function(...e){let t=e[e.length-1],o=function(e){let t=[];for(let a=0;a<e.length;a++){let i=e[a];if((0,l.isArrayLikeObject)(i))for(let e=0;e<i.length;e++)t.push(i[e])}return t}(e);return(0,l.isArrayLikeObject)(t)||null==t?[...new Set(o)]:(0,a.uniqBy)(o,(0,i.ary)((0,r.iteratee)(t),1))}(e,"href")){let e={href:n.href,key:o,title:n.title},a=t.at(-1);2===n.level?t.push({...e,children:[]}):a&&a.children?a.children.push(e):t.push(e),o++}return t},"useToc",0,()=>(0,o.useContext)(n)],58687)},503199,e=>{"use strict";var t=e.i(975409),a=e.i(843476);let i=({children:e,fullFeatured:i,enableMermaid:r,mermaid:l})=>{let o=(e=>{let t;if(!e)return;let{children:a="",className:i}=e?.props||{children:""};if(!a)return;let r=Array.isArray(a)?a[0]:a,l=i?.replace("language-","")||"plaintext";return{content:r,isSingleLine:1>=((t=r.match(/\n/g))?t.length:1)&&r.length<=32,lang:l}})(e);if(o)return r&&"mermaid"===o.lang?(0,a.jsx)(t.PreMermaid,{fullFeatured:i,...l,children:o.content}):o.isSingleLine?(0,a.jsx)(t.PreSingleLine,{language:o.lang,children:o.content}):(0,a.jsx)(t.default,{allowChangeLanguage:!1,fullFeatured:i,language:o.lang,children:o.content})};i.displayName="MdxCodeBlock",e.s(["default",0,i])},12010,e=>{"use strict";let t=(0,e.i(456420).default)("lightbulb",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);e.s(["Lightbulb",0,t],12010)},128973,e=>{"use strict";var t=e.i(206868),a=e.i(492435),i=e.i(184283);let r=(0,i.createStaticStyles)(({css:e})=>({container:e`
      --lobe-markdown-margin-multiple: 1;

      overflow: hidden;
      gap: 0.75em;

      margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
      padding-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
      padding-inline: 1em;
      border-radius: calc(var(--lobe-markdown-border-radius) * 1px);
    `,content:e`
      margin-block: calc(var(--lobe-markdown-margin-multiple) * -1em);

      > div {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
      }

      p {
        color: inherit !important;
      }
    `,underlineAnchor:e`
      a {
        text-decoration: underline;
      }
    `}));var l=e.i(271645),o=e.i(843476),n=e.i(456420);let s=(0,n.default)("octagon-alert",[["path",{d:"M12 16h.01",key:"1drbdi"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M15.312 2a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z",key:"1fd625"}]]);var d=e.i(853138),c=e.i(810818),u=e.i(12010);let p=(0,n.default)("message-square-warning",[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}],["path",{d:"M12 15h.01",key:"q59x07"}],["path",{d:"M12 7v4",key:"xawao1"}]]),g=({children:e,type:n="info",className:g,style:m,...y})=>{let h=(0,i.useTheme)(),x=(0,l.useMemo)(()=>({error:{background:h.colorErrorFillTertiary,color:i.cssVar.colorError,icon:s},important:{background:h.purpleFillTertiary,color:i.cssVar.purple,icon:p},info:{background:h.colorInfoFillTertiary,color:i.cssVar.colorInfo,icon:c.Info},tip:{background:h.colorSuccessFillTertiary,color:i.cssVar.colorSuccess,icon:u.Lightbulb},warning:{background:h.colorWarningFillTertiary,color:i.cssVar.colorWarning,icon:d.AlertTriangle}}),[h]),{icon:b,color:M,background:f}=x?.[n]||x.info;return(0,o.jsxs)(t.default,{horizontal:!0,align:"flex-start",className:(0,i.cx)(r.container,g),style:{background:f,boxShadow:`0 0 0 1px ${f} inset`,color:M,...m},...y,children:[(0,o.jsx)(a.default,{icon:b,size:{size:"1.2em"},style:{marginBlock:"0.25em"}}),(0,o.jsx)("div",{className:(0,i.cx)(r.content,"info"===n&&r.underlineAnchor),children:(0,o.jsx)("div",{children:e})})]})};g.displayName="MdxCallout",e.s(["default",0,g],128973)},634912,e=>{"use strict";var t=e.i(578379),a=e.i(184283);let i=(0,a.createStaticStyles)(({css:e})=>({container:e`
      margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);

      > div {
        margin: 0 !important;
      }
    `}));var r=e.i(843476);let l=({children:e,className:l,maxItemWidth:o=250,rows:n=3,...s})=>(0,r.jsx)(t.default,{className:(0,a.cx)(i.container,l),maxItemWidth:o,rows:n,...s,children:e});l.displayName="MdxCards",e.s(["default",0,l],634912)},723327,e=>{"use strict";var t=e.i(513650),a=e.i(206868),i=e.i(591479),r=e.i(492435),l=e.i(297169),o=e.i(185345),n=e.i(843476),s=e.i(184283);let d=(0,s.createStaticStyles)(({css:e,cssVar:t})=>({card:e`
      --lobe-markdown-header-multiple: 0.2;
      --lobe-markdown-margin-multiple: 1;

      overflow: hidden;
      height: 100%;
      color: ${t.colorText};

      h3,
      p {
        margin-block: 0 !important;
      }

      p {
        color: ${t.colorTextDescription};
        transition: color 0.2s ${t.motionEaseInOut};
      }

      &:hover {
        p {
          color: ${t.colorTextSecondary};
        }

        .mdx-card-icon {
          opacity: 1;
        }
      }
    `,content:e`
      width: 100%;
      padding: 1.4em;
    `,icon:e`
      margin-block: 0.1em;
      opacity: 0.5;
      transition: opacity 0.2s ${t.motionEaseInOut};
    `})),c=({tag:e,tagColor:c="blue",icon:u,title:p,desc:g,href:m,iconProps:y,className:h,image:x,variant:b="filled",...M})=>(0,n.jsx)(t.default,{href:m,children:(0,n.jsxs)(i.default,{clickable:!0,align:"flex-start",className:(0,s.cx)(d.card,h),variant:b,...M,children:[x&&(0,n.jsx)(l.default,{alt:p,height:100,src:x,style:{height:"auto",width:"100%"},width:250}),e&&(0,n.jsx)(a.default,{align:"flex-start",className:d.content,style:{paddingBottom:"0.2em",paddingTop:"1.8em"},children:(0,n.jsx)(o.default,{color:c,style:{borderRadius:"1em",fontSize:"0.8em",fontWeight:500,paddingBlock:"0.1em",paddingInline:"0.6em"},children:e})}),(0,n.jsxs)(a.default,{horizontal:!0,align:g?"flex-start":"center",className:d.content,gap:"0.75em",children:[!x&&u&&(0,n.jsx)(r.default,{className:(0,s.cx)(d.icon,"mdx-card-icon"),icon:u,size:{size:"1.5em"},...y}),(0,n.jsxs)(a.default,{gap:"0.2em",children:[(0,n.jsx)("h3",{children:p}),g&&(0,n.jsx)("p",{children:g})]})]})]})});c.displayName="MdxCard",e.s(["default",0,c])},769782,e=>{"use strict";var t=e.i(184283);let a=(0,t.createStaticStyles)(({css:e,cssVar:t})=>({container:e`
      margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
      padding-block: 0.75em;
      padding-inline: 1em;
      border-radius: calc(var(--lobe-markdown-border-radius) * 1px);

      color: ${t.colorTextSecondary};

      box-shadow: 0 0 0 1px var(--lobe-markdown-border-color);
    `,folder:e`
      cursor: pointer;

      &:hover {
        color: ${t.colorText};
      }
    `,folderChildren:e`
      padding-inline-start: 1em;
    `}));var i=e.i(843476);let r=({children:e,className:r,...l})=>(0,i.jsx)("div",{className:(0,t.cx)(a.container,r),...l,children:e});r.displayName="MdxFileTree",e.s(["default",0,r],769782)},735301,e=>{"use strict";var t=e.i(184283);let a=(0,t.createStaticStyles)(({css:e,cssVar:t})=>({container:e`
      --lobe-markdown-header-multiple: 0.5;
      --lobe-markdown-margin-multiple: 1;

      position: relative;
      margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
      padding-inline-start: 2.5em;

      &::before {
        content: '';

        position: absolute;
        inset-block-start: 0.25em;
        inset-inline-start: 0.9em;

        display: block;

        width: 1px;
        height: calc(100% - 0.5em);

        background: ${t.colorBorderSecondary};
      }

      h3 {
        counter-increment: step;

        &::before {
          content: counter(step);

          position: absolute;
          z-index: 1;
          inset-inline-start: 0;

          display: inline-block;

          width: 1.8em;
          height: 1.8em;
          margin-block-start: -0.05em;
          border-radius: 9999px;

          font-size: 0.8em;
          font-weight: 500;
          line-height: 1.8em;
          color: ${t.colorTextSecondary};
          text-align: center;

          background: ${t.colorBgElevated};
          box-shadow: 0 0 0 2px ${t.colorBgLayout};
        }

        &:not(:first-child) {
          margin-block-start: 2em;
        }
      }
    `}));var i=e.i(843476);let r=({children:e,className:r,...l})=>(0,i.jsx)("div",{className:(0,t.cx)(a.container,r),...l,children:e});r.displayName="MdxSteps",e.s(["default",0,r],735301)},391551,e=>{"use strict";let t=(0,e.i(184283).createStaticStyles)(({css:e})=>({body:e`
      padding-inline: 1em;

      > div {
        margin-block: calc(var(--lobe-markdown-margin-multiple) * 1em);
      }
    `,container:e`
      /* Container styles */
    `,header:e`
      /* Header styles */
    `}));e.s(["styles",0,t])},430288,e=>{"use strict";var t=e.i(206868),a=e.i(757871),i=e.i(391551),r=e.i(271645),l=e.i(843476),o=e.i(184283);e.s(["default",0,({defaultIndex:e="0",items:n,children:s,className:d,tabNavProps:c={},...u})=>{let{className:p,onChange:g,...m}=c,[y,h]=(0,r.useState)(String(e)),x=Number(y);return(0,l.jsxs)(t.default,{className:(0,o.cx)(i.styles.container,d),...u,children:[(0,l.jsx)(a.default,{compact:!0,activeKey:y,className:(0,o.cx)(i.styles.header,p),items:n.map((e,t)=>({key:String(t),label:e})),onChange:e=>{h(e),g?.(e)},...m}),s?.[x]||""]})}])},914304,e=>{"use strict";var t=e.i(391551),a=e.i(843476),i=e.i(184283);let r=({children:e,className:r,...l})=>(0,a.jsx)("div",{className:(0,i.cx)(t.styles.body,r),...l,children:(0,a.jsx)("div",{children:e})});r.displayName="MdxTab",e.s(["default",0,r])},612219,e=>{"use strict";var t=e.i(843476),a=e.i(765812),i=e.i(184283),r=e.i(172345);let l=(0,i.createStaticStyles)(({css:e})=>({collapse:e`
    margin-block: 1em;
  `,label:e`
    font-size: 1.25em;
    font-weight: 600;
    line-height: 1.4;
    color: ${i.cssVar.colorText};
  `})),o=({children:e,title:i=""})=>{let o=(0,r.kebabCase)(i);return(0,t.jsx)(a.Collapse,{className:l.collapse,defaultActiveKey:[],expandIconPlacement:"end",gap:8,items:[{children:e,key:o||"section",label:(0,t.jsx)("span",{className:l.label,id:o||void 0,children:i})}],variant:"outlined"})};o.displayName="CollapsibleSection",e.s(["default",0,o])},956843,e=>{"use strict";var t=e.i(843476),a=e.i(347782);let i=/^https?:\/\//,r=["LobeHub","lobehub","mcpmark.ai"];e.s(["default",0,({href:e="",...l})=>{if(!e)return l?.children||null;let o=String(e),n=i.test(o),s=r.some(e=>o.includes(e));return(0,t.jsx)(a.default,{href:e,prefetch:!1,rel:n&&!s?"nofollow":void 0,target:n?"_blank":void 0,...l})}])}]);