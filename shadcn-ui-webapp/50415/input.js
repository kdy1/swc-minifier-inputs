"use strict";
exports.id = 50415;
exports.ids = [50415,81900];
exports.modules = {

/***/ 50415:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ InputOTPWithSeparator)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _registry_new_york_ui_input_otp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(81900);



function InputOTPWithSeparator() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_input_otp__WEBPACK_IMPORTED_MODULE_2__.InputOTP, {
        maxLength: 6,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_input_otp__WEBPACK_IMPORTED_MODULE_2__.InputOTPGroup, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_input_otp__WEBPACK_IMPORTED_MODULE_2__.InputOTPSlot, {
                        index: 0
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_input_otp__WEBPACK_IMPORTED_MODULE_2__.InputOTPSlot, {
                        index: 1
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_input_otp__WEBPACK_IMPORTED_MODULE_2__.InputOTPSeparator, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_input_otp__WEBPACK_IMPORTED_MODULE_2__.InputOTPGroup, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_input_otp__WEBPACK_IMPORTED_MODULE_2__.InputOTPSlot, {
                        index: 2
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_input_otp__WEBPACK_IMPORTED_MODULE_2__.InputOTPSlot, {
                        index: 3
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_input_otp__WEBPACK_IMPORTED_MODULE_2__.InputOTPSeparator, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_registry_new_york_ui_input_otp__WEBPACK_IMPORTED_MODULE_2__.InputOTPGroup, {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_input_otp__WEBPACK_IMPORTED_MODULE_2__.InputOTPSlot, {
                        index: 4
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_registry_new_york_ui_input_otp__WEBPACK_IMPORTED_MODULE_2__.InputOTPSlot, {
                        index: 5
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 81900:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   InputOTP: () => (/* binding */ InputOTP),
/* harmony export */   InputOTPGroup: () => (/* binding */ InputOTPGroup),
/* harmony export */   InputOTPSeparator: () => (/* binding */ InputOTPSeparator),
/* harmony export */   InputOTPSlot: () => (/* binding */ InputOTPSlot)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78553);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var input_otp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28582);
/* harmony import */ var _barrel_optimize_names_Minus_lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11132);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(26910);
/* __next_internal_client_entry_do_not_use__ InputOTP,InputOTPGroup,InputOTPSlot,InputOTPSeparator auto */ 




const InputOTP = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, containerClassName, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(input_otp__WEBPACK_IMPORTED_MODULE_2__/* .OTPInput */ .uZ, {
        ref: ref,
        containerClassName: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex items-center gap-2 has-[:disabled]:opacity-50", containerClassName),
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("disabled:cursor-not-allowed", className),
        ...props
    }));
InputOTP.displayName = "InputOTP";
const InputOTPGroup = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("flex items-center", className),
        ...props
    }));
InputOTPGroup.displayName = "InputOTPGroup";
const InputOTPSlot = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ index, className, ...props }, ref)=>{
    const inputOTPContext = react__WEBPACK_IMPORTED_MODULE_1__.useContext(input_otp__WEBPACK_IMPORTED_MODULE_2__/* .OTPInputContext */ .VM);
    const { char, hasFakeCaret, isActive } = inputOTPContext.slots[index];
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        ref: ref,
        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_3__.cn)("relative flex h-9 w-9 items-center justify-center border-y border-r border-input text-sm shadow-sm transition-all first:rounded-l-md first:border-l last:rounded-r-md", isActive && "z-10 ring-1 ring-ring", className),
        ...props,
        children: [
            char,
            hasFakeCaret && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "pointer-events-none absolute inset-0 flex items-center justify-center",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "h-4 w-px animate-caret-blink bg-foreground duration-1000"
                })
            })
        ]
    });
});
InputOTPSlot.displayName = "InputOTPSlot";
const InputOTPSeparator = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ ...props }, ref)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        role: "separator",
        ...props,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_barrel_optimize_names_Minus_lucide_react__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
    }));
InputOTPSeparator.displayName = "InputOTPSeparator";



/***/ }),

/***/ 28582:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   K2: () => (/* binding */ $t),
/* harmony export */   VM: () => (/* binding */ Gt),
/* harmony export */   uZ: () => (/* binding */ xt)
/* harmony export */ });
/* unused harmony exports REGEXP_ONLY_CHARS, REGEXP_ONLY_DIGITS */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70615);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var Wt=Object.defineProperty,Bt=Object.defineProperties;var Ht=Object.getOwnPropertyDescriptors;var Y=Object.getOwnPropertySymbols;var pt=Object.prototype.hasOwnProperty,Rt=Object.prototype.propertyIsEnumerable;var mt=(r,s,e)=>s in r?Wt(r,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[s]=e,vt=(r,s)=>{for(var e in s||(s={}))pt.call(s,e)&&mt(r,e,s[e]);if(Y)for(var e of Y(s))Rt.call(s,e)&&mt(r,e,s[e]);return r},Et=(r,s)=>Bt(r,Ht(s));var gt=(r,s)=>{var e={};for(var u in r)pt.call(r,u)&&s.indexOf(u)<0&&(e[u]=r[u]);if(r!=null&&Y)for(var u of Y(r))s.indexOf(u)<0&&Rt.call(r,u)&&(e[u]=r[u]);return e};var St="^\\d+$",Nt="^[a-zA-Z]+$",$t="^[a-zA-Z0-9]+$";function bt(r){let s=setTimeout(r,0),e=setTimeout(r,10),u=setTimeout(r,50);return[s,e,u]}function Pt(r){let s=react__WEBPACK_IMPORTED_MODULE_0__.useRef();return react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{s.current=r}),s.current}var At=18,ht=40,kt=`${ht}px`,Ot=["[data-lastpass-icon-root]","com-1password-button","[data-dashlanecreated]",'[style$="2147483647 !important;"]'].join(",");function _t({containerRef:r,inputRef:s,pushPasswordManagerStrategy:e,isFocused:u}){let P=react__WEBPACK_IMPORTED_MODULE_0__.useRef({done:!1,refocused:!1}),[W,B]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),[z,Z]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),[j,H]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),V=react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>e==="none"?!1:(e==="increase-width"||e==="experimental-no-flickering")&&W&&z,[W,z,e]),c=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>{let v=r.current,m=s.current;if(!v||!m||j||e==="none")return;let E=v,A=E.getBoundingClientRect().left+E.offsetWidth,I=E.getBoundingClientRect().top+E.offsetHeight/2,a=A-At,k=I;if(!(document.querySelectorAll(Ot).length===0&&document.elementFromPoint(a,k)===v)&&(B(!0),H(!0),!P.current.refocused&&document.activeElement===m)){let d=[m.selectionStart,m.selectionEnd];m.blur(),m.focus(),m.setSelectionRange(d[0],d[1]),P.current.refocused=!0}},[r,s,j,e]);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{let v=r.current;if(!v||e==="none")return;function m(){let I=window.innerWidth-v.getBoundingClientRect().right;Z(I>=ht)}m();let E=setInterval(m,1e3);return()=>{clearInterval(E)}},[r,e]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{let v=u||document.activeElement===s.current;if(e==="none"||!v)return;let m=setTimeout(c,0),E=setTimeout(c,2e3),A=setTimeout(c,5e3),I=setTimeout(()=>{H(!0)},6e3);return()=>{clearTimeout(m),clearTimeout(E),clearTimeout(A),clearTimeout(I)}},[s,u,e,c]),{hasPWMBadge:W,willPushPWMBadge:V,PWM_BADGE_SPACE_WIDTH:kt}}var Gt=react__WEBPACK_IMPORTED_MODULE_0__.createContext({}),xt=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((m,v)=>{var E=m,{value:r,onChange:s,maxLength:e,textAlign:u="left",pattern:P=St,inputMode:W="numeric",onComplete:B,pushPasswordManagerStrategy:z="increase-width",containerClassName:Z,noScriptCSSFallback:j=jt,render:H,children:V}=E,c=gt(E,["value","onChange","maxLength","textAlign","pattern","inputMode","onComplete","pushPasswordManagerStrategy","containerClassName","noScriptCSSFallback","render","children"]);var at,it,lt,ut;let[A,I]=react__WEBPACK_IMPORTED_MODULE_0__.useState(typeof c.defaultValue=="string"?c.defaultValue:""),a=r!=null?r:A,k=Pt(a),O=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(t=>{s==null||s(t),I(t)},[s]),d=react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>P?typeof P=="string"?new RegExp(P):P:null,[P]),i=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),q=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),K=react__WEBPACK_IMPORTED_MODULE_0__.useRef({value:a,onChange:O,isIOS:typeof window!="undefined"&&((at=window==null?void 0:window.CSS)==null?void 0:at.supports("-webkit-touch-callout","none"))}),X=react__WEBPACK_IMPORTED_MODULE_0__.useRef({prev:[(it=i.current)==null?void 0:it.selectionStart,(lt=i.current)==null?void 0:lt.selectionEnd,(ut=i.current)==null?void 0:ut.selectionDirection]});react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle(v,()=>i.current,[]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{let t=i.current,o=q.current;if(!t||!o)return;K.current.value!==t.value&&K.current.onChange(t.value),X.current.prev=[t.selectionStart,t.selectionEnd,t.selectionDirection];function f(){if(document.activeElement!==t){N(null),$(null);return}let l=t.selectionStart,S=t.selectionEnd,_=t.selectionDirection,C=t.maxLength,D=t.value,b=X.current.prev,g=-1,w=-1,T;if(D.length!==0&&l!==null&&S!==null){let Ct=l===S,Dt=l===D.length&&D.length<C;if(Ct&&!Dt){let y=l;if(y===0)g=0,w=1,T="forward";else if(y===C)g=y-1,w=y,T="backward";else if(C>2&&D.length>2){let tt=0;if(b[0]!==null&&b[1]!==null){T=y<b[1]?"backward":"forward";let yt=b[0]===b[1]&&b[0]<C;T==="backward"&&!yt&&(tt=-1)}g=tt+y,w=tt+y+1}}g!==-1&&w!==-1&&g!==w&&i.current.setSelectionRange(g,w,T)}let dt=g!==-1?g:l,ft=w!==-1?w:S,Mt=T!=null?T:_;N(dt),$(ft),X.current.prev=[dt,ft,Mt]}if(document.addEventListener("selectionchange",f,{capture:!0}),f(),document.activeElement===t&&J(!0),!document.getElementById("input-otp-style")){let l=document.createElement("style");if(l.id="input-otp-style",document.head.appendChild(l),l.sheet){let S="background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";F(l.sheet,"[data-input-otp]::selection { background: transparent !important; }"),F(l.sheet,`[data-input-otp]:autofill { ${S} }`),F(l.sheet,`[data-input-otp]:-webkit-autofill { ${S} }`),F(l.sheet,"@supports (-webkit-touch-callout: none) { [data-input-otp] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"),F(l.sheet,"[data-input-otp] + * { pointer-events: all !important; }")}}let p=()=>{o&&o.style.setProperty("--root-height",`${t.clientHeight}px`)};p();let h=new ResizeObserver(p);return h.observe(t),()=>{document.removeEventListener("selectionchange",f,{capture:!0}),h.disconnect()}},[]);let[et,nt]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),[L,J]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),[M,N]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),[G,$]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null);react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{bt(()=>{var p,h,l,S;(p=i.current)==null||p.dispatchEvent(new Event("input"));let t=(h=i.current)==null?void 0:h.selectionStart,o=(l=i.current)==null?void 0:l.selectionEnd,f=(S=i.current)==null?void 0:S.selectionDirection;t!==null&&o!==null&&(N(t),$(o),X.current.prev=[t,o,f])})},[a,L]),react__WEBPACK_IMPORTED_MODULE_0__.useEffect(()=>{k!==void 0&&a!==k&&k.length<e&&a.length===e&&(B==null||B(a))},[e,B,k,a]);let x=_t({containerRef:q,inputRef:i,pushPasswordManagerStrategy:z,isFocused:L}),ot=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(t=>{let o=t.currentTarget.value.slice(0,e);if(o.length>0&&d&&!d.test(o)){t.preventDefault();return}O(o)},[e,O,d]),rt=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(()=>{var t;if(i.current){let o=Math.min(i.current.value.length,e-1),f=i.current.value.length;(t=i.current)==null||t.setSelectionRange(o,f),N(o),$(f)}J(!0)},[e]),st=react__WEBPACK_IMPORTED_MODULE_0__.useCallback(t=>{var b,g;let o=i.current;if(!K.current.isIOS||!t.clipboardData||!o)return;let f=t.clipboardData.getData("text/plain");t.preventDefault();let p=(b=i.current)==null?void 0:b.selectionStart,h=(g=i.current)==null?void 0:g.selectionEnd,_=(p!==h?a.slice(0,p)+f+a.slice(h):a.slice(0,p)+f+a.slice(p)).slice(0,e);if(_.length>0&&d&&!d.test(_))return;o.value=_,O(_);let C=Math.min(_.length,e-1),D=_.length;o.setSelectionRange(C,D),N(C),$(D)},[e,O,d,a]),wt=react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>({position:"relative",cursor:c.disabled?"default":"text",userSelect:"none",WebkitUserSelect:"none",pointerEvents:"none"}),[c.disabled]),ct=react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>({position:"absolute",inset:0,width:x.willPushPWMBadge?`calc(100% + ${x.PWM_BADGE_SPACE_WIDTH})`:"100%",clipPath:x.willPushPWMBadge?`inset(0 ${x.PWM_BADGE_SPACE_WIDTH} 0 0)`:void 0,height:"100%",display:"flex",textAlign:u,opacity:"1",color:"transparent",pointerEvents:"all",background:"transparent",caretColor:"transparent",border:"0 solid transparent",outline:"0 solid transparent",boxShadow:"none",lineHeight:"1",letterSpacing:"-.5em",fontSize:"var(--root-height)",fontFamily:"monospace",fontVariantNumeric:"tabular-nums"}),[x.PWM_BADGE_SPACE_WIDTH,x.willPushPWMBadge,u]),Tt=react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>react__WEBPACK_IMPORTED_MODULE_0__.createElement("input",Et(vt({autoComplete:c.autoComplete||"one-time-code"},c),{"data-input-otp":!0,"data-input-otp-mss":M,"data-input-otp-mse":G,inputMode:W,pattern:d==null?void 0:d.source,style:ct,maxLength:e,value:a,ref:i,onPaste:t=>{var o;st(t),(o=c.onPaste)==null||o.call(c,t)},onChange:ot,onMouseOver:t=>{var o;nt(!0),(o=c.onMouseOver)==null||o.call(c,t)},onMouseLeave:t=>{var o;nt(!1),(o=c.onMouseLeave)==null||o.call(c,t)},onFocus:t=>{var o;rt(),(o=c.onFocus)==null||o.call(c,t)},onBlur:t=>{var o;J(!1),(o=c.onBlur)==null||o.call(c,t)}})),[ot,rt,st,W,ct,e,G,M,c,d==null?void 0:d.source,a]),Q=react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>({slots:Array.from({length:e}).map((t,o)=>{let f=L&&M!==null&&G!==null&&(M===G&&o===M||o>=M&&o<G),p=a[o]!==void 0?a[o]:null;return{char:p,isActive:f,hasFakeCaret:f&&p===null}}),isFocused:L,isHovering:!c.disabled&&et}),[L,et,e,G,M,c.disabled,a]),It=react__WEBPACK_IMPORTED_MODULE_0__.useMemo(()=>H?H(Q):react__WEBPACK_IMPORTED_MODULE_0__.createElement(Gt.Provider,{value:Q},V),[V,Q,H]);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,j!==null&&react__WEBPACK_IMPORTED_MODULE_0__.createElement("noscript",null,react__WEBPACK_IMPORTED_MODULE_0__.createElement("style",null,j)),react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{ref:q,"data-input-otp-container":!0,style:wt,className:Z},It,react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{style:{position:"absolute",inset:0,pointerEvents:"none"}},Tt)))});xt.displayName="Input";function F(r,s){try{r.insertRule(s)}catch(e){console.error("input-otp could not insert CSS rule:",s)}}var jt=`
[data-input-otp] {
  --nojs-bg: white !important;
  --nojs-fg: black !important;

  background-color: var(--nojs-bg) !important;
  color: var(--nojs-fg) !important;
  caret-color: var(--nojs-fg) !important;
  letter-spacing: .25em !important;
  text-align: center !important;
  border: 1px solid var(--nojs-fg) !important;
  border-radius: 4px !important;
  width: 100% !important;
}
@media (prefers-color-scheme: dark) {
  [data-input-otp] {
    --nojs-bg: black !important;
    --nojs-fg: white !important;
  }
}`;
//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ 11132:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Minus)
/* harmony export */ });
/* harmony import */ var _createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85721);
/**
 * @license lucide-react v0.359.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ 
const Minus = (0,_createLucideIcon_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)("Minus", [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ]
]);
 //# sourceMappingURL=minus.js.map


/***/ })

};
;