function Uu(e,t){for(var n=0;n<t.length;n++){const a=t[n];if(typeof a!="string"&&!Array.isArray(a)){for(const i in a)if(i!=="default"&&!(i in e)){const l=Object.getOwnPropertyDescriptor(a,i);l&&Object.defineProperty(e,i,l.get?l:{enumerable:!0,get:()=>a[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const o of l.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(i){if(i.ep)return;i.ep=!0;const l=n(i);fetch(i.href,l)}})();function Vu(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var vs={exports:{}},di={},Is={exports:{}},R={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ia=Symbol.for("react.element"),$u=Symbol.for("react.portal"),Zu=Symbol.for("react.fragment"),Qu=Symbol.for("react.strict_mode"),Ju=Symbol.for("react.profiler"),ef=Symbol.for("react.provider"),tf=Symbol.for("react.context"),nf=Symbol.for("react.forward_ref"),af=Symbol.for("react.suspense"),lf=Symbol.for("react.memo"),of=Symbol.for("react.lazy"),ir=Symbol.iterator;function rf(e){return e===null||typeof e!="object"?null:(e=ir&&e[ir]||e["@@iterator"],typeof e=="function"?e:null)}var Ls={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Os=Object.assign,Ps={};function fn(e,t,n){this.props=e,this.context=t,this.refs=Ps,this.updater=n||Ls}fn.prototype.isReactComponent={};fn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};fn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Cs(){}Cs.prototype=fn.prototype;function io(e,t,n){this.props=e,this.context=t,this.refs=Ps,this.updater=n||Ls}var lo=io.prototype=new Cs;lo.constructor=io;Os(lo,fn.prototype);lo.isPureReactComponent=!0;var lr=Array.isArray,Ns=Object.prototype.hasOwnProperty,oo={current:null},ws={key:!0,ref:!0,__self:!0,__source:!0};function ks(e,t,n){var a,i={},l=null,o=null;if(t!=null)for(a in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(l=""+t.key),t)Ns.call(t,a)&&!ws.hasOwnProperty(a)&&(i[a]=t[a]);var r=arguments.length-2;if(r===1)i.children=n;else if(1<r){for(var s=Array(r),p=0;p<r;p++)s[p]=arguments[p+2];i.children=s}if(e&&e.defaultProps)for(a in r=e.defaultProps,r)i[a]===void 0&&(i[a]=r[a]);return{$$typeof:ia,type:e,key:l,ref:o,props:i,_owner:oo.current}}function sf(e,t){return{$$typeof:ia,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ro(e){return typeof e=="object"&&e!==null&&e.$$typeof===ia}function pf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var or=/\/+/g;function Mi(e,t){return typeof e=="object"&&e!==null&&e.key!=null?pf(""+e.key):t.toString(36)}function wa(e,t,n,a,i){var l=typeof e;(l==="undefined"||l==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(l){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ia:case $u:o=!0}}if(o)return o=e,i=i(o),e=a===""?"."+Mi(o,0):a,lr(i)?(n="",e!=null&&(n=e.replace(or,"$&/")+"/"),wa(i,t,n,"",function(p){return p})):i!=null&&(ro(i)&&(i=sf(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(or,"$&/")+"/")+e)),t.push(i)),1;if(o=0,a=a===""?".":a+":",lr(e))for(var r=0;r<e.length;r++){l=e[r];var s=a+Mi(l,r);o+=wa(l,t,n,s,i)}else if(s=rf(e),typeof s=="function")for(e=s.call(e),r=0;!(l=e.next()).done;)l=l.value,s=a+Mi(l,r++),o+=wa(l,t,n,s,i);else if(l==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function ca(e,t,n){if(e==null)return e;var a=[],i=0;return wa(e,a,"","",function(l){return t.call(n,l,i++)}),a}function uf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var pe={current:null},ka={transition:null},ff={ReactCurrentDispatcher:pe,ReactCurrentBatchConfig:ka,ReactCurrentOwner:oo};function Fs(){throw Error("act(...) is not supported in production builds of React.")}R.Children={map:ca,forEach:function(e,t,n){ca(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ca(e,function(){t++}),t},toArray:function(e){return ca(e,function(t){return t})||[]},only:function(e){if(!ro(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};R.Component=fn;R.Fragment=Zu;R.Profiler=Ju;R.PureComponent=io;R.StrictMode=Qu;R.Suspense=af;R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ff;R.act=Fs;R.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=Os({},e.props),i=e.key,l=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(l=t.ref,o=oo.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var r=e.type.defaultProps;for(s in t)Ns.call(t,s)&&!ws.hasOwnProperty(s)&&(a[s]=t[s]===void 0&&r!==void 0?r[s]:t[s])}var s=arguments.length-2;if(s===1)a.children=n;else if(1<s){r=Array(s);for(var p=0;p<s;p++)r[p]=arguments[p+2];a.children=r}return{$$typeof:ia,type:e.type,key:i,ref:l,props:a,_owner:o}};R.createContext=function(e){return e={$$typeof:tf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ef,_context:e},e.Consumer=e};R.createElement=ks;R.createFactory=function(e){var t=ks.bind(null,e);return t.type=e,t};R.createRef=function(){return{current:null}};R.forwardRef=function(e){return{$$typeof:nf,render:e}};R.isValidElement=ro;R.lazy=function(e){return{$$typeof:of,_payload:{_status:-1,_result:e},_init:uf}};R.memo=function(e,t){return{$$typeof:lf,type:e,compare:t===void 0?null:t}};R.startTransition=function(e){var t=ka.transition;ka.transition={};try{e()}finally{ka.transition=t}};R.unstable_act=Fs;R.useCallback=function(e,t){return pe.current.useCallback(e,t)};R.useContext=function(e){return pe.current.useContext(e)};R.useDebugValue=function(){};R.useDeferredValue=function(e){return pe.current.useDeferredValue(e)};R.useEffect=function(e,t){return pe.current.useEffect(e,t)};R.useId=function(){return pe.current.useId()};R.useImperativeHandle=function(e,t,n){return pe.current.useImperativeHandle(e,t,n)};R.useInsertionEffect=function(e,t){return pe.current.useInsertionEffect(e,t)};R.useLayoutEffect=function(e,t){return pe.current.useLayoutEffect(e,t)};R.useMemo=function(e,t){return pe.current.useMemo(e,t)};R.useReducer=function(e,t,n){return pe.current.useReducer(e,t,n)};R.useRef=function(e){return pe.current.useRef(e)};R.useState=function(e){return pe.current.useState(e)};R.useSyncExternalStore=function(e,t,n){return pe.current.useSyncExternalStore(e,t,n)};R.useTransition=function(){return pe.current.useTransition()};R.version="18.3.1";Is.exports=R;var I=Is.exports;const Rs=Vu(I),cf=Uu({__proto__:null,default:Rs},[I]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var df=I,mf=Symbol.for("react.element"),hf=Symbol.for("react.fragment"),gf=Object.prototype.hasOwnProperty,xf=df.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yf={key:!0,ref:!0,__self:!0,__source:!0};function zs(e,t,n){var a,i={},l=null,o=null;n!==void 0&&(l=""+n),t.key!==void 0&&(l=""+t.key),t.ref!==void 0&&(o=t.ref);for(a in t)gf.call(t,a)&&!yf.hasOwnProperty(a)&&(i[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps,t)i[a]===void 0&&(i[a]=t[a]);return{$$typeof:mf,type:e,key:l,ref:o,props:i,_owner:xf.current}}di.Fragment=hf;di.jsx=zs;di.jsxs=zs;vs.exports=di;var S=vs.exports,rl={},Ms={exports:{}},Te={},Ds={exports:{}},As={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(P,k){var F=P.length;P.push(k);e:for(;0<F;){var G=F-1>>>1,Z=P[G];if(0<i(Z,k))P[G]=k,P[F]=Z,F=G;else break e}}function n(P){return P.length===0?null:P[0]}function a(P){if(P.length===0)return null;var k=P[0],F=P.pop();if(F!==k){P[0]=F;e:for(var G=0,Z=P.length,ua=Z>>>1;G<ua;){var St=2*(G+1)-1,zi=P[St],vt=St+1,fa=P[vt];if(0>i(zi,F))vt<Z&&0>i(fa,zi)?(P[G]=fa,P[vt]=F,G=vt):(P[G]=zi,P[St]=F,G=St);else if(vt<Z&&0>i(fa,F))P[G]=fa,P[vt]=F,G=vt;else break e}}return k}function i(P,k){var F=P.sortIndex-k.sortIndex;return F!==0?F:P.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;e.unstable_now=function(){return l.now()}}else{var o=Date,r=o.now();e.unstable_now=function(){return o.now()-r}}var s=[],p=[],m=1,f=null,h=3,b=!1,y=!1,g=!1,v=typeof setTimeout=="function"?setTimeout:null,c=typeof clearTimeout=="function"?clearTimeout:null,u=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function d(P){for(var k=n(p);k!==null;){if(k.callback===null)a(p);else if(k.startTime<=P)a(p),k.sortIndex=k.expirationTime,t(s,k);else break;k=n(p)}}function x(P){if(g=!1,d(P),!y)if(n(s)!==null)y=!0,Fi(L);else{var k=n(p);k!==null&&Ri(x,k.startTime-P)}}function L(P,k){y=!1,g&&(g=!1,c(w),w=-1),b=!0;var F=h;try{for(d(k),f=n(s);f!==null&&(!(f.expirationTime>k)||P&&!Ne());){var G=f.callback;if(typeof G=="function"){f.callback=null,h=f.priorityLevel;var Z=G(f.expirationTime<=k);k=e.unstable_now(),typeof Z=="function"?f.callback=Z:f===n(s)&&a(s),d(k)}else a(s);f=n(s)}if(f!==null)var ua=!0;else{var St=n(p);St!==null&&Ri(x,St.startTime-k),ua=!1}return ua}finally{f=null,h=F,b=!1}}var C=!1,N=null,w=-1,W=5,z=-1;function Ne(){return!(e.unstable_now()-z<W)}function hn(){if(N!==null){var P=e.unstable_now();z=P;var k=!0;try{k=N(!0,P)}finally{k?gn():(C=!1,N=null)}}else C=!1}var gn;if(typeof u=="function")gn=function(){u(hn)};else if(typeof MessageChannel<"u"){var ar=new MessageChannel,Ku=ar.port2;ar.port1.onmessage=hn,gn=function(){Ku.postMessage(null)}}else gn=function(){v(hn,0)};function Fi(P){N=P,C||(C=!0,gn())}function Ri(P,k){w=v(function(){P(e.unstable_now())},k)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(P){P.callback=null},e.unstable_continueExecution=function(){y||b||(y=!0,Fi(L))},e.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<P?Math.floor(1e3/P):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(P){switch(h){case 1:case 2:case 3:var k=3;break;default:k=h}var F=h;h=k;try{return P()}finally{h=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(P,k){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var F=h;h=P;try{return k()}finally{h=F}},e.unstable_scheduleCallback=function(P,k,F){var G=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?G+F:G):F=G,P){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=F+Z,P={id:m++,callback:k,priorityLevel:P,startTime:F,expirationTime:Z,sortIndex:-1},F>G?(P.sortIndex=F,t(p,P),n(s)===null&&P===n(p)&&(g?(c(w),w=-1):g=!0,Ri(x,F-G))):(P.sortIndex=Z,t(s,P),y||b||(y=!0,Fi(L))),P},e.unstable_shouldYield=Ne,e.unstable_wrapCallback=function(P){var k=h;return function(){var F=h;h=k;try{return P.apply(this,arguments)}finally{h=F}}}})(As);Ds.exports=As;var bf=Ds.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tf=I,be=bf;function T(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var _s=new Set,Yn={};function Dt(e,t){an(e,t),an(e+"Capture",t)}function an(e,t){for(Yn[e]=t,e=0;e<t.length;e++)_s.add(t[e])}var He=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),sl=Object.prototype.hasOwnProperty,Sf=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,rr={},sr={};function vf(e){return sl.call(sr,e)?!0:sl.call(rr,e)?!1:Sf.test(e)?sr[e]=!0:(rr[e]=!0,!1)}function If(e,t,n,a){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return a?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Lf(e,t,n,a){if(t===null||typeof t>"u"||If(e,t,n,a))return!0;if(a)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function ue(e,t,n,a,i,l,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=a,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=l,this.removeEmptyString=o}var ne={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){ne[e]=new ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];ne[t]=new ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){ne[e]=new ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){ne[e]=new ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){ne[e]=new ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){ne[e]=new ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){ne[e]=new ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){ne[e]=new ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){ne[e]=new ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var so=/[\-:]([a-z])/g;function po(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(so,po);ne[t]=new ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(so,po);ne[t]=new ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(so,po);ne[t]=new ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){ne[e]=new ue(e,1,!1,e.toLowerCase(),null,!1,!1)});ne.xlinkHref=new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){ne[e]=new ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function uo(e,t,n,a){var i=ne.hasOwnProperty(t)?ne[t]:null;(i!==null?i.type!==0:a||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Lf(t,n,i,a)&&(n=null),a||i===null?vf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,a=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,a?e.setAttributeNS(a,t,n):e.setAttribute(t,n))))}var $e=Tf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,da=Symbol.for("react.element"),Yt=Symbol.for("react.portal"),qt=Symbol.for("react.fragment"),fo=Symbol.for("react.strict_mode"),pl=Symbol.for("react.profiler"),Es=Symbol.for("react.provider"),Ys=Symbol.for("react.context"),co=Symbol.for("react.forward_ref"),ul=Symbol.for("react.suspense"),fl=Symbol.for("react.suspense_list"),mo=Symbol.for("react.memo"),Je=Symbol.for("react.lazy"),qs=Symbol.for("react.offscreen"),pr=Symbol.iterator;function xn(e){return e===null||typeof e!="object"?null:(e=pr&&e[pr]||e["@@iterator"],typeof e=="function"?e:null)}var B=Object.assign,Di;function On(e){if(Di===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Di=t&&t[1]||""}return`
`+Di+e}var Ai=!1;function _i(e,t){if(!e||Ai)return"";Ai=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(p){var a=p}Reflect.construct(e,[],t)}else{try{t.call()}catch(p){a=p}e.call(t.prototype)}else{try{throw Error()}catch(p){a=p}e()}}catch(p){if(p&&a&&typeof p.stack=="string"){for(var i=p.stack.split(`
`),l=a.stack.split(`
`),o=i.length-1,r=l.length-1;1<=o&&0<=r&&i[o]!==l[r];)r--;for(;1<=o&&0<=r;o--,r--)if(i[o]!==l[r]){if(o!==1||r!==1)do if(o--,r--,0>r||i[o]!==l[r]){var s=`
`+i[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=o&&0<=r);break}}}finally{Ai=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?On(e):""}function Of(e){switch(e.tag){case 5:return On(e.type);case 16:return On("Lazy");case 13:return On("Suspense");case 19:return On("SuspenseList");case 0:case 2:case 15:return e=_i(e.type,!1),e;case 11:return e=_i(e.type.render,!1),e;case 1:return e=_i(e.type,!0),e;default:return""}}function cl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case qt:return"Fragment";case Yt:return"Portal";case pl:return"Profiler";case fo:return"StrictMode";case ul:return"Suspense";case fl:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Ys:return(e.displayName||"Context")+".Consumer";case Es:return(e._context.displayName||"Context")+".Provider";case co:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case mo:return t=e.displayName||null,t!==null?t:cl(e.type)||"Memo";case Je:t=e._payload,e=e._init;try{return cl(e(t))}catch{}}return null}function Pf(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return cl(t);case 8:return t===fo?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ht(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function js(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Cf(e){var t=js(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),a=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){a=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ma(e){e._valueTracker||(e._valueTracker=Cf(e))}function Bs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),a="";return e&&(a=js(e)?e.checked?"true":"false":e.value),e=a,e!==n?(t.setValue(e),!0):!1}function Ba(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function dl(e,t){var n=t.checked;return B({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function ur(e,t){var n=t.defaultValue==null?"":t.defaultValue,a=t.checked!=null?t.checked:t.defaultChecked;n=ht(t.value!=null?t.value:n),e._wrapperState={initialChecked:a,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Xs(e,t){t=t.checked,t!=null&&uo(e,"checked",t,!1)}function ml(e,t){Xs(e,t);var n=ht(t.value),a=t.type;if(n!=null)a==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(a==="submit"||a==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?hl(e,t.type,n):t.hasOwnProperty("defaultValue")&&hl(e,t.type,ht(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function fr(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var a=t.type;if(!(a!=="submit"&&a!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function hl(e,t,n){(t!=="number"||Ba(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Pn=Array.isArray;function Zt(e,t,n,a){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&a&&(e[n].defaultSelected=!0)}else{for(n=""+ht(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,a&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function gl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(T(91));return B({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cr(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(T(92));if(Pn(n)){if(1<n.length)throw Error(T(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ht(n)}}function Ws(e,t){var n=ht(t.value),a=ht(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),a!=null&&(e.defaultValue=""+a)}function dr(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Gs(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Gs(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ha,Hs=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,a,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,a,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ha=ha||document.createElement("div"),ha.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ha.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function qn(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var kn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Nf=["Webkit","ms","Moz","O"];Object.keys(kn).forEach(function(e){Nf.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),kn[t]=kn[e]})});function Ks(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||kn.hasOwnProperty(e)&&kn[e]?(""+t).trim():t+"px"}function Us(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var a=n.indexOf("--")===0,i=Ks(n,t[n],a);n==="float"&&(n="cssFloat"),a?e.setProperty(n,i):e[n]=i}}var wf=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yl(e,t){if(t){if(wf[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(T(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(T(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(T(61))}if(t.style!=null&&typeof t.style!="object")throw Error(T(62))}}function bl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tl=null;function ho(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Sl=null,Qt=null,Jt=null;function mr(e){if(e=ra(e)){if(typeof Sl!="function")throw Error(T(280));var t=e.stateNode;t&&(t=yi(t),Sl(e.stateNode,e.type,t))}}function Vs(e){Qt?Jt?Jt.push(e):Jt=[e]:Qt=e}function $s(){if(Qt){var e=Qt,t=Jt;if(Jt=Qt=null,mr(e),t)for(e=0;e<t.length;e++)mr(t[e])}}function Zs(e,t){return e(t)}function Qs(){}var Ei=!1;function Js(e,t,n){if(Ei)return e(t,n);Ei=!0;try{return Zs(e,t,n)}finally{Ei=!1,(Qt!==null||Jt!==null)&&(Qs(),$s())}}function jn(e,t){var n=e.stateNode;if(n===null)return null;var a=yi(n);if(a===null)return null;n=a[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(e=e.type,a=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!a;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(T(231,t,typeof n));return n}var vl=!1;if(He)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){vl=!0}}),window.addEventListener("test",yn,yn),window.removeEventListener("test",yn,yn)}catch{vl=!1}function kf(e,t,n,a,i,l,o,r,s){var p=Array.prototype.slice.call(arguments,3);try{t.apply(n,p)}catch(m){this.onError(m)}}var Fn=!1,Xa=null,Wa=!1,Il=null,Ff={onError:function(e){Fn=!0,Xa=e}};function Rf(e,t,n,a,i,l,o,r,s){Fn=!1,Xa=null,kf.apply(Ff,arguments)}function zf(e,t,n,a,i,l,o,r,s){if(Rf.apply(this,arguments),Fn){if(Fn){var p=Xa;Fn=!1,Xa=null}else throw Error(T(198));Wa||(Wa=!0,Il=p)}}function At(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ep(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function hr(e){if(At(e)!==e)throw Error(T(188))}function Mf(e){var t=e.alternate;if(!t){if(t=At(e),t===null)throw Error(T(188));return t!==e?null:e}for(var n=e,a=t;;){var i=n.return;if(i===null)break;var l=i.alternate;if(l===null){if(a=i.return,a!==null){n=a;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===n)return hr(i),e;if(l===a)return hr(i),t;l=l.sibling}throw Error(T(188))}if(n.return!==a.return)n=i,a=l;else{for(var o=!1,r=i.child;r;){if(r===n){o=!0,n=i,a=l;break}if(r===a){o=!0,a=i,n=l;break}r=r.sibling}if(!o){for(r=l.child;r;){if(r===n){o=!0,n=l,a=i;break}if(r===a){o=!0,a=l,n=i;break}r=r.sibling}if(!o)throw Error(T(189))}}if(n.alternate!==a)throw Error(T(190))}if(n.tag!==3)throw Error(T(188));return n.stateNode.current===n?e:t}function tp(e){return e=Mf(e),e!==null?np(e):null}function np(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=np(e);if(t!==null)return t;e=e.sibling}return null}var ap=be.unstable_scheduleCallback,gr=be.unstable_cancelCallback,Df=be.unstable_shouldYield,Af=be.unstable_requestPaint,H=be.unstable_now,_f=be.unstable_getCurrentPriorityLevel,go=be.unstable_ImmediatePriority,ip=be.unstable_UserBlockingPriority,Ga=be.unstable_NormalPriority,Ef=be.unstable_LowPriority,lp=be.unstable_IdlePriority,mi=null,Ye=null;function Yf(e){if(Ye&&typeof Ye.onCommitFiberRoot=="function")try{Ye.onCommitFiberRoot(mi,e,void 0,(e.current.flags&128)===128)}catch{}}var ze=Math.clz32?Math.clz32:Bf,qf=Math.log,jf=Math.LN2;function Bf(e){return e>>>=0,e===0?32:31-(qf(e)/jf|0)|0}var ga=64,xa=4194304;function Cn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ha(e,t){var n=e.pendingLanes;if(n===0)return 0;var a=0,i=e.suspendedLanes,l=e.pingedLanes,o=n&268435455;if(o!==0){var r=o&~i;r!==0?a=Cn(r):(l&=o,l!==0&&(a=Cn(l)))}else o=n&~i,o!==0?a=Cn(o):l!==0&&(a=Cn(l));if(a===0)return 0;if(t!==0&&t!==a&&!(t&i)&&(i=a&-a,l=t&-t,i>=l||i===16&&(l&4194240)!==0))return t;if(a&4&&(a|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=a;0<t;)n=31-ze(t),i=1<<n,a|=e[n],t&=~i;return a}function Xf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wf(e,t){for(var n=e.suspendedLanes,a=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes;0<l;){var o=31-ze(l),r=1<<o,s=i[o];s===-1?(!(r&n)||r&a)&&(i[o]=Xf(r,t)):s<=t&&(e.expiredLanes|=r),l&=~r}}function Ll(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function op(){var e=ga;return ga<<=1,!(ga&4194240)&&(ga=64),e}function Yi(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function la(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-ze(t),e[t]=n}function Gf(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var a=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-ze(n),l=1<<i;t[i]=0,a[i]=-1,e[i]=-1,n&=~l}}function xo(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var a=31-ze(n),i=1<<a;i&t|e[a]&t&&(e[a]|=t),n&=~i}}var D=0;function rp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var sp,yo,pp,up,fp,Ol=!1,ya=[],ot=null,rt=null,st=null,Bn=new Map,Xn=new Map,tt=[],Hf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xr(e,t){switch(e){case"focusin":case"focusout":ot=null;break;case"dragenter":case"dragleave":rt=null;break;case"mouseover":case"mouseout":st=null;break;case"pointerover":case"pointerout":Bn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Xn.delete(t.pointerId)}}function bn(e,t,n,a,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:n,eventSystemFlags:a,nativeEvent:l,targetContainers:[i]},t!==null&&(t=ra(t),t!==null&&yo(t)),e):(e.eventSystemFlags|=a,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Kf(e,t,n,a,i){switch(t){case"focusin":return ot=bn(ot,e,t,n,a,i),!0;case"dragenter":return rt=bn(rt,e,t,n,a,i),!0;case"mouseover":return st=bn(st,e,t,n,a,i),!0;case"pointerover":var l=i.pointerId;return Bn.set(l,bn(Bn.get(l)||null,e,t,n,a,i)),!0;case"gotpointercapture":return l=i.pointerId,Xn.set(l,bn(Xn.get(l)||null,e,t,n,a,i)),!0}return!1}function cp(e){var t=Ot(e.target);if(t!==null){var n=At(t);if(n!==null){if(t=n.tag,t===13){if(t=ep(n),t!==null){e.blockedOn=t,fp(e.priority,function(){pp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Fa(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Pl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var a=new n.constructor(n.type,n);Tl=a,n.target.dispatchEvent(a),Tl=null}else return t=ra(n),t!==null&&yo(t),e.blockedOn=n,!1;t.shift()}return!0}function yr(e,t,n){Fa(e)&&n.delete(t)}function Uf(){Ol=!1,ot!==null&&Fa(ot)&&(ot=null),rt!==null&&Fa(rt)&&(rt=null),st!==null&&Fa(st)&&(st=null),Bn.forEach(yr),Xn.forEach(yr)}function Tn(e,t){e.blockedOn===t&&(e.blockedOn=null,Ol||(Ol=!0,be.unstable_scheduleCallback(be.unstable_NormalPriority,Uf)))}function Wn(e){function t(i){return Tn(i,e)}if(0<ya.length){Tn(ya[0],e);for(var n=1;n<ya.length;n++){var a=ya[n];a.blockedOn===e&&(a.blockedOn=null)}}for(ot!==null&&Tn(ot,e),rt!==null&&Tn(rt,e),st!==null&&Tn(st,e),Bn.forEach(t),Xn.forEach(t),n=0;n<tt.length;n++)a=tt[n],a.blockedOn===e&&(a.blockedOn=null);for(;0<tt.length&&(n=tt[0],n.blockedOn===null);)cp(n),n.blockedOn===null&&tt.shift()}var en=$e.ReactCurrentBatchConfig,Ka=!0;function Vf(e,t,n,a){var i=D,l=en.transition;en.transition=null;try{D=1,bo(e,t,n,a)}finally{D=i,en.transition=l}}function $f(e,t,n,a){var i=D,l=en.transition;en.transition=null;try{D=4,bo(e,t,n,a)}finally{D=i,en.transition=l}}function bo(e,t,n,a){if(Ka){var i=Pl(e,t,n,a);if(i===null)Vi(e,t,a,Ua,n),xr(e,a);else if(Kf(i,e,t,n,a))a.stopPropagation();else if(xr(e,a),t&4&&-1<Hf.indexOf(e)){for(;i!==null;){var l=ra(i);if(l!==null&&sp(l),l=Pl(e,t,n,a),l===null&&Vi(e,t,a,Ua,n),l===i)break;i=l}i!==null&&a.stopPropagation()}else Vi(e,t,a,null,n)}}var Ua=null;function Pl(e,t,n,a){if(Ua=null,e=ho(a),e=Ot(e),e!==null)if(t=At(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ep(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ua=e,null}function dp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(_f()){case go:return 1;case ip:return 4;case Ga:case Ef:return 16;case lp:return 536870912;default:return 16}default:return 16}}var at=null,To=null,Ra=null;function mp(){if(Ra)return Ra;var e,t=To,n=t.length,a,i="value"in at?at.value:at.textContent,l=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(a=1;a<=o&&t[n-a]===i[l-a];a++);return Ra=i.slice(e,1<a?1-a:void 0)}function za(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ba(){return!0}function br(){return!1}function Se(e){function t(n,a,i,l,o){this._reactName=n,this._targetInst=i,this.type=a,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var r in e)e.hasOwnProperty(r)&&(n=e[r],this[r]=n?n(l):l[r]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?ba:br,this.isPropagationStopped=br,this}return B(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ba)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ba)},persist:function(){},isPersistent:ba}),t}var cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},So=Se(cn),oa=B({},cn,{view:0,detail:0}),Zf=Se(oa),qi,ji,Sn,hi=B({},oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Sn&&(Sn&&e.type==="mousemove"?(qi=e.screenX-Sn.screenX,ji=e.screenY-Sn.screenY):ji=qi=0,Sn=e),qi)},movementY:function(e){return"movementY"in e?e.movementY:ji}}),Tr=Se(hi),Qf=B({},hi,{dataTransfer:0}),Jf=Se(Qf),ec=B({},oa,{relatedTarget:0}),Bi=Se(ec),tc=B({},cn,{animationName:0,elapsedTime:0,pseudoElement:0}),nc=Se(tc),ac=B({},cn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),ic=Se(ac),lc=B({},cn,{data:0}),Sr=Se(lc),oc={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rc={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},sc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pc(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=sc[e])?!!t[e]:!1}function vo(){return pc}var uc=B({},oa,{key:function(e){if(e.key){var t=oc[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=za(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?rc[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vo,charCode:function(e){return e.type==="keypress"?za(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?za(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),fc=Se(uc),cc=B({},hi,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vr=Se(cc),dc=B({},oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vo}),mc=Se(dc),hc=B({},cn,{propertyName:0,elapsedTime:0,pseudoElement:0}),gc=Se(hc),xc=B({},hi,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),yc=Se(xc),bc=[9,13,27,32],Io=He&&"CompositionEvent"in window,Rn=null;He&&"documentMode"in document&&(Rn=document.documentMode);var Tc=He&&"TextEvent"in window&&!Rn,hp=He&&(!Io||Rn&&8<Rn&&11>=Rn),Ir=" ",Lr=!1;function gp(e,t){switch(e){case"keyup":return bc.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xp(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var jt=!1;function Sc(e,t){switch(e){case"compositionend":return xp(t);case"keypress":return t.which!==32?null:(Lr=!0,Ir);case"textInput":return e=t.data,e===Ir&&Lr?null:e;default:return null}}function vc(e,t){if(jt)return e==="compositionend"||!Io&&gp(e,t)?(e=mp(),Ra=To=at=null,jt=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return hp&&t.locale!=="ko"?null:t.data;default:return null}}var Ic={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Or(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ic[e.type]:t==="textarea"}function yp(e,t,n,a){Vs(a),t=Va(t,"onChange"),0<t.length&&(n=new So("onChange","change",null,n,a),e.push({event:n,listeners:t}))}var zn=null,Gn=null;function Lc(e){wp(e,0)}function gi(e){var t=Wt(e);if(Bs(t))return e}function Oc(e,t){if(e==="change")return t}var bp=!1;if(He){var Xi;if(He){var Wi="oninput"in document;if(!Wi){var Pr=document.createElement("div");Pr.setAttribute("oninput","return;"),Wi=typeof Pr.oninput=="function"}Xi=Wi}else Xi=!1;bp=Xi&&(!document.documentMode||9<document.documentMode)}function Cr(){zn&&(zn.detachEvent("onpropertychange",Tp),Gn=zn=null)}function Tp(e){if(e.propertyName==="value"&&gi(Gn)){var t=[];yp(t,Gn,e,ho(e)),Js(Lc,t)}}function Pc(e,t,n){e==="focusin"?(Cr(),zn=t,Gn=n,zn.attachEvent("onpropertychange",Tp)):e==="focusout"&&Cr()}function Cc(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return gi(Gn)}function Nc(e,t){if(e==="click")return gi(t)}function wc(e,t){if(e==="input"||e==="change")return gi(t)}function kc(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var De=typeof Object.is=="function"?Object.is:kc;function Hn(e,t){if(De(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),a=Object.keys(t);if(n.length!==a.length)return!1;for(a=0;a<n.length;a++){var i=n[a];if(!sl.call(t,i)||!De(e[i],t[i]))return!1}return!0}function Nr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function wr(e,t){var n=Nr(e);e=0;for(var a;n;){if(n.nodeType===3){if(a=e+n.textContent.length,e<=t&&a>=t)return{node:n,offset:t-e};e=a}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Nr(n)}}function Sp(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Sp(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function vp(){for(var e=window,t=Ba();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ba(e.document)}return t}function Lo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Fc(e){var t=vp(),n=e.focusedElem,a=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Sp(n.ownerDocument.documentElement,n)){if(a!==null&&Lo(n)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,l=Math.min(a.start,i);a=a.end===void 0?l:Math.min(a.end,i),!e.extend&&l>a&&(i=a,a=l,l=i),i=wr(n,l);var o=wr(n,a);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),l>a?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Rc=He&&"documentMode"in document&&11>=document.documentMode,Bt=null,Cl=null,Mn=null,Nl=!1;function kr(e,t,n){var a=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Nl||Bt==null||Bt!==Ba(a)||(a=Bt,"selectionStart"in a&&Lo(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),Mn&&Hn(Mn,a)||(Mn=a,a=Va(Cl,"onSelect"),0<a.length&&(t=new So("onSelect","select",null,t,n),e.push({event:t,listeners:a}),t.target=Bt)))}function Ta(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Xt={animationend:Ta("Animation","AnimationEnd"),animationiteration:Ta("Animation","AnimationIteration"),animationstart:Ta("Animation","AnimationStart"),transitionend:Ta("Transition","TransitionEnd")},Gi={},Ip={};He&&(Ip=document.createElement("div").style,"AnimationEvent"in window||(delete Xt.animationend.animation,delete Xt.animationiteration.animation,delete Xt.animationstart.animation),"TransitionEvent"in window||delete Xt.transitionend.transition);function xi(e){if(Gi[e])return Gi[e];if(!Xt[e])return e;var t=Xt[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ip)return Gi[e]=t[n];return e}var Lp=xi("animationend"),Op=xi("animationiteration"),Pp=xi("animationstart"),Cp=xi("transitionend"),Np=new Map,Fr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xt(e,t){Np.set(e,t),Dt(t,[e])}for(var Hi=0;Hi<Fr.length;Hi++){var Ki=Fr[Hi],zc=Ki.toLowerCase(),Mc=Ki[0].toUpperCase()+Ki.slice(1);xt(zc,"on"+Mc)}xt(Lp,"onAnimationEnd");xt(Op,"onAnimationIteration");xt(Pp,"onAnimationStart");xt("dblclick","onDoubleClick");xt("focusin","onFocus");xt("focusout","onBlur");xt(Cp,"onTransitionEnd");an("onMouseEnter",["mouseout","mouseover"]);an("onMouseLeave",["mouseout","mouseover"]);an("onPointerEnter",["pointerout","pointerover"]);an("onPointerLeave",["pointerout","pointerover"]);Dt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Dt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Dt("onBeforeInput",["compositionend","keypress","textInput","paste"]);Dt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Dt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Nn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dc=new Set("cancel close invalid load scroll toggle".split(" ").concat(Nn));function Rr(e,t,n){var a=e.type||"unknown-event";e.currentTarget=n,zf(a,t,void 0,e),e.currentTarget=null}function wp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var a=e[n],i=a.event;a=a.listeners;e:{var l=void 0;if(t)for(var o=a.length-1;0<=o;o--){var r=a[o],s=r.instance,p=r.currentTarget;if(r=r.listener,s!==l&&i.isPropagationStopped())break e;Rr(i,r,p),l=s}else for(o=0;o<a.length;o++){if(r=a[o],s=r.instance,p=r.currentTarget,r=r.listener,s!==l&&i.isPropagationStopped())break e;Rr(i,r,p),l=s}}}if(Wa)throw e=Il,Wa=!1,Il=null,e}function _(e,t){var n=t[zl];n===void 0&&(n=t[zl]=new Set);var a=e+"__bubble";n.has(a)||(kp(t,e,2,!1),n.add(a))}function Ui(e,t,n){var a=0;t&&(a|=4),kp(n,e,a,t)}var Sa="_reactListening"+Math.random().toString(36).slice(2);function Kn(e){if(!e[Sa]){e[Sa]=!0,_s.forEach(function(n){n!=="selectionchange"&&(Dc.has(n)||Ui(n,!1,e),Ui(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Sa]||(t[Sa]=!0,Ui("selectionchange",!1,t))}}function kp(e,t,n,a){switch(dp(t)){case 1:var i=Vf;break;case 4:i=$f;break;default:i=bo}n=i.bind(null,t,n,e),i=void 0,!vl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),a?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Vi(e,t,n,a,i){var l=a;if(!(t&1)&&!(t&2)&&a!==null)e:for(;;){if(a===null)return;var o=a.tag;if(o===3||o===4){var r=a.stateNode.containerInfo;if(r===i||r.nodeType===8&&r.parentNode===i)break;if(o===4)for(o=a.return;o!==null;){var s=o.tag;if((s===3||s===4)&&(s=o.stateNode.containerInfo,s===i||s.nodeType===8&&s.parentNode===i))return;o=o.return}for(;r!==null;){if(o=Ot(r),o===null)return;if(s=o.tag,s===5||s===6){a=l=o;continue e}r=r.parentNode}}a=a.return}Js(function(){var p=l,m=ho(n),f=[];e:{var h=Np.get(e);if(h!==void 0){var b=So,y=e;switch(e){case"keypress":if(za(n)===0)break e;case"keydown":case"keyup":b=fc;break;case"focusin":y="focus",b=Bi;break;case"focusout":y="blur",b=Bi;break;case"beforeblur":case"afterblur":b=Bi;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=Tr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=Jf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=mc;break;case Lp:case Op:case Pp:b=nc;break;case Cp:b=gc;break;case"scroll":b=Zf;break;case"wheel":b=yc;break;case"copy":case"cut":case"paste":b=ic;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=vr}var g=(t&4)!==0,v=!g&&e==="scroll",c=g?h!==null?h+"Capture":null:h;g=[];for(var u=p,d;u!==null;){d=u;var x=d.stateNode;if(d.tag===5&&x!==null&&(d=x,c!==null&&(x=jn(u,c),x!=null&&g.push(Un(u,x,d)))),v)break;u=u.return}0<g.length&&(h=new b(h,y,null,n,m),f.push({event:h,listeners:g}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",h&&n!==Tl&&(y=n.relatedTarget||n.fromElement)&&(Ot(y)||y[Ke]))break e;if((b||h)&&(h=m.window===m?m:(h=m.ownerDocument)?h.defaultView||h.parentWindow:window,b?(y=n.relatedTarget||n.toElement,b=p,y=y?Ot(y):null,y!==null&&(v=At(y),y!==v||y.tag!==5&&y.tag!==6)&&(y=null)):(b=null,y=p),b!==y)){if(g=Tr,x="onMouseLeave",c="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(g=vr,x="onPointerLeave",c="onPointerEnter",u="pointer"),v=b==null?h:Wt(b),d=y==null?h:Wt(y),h=new g(x,u+"leave",b,n,m),h.target=v,h.relatedTarget=d,x=null,Ot(m)===p&&(g=new g(c,u+"enter",y,n,m),g.target=d,g.relatedTarget=v,x=g),v=x,b&&y)t:{for(g=b,c=y,u=0,d=g;d;d=Et(d))u++;for(d=0,x=c;x;x=Et(x))d++;for(;0<u-d;)g=Et(g),u--;for(;0<d-u;)c=Et(c),d--;for(;u--;){if(g===c||c!==null&&g===c.alternate)break t;g=Et(g),c=Et(c)}g=null}else g=null;b!==null&&zr(f,h,b,g,!1),y!==null&&v!==null&&zr(f,v,y,g,!0)}}e:{if(h=p?Wt(p):window,b=h.nodeName&&h.nodeName.toLowerCase(),b==="select"||b==="input"&&h.type==="file")var L=Oc;else if(Or(h))if(bp)L=wc;else{L=Cc;var C=Pc}else(b=h.nodeName)&&b.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(L=Nc);if(L&&(L=L(e,p))){yp(f,L,n,m);break e}C&&C(e,h,p),e==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&hl(h,"number",h.value)}switch(C=p?Wt(p):window,e){case"focusin":(Or(C)||C.contentEditable==="true")&&(Bt=C,Cl=p,Mn=null);break;case"focusout":Mn=Cl=Bt=null;break;case"mousedown":Nl=!0;break;case"contextmenu":case"mouseup":case"dragend":Nl=!1,kr(f,n,m);break;case"selectionchange":if(Rc)break;case"keydown":case"keyup":kr(f,n,m)}var N;if(Io)e:{switch(e){case"compositionstart":var w="onCompositionStart";break e;case"compositionend":w="onCompositionEnd";break e;case"compositionupdate":w="onCompositionUpdate";break e}w=void 0}else jt?gp(e,n)&&(w="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(w="onCompositionStart");w&&(hp&&n.locale!=="ko"&&(jt||w!=="onCompositionStart"?w==="onCompositionEnd"&&jt&&(N=mp()):(at=m,To="value"in at?at.value:at.textContent,jt=!0)),C=Va(p,w),0<C.length&&(w=new Sr(w,e,null,n,m),f.push({event:w,listeners:C}),N?w.data=N:(N=xp(n),N!==null&&(w.data=N)))),(N=Tc?Sc(e,n):vc(e,n))&&(p=Va(p,"onBeforeInput"),0<p.length&&(m=new Sr("onBeforeInput","beforeinput",null,n,m),f.push({event:m,listeners:p}),m.data=N))}wp(f,t)})}function Un(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Va(e,t){for(var n=t+"Capture",a=[];e!==null;){var i=e,l=i.stateNode;i.tag===5&&l!==null&&(i=l,l=jn(e,n),l!=null&&a.unshift(Un(e,l,i)),l=jn(e,t),l!=null&&a.push(Un(e,l,i))),e=e.return}return a}function Et(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function zr(e,t,n,a,i){for(var l=t._reactName,o=[];n!==null&&n!==a;){var r=n,s=r.alternate,p=r.stateNode;if(s!==null&&s===a)break;r.tag===5&&p!==null&&(r=p,i?(s=jn(n,l),s!=null&&o.unshift(Un(n,s,r))):i||(s=jn(n,l),s!=null&&o.push(Un(n,s,r)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Ac=/\r\n?/g,_c=/\u0000|\uFFFD/g;function Mr(e){return(typeof e=="string"?e:""+e).replace(Ac,`
`).replace(_c,"")}function va(e,t,n){if(t=Mr(t),Mr(e)!==t&&n)throw Error(T(425))}function $a(){}var wl=null,kl=null;function Fl(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Rl=typeof setTimeout=="function"?setTimeout:void 0,Ec=typeof clearTimeout=="function"?clearTimeout:void 0,Dr=typeof Promise=="function"?Promise:void 0,Yc=typeof queueMicrotask=="function"?queueMicrotask:typeof Dr<"u"?function(e){return Dr.resolve(null).then(e).catch(qc)}:Rl;function qc(e){setTimeout(function(){throw e})}function $i(e,t){var n=t,a=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(a===0){e.removeChild(i),Wn(t);return}a--}else n!=="$"&&n!=="$?"&&n!=="$!"||a++;n=i}while(n);Wn(t)}function pt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Ar(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var dn=Math.random().toString(36).slice(2),Ee="__reactFiber$"+dn,Vn="__reactProps$"+dn,Ke="__reactContainer$"+dn,zl="__reactEvents$"+dn,jc="__reactListeners$"+dn,Bc="__reactHandles$"+dn;function Ot(e){var t=e[Ee];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ke]||n[Ee]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ar(e);e!==null;){if(n=e[Ee])return n;e=Ar(e)}return t}e=n,n=e.parentNode}return null}function ra(e){return e=e[Ee]||e[Ke],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Wt(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(T(33))}function yi(e){return e[Vn]||null}var Ml=[],Gt=-1;function yt(e){return{current:e}}function E(e){0>Gt||(e.current=Ml[Gt],Ml[Gt]=null,Gt--)}function A(e,t){Gt++,Ml[Gt]=e.current,e.current=t}var gt={},oe=yt(gt),de=yt(!1),kt=gt;function ln(e,t){var n=e.type.contextTypes;if(!n)return gt;var a=e.stateNode;if(a&&a.__reactInternalMemoizedUnmaskedChildContext===t)return a.__reactInternalMemoizedMaskedChildContext;var i={},l;for(l in n)i[l]=t[l];return a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function me(e){return e=e.childContextTypes,e!=null}function Za(){E(de),E(oe)}function _r(e,t,n){if(oe.current!==gt)throw Error(T(168));A(oe,t),A(de,n)}function Fp(e,t,n){var a=e.stateNode;if(t=t.childContextTypes,typeof a.getChildContext!="function")return n;a=a.getChildContext();for(var i in a)if(!(i in t))throw Error(T(108,Pf(e)||"Unknown",i));return B({},n,a)}function Qa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gt,kt=oe.current,A(oe,e),A(de,de.current),!0}function Er(e,t,n){var a=e.stateNode;if(!a)throw Error(T(169));n?(e=Fp(e,t,kt),a.__reactInternalMemoizedMergedChildContext=e,E(de),E(oe),A(oe,e)):E(de),A(de,n)}var Be=null,bi=!1,Zi=!1;function Rp(e){Be===null?Be=[e]:Be.push(e)}function Xc(e){bi=!0,Rp(e)}function bt(){if(!Zi&&Be!==null){Zi=!0;var e=0,t=D;try{var n=Be;for(D=1;e<n.length;e++){var a=n[e];do a=a(!0);while(a!==null)}Be=null,bi=!1}catch(i){throw Be!==null&&(Be=Be.slice(e+1)),ap(go,bt),i}finally{D=t,Zi=!1}}return null}var Ht=[],Kt=0,Ja=null,ei=0,ve=[],Ie=0,Ft=null,Xe=1,We="";function It(e,t){Ht[Kt++]=ei,Ht[Kt++]=Ja,Ja=e,ei=t}function zp(e,t,n){ve[Ie++]=Xe,ve[Ie++]=We,ve[Ie++]=Ft,Ft=e;var a=Xe;e=We;var i=32-ze(a)-1;a&=~(1<<i),n+=1;var l=32-ze(t)+i;if(30<l){var o=i-i%5;l=(a&(1<<o)-1).toString(32),a>>=o,i-=o,Xe=1<<32-ze(t)+i|n<<i|a,We=l+e}else Xe=1<<l|n<<i|a,We=e}function Oo(e){e.return!==null&&(It(e,1),zp(e,1,0))}function Po(e){for(;e===Ja;)Ja=Ht[--Kt],Ht[Kt]=null,ei=Ht[--Kt],Ht[Kt]=null;for(;e===Ft;)Ft=ve[--Ie],ve[Ie]=null,We=ve[--Ie],ve[Ie]=null,Xe=ve[--Ie],ve[Ie]=null}var ye=null,xe=null,Y=!1,Re=null;function Mp(e,t){var n=Le(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Yr(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ye=e,xe=pt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ye=e,xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ft!==null?{id:Xe,overflow:We}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Le(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ye=e,xe=null,!0):!1;default:return!1}}function Dl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Al(e){if(Y){var t=xe;if(t){var n=t;if(!Yr(e,t)){if(Dl(e))throw Error(T(418));t=pt(n.nextSibling);var a=ye;t&&Yr(e,t)?Mp(a,n):(e.flags=e.flags&-4097|2,Y=!1,ye=e)}}else{if(Dl(e))throw Error(T(418));e.flags=e.flags&-4097|2,Y=!1,ye=e}}}function qr(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ye=e}function Ia(e){if(e!==ye)return!1;if(!Y)return qr(e),Y=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Fl(e.type,e.memoizedProps)),t&&(t=xe)){if(Dl(e))throw Dp(),Error(T(418));for(;t;)Mp(e,t),t=pt(t.nextSibling)}if(qr(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(T(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){xe=pt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}xe=null}}else xe=ye?pt(e.stateNode.nextSibling):null;return!0}function Dp(){for(var e=xe;e;)e=pt(e.nextSibling)}function on(){xe=ye=null,Y=!1}function Co(e){Re===null?Re=[e]:Re.push(e)}var Wc=$e.ReactCurrentBatchConfig;function vn(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(T(309));var a=n.stateNode}if(!a)throw Error(T(147,e));var i=a,l=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===l?t.ref:(t=function(o){var r=i.refs;o===null?delete r[l]:r[l]=o},t._stringRef=l,t)}if(typeof e!="string")throw Error(T(284));if(!n._owner)throw Error(T(290,e))}return e}function La(e,t){throw e=Object.prototype.toString.call(t),Error(T(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function jr(e){var t=e._init;return t(e._payload)}function Ap(e){function t(c,u){if(e){var d=c.deletions;d===null?(c.deletions=[u],c.flags|=16):d.push(u)}}function n(c,u){if(!e)return null;for(;u!==null;)t(c,u),u=u.sibling;return null}function a(c,u){for(c=new Map;u!==null;)u.key!==null?c.set(u.key,u):c.set(u.index,u),u=u.sibling;return c}function i(c,u){return c=dt(c,u),c.index=0,c.sibling=null,c}function l(c,u,d){return c.index=d,e?(d=c.alternate,d!==null?(d=d.index,d<u?(c.flags|=2,u):d):(c.flags|=2,u)):(c.flags|=1048576,u)}function o(c){return e&&c.alternate===null&&(c.flags|=2),c}function r(c,u,d,x){return u===null||u.tag!==6?(u=il(d,c.mode,x),u.return=c,u):(u=i(u,d),u.return=c,u)}function s(c,u,d,x){var L=d.type;return L===qt?m(c,u,d.props.children,x,d.key):u!==null&&(u.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Je&&jr(L)===u.type)?(x=i(u,d.props),x.ref=vn(c,u,d),x.return=c,x):(x=qa(d.type,d.key,d.props,null,c.mode,x),x.ref=vn(c,u,d),x.return=c,x)}function p(c,u,d,x){return u===null||u.tag!==4||u.stateNode.containerInfo!==d.containerInfo||u.stateNode.implementation!==d.implementation?(u=ll(d,c.mode,x),u.return=c,u):(u=i(u,d.children||[]),u.return=c,u)}function m(c,u,d,x,L){return u===null||u.tag!==7?(u=wt(d,c.mode,x,L),u.return=c,u):(u=i(u,d),u.return=c,u)}function f(c,u,d){if(typeof u=="string"&&u!==""||typeof u=="number")return u=il(""+u,c.mode,d),u.return=c,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case da:return d=qa(u.type,u.key,u.props,null,c.mode,d),d.ref=vn(c,null,u),d.return=c,d;case Yt:return u=ll(u,c.mode,d),u.return=c,u;case Je:var x=u._init;return f(c,x(u._payload),d)}if(Pn(u)||xn(u))return u=wt(u,c.mode,d,null),u.return=c,u;La(c,u)}return null}function h(c,u,d,x){var L=u!==null?u.key:null;if(typeof d=="string"&&d!==""||typeof d=="number")return L!==null?null:r(c,u,""+d,x);if(typeof d=="object"&&d!==null){switch(d.$$typeof){case da:return d.key===L?s(c,u,d,x):null;case Yt:return d.key===L?p(c,u,d,x):null;case Je:return L=d._init,h(c,u,L(d._payload),x)}if(Pn(d)||xn(d))return L!==null?null:m(c,u,d,x,null);La(c,d)}return null}function b(c,u,d,x,L){if(typeof x=="string"&&x!==""||typeof x=="number")return c=c.get(d)||null,r(u,c,""+x,L);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case da:return c=c.get(x.key===null?d:x.key)||null,s(u,c,x,L);case Yt:return c=c.get(x.key===null?d:x.key)||null,p(u,c,x,L);case Je:var C=x._init;return b(c,u,d,C(x._payload),L)}if(Pn(x)||xn(x))return c=c.get(d)||null,m(u,c,x,L,null);La(u,x)}return null}function y(c,u,d,x){for(var L=null,C=null,N=u,w=u=0,W=null;N!==null&&w<d.length;w++){N.index>w?(W=N,N=null):W=N.sibling;var z=h(c,N,d[w],x);if(z===null){N===null&&(N=W);break}e&&N&&z.alternate===null&&t(c,N),u=l(z,u,w),C===null?L=z:C.sibling=z,C=z,N=W}if(w===d.length)return n(c,N),Y&&It(c,w),L;if(N===null){for(;w<d.length;w++)N=f(c,d[w],x),N!==null&&(u=l(N,u,w),C===null?L=N:C.sibling=N,C=N);return Y&&It(c,w),L}for(N=a(c,N);w<d.length;w++)W=b(N,c,w,d[w],x),W!==null&&(e&&W.alternate!==null&&N.delete(W.key===null?w:W.key),u=l(W,u,w),C===null?L=W:C.sibling=W,C=W);return e&&N.forEach(function(Ne){return t(c,Ne)}),Y&&It(c,w),L}function g(c,u,d,x){var L=xn(d);if(typeof L!="function")throw Error(T(150));if(d=L.call(d),d==null)throw Error(T(151));for(var C=L=null,N=u,w=u=0,W=null,z=d.next();N!==null&&!z.done;w++,z=d.next()){N.index>w?(W=N,N=null):W=N.sibling;var Ne=h(c,N,z.value,x);if(Ne===null){N===null&&(N=W);break}e&&N&&Ne.alternate===null&&t(c,N),u=l(Ne,u,w),C===null?L=Ne:C.sibling=Ne,C=Ne,N=W}if(z.done)return n(c,N),Y&&It(c,w),L;if(N===null){for(;!z.done;w++,z=d.next())z=f(c,z.value,x),z!==null&&(u=l(z,u,w),C===null?L=z:C.sibling=z,C=z);return Y&&It(c,w),L}for(N=a(c,N);!z.done;w++,z=d.next())z=b(N,c,w,z.value,x),z!==null&&(e&&z.alternate!==null&&N.delete(z.key===null?w:z.key),u=l(z,u,w),C===null?L=z:C.sibling=z,C=z);return e&&N.forEach(function(hn){return t(c,hn)}),Y&&It(c,w),L}function v(c,u,d,x){if(typeof d=="object"&&d!==null&&d.type===qt&&d.key===null&&(d=d.props.children),typeof d=="object"&&d!==null){switch(d.$$typeof){case da:e:{for(var L=d.key,C=u;C!==null;){if(C.key===L){if(L=d.type,L===qt){if(C.tag===7){n(c,C.sibling),u=i(C,d.props.children),u.return=c,c=u;break e}}else if(C.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Je&&jr(L)===C.type){n(c,C.sibling),u=i(C,d.props),u.ref=vn(c,C,d),u.return=c,c=u;break e}n(c,C);break}else t(c,C);C=C.sibling}d.type===qt?(u=wt(d.props.children,c.mode,x,d.key),u.return=c,c=u):(x=qa(d.type,d.key,d.props,null,c.mode,x),x.ref=vn(c,u,d),x.return=c,c=x)}return o(c);case Yt:e:{for(C=d.key;u!==null;){if(u.key===C)if(u.tag===4&&u.stateNode.containerInfo===d.containerInfo&&u.stateNode.implementation===d.implementation){n(c,u.sibling),u=i(u,d.children||[]),u.return=c,c=u;break e}else{n(c,u);break}else t(c,u);u=u.sibling}u=ll(d,c.mode,x),u.return=c,c=u}return o(c);case Je:return C=d._init,v(c,u,C(d._payload),x)}if(Pn(d))return y(c,u,d,x);if(xn(d))return g(c,u,d,x);La(c,d)}return typeof d=="string"&&d!==""||typeof d=="number"?(d=""+d,u!==null&&u.tag===6?(n(c,u.sibling),u=i(u,d),u.return=c,c=u):(n(c,u),u=il(d,c.mode,x),u.return=c,c=u),o(c)):n(c,u)}return v}var rn=Ap(!0),_p=Ap(!1),ti=yt(null),ni=null,Ut=null,No=null;function wo(){No=Ut=ni=null}function ko(e){var t=ti.current;E(ti),e._currentValue=t}function _l(e,t,n){for(;e!==null;){var a=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,a!==null&&(a.childLanes|=t)):a!==null&&(a.childLanes&t)!==t&&(a.childLanes|=t),e===n)break;e=e.return}}function tn(e,t){ni=e,No=Ut=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(ce=!0),e.firstContext=null)}function Pe(e){var t=e._currentValue;if(No!==e)if(e={context:e,memoizedValue:t,next:null},Ut===null){if(ni===null)throw Error(T(308));Ut=e,ni.dependencies={lanes:0,firstContext:e}}else Ut=Ut.next=e;return t}var Pt=null;function Fo(e){Pt===null?Pt=[e]:Pt.push(e)}function Ep(e,t,n,a){var i=t.interleaved;return i===null?(n.next=n,Fo(t)):(n.next=i.next,i.next=n),t.interleaved=n,Ue(e,a)}function Ue(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var et=!1;function Ro(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Yp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ge(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ut(e,t,n){var a=e.updateQueue;if(a===null)return null;if(a=a.shared,M&2){var i=a.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),a.pending=t,Ue(e,n)}return i=a.interleaved,i===null?(t.next=t,Fo(a)):(t.next=i.next,i.next=t),a.interleaved=t,Ue(e,n)}function Ma(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,xo(e,n)}}function Br(e,t){var n=e.updateQueue,a=e.alternate;if(a!==null&&(a=a.updateQueue,n===a)){var i=null,l=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};l===null?i=l=o:l=l.next=o,n=n.next}while(n!==null);l===null?i=l=t:l=l.next=t}else i=l=t;n={baseState:a.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:a.shared,effects:a.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ai(e,t,n,a){var i=e.updateQueue;et=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,r=i.shared.pending;if(r!==null){i.shared.pending=null;var s=r,p=s.next;s.next=null,o===null?l=p:o.next=p,o=s;var m=e.alternate;m!==null&&(m=m.updateQueue,r=m.lastBaseUpdate,r!==o&&(r===null?m.firstBaseUpdate=p:r.next=p,m.lastBaseUpdate=s))}if(l!==null){var f=i.baseState;o=0,m=p=s=null,r=l;do{var h=r.lane,b=r.eventTime;if((a&h)===h){m!==null&&(m=m.next={eventTime:b,lane:0,tag:r.tag,payload:r.payload,callback:r.callback,next:null});e:{var y=e,g=r;switch(h=t,b=n,g.tag){case 1:if(y=g.payload,typeof y=="function"){f=y.call(b,f,h);break e}f=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=g.payload,h=typeof y=="function"?y.call(b,f,h):y,h==null)break e;f=B({},f,h);break e;case 2:et=!0}}r.callback!==null&&r.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[r]:h.push(r))}else b={eventTime:b,lane:h,tag:r.tag,payload:r.payload,callback:r.callback,next:null},m===null?(p=m=b,s=f):m=m.next=b,o|=h;if(r=r.next,r===null){if(r=i.shared.pending,r===null)break;h=r,r=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(m===null&&(s=f),i.baseState=s,i.firstBaseUpdate=p,i.lastBaseUpdate=m,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else l===null&&(i.shared.lanes=0);zt|=o,e.lanes=o,e.memoizedState=f}}function Xr(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var a=e[t],i=a.callback;if(i!==null){if(a.callback=null,a=n,typeof i!="function")throw Error(T(191,i));i.call(a)}}}var sa={},qe=yt(sa),$n=yt(sa),Zn=yt(sa);function Ct(e){if(e===sa)throw Error(T(174));return e}function zo(e,t){switch(A(Zn,t),A($n,e),A(qe,sa),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:xl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=xl(t,e)}E(qe),A(qe,t)}function sn(){E(qe),E($n),E(Zn)}function qp(e){Ct(Zn.current);var t=Ct(qe.current),n=xl(t,e.type);t!==n&&(A($n,e),A(qe,n))}function Mo(e){$n.current===e&&(E(qe),E($n))}var q=yt(0);function ii(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Qi=[];function Do(){for(var e=0;e<Qi.length;e++)Qi[e]._workInProgressVersionPrimary=null;Qi.length=0}var Da=$e.ReactCurrentDispatcher,Ji=$e.ReactCurrentBatchConfig,Rt=0,j=null,V=null,Q=null,li=!1,Dn=!1,Qn=0,Gc=0;function ae(){throw Error(T(321))}function Ao(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!De(e[n],t[n]))return!1;return!0}function _o(e,t,n,a,i,l){if(Rt=l,j=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Da.current=e===null||e.memoizedState===null?Vc:$c,e=n(a,i),Dn){l=0;do{if(Dn=!1,Qn=0,25<=l)throw Error(T(301));l+=1,Q=V=null,t.updateQueue=null,Da.current=Zc,e=n(a,i)}while(Dn)}if(Da.current=oi,t=V!==null&&V.next!==null,Rt=0,Q=V=j=null,li=!1,t)throw Error(T(300));return e}function Eo(){var e=Qn!==0;return Qn=0,e}function _e(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Q===null?j.memoizedState=Q=e:Q=Q.next=e,Q}function Ce(){if(V===null){var e=j.alternate;e=e!==null?e.memoizedState:null}else e=V.next;var t=Q===null?j.memoizedState:Q.next;if(t!==null)Q=t,V=e;else{if(e===null)throw Error(T(310));V=e,e={memoizedState:V.memoizedState,baseState:V.baseState,baseQueue:V.baseQueue,queue:V.queue,next:null},Q===null?j.memoizedState=Q=e:Q=Q.next=e}return Q}function Jn(e,t){return typeof t=="function"?t(e):t}function el(e){var t=Ce(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var a=V,i=a.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}a.baseQueue=i=l,n.pending=null}if(i!==null){l=i.next,a=a.baseState;var r=o=null,s=null,p=l;do{var m=p.lane;if((Rt&m)===m)s!==null&&(s=s.next={lane:0,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),a=p.hasEagerState?p.eagerState:e(a,p.action);else{var f={lane:m,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null};s===null?(r=s=f,o=a):s=s.next=f,j.lanes|=m,zt|=m}p=p.next}while(p!==null&&p!==l);s===null?o=a:s.next=r,De(a,t.memoizedState)||(ce=!0),t.memoizedState=a,t.baseState=o,t.baseQueue=s,n.lastRenderedState=a}if(e=n.interleaved,e!==null){i=e;do l=i.lane,j.lanes|=l,zt|=l,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function tl(e){var t=Ce(),n=t.queue;if(n===null)throw Error(T(311));n.lastRenderedReducer=e;var a=n.dispatch,i=n.pending,l=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);De(l,t.memoizedState)||(ce=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),n.lastRenderedState=l}return[l,a]}function jp(){}function Bp(e,t){var n=j,a=Ce(),i=t(),l=!De(a.memoizedState,i);if(l&&(a.memoizedState=i,ce=!0),a=a.queue,Yo(Gp.bind(null,n,a,e),[e]),a.getSnapshot!==t||l||Q!==null&&Q.memoizedState.tag&1){if(n.flags|=2048,ea(9,Wp.bind(null,n,a,i,t),void 0,null),J===null)throw Error(T(349));Rt&30||Xp(n,t,i)}return i}function Xp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=j.updateQueue,t===null?(t={lastEffect:null,stores:null},j.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Wp(e,t,n,a){t.value=n,t.getSnapshot=a,Hp(t)&&Kp(e)}function Gp(e,t,n){return n(function(){Hp(t)&&Kp(e)})}function Hp(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!De(e,n)}catch{return!0}}function Kp(e){var t=Ue(e,1);t!==null&&Me(t,e,1,-1)}function Wr(e){var t=_e();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:e},t.queue=e,e=e.dispatch=Uc.bind(null,j,e),[t.memoizedState,e]}function ea(e,t,n,a){return e={tag:e,create:t,destroy:n,deps:a,next:null},t=j.updateQueue,t===null?(t={lastEffect:null,stores:null},j.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(a=n.next,n.next=e,e.next=a,t.lastEffect=e)),e}function Up(){return Ce().memoizedState}function Aa(e,t,n,a){var i=_e();j.flags|=e,i.memoizedState=ea(1|t,n,void 0,a===void 0?null:a)}function Ti(e,t,n,a){var i=Ce();a=a===void 0?null:a;var l=void 0;if(V!==null){var o=V.memoizedState;if(l=o.destroy,a!==null&&Ao(a,o.deps)){i.memoizedState=ea(t,n,l,a);return}}j.flags|=e,i.memoizedState=ea(1|t,n,l,a)}function Gr(e,t){return Aa(8390656,8,e,t)}function Yo(e,t){return Ti(2048,8,e,t)}function Vp(e,t){return Ti(4,2,e,t)}function $p(e,t){return Ti(4,4,e,t)}function Zp(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function Qp(e,t,n){return n=n!=null?n.concat([e]):null,Ti(4,4,Zp.bind(null,t,e),n)}function qo(){}function Jp(e,t){var n=Ce();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&Ao(t,a[1])?a[0]:(n.memoizedState=[e,t],e)}function eu(e,t){var n=Ce();t=t===void 0?null:t;var a=n.memoizedState;return a!==null&&t!==null&&Ao(t,a[1])?a[0]:(e=e(),n.memoizedState=[e,t],e)}function tu(e,t,n){return Rt&21?(De(n,t)||(n=op(),j.lanes|=n,zt|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,ce=!0),e.memoizedState=n)}function Hc(e,t){var n=D;D=n!==0&&4>n?n:4,e(!0);var a=Ji.transition;Ji.transition={};try{e(!1),t()}finally{D=n,Ji.transition=a}}function nu(){return Ce().memoizedState}function Kc(e,t,n){var a=ct(e);if(n={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null},au(e))iu(t,n);else if(n=Ep(e,t,n,a),n!==null){var i=se();Me(n,e,a,i),lu(n,t,a)}}function Uc(e,t,n){var a=ct(e),i={lane:a,action:n,hasEagerState:!1,eagerState:null,next:null};if(au(e))iu(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,r=l(o,n);if(i.hasEagerState=!0,i.eagerState=r,De(r,o)){var s=t.interleaved;s===null?(i.next=i,Fo(t)):(i.next=s.next,s.next=i),t.interleaved=i;return}}catch{}finally{}n=Ep(e,t,i,a),n!==null&&(i=se(),Me(n,e,a,i),lu(n,t,a))}}function au(e){var t=e.alternate;return e===j||t!==null&&t===j}function iu(e,t){Dn=li=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function lu(e,t,n){if(n&4194240){var a=t.lanes;a&=e.pendingLanes,n|=a,t.lanes=n,xo(e,n)}}var oi={readContext:Pe,useCallback:ae,useContext:ae,useEffect:ae,useImperativeHandle:ae,useInsertionEffect:ae,useLayoutEffect:ae,useMemo:ae,useReducer:ae,useRef:ae,useState:ae,useDebugValue:ae,useDeferredValue:ae,useTransition:ae,useMutableSource:ae,useSyncExternalStore:ae,useId:ae,unstable_isNewReconciler:!1},Vc={readContext:Pe,useCallback:function(e,t){return _e().memoizedState=[e,t===void 0?null:t],e},useContext:Pe,useEffect:Gr,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Aa(4194308,4,Zp.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Aa(4194308,4,e,t)},useInsertionEffect:function(e,t){return Aa(4,2,e,t)},useMemo:function(e,t){var n=_e();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var a=_e();return t=n!==void 0?n(t):t,a.memoizedState=a.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},a.queue=e,e=e.dispatch=Kc.bind(null,j,e),[a.memoizedState,e]},useRef:function(e){var t=_e();return e={current:e},t.memoizedState=e},useState:Wr,useDebugValue:qo,useDeferredValue:function(e){return _e().memoizedState=e},useTransition:function(){var e=Wr(!1),t=e[0];return e=Hc.bind(null,e[1]),_e().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var a=j,i=_e();if(Y){if(n===void 0)throw Error(T(407));n=n()}else{if(n=t(),J===null)throw Error(T(349));Rt&30||Xp(a,t,n)}i.memoizedState=n;var l={value:n,getSnapshot:t};return i.queue=l,Gr(Gp.bind(null,a,l,e),[e]),a.flags|=2048,ea(9,Wp.bind(null,a,l,n,t),void 0,null),n},useId:function(){var e=_e(),t=J.identifierPrefix;if(Y){var n=We,a=Xe;n=(a&~(1<<32-ze(a)-1)).toString(32)+n,t=":"+t+"R"+n,n=Qn++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Gc++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},$c={readContext:Pe,useCallback:Jp,useContext:Pe,useEffect:Yo,useImperativeHandle:Qp,useInsertionEffect:Vp,useLayoutEffect:$p,useMemo:eu,useReducer:el,useRef:Up,useState:function(){return el(Jn)},useDebugValue:qo,useDeferredValue:function(e){var t=Ce();return tu(t,V.memoizedState,e)},useTransition:function(){var e=el(Jn)[0],t=Ce().memoizedState;return[e,t]},useMutableSource:jp,useSyncExternalStore:Bp,useId:nu,unstable_isNewReconciler:!1},Zc={readContext:Pe,useCallback:Jp,useContext:Pe,useEffect:Yo,useImperativeHandle:Qp,useInsertionEffect:Vp,useLayoutEffect:$p,useMemo:eu,useReducer:tl,useRef:Up,useState:function(){return tl(Jn)},useDebugValue:qo,useDeferredValue:function(e){var t=Ce();return V===null?t.memoizedState=e:tu(t,V.memoizedState,e)},useTransition:function(){var e=tl(Jn)[0],t=Ce().memoizedState;return[e,t]},useMutableSource:jp,useSyncExternalStore:Bp,useId:nu,unstable_isNewReconciler:!1};function ke(e,t){if(e&&e.defaultProps){t=B({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function El(e,t,n,a){t=e.memoizedState,n=n(a,t),n=n==null?t:B({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Si={isMounted:function(e){return(e=e._reactInternals)?At(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var a=se(),i=ct(e),l=Ge(a,i);l.payload=t,n!=null&&(l.callback=n),t=ut(e,l,i),t!==null&&(Me(t,e,i,a),Ma(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var a=se(),i=ct(e),l=Ge(a,i);l.tag=1,l.payload=t,n!=null&&(l.callback=n),t=ut(e,l,i),t!==null&&(Me(t,e,i,a),Ma(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=se(),a=ct(e),i=Ge(n,a);i.tag=2,t!=null&&(i.callback=t),t=ut(e,i,a),t!==null&&(Me(t,e,a,n),Ma(t,e,a))}};function Hr(e,t,n,a,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(a,l,o):t.prototype&&t.prototype.isPureReactComponent?!Hn(n,a)||!Hn(i,l):!0}function ou(e,t,n){var a=!1,i=gt,l=t.contextType;return typeof l=="object"&&l!==null?l=Pe(l):(i=me(t)?kt:oe.current,a=t.contextTypes,l=(a=a!=null)?ln(e,i):gt),t=new t(n,l),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Si,e.stateNode=t,t._reactInternals=e,a&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=l),t}function Kr(e,t,n,a){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,a),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,a),t.state!==e&&Si.enqueueReplaceState(t,t.state,null)}function Yl(e,t,n,a){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},Ro(e);var l=t.contextType;typeof l=="object"&&l!==null?i.context=Pe(l):(l=me(t)?kt:oe.current,i.context=ln(e,l)),i.state=e.memoizedState,l=t.getDerivedStateFromProps,typeof l=="function"&&(El(e,t,l,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Si.enqueueReplaceState(i,i.state,null),ai(e,n,i,a),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function pn(e,t){try{var n="",a=t;do n+=Of(a),a=a.return;while(a);var i=n}catch(l){i=`
Error generating stack: `+l.message+`
`+l.stack}return{value:e,source:t,stack:i,digest:null}}function nl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ql(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Qc=typeof WeakMap=="function"?WeakMap:Map;function ru(e,t,n){n=Ge(-1,n),n.tag=3,n.payload={element:null};var a=t.value;return n.callback=function(){si||(si=!0,$l=a),ql(e,t)},n}function su(e,t,n){n=Ge(-1,n),n.tag=3;var a=e.type.getDerivedStateFromError;if(typeof a=="function"){var i=t.value;n.payload=function(){return a(i)},n.callback=function(){ql(e,t)}}var l=e.stateNode;return l!==null&&typeof l.componentDidCatch=="function"&&(n.callback=function(){ql(e,t),typeof a!="function"&&(ft===null?ft=new Set([this]):ft.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function Ur(e,t,n){var a=e.pingCache;if(a===null){a=e.pingCache=new Qc;var i=new Set;a.set(t,i)}else i=a.get(t),i===void 0&&(i=new Set,a.set(t,i));i.has(n)||(i.add(n),e=cd.bind(null,e,t,n),t.then(e,e))}function Vr(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function $r(e,t,n,a,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ge(-1,1),t.tag=2,ut(n,t,1))),n.lanes|=1),e)}var Jc=$e.ReactCurrentOwner,ce=!1;function re(e,t,n,a){t.child=e===null?_p(t,null,n,a):rn(t,e.child,n,a)}function Zr(e,t,n,a,i){n=n.render;var l=t.ref;return tn(t,i),a=_o(e,t,n,a,l,i),n=Eo(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ve(e,t,i)):(Y&&n&&Oo(t),t.flags|=1,re(e,t,a,i),t.child)}function Qr(e,t,n,a,i){if(e===null){var l=n.type;return typeof l=="function"&&!Uo(l)&&l.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=l,pu(e,t,l,a,i)):(e=qa(n.type,null,a,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!(e.lanes&i)){var o=l.memoizedProps;if(n=n.compare,n=n!==null?n:Hn,n(o,a)&&e.ref===t.ref)return Ve(e,t,i)}return t.flags|=1,e=dt(l,a),e.ref=t.ref,e.return=t,t.child=e}function pu(e,t,n,a,i){if(e!==null){var l=e.memoizedProps;if(Hn(l,a)&&e.ref===t.ref)if(ce=!1,t.pendingProps=a=l,(e.lanes&i)!==0)e.flags&131072&&(ce=!0);else return t.lanes=e.lanes,Ve(e,t,i)}return jl(e,t,n,a,i)}function uu(e,t,n){var a=t.pendingProps,i=a.children,l=e!==null?e.memoizedState:null;if(a.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},A($t,ge),ge|=n;else{if(!(n&1073741824))return e=l!==null?l.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,A($t,ge),ge|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},a=l!==null?l.baseLanes:n,A($t,ge),ge|=a}else l!==null?(a=l.baseLanes|n,t.memoizedState=null):a=n,A($t,ge),ge|=a;return re(e,t,i,n),t.child}function fu(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function jl(e,t,n,a,i){var l=me(n)?kt:oe.current;return l=ln(t,l),tn(t,i),n=_o(e,t,n,a,l,i),a=Eo(),e!==null&&!ce?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Ve(e,t,i)):(Y&&a&&Oo(t),t.flags|=1,re(e,t,n,i),t.child)}function Jr(e,t,n,a,i){if(me(n)){var l=!0;Qa(t)}else l=!1;if(tn(t,i),t.stateNode===null)_a(e,t),ou(t,n,a),Yl(t,n,a,i),a=!0;else if(e===null){var o=t.stateNode,r=t.memoizedProps;o.props=r;var s=o.context,p=n.contextType;typeof p=="object"&&p!==null?p=Pe(p):(p=me(n)?kt:oe.current,p=ln(t,p));var m=n.getDerivedStateFromProps,f=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(r!==a||s!==p)&&Kr(t,o,a,p),et=!1;var h=t.memoizedState;o.state=h,ai(t,a,o,i),s=t.memoizedState,r!==a||h!==s||de.current||et?(typeof m=="function"&&(El(t,n,m,a),s=t.memoizedState),(r=et||Hr(t,n,r,a,h,s,p))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=a,t.memoizedState=s),o.props=a,o.state=s,o.context=p,a=r):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),a=!1)}else{o=t.stateNode,Yp(e,t),r=t.memoizedProps,p=t.type===t.elementType?r:ke(t.type,r),o.props=p,f=t.pendingProps,h=o.context,s=n.contextType,typeof s=="object"&&s!==null?s=Pe(s):(s=me(n)?kt:oe.current,s=ln(t,s));var b=n.getDerivedStateFromProps;(m=typeof b=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(r!==f||h!==s)&&Kr(t,o,a,s),et=!1,h=t.memoizedState,o.state=h,ai(t,a,o,i);var y=t.memoizedState;r!==f||h!==y||de.current||et?(typeof b=="function"&&(El(t,n,b,a),y=t.memoizedState),(p=et||Hr(t,n,p,a,h,y,s)||!1)?(m||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(a,y,s),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(a,y,s)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=a,t.memoizedState=y),o.props=a,o.state=y,o.context=s,a=p):(typeof o.componentDidUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||r===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),a=!1)}return Bl(e,t,n,a,l,i)}function Bl(e,t,n,a,i,l){fu(e,t);var o=(t.flags&128)!==0;if(!a&&!o)return i&&Er(t,n,!1),Ve(e,t,l);a=t.stateNode,Jc.current=t;var r=o&&typeof n.getDerivedStateFromError!="function"?null:a.render();return t.flags|=1,e!==null&&o?(t.child=rn(t,e.child,null,l),t.child=rn(t,null,r,l)):re(e,t,r,l),t.memoizedState=a.state,i&&Er(t,n,!0),t.child}function cu(e){var t=e.stateNode;t.pendingContext?_r(e,t.pendingContext,t.pendingContext!==t.context):t.context&&_r(e,t.context,!1),zo(e,t.containerInfo)}function es(e,t,n,a,i){return on(),Co(i),t.flags|=256,re(e,t,n,a),t.child}var Xl={dehydrated:null,treeContext:null,retryLane:0};function Wl(e){return{baseLanes:e,cachePool:null,transitions:null}}function du(e,t,n){var a=t.pendingProps,i=q.current,l=!1,o=(t.flags&128)!==0,r;if((r=o)||(r=e!==null&&e.memoizedState===null?!1:(i&2)!==0),r?(l=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),A(q,i&1),e===null)return Al(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=a.children,e=a.fallback,l?(a=t.mode,l=t.child,o={mode:"hidden",children:o},!(a&1)&&l!==null?(l.childLanes=0,l.pendingProps=o):l=Li(o,a,0,null),e=wt(e,a,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Wl(n),t.memoizedState=Xl,e):jo(t,o));if(i=e.memoizedState,i!==null&&(r=i.dehydrated,r!==null))return ed(e,t,o,a,r,i,n);if(l){l=a.fallback,o=t.mode,i=e.child,r=i.sibling;var s={mode:"hidden",children:a.children};return!(o&1)&&t.child!==i?(a=t.child,a.childLanes=0,a.pendingProps=s,t.deletions=null):(a=dt(i,s),a.subtreeFlags=i.subtreeFlags&14680064),r!==null?l=dt(r,l):(l=wt(l,o,n,null),l.flags|=2),l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,o=e.child.memoizedState,o=o===null?Wl(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},l.memoizedState=o,l.childLanes=e.childLanes&~n,t.memoizedState=Xl,a}return l=e.child,e=l.sibling,a=dt(l,{mode:"visible",children:a.children}),!(t.mode&1)&&(a.lanes=n),a.return=t,a.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function jo(e,t){return t=Li({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Oa(e,t,n,a){return a!==null&&Co(a),rn(t,e.child,null,n),e=jo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ed(e,t,n,a,i,l,o){if(n)return t.flags&256?(t.flags&=-257,a=nl(Error(T(422))),Oa(e,t,o,a)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(l=a.fallback,i=t.mode,a=Li({mode:"visible",children:a.children},i,0,null),l=wt(l,i,o,null),l.flags|=2,a.return=t,l.return=t,a.sibling=l,t.child=a,t.mode&1&&rn(t,e.child,null,o),t.child.memoizedState=Wl(o),t.memoizedState=Xl,l);if(!(t.mode&1))return Oa(e,t,o,null);if(i.data==="$!"){if(a=i.nextSibling&&i.nextSibling.dataset,a)var r=a.dgst;return a=r,l=Error(T(419)),a=nl(l,a,void 0),Oa(e,t,o,a)}if(r=(o&e.childLanes)!==0,ce||r){if(a=J,a!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(a.suspendedLanes|o)?0:i,i!==0&&i!==l.retryLane&&(l.retryLane=i,Ue(e,i),Me(a,e,i,-1))}return Ko(),a=nl(Error(T(421))),Oa(e,t,o,a)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=dd.bind(null,e),i._reactRetry=t,null):(e=l.treeContext,xe=pt(i.nextSibling),ye=t,Y=!0,Re=null,e!==null&&(ve[Ie++]=Xe,ve[Ie++]=We,ve[Ie++]=Ft,Xe=e.id,We=e.overflow,Ft=t),t=jo(t,a.children),t.flags|=4096,t)}function ts(e,t,n){e.lanes|=t;var a=e.alternate;a!==null&&(a.lanes|=t),_l(e.return,t,n)}function al(e,t,n,a,i){var l=e.memoizedState;l===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:a,tail:n,tailMode:i}:(l.isBackwards=t,l.rendering=null,l.renderingStartTime=0,l.last=a,l.tail=n,l.tailMode=i)}function mu(e,t,n){var a=t.pendingProps,i=a.revealOrder,l=a.tail;if(re(e,t,a.children,n),a=q.current,a&2)a=a&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ts(e,n,t);else if(e.tag===19)ts(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}a&=1}if(A(q,a),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ii(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),al(t,!1,i,n,l);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ii(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}al(t,!0,n,null,l);break;case"together":al(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function _a(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ve(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),zt|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(T(153));if(t.child!==null){for(e=t.child,n=dt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=dt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function td(e,t,n){switch(t.tag){case 3:cu(t),on();break;case 5:qp(t);break;case 1:me(t.type)&&Qa(t);break;case 4:zo(t,t.stateNode.containerInfo);break;case 10:var a=t.type._context,i=t.memoizedProps.value;A(ti,a._currentValue),a._currentValue=i;break;case 13:if(a=t.memoizedState,a!==null)return a.dehydrated!==null?(A(q,q.current&1),t.flags|=128,null):n&t.child.childLanes?du(e,t,n):(A(q,q.current&1),e=Ve(e,t,n),e!==null?e.sibling:null);A(q,q.current&1);break;case 19:if(a=(n&t.childLanes)!==0,e.flags&128){if(a)return mu(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),A(q,q.current),a)break;return null;case 22:case 23:return t.lanes=0,uu(e,t,n)}return Ve(e,t,n)}var hu,Gl,gu,xu;hu=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gl=function(){};gu=function(e,t,n,a){var i=e.memoizedProps;if(i!==a){e=t.stateNode,Ct(qe.current);var l=null;switch(n){case"input":i=dl(e,i),a=dl(e,a),l=[];break;case"select":i=B({},i,{value:void 0}),a=B({},a,{value:void 0}),l=[];break;case"textarea":i=gl(e,i),a=gl(e,a),l=[];break;default:typeof i.onClick!="function"&&typeof a.onClick=="function"&&(e.onclick=$a)}yl(n,a);var o;n=null;for(p in i)if(!a.hasOwnProperty(p)&&i.hasOwnProperty(p)&&i[p]!=null)if(p==="style"){var r=i[p];for(o in r)r.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else p!=="dangerouslySetInnerHTML"&&p!=="children"&&p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(Yn.hasOwnProperty(p)?l||(l=[]):(l=l||[]).push(p,null));for(p in a){var s=a[p];if(r=i!=null?i[p]:void 0,a.hasOwnProperty(p)&&s!==r&&(s!=null||r!=null))if(p==="style")if(r){for(o in r)!r.hasOwnProperty(o)||s&&s.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in s)s.hasOwnProperty(o)&&r[o]!==s[o]&&(n||(n={}),n[o]=s[o])}else n||(l||(l=[]),l.push(p,n)),n=s;else p==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,r=r?r.__html:void 0,s!=null&&r!==s&&(l=l||[]).push(p,s)):p==="children"?typeof s!="string"&&typeof s!="number"||(l=l||[]).push(p,""+s):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&(Yn.hasOwnProperty(p)?(s!=null&&p==="onScroll"&&_("scroll",e),l||r===s||(l=[])):(l=l||[]).push(p,s))}n&&(l=l||[]).push("style",n);var p=l;(t.updateQueue=p)&&(t.flags|=4)}};xu=function(e,t,n,a){n!==a&&(t.flags|=4)};function In(e,t){if(!Y)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:a.sibling=null}}function ie(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,a=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags&14680064,a|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,a|=i.subtreeFlags,a|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=a,e.childLanes=n,t}function nd(e,t,n){var a=t.pendingProps;switch(Po(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ie(t),null;case 1:return me(t.type)&&Za(),ie(t),null;case 3:return a=t.stateNode,sn(),E(de),E(oe),Do(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Ia(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Re!==null&&(Jl(Re),Re=null))),Gl(e,t),ie(t),null;case 5:Mo(t);var i=Ct(Zn.current);if(n=t.type,e!==null&&t.stateNode!=null)gu(e,t,n,a,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!a){if(t.stateNode===null)throw Error(T(166));return ie(t),null}if(e=Ct(qe.current),Ia(t)){a=t.stateNode,n=t.type;var l=t.memoizedProps;switch(a[Ee]=t,a[Vn]=l,e=(t.mode&1)!==0,n){case"dialog":_("cancel",a),_("close",a);break;case"iframe":case"object":case"embed":_("load",a);break;case"video":case"audio":for(i=0;i<Nn.length;i++)_(Nn[i],a);break;case"source":_("error",a);break;case"img":case"image":case"link":_("error",a),_("load",a);break;case"details":_("toggle",a);break;case"input":ur(a,l),_("invalid",a);break;case"select":a._wrapperState={wasMultiple:!!l.multiple},_("invalid",a);break;case"textarea":cr(a,l),_("invalid",a)}yl(n,l),i=null;for(var o in l)if(l.hasOwnProperty(o)){var r=l[o];o==="children"?typeof r=="string"?a.textContent!==r&&(l.suppressHydrationWarning!==!0&&va(a.textContent,r,e),i=["children",r]):typeof r=="number"&&a.textContent!==""+r&&(l.suppressHydrationWarning!==!0&&va(a.textContent,r,e),i=["children",""+r]):Yn.hasOwnProperty(o)&&r!=null&&o==="onScroll"&&_("scroll",a)}switch(n){case"input":ma(a),fr(a,l,!0);break;case"textarea":ma(a),dr(a);break;case"select":case"option":break;default:typeof l.onClick=="function"&&(a.onclick=$a)}a=i,t.updateQueue=a,a!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Gs(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof a.is=="string"?e=o.createElement(n,{is:a.is}):(e=o.createElement(n),n==="select"&&(o=e,a.multiple?o.multiple=!0:a.size&&(o.size=a.size))):e=o.createElementNS(e,n),e[Ee]=t,e[Vn]=a,hu(e,t,!1,!1),t.stateNode=e;e:{switch(o=bl(n,a),n){case"dialog":_("cancel",e),_("close",e),i=a;break;case"iframe":case"object":case"embed":_("load",e),i=a;break;case"video":case"audio":for(i=0;i<Nn.length;i++)_(Nn[i],e);i=a;break;case"source":_("error",e),i=a;break;case"img":case"image":case"link":_("error",e),_("load",e),i=a;break;case"details":_("toggle",e),i=a;break;case"input":ur(e,a),i=dl(e,a),_("invalid",e);break;case"option":i=a;break;case"select":e._wrapperState={wasMultiple:!!a.multiple},i=B({},a,{value:void 0}),_("invalid",e);break;case"textarea":cr(e,a),i=gl(e,a),_("invalid",e);break;default:i=a}yl(n,i),r=i;for(l in r)if(r.hasOwnProperty(l)){var s=r[l];l==="style"?Us(e,s):l==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&Hs(e,s)):l==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&qn(e,s):typeof s=="number"&&qn(e,""+s):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Yn.hasOwnProperty(l)?s!=null&&l==="onScroll"&&_("scroll",e):s!=null&&uo(e,l,s,o))}switch(n){case"input":ma(e),fr(e,a,!1);break;case"textarea":ma(e),dr(e);break;case"option":a.value!=null&&e.setAttribute("value",""+ht(a.value));break;case"select":e.multiple=!!a.multiple,l=a.value,l!=null?Zt(e,!!a.multiple,l,!1):a.defaultValue!=null&&Zt(e,!!a.multiple,a.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=$a)}switch(n){case"button":case"input":case"select":case"textarea":a=!!a.autoFocus;break e;case"img":a=!0;break e;default:a=!1}}a&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return ie(t),null;case 6:if(e&&t.stateNode!=null)xu(e,t,e.memoizedProps,a);else{if(typeof a!="string"&&t.stateNode===null)throw Error(T(166));if(n=Ct(Zn.current),Ct(qe.current),Ia(t)){if(a=t.stateNode,n=t.memoizedProps,a[Ee]=t,(l=a.nodeValue!==n)&&(e=ye,e!==null))switch(e.tag){case 3:va(a.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&va(a.nodeValue,n,(e.mode&1)!==0)}l&&(t.flags|=4)}else a=(n.nodeType===9?n:n.ownerDocument).createTextNode(a),a[Ee]=t,t.stateNode=a}return ie(t),null;case 13:if(E(q),a=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Y&&xe!==null&&t.mode&1&&!(t.flags&128))Dp(),on(),t.flags|=98560,l=!1;else if(l=Ia(t),a!==null&&a.dehydrated!==null){if(e===null){if(!l)throw Error(T(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(T(317));l[Ee]=t}else on(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;ie(t),l=!1}else Re!==null&&(Jl(Re),Re=null),l=!0;if(!l)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(a=a!==null,a!==(e!==null&&e.memoizedState!==null)&&a&&(t.child.flags|=8192,t.mode&1&&(e===null||q.current&1?$===0&&($=3):Ko())),t.updateQueue!==null&&(t.flags|=4),ie(t),null);case 4:return sn(),Gl(e,t),e===null&&Kn(t.stateNode.containerInfo),ie(t),null;case 10:return ko(t.type._context),ie(t),null;case 17:return me(t.type)&&Za(),ie(t),null;case 19:if(E(q),l=t.memoizedState,l===null)return ie(t),null;if(a=(t.flags&128)!==0,o=l.rendering,o===null)if(a)In(l,!1);else{if($!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ii(e),o!==null){for(t.flags|=128,In(l,!1),a=o.updateQueue,a!==null&&(t.updateQueue=a,t.flags|=4),t.subtreeFlags=0,a=n,n=t.child;n!==null;)l=n,e=a,l.flags&=14680066,o=l.alternate,o===null?(l.childLanes=0,l.lanes=e,l.child=null,l.subtreeFlags=0,l.memoizedProps=null,l.memoizedState=null,l.updateQueue=null,l.dependencies=null,l.stateNode=null):(l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.subtreeFlags=0,l.deletions=null,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,l.type=o.type,e=o.dependencies,l.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return A(q,q.current&1|2),t.child}e=e.sibling}l.tail!==null&&H()>un&&(t.flags|=128,a=!0,In(l,!1),t.lanes=4194304)}else{if(!a)if(e=ii(o),e!==null){if(t.flags|=128,a=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),In(l,!0),l.tail===null&&l.tailMode==="hidden"&&!o.alternate&&!Y)return ie(t),null}else 2*H()-l.renderingStartTime>un&&n!==1073741824&&(t.flags|=128,a=!0,In(l,!1),t.lanes=4194304);l.isBackwards?(o.sibling=t.child,t.child=o):(n=l.last,n!==null?n.sibling=o:t.child=o,l.last=o)}return l.tail!==null?(t=l.tail,l.rendering=t,l.tail=t.sibling,l.renderingStartTime=H(),t.sibling=null,n=q.current,A(q,a?n&1|2:n&1),t):(ie(t),null);case 22:case 23:return Ho(),a=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==a&&(t.flags|=8192),a&&t.mode&1?ge&1073741824&&(ie(t),t.subtreeFlags&6&&(t.flags|=8192)):ie(t),null;case 24:return null;case 25:return null}throw Error(T(156,t.tag))}function ad(e,t){switch(Po(t),t.tag){case 1:return me(t.type)&&Za(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return sn(),E(de),E(oe),Do(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Mo(t),null;case 13:if(E(q),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(T(340));on()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return E(q),null;case 4:return sn(),null;case 10:return ko(t.type._context),null;case 22:case 23:return Ho(),null;case 24:return null;default:return null}}var Pa=!1,le=!1,id=typeof WeakSet=="function"?WeakSet:Set,O=null;function Vt(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(a){X(e,t,a)}else n.current=null}function Hl(e,t,n){try{n()}catch(a){X(e,t,a)}}var ns=!1;function ld(e,t){if(wl=Ka,e=vp(),Lo(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var a=n.getSelection&&n.getSelection();if(a&&a.rangeCount!==0){n=a.anchorNode;var i=a.anchorOffset,l=a.focusNode;a=a.focusOffset;try{n.nodeType,l.nodeType}catch{n=null;break e}var o=0,r=-1,s=-1,p=0,m=0,f=e,h=null;t:for(;;){for(var b;f!==n||i!==0&&f.nodeType!==3||(r=o+i),f!==l||a!==0&&f.nodeType!==3||(s=o+a),f.nodeType===3&&(o+=f.nodeValue.length),(b=f.firstChild)!==null;)h=f,f=b;for(;;){if(f===e)break t;if(h===n&&++p===i&&(r=o),h===l&&++m===a&&(s=o),(b=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=b}n=r===-1||s===-1?null:{start:r,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for(kl={focusedElem:e,selectionRange:n},Ka=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var g=y.memoizedProps,v=y.memoizedState,c=t.stateNode,u=c.getSnapshotBeforeUpdate(t.elementType===t.type?g:ke(t.type,g),v);c.__reactInternalSnapshotBeforeUpdate=u}break;case 3:var d=t.stateNode.containerInfo;d.nodeType===1?d.textContent="":d.nodeType===9&&d.documentElement&&d.removeChild(d.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(T(163))}}catch(x){X(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return y=ns,ns=!1,y}function An(e,t,n){var a=t.updateQueue;if(a=a!==null?a.lastEffect:null,a!==null){var i=a=a.next;do{if((i.tag&e)===e){var l=i.destroy;i.destroy=void 0,l!==void 0&&Hl(t,n,l)}i=i.next}while(i!==a)}}function vi(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var a=n.create;n.destroy=a()}n=n.next}while(n!==t)}}function Kl(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function yu(e){var t=e.alternate;t!==null&&(e.alternate=null,yu(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Ee],delete t[Vn],delete t[zl],delete t[jc],delete t[Bc])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function bu(e){return e.tag===5||e.tag===3||e.tag===4}function as(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||bu(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ul(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$a));else if(a!==4&&(e=e.child,e!==null))for(Ul(e,t,n),e=e.sibling;e!==null;)Ul(e,t,n),e=e.sibling}function Vl(e,t,n){var a=e.tag;if(a===5||a===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(a!==4&&(e=e.child,e!==null))for(Vl(e,t,n),e=e.sibling;e!==null;)Vl(e,t,n),e=e.sibling}var ee=null,Fe=!1;function Qe(e,t,n){for(n=n.child;n!==null;)Tu(e,t,n),n=n.sibling}function Tu(e,t,n){if(Ye&&typeof Ye.onCommitFiberUnmount=="function")try{Ye.onCommitFiberUnmount(mi,n)}catch{}switch(n.tag){case 5:le||Vt(n,t);case 6:var a=ee,i=Fe;ee=null,Qe(e,t,n),ee=a,Fe=i,ee!==null&&(Fe?(e=ee,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):ee.removeChild(n.stateNode));break;case 18:ee!==null&&(Fe?(e=ee,n=n.stateNode,e.nodeType===8?$i(e.parentNode,n):e.nodeType===1&&$i(e,n),Wn(e)):$i(ee,n.stateNode));break;case 4:a=ee,i=Fe,ee=n.stateNode.containerInfo,Fe=!0,Qe(e,t,n),ee=a,Fe=i;break;case 0:case 11:case 14:case 15:if(!le&&(a=n.updateQueue,a!==null&&(a=a.lastEffect,a!==null))){i=a=a.next;do{var l=i,o=l.destroy;l=l.tag,o!==void 0&&(l&2||l&4)&&Hl(n,t,o),i=i.next}while(i!==a)}Qe(e,t,n);break;case 1:if(!le&&(Vt(n,t),a=n.stateNode,typeof a.componentWillUnmount=="function"))try{a.props=n.memoizedProps,a.state=n.memoizedState,a.componentWillUnmount()}catch(r){X(n,t,r)}Qe(e,t,n);break;case 21:Qe(e,t,n);break;case 22:n.mode&1?(le=(a=le)||n.memoizedState!==null,Qe(e,t,n),le=a):Qe(e,t,n);break;default:Qe(e,t,n)}}function is(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new id),t.forEach(function(a){var i=md.bind(null,e,a);n.has(a)||(n.add(a),a.then(i,i))})}}function we(e,t){var n=t.deletions;if(n!==null)for(var a=0;a<n.length;a++){var i=n[a];try{var l=e,o=t,r=o;e:for(;r!==null;){switch(r.tag){case 5:ee=r.stateNode,Fe=!1;break e;case 3:ee=r.stateNode.containerInfo,Fe=!0;break e;case 4:ee=r.stateNode.containerInfo,Fe=!0;break e}r=r.return}if(ee===null)throw Error(T(160));Tu(l,o,i),ee=null,Fe=!1;var s=i.alternate;s!==null&&(s.return=null),i.return=null}catch(p){X(i,t,p)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Su(t,e),t=t.sibling}function Su(e,t){var n=e.alternate,a=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(we(t,e),Ae(e),a&4){try{An(3,e,e.return),vi(3,e)}catch(g){X(e,e.return,g)}try{An(5,e,e.return)}catch(g){X(e,e.return,g)}}break;case 1:we(t,e),Ae(e),a&512&&n!==null&&Vt(n,n.return);break;case 5:if(we(t,e),Ae(e),a&512&&n!==null&&Vt(n,n.return),e.flags&32){var i=e.stateNode;try{qn(i,"")}catch(g){X(e,e.return,g)}}if(a&4&&(i=e.stateNode,i!=null)){var l=e.memoizedProps,o=n!==null?n.memoizedProps:l,r=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{r==="input"&&l.type==="radio"&&l.name!=null&&Xs(i,l),bl(r,o);var p=bl(r,l);for(o=0;o<s.length;o+=2){var m=s[o],f=s[o+1];m==="style"?Us(i,f):m==="dangerouslySetInnerHTML"?Hs(i,f):m==="children"?qn(i,f):uo(i,m,f,p)}switch(r){case"input":ml(i,l);break;case"textarea":Ws(i,l);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!l.multiple;var b=l.value;b!=null?Zt(i,!!l.multiple,b,!1):h!==!!l.multiple&&(l.defaultValue!=null?Zt(i,!!l.multiple,l.defaultValue,!0):Zt(i,!!l.multiple,l.multiple?[]:"",!1))}i[Vn]=l}catch(g){X(e,e.return,g)}}break;case 6:if(we(t,e),Ae(e),a&4){if(e.stateNode===null)throw Error(T(162));i=e.stateNode,l=e.memoizedProps;try{i.nodeValue=l}catch(g){X(e,e.return,g)}}break;case 3:if(we(t,e),Ae(e),a&4&&n!==null&&n.memoizedState.isDehydrated)try{Wn(t.containerInfo)}catch(g){X(e,e.return,g)}break;case 4:we(t,e),Ae(e);break;case 13:we(t,e),Ae(e),i=e.child,i.flags&8192&&(l=i.memoizedState!==null,i.stateNode.isHidden=l,!l||i.alternate!==null&&i.alternate.memoizedState!==null||(Wo=H())),a&4&&is(e);break;case 22:if(m=n!==null&&n.memoizedState!==null,e.mode&1?(le=(p=le)||m,we(t,e),le=p):we(t,e),Ae(e),a&8192){if(p=e.memoizedState!==null,(e.stateNode.isHidden=p)&&!m&&e.mode&1)for(O=e,m=e.child;m!==null;){for(f=O=m;O!==null;){switch(h=O,b=h.child,h.tag){case 0:case 11:case 14:case 15:An(4,h,h.return);break;case 1:Vt(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){a=h,n=h.return;try{t=a,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(g){X(a,n,g)}}break;case 5:Vt(h,h.return);break;case 22:if(h.memoizedState!==null){os(f);continue}}b!==null?(b.return=h,O=b):os(f)}m=m.sibling}e:for(m=null,f=e;;){if(f.tag===5){if(m===null){m=f;try{i=f.stateNode,p?(l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none"):(r=f.stateNode,s=f.memoizedProps.style,o=s!=null&&s.hasOwnProperty("display")?s.display:null,r.style.display=Ks("display",o))}catch(g){X(e,e.return,g)}}}else if(f.tag===6){if(m===null)try{f.stateNode.nodeValue=p?"":f.memoizedProps}catch(g){X(e,e.return,g)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;m===f&&(m=null),f=f.return}m===f&&(m=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:we(t,e),Ae(e),a&4&&is(e);break;case 21:break;default:we(t,e),Ae(e)}}function Ae(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(bu(n)){var a=n;break e}n=n.return}throw Error(T(160))}switch(a.tag){case 5:var i=a.stateNode;a.flags&32&&(qn(i,""),a.flags&=-33);var l=as(e);Vl(e,l,i);break;case 3:case 4:var o=a.stateNode.containerInfo,r=as(e);Ul(e,r,o);break;default:throw Error(T(161))}}catch(s){X(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function od(e,t,n){O=e,vu(e)}function vu(e,t,n){for(var a=(e.mode&1)!==0;O!==null;){var i=O,l=i.child;if(i.tag===22&&a){var o=i.memoizedState!==null||Pa;if(!o){var r=i.alternate,s=r!==null&&r.memoizedState!==null||le;r=Pa;var p=le;if(Pa=o,(le=s)&&!p)for(O=i;O!==null;)o=O,s=o.child,o.tag===22&&o.memoizedState!==null?rs(i):s!==null?(s.return=o,O=s):rs(i);for(;l!==null;)O=l,vu(l),l=l.sibling;O=i,Pa=r,le=p}ls(e)}else i.subtreeFlags&8772&&l!==null?(l.return=i,O=l):ls(e)}}function ls(e){for(;O!==null;){var t=O;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:le||vi(5,t);break;case 1:var a=t.stateNode;if(t.flags&4&&!le)if(n===null)a.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ke(t.type,n.memoizedProps);a.componentDidUpdate(i,n.memoizedState,a.__reactInternalSnapshotBeforeUpdate)}var l=t.updateQueue;l!==null&&Xr(t,l,a);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Xr(t,o,n)}break;case 5:var r=t.stateNode;if(n===null&&t.flags&4){n=r;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var p=t.alternate;if(p!==null){var m=p.memoizedState;if(m!==null){var f=m.dehydrated;f!==null&&Wn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(T(163))}le||t.flags&512&&Kl(t)}catch(h){X(t,t.return,h)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function os(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function rs(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{vi(4,t)}catch(s){X(t,n,s)}break;case 1:var a=t.stateNode;if(typeof a.componentDidMount=="function"){var i=t.return;try{a.componentDidMount()}catch(s){X(t,i,s)}}var l=t.return;try{Kl(t)}catch(s){X(t,l,s)}break;case 5:var o=t.return;try{Kl(t)}catch(s){X(t,o,s)}}}catch(s){X(t,t.return,s)}if(t===e){O=null;break}var r=t.sibling;if(r!==null){r.return=t.return,O=r;break}O=t.return}}var rd=Math.ceil,ri=$e.ReactCurrentDispatcher,Bo=$e.ReactCurrentOwner,Oe=$e.ReactCurrentBatchConfig,M=0,J=null,U=null,te=0,ge=0,$t=yt(0),$=0,ta=null,zt=0,Ii=0,Xo=0,_n=null,fe=null,Wo=0,un=1/0,je=null,si=!1,$l=null,ft=null,Ca=!1,it=null,pi=0,En=0,Zl=null,Ea=-1,Ya=0;function se(){return M&6?H():Ea!==-1?Ea:Ea=H()}function ct(e){return e.mode&1?M&2&&te!==0?te&-te:Wc.transition!==null?(Ya===0&&(Ya=op()),Ya):(e=D,e!==0||(e=window.event,e=e===void 0?16:dp(e.type)),e):1}function Me(e,t,n,a){if(50<En)throw En=0,Zl=null,Error(T(185));la(e,n,a),(!(M&2)||e!==J)&&(e===J&&(!(M&2)&&(Ii|=n),$===4&&nt(e,te)),he(e,a),n===1&&M===0&&!(t.mode&1)&&(un=H()+500,bi&&bt()))}function he(e,t){var n=e.callbackNode;Wf(e,t);var a=Ha(e,e===J?te:0);if(a===0)n!==null&&gr(n),e.callbackNode=null,e.callbackPriority=0;else if(t=a&-a,e.callbackPriority!==t){if(n!=null&&gr(n),t===1)e.tag===0?Xc(ss.bind(null,e)):Rp(ss.bind(null,e)),Yc(function(){!(M&6)&&bt()}),n=null;else{switch(rp(a)){case 1:n=go;break;case 4:n=ip;break;case 16:n=Ga;break;case 536870912:n=lp;break;default:n=Ga}n=ku(n,Iu.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Iu(e,t){if(Ea=-1,Ya=0,M&6)throw Error(T(327));var n=e.callbackNode;if(nn()&&e.callbackNode!==n)return null;var a=Ha(e,e===J?te:0);if(a===0)return null;if(a&30||a&e.expiredLanes||t)t=ui(e,a);else{t=a;var i=M;M|=2;var l=Ou();(J!==e||te!==t)&&(je=null,un=H()+500,Nt(e,t));do try{ud();break}catch(r){Lu(e,r)}while(!0);wo(),ri.current=l,M=i,U!==null?t=0:(J=null,te=0,t=$)}if(t!==0){if(t===2&&(i=Ll(e),i!==0&&(a=i,t=Ql(e,i))),t===1)throw n=ta,Nt(e,0),nt(e,a),he(e,H()),n;if(t===6)nt(e,a);else{if(i=e.current.alternate,!(a&30)&&!sd(i)&&(t=ui(e,a),t===2&&(l=Ll(e),l!==0&&(a=l,t=Ql(e,l))),t===1))throw n=ta,Nt(e,0),nt(e,a),he(e,H()),n;switch(e.finishedWork=i,e.finishedLanes=a,t){case 0:case 1:throw Error(T(345));case 2:Lt(e,fe,je);break;case 3:if(nt(e,a),(a&130023424)===a&&(t=Wo+500-H(),10<t)){if(Ha(e,0)!==0)break;if(i=e.suspendedLanes,(i&a)!==a){se(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Rl(Lt.bind(null,e,fe,je),t);break}Lt(e,fe,je);break;case 4:if(nt(e,a),(a&4194240)===a)break;for(t=e.eventTimes,i=-1;0<a;){var o=31-ze(a);l=1<<o,o=t[o],o>i&&(i=o),a&=~l}if(a=i,a=H()-a,a=(120>a?120:480>a?480:1080>a?1080:1920>a?1920:3e3>a?3e3:4320>a?4320:1960*rd(a/1960))-a,10<a){e.timeoutHandle=Rl(Lt.bind(null,e,fe,je),a);break}Lt(e,fe,je);break;case 5:Lt(e,fe,je);break;default:throw Error(T(329))}}}return he(e,H()),e.callbackNode===n?Iu.bind(null,e):null}function Ql(e,t){var n=_n;return e.current.memoizedState.isDehydrated&&(Nt(e,t).flags|=256),e=ui(e,t),e!==2&&(t=fe,fe=n,t!==null&&Jl(t)),e}function Jl(e){fe===null?fe=e:fe.push.apply(fe,e)}function sd(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var a=0;a<n.length;a++){var i=n[a],l=i.getSnapshot;i=i.value;try{if(!De(l(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nt(e,t){for(t&=~Xo,t&=~Ii,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ze(t),a=1<<n;e[n]=-1,t&=~a}}function ss(e){if(M&6)throw Error(T(327));nn();var t=Ha(e,0);if(!(t&1))return he(e,H()),null;var n=ui(e,t);if(e.tag!==0&&n===2){var a=Ll(e);a!==0&&(t=a,n=Ql(e,a))}if(n===1)throw n=ta,Nt(e,0),nt(e,t),he(e,H()),n;if(n===6)throw Error(T(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Lt(e,fe,je),he(e,H()),null}function Go(e,t){var n=M;M|=1;try{return e(t)}finally{M=n,M===0&&(un=H()+500,bi&&bt())}}function Mt(e){it!==null&&it.tag===0&&!(M&6)&&nn();var t=M;M|=1;var n=Oe.transition,a=D;try{if(Oe.transition=null,D=1,e)return e()}finally{D=a,Oe.transition=n,M=t,!(M&6)&&bt()}}function Ho(){ge=$t.current,E($t)}function Nt(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ec(n)),U!==null)for(n=U.return;n!==null;){var a=n;switch(Po(a),a.tag){case 1:a=a.type.childContextTypes,a!=null&&Za();break;case 3:sn(),E(de),E(oe),Do();break;case 5:Mo(a);break;case 4:sn();break;case 13:E(q);break;case 19:E(q);break;case 10:ko(a.type._context);break;case 22:case 23:Ho()}n=n.return}if(J=e,U=e=dt(e.current,null),te=ge=t,$=0,ta=null,Xo=Ii=zt=0,fe=_n=null,Pt!==null){for(t=0;t<Pt.length;t++)if(n=Pt[t],a=n.interleaved,a!==null){n.interleaved=null;var i=a.next,l=n.pending;if(l!==null){var o=l.next;l.next=i,a.next=o}n.pending=a}Pt=null}return e}function Lu(e,t){do{var n=U;try{if(wo(),Da.current=oi,li){for(var a=j.memoizedState;a!==null;){var i=a.queue;i!==null&&(i.pending=null),a=a.next}li=!1}if(Rt=0,Q=V=j=null,Dn=!1,Qn=0,Bo.current=null,n===null||n.return===null){$=1,ta=t,U=null;break}e:{var l=e,o=n.return,r=n,s=t;if(t=te,r.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var p=s,m=r,f=m.tag;if(!(m.mode&1)&&(f===0||f===11||f===15)){var h=m.alternate;h?(m.updateQueue=h.updateQueue,m.memoizedState=h.memoizedState,m.lanes=h.lanes):(m.updateQueue=null,m.memoizedState=null)}var b=Vr(o);if(b!==null){b.flags&=-257,$r(b,o,r,l,t),b.mode&1&&Ur(l,p,t),t=b,s=p;var y=t.updateQueue;if(y===null){var g=new Set;g.add(s),t.updateQueue=g}else y.add(s);break e}else{if(!(t&1)){Ur(l,p,t),Ko();break e}s=Error(T(426))}}else if(Y&&r.mode&1){var v=Vr(o);if(v!==null){!(v.flags&65536)&&(v.flags|=256),$r(v,o,r,l,t),Co(pn(s,r));break e}}l=s=pn(s,r),$!==4&&($=2),_n===null?_n=[l]:_n.push(l),l=o;do{switch(l.tag){case 3:l.flags|=65536,t&=-t,l.lanes|=t;var c=ru(l,s,t);Br(l,c);break e;case 1:r=s;var u=l.type,d=l.stateNode;if(!(l.flags&128)&&(typeof u.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(ft===null||!ft.has(d)))){l.flags|=65536,t&=-t,l.lanes|=t;var x=su(l,r,t);Br(l,x);break e}}l=l.return}while(l!==null)}Cu(n)}catch(L){t=L,U===n&&n!==null&&(U=n=n.return);continue}break}while(!0)}function Ou(){var e=ri.current;return ri.current=oi,e===null?oi:e}function Ko(){($===0||$===3||$===2)&&($=4),J===null||!(zt&268435455)&&!(Ii&268435455)||nt(J,te)}function ui(e,t){var n=M;M|=2;var a=Ou();(J!==e||te!==t)&&(je=null,Nt(e,t));do try{pd();break}catch(i){Lu(e,i)}while(!0);if(wo(),M=n,ri.current=a,U!==null)throw Error(T(261));return J=null,te=0,$}function pd(){for(;U!==null;)Pu(U)}function ud(){for(;U!==null&&!Df();)Pu(U)}function Pu(e){var t=wu(e.alternate,e,ge);e.memoizedProps=e.pendingProps,t===null?Cu(e):U=t,Bo.current=null}function Cu(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ad(n,t),n!==null){n.flags&=32767,U=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{$=6,U=null;return}}else if(n=nd(n,t,ge),n!==null){U=n;return}if(t=t.sibling,t!==null){U=t;return}U=t=e}while(t!==null);$===0&&($=5)}function Lt(e,t,n){var a=D,i=Oe.transition;try{Oe.transition=null,D=1,fd(e,t,n,a)}finally{Oe.transition=i,D=a}return null}function fd(e,t,n,a){do nn();while(it!==null);if(M&6)throw Error(T(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(T(177));e.callbackNode=null,e.callbackPriority=0;var l=n.lanes|n.childLanes;if(Gf(e,l),e===J&&(U=J=null,te=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ca||(Ca=!0,ku(Ga,function(){return nn(),null})),l=(n.flags&15990)!==0,n.subtreeFlags&15990||l){l=Oe.transition,Oe.transition=null;var o=D;D=1;var r=M;M|=4,Bo.current=null,ld(e,n),Su(n,e),Fc(kl),Ka=!!wl,kl=wl=null,e.current=n,od(n),Af(),M=r,D=o,Oe.transition=l}else e.current=n;if(Ca&&(Ca=!1,it=e,pi=i),l=e.pendingLanes,l===0&&(ft=null),Yf(n.stateNode),he(e,H()),t!==null)for(a=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],a(i.value,{componentStack:i.stack,digest:i.digest});if(si)throw si=!1,e=$l,$l=null,e;return pi&1&&e.tag!==0&&nn(),l=e.pendingLanes,l&1?e===Zl?En++:(En=0,Zl=e):En=0,bt(),null}function nn(){if(it!==null){var e=rp(pi),t=Oe.transition,n=D;try{if(Oe.transition=null,D=16>e?16:e,it===null)var a=!1;else{if(e=it,it=null,pi=0,M&6)throw Error(T(331));var i=M;for(M|=4,O=e.current;O!==null;){var l=O,o=l.child;if(O.flags&16){var r=l.deletions;if(r!==null){for(var s=0;s<r.length;s++){var p=r[s];for(O=p;O!==null;){var m=O;switch(m.tag){case 0:case 11:case 15:An(8,m,l)}var f=m.child;if(f!==null)f.return=m,O=f;else for(;O!==null;){m=O;var h=m.sibling,b=m.return;if(yu(m),m===p){O=null;break}if(h!==null){h.return=b,O=h;break}O=b}}}var y=l.alternate;if(y!==null){var g=y.child;if(g!==null){y.child=null;do{var v=g.sibling;g.sibling=null,g=v}while(g!==null)}}O=l}}if(l.subtreeFlags&2064&&o!==null)o.return=l,O=o;else e:for(;O!==null;){if(l=O,l.flags&2048)switch(l.tag){case 0:case 11:case 15:An(9,l,l.return)}var c=l.sibling;if(c!==null){c.return=l.return,O=c;break e}O=l.return}}var u=e.current;for(O=u;O!==null;){o=O;var d=o.child;if(o.subtreeFlags&2064&&d!==null)d.return=o,O=d;else e:for(o=u;O!==null;){if(r=O,r.flags&2048)try{switch(r.tag){case 0:case 11:case 15:vi(9,r)}}catch(L){X(r,r.return,L)}if(r===o){O=null;break e}var x=r.sibling;if(x!==null){x.return=r.return,O=x;break e}O=r.return}}if(M=i,bt(),Ye&&typeof Ye.onPostCommitFiberRoot=="function")try{Ye.onPostCommitFiberRoot(mi,e)}catch{}a=!0}return a}finally{D=n,Oe.transition=t}}return!1}function ps(e,t,n){t=pn(n,t),t=ru(e,t,1),e=ut(e,t,1),t=se(),e!==null&&(la(e,1,t),he(e,t))}function X(e,t,n){if(e.tag===3)ps(e,e,n);else for(;t!==null;){if(t.tag===3){ps(t,e,n);break}else if(t.tag===1){var a=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(ft===null||!ft.has(a))){e=pn(n,e),e=su(t,e,1),t=ut(t,e,1),e=se(),t!==null&&(la(t,1,e),he(t,e));break}}t=t.return}}function cd(e,t,n){var a=e.pingCache;a!==null&&a.delete(t),t=se(),e.pingedLanes|=e.suspendedLanes&n,J===e&&(te&n)===n&&($===4||$===3&&(te&130023424)===te&&500>H()-Wo?Nt(e,0):Xo|=n),he(e,t)}function Nu(e,t){t===0&&(e.mode&1?(t=xa,xa<<=1,!(xa&130023424)&&(xa=4194304)):t=1);var n=se();e=Ue(e,t),e!==null&&(la(e,t,n),he(e,n))}function dd(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Nu(e,n)}function md(e,t){var n=0;switch(e.tag){case 13:var a=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:a=e.stateNode;break;default:throw Error(T(314))}a!==null&&a.delete(t),Nu(e,n)}var wu;wu=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||de.current)ce=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return ce=!1,td(e,t,n);ce=!!(e.flags&131072)}else ce=!1,Y&&t.flags&1048576&&zp(t,ei,t.index);switch(t.lanes=0,t.tag){case 2:var a=t.type;_a(e,t),e=t.pendingProps;var i=ln(t,oe.current);tn(t,n),i=_o(null,t,a,e,i,n);var l=Eo();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,me(a)?(l=!0,Qa(t)):l=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ro(t),i.updater=Si,t.stateNode=i,i._reactInternals=t,Yl(t,a,e,n),t=Bl(null,t,a,!0,l,n)):(t.tag=0,Y&&l&&Oo(t),re(null,t,i,n),t=t.child),t;case 16:a=t.elementType;e:{switch(_a(e,t),e=t.pendingProps,i=a._init,a=i(a._payload),t.type=a,i=t.tag=gd(a),e=ke(a,e),i){case 0:t=jl(null,t,a,e,n);break e;case 1:t=Jr(null,t,a,e,n);break e;case 11:t=Zr(null,t,a,e,n);break e;case 14:t=Qr(null,t,a,ke(a.type,e),n);break e}throw Error(T(306,a,""))}return t;case 0:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:ke(a,i),jl(e,t,a,i,n);case 1:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:ke(a,i),Jr(e,t,a,i,n);case 3:e:{if(cu(t),e===null)throw Error(T(387));a=t.pendingProps,l=t.memoizedState,i=l.element,Yp(e,t),ai(t,a,null,n);var o=t.memoizedState;if(a=o.element,l.isDehydrated)if(l={element:a,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){i=pn(Error(T(423)),t),t=es(e,t,a,n,i);break e}else if(a!==i){i=pn(Error(T(424)),t),t=es(e,t,a,n,i);break e}else for(xe=pt(t.stateNode.containerInfo.firstChild),ye=t,Y=!0,Re=null,n=_p(t,null,a,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(on(),a===i){t=Ve(e,t,n);break e}re(e,t,a,n)}t=t.child}return t;case 5:return qp(t),e===null&&Al(t),a=t.type,i=t.pendingProps,l=e!==null?e.memoizedProps:null,o=i.children,Fl(a,i)?o=null:l!==null&&Fl(a,l)&&(t.flags|=32),fu(e,t),re(e,t,o,n),t.child;case 6:return e===null&&Al(t),null;case 13:return du(e,t,n);case 4:return zo(t,t.stateNode.containerInfo),a=t.pendingProps,e===null?t.child=rn(t,null,a,n):re(e,t,a,n),t.child;case 11:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:ke(a,i),Zr(e,t,a,i,n);case 7:return re(e,t,t.pendingProps,n),t.child;case 8:return re(e,t,t.pendingProps.children,n),t.child;case 12:return re(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(a=t.type._context,i=t.pendingProps,l=t.memoizedProps,o=i.value,A(ti,a._currentValue),a._currentValue=o,l!==null)if(De(l.value,o)){if(l.children===i.children&&!de.current){t=Ve(e,t,n);break e}}else for(l=t.child,l!==null&&(l.return=t);l!==null;){var r=l.dependencies;if(r!==null){o=l.child;for(var s=r.firstContext;s!==null;){if(s.context===a){if(l.tag===1){s=Ge(-1,n&-n),s.tag=2;var p=l.updateQueue;if(p!==null){p=p.shared;var m=p.pending;m===null?s.next=s:(s.next=m.next,m.next=s),p.pending=s}}l.lanes|=n,s=l.alternate,s!==null&&(s.lanes|=n),_l(l.return,n,t),r.lanes|=n;break}s=s.next}}else if(l.tag===10)o=l.type===t.type?null:l.child;else if(l.tag===18){if(o=l.return,o===null)throw Error(T(341));o.lanes|=n,r=o.alternate,r!==null&&(r.lanes|=n),_l(o,n,t),o=l.sibling}else o=l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===t){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}re(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,a=t.pendingProps.children,tn(t,n),i=Pe(i),a=a(i),t.flags|=1,re(e,t,a,n),t.child;case 14:return a=t.type,i=ke(a,t.pendingProps),i=ke(a.type,i),Qr(e,t,a,i,n);case 15:return pu(e,t,t.type,t.pendingProps,n);case 17:return a=t.type,i=t.pendingProps,i=t.elementType===a?i:ke(a,i),_a(e,t),t.tag=1,me(a)?(e=!0,Qa(t)):e=!1,tn(t,n),ou(t,a,i),Yl(t,a,i,n),Bl(null,t,a,!0,e,n);case 19:return mu(e,t,n);case 22:return uu(e,t,n)}throw Error(T(156,t.tag))};function ku(e,t){return ap(e,t)}function hd(e,t,n,a){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Le(e,t,n,a){return new hd(e,t,n,a)}function Uo(e){return e=e.prototype,!(!e||!e.isReactComponent)}function gd(e){if(typeof e=="function")return Uo(e)?1:0;if(e!=null){if(e=e.$$typeof,e===co)return 11;if(e===mo)return 14}return 2}function dt(e,t){var n=e.alternate;return n===null?(n=Le(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function qa(e,t,n,a,i,l){var o=2;if(a=e,typeof e=="function")Uo(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case qt:return wt(n.children,i,l,t);case fo:o=8,i|=8;break;case pl:return e=Le(12,n,t,i|2),e.elementType=pl,e.lanes=l,e;case ul:return e=Le(13,n,t,i),e.elementType=ul,e.lanes=l,e;case fl:return e=Le(19,n,t,i),e.elementType=fl,e.lanes=l,e;case qs:return Li(n,i,l,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Es:o=10;break e;case Ys:o=9;break e;case co:o=11;break e;case mo:o=14;break e;case Je:o=16,a=null;break e}throw Error(T(130,e==null?e:typeof e,""))}return t=Le(o,n,t,i),t.elementType=e,t.type=a,t.lanes=l,t}function wt(e,t,n,a){return e=Le(7,e,a,t),e.lanes=n,e}function Li(e,t,n,a){return e=Le(22,e,a,t),e.elementType=qs,e.lanes=n,e.stateNode={isHidden:!1},e}function il(e,t,n){return e=Le(6,e,null,t),e.lanes=n,e}function ll(e,t,n){return t=Le(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function xd(e,t,n,a,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Yi(0),this.expirationTimes=Yi(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Yi(0),this.identifierPrefix=a,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Vo(e,t,n,a,i,l,o,r,s){return e=new xd(e,t,n,r,s),t===1?(t=1,l===!0&&(t|=8)):t=0,l=Le(3,null,null,t),e.current=l,l.stateNode=e,l.memoizedState={element:a,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ro(l),e}function yd(e,t,n){var a=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Yt,key:a==null?null:""+a,children:e,containerInfo:t,implementation:n}}function Fu(e){if(!e)return gt;e=e._reactInternals;e:{if(At(e)!==e||e.tag!==1)throw Error(T(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(me(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(T(171))}if(e.tag===1){var n=e.type;if(me(n))return Fp(e,n,t)}return t}function Ru(e,t,n,a,i,l,o,r,s){return e=Vo(n,a,!0,e,i,l,o,r,s),e.context=Fu(null),n=e.current,a=se(),i=ct(n),l=Ge(a,i),l.callback=t??null,ut(n,l,i),e.current.lanes=i,la(e,i,a),he(e,a),e}function Oi(e,t,n,a){var i=t.current,l=se(),o=ct(i);return n=Fu(n),t.context===null?t.context=n:t.pendingContext=n,t=Ge(l,o),t.payload={element:e},a=a===void 0?null:a,a!==null&&(t.callback=a),e=ut(i,t,o),e!==null&&(Me(e,i,o,l),Ma(e,i,o)),o}function fi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function us(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function $o(e,t){us(e,t),(e=e.alternate)&&us(e,t)}function bd(){return null}var zu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Zo(e){this._internalRoot=e}Pi.prototype.render=Zo.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(T(409));Oi(e,t,null,null)};Pi.prototype.unmount=Zo.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Mt(function(){Oi(null,e,null,null)}),t[Ke]=null}};function Pi(e){this._internalRoot=e}Pi.prototype.unstable_scheduleHydration=function(e){if(e){var t=up();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tt.length&&t!==0&&t<tt[n].priority;n++);tt.splice(n,0,e),n===0&&cp(e)}};function Qo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ci(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function fs(){}function Td(e,t,n,a,i){if(i){if(typeof a=="function"){var l=a;a=function(){var p=fi(o);l.call(p)}}var o=Ru(t,a,e,0,null,!1,!1,"",fs);return e._reactRootContainer=o,e[Ke]=o.current,Kn(e.nodeType===8?e.parentNode:e),Mt(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof a=="function"){var r=a;a=function(){var p=fi(s);r.call(p)}}var s=Vo(e,0,!1,null,null,!1,!1,"",fs);return e._reactRootContainer=s,e[Ke]=s.current,Kn(e.nodeType===8?e.parentNode:e),Mt(function(){Oi(t,s,n,a)}),s}function Ni(e,t,n,a,i){var l=n._reactRootContainer;if(l){var o=l;if(typeof i=="function"){var r=i;i=function(){var s=fi(o);r.call(s)}}Oi(t,o,e,i)}else o=Td(n,t,e,i,a);return fi(o)}sp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Cn(t.pendingLanes);n!==0&&(xo(t,n|1),he(t,H()),!(M&6)&&(un=H()+500,bt()))}break;case 13:Mt(function(){var a=Ue(e,1);if(a!==null){var i=se();Me(a,e,1,i)}}),$o(e,1)}};yo=function(e){if(e.tag===13){var t=Ue(e,134217728);if(t!==null){var n=se();Me(t,e,134217728,n)}$o(e,134217728)}};pp=function(e){if(e.tag===13){var t=ct(e),n=Ue(e,t);if(n!==null){var a=se();Me(n,e,t,a)}$o(e,t)}};up=function(){return D};fp=function(e,t){var n=D;try{return D=e,t()}finally{D=n}};Sl=function(e,t,n){switch(t){case"input":if(ml(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var a=n[t];if(a!==e&&a.form===e.form){var i=yi(a);if(!i)throw Error(T(90));Bs(a),ml(a,i)}}}break;case"textarea":Ws(e,n);break;case"select":t=n.value,t!=null&&Zt(e,!!n.multiple,t,!1)}};Zs=Go;Qs=Mt;var Sd={usingClientEntryPoint:!1,Events:[ra,Wt,yi,Vs,$s,Go]},Ln={findFiberByHostInstance:Ot,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},vd={bundleType:Ln.bundleType,version:Ln.version,rendererPackageName:Ln.rendererPackageName,rendererConfig:Ln.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$e.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=tp(e),e===null?null:e.stateNode},findFiberByHostInstance:Ln.findFiberByHostInstance||bd,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Na=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Na.isDisabled&&Na.supportsFiber)try{mi=Na.inject(vd),Ye=Na}catch{}}Te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Sd;Te.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Qo(t))throw Error(T(200));return yd(e,t,null,n)};Te.createRoot=function(e,t){if(!Qo(e))throw Error(T(299));var n=!1,a="",i=zu;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(a=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Vo(e,1,!1,null,null,n,!1,a,i),e[Ke]=t.current,Kn(e.nodeType===8?e.parentNode:e),new Zo(t)};Te.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(T(188)):(e=Object.keys(e).join(","),Error(T(268,e)));return e=tp(t),e=e===null?null:e.stateNode,e};Te.flushSync=function(e){return Mt(e)};Te.hydrate=function(e,t,n){if(!Ci(t))throw Error(T(200));return Ni(null,e,t,!0,n)};Te.hydrateRoot=function(e,t,n){if(!Qo(e))throw Error(T(405));var a=n!=null&&n.hydratedSources||null,i=!1,l="",o=zu;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(l=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=Ru(t,null,e,1,n??null,i,!1,l,o),e[Ke]=t.current,Kn(e),a)for(e=0;e<a.length;e++)n=a[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Pi(t)};Te.render=function(e,t,n){if(!Ci(t))throw Error(T(200));return Ni(null,e,t,!1,n)};Te.unmountComponentAtNode=function(e){if(!Ci(e))throw Error(T(40));return e._reactRootContainer?(Mt(function(){Ni(null,null,e,!1,function(){e._reactRootContainer=null,e[Ke]=null})}),!0):!1};Te.unstable_batchedUpdates=Go;Te.unstable_renderSubtreeIntoContainer=function(e,t,n,a){if(!Ci(n))throw Error(T(200));if(e==null||e._reactInternals===void 0)throw Error(T(38));return Ni(e,t,n,!1,a)};Te.version="18.3.1-next-f1338f8080-20240426";function Mu(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Mu)}catch(e){console.error(e)}}Mu(),Ms.exports=Te;var Id=Ms.exports,cs=Id;rl.createRoot=cs.createRoot,rl.hydrateRoot=cs.hydrateRoot;/**
 * @remix-run/router v1.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function na(){return na=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},na.apply(this,arguments)}var lt;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(lt||(lt={}));const ds="popstate";function Ld(e){e===void 0&&(e={});function t(i,l){let{pathname:o="/",search:r="",hash:s=""}=_t(i.location.hash.substr(1));return!o.startsWith("/")&&!o.startsWith(".")&&(o="/"+o),eo("",{pathname:o,search:r,hash:s},l.state&&l.state.usr||null,l.state&&l.state.key||"default")}function n(i,l){let o=i.document.querySelector("base"),r="";if(o&&o.getAttribute("href")){let s=i.location.href,p=s.indexOf("#");r=p===-1?s:s.slice(0,p)}return r+"#"+(typeof l=="string"?l:ci(l))}function a(i,l){wi(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(l)+")")}return Pd(t,n,a,e)}function K(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function wi(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Od(){return Math.random().toString(36).substr(2,8)}function ms(e,t){return{usr:e.state,key:e.key,idx:t}}function eo(e,t,n,a){return n===void 0&&(n=null),na({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?_t(t):t,{state:n,key:t&&t.key||a||Od()})}function ci(e){let{pathname:t="/",search:n="",hash:a=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function _t(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}function Pd(e,t,n,a){a===void 0&&(a={});let{window:i=document.defaultView,v5Compat:l=!1}=a,o=i.history,r=lt.Pop,s=null,p=m();p==null&&(p=0,o.replaceState(na({},o.state,{idx:p}),""));function m(){return(o.state||{idx:null}).idx}function f(){r=lt.Pop;let v=m(),c=v==null?null:v-p;p=v,s&&s({action:r,location:g.location,delta:c})}function h(v,c){r=lt.Push;let u=eo(g.location,v,c);n&&n(u,v),p=m()+1;let d=ms(u,p),x=g.createHref(u);try{o.pushState(d,"",x)}catch(L){if(L instanceof DOMException&&L.name==="DataCloneError")throw L;i.location.assign(x)}l&&s&&s({action:r,location:g.location,delta:1})}function b(v,c){r=lt.Replace;let u=eo(g.location,v,c);n&&n(u,v),p=m();let d=ms(u,p),x=g.createHref(u);o.replaceState(d,"",x),l&&s&&s({action:r,location:g.location,delta:0})}function y(v){let c=i.location.origin!=="null"?i.location.origin:i.location.href,u=typeof v=="string"?v:ci(v);return u=u.replace(/ $/,"%20"),K(c,"No window.location.(origin|href) available to create URL for href: "+u),new URL(u,c)}let g={get action(){return r},get location(){return e(i,o)},listen(v){if(s)throw new Error("A history only accepts one active listener");return i.addEventListener(ds,f),s=v,()=>{i.removeEventListener(ds,f),s=null}},createHref(v){return t(i,v)},createURL:y,encodeLocation(v){let c=y(v);return{pathname:c.pathname,search:c.search,hash:c.hash}},push:h,replace:b,go(v){return o.go(v)}};return g}var hs;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(hs||(hs={}));function Cd(e,t,n){return n===void 0&&(n="/"),Nd(e,t,n)}function Nd(e,t,n,a){let i=typeof t=="string"?_t(t):t,l=Jo(i.pathname||"/",n);if(l==null)return null;let o=Du(e);wd(o);let r=null;for(let s=0;r==null&&s<o.length;++s){let p=jd(l);r=Ed(o[s],p)}return r}function Du(e,t,n,a){t===void 0&&(t=[]),n===void 0&&(n=[]),a===void 0&&(a="");let i=(l,o,r)=>{let s={relativePath:r===void 0?l.path||"":r,caseSensitive:l.caseSensitive===!0,childrenIndex:o,route:l};s.relativePath.startsWith("/")&&(K(s.relativePath.startsWith(a),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+a+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(a.length));let p=mt([a,s.relativePath]),m=n.concat(s);l.children&&l.children.length>0&&(K(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),Du(l.children,t,m,p)),!(l.path==null&&!l.index)&&t.push({path:p,score:Ad(p,l.index),routesMeta:m})};return e.forEach((l,o)=>{var r;if(l.path===""||!((r=l.path)!=null&&r.includes("?")))i(l,o);else for(let s of Au(l.path))i(l,o,s)}),t}function Au(e){let t=e.split("/");if(t.length===0)return[];let[n,...a]=t,i=n.endsWith("?"),l=n.replace(/\?$/,"");if(a.length===0)return i?[l,""]:[l];let o=Au(a.join("/")),r=[];return r.push(...o.map(s=>s===""?l:[l,s].join("/"))),i&&r.push(...o),r.map(s=>e.startsWith("/")&&s===""?"/":s)}function wd(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:_d(t.routesMeta.map(a=>a.childrenIndex),n.routesMeta.map(a=>a.childrenIndex)))}const kd=/^:[\w-]+$/,Fd=3,Rd=2,zd=1,Md=10,Dd=-2,gs=e=>e==="*";function Ad(e,t){let n=e.split("/"),a=n.length;return n.some(gs)&&(a+=Dd),t&&(a+=Rd),n.filter(i=>!gs(i)).reduce((i,l)=>i+(kd.test(l)?Fd:l===""?zd:Md),a)}function _d(e,t){return e.length===t.length&&e.slice(0,-1).every((a,i)=>a===t[i])?e[e.length-1]-t[t.length-1]:0}function Ed(e,t,n){let{routesMeta:a}=e,i={},l="/",o=[];for(let r=0;r<a.length;++r){let s=a[r],p=r===a.length-1,m=l==="/"?t:t.slice(l.length)||"/",f=Yd({path:s.relativePath,caseSensitive:s.caseSensitive,end:p},m),h=s.route;if(!f)return null;Object.assign(i,f.params),o.push({params:i,pathname:mt([l,f.pathname]),pathnameBase:Hd(mt([l,f.pathnameBase])),route:h}),f.pathnameBase!=="/"&&(l=mt([l,f.pathnameBase]))}return o}function Yd(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=qd(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let l=i[0],o=l.replace(/(.)\/+$/,"$1"),r=i.slice(1);return{params:a.reduce((p,m,f)=>{let{paramName:h,isOptional:b}=m;if(h==="*"){let g=r[f]||"";o=l.slice(0,l.length-g.length).replace(/(.)\/+$/,"$1")}const y=r[f];return b&&!y?p[h]=void 0:p[h]=(y||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:o,pattern:e}}function qd(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),wi(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let a=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,r,s)=>(a.push({paramName:r,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(a.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),a]}function jd(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return wi(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Jo(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,a=e.charAt(n);return a&&a!=="/"?null:e.slice(n)||"/"}const Bd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Xd=e=>Bd.test(e);function Wd(e,t){t===void 0&&(t="/");let{pathname:n,search:a="",hash:i=""}=typeof e=="string"?_t(e):e,l;if(n)if(Xd(n))l=n;else{if(n.includes("//")){let o=n;n=n.replace(/\/\/+/g,"/"),wi(!1,"Pathnames cannot have embedded double slashes - normalizing "+(o+" -> "+n))}n.startsWith("/")?l=xs(n.substring(1),"/"):l=xs(n,t)}else l=t;return{pathname:l,search:Kd(a),hash:Ud(i)}}function xs(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function ol(e,t,n,a){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(a)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Gd(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function er(e,t){let n=Gd(e);return t?n.map((a,i)=>i===n.length-1?a.pathname:a.pathnameBase):n.map(a=>a.pathnameBase)}function tr(e,t,n,a){a===void 0&&(a=!1);let i;typeof e=="string"?i=_t(e):(i=na({},e),K(!i.pathname||!i.pathname.includes("?"),ol("?","pathname","search",i)),K(!i.pathname||!i.pathname.includes("#"),ol("#","pathname","hash",i)),K(!i.search||!i.search.includes("#"),ol("#","search","hash",i)));let l=e===""||i.pathname==="",o=l?"/":i.pathname,r;if(o==null)r=n;else{let f=t.length-1;if(!a&&o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),f-=1;i.pathname=h.join("/")}r=f>=0?t[f]:"/"}let s=Wd(i,r),p=o&&o!=="/"&&o.endsWith("/"),m=(l||o===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(p||m)&&(s.pathname+="/"),s}const mt=e=>e.join("/").replace(/\/\/+/g,"/"),Hd=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Kd=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Ud=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Vd(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const _u=["post","put","patch","delete"];new Set(_u);const $d=["get",..._u];new Set($d);/**
 * React Router v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function aa(){return aa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},aa.apply(this,arguments)}const nr=I.createContext(null),Zd=I.createContext(null),Tt=I.createContext(null),ki=I.createContext(null),Ze=I.createContext({outlet:null,matches:[],isDataRoute:!1}),Eu=I.createContext(null);function Qd(e,t){let{relative:n}=t===void 0?{}:t;mn()||K(!1);let{basename:a,navigator:i}=I.useContext(Tt),{hash:l,pathname:o,search:r}=ju(e,{relative:n}),s=o;return a!=="/"&&(s=o==="/"?a:mt([a,o])),i.createHref({pathname:s,search:r,hash:l})}function mn(){return I.useContext(ki)!=null}function pa(){return mn()||K(!1),I.useContext(ki).location}function Yu(e){I.useContext(Tt).static||I.useLayoutEffect(e)}function qu(){let{isDataRoute:e}=I.useContext(Ze);return e?c1():Jd()}function Jd(){mn()||K(!1);let e=I.useContext(nr),{basename:t,future:n,navigator:a}=I.useContext(Tt),{matches:i}=I.useContext(Ze),{pathname:l}=pa(),o=JSON.stringify(er(i,n.v7_relativeSplatPath)),r=I.useRef(!1);return Yu(()=>{r.current=!0}),I.useCallback(function(p,m){if(m===void 0&&(m={}),!r.current)return;if(typeof p=="number"){a.go(p);return}let f=tr(p,JSON.parse(o),l,m.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:mt([t,f.pathname])),(m.replace?a.replace:a.push)(f,m.state,m)},[t,a,o,l,e])}function e1(){let{matches:e}=I.useContext(Ze),t=e[e.length-1];return t?t.params:{}}function ju(e,t){let{relative:n}=t===void 0?{}:t,{future:a}=I.useContext(Tt),{matches:i}=I.useContext(Ze),{pathname:l}=pa(),o=JSON.stringify(er(i,a.v7_relativeSplatPath));return I.useMemo(()=>tr(e,JSON.parse(o),l,n==="path"),[e,o,l,n])}function t1(e,t){return n1(e,t)}function n1(e,t,n,a){mn()||K(!1);let{navigator:i}=I.useContext(Tt),{matches:l}=I.useContext(Ze),o=l[l.length-1],r=o?o.params:{};o&&o.pathname;let s=o?o.pathnameBase:"/";o&&o.route;let p=pa(),m;if(t){var f;let v=typeof t=="string"?_t(t):t;s==="/"||(f=v.pathname)!=null&&f.startsWith(s)||K(!1),m=v}else m=p;let h=m.pathname||"/",b=h;if(s!=="/"){let v=s.replace(/^\//,"").split("/");b="/"+h.replace(/^\//,"").split("/").slice(v.length).join("/")}let y=Cd(e,{pathname:b}),g=r1(y&&y.map(v=>Object.assign({},v,{params:Object.assign({},r,v.params),pathname:mt([s,i.encodeLocation?i.encodeLocation(v.pathname).pathname:v.pathname]),pathnameBase:v.pathnameBase==="/"?s:mt([s,i.encodeLocation?i.encodeLocation(v.pathnameBase).pathname:v.pathnameBase])})),l,n,a);return t&&g?I.createElement(ki.Provider,{value:{location:aa({pathname:"/",search:"",hash:"",state:null,key:"default"},m),navigationType:lt.Pop}},g):g}function a1(){let e=f1(),t=Vd(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return I.createElement(I.Fragment,null,I.createElement("h2",null,"Unexpected Application Error!"),I.createElement("h3",{style:{fontStyle:"italic"}},t),n?I.createElement("pre",{style:i},n):null,null)}const i1=I.createElement(a1,null);class l1 extends I.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?I.createElement(Ze.Provider,{value:this.props.routeContext},I.createElement(Eu.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function o1(e){let{routeContext:t,match:n,children:a}=e,i=I.useContext(nr);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),I.createElement(Ze.Provider,{value:t},a)}function r1(e,t,n,a){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),a===void 0&&(a=null),e==null){var l;if(!n)return null;if(n.errors)e=n.matches;else if((l=a)!=null&&l.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let o=e,r=(i=n)==null?void 0:i.errors;if(r!=null){let m=o.findIndex(f=>f.route.id&&(r==null?void 0:r[f.route.id])!==void 0);m>=0||K(!1),o=o.slice(0,Math.min(o.length,m+1))}let s=!1,p=-1;if(n&&a&&a.v7_partialHydration)for(let m=0;m<o.length;m++){let f=o[m];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(p=m),f.route.id){let{loaderData:h,errors:b}=n,y=f.route.loader&&h[f.route.id]===void 0&&(!b||b[f.route.id]===void 0);if(f.route.lazy||y){s=!0,p>=0?o=o.slice(0,p+1):o=[o[0]];break}}}return o.reduceRight((m,f,h)=>{let b,y=!1,g=null,v=null;n&&(b=r&&f.route.id?r[f.route.id]:void 0,g=f.route.errorElement||i1,s&&(p<0&&h===0?(d1("route-fallback"),y=!0,v=null):p===h&&(y=!0,v=f.route.hydrateFallbackElement||null)));let c=t.concat(o.slice(0,h+1)),u=()=>{let d;return b?d=g:y?d=v:f.route.Component?d=I.createElement(f.route.Component,null):f.route.element?d=f.route.element:d=m,I.createElement(o1,{match:f,routeContext:{outlet:m,matches:c,isDataRoute:n!=null},children:d})};return n&&(f.route.ErrorBoundary||f.route.errorElement||h===0)?I.createElement(l1,{location:n.location,revalidation:n.revalidation,component:g,error:b,children:u(),routeContext:{outlet:null,matches:c,isDataRoute:!0}}):u()},null)}var Bu=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Bu||{}),Xu=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(Xu||{});function s1(e){let t=I.useContext(nr);return t||K(!1),t}function p1(e){let t=I.useContext(Zd);return t||K(!1),t}function u1(e){let t=I.useContext(Ze);return t||K(!1),t}function Wu(e){let t=u1(),n=t.matches[t.matches.length-1];return n.route.id||K(!1),n.route.id}function f1(){var e;let t=I.useContext(Eu),n=p1(),a=Wu();return t!==void 0?t:(e=n.errors)==null?void 0:e[a]}function c1(){let{router:e}=s1(Bu.UseNavigateStable),t=Wu(Xu.UseNavigateStable),n=I.useRef(!1);return Yu(()=>{n.current=!0}),I.useCallback(function(i,l){l===void 0&&(l={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,aa({fromRouteId:t},l)))},[e,t])}const ys={};function d1(e,t,n){ys[e]||(ys[e]=!0)}function m1(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function h1(e){let{to:t,replace:n,state:a,relative:i}=e;mn()||K(!1);let{future:l,static:o}=I.useContext(Tt),{matches:r}=I.useContext(Ze),{pathname:s}=pa(),p=qu(),m=tr(t,er(r,l.v7_relativeSplatPath),s,i==="path"),f=JSON.stringify(m);return I.useEffect(()=>p(JSON.parse(f),{replace:n,state:a,relative:i}),[p,f,i,n,a]),null}function ja(e){K(!1)}function g1(e){let{basename:t="/",children:n=null,location:a,navigationType:i=lt.Pop,navigator:l,static:o=!1,future:r}=e;mn()&&K(!1);let s=t.replace(/^\/*/,"/"),p=I.useMemo(()=>({basename:s,navigator:l,static:o,future:aa({v7_relativeSplatPath:!1},r)}),[s,r,l,o]);typeof a=="string"&&(a=_t(a));let{pathname:m="/",search:f="",hash:h="",state:b=null,key:y="default"}=a,g=I.useMemo(()=>{let v=Jo(m,s);return v==null?null:{location:{pathname:v,search:f,hash:h,state:b,key:y},navigationType:i}},[s,m,f,h,b,y,i]);return g==null?null:I.createElement(Tt.Provider,{value:p},I.createElement(ki.Provider,{children:n,value:g}))}function x1(e){let{children:t,location:n}=e;return t1(to(t),n)}new Promise(()=>{});function to(e,t){t===void 0&&(t=[]);let n=[];return I.Children.forEach(e,(a,i)=>{if(!I.isValidElement(a))return;let l=[...t,i];if(a.type===I.Fragment){n.push.apply(n,to(a.props.children,l));return}a.type!==ja&&K(!1),!a.props.index||!a.props.children||K(!1);let o={id:a.props.id||l.join("-"),caseSensitive:a.props.caseSensitive,element:a.props.element,Component:a.props.Component,index:a.props.index,path:a.props.path,loader:a.props.loader,action:a.props.action,errorElement:a.props.errorElement,ErrorBoundary:a.props.ErrorBoundary,hasErrorBoundary:a.props.ErrorBoundary!=null||a.props.errorElement!=null,shouldRevalidate:a.props.shouldRevalidate,handle:a.props.handle,lazy:a.props.lazy};a.props.children&&(o.children=to(a.props.children,l)),n.push(o)}),n}/**
 * React Router DOM v6.30.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function no(){return no=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},no.apply(this,arguments)}function y1(e,t){if(e==null)return{};var n={},a=Object.keys(e),i,l;for(l=0;l<a.length;l++)i=a[l],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function b1(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function T1(e,t){return e.button===0&&(!t||t==="_self")&&!b1(e)}const S1=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],v1="6";try{window.__reactRouterVersion=v1}catch{}const I1="startTransition",bs=cf[I1];function L1(e){let{basename:t,children:n,future:a,window:i}=e,l=I.useRef();l.current==null&&(l.current=Ld({window:i,v5Compat:!0}));let o=l.current,[r,s]=I.useState({action:o.action,location:o.location}),{v7_startTransition:p}=a||{},m=I.useCallback(f=>{p&&bs?bs(()=>s(f)):s(f)},[s,p]);return I.useLayoutEffect(()=>o.listen(m),[o,m]),I.useEffect(()=>m1(a),[a]),I.createElement(g1,{basename:t,children:n,location:r.location,navigationType:r.action,navigator:o,future:a})}const O1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",P1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ao=I.forwardRef(function(t,n){let{onClick:a,relative:i,reloadDocument:l,replace:o,state:r,target:s,to:p,preventScrollReset:m,viewTransition:f}=t,h=y1(t,S1),{basename:b}=I.useContext(Tt),y,g=!1;if(typeof p=="string"&&P1.test(p)&&(y=p,O1))try{let d=new URL(window.location.href),x=p.startsWith("//")?new URL(d.protocol+p):new URL(p),L=Jo(x.pathname,b);x.origin===d.origin&&L!=null?p=L+x.search+x.hash:g=!0}catch{}let v=Qd(p,{relative:i}),c=C1(p,{replace:o,state:r,target:s,preventScrollReset:m,relative:i,viewTransition:f});function u(d){a&&a(d),d.defaultPrevented||c(d)}return I.createElement("a",no({},h,{href:y||v,onClick:g||l?a:u,ref:n,target:s}))});var Ts;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(Ts||(Ts={}));var Ss;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Ss||(Ss={}));function C1(e,t){let{target:n,replace:a,state:i,preventScrollReset:l,relative:o,viewTransition:r}=t===void 0?{}:t,s=qu(),p=pa(),m=ju(e,{relative:o});return I.useCallback(f=>{if(T1(f,n)){f.preventDefault();let h=a!==void 0?a:ci(p)===ci(m);s(e,{replace:h,state:i,preventScrollReset:l,relative:o,viewTransition:r})}},[p,s,m,a,i,n,e,l,o,r])}function Gu({imageData:e}){return S.jsxs("div",{className:"plot-container",children:[S.jsx("h3",{children:"图表输出"}),S.jsx("img",{src:`data:image/png;base64,${e}`,alt:"Plot"})]})}function Hu({text:e}){const t=e.startsWith("❌");return S.jsx("div",{className:`text-output ${t?"error":""}`,children:e})}function N1({pyodide:e,program:t}){const[n,a]=I.useState(!1),[i,l]=I.useState(null),[o,r]=I.useState(""),[s,p]=I.useState(t.defaultParams||{});async function m(){if(!(!e||n)){a(!0),l(null),r("⏳ 计算中...");try{let f=t.pythonCode;Object.keys(s).forEach(c=>{const u=s[c];typeof u=="string"?f=f.replace(new RegExp(`\\{\\{${c}\\}\\}`,"g"),`"${u}"`):f=f.replace(new RegExp(`\\{\\{${c}\\}\\}`,"g"),u)});const h=`
import sys, io, traceback
_stdout = io.StringIO()
_stderr = io.StringIO()
sys_stdout_bak, sys_stderr_bak = sys.stdout, sys.stderr
sys.stdout, sys.stderr = _stdout, _stderr
try:
    exec(compile(
        ${JSON.stringify(f)},
        '<program>', 'exec'
    ), globals(), globals())
except Exception:
    traceback.print_exc()
finally:
    sys.stdout, sys.stderr = sys_stdout_bak, sys_stderr_bak
out = _stdout.getvalue()
err = _stderr.getvalue()
`;await e.runPythonAsync(h);const b=e.globals.get("out"),y=e.globals.get("err");let g=null,v=b||"";if(v&&v.includes("data:image/png;base64,")){const c=v.match(/data:image\/png;base64,([A-Za-z0-9+/=]+)/);c&&(g=c[1],v=v.replace(/data:image\/png;base64,[A-Za-z0-9+/=]+/,"").trim())}g&&l(g),y?r(`❌ 错误:
`+y+(v?`

输出:
`+v:"")):v?r(v):g||r("✅ 程序运行成功")}catch(f){r(`❌ 错误:
`+(f&&f.message?f.message:String(f))),console.error("Error:",f)}finally{a(!1)}}}return e?S.jsxs("div",{className:"program-runner",children:[t.params&&t.params.length>0&&S.jsxs("div",{className:"params-section",children:[S.jsx("h3",{children:"参数设置"}),t.params.map(f=>S.jsxs("div",{className:"param-input",children:[S.jsxs("label",{htmlFor:f.name,children:[f.label," ",f.unit&&`(${f.unit})`,":"]}),S.jsx("input",{id:f.name,type:f.step===null?"text":"number",step:f.step||.01,value:s[f.name]!==void 0?s[f.name]:f.default,onChange:h=>p({...s,[f.name]:f.step===null?h.target.value:parseFloat(h.target.value)||f.default})}),f.description&&S.jsx("span",{className:"param-desc",children:f.description})]},f.name))]}),S.jsx("button",{onClick:m,disabled:n,className:"run-button",children:n?"⏳ 运行中...":"🚀 运行程序"}),S.jsxs("div",{className:"results-section always-visible",children:[S.jsx("div",{className:"results-header",children:"📊 运行结果"}),i&&S.jsx(Gu,{imageData:i}),o?S.jsx(Hu,{text:o}):S.jsx("div",{className:"no-output",children:'点击"运行程序"后，结果将显示在这里'})]})]}):S.jsx("div",{className:"loading-container",children:S.jsx("div",{className:"loading",children:"⏳ 正在加载..."})})}const wn=[{id:"of",title:"of - G10TINPOS\r",description:"G10TINPOS\r",category:"Optics - Geometrical",chapter:"1",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# G10TINPOS

# Positive Lens
# Focal length f is positive, light from left propagating from medium with index 1 to lens
# of refractive index n.
# xo on left of surface (negative)

# Calculation of graph for xi as function of xo over the total range of xo.
# graph for xi as function of xo over the range of xo to the left of f.
# graph for xi as function of xo over the range of xo to the right of f.


f = 10
# image focus: f
# object focus: -f

xo = np.arange(-100.001, 100+0.07, 0.07)
xi = 1/(1/f+1/xo)
fig = plt.figure(1)

plt.subplot(1, 3, 1)

plt.plot(xo,xi)

plt.xlim(-150, 100)
plt.ylim(-500, 200)

plt.xlabel('xo')
plt.legend(['xi(xo)'])
xxo = np.arange(-50.001, -11+0.07, 0.07)
xxi = 1/(1/f+1/xxo)
plt.subplot(1, 3, 2)

plt.plot(xxo,xxi)

plt.xlim(-55, -10)
plt.ylim(0, 100)

plt.xlabel('xxo')
plt.legend(['xxi(xxo)'])
xxxo =np.arange(-9.001, 50+0.07, 0.07)
xxxi = 1/(1/f+1/xxxo)
plt.subplot(1, 3, 3)

plt.plot(xxxo,xxxi)

plt.xlim(-10, 50)
plt.ylim(-100, 50)

plt.xlabel('xxo')
plt.legend(['xxxi(xxxo)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% G10TINPOS

% Positive Lens
% Focal length f is positive, light from left propagating from medium with index 1 to lens
% of refractive index n.
% xo on left of surface (negative)

% Calculation of graph for xi as function of xo over the total range of xo.
% graph for xi as function of xo over the range of xo to the left of f.
% graph for xi as function of xo over the range of xo to the right of f.

function G10TINPOS;
f = 10;
% image focus: f
% object focus: -f

xo = (-100.001:0.07:100);
xi = 1./(1/f+1./xo);

figure(1);
subplot(1,3,1);
plot(xo,xi);
axis([-150 100 -500 200]);
xlabel('xo');
legend('xi(xo)');

xxo = (-50.001:0.07:-11);
xxi = 1./(1/f+1./xxo);

subplot(1,3,2);
plot(xxo,xxi);
axis([-55 -10 0 100]);
xlabel('xxo');
legend('xxi(xxo)');

xxxo =(-9.001:0.07:50);
xxxi = 1./(1/f+1./xxxo);

subplot(1,3,3);
plot(xxxo,xxxi);
axis([-10 50 -100 50]);
xlabel('xxo');
legend('xxxi(xxxo)');

`,cCode:"",defaultParams:{}},{id:"of",title:"of - G12TINNEG\r",description:"G12TINNEG\r",category:"Optics - Geometrical",chapter:"1",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# G12TINNEG

# Negative Lens
# Focal length f is negative, light from left propagating from medium with index 1 to lens
# of refractive index n.
# xo on left of surface (negative)

# Calculation of graph for xi as function of xo over the total range of xo.
# graph for xi as function of xo over the range of xo to the left of f.
# graph for xi as function of xo over the range of xo to the right of f.
# graph for xi as function of xo over the range of xo to the right of f.


f = -10
# image focus: -f
# object focus: f

xo = np.arange(-100.001, 100+0.07, 0.07)
xi = 1/(1/f+1/xo)
fig = plt.figure(1)

plt.subplot(1, 3, 1)

plt.plot(xo,xi)

plt.xlim(-150, 100)
plt.ylim(-200, 300)

plt.xlabel('xo')
plt.legend(['xi(xo)'])
xxo = np.arange(-50.001, 9+0.07, 0.07)
xxi = 1/(1/f+1/xxo)
plt.subplot(1, 3, 2)

plt.plot(xxo,xxi)

plt.xlim(-60, 10)
plt.ylim(-20, 60)

plt.xlabel('xxo')
plt.legend(['xxi(xxo)'])
xxxo =np.arange(11.001, 50+0.07, 0.07)
xxxi = 1/(1/f+1/xxxo)
plt.subplot(1, 3, 3)

plt.plot(xxxo,xxxi)

plt.xlim(10, 50)
plt.ylim(-150, 0)

plt.xlabel('xxo')
plt.legend(['xxxi(xxxo)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% G12TINNEG

% Negative Lens
% Focal length f is negative, light from left propagating from medium with index 1 to lens
% of refractive index n.
% xo on left of surface (negative)

% Calculation of graph for xi as function of xo over the total range of xo.
% graph for xi as function of xo over the range of xo to the left of f.
% graph for xi as function of xo over the range of xo to the right of f.
% graph for xi as function of xo over the range of xo to the right of f.

function G12TINNEG;
f = -10;
% image focus: -f
% object focus: f

xo = (-100.001:0.07:100);
xi = 1./(1/f+1./xo);

figure(1);
subplot(1,3,1);
plot(xo,xi);
axis([-150 100 -200 300]);
xlabel('xo');
legend('xi(xo)');

xxo = (-50.001:0.07:9);
xxi = 1./(1/f+1./xxo);

subplot(1,3,2);
plot(xxo,xxi);
axis([-60 10 -20 60]);
xlabel('xxo');
legend('xxi(xxo)');

xxxo =(11.001:0.07:50);
xxxi = 1./(1/f+1./xxxo);

subplot(1,3,3);
plot(xxxo,xxxi);
axis([10 50 -150 0]);
xlabel('xxo');
legend('xxxi(xxxo)');

`,cCode:"",defaultParams:{}},{id:"G14TINFOC",title:"G14TINFOC - G14TINFOC\r",description:"G14TINFOC\r",category:"Optics - Geometrical",chapter:"1",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# G14TINFOC
# Focal length 


# 1. Calculation of focal length of thin lens of refractive index n2 in medium with
# refractive index n1.

# R is positive for convex surface, negative for concave surface
r1 = -5;    # First surface
r2 = 5;     # Second surface

n2 = 1;     # Refractive index of lens n2
n1 = 1.5;   # Refractive index of medium n1

f = n1/((n2-n1)/r1+(n1-n2)/r2)  # f = 7.5

# 2. Graph of focal length of thin lens with index n2 depending on
# refractive index of medium n1.

# The radii of curvature are chosen above. The range of n1 is divided into
# lower and higher range because of singularity.

nn2 = 1.5;  # Refractive index of lens nn2
nn1 = (1:0.1:nn2-0.00001);  # Lower range
nnn1 = (nn2+0.1:0.1:4);     # Upper range

ff = 1/((nn2-nn1)/r1+(nn1-nn2)/r2)
fff = 1/((nn2-nnn1)/r1+(nnn1-nn2)/r2)
fig = plt.figure(1)

plt.subplot(1, 2, 1)

plt.plot(nn1,ff)

plt.xlim(1, 1.4)
plt.ylim(-30, 0)

plt.xlabel('nn1')
plt.legend(['ff(nn1)'])
plt.subplot(1, 2, 2)

plt.plot(nnn1,fff)

plt.xlim(1, 4)
plt.ylim(0, 30)

plt.xlabel('nnn1')
plt.legend(['fff(nnn1)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% G14TINFOC
% Focal length 

function G14TINFOC;

% 1. Calculation of focal length of thin lens of refractive index n2 in medium with
% refractive index n1.

% R is positive for convex surface, negative for concave surface
r1 = -5;    % First surface
r2 = 5;     % Second surface

n2 = 1;     % Refractive index of lens n2
n1 = 1.5;   % Refractive index of medium n1

f = n1/((n2-n1)/r1+(n1-n2)/r2)  % f = 7.5

% 2. Graph of focal length of thin lens with index n2 depending on
% refractive index of medium n1.

% The radii of curvature are chosen above. The range of n1 is divided into
% lower and higher range because of singularity.

nn2 = 1.5;  % Refractive index of lens nn2
nn1 = (1:0.1:nn2-0.00001);  % Lower range
nnn1 = (nn2+0.1:0.1:4);     % Upper range

ff = 1./((nn2-nn1)/r1+(nn1-nn2)/r2);
fff = 1./((nn2-nnn1)/r1+(nnn1-nn2)/r2);

figure(1);
subplot(1,2,1);
plot(nn1,ff);
axis([1 1.4 -30 0]);
xlabel('nn1');
legend('ff(nn1)');

subplot(1,2,2);
plot(nnn1,fff);
axis([1 4 0 30]);
xlabel('nnn1');
legend('fff(nnn1)');`,cCode:"",defaultParams:{}},{id:"G1FERMAT",title:"G1FERMAT - G1FERMAT\r",description:"G1FERMAT\r",category:"Optics - Geometrical",chapter:"1",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# G1FERMAT
# Fermat's Principle
# Graph of total travel time
# t1 is the time to go from inital position (0,o) to point (xq,y) in medium with
# velocity v1
# t2 is the time to go from inital position (xq,y) to point (xf,yf) in medium with
# velocity v2
# there is a y value for minimum time
xq=20
xf=40
yf=40
y=np.arange(0, 40+1, 1)
# velocity
v1=1
v2=2.5
# v1 and v2 are at the Graph
# time in medium 1
t1=(1/v1)*np.sqrt((xq)**2+(y)**2)
# time in medium 2
t2=(1/v2)*np.sqrt((xf-xq)**2+(yf-y)**2)
T=t1+t2
fig = plt.figure(1)

plt.plot(y,T)

plt.xlim(0, 40)
plt.ylim(35, 55)
;                  # PLOTS LIMITS                    
xlabel('y','Fontsize',12)
plt.legend(['T(y)'])
title('Figure 1','FontSize',12)
# Changing the paramaters v1 and v2 changes the minimum time for total travel



# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% G1FERMAT
% Fermat's Principle
% Graph of total travel time
% t1 is the time to go from inital position (0,o) to point (xq,y) in medium with
% velocity v1
% t2 is the time to go from inital position (xq,y) to point (xf,yf) in medium with
% velocity v2
% there is a y value for minimum time
xq=20;
xf=40;
yf=40;
y=(0:1:40);
% velocity
v1=1;
v2=2.5;
% v1 and v2 are at the Graph
% time in medium 1
t1=(1/v1)*sqrt((xq)^2+(y).^2);
% time in medium 2
t2=(1/v2)*sqrt((xf-xq)^2+(yf-y).^2);
T=t1+t2;

figure(1);
plot(y,T);
axis([0 40 35 55]);                  % PLOTS LIMITS                    
xlabel('y','Fontsize',12);
legend('T(y)');
title('Figure 1','FontSize',12);

% Changing the paramaters v1 and v2 changes the minimum time for total travel


`,cCode:"",defaultParams:{}},{id:"G2FERMAT",title:"G2FERMAT - G2FERMAT\r",description:"G2FERMAT\r",category:"Optics - Geometrical",chapter:"1",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64
from mpl_toolkits.mplot3d import Axes3D

# G2FERMAT

# FERMAT's PRINCIPLE

# t is the time to go from the initial position (0,0) to point (xq,q) with velocity v1
# tt is the tiime to go from point (xq,q) to point (xp,p) with velocity v2
# ttt is the time to go from point (xp,p) to the final position (xf,yf) with velocity v3
# There is a q and p value for minimum time


N = 20
i = (0:1:N)
k = (0:1:N)
q = i
p = k
xq = 20
xp = 40
xf = 60
yf = 60
v1 = 14
v2 = 21
v3 = 52
t = np.sqrt((xq)**2+(q)**2)/v1
for r in range(len(q)):
    for c in range(len(p)):
        tt(r,c) = np.sqrt((xp-xq)**2+(p(c)-q(r))**2)/v2
ttt = np.sqrt((xf-xq)**2+(yf-p)**2)/v3
for r in range(len(q)):
    for c in range(len(p)):
        T(c,r) = tt(r)+tt(r,c) + ttt(c)
M =T
fig = plt.figure(1)

plt.subplot(1, 2, 1)

plt.contour(M)
plt.subplot(1, 2, 2)

ax = plt.gca()
if not hasattr(ax, 'plot_surface'):
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')
    X, Y = np.meshgrid(np.arange(M.shape[1]), np.arange(M.shape[0]))
    ax.plot_surface(X, Y, M, cmap='viridis')

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% G2FERMAT

% FERMAT's PRINCIPLE

% t is the time to go from the initial position (0,0) to point (xq,q) with velocity v1
% tt is the tiime to go from point (xq,q) to point (xp,p) with velocity v2
% ttt is the time to go from point (xp,p) to the final position (xf,yf) with velocity v3
% There is a q and p value for minimum time

function G2FERMAT;
N = 20;
i = (0:1:N);
k = (0:1:N);
q = i;
p = k;
xq = 20;
xp = 40;
xf = 60;
yf = 60;
v1 = 14;
v2 = 21;
v3 = 52;

t = sqrt((xq)^2+(q).^2)/v1;
for r=1:length(q);
    for c=1:length(p);
        tt(r,c) = sqrt((xp-xq)^2+(p(c)-q(r)).^2)/v2;
    end;
end;
ttt = sqrt((xf-xq)^2+(yf-p).^2)/v3;

for r=1:length(q);
    for c=1:length(p);
        T(c,r) = tt(r)+tt(r,c) + ttt(c);
    end;
end;
M =T;

figure(1);
subplot(1,2,1);
contour(M);
subplot(1,2,2);
mesh(M);



`,cCode:"",defaultParams:{}},{id:"G30MIRCV",title:"G30MIRCV - G30MIRCV\r",description:"G30MIRCV\r",category:"Optics - Geometrical",chapter:"1",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# G30MIRCV

# Concave mirror.

# Radius of curvature is neg., xo is on left, is negative.
# To get around the singularity at -xo = f one chooses the increments such that the
# value for the singularity does not appear.


r = -50
xo = -60
xi = 1/(1/(r/2) - 1/xo) # xi = -42.857
m = -xi/xo              # m = -0.714

# Graph
xxo = np.arange(-100, -0.1+0.9, 0.9)
xxi = 1/(1/(r/2)-1/xxo)
fig = plt.figure(1)

plt.plot(xxo,xxi)

plt.xlim(-100, 0)
plt.ylim(-4000, 2000)

plt.xlabel('xxo')
plt.legend(['xxi(xxo)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% G30MIRCV

% Concave mirror.

% Radius of curvature is neg., xo is on left, is negative.
% To get around the singularity at -xo = f one chooses the increments such that the
% value for the singularity does not appear.

function G30MIRCV;
r = -50;
xo = -60;
xi = 1/(1/(r/2) - 1/xo) % xi = -42.857
m = -xi/xo              % m = -0.714

% Graph
xxo = (-100:0.9:-0.1);
xxi = 1./(1/(r/2)-1./xxo);

figure(1);
plot(xxo,xxi);
axis([-100 0 -4000 2000]);
xlabel('xxo');
legend('xxi(xxo)');
`,cCode:"",defaultParams:{}},{id:"G31MIRCX",title:"G31MIRCX - G31MIRCV\r",description:"G31MIRCV\r",category:"Optics - Geometrical",chapter:"1",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# G31MIRCV

# Convex mirror.

# Radius of curvature is positive, xo is on left, is negative.
# No singularity. Only virtual images.


r = 50
xo = -10
xi = 1/(1/(r/2) - 1/xo) # xi = 7.143

# Graph
xxo = np.arange(-100, -0.1+0.9, 0.9)
xxi = 1/(1/(r/2)-1/xxo)
fig = plt.figure(1)

plt.plot(xxo,xxi)

plt.xlim(-100, 0)
plt.ylim(0, 20)

plt.xlabel('xxo')
plt.legend(['xxi(xxo)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% G31MIRCV

% Convex mirror.

% Radius of curvature is positive, xo is on left, is negative.
% No singularity. Only virtual images.

function G31MIRCX;
r = 50;
xo = -10;
xi = 1/(1/(r/2) - 1/xo) % xi = 7.143

% Graph
xxo = (-100:0.9:-0.1);
xxi = 1./(1/(r/2)-1./xxo);

figure(1);
plot(xxo,xxi);
axis([-100 0 0 20]);
xlabel('xxo');
legend('xxi(xxo)');
`,cCode:"",defaultParams:{}},{id:"G32RESGG",title:"G32RESGG - G32RESGG\r",description:"G32RESGG\r",category:"Optics - Geometrical",chapter:"1",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# G32RESGG
# Calculation of Resonator using g1, g2, and d

r1 = 1
r2 = 1
d = 2
g1 = 1 - d/r1
g2 = 1 - d/r2
Lamda1 = -1 + 2*g1*g2+2*np.sqrt(-g1*g2+(g1**2)*(g2**2))
Lamda2 = -1 + 2*g1*g2-2*np.sqrt(-g1*g2+(g1**2)*(g2**2))
# Lamda1 = 1
# Lamda2 = 1


# we set the product g1g2 = x and plot it over the range from -1 to 2
x = np.arange(-1, 2+0.1, 0.1)
y = np.abs((2*x-1)+np.sqrt((2*x-1)**2-1))-1
yy = np.abs((2*x-1)-np.sqrt((2*x-1)**2-1))-1
fig = plt.figure(1)

plt.subplot(1, 2, 1)

plt.plot(x,y)

plt.xlim(-1, 2)
plt.ylim(-5, 5)

plt.xlabel('x')
plt.legend(['y(x)'])
plt.subplot(1, 2, 2)

plt.plot(x,yy)

plt.xlim(-1, 2)
plt.ylim(-5, 5)

plt.xlabel('x')
plt.legend(['yy(x)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% G32RESGG
% Calculation of Resonator using g1, g2, and d
function G32RESGG;

r1 = 1;
r2 = 1;
d = 2;
g1 = 1 - d/r1;
g2 = 1 - d/r2;

Lamda1 = -1 + 2*g1*g2+2*sqrt(-g1*g2+(g1^2)*(g2^2))
Lamda2 = -1 + 2*g1*g2-2*sqrt(-g1*g2+(g1^2)*(g2^2))
% Lamda1 = 1
% Lamda2 = 1


% we set the product g1g2 = x and plot it over the range from -1 to 2
x = (-1:0.1:2);
y = abs((2*x-1)+sqrt((2*x-1).^2-1))-1;
yy = abs((2*x-1)-sqrt((2*x-1).^2-1))-1;

figure(1);
subplot(1,2,1);
plot(x,y);
axis([-1 2 -5 5]);
xlabel('x');
legend('y(x)');

subplot(1,2,2);
plot(x,yy);
axis([-1 2 -5 5]);
xlabel('x');
legend('yy(x)');
`,cCode:"",defaultParams:{}},{id:"G4PRISM",title:"G4PRISM - G4PRISM\r",description:"G4PRISM\r",category:"Optics - Geometrical",chapter:"1",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# G4PRISM

# Graph of the angle of deviation for refraction on a prism
# depending on the angle of incidence

# ?1 is the angle of incidence with respect to the normal
# ?1 is the angle of deviation
# n is the refractive index and A is the apex angle.


Theta1 = np.arange(0, 1+0.001, 0.001)
n = 2
A = ((2*np.pi)/360)*30
Delta = Theta1+ asin(np.sqrt(n**2-(np.sin(Theta1))**2)*np.sin(A)-np.sin(Theta1)*np.cos(A))-A
fig = plt.figure(1)

plt.plot(Theta1,Delta)

plt.xlim(0, 1)
plt.ylim(0.4, 1.2)

plt.xlabel('	heta1')
plt.legend(['delta(	heta1)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% G4PRISM

% Graph of the angle of deviation for refraction on a prism
% depending on the angle of incidence

% ?1 is the angle of incidence with respect to the normal
% ?1 is the angle of deviation
% n is the refractive index and A is the apex angle.

function G4PRISM;
Theta1 = (0:0.001:1);
n = 2;
A = ((2*pi)/360)*30;
Delta = Theta1+ asin(sqrt(n^2-(sin(Theta1)).^2)*sin(A)-sin(Theta1)*cos(A))-A;

figure(1);
plot(Theta1,Delta);
axis([0 1 0.4 1.2]);
xlabel('	heta1');
legend('delta(	heta1)');`,cCode:"",defaultParams:{}},{id:"of",title:"of - G6SINGCX\r",description:"G6SINGCX\r",category:"Optics - Geometrical",chapter:"1",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# G6SINGCX

# Convex single refracting surface
# r is positive, light from left propagating from medium with n1 to medium with n2
# xo on left of surface (negative)

# Calculation of graph for xi as function of xo over the total range of xo.
# graph for xi as function of xo over the range of xo to the left of xof.
# graph for xi as function of xo over the range of xo to the right of xof.


r = 10
n1 = 1
n2 = 1.5
# image focus
xif = n2*(r/(n2-n1))    # xif = 30;:
# object focus
xof = n1*(r/(n1-n2))    # xof = -20
xo = np.arange(-100.001, 100+0.07, 0.07)
xi = n2/(((n2-n1)/r)+n1/xo)
fig = plt.figure(1)

plt.subplot(1, 3, 1)

plt.plot(xo,xi)

plt.xlim(-150, 100)
plt.ylim(-1500, 1500)

plt.xlabel('xo')
plt.legend(['xi(xo)'])
xxo = np.arange(-100.001, -22+0.07, 0.07)
xxi = n2/(((n2-n1)/r)+n1/xxo)
plt.subplot(1, 3, 2)

plt.plot(xxo,xxi)

plt.xlim(-110, -20)
plt.ylim(0, 300)

plt.xlabel('xxo')
plt.legend(['xxi(xxo)'])
xxxo = np.arange(-15.001, 50+0.07, 0.07)
xxxi = n2/(((n2-n1)/r)+n1/xxxo)
plt.subplot(1, 3, 3)

plt.plot(xxxo,xxxi)

plt.xlim(-20, 50)
plt.ylim(-100, 50)

plt.xlabel('xxxo')
plt.legend(['xxxi(xxxo)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% G6SINGCX

% Convex single refracting surface
% r is positive, light from left propagating from medium with n1 to medium with n2
% xo on left of surface (negative)

% Calculation of graph for xi as function of xo over the total range of xo.
% graph for xi as function of xo over the range of xo to the left of xof.
% graph for xi as function of xo over the range of xo to the right of xof.

function G6SINGCX;
r = 10;
n1 = 1;
n2 = 1.5;
% image focus
xif = n2*(r/(n2-n1))    % xif = 30;
% object focus
xof = n1*(r/(n1-n2))    % xof = -20;

xo = (-100.001:0.07:100);
xi = n2./(((n2-n1)/r)+n1./xo);

figure(1);
subplot(1,3,1);
plot(xo,xi);
axis([-150 100 -1500 1500]);
xlabel('xo');
legend('xi(xo)');

xxo = (-100.001:0.07:-22);
xxi = n2./(((n2-n1)/r)+n1./xxo);


subplot(1,3,2);
plot(xxo,xxi);
axis([-110 -20 0 300]);
xlabel('xxo');
legend('xxi(xxo)');

xxxo = (-15.001:0.07:50);
xxxi = n2./(((n2-n1)/r)+n1./xxxo);


subplot(1,3,3);
plot(xxxo,xxxi);
axis([-20 50 -100 50]);
xlabel('xxxo');
legend('xxxi(xxxo)');`,cCode:"",defaultParams:{}},{id:"of",title:"of - G8SINGCV\r",description:"G8SINGCV\r",category:"Optics - Geometrical",chapter:"1",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# G8SINGCV

# Convex single refracting surface
# r is negative, light from left propagating from medium with n1 to medium with n2
# xo on left of surface (negative)

# Calculation of graph for xi as function of xo over the total range of xo.
# graph for xi as function of xo over the range of xo to the left of xof.
# graph for xi as function of xo over the range of xo to the right of xof.


r = -10
n1 = 1
n2 = 1.5
# image focus
xif = n2*(r/(n2-n1))    # xif = -30;:
# object focus
xof = n1*(r/(n1-n2))    # xof = 20
xo = np.arange(-100.001, 100+0.07, 0.07)
xi = n2/(((n2-n1)/r)+n1/xo)
fig = plt.figure(1)

plt.subplot(1, 3, 1)

plt.plot(xo,xi)

plt.xlim(-150, 100)
plt.ylim(-2500, 1000)

plt.xlabel('xo')
plt.legend(['xi(xo)'])
xxo = np.arange(-100.001, 15+0.07, 0.07)
xxi = n2/(((n2-n1)/r)+n1/xxo)
plt.subplot(1, 3, 2)

plt.plot(xxo,xxi)

plt.xlim(-120, 20)
plt.ylim(-50, 100)

plt.xlabel('xxo')
plt.legend(['xxi(xxo)'])
xxxo = np.arange(22.001, 50+0.07, 0.07)
xxxi = n2/(((n2-n1)/r)+n1/xxxo)
plt.subplot(1, 3, 3)

plt.plot(xxxo,xxxi)

plt.xlim(20, 50)
plt.ylim(-400, 0)

plt.xlabel('xxxo')
plt.legend(['xxxi(xxxo)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% G8SINGCV

% Convex single refracting surface
% r is negative, light from left propagating from medium with n1 to medium with n2
% xo on left of surface (negative)

% Calculation of graph for xi as function of xo over the total range of xo.
% graph for xi as function of xo over the range of xo to the left of xof.
% graph for xi as function of xo over the range of xo to the right of xof.

function G8SINGCV;
r = -10;
n1 = 1;
n2 = 1.5;
% image focus
xif = n2*(r/(n2-n1))    % xif = -30;
% object focus
xof = n1*(r/(n1-n2))    % xof = 20;

xo = (-100.001:0.07:100);
xi = n2./(((n2-n1)/r)+n1./xo);

figure(1);
subplot(1,3,1);
plot(xo,xi);
axis([-150 100 -2500 1000]);
xlabel('xo');
legend('xi(xo)');

xxo = (-100.001:0.07:15);
xxi = n2./(((n2-n1)/r)+n1./xxo);

subplot(1,3,2);
plot(xxo,xxi);
axis([-120 20 -50 100]);
xlabel('xxo');
legend('xxi(xxo)');

xxxo = (22.001:0.07:50);
xxxi = n2./(((n2-n1)/r)+n1./xxxo);

subplot(1,3,3);
plot(xxxo,xxxi);
axis([20 50 -400 0]);
xlabel('xxxo');
legend('xxxi(xxxo)');`,cCode:"",defaultParams:{}},{id:"W10BES3DS",title:"W10BES3DS - W10BES3DS\r",description:"W10BES3DS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64
from mpl_toolkits.mplot3d import Axes3D

# W10BES3DS
# 1. Rayleigh distance corresponding to "resolution" is determined for two round
# apertures at distance d between them.
# 2. 3D graph of pattern of two round apertures at distance d.

# Radius of apertures is a, coordinate on the observation screen R, wavelength Lamda, and
# distance from aperture to screen is X


# 1. Determination of Rayleigh distance.
Lamda = 0.0005
a = 0.05
d = 24.5
X = 4000
R = np.arange(0, 50+0.1, 0.1)
g1R = (besselj(1,(2*np.pi*a*(R/(X*Lamda))))/(2*np.pi*a*(R/(X*Lamda))))**2
gg1R = (besselj(1,(2*np.pi*a*((R-d)/(X*Lamda))))/(2*np.pi*a*((R-d)/(X*Lamda))))**2
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(R,g1R,R,gg1R)

plt.xlim(0, 50)
plt.ylim(0, 0.25)

plt.xlabel('R')
plt.legend(['g1(R)', 'gg1(R)'])
# 2. 3D Graph Distance d

N = 60
X = 4000
M = zeros(N,N)
for i=0:N
    for j=0:N
        
        xi = (-40) + 2.0001*i
        yj = (-40) + 2.0001*j
        M(i+1,j+1) = g2(xi,yj)+gg2(xi,yj)
plt.subplot(2, 1, 2)

ax = plt.gca()
if not hasattr(ax, 'plot_surface'):
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')
    X, Y = np.meshgrid(np.arange(M.shape[1]), np.arange(M.shape[0]))
    ax.plot_surface(X, Y, M, cmap='viridis')
axis([0 N 0 N 0 0.3])
plt.legend(['M'])



Out = np.sqrt(x**2+y**2)
Out = (besselj(1,(2*np.pi*a*(RR(x,y)/(X*Lamda))))/(2*np.pi*a*(RR(x,y)/(X*Lamda))))**2
Out = (besselj(1,(2*np.pi*a*(RR(x,y-d)/(X*Lamda))))/(2*np.pi*a*(RR(x,y-d)/(X*Lamda))))**2
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% W10BES3DS
% 1. Rayleigh distance corresponding to "resolution" is determined for two round
% apertures at distance d between them.
% 2. 3D graph of pattern of two round apertures at distance d.

% Radius of apertures is a, coordinate on the observation screen R, wavelength Lamda, and
% distance from aperture to screen is X

function W10BES3DS;
global a d X Lamda;
% 1. Determination of Rayleigh distance.
Lamda = 0.0005;
a = 0.05;
d = 24.5;
X = 4000;
R = (0:0.1:50);
g1R = (besselj(1,(2*pi*a*(R/(X*Lamda))))./(2*pi*a*(R/(X*Lamda)))).^2;
gg1R = (besselj(1,(2*pi*a*((R-d)/(X*Lamda))))./(2*pi*a*((R-d)/(X*Lamda)))).^2;

figure(1);
subplot(2,1,1);
plot(R,g1R,R,gg1R);
axis([0 50 0 0.25]);
xlabel('R');
legend('g1(R)','gg1(R)');

% 2. 3D Graph Distance d

N = 60;
X = 4000;
M = zeros(N,N);
for i=0:N
    for j=0:N
        
        xi = (-40) + 2.0001*i;
        yj = (-40) + 2.0001*j;
        M(i+1,j+1) = g2(xi,yj)+gg2(xi,yj);
    end;
end;

subplot(2,1,2);
mesh(M);
axis([0 N 0 N 0 0.3]);
legend('M');


function Out=RR(x,y)
Out = sqrt(x.^2+y.^2);

function Out=g2(x,y)
global a X Lamda;
Out = (besselj(1,(2*pi*a*(RR(x,y)/(X*Lamda))))./(2*pi*a*(RR(x,y)/(X*Lamda)))).^2;

function Out=gg2(x,y)
global a d X Lamda;
Out = (besselj(1,(2*pi*a*(RR(x,y-d)/(X*Lamda))))./(2*pi*a*(RR(x,y-d)/(X*Lamda)))).^2;
`,cCode:"",defaultParams:{}},{id:"W11TWOROJ1Sl",title:"W11TWOROJ1Sl - W11TWOROJ1S\r",description:"W11TWOROJ1S\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W11TWOROJ1S

# Imaging: Object of "Two round apertures", at Rayleigh distance
# and round lens, Y is used for R'


# Object
# For choice of f# f/10=f/2a
f = 500
a = 25
Lamda = 0.0005
k = (2*np.pi)/Lamda
Y = np.arange(-0.01, 0.02+0.0001, 0.0001)
# limits of integration
b1 = -0.00025
b2 = 0.00025
b3 = 0.00585
b4 = 0.00635
Io1 = (logical(b2-Y)>=0) - (logical(b1-Y)>=0)
Io2 = (logical(b4-Y)>=0) - (logical(b3-Y)>=0)
Io = Io1 + Io2
# Tol = 0.1
# Image


for ind in range(len(Y)):
    Iim(ind)=quad(@Iimfun,b1,b2,[],[],Y(ind)) +quad(@Iimfun,b3,b4,[],[],Y(ind))
fig = plt.figure(1)

plt.subplot(1, 2, 1)

plt.plot(Y,Io)

plt.xlabel('Y')
plt.legend(['Io(Y)'])
plt.xlim(-0.01, 0.02)
plt.ylim(0, 2)

plt.subplot(1, 2, 2)

plt.plot(Y,Iim)

plt.xlabel('Y')
plt.legend(['Iim(Y)'])
plt.xlim(-0.01, 0.02)
plt.ylim(0, 0.4)

Out = 4*(a**2)*(besselj(1,(k*a*(Y-YY))/f)/(k*a*((Y-YY)/f)))**2
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% W11TWOROJ1S

% Imaging: Object of "Two round apertures", at Rayleigh distance
% and round lens, Y is used for R'

function W11TWOROJ1Sl;
global k a f;
% Object
% For choice of f# f/10=f/2a
f = 500;
a = 25;
Lamda = 0.0005;
k = (2*pi)/Lamda;
Y = (-0.01:0.0001:0.02);
% limits of integration
b1 = -0.00025;
b2 = 0.00025;
b3 = 0.00585;
b4 = 0.00635;



Io1 = (logical(b2-Y)>=0) - (logical(b1-Y)>=0);
Io2 = (logical(b4-Y)>=0) - (logical(b3-Y)>=0);
Io = Io1 + Io2;
% Tol = 0.1;


% Image


for ind=1:length(Y)
    Iim(ind)=quad(@Iimfun,b1,b2,[],[],Y(ind)) +quad(@Iimfun,b3,b4,[],[],Y(ind));    
end;

figure(1);
subplot(1,2,1);
plot(Y,Io);
xlabel('Y');
legend('Io(Y)');
axis([-0.01 0.02 0 2]);
subplot(1,2,2);
plot(Y,Iim);
xlabel('Y');
legend('Iim(Y)');
axis([-0.01 0.02 0 0.4]);



function Out=Iimfun(YY,Y)
global k a f;
Out = 4*(a^2)*(besselj(1,(k*a*(Y-YY))/f)./(k*a*((Y-YY)/f))).^2;

`,cCode:"",defaultParams:{}},{id:"W12TWOROCOHS",title:"W12TWOROCOHS - W12TWOROCOHS\r",description:"W12TWOROCOHS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W12TWOROCOHS

# Imaging with coherent light:
# Two round apertures at Rayleigh distance, and round lens(T is R')


# Object
# For choice of f# f/10=f/2a
f = 500
a = 25
Lamda = 0.0005
k = (2*np.pi)/Lamda
Y = np.arange(-0.01, 0.02+0.00011, 0.00011)
# limits of integration
b1 = -0.00025
b2 = 0.00025
b3 = 0.00585
b4 = 0.00635
# Object Amplitudes:
Iob1 = (logical(b2-Y)>=0) - (logical(b1-Y)>=0)
Iob2 = (logical(b4-Y)>=0) - (logical(b3-Y)>=0)
Iob = Iob1 + Iob2
# Tol = 0.1
# Image


for ind in range(len(Y)):
    Iim(ind)=(quad(@Iimfun,b1,b2,[],[],Y(ind)) +quad(@Iimfun,b3,b4,[],[],Y(ind)))**2
fig = plt.figure(1)

plt.subplot(1, 2, 1)

plt.plot(Y,Iob)

plt.xlabel('Y')
plt.legend(['Io(Y)'])
plt.xlim(-0.01, 0.02)
plt.ylim(0, 2)

plt.subplot(1, 2, 2)

plt.plot(Y,Iim)

plt.xlabel('Y')
plt.legend(['Iim(Y)'])
plt.xlim(-0.01, 0.02)
plt.ylim(0, 1)

Out = 4*(a**2)*(besselj(1,(k*a*(Y-YY))/f)/(k*a*((Y-YY)/f)))
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% W12TWOROCOHS

% Imaging with coherent light:
% Two round apertures at Rayleigh distance, and round lens(T is R')

function W12TWOROCOHS;
global k a f;
% Object
% For choice of f# f/10=f/2a
f = 500;
a = 25;
Lamda = 0.0005;
k = (2*pi)/Lamda;
Y = (-0.01:0.00011:0.02);
% limits of integration
b1 = -0.00025;
b2 = 0.00025;
b3 = 0.00585;
b4 = 0.00635;


% Object Amplitudes:
Iob1 = (logical(b2-Y)>=0) - (logical(b1-Y)>=0);
Iob2 = (logical(b4-Y)>=0) - (logical(b3-Y)>=0);
Iob = Iob1 + Iob2;
% Tol = 0.1;


% Image


for ind=1:length(Y)
    Iim(ind)=(quad(@Iimfun,b1,b2,[],[],Y(ind)) +quad(@Iimfun,b3,b4,[],[],Y(ind))).^2;    
end;

figure(1);
subplot(1,2,1);
plot(Y,Iob);
xlabel('Y');
legend('Io(Y)');
axis([-0.01 0.02 0 2]);
subplot(1,2,2);
plot(Y,Iim);
xlabel('Y');
legend('Iim(Y)');
axis([-0.01 0.02 0 1]);



function Out=Iimfun(YY,Y)
global k a f;
Out = 4*(a^2)*(besselj(1,(k*a*(Y-YY))/f)./(k*a*((Y-YY)/f)));

`,cCode:"",defaultParams:{}},{id:"function",title:"function - W13TRANCOHSIS\r",description:"W13TRANCOHSIS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W13TRANCOHSIS
# Coherent light.
# Fourier transformation of a periodic structure using FT of sinx/x as
# transfer function

# Object: Sum of step functions
i = np.arange(0, 255+1, 1)
b = 2
qq = 14
Lamda = 0.0005
fn = 10
yi = 0
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0)
fig = plt.figure(1)

plt.subplot(3, 2, 1)

plt.plot(i,yi)

plt.xlim(0, 300)
plt.ylim(0, 1.5)

plt.xlabel('i')
plt.legend(['yi'])

# FT of the Object y is Omega

Omega = fft(yi)
N = length(Omega)
plt.subplot(3, 2, 2)

plt.plot(i,real(Omega)
/np.sqrt(N))
plt.xlim(0, 255)
plt.ylim(-2, 4)

plt.xlabel('i')
plt.legend(['real(omega)/sqrt(N)'])
# The transfer function is FT of
# s (and not s squared)

# FT of s is transfer function Tau
Si = 4*(np.sin((np.pi*i)/(fn*Lamda*255))/((np.pi*i)/(fn*Lamda*255)))
Si(1) = 0; # Error correction
Tau = fft(Si)
N = length(Tau)
plt.subplot(3, 2, 3)

plt.plot(i,real(Tau)
/np.sqrt(N))
plt.xlim(0, 300)
plt.ylim(-0.2, 0.1)

plt.xlabel('i')
plt.legend(['real(	au)/sqrt(N)'])
# Product of FT of object and transform function is the modified FT:Phi
Phi = Tau*Omega
plt.subplot(3, 2, 4)

plt.plot(i,real(Phi)
/N)
plt.xlim(0, 300)
plt.ylim(-0.2, 0.5)

plt.xlabel('i')
plt.legend(['real(phi)/N'])
# FT(inverse) of the modified FT is the amplitude of the image yy
yy = ifft(Phi/np.sqrt(N))
N2 = length(Phi)
# The image is the absolute value of yy squared
plt.subplot(3, 1, 3)

plt.plot(i,(yy)
**2)
plt.xlim(0, 300)
plt.ylim(0, 0.005)

plt.xlabel('i')
plt.legend(['(yy)^2'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% W13TRANCOHSIS
% Coherent light.
% Fourier transformation of a periodic structure using FT of sinx/x as
% transfer function
function W13TRANCOHSIS;
% Object: Sum of step functions
i = (0:1:255);

b = 2;
qq = 14;
Lamda = 0.0005;
fn = 10;
yi = 0;
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0);    
end;

figure(1);
subplot(3,2,1);
plot(i,yi);
axis([0 300 0 1.5]);
xlabel('i');
legend('yi');

% FT of the Object y is Omega

Omega = fft(yi);
N = length(Omega);

subplot(3,2,2);
plot(i,real(Omega)/sqrt(N));
axis([0 255 -2 4]);
xlabel('i');
legend('real(omega)/sqrt(N)');

% The transfer function is FT of
% s (and not s squared)

% FT of s is transfer function Tau
Si = 4*(sin((pi*i)/(fn*Lamda*255))./((pi*i)/(fn*Lamda*255)));
Si(1) = 0; % Error correction
Tau = fft(Si);
N = length(Tau);

subplot(3,2,3);
plot(i,real(Tau)/sqrt(N));
axis([0 300 -0.2 0.1]);
xlabel('i');
legend('real(	au)/sqrt(N)');

% Product of FT of object and transform function is the modified FT:Phi
Phi = Tau.*Omega;

subplot(3,2,4);
plot(i,real(Phi)/N);
axis([0 300 -0.2 0.5]);
xlabel('i');
legend('real(phi)/N');

% FT(inverse) of the modified FT is the amplitude of the image yy
yy = ifft(Phi/sqrt(N));
N2 = length(Phi);

% The image is the absolute value of yy squared
subplot(3,1,3);
plot(i,(yy).^2);
axis([0 300 0 0.005]);
xlabel('i');
legend('(yy)^2');
`,cCode:"",defaultParams:{}},{id:"function",title:"function - W14TRANJ1S\r",description:"W14TRANJ1S\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W14TRANJ1S
# Coherent light.
# Fourier transformation of a periodic structure using FT of Bessel as
# transfer function

# Object: Sum of step functions
i = np.arange(0, 255+1, 1)
b = 2
qq = 14
Lamda = 0.0005
fn = 10
yi = 0
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0)
fig = plt.figure(1)

plt.subplot(3, 2, 1)

plt.plot(i,yi)

plt.xlim(0, 300)
plt.ylim(0, 1.5)

plt.xlabel('i')
plt.legend(['yi'])

# FT of the Object y is Omega

Omega = fft(yi)
N = length(Omega)
plt.subplot(3, 2, 2)

plt.plot(i,real(Omega)
/np.sqrt(N))
plt.xlim(0, 255)
plt.ylim(-2, 4)

plt.xlabel('i')
plt.legend(['real(omega)/sqrt(N)'])
# The transfer function is FT of
# s (and not s squared)

# FT of s is transfer function Tau
Si = 4*(besselj(1,(np.pi*i)/(fn*Lamda*255))/((np.pi*i)/(fn*Lamda*255)))
Si(1) = 0; # Error correction
Tau = fft(Si)
N = length(Tau)
plt.subplot(3, 2, 3)

plt.plot(i,real(Tau)
/np.sqrt(N))
plt.xlim(0, 300)
plt.ylim(-0.1, 0.05)

plt.xlabel('i')
plt.legend(['real(	au)/sqrt(N)'])
# Product of FT of object and transform function is the modified FT:Phi
Phi = Tau*Omega
plt.subplot(3, 2, 4)

plt.plot(i,real(Phi)
/N)
plt.xlim(0, 300)
plt.ylim(-0.2, 0.5)

plt.xlabel('i')
plt.legend(['real(phi)/N'])
# FT(inverse) of the modified FT is the modified amplitude of the image yy
yy = ifft(Phi/np.sqrt(N))
N2 = length(Phi)
# The image is the absolute value of yy squared
plt.subplot(3, 1, 3)

plt.plot(i,(yy)
**2)
plt.xlim(0, 300)
plt.ylim(0, 0.005)

plt.xlabel('i')
plt.legend(['(yy)^2'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% W14TRANJ1S
% Coherent light.
% Fourier transformation of a periodic structure using FT of Bessel as
% transfer function
function W14TRANJ1S;
% Object: Sum of step functions
i = (0:1:255);

b = 2;
qq = 14;
Lamda = 0.0005;
fn = 10;
yi = 0;
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0);    
end;

figure(1);
subplot(3,2,1);
plot(i,yi);
axis([0 300 0 1.5]);
xlabel('i');
legend('yi');

% FT of the Object y is Omega

Omega = fft(yi);
N = length(Omega);

subplot(3,2,2);
plot(i,real(Omega)/sqrt(N));
axis([0 255 -2 4]);
xlabel('i');
legend('real(omega)/sqrt(N)');

% The transfer function is FT of
% s (and not s squared)

% FT of s is transfer function Tau
Si = 4*(besselj(1,(pi*i)/(fn*Lamda*255))./((pi*i)/(fn*Lamda*255)));
Si(1) = 0; % Error correction
Tau = fft(Si);
N = length(Tau);

subplot(3,2,3);
plot(i,real(Tau)/sqrt(N));
axis([0 300 -0.1 0.05]);
xlabel('i');
legend('real(	au)/sqrt(N)');

% Product of FT of object and transform function is the modified FT:Phi
Phi = Tau.*Omega;

subplot(3,2,4);
plot(i,real(Phi)/N);
axis([0 300 -0.2 0.5]);
xlabel('i');
legend('real(phi)/N');

% FT(inverse) of the modified FT is the modified amplitude of the image yy
yy = ifft(Phi/sqrt(N));
N2 = length(Phi);

% The image is the absolute value of yy squared
subplot(3,1,3);
plot(i,(yy).^2);
axis([0 300 0 0.005]);
xlabel('i');
legend('(yy)^2');
`,cCode:"",defaultParams:{}},{id:"fow",title:"fow - W15HOGRIBLOHIS\r",description:"W15HOGRIBLOHIS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W15HOGRIBLOHIS
# The object is a periodic structure. The FT of the object is multiplied
# by a blocking function fow low frequencies.
# The FT(inverse) of (FT of object)*(Blocking Function) is the " new" image.
# The "new" image is compared to the original, that is the FT of (FT of object)
# The blocking function removes certain high frequencies of the FT.

# Object: Sum of step functions
i = np.arange(1, 127+1, 1)
b = 2
qq = 7
Lamda = 0.0005
fn = 10
yi = 0
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0)
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.plot(i,yi)

plt.xlim(0, 150)
plt.ylim(0, 2)

plt.xlabel('i')
plt.legend(['yi'])

# FT of the Object y is Omega

Omega = fft(yi)
N = length(Omega)
plt.subplot(2, 2, 2)

plt.plot(i,real(Omega)
/np.sqrt(N))
plt.xlim(0, 150)
plt.ylim(-2, 2)

plt.xlabel('i')
plt.legend(['real(omega)/sqrt(N)'])
# Blocking function y

# Low frequencies may pass
a = 25
Tau = (logical(a-i)>=0)+(logical(-(255-a)+i)>=0)
plt.subplot(2, 2, 3)

plt.plot(i,Tau)

plt.xlim(0, 150)
plt.ylim(0, 2)

plt.xlabel('i')
plt.legend(['	au'])



# Product of FT of object and blocking function is the modified FT:Phi
Phi = Omega*Tau
plt.subplot(2, 2, 4)

plt.plot(i,real(Phi)
/np.sqrt(N))
plt.xlim(0, 150)
plt.ylim(-1, 2)

plt.xlabel('i')
plt.legend(['real(phi)/sqrt(N)'])
# The "new" image is the FT(inverse) of the modified FT
y = ifft(Phi)
N2 = length(Phi)
fig = plt.figure(2)

plt.subplot(1, 2, 1)

plt.plot(i,real(y)
)
plt.xlim(0, 150)
plt.ylim(-0.5, 1)

plt.xlabel('i')
plt.legend(['real(y)'])
# For comparison: FT(inverse) of the unmodified FT
plt.title('FT (inverse) of the modified FT')
x = ifft(Omega)
N2 = length(Omega)
plt.subplot(1, 2, 2)

plt.plot(i,real(x)
)
plt.xlim(0, 150)
plt.ylim(-1, 2)

plt.xlabel('i')
plt.legend(['real(x)'])
plt.title('FT (inverse) of the unmodified FT')

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% W15HOGRIBLOHIS
% The object is a periodic structure. The FT of the object is multiplied
% by a blocking function fow low frequencies.
% The FT(inverse) of (FT of object)*(Blocking Function) is the " new" image.
% The "new" image is compared to the original, that is the FT of (FT of object)
% The blocking function removes certain high frequencies of the FT.
function W15HOGRIBLOHIS;
% Object: Sum of step functions
i = (1:1:127);

b = 2;
qq = 7;
Lamda = 0.0005;
fn = 10;
yi = 0;
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0);    
end;
figure(1);
subplot(2,2,1);
plot(i,yi);
axis([0 150 0 2]);
xlabel('i');
legend('yi');

% FT of the Object y is Omega

Omega = fft(yi);
N = length(Omega);

subplot(2,2,2);
plot(i,real(Omega)/sqrt(N));
axis([0 150 -2 2]);
xlabel('i');
legend('real(omega)/sqrt(N)');

% Blocking function y

% Low frequencies may pass
a = 25;
Tau = (logical(a-i)>=0)+(logical(-(255-a)+i)>=0);

subplot(2,2,3);
plot(i,Tau);
axis([0 150 0 2]);
xlabel('i');
legend('	au');



% Product of FT of object and blocking function is the modified FT:Phi
Phi = Omega.*Tau;

subplot(2,2,4);
plot(i,real(Phi)/sqrt(N));
axis([0 150 -1 2]);
xlabel('i');
legend('real(phi)/sqrt(N)');

% The "new" image is the FT(inverse) of the modified FT
y = ifft(Phi);
N2 = length(Phi);


figure(2);
subplot(1,2,1);
plot(i,real(y));
axis([0 150 -0.5 1]);
xlabel('i');
legend('real(y)');
% For comparison: FT(inverse) of the unmodified FT
title('FT (inverse) of the modified FT');

x = ifft(Omega);
N2 = length(Omega);
subplot(1,2,2);
plot(i,real(x));
axis([0 150 -1 2]);
xlabel('i');
legend('real(x)');
title('FT (inverse) of the unmodified FT');


`,cCode:"",defaultParams:{}},{id:"for",title:"for - W16HOGRIBLOLOS\r",description:"W16HOGRIBLOLOS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W16HOGRIBLOLOS
# The object is a periodic structure. The FT of the object is multiplied
# by a blocking function for high frequencies.
# The FT(inverse) of (FT of object)*(Blocking Function) is the "new" image.
# The "new" image is compared to the original, that is the FT of (FT of object)
# The blocking function removes certain high frequencies of the FT.

# Object: Sum of step functions
i = np.arange(1, 127+1, 1)
b = 2
qq = 7
Lamda = 0.0005
fn = 10
yi = 0
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0)
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.plot(i,yi)

plt.xlim(0, 150)
plt.ylim(0, 2)

plt.xlabel('i')
plt.legend(['yi'])

# FT of the Object y is Omega

Omega = fft(yi)
N = length(Omega)
plt.subplot(2, 2, 2)

plt.plot(i,real(Omega)
/np.sqrt(N))
plt.xlim(0, 150)
plt.ylim(-2, 2)

plt.xlabel('i')
plt.legend(['real(omega)/sqrt(N)'])
# Blocking function y


a = 15
n = 1
Tau = (logical(i-(2*n+2)*a)>=0)-(logical(i-(4+4*n)*a)>=0)
plt.subplot(2, 2, 3)

plt.plot(i,Tau)

plt.xlim(0, 150)
plt.ylim(0, 2)

plt.xlabel('i')
plt.legend(['	au'])



# Product of FT of object and blocking function is the modified FT:Phi
Phi = Omega*Tau
plt.subplot(2, 2, 4)

plt.plot(i,real(Phi)
/np.sqrt(N))
plt.xlim(0, 150)
plt.ylim(-1, 2)

plt.xlabel('i')
plt.legend(['real(phi)/sqrt(N)'])
# The "new" image is the FT(inverse) of the modified FT
y = ifft(Phi)
N2 = length(Phi)
fig = plt.figure(2)

plt.subplot(1, 2, 1)

plt.plot(i,real(y)
)
plt.xlim(0, 150)
plt.ylim(-0.5, 1)

plt.xlabel('i')
plt.legend(['Real(y)'])
# For comparison: FT(inverse) of the unmodified FT
plt.title('FT (inverse) of the modified FT')
x = ifft(Omega)
N2 = length(Omega)
plt.subplot(1, 2, 2)

plt.plot(i,real(x)
)
plt.xlim(0, 150)
plt.ylim(-0.5, 1.5)

plt.xlabel('i')
plt.legend(['Real(x)'])
plt.title('FT (inverse) of the unmodified FT')

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% W16HOGRIBLOLOS
% The object is a periodic structure. The FT of the object is multiplied
% by a blocking function for high frequencies.
% The FT(inverse) of (FT of object)*(Blocking Function) is the "new" image.
% The "new" image is compared to the original, that is the FT of (FT of object)
% The blocking function removes certain high frequencies of the FT.
function W16HOGRIBLOLOS;
% Object: Sum of step functions
i = (1:1:127);

b = 2;
qq = 7;
Lamda = 0.0005;
fn = 10;
yi = 0;
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0);    
end;
figure(1);
subplot(2,2,1);
plot(i,yi);
axis([0 150 0 2]);
xlabel('i');
legend('yi');

% FT of the Object y is Omega

Omega = fft(yi);
N = length(Omega);

subplot(2,2,2);
plot(i,real(Omega)/sqrt(N));
axis([0 150 -2 2]);
xlabel('i');
legend('real(omega)/sqrt(N)');
% Blocking function y


a = 15;
n = 1;
Tau = (logical(i-(2*n+2)*a)>=0)-(logical(i-(4+4*n)*a)>=0);

subplot(2,2,3);
plot(i,Tau);
axis([0 150 0 2]);
xlabel('i');
legend('	au');



% Product of FT of object and blocking function is the modified FT:Phi
Phi = Omega.*Tau;

subplot(2,2,4);
plot(i,real(Phi)/sqrt(N));
axis([0 150 -1 2]);
xlabel('i');
legend('real(phi)/sqrt(N)');

% The "new" image is the FT(inverse) of the modified FT
y = ifft(Phi);
N2 = length(Phi);


figure(2);
subplot(1,2,1);
plot(i,real(y));
axis([0 150 -0.5 1]);
xlabel('i');
legend('Real(y)');
% For comparison: FT(inverse) of the unmodified FT
title('FT (inverse) of the modified FT');

x = ifft(Omega);
N2 = length(Omega);
subplot(1,2,2);
plot(i,real(x));
axis([0 150 -0.5 1.5]);
xlabel('i');
legend('Real(x)');
title('FT (inverse) of the unmodified FT');


`,cCode:"",defaultParams:{}},{id:"has",title:"has - W17HOGRPERS\r",description:"W17HOGRPERS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W17HOGRPERS
# The object is a periodic structure. The FT of the object is multiplied
# by a blocking function. A blocking function has been chosen for blocking certain
# frequencies such that there are twice as many peaks in the image.

# The FT(inverse) of (FT of object)*(Blocking Function) is the "new" image.
# The "new" image is compared to the original, that is the FT of (FT of object)
# The blocking function removes certain high frequencies of the FT.

# Object: Sum of step functions
i = np.arange(1, 127+1, 1)
b = 2
qq = 7
Lamda = 0.0005
fn = 10
yi = 0
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0)
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(i,yi)

plt.xlim(0, 150)
plt.ylim(0, 2)

plt.xlabel('i')
plt.legend(['yi'])
# FT of the Object y is Omega

Omega = fft(yi)
N = length(Omega)
plt.subplot(3, 1, 2)

plt.plot(i,real(Omega)
/np.sqrt(N))
plt.xlim(0, 150)
plt.ylim(-2, 2)

plt.xlabel('i')
plt.legend(['real(omega)/sqrt(N)'])
# Blocking function y

q=5
a=5
Tau = 0
for n=0:q
    
    Tau = Tau + (logical(i-(4*n+2)*a)>=0)-(logical(i-(4*n+4)*a)>=0)
plt.subplot(3, 1, 3)

plt.plot(i,Tau)

plt.xlim(0, 150)
plt.ylim(0, 2)

plt.xlabel('i')
plt.legend(['	au'])



# Product of FT of object and blocking function is the modified FT:Phi
Phi = Omega*Tau
# The "new" image is the FT(inverse) of the modified FT
yy = ifft(Phi)
N2 = length(Phi)
fig = plt.figure(2)

plt.subplot(1, 2, 1)

plt.plot(i,yy)

plt.xlim(0, 150)
plt.ylim(-1, 2)

plt.xlabel('i')
plt.legend(['yy'])

plt.title('Product: FT (inverse) of object and Blocking Function')
# For comparison: The original object
plt.subplot(1, 2, 2)

plt.plot(i,yi)

plt.xlim(0, 150)
plt.ylim(-0.5, 2)

plt.xlabel('i')
plt.legend(['yi'])
plt.title('The Original Object')

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% W17HOGRPERS
% The object is a periodic structure. The FT of the object is multiplied
% by a blocking function. A blocking function has been chosen for blocking certain
% frequencies such that there are twice as many peaks in the image.

% The FT(inverse) of (FT of object)*(Blocking Function) is the "new" image.
% The "new" image is compared to the original, that is the FT of (FT of object)
% The blocking function removes certain high frequencies of the FT.
function W17HOGRPERS;
% Object: Sum of step functions
i = (1:1:127);

b = 2;
qq = 7;
Lamda = 0.0005;
fn = 10;
yi = 0;
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0);    
end;
figure(1);
subplot(3,1,1);
plot(i,yi);
axis([0 150 0 2]);
xlabel('i');
legend('yi');
% FT of the Object y is Omega

Omega = fft(yi);
N = length(Omega);

subplot(3,1,2);
plot(i,real(Omega)/sqrt(N));
axis([0 150 -2 2]);
xlabel('i');
legend('real(omega)/sqrt(N)');
% Blocking function y

q=5;
a=5;
Tau = 0;
for n=0:q
    
    Tau = Tau + (logical(i-(4*n+2)*a)>=0)-(logical(i-(4*n+4)*a)>=0);
end;
subplot(3,1,3);
plot(i,Tau);
axis([0 150 0 2]);
xlabel('i');
legend('	au');



% Product of FT of object and blocking function is the modified FT:Phi
Phi = Omega.*Tau;


% The "new" image is the FT(inverse) of the modified FT
yy = ifft(Phi);
N2 = length(Phi);


figure(2);
subplot(1,2,1);
plot(i,yy);
axis([0 150 -1 2]);
xlabel('i');
legend('yy');

title('Product: FT (inverse) of object and Blocking Function');
% For comparison: The original object
subplot(1,2,2);
plot(i,yi);
axis([0 150 -0.5 2]);
xlabel('i');
legend('yi');
title('The Original Object');


`,cCode:"",defaultParams:{}},{id:"W18HOSTEPS",title:"W18HOSTEPS - W18HOSTEPS\r",description:"W18HOSTEPS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W18HOSTEPS

# The object y has a complicated shape. Its FT is the hologram c. It may be
# produced in the focal plane of a lens, using parallel light.

# The illumination of the hologram with parallel light will reproduce the object,
# that is the FT(inverse) of the FT, called here cc.

# We want to study the reproduced object when the information in the hologram
# is only partly used, that is we multiply cc with a filter f.
# We show separately f and the FT of the product of f and cc.

# The width of the filter f may be changed by using various values for "a" and "b",
# corresponding to changing the size of the hologram.

# The Object
A = [33 80 80 50 20 99 160 200]
i = np.arange(0, 255+1, 1)
yi = 0
for n in range(1, 3+1):yi = yi +(-(logical(A(n)-i)>=0))
for n in range(4, 8+1):yi = yi +((logical(A(n)-i)>=0)*((-1)**n))
fig = plt.figure(1)

plt.subplot(3, 2, 1)

plt.plot(i,yi)

plt.xlim(0, 300)
plt.ylim(-2, 2)

plt.xlabel('i')
plt.legend(['yi'])

# The hologram
c = fft(yi)
N = length(c)
k= (0:1:N-1)
j= (0:1:N-1)
plt.subplot(3, 2, 2)

plt.plot(k,real(c)
/np.sqrt(N))
plt.xlim(0, 300)
plt.ylim(-5, 5)

plt.xlabel('k')
plt.legend(['real(c)/sqrt(N)'])
# The FT of the hologram
# The FT of the FT(hologram)

cc = c
yy = ifft(cc)
N = length(cc)
j = (0:1:N-1)
plt.subplot(3, 2, 3)

plt.plot(j, real(yy)
)
plt.xlim(0, 255)
plt.ylim(-4, 2)

plt.xlabel('j')
plt.legend(['real(yy)'])
# The filter
a= 60
b= 60
f = (logical(a-j)>=0) + (logical(j-255+b)>=0)
plt.subplot(3, 2, 4)

plt.plot(j,f)

plt.xlim(0, 300)
plt.ylim(0, 2)

plt.xlabel('j')
plt.legend(['f'])

# The product: hologram x filter
plt.subplot(3, 1, 3)

plt.plot(k,f*real(c)
/np.sqrt(N))
plt.xlim(0, 300)
plt.ylim(-5, 5)

plt.xlabel('k')
plt.legend(['f*real(c)/sqrt(N)'])
# The FT (inverse) of the changed hologram (hologram x filter),
# similar to the object
ccc = c*f
x = ifft(ccc)
N = length(ccc)
fig = plt.figure(2)

plt.subplot(1, 2, 1)

plt.plot(k, real(x)
)
plt.xlim(0, 300)
plt.ylim(-4, 2)

plt.xlabel('k')
plt.title('The FT (inverse) of the changed hologram (hologram x filter)')
plt.subplot(1, 2, 2)

# For comparison: The object.
plt.plot(i, yi)

plt.xlim(0, 300)
plt.ylim(-2, 2)

plt.xlabel('i')
plt.title('The Object')

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% W18HOSTEPS

% The object y has a complicated shape. Its FT is the hologram c. It may be
% produced in the focal plane of a lens, using parallel light.

% The illumination of the hologram with parallel light will reproduce the object,
% that is the FT(inverse) of the FT, called here cc.

% We want to study the reproduced object when the information in the hologram
% is only partly used, that is we multiply cc with a filter f.
% We show separately f and the FT of the product of f and cc.

% The width of the filter f may be changed by using various values for "a" and "b",
% corresponding to changing the size of the hologram.
function W18HOSTEPS;
% The Object
A = [33 80 80 50 20 99 160 200];
i = (0:1:255);
yi = 0;
for n=1:3
    yi = yi +(-(logical(A(n)-i)>=0));
end;
for n=4:8
    yi = yi +((logical(A(n)-i)>=0)*((-1)^n));
end;
figure(1);
subplot(3,2,1);
plot(i,yi);
axis([0 300 -2 2]);
xlabel('i');
legend('yi');

% The hologram
c = fft(yi);
N = length(c);
k= (0:1:N-1);
j= (0:1:N-1);

subplot(3,2,2);
plot(k,real(c)/sqrt(N));
axis([0 300 -5 5]);
xlabel('k');
legend('real(c)/sqrt(N)');

% The FT of the hologram
% The FT of the FT(hologram)

cc = c;
yy = ifft(cc);
N = length(cc);
j = (0:1:N-1);

subplot(3,2,3);
plot(j, real(yy));
axis([0 255 -4 2]);
xlabel('j');
legend('real(yy)');

% The filter
a= 60;
b= 60;
f = (logical(a-j)>=0) + (logical(j-255+b)>=0);

subplot(3,2,4);
plot(j,f);
axis([0 300 0 2]);
xlabel('j');
legend('f');

% The product: hologram x filter
subplot(3,1,3);
plot(k,f.*real(c)/sqrt(N));
axis([0 300 -5 5]);
xlabel('k');
legend('f*real(c)/sqrt(N)');

% The FT (inverse) of the changed hologram (hologram x filter),
% similar to the object
ccc = c.*f;
x = ifft(ccc);
N = length(ccc);

figure(2);

subplot(1,2,1);
plot(k, real(x));
axis([0 300 -4 2]);
xlabel('k');
title('The FT (inverse) of the changed hologram (hologram x filter)');

subplot(1,2,2);
% For comparison: The object.
plot(i, yi);
axis([0 300 -2 2]);
xlabel('i');
title('The Object');
`,cCode:"",defaultParams:{}},{id:"W1FTSERIS",title:"W1FTSERIS - W1FTSERIS\r",description:"W1FTSERIS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W1FTSERIS
# Fourier serie of spatial wavelength ???? for the interval from -1 to 1( shown to 2).
# For N = 0 the only term is a sine wave from -1 to 1, of wavelength ? = 2.
# For N = 1 a sine-term with 1/3 of ? and smaller amplitude is added.
# For N = 2 a term with 1/5 of ? and smaller amplitude, and so on.
# If N is large, we see a perfect step function.
# For smaller N ( in the 20th) we see "Gibb's phenomenon", the corners
# are not round and there is "overshooting". For large N it disappears.

x = np.arange(-1, 1.9+0.01, 0.01)
n = np.arange(0, 200+1, 1)
N = 100
Lamda = 1
# For larger and larger N one can see how more and more
# waves with shorter and shorter wavelength are used to build the step
# function.

g0 = (4*np.sin(np.pi*x*(1/Lamda)))/np.pi
g1 = (4*np.sin(np.pi*x*((2*1+1)/Lamda)))/((2*1+1)*np.pi)
g2 = (4*np.sin(np.pi*x*((2*2+1)/Lamda)))/((2*2+1)*np.pi)
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.plot(x,g0,x,g1,x,g2)

plt.xlim(-1, 2)
plt.ylim(-2, 2)

plt.xlabel('x')
plt.legend(['g0(x)', 'g1(x)', 'g2(x)'])
plt.subplot(2, 2, 2)

plt.plot(x,g0+g1+g2)

plt.xlim(-1, 2)
plt.ylim(-2, 2)

plt.xlabel('x')
plt.legend(['g0(x)+g1(x)+g2(x)'])
plt.subplot(2, 1, 2)

plt.plot(x,g(x)
)
plt.xlim(-1, 2)
plt.ylim(-2, 2)

plt.xlabel('x')
plt.legend(['g(x)'])
Out = (2*n+1)/(2*Lamda)
sum = 0
for n=0:N
    sum = sum + (4*np.sin(2*np.pi*x*f(n)))/((2*n+1)*np.pi)
Out = sum
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% W1FTSERIS
% Fourier serie of spatial wavelength ???? for the interval from -1 to 1( shown to 2).
% For N = 0 the only term is a sine wave from -1 to 1, of wavelength ? = 2.
% For N = 1 a sine-term with 1/3 of ? and smaller amplitude is added.
% For N = 2 a term with 1/5 of ? and smaller amplitude, and so on.
% If N is large, we see a perfect step function.
% For smaller N ( in the 20th) we see "Gibb's phenomenon", the corners
% are not round and there is "overshooting". For large N it disappears.
function W1FTSERIS;
global N Lamda;
x = (-1:0.01:1.9);
n = (0:1:200);
N = 100;
Lamda = 1;


% For larger and larger N one can see how more and more
% waves with shorter and shorter wavelength are used to build the step
% function.

g0 = (4*sin(pi*x*(1/Lamda)))/pi;
g1 = (4*sin(pi*x*((2*1+1)/Lamda)))/((2*1+1)*pi);
g2 = (4*sin(pi*x*((2*2+1)/Lamda)))/((2*2+1)*pi);

figure(1);
subplot(2,2,1);
plot(x,g0,x,g1,x,g2);
axis([-1 2 -2 2]);
xlabel('x');
legend('g0(x)','g1(x)','g2(x)');

subplot(2,2,2);
plot(x,g0+g1+g2);
axis([-1 2 -2 2]);
xlabel('x');
legend('g0(x)+g1(x)+g2(x)');

subplot(2,1,2);
plot(x,g(x));
axis([-1 2 -2 2]);
xlabel('x');
legend('g(x)');




function Out=f(n)
global Lamda;
Out = (2*n+1)/(2*Lamda);

function Out=g(x)
global N;
sum = 0;
for n=0:N
    sum = sum + (4*sin(2*pi*x*f(n)))/((2*n+1)*pi);    
end;
Out = sum;
`,cCode:"",defaultParams:{}},{id:"W2FTCFTS",title:"W2FTCFTS - W2FTCFTS\r",description:"W2FTCFTS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W2FTCFTS
# Example of real fft and complex cfft on a real object function.

# 1. The real FT fft
# The Object
i = np.arange(0, 255+1, 1)
A = [33 80 80 50 20 99 160 200]
yi = y(i)
fig = plt.figure(1)

plt.subplot(3, 3, 1)

plt.plot(i,yi)

plt.xlim(0, 300)
plt.ylim(-2, 2)

plt.xlabel('i')
plt.legend(['yi'])

# The real Fourier Transformation
c = fft(yi)
N2 = length(c)
j = (0:1:N2-1)
plt.subplot(3, 3, 2)

plt.plot(j,real(c)
/np.sqrt(N2))
plt.xlim(0, 150)
plt.ylim(-5, 5)

plt.xlabel('j')
plt.legend(['real(c)/sqrt(N2)'])
# The inverse fourier transformation
x = ifft(c)
Nx = length(x)
k = (0:1:Nx-1)
plt.subplot(3, 3, 3)

plt.plot(k,x)

plt.xlim(0, 300)
plt.ylim(-4, 2)

plt.xlabel('k')
plt.legend(['x'])

# We can not use x = fft(c) we get
# the "Error Message"
# c must be real

# 2. The complex Fourier Transformation
# The Object
i = np.arange(0, 255+1, 1)
A = [33 80 80 50 20 99 160 200]
yi = y(i)
plt.subplot(3, 3, 4)

plt.plot(i,yi)

plt.xlim(0, 300)
plt.ylim(-2, 2)

plt.xlabel('i')
plt.legend(['yi'])

# The complex Fourier Transformation
cc = fft(yi)
Ncc = length(cc)
k = (0:1:Ncc-1)
plt.subplot(3, 3, 5)

plt.plot(k,real(cc)
/np.sqrt(Ncc))
plt.xlim(0, 300)
plt.ylim(-5, 5)

plt.xlabel('k')
plt.legend(['real(cc)/sqrt(Ncc)'])
# The inverse Fourier Transformation
xx = ifft(cc)
Nxx = length(xx)
k = (0:1:Nxx-1)
plt.subplot(3, 3, 6)

plt.plot(k,real(xx)
)
plt.xlim(0, 300)
plt.ylim(-4, 2)

plt.xlabel('k')
plt.legend(['real(xx)'])
# 3. Application of cfft the second time, instead of the inverse cifft

xxx = fft(cc/np.sqrt(Ncc))
Nxxx = length(xxx)
f = (0:1:Nxxx - 1)
plt.subplot(3, 3, 8)

plt.plot(f,real(xxx)
/np.sqrt(Nxxx))
plt.xlim(0, 300)
plt.ylim(-4, 2)

plt.xlabel('f')
plt.legend(['real(xxx)/sqrt(Nxxx)'])
for k in range(len(i)):
    
    sum1 = 0
    for n in range(1, 3+1):sum1 = sum1 - (logical(A(n)-i(k))>=0)
    sum2 = 0
    for n in range(4, 8+1):sum2 = sum2 + (logical(A(n)-i(k))>=0)*((-1)**n)
    output(k) = sum1+sum2
Out = output
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% W2FTCFTS
% Example of real fft and complex cfft on a real object function.
function W2FTCFTS;
global A;
% 1. The real FT fft
% The Object
i = (0:1:255);
A = [33 80 80 50 20 99 160 200];
yi = y(i);

figure(1);
subplot(3,3,1);
plot(i,yi);
axis([0 300 -2 2]);
xlabel('i');
legend('yi');

% The real Fourier Transformation
c = fft(yi);
N2 = length(c);
j = (0:1:N2-1);

subplot(3,3,2);
plot(j,real(c)/sqrt(N2));
axis([0 150 -5 5]);
xlabel('j');
legend('real(c)/sqrt(N2)');

% The inverse fourier transformation
x = ifft(c);
Nx = length(x);
k = (0:1:Nx-1);

subplot(3,3,3);
plot(k,x);
axis([0 300 -4 2]);
xlabel('k');
legend('x');

% We can not use x = fft(c) we get
% the "Error Message"
% c must be real

% 2. The complex Fourier Transformation
% The Object
i = (0:1:255);
A = [33 80 80 50 20 99 160 200];
yi = y(i);

subplot(3,3,4);
plot(i,yi);
axis([0 300 -2 2]);
xlabel('i');
legend('yi');

% The complex Fourier Transformation
cc = fft(yi);
Ncc = length(cc);
k = (0:1:Ncc-1);

subplot(3,3,5);
plot(k,real(cc)/sqrt(Ncc));
axis([0 300 -5 5]);
xlabel('k');
legend('real(cc)/sqrt(Ncc)');

% The inverse Fourier Transformation
xx = ifft(cc);
Nxx = length(xx);
k = (0:1:Nxx-1);

subplot(3,3,6);
plot(k,real(xx));
axis([0 300 -4 2]);
xlabel('k');
legend('real(xx)');

% 3. Application of cfft the second time, instead of the inverse cifft

xxx = fft(cc/sqrt(Ncc));
Nxxx = length(xxx);
f = (0:1:Nxxx - 1);

subplot(3,3,8);
plot(f,real(xxx)/sqrt(Nxxx));
axis([0 300 -4 2]);
xlabel('f');
legend('real(xxx)/sqrt(Nxxx)');




function Out=y(i);
global A;
for k=1:length(i)
    
    sum1 = 0;
    for n=1:3
        sum1 = sum1 - (logical(A(n)-i(k))>=0);
    end;
    sum2 = 0;
    for n=4:8
        sum2 = sum2 + (logical(A(n)-i(k))>=0)*((-1)^n);
    end;
    output(k) = sum1+sum2;
end;
Out = output;
`,cCode:"",defaultParams:{}},{id:"W3IMONEBS",title:"W3IMONEBS - W3IMONEBS\r",description:"W3IMONEBS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W3IMONEBS
# Imaging: Object is one bar and a cylindrical lens is used.
# f#10 is f/2a equal 10    a is "radius of cylindrical lens

Y = np.arange(-0.01, 0.01+0.0001, 0.0001)
b1 = -0.002
b2 = 0.002
Lamda = 0.0005
f = 500
a = 25
k = (2*np.pi)/Lamda
# TOL = 0.01
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.plot(Y,Iob(Y)
)
plt.xlim(-0.01, 0.01)
plt.ylim(0, 2)

plt.xlabel('Y')
plt.legend(['Iob(Y)'])
plt.subplot(2, 2, 2)

plt.plot(Y,S(Y)
)
plt.xlim(-0.01, 0.01)
plt.ylim(0, 3000)

plt.xlabel('Y')
plt.legend(['S(Y)'])
# Unnormalized
for j in range(len(Y)):
    Iim(j) = quad(@Iimfunct,b1,b2,[],[],Y(j))
plt.subplot(2, 1, 2)

plt.plot(Y,Iim)

plt.xlim(-0.01, 0.01)
plt.ylim(0, 10)

plt.xlabel('Y')
plt.legend(['Iim(Y)'])
Out = (logical(b2-Y)>=0)-(logical(b1-Y)>=0)
Out = 4*(a**2)*((np.sin((k*a*Y)/f))/(k*a*(Y/f)))**2
Out = Iob(YY)*4*(a**2)*((np.sin((k*a*(Y-YY))/f)/(k*a*((Y-YY)/f)))**2)
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% W3IMONEBS
% Imaging: Object is one bar and a cylindrical lens is used.
% f#10 is f/2a equal 10    a is "radius of cylindrical lens
function W3IMONEBS;
global k a f b1 b2;
Y = (-0.01:0.0001:0.01);
b1 = -0.002;
b2 = 0.002;
Lamda = 0.0005;
f = 500;
a = 25;
k = (2*pi)/Lamda;
% TOL = 0.01;

figure(1);
subplot(2,2,1);
plot(Y,Iob(Y));
axis([-0.01 0.01 0 2]);
xlabel('Y');
legend('Iob(Y)');



subplot(2,2,2);
plot(Y,S(Y));
axis([-0.01 0.01 0 3000]);
xlabel('Y');
legend('S(Y)');

% Unnormalized
for j=1:length(Y)
    Iim(j) = quad(@Iimfunct,b1,b2,[],[],Y(j));
end;

subplot(2,1,2);
plot(Y,Iim);
axis([-0.01 0.01 0 10]);
xlabel('Y');
legend('Iim(Y)');

function Out=Iob(Y);
global b1 b2;
Out = (logical(b2-Y)>=0)-(logical(b1-Y)>=0);


function Out=S(Y);
global k a f;
Out = 4*(a^2)*((sin((k*a*Y)/f))./(k*a*(Y/f))).^2;

function Out=Iimfunct(YY,Y)
global k a f;
Out = Iob(YY)*4*(a^2).*((sin((k*a*(Y-YY))/f)./(k*a*((Y-YY)/f))).^2);

`,cCode:"",defaultParams:{}},{id:"W4IMTWOBS",title:"W4IMTWOBS - W4IMTWOBS\r",description:"W4IMTWOBS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W4IMTWOBS
# Imaging: Object is "Two bars" and cylindrical lens is used.
# f/10= f/2a            a is "radius" of cylindrical lens

Y = np.arange(-0.02, 0.02+0.0011, 0.0011)
b1 = -0.008
b2 = -0.005
b3 = 0.005
b4 = 0.008
Lamda = 0.0005
k = (2*np.pi)/Lamda
f = 500
a = 25
Io1= (logical(b2-Y)>=0) -  (logical(b1-Y)>=0)
Io2= (logical(b4-Y)>=0) -  (logical(b3-Y)>=0)
Io = Io1 + Io2
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(Y,Io)

plt.legend(['Io(Y)'])
plt.xlim(-0.02, 0.02)
plt.ylim(0, 2)

plt.xlabel('Y')
for j in range(len(Y)):
    Iim1(j) = quad(@Iimf,b1,b2,[],[],Y(j))
    Iim2(j) = quad(@Iimf,b3,b4,[],[],Y(j))
Iim = Iim1+Iim2
plt.subplot(2, 1, 2)

plt.plot(Y,Iim)

plt.xlim(-0.02, 0.02)
plt.ylim(0, 10)

plt.xlabel('Y')
plt.legend(['Iim(Y)'])
Out = 4*(a**2)*((np.sin((k*a*(Y-YY))/f))/(k*a*((Y-YY)/f)))**2
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% W4IMTWOBS
% Imaging: Object is "Two bars" and cylindrical lens is used.
% f/10= f/2a            a is "radius" of cylindrical lens
function W4IMTWOBS;
global k a f;
Y = (-0.02:0.0011:0.02);
b1 = -0.008;
b2 = -0.005;
b3 = 0.005;
b4 = 0.008;
Lamda = 0.0005;
k = (2*pi)/Lamda;
f = 500;
a = 25;

Io1= (logical(b2-Y)>=0) -  (logical(b1-Y)>=0);
Io2= (logical(b4-Y)>=0) -  (logical(b3-Y)>=0);
Io = Io1 + Io2;

figure(1);
subplot(2,1,1);
plot(Y,Io);
legend('Io(Y)');

axis([-0.02 0.02 0 2]);
xlabel('Y');

for j=1:length(Y)
    Iim1(j) = quad(@Iimf,b1,b2,[],[],Y(j));
    Iim2(j) = quad(@Iimf,b3,b4,[],[],Y(j));
end;
Iim = Iim1+Iim2;

subplot(2,1,2);
plot(Y,Iim);
axis([-0.02 0.02 0 10]);
xlabel('Y');
legend('Iim(Y)');

function Out=Iimf(YY,Y)
global k a f;
Out = 4*(a^2)*((sin((k*a*(Y-YY))/f))./(k*a*((Y-YY)/f))).^2;

`,cCode:"",defaultParams:{}},{id:"W5IMONEROS",title:"W5IMONEROS - W5IMONEROS\r",description:"W5IMONEROS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W5IMONEROS
# Imaging:Object is one round aperture and round lens is
# used
# Object:
# Since we are using circular symmetry, the round aperture is a "bar" in the coordinate X,
# f#10 is f/2a equal 10

Y = np.arange(-0.01, 0.01+0.0001, 0.0001)
# tol = 0.01
b1 = -0.002
b2 = 0.002
Lamda = 0.0005
f = 500
a = 25
k = (2*np.pi)/Lamda
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(Y,Iob(Y)
)
plt.xlim(-0.01, 0.01)
plt.ylim(0, 1.1)

plt.xlabel('Y')
plt.legend(['Iob(Y)'])
# Unnormalized
for j in range(len(Y)):
    Iim(j) = quad(@Iimfunct,b1,b2,[],[],Y(j))
plt.subplot(2, 1, 2)

plt.plot(Y,Iim)

plt.xlim(-0.01, 0.01)
plt.ylim(0, 3)

plt.xlabel('Y')
plt.legend(['Iim(Y)'])
Out = (logical(b2-Y)>=0) - (logical(b1-Y)>=0)
Out = Iob(YY)*4*(a**2)*(besselj(1,((k*a*(Y-YY))/f))/(k*a*((Y-YY)/f)))**2
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% W5IMONEROS
% Imaging:Object is one round aperture and round lens is
% used
% Object:
% Since we are using circular symmetry, the round aperture is a "bar" in the coordinate X,
% f#10 is f/2a equal 10
function W5IMONEROS;
global b1 b2 k a f;
Y = (-0.01:0.0001:0.01);
% tol = 0.01;
b1 = -0.002;
b2 = 0.002;
Lamda = 0.0005;
f = 500;
a = 25;
k = (2*pi)/Lamda;

figure(1);
subplot(2,1,1);
plot(Y,Iob(Y));
axis([-0.01 0.01 0 1.1]);
xlabel('Y');
legend('Iob(Y)');

% Unnormalized
for j=1:length(Y)
    Iim(j) = quad(@Iimfunct,b1,b2,[],[],Y(j));
end;

subplot(2,1,2);
plot(Y,Iim);
axis([-0.01 0.01 0 3]);
xlabel('Y');
legend('Iim(Y)');

function Out=Iob(Y);
global b1 b2;
Out = (logical(b2-Y)>=0) - (logical(b1-Y)>=0);

function Out=Iimfunct(YY,Y)
global k a f;
Out = Iob(YY)*4*(a^2).*(besselj(1,((k*a*(Y-YY))/f))./(k*a*((Y-YY)/f))).^2;

`,cCode:"",defaultParams:{}},{id:"W6IMTWOROS",title:"W6IMTWOROS - W6IMTWOROS\r",description:"W6IMTWOROS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W6IMTWOROS
# Imaging: Two round apertures and a round lens, (R' is X)


Y = np.arange(-0.1, 0.6+0.00111, 0.00111)
b1 = -0.002
b2 = 0.002
b3 = 0.012
b4 = 0.016
# tol = 0.1
# f/10 = f/2a
Lamda = 0.0005
k = (2*np.pi)/Lamda
f = 500
a = 25
Io1= (logical(b2-Y)>=0) -  (logical(b1-Y)>=0)
Io2= (logical(b4-Y)>=0) -  (logical(b3-Y)>=0)
Io = Io1 + Io2
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(Y,Io)

plt.xlim(-0.01, 0.02)
plt.ylim(0, 2)

plt.xlabel('Y')
plt.legend(['Io(Y)'])
for j in range(len(Y)):
    Iim(j) = quad(@Iimf,b1,b2,[],[],Y(j))+ quad(@Iimf,b3,b4,[],[],Y(j))
plt.subplot(2, 1, 2)

plt.plot(Y,Iim)

plt.xlim(-0.01, 0.03)
plt.ylim(0, 3)

plt.xlabel('Y')
plt.legend(['Iim(Y)'])
Out = 4*(a**2)*(besselj(1,((k*a*(Y-YY))/f))/(k*a*((Y-YY)/f)))**2
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% W6IMTWOROS
% Imaging: Two round apertures and a round lens, (R' is X)

function W6IMTWOROS;
global k a f;
Y = (-0.1:0.00111:0.6);
b1 = -0.002;
b2 = 0.002;
b3 = 0.012;
b4 = 0.016;
% tol = 0.1
% f/10 = f/2a
Lamda = 0.0005;
k = (2*pi)/Lamda;
f = 500;
a = 25;

Io1= (logical(b2-Y)>=0) -  (logical(b1-Y)>=0);
Io2= (logical(b4-Y)>=0) -  (logical(b3-Y)>=0);
Io = Io1 + Io2;

figure(1);
subplot(2,1,1);
plot(Y,Io);
axis([-0.01 0.02 0 2]);
xlabel('Y');
legend('Io(Y)');

for j=1:length(Y)
    Iim(j) = quad(@Iimf,b1,b2,[],[],Y(j))+ quad(@Iimf,b3,b4,[],[],Y(j));
end;

subplot(2,1,2);
plot(Y,Iim);
axis([-0.01 0.03 0 3]);
xlabel('Y');
legend('Iim(Y)');

function Out=Iimf(YY,Y)
global k a f;
Out = 4*(a^2).*(besselj(1,((k*a*(Y-YY))/f))./(k*a*((Y-YY)/f))).^2;


`,cCode:"",defaultParams:{}},{id:"W7PUTRAS",title:"W7PUTRAS - W7PUTRAS\r",description:"W7PUTRAS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W7PUTRAS
# Incoherent case, one dimensional.
# Object is a pulse y. Lens is cylindrical with spread function (sinx/x)**2.
# FT of spread Functoin = transfer function.

# The image is FT of ( FT of spread function (transfer function) times FT of object).


# Object: Sum of step functions
k = np.arange(0, 255+1, 1)
b1 = 100
b2 = 140
b = 2
qq = 14
Lamda = 0.0005
fn = 10
yk = (logical(b2-k)>=0)-(logical(b1-k)>=0)
fig = plt.figure(1)

plt.subplot(3, 2, 1)

plt.plot(k,yk)

plt.xlim(0, 300)
plt.ylim(0, 1.5)

plt.xlabel('k')
plt.legend(['yk'])

# FT of the Object y is Omega

Omega = fft(yk)
N = length(Omega)
plt.subplot(3, 2, 2)

plt.plot(k,real(Omega)
/np.sqrt(N))
plt.xlim(0, 255)
plt.ylim(-4, 4)

plt.xlabel('k')
plt.legend(['real(omega)/sqrt(N)'])
# The spread function is (sinz/z)**2 because of cylindrical lens
# FT of spread function is transfer function Tau
# f# = f/2a = fn
Sk = (np.sin((np.pi*k)/(fn*Lamda*255))/((np.pi*k)/(fn*Lamda*255)))**2
Sk(1)=0; # error correction, division by zero at first element
Tau = fft(Sk)
N = length(Tau)
plt.subplot(3, 2, 3)

plt.plot(k,real(Tau)
/np.sqrt(N))
plt.xlim(0, 300)
plt.ylim(-0.005, 0.01)

plt.xlabel('k')
plt.legend(['real(	au)/sqrt(N)'])
# Product of FT of object and FT of spread function(transfer function) is Phi
Phi = (Tau*Omega)
plt.subplot(3, 2, 4)

plt.plot(k,real(Phi)
/N)
plt.xlim(0, 300)
plt.ylim(-0.1, 0.1)

plt.xlabel('k')
plt.legend(['real(phi)/N'])
# Image
# FT (inverse) of the Product of FT of object and FT of transfer function
yy= ifft(Phi/np.sqrt(N))
N2 = length(Phi)
plt.subplot(3, 1, 3)

plt.plot(k,yy)

plt.xlim(0, 300)
plt.ylim(0, 0.02)

plt.xlabel('k')
plt.legend(['yy'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% W7PUTRAS
% Incoherent case, one dimensional.
% Object is a pulse y. Lens is cylindrical with spread function (sinx/x)^2.
% FT of spread Functoin = transfer function.

% The image is FT of ( FT of spread function (transfer function) times FT of object).

function W7PUTRAS;
% Object: Sum of step functions
k = (0:1:255);
b1 = 100;
b2 = 140;
b = 2;
qq = 14;
Lamda = 0.0005;
fn = 10;
yk = (logical(b2-k)>=0)-(logical(b1-k)>=0);

figure(1);
subplot(3,2,1);
plot(k,yk);
axis([0 300 0 1.5]);
xlabel('k');
legend('yk');

% FT of the Object y is Omega

Omega = fft(yk);
N = length(Omega);

subplot(3,2,2);
plot(k,real(Omega)/sqrt(N));
axis([0 255 -4 4]);
xlabel('k');
legend('real(omega)/sqrt(N)');
% The spread function is (sinz/z)^2 because of cylindrical lens
% FT of spread function is transfer function Tau
% f# = f/2a = fn
Sk = (sin((pi*k)/(fn*Lamda*255))./((pi*k)/(fn*Lamda*255))).^2;
Sk(1)=0; % error correction, division by zero at first element
Tau = fft(Sk);
N = length(Tau);

subplot(3,2,3);
plot(k,real(Tau)/sqrt(N));
axis([0 300 -0.005 0.01]);
xlabel('k');
legend('real(	au)/sqrt(N)');

% Product of FT of object and FT of spread function(transfer function) is Phi
Phi = (Tau.*Omega);

subplot(3,2,4);
plot(k,real(Phi)/N);
axis([0 300 -0.1 0.1]);
xlabel('k');
legend('real(phi)/N');
% Image
% FT (inverse) of the Product of FT of object and FT of transfer function
yy= ifft(Phi/sqrt(N));
N2 = length(Phi);

subplot(3,1,3);
plot(k,yy);
axis([0 300 0 0.02]);
xlabel('k');
legend('yy');`,cCode:"",defaultParams:{}},{id:"the",title:"the - W8TRASIS\r",description:"W8TRASIS\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W8TRASIS
# Incoherent case, Fourier transformation of a periodic
# structure using as transfer function the sinc function



# Object: Sum of step functions
i = np.arange(0, 255+1, 1)
b = 2
qq = 14
Lamda = 0.0005
fn = 10
yi = 0
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0)
fig = plt.figure(1)

plt.subplot(3, 2, 1)

plt.plot(i,yi)

plt.xlim(0, 300)
plt.ylim(0, 1.5)

plt.xlabel('i')
plt.legend(['yi'])

# FT of the Object y is c

Omega = fft(yi)
N = length(Omega)
plt.subplot(3, 2, 2)

plt.plot(i,real(Omega)
/np.sqrt(N))
plt.xlim(0, 255)
plt.ylim(-4, 4)

plt.xlabel('i')
plt.legend(['real(omega)/sqrt(N)'])
# Ft of spread function is transfer function Tau
# f#=f/2a=fn

Si = 4*(np.sin((np.pi*i)/(fn*Lamda*255))/((np.pi*i)/(fn*Lamda*255)))**2
Si(1)=0; # error correction, division by zero at first element
Tau = fft(Si)
N = length(Tau)
plt.subplot(3, 2, 3)

plt.plot(i,real(Tau)
/np.sqrt(N))
plt.xlim(0, 300)
plt.ylim(-0.01, 0.03)

plt.xlabel('i')
plt.legend(['real(	au)/sqrt(N)'])
# Product of FT of object and FT of spread function(transfer function) is Phi
Phi = (Tau*Omega)
plt.subplot(3, 2, 4)

plt.plot(i,real(Phi)
/N)
plt.xlim(0, 300)
plt.ylim(-0.2, 0.2)

plt.xlabel('i')
plt.legend(['real(phi)/N'])
# Image
# FT (inverse) of the Product of FT of object and FT of transfer function
yy= ifft(Phi/np.sqrt(N))
N2 = length(Phi)
plt.subplot(3, 1, 3)

plt.plot(i,yy)

plt.xlim(0, 300)
plt.ylim(0, 0.04)

plt.xlabel('i')
plt.legend(['yy'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% W8TRASIS
% Incoherent case, Fourier transformation of a periodic
% structure using as transfer function the sinc function


function W8TRASIS;
% Object: Sum of step functions
i = (0:1:255);

b = 2;
qq = 14;
Lamda = 0.0005;
fn = 10;
yi = 0;
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0);    
end;


figure(1);
subplot(3,2,1);
plot(i,yi);
axis([0 300 0 1.5]);
xlabel('i');
legend('yi');

% FT of the Object y is c

Omega = fft(yi);
N = length(Omega);

subplot(3,2,2);
plot(i,real(Omega)/sqrt(N));
axis([0 255 -4 4]);
xlabel('i');
legend('real(omega)/sqrt(N)');

% Ft of spread function is transfer function Tau
% f#=f/2a=fn

Si = 4*(sin((pi*i)/(fn*Lamda*255))./((pi*i)/(fn*Lamda*255))).^2;
Si(1)=0; % error correction, division by zero at first element
Tau = fft(Si);
N = length(Tau);

subplot(3,2,3);
plot(i,real(Tau)/sqrt(N));
axis([0 300 -0.01 0.03]);
xlabel('i');
legend('real(	au)/sqrt(N)');

% Product of FT of object and FT of spread function(transfer function) is Phi
Phi = (Tau.*Omega);

subplot(3,2,4);
plot(i,real(Phi)/N);
axis([0 300 -0.2 0.2]);
xlabel('i');
legend('real(phi)/N');

% Image
% FT (inverse) of the Product of FT of object and FT of transfer function
yy= ifft(Phi/sqrt(N));
N2 = length(Phi);

subplot(3,1,3);
plot(i,yy);
axis([0 300 0 0.04]);
xlabel('i');
legend('yy');`,cCode:"",defaultParams:{}},{id:"W9TRAJ1S",title:"W9TRAJ1S - W9TRAJ1S\r",description:"W9TRAJ1S\r",category:"Optics - Wavefront Analysis",chapter:"10",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# W9TRAJ1S
# Incoherent case, Fourier transformation of a periodic
# structure using as transfer function: Bessel



# Object: Sum of step functions
i = np.arange(0, 255+1, 1)
b = 2
qq = 14
Lamda = 0.0005
fn = 10
yi = 0
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0)
fig = plt.figure(1)

plt.subplot(3, 2, 1)

plt.plot(i,yi)

plt.xlim(0, 300)
plt.ylim(0, 1.5)

plt.xlabel('i')
plt.legend(['yi'])

# FT of the Object y is c

Omega = fft(yi)
N = length(Omega)
plt.subplot(3, 2, 2)

plt.plot(i,real(Omega)
/np.sqrt(N))
plt.xlim(0, 255)
plt.ylim(-2, 4)

plt.xlabel('i')
plt.legend(['real(omega)/sqrt(N)'])
# Ft of spread function is transfer function Tau
# f#=f/2a=fn

Si = 4*(besselj(1,((np.pi*i)/(fn*Lamda*255)))/((np.pi*i)/(fn*Lamda*255)))**2
Si(1)=0; # error correction, division by zero at first element
Tau = fft(Si)
N = length(Tau)
plt.subplot(3, 2, 3)

plt.plot(i,real(Tau)
/np.sqrt(N))
plt.xlim(0, 300)
plt.ylim(-0.01, 0.02)

plt.xlabel('i')
plt.legend(['real(	au)/sqrt(N)'])
# Product of FT of object and FT of spread function(transfer function) is Phi
Phi = (Tau*Omega)
plt.subplot(3, 2, 4)

plt.plot(i,real(Phi)
/N)
plt.xlim(0, 300)
plt.ylim(-0.02, 0.06)

plt.xlabel('i')
plt.legend(['real(phi)/N'])
# Image
# FT (inverse) of the Product of FT of object and FT of transfer function
yy= ifft(Phi/np.sqrt(N))
N2 = length(Phi)
plt.subplot(3, 1, 3)

plt.plot(i,yy)

plt.xlim(0, 300)
plt.ylim(0, 0.01)

plt.xlabel('i')
plt.legend(['yy'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% W9TRAJ1S
% Incoherent case, Fourier transformation of a periodic
% structure using as transfer function: Bessel


function W9TRAJ1S;
% Object: Sum of step functions
i = (0:1:255);

b = 2;
qq = 14;
Lamda = 0.0005;
fn = 10;
yi = 0;
for n=0:qq
    yi = yi + (logical(i-(4*(2*n+1)+2)*b)>=0) - (logical(i-(4*(2*n+1)+4)*b)>=0);    
end;


figure(1);
subplot(3,2,1);
plot(i,yi);
axis([0 300 0 1.5]);
xlabel('i');
legend('yi');

% FT of the Object y is c

Omega = fft(yi);
N = length(Omega);

subplot(3,2,2);
plot(i,real(Omega)/sqrt(N));
axis([0 255 -2 4]);
xlabel('i');
legend('real(omega)/sqrt(N)');

% Ft of spread function is transfer function Tau
% f#=f/2a=fn

Si = 4*(besselj(1,((pi*i)/(fn*Lamda*255)))./((pi*i)/(fn*Lamda*255))).^2;
Si(1)=0; % error correction, division by zero at first element
Tau = fft(Si);
N = length(Tau);

subplot(3,2,3);
plot(i,real(Tau)/sqrt(N));
axis([0 300 -0.01 0.02]);
xlabel('i');
legend('real(	au)/sqrt(N)');

% Product of FT of object and FT of spread function(transfer function) is Phi
Phi = (Tau.*Omega);

subplot(3,2,4);
plot(i,real(Phi)/N);
axis([0 300 -0.02 0.06]);
xlabel('i');
legend('real(phi)/N');

% Image
% FT (inverse) of the Product of FT of object and FT of transfer function
yy= ifft(Phi/sqrt(N));
N2 = length(Phi);

subplot(3,1,3);
plot(i,yy);
axis([0 300 0 0.01]);
xlabel('i');
legend('yy');`,cCode:"",defaultParams:{}},{id:"A2SPASSS",title:"A2SPASSS - A2SPASSS\r",description:"A2SPASSS\r",category:"Optics - Aberrations",chapter:"11",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# A2SPASSS
# Spherical aberration of a single refracting surface.
# Definiton: Longitudinal spherical Aberration L.S.A. = xi - xiisph
# Calculation of image point xi and corrected image point xiisph
# All lengths in cm.

# 1. Calculation of xi(xo) for negative values of xo
ro = 2
n = 1.5
r = 10
xo = np.arange(-20, -101, -1)
xi = 1 / (((n - 1) / (n * r)) + 1 / (n * xo))

# 2. Calculation of xiisph(xo) depending on xo for the corrected case of L.S.A
xiisph = n / (
    ((n - 1) / r)
    + 1 / xo
    + ((n - 1) / (n ** 2)) * ((ro ** 2) / 2) * (((1 / r - 1 / xo) ** 2) * (1 / r - ((n + 1) / xo)))
)

fig = plt.figure(figsize=(10, 12))

plt.subplot(4, 2, 1)
plt.plot(xo, xi, label='xi(xo)')
plt.plot(xo, xiisph, label='xiisph(xo)')
plt.xlim(-100, 0)
plt.ylim(0, 100)
plt.xlabel('xo')
plt.legend(['xi(xo)', 'xiisph(xo)'])

plt.subplot(4, 2, 2)
plt.plot(xo, xi - xiisph, label='xi - xiisph')
plt.xlim(-100, 0)
plt.ylim(-10, 20)
plt.xlabel('xo')
plt.legend(['xi(xo)-xiisph(xo)'])

# 3. Calculation of xiisph(nn) depending on the refractive index nn
xxo = -30
rr = 10
nn = np.arange(1.4, 4.01, 0.01)
xi = 1 / ((nn - 1) / (nn * rr) + 1 / (nn * xxo))
xiisph = nn / (
    ((nn - 1) / r)
    + 1 / xxo
    + ((nn - 1) / (nn ** 2)) * ((ro ** 2) / 2) * (((1 / r - 1 / xxo) ** 2) * (1 / r - ((nn + 1) / xxo)))
)

plt.subplot(4, 2, 3)
plt.plot(nn, xi, label='xi(nn)')
plt.xlim(1, 4)
plt.ylim(0, 300)
plt.xlabel('nn')
plt.legend(['xi(nn)'])

plt.subplot(4, 2, 4)
plt.plot(nn, xiisph, label='xiisph(nn)')
plt.xlim(1, 4)
plt.ylim(0, 200)
plt.xlabel('nn')
plt.legend(['xiisph(nn)'])

plt.subplot(4, 2, 5)
plt.plot(nn, xi - xiisph, label='xi - xiisph')
plt.xlim(1, 4)
plt.ylim(0, 100)
plt.xlabel('nn')
plt.legend(['xi(nn)-xiisph(nn)'])

# 4. Calculation of xiisph(rrr) depending on the radius of curvature rrr
nnn = 1.5
xxxo = 10
rrr = np.arange(1, 21, 1)
xi = 1 / ((nnn - 1) / (nnn * rrr) + 1 / (nnn * xxxo))
xiisph = nnn / (
    ((nnn - 1) / rrr)
    + 1 / xxxo
    + ((nnn - 1) / (nnn ** 2)) * ((ro ** 2) / 2) * (((1 / rrr - 1 / xxxo) ** 2) * (1 / rrr - ((nnn + 1) / xxxo)))
)

plt.subplot(4, 2, 6)
plt.plot(rrr, xi, label='xi(rrr)')
plt.xlim(0, 20)
plt.ylim(0, 15)
plt.xlabel('rrr')
plt.legend(['xi(rrr)'])

plt.subplot(4, 2, 7)
plt.plot(rrr, xiisph, label='xiisph(rrr)')
plt.xlim(0, 20)
plt.ylim(0, 15)
plt.xlabel('rrr')
plt.legend(['xiisph(rrr)'])

plt.subplot(4, 2, 8)
plt.plot(rrr, xi - xiisph, label='xi - xiisph')
plt.xlim(0, 20)
plt.ylim(-0.5, 1)
plt.xlabel('rrr')
plt.legend(['xi(rrr)-xiisph(rrr)'])

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% A2SPASSS
% Spherical aberration of a single refracting surface.
% Definiton: Longitudinal spherical Aberration L.S.A. = xi - xiisph
% Calculation of image point xi and corrected image point xiisph
% All length in cm.

function A2SPASSS;
% 1. Calculation of xi(xo) for negative values of xo
ro = 2;
n = 1.5;
r = 10;
xo = (-20:-1:-100);
xi = 1./(((n-1)/(n*r))+1./(n*xo));

% 2. Calculation of xiisph(xo) depending on xo for the corrected case of L.S.A

xiisph = n./(((n-1)/r)+1./xo+((n-1)/(n^2))*((ro^2)/2)*(((1/r-1./xo).^2).*(1/r-((n+1)./xo))));

figure(1);
subplot(4,2,1);
plot(xo,xi,xo,xiisph);
axis([-100 0 0 100]);
xlabel('xo');
legend('xi(xo)','xiisph(xo)');

subplot(4,2,2);
plot(xo,xi-xiisph);
axis([-100 0 -10 20]);
xlabel('xo');
legend('xi(xo)-xiisph(xo)');

% 3. Calculation of xiisph(nn) depending on the refractive index nn
xxo = -30;
rr = 10;
nn = (1.4:0.01:4);
xi = 1./((nn-1)./(nn*rr)+1./(nn*xxo));
xiisph = n./(((nn-1)/r)+1/xxo+((nn-1)./(nn.^2))*((ro^2)/2).*(((1/r-1/xxo)^2).*(1/r-((nn+1)/xxo))));

subplot(4,2,3);
plot(nn,xi);
axis([1 4 0 300]);
xlabel('nn');
legend('xi(nn)');

subplot(4,2,4);
plot(nn,xiisph);
axis([1 4 0 200]);
xlabel('nn');
legend('xiisph(nn)');

% There is no value for which LSA = 0
subplot(4,2,5);
plot(nn,xi-xiisph);
axis([1 4 0 100]);
xlabel('nn');
legend('xi(nn)-xiisph(nn)');


% 4. Calculation of xiisph(rrr) depending on the radius of curvature rrrr
nnn = 1.5;
xxxo = 10;
rrr = (1:1:20);
xi = 1./((nnn-1)./(nnn*rrr)+1./(nnn*xxxo));
xiisph = n./(((nnn-1)./rrr)+1/xxxo+((nnn-1)/(nnn.^2))*((ro^2)/2)*(((1./rrr-1/xxxo).^2).*(1./rrr-((nnn+1)/xxxo))));

subplot(4,2,6);
plot(rrr,xi);
axis([0 20 0 15]);
xlabel('rrr');
legend('xi(rrr)');

subplot(4,2,7);
plot(rrr,xiisph);
axis([0 20 0 15]);
xlabel('rrr');
legend('xiisph(rrr)');

subplot(4,2,8);
plot(rrr,xi-xiisph);
axis([0 20 -0.5 1]);
xlabel('rrr');
legend('xi(rrr)-xiisph(rrr)');`,cCode:"",defaultParams:{}},{id:"A4SPHLSIPIS",title:"A4SPHLSIPIS - A4SPHLSIPIS\r",description:"A4SPHLSIPIS\r",category:"Optics - Aberrations",chapter:"11",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# A4SPHLSIPIS

# Spherical Aberration. The pi_val-sigma equation
# We assume n=1.5 and compare the cases of real and virtual images.

# 1. Image for f = 10, and xo to the left of focal point, LSA may not be eliminated

r1 = 10
r2 = -10
n = 1.5
ro = 4
xo = 4
f = 1/((n-1)*(1/r1-1/r2))   # f = 10
xi = 1/(1/f+1/xo)           # xi = 2.857

# 2. Definitions
# Definition: Sigma = (r2-r1)/(r2+r1)
Sigma = np.arange(-10, 10+0.1, 0.1)
# 3. pi_val-Sigma Equation
pi_val = (xi+xo)/(xi-xo)       # pi_val = -6



fig = plt.figure(1)

plt.plot(Sigma,Y(Sigma)
)
plt.xlim(-10, 10)
plt.ylim(0, 0.1)

plt.xlabel('sigma')
plt.legend(['Y(sigma)'])
# 4. Minimum value of Y(?)
# The value of Y(?) at the minimum is obtained by differentiation and equating equal to 0.
# The result is
Sigmamin = -B(n)*(pi_val/(2*A(n)))  # Sigmamin = 4.286

# Calculation of the corresponding value of Y(Sigmamin)
Ymin = Y(Sigmamin)     # Ymin = -0.013




Out = (n+2)/(8*n*((n-1)**2))
Out = (n+1)/(2*n*(n-1))
Out = (3*n+2)/(8*n)
Out = (n**2)/(8*((n-1)**2))
Out = ((ro**2)/(f**3))*(A(n)*(Sigma**2)+B(n)*Sigma*pi_val+C(n)*(pi_val**2)+D(n))
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% A4SPHLSIPIS

% Spherical Aberration. The pi-sigma equation
% We assume n=1.5 and compare the cases of real and virtual images.
function A4SPHLSIPIS;
% 1. Image for f = 10, and xo to the left of focal point, LSA may not be eliminated
global ro f pi n;
r1 = 10;
r2 = -10;
n = 1.5;
ro = 4;
xo = 4;

f = 1/((n-1)*(1/r1-1/r2))   % f = 10
xi = 1/(1/f+1/xo)           % xi = 2.857

% 2. Definitions
% Definition: Sigma = (r2-r1)/(r2+r1)
Sigma = (-10:0.1:10);

% 3. pi-Sigma Equation
pi = (xi+xo)/(xi-xo)       % pi = -6



figure(1);
plot(Sigma,Y(Sigma));
axis([-10 10 0 0.1]);
xlabel('sigma');
legend('Y(sigma)');
% 4. Minimum value of Y(?)
% The value of Y(?) at the minimum is obtained by differentiation and equating equal to 0.
% The result is
Sigmamin = -B(n)*(pi/(2*A(n)))  % Sigmamin = 4.286

% Calculation of the corresponding value of Y(Sigmamin)
Ymin = Y(Sigmamin)     % Ymin = -0.013



function Out=A(n)
Out = (n+2)./(8*n.*((n-1).^2));

function Out=B(n)
Out = (n+1)./(2*n.*(n-1));

function Out=C(n)
Out = (3*n+2)./(8*n);

function Out=D(n)
Out = (n.^2)./(8*((n-1).^2));

function Out=Y(Sigma)
global ro f pi n;
Out = ((ro^2)/(f^3))*(A(n)*(Sigma.^2)+B(n)*Sigma*pi+C(n)*(pi^2)+D(n));

`,cCode:"",defaultParams:{}},{id:"A5COMAS",title:"A5COMAS - A5COMAS\r",description:"A5COMAS\r",category:"Optics - Aberrations",chapter:"11",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# A5COMAS

# The tangential coma CT and the sagittal coma CS are calulated depending on
# using expressions of the third order theory. For similar expressions see
# Jenkins and White, 4th Ed, p.163.


# 1. No coma and spherical aberration
r1 = 11
r2 = -10
xo = -30
n = 1.3168
f = 1/((1/r1-1/r2)*(n-1))
xi = 1/(1/f + 1/xo)         # xi = 36.837

# 2. Definitions for calculations on coma

pi_val = (xi + xo)/(xi-xo)      # pi_val = 0.102
Sigma = (r2+r1)/(r2-r1)     # Sigma = -0.048
Rho = 1.5
G = (3*(2*n+1))/(4*n)       # G = 2.07
W = (3*(n+1))/(4*n*(n-1))   # W = 4.165

ZZ = W*Sigma + G*pi_val
# Tangential Coma CT as function of Rho

Rho =np.arange(0, 1+0.01, 0.01)
Beta = 0.05
CT = (Rho**2)*((ZZ*np.tan(Beta))/(f**2))
fig = plt.figure(1)

plt.plot(Rho,CT)

plt.xlim(0, 1)
plt.ylim(0, 3e-6)

plt.xlabel('\rho')
plt.legend(['CT(\rho)'])
# Condition for elimination of coma
# if Rho = -((2n+1)(n-1)/(n+1))pi_val:
# CT is zero for all zones
# CS = 1/3 CT
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% A5COMAS

% The tangential coma CT and the sagittal coma CS are calulated depending on
% using expressions of the third order theory. For similar expressions see
% Jenkins and White, 4th Ed, p.163.

function A5COMAS;
% 1. No coma and spherical aberration
r1 = 11;
r2 = -10;
xo = -30;
n = 1.3168;
f = 1/((1/r1-1/r2)*(n-1));
xi = 1/(1/f + 1/xo)         % xi = 36.837

% 2. Definitions for calculations on coma

pi = (xi + xo)/(xi-xo)      % pi = 0.102
Sigma = (r2+r1)/(r2-r1)     % Sigma = -0.048
Rho = 1.5;
G = (3*(2*n+1))/(4*n)       % G = 2.07
W = (3*(n+1))/(4*n*(n-1))   % W = 4.165

ZZ = W*Sigma + G*pi;

% Tangential Coma CT as function of Rho

Rho =(0:0.01:1);
Beta = 0.05;


CT = (Rho.^2)*((ZZ*tan(Beta))/(f^2));
figure(1);
plot(Rho,CT);
axis([0 1 0 3e-6]);
xlabel('\rho');
legend('CT(\rho)');
% Condition for elimination of coma
% if Rho = -((2n+1)(n-1)/(n+1))pi
% CT is zero for all zones
% CS = 1/3 CT`,cCode:"",defaultParams:{}},{id:"A6COMPLANS",title:"A6COMPLANS - A6COMPLANS\r",description:"A6COMPLANS\r",category:"Optics - Aberrations",chapter:"11",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# A6COMPLANS
# For the aplanatic lens, both, spherical aberration and coma are zero. For the
# calculation of coma, the incident light is assumed to be parallel.


# 1.The aplanatic lens
r1 = -30
xo = r1
n = 1.5
Rho = 1
Beta = 0.05
r2 = (xo*n)/(n+1)
xi = n*xo
f = ((n+1)/(n-1))*r2
# and for pi_val, sigma, W, G
pi_val = (xi+xo)/(xi-xo)    # pi_val = 5
Sigma = (r2+xo)/(r2-xo) # Sigma = -4

# 2. The correction for coma
# Coma is eliminated if Co = 0, that is (W(n)Sigma + G(n)pi_val) is 0, or Sigma = -pi_val(G(n)/W(n)):
# 3. Graph of y(n) = W(n)*Sigma + G(n)*pi_val
# we double up and use nn
nn = np.arange(1, 4+0.01, 0.01)
pp = (nn*xo + xo)/(nn*xo - xo)
r2 = xo*((nn)/(nn+1))
ss = (r2+r1)/(r2-r1)
y = W(nn)*ss+G(nn)*pp
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(nn,y)

plt.xlim(1, 4)
plt.ylim(-1e-12, 5e-13)

plt.xlabel('nn')
plt.legend(['y(nn)'])
# Coma is zero for most values of nn
plt.subplot(2, 1, 2)

plt.plot(nn,ss)

plt.xlim(1, 4)
plt.ylim(-10, 0)

plt.xlabel('nn')
plt.legend(['ss(nn)'])
Out = (3*(n+1))/(4*n*(n-1))
Out = (3*(2*n+1))/(4*n)
Out = ((Rho**2*np.tan(Beta))/(f**2))*(W(Rho)*Sigma+G(Rho)*pi_val)
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% A6COMPLANS
% For the aplanatic lens, both, spherical aberration and coma are zero. For the
% calculation of coma, the incident light is assumed to be parallel.

function A6COMPLANS;
global Beta f Sigma pi n;
% 1.The aplanatic lens
r1 = -30
xo = r1;
n = 1.5;
Rho = 1;
Beta = 0.05;
r2 = (xo*n)/(n+1);
xi = n*xo;
f = ((n+1)/(n-1))*r2;
% and for pi, sigma, W, G
pi = (xi+xo)/(xi-xo)    % pi = 5
Sigma = (r2+xo)/(r2-xo) % Sigma = -4

% 2. The correction for coma
% Coma is eliminated if Co = 0, that is (W(n)Sigma + G(n)pi) is 0, or Sigma = -pi(G(n)/W(n))

% 3. Graph of y(n) = W(n)*Sigma + G(n)*pi
% we double up and use nn
nn = (1:0.01:4);
pp = (nn*xo + xo)./(nn*xo - xo);
r2 = xo*((nn)./(nn+1));
ss = (r2+r1)./(r2-r1);
y = W(nn).*ss+G(nn).*pp;

figure(1);
subplot(2,1,1);
plot(nn,y);
axis([1 4 -1e-12 5e-13]);
xlabel('nn');
legend('y(nn)');

% Coma is zero for most values of nn
subplot(2,1,2);
plot(nn,ss);
axis([1 4 -10 0]);
xlabel('nn');
legend('ss(nn)');


function Out=W(n)
Out = (3*(n+1))./(4*n.*(n-1));

function Out=G(n)
Out = (3*(2*n+1))./(4*n);

function Out=Co(Rho)
global Beta f Sigma pi n;
Out = ((Rho.^2*tan(Beta))/(f^2))*(W(Rho)*Sigma+G(Rho)*pi);`,cCode:"",defaultParams:{}},{id:"A7ASTSINS",title:"A7ASTSINS - A7ASTSINS\r",description:"A7ASTSINS\r",category:"Optics - Aberrations",chapter:"11",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# A7ASTSINS

# Astigmatism on a single surface.

# We have for the horizontal and vertical direction each an imaging equation which
# looks like the imaging equation for the single spherical surface, but the expressions
# depend on angles.


# 1. The vertical and horizontal imaging equations.
# We have for horizontal -1/xo +n/xih = (n cos?' -cos?)/r
# and for vertical -cos?**2/xo +ncos?'**2/xiv = (ncos?'-cos?)/r
# using the law of refraction we can replace ?' by ?. We call np.cos( ? ') = c(?)

# 2. For fixed n we make calculate xih(?) as a function of ?

Phi = (.1:0.01:0.5)
xo = -100
r = 10
n = 1.2
c = np.sqrt(1-((np.sin(2*np.pi*(Phi/360)))**2)/(n**2))
xih = n/((n*c-np.cos(2*Phi*(np.pi/360)))/r + 1/xo)
# 3. For fixed n we make calculate xiv(?) as a function of ?

xiv = (n*(c**2))/((n*c-np.cos(2*Phi*(np.pi/360)))/r+((np.cos(2*np.pi*(Phi/360)))**2)/xo)
# 4. Graph of the difference ASD for fixed n
ASD = xih - xiv
fig = plt.figure(1)

plt.plot(Phi,ASD)

plt.xlim(0.1, 0.5)
plt.ylim(0, 0.015)

plt.xlabel('phi')
plt.legend(['ASD(phi)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% A7ASTSINS

% Astigmatism on a single surface.

% We have for the horizontal and vertical direction each an imaging equation which
% looks like the imaging equation for the single spherical surface, but the expressions
% depend on angles.

function A7ASTSINS;
% 1. The vertical and horizontal imaging equations.
% We have for horizontal -1/xo +n/xih = (n cos?' -cos?)/r
% and for vertical -cos?^2/xo +ncos?'^2/xiv = (ncos?'-cos?)/r
% using the law of refraction we can replace ?' by ?. We call cos( ? ') = c(?)

% 2. For fixed n we make calculate xih(?) as a function of ?

Phi = (.1:0.01:0.5);
xo = -100;
r = 10;
n = 1.2
c = sqrt(1-((sin(2*pi*(Phi/360))).^2)/(n^2));
xih = n./((n*c-cos(2*Phi*(pi/360)))/r + 1/xo);

% 3. For fixed n we make calculate xiv(?) as a function of ?

xiv = (n*(c.^2))./((n*c-cos(2*Phi*(pi/360)))/r+((cos(2*pi*(Phi/360))).^2)/xo);

% 4. Graph of the difference ASD for fixed n
ASD = xih - xiv;

figure(1);
plot(Phi,ASD);
axis([0.1 0.5 0 0.015]);
xlabel('phi');
legend('ASD(phi)');`,cCode:"",defaultParams:{}},{id:"of",title:"of - A8ASTISMS\r",description:"A8ASTISMS\r",category:"Optics - Aberrations",chapter:"11",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# A8ASTISMS
# Astigmatism of a thin lens.

# We have for the horizontal and vertical direction each an imaging equation which
# looks like the imaging equation for the thin lens, but the expressions depend on angles.

# We have for horizontal -1/xo +1/xih = (cos?)(cos?'/cos? - 1)(1/r1-1/r2)
# and for vertical -1/xo +1/xiv = (1/cos?)(cos?'/cos? - 1)(1/r1-1/r2)

# using the law of refraction we can replace ?' by ? and make a plot of the difference
# xih-xiv as function of ?.

# 1. Graph of ASD for fixed n and dependence on ?
Phi = np.arange(1, 10+1, 1)
xoo = -400
r1 = 10
r2 = -12
n = 1.3
c = np.sqrt(1-(((np.sin(2*np.pi*(Phi/360)))**2)/(n**2)))
xih = 1/(((np.cos(2*np.pi*(Phi/360)))*((c/(np.cos(2*np.pi*(Phi/360))))-1)*(1/r1-1/r2))+1/xoo)
xiv = 1/(((1/np.cos(2*np.pi*(Phi/360)))*((c/(np.cos(2*np.pi*(Phi/360))))-1)*(1/r1-1/r2))+1/xoo)
ASD = xih - xiv
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(Phi,ASD)

plt.xlim(0, 10)
plt.ylim(0, 20)

plt.xlabel('phi')
plt.legend(['ASD(phi)'])
# 2. Graph of ASD for fixed ? and dependence on n

Phi = 5
xoo = -400
r1 = 10
r2 = -12
n=np.arange(1.3, 3+0.001, 0.001)
c = np.sqrt(1-(((np.sin(2*np.pi*(Phi/360)))**2)/(n**2)))
xih = 1/(((np.cos(2*np.pi*(Phi/360)))*((c/(np.cos(2*np.pi*(Phi/360))))-1)*(1/r1-1/r2))+1/xoo)
xiv = 1/(((1/np.cos(2*np.pi*(Phi/360)))*((c/(np.cos(2*np.pi*(Phi/360))))-1)*(1/r1-1/r2))+1/xoo)
ASD = xih - xiv
plt.subplot(2, 1, 2)

plt.plot(n,ASD)

plt.xlim(1, 3)
plt.ylim(0, 2)

plt.xlabel('n')
plt.legend(['ASD(n)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% A8ASTISMS
% Astigmatism of a thin lens.

% We have for the horizontal and vertical direction each an imaging equation which
% looks like the imaging equation for the thin lens, but the expressions depend on angles.

% We have for horizontal -1/xo +1/xih = (cos?)(cos?'/cos? - 1)(1/r1-1/r2)
% and for vertical -1/xo +1/xiv = (1/cos?)(cos?'/cos? - 1)(1/r1-1/r2)

% using the law of refraction we can replace ?' by ? and make a plot of the difference
% xih-xiv as function of ?.
function A8ASTISMS;
% 1. Graph of ASD for fixed n and dependence on ?
Phi = (1:1:10);
xoo = -400;
r1 = 10;
r2 = -12;
n = 1.3;
c = sqrt(1-(((sin(2*pi*(Phi/360))).^2)/(n^2)));
xih = 1./(((cos(2*pi*(Phi/360))).*((c./(cos(2*pi*(Phi/360))))-1)*(1/r1-1/r2))+1/xoo);
xiv = 1./(((1./cos(2*pi*(Phi/360))).*((c./(cos(2*pi*(Phi/360))))-1)*(1/r1-1/r2))+1/xoo);

ASD = xih - xiv;

figure(1);
subplot(2,1,1);
plot(Phi,ASD);
axis([0 10 0 20]);
xlabel('phi');
legend('ASD(phi)');

% 2. Graph of ASD for fixed ? and dependence on n

Phi = 5;
xoo = -400;
r1 = 10;
r2 = -12
n=(1.3:0.001:3);
c = sqrt(1-(((sin(2*pi*(Phi/360)))^2)./(n.^2)));

xih = 1./(((cos(2*pi*(Phi/360)))*((c./(cos(2*pi*(Phi/360))))-1)*(1/r1-1/r2))+1/xoo);
xiv = 1./(((1/cos(2*pi*(Phi/360)))*((c./(cos(2*pi*(Phi/360))))-1)*(1/r1-1/r2))+1/xoo);
ASD = xih - xiv;

subplot(2,1,2);
plot(n,ASD);
axis([1 3 0 2]);
xlabel('n');
legend('ASD(n)');
`,cCode:"",defaultParams:{}},{id:"I10WEDGES",title:"I10WEDGES - I10WEDGES\r",description:"I10WEDGES\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I10WEDGES
# Fringes of a wedge given by y.

# The distance is given by yy
Alpha = 0.002
Lamda1 = 0.0005
Lamda2 = 0.0008
Lamda3 = 0.0012
x = np.arange(0, 1+0.01, 0.01)
y1 = y(x,Lamda1)
y2 = y(x,Lamda2)
y3 = y(x,Lamda3)
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(x,y1,x,y2,x,y3)

plt.xlim(0, 1)
plt.ylim(0, 1)

plt.xlabel('x')
plt.legend(['y1(x,lambda1)', 'y2(x,lambda2)', 'y3(x,lambda3)'])

# Height at x
h = x*np.tan(Alpha)
plt.subplot(3, 2, 5)

plt.plot(x,h)

plt.xlim(0, 1)
plt.ylim(0, 0.003)

plt.xlabel('x')
plt.legend(['h(x)'])
# Distance between two Maxima depending on ? xx = ?/(2 tan ?)

Lamda = np.arange(0.0001, 0.0015+0.0001, 0.0001)
xx = Lamda/(2*np.tan(Alpha))
plt.subplot(3, 2, 6)

plt.plot(Lamda,xx)

plt.xlim(0, 0.0015)
plt.ylim(0, 0.4)

plt.xlabel('lambda')
plt.legend(['xx(lambda)'])
Out = np.cos(2*np.pi*x*(np.tan(Alpha)/Lamda)+np.pi/2)**2
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% I10WEDGES
% Fringes of a wedge given by y.
function I10WEDGES;
% The distance is given by yy;
global Alpha;
Alpha = 0.002;
Lamda1 = 0.0005;
Lamda2 = 0.0008;
Lamda3 = 0.0012;
x = (0:0.01:1);
y1 = y(x,Lamda1);
y2 = y(x,Lamda2);
y3 = y(x,Lamda3);

figure(1);
subplot(2,1,1);
plot(x,y1,x,y2,x,y3);
axis([0 1 0 1]);
xlabel('x');
legend('y1(x,lambda1)','y2(x,lambda2)','y3(x,lambda3)')

% Height at x
h = x*tan(Alpha);

subplot(3,2,5);
plot(x,h);
axis([0 1 0 0.003]);
xlabel('x');
legend('h(x)');

% Distance between two Maxima depending on ? xx = ?/(2 tan ?)

Lamda = (0.0001:0.0001:0.0015);
xx = Lamda/(2*tan(Alpha));

subplot(3,2,6);
plot(Lamda,xx);
axis([0 0.0015 0 0.4]);
xlabel('lambda');
legend('xx(lambda)');


function Out=y(x,Lamda)
global Alpha;
Out = cos(2*pi*x*(tan(Alpha)/Lamda)+pi/2).^2;
`,cCode:"",defaultParams:{}},{id:"I11NEWTONS",title:"I11NEWTONS - I11NEWTONS\r",description:"I11NEWTONS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I11NEWTONS
# Newton's rings
# Path difference d=(R -SQ(R**2-r**2))

# R is radius of curvature of the lens in mm
# r is the distance from the center in mm


r = np.arange(0, 4+0.01, 0.01)
R = 2000
Lamda = 0.0005
d = R-np.sqrt(R**2-r**2)
INR = np.cos(2*np.pi*(d/Lamda)+np.pi/2)**2
INT = np.cos(2*np.pi*(d/Lamda))**2
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(r,INT)

plt.xlim(0, 4)
plt.ylim(0, 1)

plt.xlabel('r')
plt.legend(['INT(r)'])
plt.subplot(2, 1, 2)

plt.plot(r,INR)

plt.xlim(0, 4)
plt.ylim(0, 1)

plt.xlabel('r')
plt.legend(['INR(r)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% I11NEWTONS
% Newton's rings
% Path difference d=(R -SQ(R^2-r^2))

% R is radius of curvature of the lens in mm
% r is the distance from the center in mm

function I11NEWTONS;
r = (0:0.01:4);
R = 2000;
Lamda = 0.0005;
d = R-sqrt(R^2-r.^2);
INR = cos(2*pi*(d/Lamda)+pi/2).^2;
INT = cos(2*pi*(d/Lamda)).^2;

figure(1);
subplot(2,1,1);
plot(r,INT);
axis([0 4 0 1]);
xlabel('r');
legend('INT(r)');

subplot(2,1,2);
plot(r,INR);
axis([0 4 0 1]);
xlabel('r');
legend('INR(r)');
`,cCode:"",defaultParams:{}},{id:"I12MICHDLS",title:"I12MICHDLS - I12MICHDLS\r",description:"I12MICHDLS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I12MICHDLS

# Michelson interferometer
# Beamsplitter is assumed to be a plane parallel plate
# Fringe pattern depending on D for wavelength ? = .0005, and depending on wavelength
# ? for D = .003. The angle ? = 0.
# All length in mm.


# 1. Dependence on D
Theta = 0
Lamda = 0.0005
D = np.arange(0.027, 0.0325+0.00001, 0.00001)
I1 = np.cos((2*np.pi*D*np.cos(Theta))/Lamda)**2
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(D,I1)

plt.xlim(0.026, 0.033)
plt.ylim(0, 1)

plt.xlabel('D')
plt.legend(['I1(D)'])
# 2. Dependence on Lamda
Lamda = np.arange(0.0004, 0.0008+0.000001, 0.000001)
D = 0.003
I2 = np.cos((2*np.pi*D*np.cos(Theta))/Lamda)**2
plt.subplot(2, 1, 2)

plt.plot(Lamda,I2)

plt.xlim(3e-4, 8e-4)
plt.ylim(0, 1)

plt.xlabel('lambda')
plt.legend(['I2(lambda)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% I12MICHDLS

% Michelson interferometer
% Beamsplitter is assumed to be a plane parallel plate
% Fringe pattern depending on D for wavelength ? = .0005, and depending on wavelength
% ? for D = .003. The angle ? = 0.
% All length in mm.

function I12MICHDLS;
% 1. Dependence on D
Theta = 0;
Lamda = 0.0005;
D = (0.027:0.00001:0.0325);
I1 = cos((2*pi*D*cos(Theta))/Lamda).^2;

figure(1);
subplot(2,1,1);
plot(D,I1);
axis([0.026 0.033 0 1]);
xlabel('D');
legend('I1(D)');

%2. Dependence on Lamda
Lamda = (0.0004:0.000001:0.0008);
D = 0.003;
I2 = cos((2*pi*D*cos(Theta))./Lamda).^2;
subplot(2,1,2);
plot(Lamda,I2);
axis([3e-4 8e-4 0 1]);
xlabel('lambda');
legend('I2(lambda)');
`,cCode:"",defaultParams:{}},{id:"I13MICHANS",title:"I13MICHANS - I13MICHANS\r",description:"I13MICHANS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I13MICHANS

# Michelson interferometer, Dependence on ?.
# (Beamsplitter is assumed to be a dialectric plate)
# Fringe pattern depending on angle ? for two fixed wavelength ? and ?? and fixed
# displacement D.
# All length in mm.


Lamda = 0.0005
D = 0.05
LamdaLamda = 0.00052
Theta = np.arange(-0.301, 0.3+0.001, 0.001)
IM1 = np.cos((2*np.pi*D*np.cos(Theta))/Lamda)**2
IM2 = np.cos((2*np.pi*D*np.cos(Theta))/LamdaLamda)**2
fig = plt.figure(1)

plt.plot(Theta,IM1,Theta,IM2)

plt.xlim(-0.4, 0.3)
plt.ylim(0, 1)

plt.xlabel('	heta')
plt.legend(['IM1(	heta,D)', 'IM2(	heta,D)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% I13MICHANS

% Michelson interferometer, Dependence on ?.
% (Beamsplitter is assumed to be a dialectric plate)
% Fringe pattern depending on angle ? for two fixed wavelength ? and ?? and fixed
% displacement D.
% All length in mm.

function I13MICHANS;
Lamda = 0.0005;
D = 0.05;
LamdaLamda = 0.00052;
Theta = (-0.301:0.001:0.3);

IM1 = cos((2*pi*D*cos(Theta))/Lamda).^2;
IM2 = cos((2*pi*D*cos(Theta))/LamdaLamda).^2;

figure(1);
plot(Theta,IM1,Theta,IM2);
axis([-0.4 0.3 0 1]);
xlabel('	heta');
legend('IM1(	heta,D)','IM2(	heta,D)');
`,cCode:"",defaultParams:{}},{id:"I14PLANIDS",title:"I14PLANIDS - I14PLANIDS\r",description:"I14PLANIDS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I14PLANIDS

# Normal incidence. Plane parallel plate, reflected and transmitted intensity
# depending on thickness for fixed wavelength.
# The reflection coefficients are calculated from Fresnels formulas for ? = 0
# Refractive indices n1, n2 and n3 may all be different and the reflection coefficient
# for both surfaces are calculated.
# The calculation of the fringe pattern is done depending on D for fixed ?, .


# Delta = 2*np.pi/Lamda   2dn2
Theta1 = 1
n1 = 1
n2 = 1.5
n3 = 1
# Delta = 2*np.pi/Lamda   2dn2
r12 = (n2 - n1)/(n2+n1) # r12 = 0.2
r23 = (n3 - n2)/(n3+n2) # r23 = -0.2
Lamda = 0.0005
D = np.arange(0.0002, 0.002+0.00001, 0.00001)
IT = ((1-r12**2)*(1-r23**2))/(1+(r12*r23)**2-(2*r12*r23)*np.cos(4*np.pi*(D/Lamda)*n2))
IR = 1 - IT
fig = plt.figure(1)

plt.subplot(1, 2, 1)

plt.plot(D,IT)

plt.xlim(0, 0.002)
plt.ylim(0, 1)

plt.xlabel('D')
plt.legend(['IT(D)'])
plt.title('Transmitted Pattern')
plt.subplot(1, 2, 2)

plt.plot(D,IR)

plt.xlim(0, 0.002)
plt.ylim(0, 1)

plt.xlabel('D')
plt.legend(['IR(D)'])
plt.title('Reflected Pattern')

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% I14PLANIDS

% Normal incidence. Plane parallel plate, reflected and transmitted intensity
% depending on thickness for fixed wavelength.
% The reflection coefficients are calculated from Fresnels formulas for ? = 0
% Refractive indices n1, n2 and n3 may all be different and the reflection coefficient
% for both surfaces are calculated.
% The calculation of the fringe pattern is done depending on D for fixed ?, .

function I14PLANIDS;
% Delta = 2*pi/Lamda   2dn2
Theta1 = 1;
n1 = 1;
n2 = 1.5;
n3 = 1;
% Delta = 2*pi/Lamda   2dn2
r12 = (n2 - n1)/(n2+n1) %r12 = 0.2;
r23 = (n3 - n2)/(n3+n2) %r23 = -0.2
Lamda = 0.0005;
D = (0.0002:0.00001:0.002);
IT = ((1-r12^2)*(1-r23^2))./(1+(r12*r23)^2-(2*r12*r23)*cos(4*pi*(D/Lamda)*n2));
IR = 1 - IT;

figure(1);
subplot(1,2,1);
plot(D,IT);
axis([0 0.002 0 1]);
xlabel('D');
legend('IT(D)');
title('Transmitted Pattern');
subplot(1,2,2);
plot(D,IR);
axis([0 0.002 0 1]);
xlabel('D');
legend('IR(D)');
title('Reflected Pattern');



`,cCode:"",defaultParams:{}},{id:"I15PLANIDS",title:"I15PLANIDS - I15PLANIDS\r",description:"I15PLANIDS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I15PLANIDS
# Normal incidence. Plane parallel plate, reflected and transmitted intensity
# depending on wavelength for fisec thickness.
# The reflection coefficients are calculated from Fresnels formulas for ? = 0
# Refractive indices n1, n2 and n3 may all be different and the reflection coefficient
# for both surfaces are calculated.
# The calculation of the fringe pattern is done depending on ? for fixed D.

# Delta = 2*np.pi/Lamda   2dn2
n1 = 1
n2 = 1.5
n3 = 1
r12 = (n2-n1)/(n2+n1)   # r12 = 0.2
r23 = (n3-n2)/(n3+n2)   # r23 = -0.2
# Delta = 2*np.pi/Lamda   2dn2
Lamda = np.arange(0.021, 1+0.001, 0.001)
D = 0.2
IT = ((1-r12**2)*(1-r23**2))/(1+(r12*r23)**2-(2*r12*r23)*np.cos(4*np.pi*(D/Lamda)*n2))
IR = 1 - IT
fig = plt.figure(1)

plt.subplot(1, 2, 1)

plt.plot(Lamda,IT)

plt.xlim(0, 1)
plt.ylim(0, 1)

plt.xlabel('lambda')
plt.legend(['IT(lambda)'])
plt.title('Transmitted Pattern')
plt.subplot(1, 2, 2)

plt.plot(Lamda,IR)

plt.xlim(0, 1)
plt.ylim(0, 1)

plt.xlabel('lambda')
plt.legend(['IR(lambda)'])
plt.title('Reflected Pattern')

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% I15PLANIDS
% Normal incidence. Plane parallel plate, reflected and transmitted intensity
% depending on wavelength for fisec thickness.
% The reflection coefficients are calculated from Fresnels formulas for ? = 0
% Refractive indices n1, n2 and n3 may all be different and the reflection coefficient
% for both surfaces are calculated.
% The calculation of the fringe pattern is done depending on ? for fixed D.
function I15PLANIDS;
% Delta = 2*pi/Lamda   2dn2
n1 = 1;
n2 = 1.5;
n3 = 1;
r12 = (n2-n1)/(n2+n1)   % r12 = 0.2;
r23 = (n3-n2)/(n3+n2)   % r23 = -0.2
% Delta = 2*pi/Lamda   2dn2
Lamda = (0.021:0.001:1);
D = 0.2;
IT = ((1-r12^2)*(1-r23^2))./(1+(r12*r23)^2-(2*r12*r23)*cos(4*pi*(D./Lamda)*n2));
IR = 1 - IT;

figure(1);
subplot(1,2,1);
plot(Lamda,IT);
axis([0 1 0 1]);
xlabel('lambda');
legend('IT(lambda)');
title('Transmitted Pattern');
subplot(1,2,2);
plot(Lamda,IR);
axis([0 1 0 1]);
xlabel('lambda');
legend('IR(lambda)');
title('Reflected Pattern');

`,cCode:"",defaultParams:{}},{id:"I16FABRYS",title:"I16FABRYS - I16FABRYS\r",description:"I16FABRYS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I16FABRYS
# Fabry-Perot Transmission depending on D.
# ?ormal incidence. Parameters: reflection coefficient, wavelength ?, refractive index.
# See for global definition.The finess ?g/2 is ?/ ??. All length in mm.

# Delta = 2*np.pi/Lamda   2D (n2) np.cos(Theta2)
D = np.arange(0, 0.11+0.001, 0.001)
n2 = 1
Lamda = 0.1
r1 = 0.7
r2 = 0.9
r3 = 0.97
g1 = (2*r1)/(1-r1**2)
g2 = (2*r2)/(1-r2**2)
g3 = (2*r1)/(1-r3**2)
IT1 = 1/(1+(g1**2)*((np.sin(2*(np.pi/Lamda)*D*n2))**2))
IT2 = 1/(1+(g2**2)*((np.sin(2*(np.pi/Lamda)*D*n2))**2))
IT3 = 1/(1+(g3**2)*((np.sin(2*(np.pi/Lamda)*D*n2))**2))
fig = plt.figure(1)

plt.plot(D,IT1,D,IT2,D,IT3)

plt.xlim(0, 0.12)
plt.ylim(0, 1)

plt.xlabel('D')
plt.legend(['IT1(D)', 'IT2(D)', 'IT3(D)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% I16FABRYS
% Fabry-Perot Transmission depending on D.
% ?ormal incidence. Parameters: reflection coefficient, wavelength ?, refractive index.
% See for global definition.The finess ?g/2 is ?/ ??. All length in mm.
function I16FABRYS;
% Delta = 2*pi/Lamda   2D (n2) cos(Theta2)
D = (0:0.001:0.11);
n2 = 1;
Lamda = 0.1;
r1 = 0.7
r2 = 0.9
r3 = 0.97;
g1 = (2*r1)/(1-r1^2);
g2 = (2*r2)/(1-r2^2);
g3 = (2*r1)/(1-r3^2);

IT1 = 1./(1+(g1^2)*((sin(2*(pi/Lamda)*D*n2)).^2));
IT2 = 1./(1+(g2^2)*((sin(2*(pi/Lamda)*D*n2)).^2));
IT3 = 1./(1+(g3^2)*((sin(2*(pi/Lamda)*D*n2)).^2));

figure(1);
plot(D,IT1,D,IT2,D,IT3);
axis([0 0.12 0 1]);
xlabel('D');
legend('IT1(D)','IT2(D)','IT3(D)');
`,cCode:"",defaultParams:{}},{id:"I17FABRYLS",title:"I17FABRYLS - I17FABRYLS\r",description:"I17FABRYLS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I17FABRYLS

# Fabry-Perot Transmission depending on wavelength. 
# ?ormal incidence. Parameters: reflection coefficient, thickness D, refractive index.
# All length in mm.
# See for global definition.The finess ?g/2 is ?/ ??.

# Delta = 2*np.pi/Lamda   2D (n2) np.cos(Theta2)
n2 = 1
r1 = 0.7
r2 = 0.9
r3 = 0.97
D = 0.0025
Lamda = np.arange(0.0004, 0.0008+0.000001, 0.000001)
g1 = (2*r1)/(1-r1**2)
g2 = (2*r2)/(1-r2**2)
g3 = (2*r1)/(1-r3**2)
IT1 = 1/(1+(g1**2)*((np.sin(2*(np.pi/Lamda)*D*n2))**2))
IT2 = 1/(1+(g2**2)*((np.sin(2*(np.pi/Lamda)*D*n2))**2))
IT3 = 1/(1+(g3**2)*((np.sin(2*(np.pi/Lamda)*D*n2))**2))
fig = plt.figure(1)

plt.plot(Lamda,IT1,Lamda,IT2,Lamda,IT3)

plt.xlim(3.5e-4, 8e-4)
plt.ylim(0, 1)

plt.xlabel('lambda')
plt.legend(['IT1(lambda)', 'IT2(lambda)', 'IT3(lambda)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% I17FABRYLS

% Fabry-Perot Transmission depending on wavelength. 
% ?ormal incidence. Parameters: reflection coefficient, thickness D, refractive index.
% All length in mm.
% See for global definition.The finess ?g/2 is ?/ ??.
function I17FABRYLS;
% Delta = 2*pi/Lamda   2D (n2) cos(Theta2)
n2 = 1;
r1 = 0.7;
r2 = 0.9;
r3 = 0.97;
D = 0.0025;
Lamda = (0.0004:0.000001:0.0008);


g1 = (2*r1)/(1-r1^2);
g2 = (2*r2)/(1-r2^2);
g3 = (2*r1)/(1-r3^2);

IT1 = 1./(1+(g1^2)*((sin(2*(pi./Lamda)*D*n2)).^2));
IT2 = 1./(1+(g2^2)*((sin(2*(pi./Lamda)*D*n2)).^2));
IT3 = 1./(1+(g3^2)*((sin(2*(pi./Lamda)*D*n2)).^2));

figure(1);
plot(Lamda,IT1,Lamda,IT2,Lamda,IT3);
axis([3.5e-4 8e-4 0 1]);
xlabel('lambda');
legend('IT1(lambda)','IT2(lambda)','IT3(lambda)');
`,cCode:"",defaultParams:{}},{id:"I18FABRYRDS",title:"I18FABRYRDS - I18FABRYRDS\r",description:"I18FABRYRDS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I18FABRYRDS

# Fabry-Perot Ring pattern in Transmission and Reflection depending on
# angle.

# ?ear normal incidence. Parameters: reflection coefficient, thickness d,
# refractive index
# and range of angles in Rad. All length in mm.


r = 0.7
Lamda1 = 0.0005
Lamda2 = 0.0006
g = (2*r)/(1-r**2)
D = np.arange(0, 0.001+0.00001, 0.00001)
IT = 1/(1+(g**2)*(np.sin(2*(np.pi/Lamda1)*D)**2))
IIT = 1/(1+(g**2)*(np.sin(2*(np.pi/Lamda2)*D)**2))
# Graph for transmission depending on angle for fixed ratio of D/l
fig = plt.figure(1)

plt.plot(D,IT,D,IIT)

plt.xlim(0, 0.001)
plt.ylim(0, 1)

plt.xlabel('D')
plt.legend(['IT(D)', 'IIT(D)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% I18FABRYRDS

% Fabry-Perot Ring pattern in Transmission and Reflection depending on
% angle.

% ?ear normal incidence. Parameters: reflection coefficient, thickness d,
% refractive index
% and range of angles in Rad. All length in mm.

function I18FABRYRDS;
r = 0.7;
Lamda1 = 0.0005;
Lamda2 = 0.0006;
g = (2*r)/(1-r^2);
D = (0:0.00001:0.001);
IT = 1./(1+(g^2)*(sin(2*(pi/Lamda1)*D).^2));
IIT = 1./(1+(g^2)*(sin(2*(pi/Lamda2)*D).^2));

% Graph for transmission depending on angle for fixed ratio of D/l
figure(1);
plot(D,IT,D,IIT);
axis([0 0.001 0 1]);
xlabel('D');
legend('IT(D)','IIT(D)');
`,cCode:"",defaultParams:{}},{id:"I19FABRYAS",title:"I19FABRYAS - I19FABRYAS\r",description:"I19FABRYAS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I19FABRYAS

# Fabry-Perot Ring pattern in Transmission and Reflection depending on angle.

# ?ear normal incidence. Parameters: reflection coefficient, thickness d, refractive index
# and range of angles in Rad. All length in mm.


# Delta = 2*np.pi/Lamda   2dn2 np.cos(Theta)
n2 = 1
r = 0.9
D = 0.01
Lamda1 = 0.0005
Lamda2=0.0005025
Theta=np.arange(0, 40+0.01, 0.01)
g = (2*r)/(1-r**2)
IT = 1/(1+(g**2)*np.sin(2*(np.pi/Lamda1)*D*n2*np.cos(2*(np.pi/360)*Theta))**2)
IIT = 1/(1+(g**2)*np.sin(2*(np.pi/Lamda2)*D*n2*np.cos(2*(np.pi/360)*Theta))**2)
# Graph for transmission depending on angle for fixed ratio of D/Lamda
fig = plt.figure(1)

plt.plot(Theta,IT,Theta,IIT)

plt.xlim(0, 40)
plt.ylim(0, 1)

plt.xlabel('	heta')
plt.legend(['IT(	heta)', 'IIT(	heta)'])
plt.title('Graph for transmission depending on angle for fixed ratio of D/lambda')

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% I19FABRYAS

% Fabry-Perot Ring pattern in Transmission and Reflection depending on angle.

% ?ear normal incidence. Parameters: reflection coefficient, thickness d, refractive index
% and range of angles in Rad. All length in mm.

function I19FABRYAS;
% Delta = 2*pi/Lamda   2dn2 cos(Theta)
n2 = 1;
r = 0.9;
D = 0.01;
Lamda1 = 0.0005;
Lamda2=0.0005025;
Theta=(0:0.01:40);

g = (2*r)/(1-r^2);

IT = 1./(1+(g^2)*sin(2*(pi/Lamda1)*D*n2*cos(2*(pi/360)*Theta)).^2);
IIT = 1./(1+(g^2)*sin(2*(pi/Lamda2)*D*n2*cos(2*(pi/360)*Theta)).^2);

% Graph for transmission depending on angle for fixed ratio of D/Lamda
figure(1);
plot(Theta,IT,Theta,IIT);
axis([0 40 0 1]);
xlabel('	heta');
legend('IT(	heta)','IIT(	heta)');
title('Graph for transmission depending on angle for fixed ratio of D/lambda');
`,cCode:"",defaultParams:{}},{id:"depending",title:"depending - I1COSWS\r",description:"I1COSWS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I1COSWS

# Cosine function depending on x, t, and a phase constant.
# Interchanging x/? with t/T in the phase factor 2?(x/? -t/T) has no effect on the
# cosine function.We see an equivalent dependence of the cos-function on x/?
# and t/T.
# Two sets of each three functions are shown, they give the same graphs
# when changing the dependence on x or t, using the same range, and leaving
# the other corresponding parameters the same.
# In the way the cosine functions are written, an additional phase factor may
# have its origin in the space or time part, we do not know.


x1=(0:.1:10); Lamda=1; T=10
A1=1; t1=1; theta1=0.5
A2=1; t2=2; theta2=0.2
A3=1; t3=3; theta3=0.1
ua1=A1*np.cos(2*np.pi*((x1/Lamda)-t1/T+theta1))
ua2=A2*np.cos(2*np.pi*((x1/Lamda)-t2/T+theta2))
ua3=A3*np.cos(2*np.pi*((x1/Lamda)-t3/T+theta3))
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(x1,ua1,x1,ua2,x1,ua3)

plt.xlim(0, 10)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
xlabel('x1','Fontsize',12)
plt.legend(['ua1(x1)', 'ua2(x1)', 'ua3(x1)'])
t1=(0:.1:10); LamdaLamda=10; TT=1
B1=1; x1=1; psi1=1
B2=1; x2=2; psi2=1
B3=1; x3=3; psi3=1
ub1=B1*np.cos(2*np.pi*((x1/LamdaLamda)-t1/TT+psi1))
ub2=B2*np.cos(2*np.pi*((x2/LamdaLamda)-t1/TT+psi2))
ub3=B3*np.cos(2*np.pi*((x3/LamdaLamda)-t1/TT+psi3))
plt.subplot(2, 1, 2)

plt.plot(t1,ub1,t1,ub2,t1,ub3)

plt.xlim(0, 10)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
xlabel('t1','Fontsize',12)
plt.legend(['ub1(t1)', 'ub2(t1)', 'ub3(t1)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`%I1COSWS

% Cosine function depending on x, t, and a phase constant.
% Interchanging x/? with t/T in the phase factor 2?(x/? -t/T) has no effect on the
% cosine function.We see an equivalent dependence of the cos-function on x/?
% and t/T.
% Two sets of each three functions are shown, they give the same graphs
% when changing the dependence on x or t, using the same range, and leaving
% the other corresponding parameters the same.
% In the way the cosine functions are written, an additional phase factor may
% have its origin in the space or time part, we do not know.

function I1COSWS;
x1=(0:.1:10); Lamda=1; T=10;
A1=1; t1=1; theta1=0.5;
A2=1; t2=2; theta2=0.2;
A3=1; t3=3; theta3=0.1;
ua1=A1*cos(2*pi*((x1./Lamda)-t1/T+theta1));
ua2=A2*cos(2*pi*((x1./Lamda)-t2/T+theta2));
ua3=A3*cos(2*pi*((x1./Lamda)-t3/T+theta3));

figure(1);
subplot(2,1,1);
plot(x1,ua1,x1,ua2,x1,ua3);
axis([0 10 -1 1]);                  % PLOTS LIMITS                    
xlabel('x1','Fontsize',12);
legend('ua1(x1)','ua2(x1)','ua3(x1)');


t1=(0:.1:10); LamdaLamda=10; TT=1;
B1=1; x1=1; psi1=1;
B2=1; x2=2; psi2=1;
B3=1; x3=3; psi3=1;
ub1=B1*cos(2*pi*((x1/LamdaLamda)-t1./TT+psi1));
ub2=B2*cos(2*pi*((x2/LamdaLamda)-t1./TT+psi2));
ub3=B3*cos(2*pi*((x3/LamdaLamda)-t1./TT+psi3));

subplot(2,1,2);
plot(t1,ub1,t1,ub2,t1,ub3);
axis([0 10 -1 1]);                  % PLOTS LIMITS                    
xlabel('t1','Fontsize',12);
legend('ub1(t1)','ub2(t1)','ub3(t1)');






`,cCode:"",defaultParams:{}},{id:"of",title:"of - I20ARRAYS\r",description:"I20ARRAYS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I20ARRAYS
# Interference pattern of N sources 

# Parameters: Opening a, Wavelength ? , Number of lines N.
# Graph as function of ?, because of small angle ? = Y/X. Normalization to 1.
# For comparison of maxima, the numerator is plotted separately.


Theta = np.arange(0, 0.5+0.001, 0.001)
Lamda = 0.0005
a = 0.1
aa = 0.2
N = 5
NN = 5
IA1 = (np.sin(np.pi*N*(a/Lamda)*np.sin(2*(np.pi/360)*Theta))/(N*np.sin(np.pi*(a/Lamda)*np.sin(2*(np.pi/360)*Theta))))**2
y = np.sin(np.pi*N*(a/Lamda)*np.sin(2*(np.pi/360)*Theta))**2
y1 = np.sin(np.pi*(a/Lamda)*np.sin(2*(np.pi/360)*Theta))**2
IA2 = (np.sin(np.pi*NN*(aa/Lamda)*np.sin(2*(np.pi/360)*Theta))/(NN*np.sin(np.pi*(aa/Lamda)*np.sin(2*(np.pi/360)*Theta))))**2
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(Theta,IA1,Theta,y,Theta,y1)

plt.xlim(0, 0.5)
plt.ylim(0, 1)

plt.xlabel('	heta')
plt.legend(['IA1(	heta)', 'y(	heta)', 'y1(	heta)'])
plt.subplot(2, 1, 2)

plt.plot(Theta,IA2)

plt.xlim(0, 0.5)
plt.ylim(0, 1)

plt.xlabel('	heta')
plt.legend(['IA2(	heta)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% I20ARRAYS
% Interference pattern of N sources 

% Parameters: Opening a, Wavelength ? , Number of lines N.
% Graph as function of ?, because of small angle ? = Y/X. Normalization to 1.
% For comparison of maxima, the numerator is plotted separately.

function I20ARRAYS;
Theta = (0:0.001:0.5);
Lamda = 0.0005;
a = 0.1;
aa = 0.2;
N = 5;
NN = 5;
IA1 = (sin(pi*N*(a/Lamda)*sin(2*(pi/360)*Theta))./(N*sin(pi*(a/Lamda)*sin(2*(pi/360)*Theta)))).^2;
y = sin(pi*N*(a/Lamda)*sin(2*(pi/360)*Theta)).^2;
y1 = sin(pi*(a/Lamda)*sin(2*(pi/360)*Theta)).^2;
IA2 = (sin(pi*NN*(aa/Lamda)*sin(2*(pi/360)*Theta))./(NN*sin(pi*(aa/Lamda)*sin(2*(pi/360)*Theta)))).^2;

figure(1);
subplot(2,1,1);
plot(Theta,IA1,Theta,y,Theta,y1);
axis([0 0.5 0 1]);
xlabel('	heta');
legend('IA1(	heta)','y(	heta)','y1(	heta)');

subplot(2,1,2);
plot(Theta,IA2);
axis([0 0.5 0 1]);
xlabel('	heta');
legend('IA2(	heta)');
`,cCode:"",defaultParams:{}},{id:"I21RANDS",title:"I21RANDS - I21RANDS\r",description:"I21RANDS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I21RANDS

# Addition of exponential-functions with random angles

# The real part of the sum of exp i Theta is plotted.
f = np.arange(1, 100+1, 1)
N = f
k = np.arange(1, 1000+1, 1)
# i = np.sqrt(-1)
Theta = rand(size(k))*2*np.pi
for ind in range(len(f)):
    y(ind)=0
    for k=1:N(ind)
        y(ind) = y(ind) + np.exp(i*(Theta(k)))
    y(ind) = (1/N(ind))*(y(ind))
fig = plt.figure(1)

plt.plot(f,real(y)
)
plt.xlabel('f')
plt.legend(['real(y(f))'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% I21RANDS

% Addition of exponential-functions with random angles
function I21RANDS;
% The real part of the sum of exp i Theta is plotted.
f = (1:1:100);
N = f;
k = (1:1:1000);
% i = sqrt(-1);

Theta = rand(size(k)).*2*pi;

for ind=1:length(f)
    y(ind)=0;
    for k=1:N(ind)
        y(ind) = y(ind) + exp(i*(Theta(k)));
    end;
    y(ind) = (1/N(ind))*(y(ind));
end;
figure(1);
plot(f,real(y));
xlabel('f');
legend('real(y(f))');

`,cCode:"",defaultParams:{}},{id:"I2COSSUPS",title:"I2COSSUPS - I2COSSUPS\r",description:"I2COSSUPS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I2COSSUPS

# Superposition of two cosine waves, one having an optical path differnce ? with respect to the
# other. The sum is squared to result in the intensity.

# We are looking at a time instance and graphs are shown for six different path differences.


X = np.arange(0, 4+0.05, 0.05)
Lamda = 1
A = 1
t1 = 0.1
T = 1
delta1 = 0
delta2 = 0.1
delta3 = 0.2
delta4 = 0.3
delta5 = 0.4
delta6 = 0.5
u1 =A*np.cos(2*np.pi*((X/Lamda)-(t1/T))) + A*np.cos(2*np.pi*(((X-delta1)/Lamda)-(t1/T)))
u2 =A*np.cos(2*np.pi*((X/Lamda)-(t1/T))) + A*np.cos(2*np.pi*(((X-delta2)/Lamda)-(t1/T)))
u3 =A*np.cos(2*np.pi*((X/Lamda)-(t1/T))) + A*np.cos(2*np.pi*(((X-delta3)/Lamda)-(t1/T)))
u4 =A*np.cos(2*np.pi*((X/Lamda)-(t1/T))) + A*np.cos(2*np.pi*(((X-delta4)/Lamda)-(t1/T)))
u5 =A*np.cos(2*np.pi*((X/Lamda)-(t1/T))) + A*np.cos(2*np.pi*(((X-delta5)/Lamda)-(t1/T)))
u6 =A*np.cos(2*np.pi*((X/Lamda)-(t1/T))) + A*np.cos(2*np.pi*(((X-delta6)/Lamda)-(t1/T)))
fig = plt.figure(1)

plt.plot(X,u1**2,X,u2**2,X,u3**2,X,u4**2,X,u5**2,X,u6**2)

plt.xlim(0, 4)
plt.ylim(0, 4)
;                  # PLOTS LIMITS                    
xlabel('x','Fontsize',12)
title('Figure 1','FontSize',12)
plt.legend(['(u1(x))^2', '(u2(x))^2', '(u3(x))^2', '(u4(x))^2', '(u5(x))^2', '(u6(x))^2'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% I2COSSUPS

% Superposition of two cosine waves, one having an optical path differnce ? with respect to the
% other. The sum is squared to result in the intensity.

% We are looking at a time instance and graphs are shown for six different path differences.

function I2COSSUPS;

X = (0:0.05:4);
Lamda = 1;
A = 1;
t1 = 0.1;
T = 1;
delta1 = 0;
delta2 = 0.1;
delta3 = 0.2;
delta4 = 0.3;
delta5 = 0.4;
delta6 = 0.5;

u1 =A*cos(2*pi*((X/Lamda)-(t1/T))) + A*cos(2*pi*(((X-delta1)/Lamda)-(t1/T)));
u2 =A*cos(2*pi*((X/Lamda)-(t1/T))) + A*cos(2*pi*(((X-delta2)/Lamda)-(t1/T)));
u3 =A*cos(2*pi*((X/Lamda)-(t1/T))) + A*cos(2*pi*(((X-delta3)/Lamda)-(t1/T)));
u4 =A*cos(2*pi*((X/Lamda)-(t1/T))) + A*cos(2*pi*(((X-delta4)/Lamda)-(t1/T)));
u5 =A*cos(2*pi*((X/Lamda)-(t1/T))) + A*cos(2*pi*(((X-delta5)/Lamda)-(t1/T)));
u6 =A*cos(2*pi*((X/Lamda)-(t1/T))) + A*cos(2*pi*(((X-delta6)/Lamda)-(t1/T)));

figure(1);
plot(X,u1.^2,X,u2.^2,X,u3.^2,X,u4.^2,X,u5.^2,X,u6.^2);
axis([0 4 0 4]);                  % PLOTS LIMITS                    
xlabel('x','Fontsize',12);
title('Figure 1','FontSize',12);
legend('(u1(x))^2','(u2(x))^2','(u3(x))^2','(u4(x))^2','(u5(x))^2','(u6(x))^2');`,cCode:"",defaultParams:{}},{id:"I3COSGRA",title:"I3COSGRA - I3COSGRA\r",description:"I3COSGRA\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64
from mpl_toolkits.mplot3d import Axes3D

# I3COSGRA

# Superposition of two cosine waves, one having an optical path differnce ? with respect to the
# other. The sum is squared to result in the intensity.

# We are looking at the time dependence, the graphs are plots in space x and time t.
# Period T, path difference ? , wavelength ?.


# 1. Graph for optical path difference corresponding to a maximum
Lamda = 1
A = 1
N = 15
T = 1
Delta1 = 1
i = (0:1:N)
j = (0:1:N)
x = -0.2 + 0.05*i
t1 = -0.2 + 0.05*j
for r in range(len(x)):
    for c in range(len(t1)):
        uc(r,c) = ((2*A*np.cos(2*np.pi*(Delta1/(2*Lamda))))*(np.cos(2*np.pi*(x(r)/Lamda-t1(c)/T)-2*np.pi*(Delta1/(2*Lamda)))))**2
M = uc
fig = plt.figure(1)

plt.subplot(2, 1, 1)

ax = plt.gca()
if not hasattr(ax, 'plot_surface'):
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')
    X, Y = np.meshgrid(np.arange(M.shape[1]), np.arange(M.shape[0]))
    ax.plot_surface(X, Y, M, cmap='viridis')
# 2. Graph for optical path difference corresponding to a minimum
N = 40
i = (0:1:N)
j = (0:1:N)
xx = -0.2+ 0.04*i
t1 = -0.2 + 0.02*j
Delta2 = 0.5
T = 1
for r in range(len(xx)):
    for c in range(len(t1)):
        ud(r,c) = ((2*A*np.cos(2*np.pi*(Delta2/(2*Lamda))))*(np.cos(2*np.pi*(xx(r)/Lamda-t1(c)/T)-2*np.pi*(Delta2/(2*Lamda)))))**2
MM = ud
plt.subplot(2, 1, 2)

ax = plt.gca()
if not hasattr(ax, 'plot_surface'):
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')
    X, Y = np.meshgrid(np.arange(MM.shape[1]), np.arange(MM.shape[0]))
    ax.plot_surface(X, Y, MM, cmap='viridis')

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% I3COSGRA

% Superposition of two cosine waves, one having an optical path differnce ? with respect to the
% other. The sum is squared to result in the intensity.

% We are looking at the time dependence, the graphs are plots in space x and time t.
% Period T, path difference ? , wavelength ?.

function I3COSGRA;
% 1. Graph for optical path difference corresponding to a maximum
Lamda = 1;
A = 1;
N = 15;
T = 1;
Delta1 = 1;

i = (0:1:N);
j = (0:1:N);
x = -0.2 + 0.05*i;
t1 = -0.2 + 0.05*j;

for r=1:length(x);
    for c=1:length(t1);
        uc(r,c) = ((2*A*cos(2*pi*(Delta1/(2*Lamda))))*(cos(2*pi*(x(r)/Lamda-t1(c)/T)-2*pi*(Delta1/(2*Lamda)))))^2;
    end;
end;

M = uc;

figure(1);
subplot(2,1,1);
mesh(M);

% 2. Graph for optical path difference corresponding to a minimum
N = 40;
i = (0:1:N);
j = (0:1:N);

xx = -0.2+ 0.04*i;
t1 = -0.2 + 0.02*j;
Delta2 = 0.5;
T = 1;

for r=1:length(xx);
    for c=1:length(t1);
        ud(r,c) = ((2*A*cos(2*pi*(Delta2/(2*Lamda))))*(cos(2*pi*(xx(r)/Lamda-t1(c)/T)-2*pi*(Delta2/(2*Lamda)))))^2;
    end;
end;
MM = ud;

subplot(2,1,2);
mesh(MM);`,cCode:"",defaultParams:{}},{id:"I4COSINTS",title:"I4COSINTS - I4COSINTS\r",description:"I4COSINTS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I4COSINTS
# Intensity in real and complex notation
# Real notation for maxima

x = np.arange(0, 4+0.01, 0.01)
Lamda = 1
A = 1
t = 1
T = 10
Delta = 0
u = A*np.cos(2*np.pi*(x/Lamda-t/T)) +A*np.cos(2*np.pi*((x-Delta)/Lamda-t/T))
fig = plt.figure(1)

plt.subplot(3, 2, 1)

plt.plot(x,u)

plt.xlim(0, 4)
plt.ylim(-2, 2)

plt.xlabel('x')
plt.legend(['u(x)'])
plt.subplot(3, 2, 2)

plt.plot(x,u**2)

plt.xlim(0, 4)
plt.ylim(0, 4)

plt.xlabel('x')
plt.legend(['(u(x))^2'])
# The time average of the intensity is 1/2 of the maximum value 4
t = 1
# Complex notation
# i = np.sqrt(-1)
z = np.exp(i*2*np.pi*(x/Lamda-t/T))+A*np.exp(i*2*np.pi*((x-Delta)/Lamda-t/T))
# The real part of z(x) is real(z(x))
plt.subplot(3, 2, 3)

plt.plot(x,real(z)
)
plt.xlim(0, 4)
plt.ylim(-2, 2)

plt.xlabel('x')
plt.legend(['real(z(x))'])
# The real part squared is (real(z(x)))**2

plt.subplot(3, 2, 4)

plt.plot(x,real(z)
**2)
plt.xlim(0, 4)
plt.ylim(0, 4)

plt.xlabel('x')
plt.legend(['real(z(x))^2'])
# When taking z time z*, the time dependence is automatically eliminated and we get
# twice of the average value.

plt.subplot(3, 2, 5)

plt.plot(x,z*conj(z)
)
plt.xlim(0, 4)
plt.ylim(3.995, 4.005)

plt.xlabel('x')
plt.legend(['z(x)*conj(z(x))'])
# Complex notation and dependance on the optical path difference DeltaDelta
x = 1
DeltaDelta = np.arange(0, 5+0.01, 0.01)
zz = np.exp(i*2*np.pi*(x/Lamda-t/T))+A*np.exp(i*2*np.pi*((x-DeltaDelta)/Lamda-t/T))
plt.subplot(3, 2, 6)

plt.plot(DeltaDelta,zz*conj(zz)
)
plt.xlim(0, 6)
plt.ylim(0, 4)

plt.xlabel('deltadelta')
plt.legend(['zz(deltadelta)*conj(zz(deltadelta))'])
# We see the "fringe pattern"
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% I4COSINTS
% Intensity in real and complex notation
% Real notation for maxima
function I4COSINTS;
x = (0:0.01:4);
Lamda = 1;
A = 1;
t = 1;
T = 10;
Delta = 0;
u = A*cos(2*pi*(x/Lamda-t/T)) +A*cos(2*pi*((x-Delta)/Lamda-t/T));

figure(1);
subplot(3,2,1);
plot(x,u);
axis([0 4 -2 2]);
xlabel('x');
legend('u(x)');

subplot(3,2,2);
plot(x,u.^2);
axis([0 4 0 4]);
xlabel('x');
legend('(u(x))^2');


% The time average of the intensity is 1/2 of the maximum value 4
t = 1;

% Complex notation
% i = sqrt(-1)
z = exp(i*2*pi*(x/Lamda-t/T))+A*exp(i*2*pi*((x-Delta)/Lamda-t/T));
% The real part of z(x) is real(z(x))
subplot(3,2,3);
plot(x,real(z));
axis([0 4 -2 2]);
xlabel('x');
legend('real(z(x))');

% The real part squared is (real(z(x)))^2

subplot(3,2,4);
plot(x,real(z).^2);
axis([0 4 0 4]);
xlabel('x');
legend('real(z(x))^2');

% When taking z time z*, the time dependence is automatically eliminated and we get
% twice of the average value.

subplot(3,2,5);
plot(x,z.*conj(z));
axis([0 4 3.995 4.005]);
xlabel('x');
legend('z(x)*conj(z(x))');

% Complex notation and dependance on the optical path difference DeltaDelta
x = 1;
DeltaDelta = (0:0.01:5);
zz = exp(i*2*pi*(x/Lamda-t/T))+A*exp(i*2*pi*((x-DeltaDelta)/Lamda-t/T));

subplot(3,2,6);
plot(DeltaDelta,zz.*conj(zz));
axis([0 6 0 4]);
xlabel('deltadelta');
legend('zz(deltadelta)*conj(zz(deltadelta))');
% We see the "fringe pattern"`,cCode:"",defaultParams:{}},{id:"I5YOUNGS",title:"I5YOUNGS - I5YOUNGS\r",description:"I5YOUNGS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I5YOUNGS
# Young's Experiment


Con = 1
Lamda = 0.0005
a = 0.4
X = 4000
Y = np.arange(-10, 10+0.1, 0.1); # All length in mm
I = Con*(np.cos(np.pi*((Y*a)/(Lamda*X)))**2)
fig = plt.figure(1)

plt.plot(Y,I)

plt.xlim(-10, 10)
plt.ylim(0, 1)

plt.xlabel('Y')
plt.legend(['I(Y)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% I5YOUNGS
% Young's Experiment

function I5YOUNGS;

Con = 1;
Lamda = 0.0005;
a = 0.4;
X = 4000;
Y = (-10:0.1:10); % All length in mm
I = Con*(cos(pi*((Y*a)/(Lamda*X))).^2);

figure(1);
plot(Y,I);
axis([-10 10 0 1]);
xlabel('Y');
legend('I(Y)');
`,cCode:"",defaultParams:{}},{id:"I6LOYDS",title:"I6LOYDS - I6LOYDS\r",description:"I6LOYDS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I6LOYDS
# Lloyd's mirror experiment


Con = 1
# All length in mm
a = 0.4
X = 4000
Lamda = 0.0005
Y = np.arange(-10, 10+0.1, 0.1)
I = Con*(np.cos(np.pi*((Y*a)/(Lamda*X)+np.pi/2))**2)
fig = plt.figure(1)

plt.plot(Y,I)

plt.xlim(-10, 10)
plt.ylim(0, 1)

plt.xlabel('Y')
plt.legend(['I(Y)'])
# We see that at Y=0 Young's experiment has a maximum, Lloyd's a minimum.
# For Young and Lloyd: The position of maxima are changed by changing d and ?, X is
# considered fixed.
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% I6LOYDS
% Lloyd's mirror experiment

function I6LOYDS;
Con = 1;
% All length in mm
a = 0.4;
X = 4000;
Lamda = 0.0005;
Y = (-10:0.1:10);

I = Con*(cos(pi*((Y*a)/(Lamda*X)+pi/2)).^2);

figure(1);
plot(Y,I);
axis([-10 10 0 1]);
xlabel('Y');
legend('I(Y)');

% We see that at Y=0 Young's experiment has a maximum, Lloyd's a minimum.
% For Young and Lloyd: The position of maxima are changed by changing d and ?, X is
% considered fixed.`,cCode:"",defaultParams:{}},{id:"I7FREMIRS",title:"I7FREMIRS - I7FREMIRS\r",description:"I7FREMIRS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I7FREMIRS
# Fresnel's mirror

# 1. Fresnel's Mirror
# Y, c, f, b, and ? in mm, ? in Radc
# is about b for calculation of X = c + f
# All length in mm
Con = 1
b = 1000
f = 5000
Beta = 0.0002
Lamda = 0.0005
c = b * np.cos(Beta)
Y = np.arange(-10, 10+0.1, 0.1)
I = Con*(np.cos(np.pi*((Y*2*(b/(c+f))*np.sin(Beta))/Lamda))**2)
fig = plt.figure(1)

plt.plot(Y,I)

plt.xlim(-10, 10)
plt.ylim(0, 1)

plt.xlabel('Y')
plt.legend(['I(Y)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% I7FREMIRS
% Fresnel's mirror
function I7FREMIRS;
% 1. Fresnel's Mirror
% Y, c, f, b, and ? in mm, ? in Radc
% is about b for calculation of X = c + f
% All length in mm
Con = 1;
b = 1000;
f = 5000;
Beta = 0.0002;
Lamda = 0.0005;
c = b * cos(Beta);
Y = (-10:0.1:10);
I = Con*(cos(pi*((Y*2*(b/(c+f))*sin(Beta))/Lamda)).^2);

figure(1);
plot(Y,I);
axis([-10 10 0 1]);
xlabel('Y');
legend('I(Y)');

`,cCode:"",defaultParams:{}},{id:"I8FRYOLOS",title:"I8FRYOLOS - I8FRYOLOS\r",description:"I8FRYOLOS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I8FRYOLOS
# Fresnel's mirror, Young's double slit, and Lloyd's mirror,

# 1. Fresnel's Mirror  
# Y, c, f, b, and ? in mm, ? in Radc
# is about b for calculation of X = c + f
# All length in mm
Con = 1
b = 1000
f = 5000
Beta = 0.0002
Lamda = 0.0005
c = b*np.cos(Beta)
Y = np.arange(-10, 10+0.1, 0.1)
IF = Con*(np.cos(np.pi*((Y*2*(b/(c+f))*np.sin(Beta))/Lamda))**2)
# 2. Young's Experiment
a = 0.4
X = 4000
IY = Con*(np.cos(np.pi*((Y*a)/(Lamda*X)))**2)
# 3. Lloyd's Mirror (same as Yound, phase term is added)
IL = Con*(np.cos(np.pi*((Y*a)/(Lamda*X))+np.pi/2)**2)
fig = plt.figure(1)

plt.plot(Y,IF,Y,IY,Y,IL)

plt.xlim(-10, 10)
plt.ylim(0, 1)

plt.xlabel('Y')
plt.legend(['IF(Y)', 'IY(Y)', 'IL(Y)'])
# We see that at Y=0 Young has a maximum, Lloyd a minimum
# For Young and Lloyd: The position of maxima are changed by changing d and ?, X is
# considered fixed.

# For Fresnel, a,b are fixed, position of fringes changes with ? and ?.



# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% I8FRYOLOS
% Fresnel's mirror, Young's double slit, and Lloyd's mirror,
function I8FRYOLOS;
% 1. Fresnel's Mirror  
% Y, c, f, b, and ? in mm, ? in Radc
% is about b for calculation of X = c + f
% All length in mm
Con = 1;
b = 1000;
f = 5000;
Beta = 0.0002;
Lamda = 0.0005;
c = b*cos(Beta);
Y = (-10:0.1:10);

IF = Con*(cos(pi*((Y*2*(b/(c+f))*sin(Beta))/Lamda)).^2);

% 2. Young's Experiment
a = 0.4;
X = 4000;
IY = Con*(cos(pi*((Y*a)/(Lamda*X))).^2);

% 3. Lloyd's Mirror (same as Yound, phase term is added)
IL = Con*(cos(pi*((Y*a)/(Lamda*X))+pi/2).^2);

figure(1);
plot(Y,IF,Y,IY,Y,IL);
axis([-10 10 0 1]);
xlabel('Y');
legend('IF(Y)','IY(Y)','IL(Y)');


% We see that at Y=0 Young has a maximum, Lloyd a minimum
% For Young and Lloyd: The position of maxima are changed by changing d and ?, X is
% considered fixed.

% For Fresnel, a,b are fixed, position of fringes changes with ? and ?.


`,cCode:"",defaultParams:{}},{id:"I9PLANS",title:"I9PLANS - I9PLANS\r",description:"I9PLANS\r",category:"Optics - Interference",chapter:"2",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# I9PLANS

# Fringes of plane parallel plate produced by two waves


# 1.For normal incidence depending on D
Lamda = 0.0005
n2 = 1.5
D = np.arange(-0.00051, 0.005+0.00001, 0.00001)
I1 = np.cos((2*np.pi*D*n2)/Lamda + np.pi/2)**2
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(D,I1)

plt.xlim(-0.001, 0.005)
plt.ylim(0, 1)

plt.xlabel('D')
plt.legend(['I1(D)'])
# 2. For normal incidence depending on Lamda

LamdaLamda = np.arange(0.05, 0.5+0.001, 0.001)
DD = 0.05
I2 = np.cos((2*np.pi*DD*(n2))/LamdaLamda + np.pi/2)**2
plt.subplot(2, 1, 2)

plt.plot(LamdaLamda,I2)

plt.xlim(0, 0.5)
plt.ylim(0, 1)

plt.xlabel('lambdalambda')
plt.legend(['I2(lambdalambda)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% I9PLANS

% Fringes of plane parallel plate produced by two waves

function I9PLANS;
% 1.For normal incidence depending on D
Lamda = 0.0005;
n2 = 1.5;
D = (-0.00051:0.00001:0.005);
I1 = cos((2*pi*D*n2)/Lamda + pi/2).^2;

figure(1);
subplot(2,1,1);
plot(D,I1);
axis([-0.001 0.005 0 1]);
xlabel('D');
legend('I1(D)');

% 2. For normal incidence depending on Lamda

LamdaLamda = (0.05:0.001:0.5);
DD = 0.05;
I2 = cos((2*pi*DD*(n2))./LamdaLamda + pi/2).^2;

subplot(2,1,2);
plot(LamdaLamda,I2);
axis([0 0.5 0 1]);
xlabel('lambdalambda');
legend('I2(lambdalambda)');`,cCode:"",defaultParams:{}},{id:"D10FAGRDSLS",title:"D10FAGRDSLS - D10FAGRDSLS\r",description:"D10FAGRDSLS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# D10FAGRDSLS
# Diffraction on an amplitude grating at normal incidence.
# Width of openings d, center to center distance of strips a, wavelength ????, distance
# from grating to screen X and coordinate on Screen Y.
# All distances and wavelength in mm, number of lines N.
# All parameters are globally defined above the graph.
# D(A) is the diffraction factor
# I(A) is the interference factor, normalized to 1.
# P(A) is the product of interference and diffraction factor.


Y = np.arange(-800, 800+0.1, 0.1)
X = 4000
d = 0.02
Lamda = 0.0005
a = 0.2
N = 2
D = (np.sin(np.pi*(d/Lamda)*(Y/X))/(np.pi*(d/Lamda)*(Y/X)))**2
I = (np.sin(np.pi*(a/Lamda)*(Y/X)*N)/(N*np.sin(np.pi*(a/Lamda)*(Y/X))))**2
P = D*I
fig = plt.figure(1)

plt.plot(Y,D,Y,P)

plt.xlim(-600, 600)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('Y')
plt.legend(['D(Y)', 'P(Y)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% D10FAGRDSLS
% Diffraction on an amplitude grating at normal incidence.
% Width of openings d, center to center distance of strips a, wavelength ????, distance
% from grating to screen X and coordinate on Screen Y.
% All distances and wavelength in mm, number of lines N.
% All parameters are globally defined above the graph.
% D(A) is the diffraction factor
% I(A) is the interference factor, normalized to 1.
% P(A) is the product of interference and diffraction factor.

function D10FAGRDSLS;

Y = (-800:0.1:800);
X = 4000;
d = 0.02;
Lamda = 0.0005;
a = 0.2;
N = 2;
D = (sin(pi*(d/Lamda)*(Y/X))./(pi*(d/Lamda)*(Y/X))).^2;
I = (sin(pi*(a/Lamda)*(Y/X)*N)./(N*sin(pi*(a/Lamda)*(Y/X)))).^2;
P = D.*I;

figure(1);
plot(Y,D,Y,P);
axis([-600 600 0 1]);                  % PLOTS LIMITS                    
xlabel('Y');
legend('D(Y)','P(Y)');

`,cCode:"",defaultParams:{}},{id:"D11FAGRANGS",title:"D11FAGRANGS - D11FAGRANGS\r",description:"D11FAGRANGS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# D11FAGRANGS
# Diffraction on an amplitude grating. Non normal incidence
# with angle ? with respect to the normal.
# Width of grating openings d, center to center distance of strips a,
# wavelength ?, distance from grating to screen X and coordinate on Screen Y.
# All distances and wavelength in mm, number of lines N .
# All parameters are globally defined above the graph.
# D(A) is the diffraction factor
# I(A) is the interference factor, normalized to 1. The numerator is plotted
# separately to show where the main maxima are located (0/0).
# P(A) is the product of interference and diffraction factor.

# The angle y shifts the zeroth order from 0 for y = 0 to .2 for y = -.2


Theta = np.arange(-0.5001, 0.5+0.0002, 0.0002)
d = 0.001
Lamda = 0.0005
a = 0.002
N = 6
Psi = -0.2
D = (np.sin(np.pi*(d/Lamda)*(np.sin(Theta)+np.sin(Psi)))/(np.pi*(d/Lamda)*(np.sin(Theta)+np.sin(Psi))))**2
I = (np.sin(np.pi*(a/Lamda)*(np.sin(Theta)+np.sin(Psi))*N)/(N*np.sin(np.pi*(a/Lamda)*(np.sin(Theta)+np.sin(Psi)))))**2
P = D*I
fig = plt.figure(1)

plt.plot(Theta,I,Theta,D,Theta,P)

plt.xlim(-0.6, 0.6)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['I(	heta)', 'D(	heta)', 'P(	heta)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% D11FAGRANGS
% Diffraction on an amplitude grating. Non normal incidence
% with angle ? with respect to the normal.
% Width of grating openings d, center to center distance of strips a,
% wavelength ?, distance from grating to screen X and coordinate on Screen Y.
% All distances and wavelength in mm, number of lines N .
% All parameters are globally defined above the graph.
% D(A) is the diffraction factor
% I(A) is the interference factor, normalized to 1. The numerator is plotted
% separately to show where the main maxima are located (0/0).
% P(A) is the product of interference and diffraction factor.

% The angle y shifts the zeroth order from 0 for y = 0 to .2 for y = -.2

function D11FAGRANGS;

Theta = (-0.5001:0.0002:0.5);
d = 0.001;
Lamda = 0.0005;
a = 0.002;
N = 6;
Psi = -0.2;

D = (sin(pi*(d/Lamda)*(sin(Theta)+sin(Psi)))./(pi*(d/Lamda)*(sin(Theta)+sin(Psi)))).^2;
I = (sin(pi*(a/Lamda)*(sin(Theta)+sin(Psi))*N)./(N*sin(pi*(a/Lamda)*(sin(Theta)+sin(Psi))))).^2;
P = D.*I;


figure(1);
plot(Theta,I,Theta,D,Theta,P);
axis([-0.6 0.6 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('I(	heta)','D(	heta)','P(	heta)');
`,cCode:"",defaultParams:{}},{id:"D12FAELGRS",title:"D12FAELGRS - D12FAELGRS\r",description:"D12FAELGRS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# D12FAELGRS

# Diffraction on an echelette grating.
# The graphs for three different values of ?.

# D(?) is the diffraction factor, I(?) the interfference factor, and P(?) the product.
# The angle in radians of the echelle is ?.Diffraction angle ? in radians,
# wavelength ?, width of openings d, and separation of openings a in mm.
# N is the number of lines.
# All parameters are defined globally above the graph.


Theta = np.arange(-1.301, 1.3+0.002, 0.002)
Epsilon1 = -0.25
Epsilon2 = 0.25
Epsilon3 = -0.52
d = 37
Lamda = 10
a = 40
N = 20
D1 = (np.sin(np.pi*(d/Lamda)*np.sin(Theta + Epsilon1))/(np.pi*(d/Lamda)*np.sin(Theta+Epsilon1)))**2
D2 = (np.sin(np.pi*(d/Lamda)*np.sin(Theta + Epsilon2))/(np.pi*(d/Lamda)*np.sin(Theta+Epsilon2)))**2
D3 = (np.sin(np.pi*(d/Lamda)*np.sin(Theta + Epsilon3))/(np.pi*(d/Lamda)*np.sin(Theta+Epsilon3)))**2
I = (np.sin(np.pi*a*np.sin(Theta)*N/Lamda)/(N*np.sin(np.pi*a*np.sin(Theta)/Lamda)))**2
P1 = D1*I
P2 = D2*I
P3 = D3*I
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(Theta,D1,Theta,I,Theta,P1)

plt.xlim(-1.5, 1.5)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['D1(	heta)', 'I(	heta)', 'P1(	heta)'])
plt.subplot(3, 1, 2)

plt.plot(Theta,D2,Theta,I,Theta,P2)

plt.xlim(-1.5, 1.5)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['D2(	heta)', 'I(	heta)', 'P2(	heta)'])
plt.subplot(3, 1, 3)

plt.plot(Theta,D3,Theta,I,Theta,P3)

plt.xlim(-1.5, 1.5)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['D3(	heta)', 'I(	heta)', 'P3(	heta)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% D12FAELGRS

% Diffraction on an echelette grating.
% The graphs for three different values of ?.

% D(?) is the diffraction factor, I(?) the interfference factor, and P(?) the product.
% The angle in radians of the echelle is ?.Diffraction angle ? in radians,
% wavelength ?, width of openings d, and separation of openings a in mm.
% N is the number of lines.
% All parameters are defined globally above the graph.

function D12FAELGRS;

Theta = (-1.301:0.002:1.3);
Epsilon1 = -0.25;
Epsilon2 = 0.25;
Epsilon3 = -0.52;

d = 37;
Lamda = 10;
a = 40;
N = 20;

D1 = (sin(pi*(d/Lamda)*sin(Theta + Epsilon1))./(pi*(d/Lamda)*sin(Theta+Epsilon1))).^2;
D2 = (sin(pi*(d/Lamda)*sin(Theta + Epsilon2))./(pi*(d/Lamda)*sin(Theta+Epsilon2))).^2;
D3 = (sin(pi*(d/Lamda)*sin(Theta + Epsilon3))./(pi*(d/Lamda)*sin(Theta+Epsilon3))).^2;

I = (sin(pi*a*sin(Theta)*N/Lamda)./(N*sin(pi*a*sin(Theta)/Lamda))).^2;

P1 = D1.*I;
P2 = D2.*I;
P3 = D3.*I;

figure(1);
subplot(3,1,1);
plot(Theta,D1,Theta,I,Theta,P1);
axis([-1.5 1.5 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('D1(	heta)','I(	heta)','P1(	heta)');


subplot(3,1,2);
plot(Theta,D2,Theta,I,Theta,P2);
axis([-1.5 1.5 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('D2(	heta)','I(	heta)','P2(	heta)');


subplot(3,1,3);
plot(Theta,D3,Theta,I,Theta,P3);
axis([-1.5 1.5 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('D3(	heta)','I(	heta)','P3(	heta)');

`,cCode:"",defaultParams:{}},{id:"D13FAGRRES",title:"D13FAGRRES - D13FAGRRES\r",description:"D13FAGRRES\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# D13FAGRRES
# Two diffraction pattern of a grating to study resolution.

# Diffraction on an amplitude grating with width of openings d, center to center
# distance of strips a, wavelength ?, distance from grating to screen X and
# coordinate on screen Y.
# All distances and wavelength in mm, number of lines N. Normal incidence.
# All parameters are globally defined above the graph.
# P(A) is the product of interference and diffraction factor.
# The resolution is given as ?/?? = N and introduced in the formulas of the
# second grating.


Theta = np.arange(-0.7001, 0.7+0.0002, 0.0002)
d = 0.0001
Lamda = 0.0005
LamdaLamda = 0.0006
a = 0.002
N = 6
D = (np.sin(np.pi*(d/Lamda)*np.sin(Theta))/(np.pi*(d/Lamda)*np.sin(Theta)))**2
DD = (np.sin(np.pi*(d/LamdaLamda)*np.sin(Theta))/(np.pi*(d/LamdaLamda)*np.sin(Theta)))**2
I= (np.sin(np.pi*(a/Lamda)*np.sin(Theta)*N)/(N*np.sin(np.pi*(a/Lamda)*np.sin(Theta))))**2
II= (np.sin(np.pi*(a/LamdaLamda)*np.sin(Theta)*N)/(N*np.sin(np.pi*(a/LamdaLamda)*np.sin(Theta))))**2
P = D*I
PP = DD*II
fig = plt.figure(1)

plt.plot(Theta,P,Theta,PP)

plt.xlim(-0.8, 0.8)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['P(	heta)', 'PP(	heta)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% D13FAGRRES
% Two diffraction pattern of a grating to study resolution.

% Diffraction on an amplitude grating with width of openings d, center to center
% distance of strips a, wavelength ?, distance from grating to screen X and
% coordinate on screen Y.
% All distances and wavelength in mm, number of lines N. Normal incidence.
% All parameters are globally defined above the graph.
% P(A) is the product of interference and diffraction factor.
% The resolution is given as ?/?? = N and introduced in the formulas of the
% second grating.

function D13FAGRRES;

Theta = (-0.7001:0.0002:0.7);
d = 0.0001;
Lamda = 0.0005;
LamdaLamda = 0.0006;
a = 0.002;
N = 6;


D = (sin(pi*(d/Lamda)*sin(Theta))./(pi*(d/Lamda)*sin(Theta))).^2;
DD = (sin(pi*(d/LamdaLamda)*sin(Theta))./(pi*(d/LamdaLamda)*sin(Theta))).^2;

I= (sin(pi*(a/Lamda)*sin(Theta)*N)./(N*sin(pi*(a/Lamda)*sin(Theta)))).^2;
II= (sin(pi*(a/LamdaLamda)*sin(Theta)*N)./(N*sin(pi*(a/LamdaLamda)*sin(Theta)))).^2;

P = D.*I;
PP = DD.*II;

figure(1);
plot(Theta,P,Theta,PP);
axis([-0.8 0.8 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('P(	heta)','PP(	heta)');

`,cCode:"",defaultParams:{}},{id:"D14FAGRRES3DS",title:"D14FAGRRES3DS - D14FAGRRES3DS\r",description:"D14FAGRRES3DS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64
from mpl_toolkits.mplot3d import Axes3D

# D14FAGRRES3DS
# Determination of the wavelength difference for two peaks,
# resolved according to the Rayleigh criterion

# 1. Determination of Rayleigh distantance.
# We call the distance between the maxima b. Radius of apertures a, distance
# between the apertures d, coordinate on the observation screen R,
# wavelength ?, and distance from aperture to screen X.


a = 0.05; X = 4000; R=np.arange(0, 50+0.1, 0.1); b = 24.5;%?
Lamda = 0.0005
g1=(besselj(1,(2*np.pi*a*R/(X*Lamda)))/(2*np.pi*a*R/(X*Lamda)))**2
gg1=(besselj(1,(2*np.pi*a*(R-b)/(X*Lamda)))/(2*np.pi*a*(R-b)/(X*Lamda)))**2
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(R,g1,R,gg1)

plt.xlim(0, 50)
plt.ylim(0, 0.3)
;                  # PLOTS LIMITS                    
plt.xlabel('R')
plt.legend(['g1(R)', 'gg1(R)'])
# 2. 3D Graph of pattern of two round apertures at distance b.


X = 4000
N = 40
I = 0:N
J = 0:N
nx = length(I)
ny = length(J)
g2 = zeros(nx,ny)
gg2 = zeros(nx,ny)
M = zeros(nx,ny)
for r=1:nx
        for c=1:ny
            Xi = -30 + 2.0001*r
            Yi = -30 + 2.0001*c
            RR = np.sqrt(Xi**2+Yi**2)
            g2(r,c) = (besselj(1,(2*np.pi*a*RR/(X*Lamda)))/(2*np.pi*a*RR/(X*Lamda)))**2
            RR = np.sqrt(Xi**2+(Yi-b)**2)
            gg2(r,c) = (besselj(1,(2*np.pi*a*RR/(X*Lamda)))/(2*np.pi*a*RR/(X*Lamda)))**2
M = g2 + gg2
plt.subplot(2, 1, 2)

ax = plt.gca()
if not hasattr(ax, 'plot_surface'):
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')
    X, Y = np.meshgrid(np.arange(M.shape[1]), np.arange(M.shape[0]))
    ax.plot_surface(X, Y, M, cmap='viridis')
# PLOTS LIMITS                    
axis([0 40 0 40 0 0.3])
# 3. Calculation of wavelength difference corresponding to b
# The diffraction angle is calculated from b/X = ??
# The grating is made of round apertures of diameter a and spaced at
# distance d.
# From the grating formula we have for the wavelength difference
# ??=d?? or ?? = (d/X)b.
# # For d := .1
# ?? := d*b/X
# ?? = 6.125 * 10 ** (-4)
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% D14FAGRRES3DS
% Determination of the wavelength difference for two peaks,
% resolved according to the Rayleigh criterion

% 1. Determination of Rayleigh distantance.
% We call the distance between the maxima b. Radius of apertures a, distance
% between the apertures d, coordinate on the observation screen R,
% wavelength ?, and distance from aperture to screen X.

function D14FAGRRES3DS;

a = 0.05; X = 4000; R=(0:0.1:50); b = 24.5;%?
Lamda = 0.0005;
g1=(besselj(1,(2*pi*a*R/(X*Lamda)))./(2*pi*a*R/(X*Lamda))).^2;
gg1=(besselj(1,(2*pi*a*(R-b)/(X*Lamda)))./(2*pi*a*(R-b)/(X*Lamda))).^2;

figure(1);
subplot(2,1,1);
plot(R,g1,R,gg1);
axis([0 50 0 0.3]);                  % PLOTS LIMITS                    
xlabel('R');
legend('g1(R)','gg1(R)');


% 2. 3D Graph of pattern of two round apertures at distance b.


X = 4000;
N = 40;

I = 0:N;
J = 0:N;

nx = length(I);
ny = length(J);
g2 = zeros(nx,ny);
gg2 = zeros(nx,ny);
M = zeros(nx,ny);
for r=1:nx;
        for c=1:ny;
            Xi = -30 + 2.0001*r; 
            Yi = -30 + 2.0001*c;
            RR = sqrt(Xi^2+Yi^2);               
            g2(r,c) = (besselj(1,(2*pi*a*RR/(X*Lamda)))/(2*pi*a*RR/(X*Lamda)))^2;
            RR = sqrt(Xi^2+(Yi-b)^2);
            gg2(r,c) = (besselj(1,(2*pi*a*RR/(X*Lamda)))/(2*pi*a*RR/(X*Lamda)))^2;
        end;
end;
M = g2 + gg2;
subplot(2,1,2);
mesh(M);
                 % PLOTS LIMITS                    
axis([0 40 0 40 0 0.3]);


% 3. Calculation of wavelength difference corresponding to b
% The diffraction angle is calculated from b/X = ??
% The grating is made of round apertures of diameter a and spaced at
% distance d.
% From the grating formula we have for the wavelength difference
% ??=d?? or ?? = (d/X)b.
% 
% For d := .1
%            ?? := d*b/X
%                       ?? = 6.125 * 10 ^ (-4)`,cCode:"",defaultParams:{}},{id:"D15FABAGRS",title:"D15FABAGRS - D15FABAGRS\r",description:"D15FABAGRS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# D15FABAGRS

# Babinets Theorem. Diffraction on two amplitude gratings, one with width of
# openings d1, the other with width of opening d2, and both have center to center
# distance of strips a = d1 +d2.


# Diffraction pattern of the two complementary screens, one is a grating of width
# of opening d1 the other of d2, and the periodicity constant is a = d1 + d2
# Wavelength ?, distance from gratings to screen X and coordinate on
# screen Y. All distances and wavelength in mm, both have number of lines N .Normal
# incidence.

# D1 and D2 are the diffraction factors, I is the interference factor, normalized to 1.
# P(A) is the product of Interference and diffraction factor.

# We see that the intensity of the diffraction peaks is different for the two
# complementarypattern, but the position of the peaks is the same, and
# that is what Babinets Principle tells us.


Theta = np.arange(-0.5001, 0.5+0.0002, 0.0002)
Lamda = 0.0005
N = 6
d1 = 0.002
d2 = 0.001
a = d1 + d2
D1 = (np.sin(np.pi*(d1/Lamda)*np.sin(Theta))/(np.pi*(d1/Lamda)*np.sin(Theta)))**2
D2 = (np.sin(np.pi*(d2/Lamda)*np.sin(Theta))/(np.pi*(d2/Lamda)*np.sin(Theta)))**2
I = (np.sin(np.pi*(a/Lamda)*np.sin(Theta)*N)/(N*np.sin(np.pi*(a/Lamda)*np.sin(Theta))))**2
P1 = D1*I
P2 = D2*I
fig = plt.figure(1)

plt.plot(Theta,P1,Theta,P2,Theta,D1,Theta,D2)

plt.xlim(-0.6, 0.6)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['P1(	heta)', 'P2(	heta)', 'D1(	heta)', 'D2(	heta)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% D15FABAGRS

% Babinets Theorem. Diffraction on two amplitude gratings, one with width of
% openings d1, the other with width of opening d2, and both have center to center
% distance of strips a = d1 +d2.


% Diffraction pattern of the two complementary screens, one is a grating of width
% of opening d1 the other of d2, and the periodicity constant is a = d1 + d2
% Wavelength ?, distance from gratings to screen X and coordinate on
% screen Y. All distances and wavelength in mm, both have number of lines N .Normal
% incidence.

% D1 and D2 are the diffraction factors, I is the interference factor, normalized to 1.
% P(A) is the product of Interference and diffraction factor.

% We see that the intensity of the diffraction peaks is different for the two
% complementarypattern, but the position of the peaks is the same, and
% that is what Babinets Principle tells us.

function D15FABAGRS;

Theta = (-0.5001:0.0002:0.5); 
Lamda = 0.0005;
N = 6;

d1 = 0.002;
d2 = 0.001;
a = d1 + d2;


D1 = (sin(pi*(d1/Lamda)*sin(Theta))./(pi*(d1/Lamda)*sin(Theta))).^2;
D2 = (sin(pi*(d2/Lamda)*sin(Theta))./(pi*(d2/Lamda)*sin(Theta))).^2;

I = (sin(pi*(a/Lamda)*sin(Theta)*N)./(N*sin(pi*(a/Lamda)*sin(Theta)))).^2;

P1 = D1.*I;
P2 = D2.*I;

figure(1);
plot(Theta,P1,Theta,P2,Theta,D1,Theta,D2);
axis([-0.6 0.6 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('P1(	heta)','P2(	heta)','D1(	heta)','D2(	heta)');
`,cCode:"",defaultParams:{}},{id:"D16FAGRRANS",title:"D16FAGRRANS - D16FAGRRANS\r",description:"D16FAGRRANS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# D16FAGRRANS
# One dimensional periodic and random arrangement for interference and
# diffraction
# Diffraction on an amplitude grating with width of openings d, center to center
# distance of strips a, wavelength ?, distance from grating to screen X and coordinate on
# screen Y. All distances and wavelength in mm, number of lines N .Normal incidence.
# All parameters are globally defined above the graph.
# D(?) is the diffraction factor
# I(?) is the interference factor, normalized to 1.
# P1(?) is the product of interference and diffraction factor.
# P2(?) is for the case that the lines are not periodic and the interfernce factor averages
# to a constant.


Theta = np.arange(-1.001, 1.001+0.0011, 0.0011)
d = 0.002
Lamda = 0.0005
a = 0.008
N = 20
C = 0.5
D = (np.sin(np.pi*(d/Lamda)*np.sin(Theta))/(np.pi*(d/Lamda)*np.sin(Theta)))**2
I = (np.sin(np.pi*(a/Lamda)*np.sin(Theta)*N)/(N*np.sin(np.pi*(a/Lamda)*np.sin(Theta))))**2
P1 = D*I
P2 = D*C
fig = plt.figure(1)

plt.subplot(1, 2, 1)

plt.plot(Theta,P1)

plt.xlim(-1.5, 1.5)
plt.ylim(0, 1)

plt.xlabel('	heta')
plt.legend(['P1(	heta)'])
plt.subplot(1, 2, 2)

plt.plot(Theta,P2)

plt.xlim(-1.5, 1.5)
plt.ylim(0, 0.5)

plt.xlabel('	heta')
plt.legend(['P2(	heta)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% D16FAGRRANS
% One dimensional periodic and random arrangement for interference and
% diffraction
% Diffraction on an amplitude grating with width of openings d, center to center
% distance of strips a, wavelength ?, distance from grating to screen X and coordinate on
% screen Y. All distances and wavelength in mm, number of lines N .Normal incidence.
% All parameters are globally defined above the graph.
% D(?) is the diffraction factor
% I(?) is the interference factor, normalized to 1.
% P1(?) is the product of interference and diffraction factor.
% P2(?) is for the case that the lines are not periodic and the interfernce factor averages
% to a constant.

function D16FAGRRANS;

Theta = (-1.001:0.0011:1.001);

d = 0.002;
Lamda = 0.0005;
a = 0.008;
N = 20;
C = 0.5;

D = (sin(pi*(d/Lamda)*sin(Theta))./(pi*(d/Lamda)*sin(Theta))).^2;
I = (sin(pi*(a/Lamda)*sin(Theta)*N)./(N*sin(pi*(a/Lamda)*sin(Theta)))).^2;

P1 = D.*I;
P2 = D.*C;

figure(1);
subplot(1,2,1);
plot(Theta,P1);
axis([-1.5 1.5 0 1]);
xlabel('	heta');
legend('P1(	heta)');

subplot(1,2,2);
plot(Theta,P2);
axis([-1.5 1.5 0 0.5]);
xlabel('	heta');
legend('P2(	heta)');

`,cCode:"",defaultParams:{}},{id:"D17ARAYRA3DS",title:"D17ARAYRA3DS - D17ARAYRA3DS\r",description:"D17ARAYRA3DS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64
from mpl_toolkits.mplot3d import Axes3D

# D17ARAYRA3DS

# 3D Graph of diffraction pattern of a periodic array of
# rectangular apertures.
# In comparison the diffraction pattern of rectangular
# apertures in random array.

# 1. Periodic array


Lamda = 4
p = 6
d = 2
d1 =2
a1 = 4
a = 4
N = 30
I = 0:N
J = 0:N
nx = length(I)
ny = length(J)
M = zeros(nx,ny)
for r=1:nx
        for c=1:ny
            Xi = -2 + 0.20001*r
            Yj = -3 + 0.20001*c
            F = ((np.sin(2*np.pi*d*Xi/(2*Lamda))/(2*np.pi*d*Xi/(2*Lamda)))**2)*((np.sin(2*np.pi*d1*Yj/(2*Lamda))/(2*np.pi*d1*Yj/(2*Lamda)))**2)*((np.sin(2*np.pi*a*Xi*p/(2*Lamda))/(p*np.sin(2*np.pi*a*Xi/(2*Lamda))))**2)*((np.sin(2*np.pi*a1*Yj*p/(2*Lamda))/(p*np.sin(2*np.pi*a1*Yj/(2*Lamda))))**2)
            M(r,c) = F
fig = plt.figure(1)

plt.subplot(2, 1, 1)

ax = plt.gca()
if not hasattr(ax, 'plot_surface'):
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')
    X, Y = np.meshgrid(np.arange(M.shape[1]), np.arange(M.shape[0]))
    ax.plot_surface(X, Y, M, cmap='viridis')
axis([0 N 0 N 0 1])
plt.legend(['M'])

# 2. Random array

MM = zeros(nx,ny)
for r=1:nx
        for c=1:ny
            Xi = -2 + 0.20001*r
            Yj = -3 + 0.20001*c
            F1 = ((np.sin(2*np.pi*d*Xi/(2*Lamda))/(2*np.pi*d*Xi/(2*Lamda)))**2)*((np.sin(2*np.pi*a*Yj/(2*Lamda))/(2*np.pi*a*Yj/(2*Lamda)))**2)
            MM(r,c) = F1
plt.subplot(2, 1, 2)

ax = plt.gca()
if not hasattr(ax, 'plot_surface'):
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')
    X, Y = np.meshgrid(np.arange(MM.shape[1]), np.arange(MM.shape[0]))
    ax.plot_surface(X, Y, MM, cmap='viridis')
axis([0 N 0 N 0 1])
plt.legend(['MM'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% D17ARAYRA3DS

% 3D Graph of diffraction pattern of a periodic array of
% rectangular apertures.
% In comparison the diffraction pattern of rectangular
% apertures in random array.

% 1. Periodic array

function D17ARAYRA3DS;

Lamda = 4;
p = 6;
d = 2;
d1 =2;
a1 = 4;
a = 4;
N = 30;

I = 0:N;
J = 0:N;

nx = length(I);
ny = length(J);
M = zeros(nx,ny);
for r=1:nx;
        for c=1:ny;
            Xi = -2 + 0.20001*r; 
            Yj = -3 + 0.20001*c;
            F = ((sin(2*pi*d*Xi/(2*Lamda))./(2*pi*d*Xi/(2*Lamda))).^2).*((sin(2*pi*d1*Yj/(2*Lamda))./(2*pi*d1*Yj/(2*Lamda))).^2).*((sin(2*pi*a*Xi*p/(2*Lamda))./(p*sin(2*pi*a*Xi/(2*Lamda)))).^2).*((sin(2*pi*a1*Yj*p/(2*Lamda))./(p*sin(2*pi*a1*Yj/(2*Lamda)))).^2);
            M(r,c) = F;
        end;
end;



figure(1);
subplot(2,1,1);
mesh(M);               
axis([0 N 0 N 0 1]);
legend('M');

% 2. Random array

MM = zeros(nx,ny);
for r=1:nx;
        for c=1:ny;
            Xi = -2 + 0.20001*r; 
            Yj = -3 + 0.20001*c;
            F1 = ((sin(2*pi*d*Xi/(2*Lamda))./(2*pi*d*Xi/(2*Lamda))).^2).*((sin(2*pi*a*Yj/(2*Lamda))./(2*pi*a*Yj/(2*Lamda))).^2);
            MM(r,c) = F1;
        end;
end;

subplot(2,1,2);

mesh(MM);               
axis([0 N 0 N 0 1]);
legend('MM');`,cCode:"",defaultParams:{}},{id:"D18FEFNCS",title:"D18FEFNCS - D18FEFNCS\r",description:"D18FEFNCS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64


# D18FEFNCS
# Fresnel's Integrals C(Y) and S(Y).


Y = np.arange(0, 5+0.01, 0.01)
[t,cy]=ode45(@D18COS,Y,[0])
[t,sy]=ode45(@D18SIN,Y,[0])
fig = plt.figure(1)

plt.subplot(3, 2, 1)

plt.plot(t,cy)

plt.xlim(0, 6)
plt.ylim(0, 1)

plt.xlabel('Y')
plt.legend(['C(Y)'])
plt.subplot(3, 2, 2)

plt.plot(t,sy)

plt.xlim(0, 6)
plt.ylim(0, 1)

plt.xlabel('Y')
plt.legend(['S(Y)'])
plt.subplot(2, 1, 2)

plt.plot(t,cy,t,sy)

plt.xlim(0, 5)
plt.ylim(0, 0.8)

plt.xlabel('Y')
plt.legend(['C(Y)', 'S(Y)'])
Out=[np.cos((np.pi/2)*(T**2))]
Out=[np.sin((np.pi/2)*(T**2))]
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`
% D18FEFNCS
% Fresnel's Integrals C(Y) and S(Y).

function D18FEFNCS;


Y = (0:0.01:5);
[t,cy]=ode45(@D18COS,Y,[0]);
[t,sy]=ode45(@D18SIN,Y,[0]);



figure(1);
subplot(3,2,1);
plot(t,cy);
axis([0 6 0 1]);                
xlabel('Y');
legend('C(Y)');

subplot(3,2,2);
plot(t,sy);
axis([0 6 0 1]);                
xlabel('Y');
legend('S(Y)');


subplot(2,1,2);
plot(t,cy,t,sy);
axis([0 5 0 0.8]);                
xlabel('Y');
legend('C(Y)','S(Y)');

function Out=D18COS(T,X)
Out=[cos((pi/2)*(T^2))];

function Out=D18SIN(T,X)
Out=[sin((pi/2)*(T^2))];

`,cCode:"",defaultParams:{}},{id:"D19FESLITS",title:"D19FESLITS - D19FESLITS\r",description:"D19FESLITS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# D19FESLITS
# Fresnel's Integrals for the calculation of the diffraction on a slit.
# All units in mm, globally definition of parameters.

Lamda =  5e-4
X = 4000
d = 1.5
Y = np.arange(0, 10+0.1, 0.1)
nY = length(Y)
for k=1:nY
   I(k) = (Cp(Y(k))-Cq(Y(k)))**2 + (Sp(Y(k))-Sq(Y(k)))**2 
fig = plt.figure(1)

plt.plot(Y,I)

plt.xlim(0, 7.5)
plt.ylim(0, 2.5)

plt.xlabel('Y')
plt.legend(['I(Y)'])
Out = (Y + d/2)*(np.sqrt(2/(Lamda*X)))
Out = (Y - d/2)*(np.sqrt(2/(Lamda*X)))
Out = quad(@sinf,0,p(Y))
Out = quad(@sinf,0,q(Y))
Out = quad(@cosf,0,q(Y))
Out = quad(@cosf,0,p(Y))
Out = np.sin((np.pi/2)*(mu**2))
Out = np.cos((np.pi/2)*(mu**2))
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% D19FESLITS
% Fresnel's Integrals for the calculation of the diffraction on a slit.
% All units in mm, globally definition of parameters.
function D19FESLITS;
global Lamda X d;
Lamda =  5e-4;
X = 4000;
d = 1.5;

Y = (0:0.1:10);
nY = length(Y);
for k=1:nY;
   I(k) = (Cp(Y(k))-Cq(Y(k)))^2 + (Sp(Y(k))-Sq(Y(k)))^2 ;    
end;


figure(1);
plot(Y,I);
axis([0 7.5 0 2.5]);
xlabel('Y');
legend('I(Y)');






function Out=q(Y)
global Lamda X d;
Out = (Y + d/2).*(sqrt(2/(Lamda*X)));

function Out=p(Y)
global Lamda X d;
Out = (Y - d/2).*(sqrt(2/(Lamda*X)));


function Out=Sp(Y);
Out = quad(@sinf,0,p(Y));
function Out=Sq(Y);
Out = quad(@sinf,0,q(Y));
function Out=Cq(Y);
Out = quad(@cosf,0,q(Y));
function Out=Cp(Y);
Out = quad(@cosf,0,p(Y));

function Out=sinf(mu)
Out = sin((pi/2)*(mu.^2));
function Out=cosf(mu)
Out = cos((pi/2)*(mu.^2));`,cCode:"",defaultParams:{}},{id:"D1CIRS",title:"D1CIRS - D1CIRS\r",description:"D1CIRS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# D1CIRS

# Circular Opening, normalized intensity.
# When making the opening larger and larger,
# at the center is a change from minima to maxima
# to minima and so on.


po = 4000
Lamda = 0.0005
a=np.arange(0.1, 5+0.01, 0.01)
k =2*np.pi/Lamda
I=(Lamda**2)*power((np.sin((k*(power(a,2)))/(2*po))),2)
fig = plt.figure(1)

plt.plot(a,I)

plt.xlim(0, 5)
plt.ylim(0, 3*10**(-7))
;                  # PLOTS LIMITS                    
plt.xlabel('a')
plt.legend(['I(a)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% D1CIRS

% Circular Opening, normalized intensity.
% When making the opening larger and larger,
% at the center is a change from minima to maxima
% to minima and so on.

function D1CIRS;
po = 4000;
Lamda = 0.0005;

a=(0.1:0.01:5);
k =2*pi/Lamda;


I=(Lamda^2)*power((sin((k*(power(a,2)))/(2*po))),2);

figure(1);
plot(a,I);
axis([0 5 0 3*10^(-7)]);                  % PLOTS LIMITS                    
xlabel('a');
legend('I(a)');

`,cCode:"",defaultParams:{}},{id:"D20FEEDGES",title:"D20FEEDGES - D20FEEDGES\r",description:"D20FEEDGES\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# D20FEEDGES
# Fresnel's Integrals for the calculation of the diffractionon an edge.
# All units in mm, global definition of the parameters.

X = 4000
Lamda = 5*10**(-4)
Y = np.arange(-4, 15+0.05, 0.05)
# We treat the diffraction at an edge like diffraction on a large slit.
# One side is set at d = 0, the other at d = -inif. This translates into

# For p(Y) = - infinite  
# we have Cp(Y) = Sp(Y) = -0.5
# np.sqrt(2/(Lamda*X))=1

qY = Y*1
# We take q(Y) equal Y for scaling,

qY = Y
qY1 = np.arange(0, -4+-0.05, -0.05)
qY2 = np.arange(0.05, 15+0.05, 0.05)
[t,Cq1] = ode45(@C,qY1,[0])
[t,Cq2] = ode45(@C,qY2,[0])
Cq = [flipud(Cq1);Cq2]
[t,Sq1] = ode45(@S,qY1,[0])
[t,Sq2] = ode45(@S,qY2,[0])
Sq = [flipud(Sq1);Sq2]
IY = ((Cq-(-0.5))**2)+((Sq-(-0.5))**2)
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(Y,IY)

plt.xlim(-5, 15)
plt.ylim(0, 3)

plt.xlabel('Y')
plt.legend(['IY(Y)'])
pY = Y-10
pY1 = np.arange(0, -14+-0.05, -0.05)
pY2 = np.arange(0.05, 5+0.05, 0.05)
[t,Cp1] = ode45(@C,pY1,[0])
[t,Cp2] = ode45(@C,pY2,[0])
Cp = [flipud(Cp1);Cp2]
[t,Sp1] = ode45(@S,pY1,[0])
[t,Sp2] = ode45(@S,pY2,[0])
Sp = [flipud(Sp1);Sp2]
IIY = ((Cq-Cp)**2)+((Sq-Sp)**2)
plt.subplot(2, 1, 2)

plt.plot(Y,IIY)

plt.xlim(-4, 16)
plt.ylim(0, 4)

plt.xlabel('Y')
plt.legend(['IIY(Y)'])
Out = np.sin((np.pi/2)*T**2)
Out = np.cos((np.pi/2)*T**2)
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% D20FEEDGES
% Fresnel's Integrals for the calculation of the diffractionon an edge.
% All units in mm, global definition of the parameters.
function D20FEEDGES;
X = 4000;
Lamda = 5*10^(-4);

Y = (-4:0.05:15);


% We treat the diffraction at an edge like diffraction on a large slit.
% One side is set at d = 0, the other at d = -inif. This translates into

% For p(Y) = - infinite  
%                         we have Cp(Y) = Sp(Y) = -0.5
% sqrt(2/(Lamda*X))=1

qY = Y*1;

% We take q(Y) equal Y for scaling,

qY = Y;
qY1 = (0:-0.05:-4);
qY2 = (0.05:0.05:15);

[t,Cq1] = ode45(@C,qY1,[0]);
[t,Cq2] = ode45(@C,qY2,[0]);
Cq = [flipud(Cq1);Cq2];
[t,Sq1] = ode45(@S,qY1,[0]);
[t,Sq2] = ode45(@S,qY2,[0]);
Sq = [flipud(Sq1);Sq2];

IY = ((Cq-(-0.5)).^2)+((Sq-(-0.5)).^2);

figure(1);
subplot(2,1,1);
plot(Y,IY);
axis([-5 15 0 3]);                
xlabel('Y');
legend('IY(Y)');


pY = Y-10;
pY1 = (0:-0.05:-14);
pY2 = (0.05:0.05:5);

[t,Cp1] = ode45(@C,pY1,[0]);
[t,Cp2] = ode45(@C,pY2,[0]);
Cp = [flipud(Cp1);Cp2];

[t,Sp1] = ode45(@S,pY1,[0]);
[t,Sp2] = ode45(@S,pY2,[0]);
Sp = [flipud(Sp1);Sp2];

IIY = ((Cq-Cp).^2)+((Sq-Sp).^2);

subplot(2,1,2);
plot(Y,IIY);
axis([-4 16 0 4]);                
xlabel('Y');
legend('IIY(Y)');


function Out=S(T,X)
Out = sin((pi/2)*T^2);
function Out=C(T,X)
Out = cos((pi/2)*T^2);



`,cCode:"",defaultParams:{}},{id:"D2FASLITS",title:"D2FASLITS - D2FASLITS\r",description:"D2FASLITS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# D2FASLITS
# Diffraction on a slit of width d at wavelength ????.
# X is distance: Slit-Screen,
# Y is coordinate on Screen.
# For small angles, Y/X is proportional to the diffraction angle ?.
# All length in mm.
# MCAD notice the singularity at 0. for the graph we get around it using
# the range Y = -100.1, -99.1 to 100.1
# Three slits with different width d1, d2, and d3


d1 = 0.08
d2 = 0.12
d3 = 0.16
X = 4000; # nu
Lamda = 0.0005
Theta = np.arange(-2, 2+0.01, 0.01)
I1 = (np.sin(np.pi*(d1/Lamda)*np.sin((2*np.pi/360)*Theta))/(np.pi*(d1/Lamda)*(2*np.pi/360)*Theta) )**2
I2 = (np.sin(np.pi*(d2/Lamda)*np.sin((2*np.pi/360)*Theta))/(np.pi*(d2/Lamda)*(2*np.pi/360)*Theta) )**2
I3 = (np.sin(np.pi*(d3/Lamda)*np.sin((2*np.pi/360)*Theta))/(np.pi*(d3/Lamda)*(2*np.pi/360)*Theta) )**2
fig = plt.figure(1)

plt.plot(Theta,I1,Theta,I2,Theta,I3)

plt.xlim(-1, 1)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['I1(	heta)', 'I2(	heta)', 'I3(	heta)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% D2FASLITS
% Diffraction on a slit of width d at wavelength ????.
% X is distance: Slit-Screen,
% Y is coordinate on Screen.
% For small angles, Y/X is proportional to the diffraction angle ?.
% All length in mm.
% MCAD notice the singularity at 0. for the graph we get around it using
% the range Y = -100.1, -99.1 to 100.1
% Three slits with different width d1, d2, and d3

function D2FASLITS;
d1 = 0.08;
d2 = 0.12;
d3 = 0.16;
X = 4000; %nu
Lamda = 0.0005;
Theta = (-2:0.01:2);
I1 = (sin(pi*(d1/Lamda)*sin((2*pi/360)*Theta))./(pi*(d1/Lamda)*(2*pi/360)*Theta) ).^2;
I2 = (sin(pi*(d2/Lamda)*sin((2*pi/360)*Theta))./(pi*(d2/Lamda)*(2*pi/360)*Theta) ).^2;
I3 = (sin(pi*(d3/Lamda)*sin((2*pi/360)*Theta))./(pi*(d3/Lamda)*(2*pi/360)*Theta) ).^2;

figure(1);
plot(Theta,I1,Theta,I2,Theta,I3);
axis([-1 1 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('I1(	heta)','I2(	heta)','I3(	heta)');
`,cCode:"",defaultParams:{}},{id:"D3FASLITEXS",title:"D3FASLITEXS - D3FASLITEXS\r",description:"D3FASLITEXS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# D3FASLITEXS
# Study of side maxima and minima of the Slit
# Diffraction on a slit of width d and wavelength ?.
# X is distace: Slit-Screen,
# Y is coordinate on Screen.
# For small angles, Y/X is proportional to the diffraction angle.
# All length in mm.


Lamda = 0.0005
X = 4000
Y = np.arange(18, 150+1, 1)
d = 0.08
I1 = (np.sin(np.pi*(d/Lamda)*(Y/X))/(np.pi*(d/Lamda)*(Y/X)))**2
fig = plt.figure(1)

plt.plot(Y,real(I1)
,Y,imag(I1))
plt.xlim(0, 150)
plt.ylim(0, 0.12)
;                  # PLOTS LIMITS                    
plt.xlabel('Y')
plt.legend(['I1(Y)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% D3FASLITEXS
% Study of side maxima and minima of the Slit
% Diffraction on a slit of width d and wavelength ?.
% X is distace: Slit-Screen,
% Y is coordinate on Screen.
% For small angles, Y/X is proportional to the diffraction angle.
% All length in mm.

function D3FASLITEXS;

Lamda = 0.0005;
X = 4000;
Y = (18:1:150);
d = 0.08;
I1 = (sin(pi*(d/Lamda)*(Y/X))./(pi*(d/Lamda)*(Y/X))).^2;


figure(1);
plot(Y,real(I1),Y,imag(I1));
axis([0 150 0 0.12]);                  % PLOTS LIMITS                    
xlabel('Y');
legend('I1(Y)');
`,cCode:"",defaultParams:{}},{id:"of",title:"of - D4FASLITFTS\r",description:"D4FASLITFTS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64


# D4FASLITFTS
# Fourier transformation of step function of width 0 to d.
# The FT of the FT is also shown

I=np.arange(0, 255+1, 1)
d=20
X= (logical(I)>0) - (logical(I-d)>0)
fig = plt.figure(1)

plt.plot(I,real(X)
,I,imag(X))
plt.xlim(0, 300)
plt.ylim(-0.5, 1.5)
;                  # PLOTS LIMITS                    
plt.xlabel('i')
plt.legend(['I1(Y)'])
C= fft(X)
N = length(C)
J= (0:1:N-1)
fig = plt.figure(2)

plt.xlim(0, 0.6)
plt.ylim(0, 1)

plt.plot(J/255,real(C)
/np.sqrt(N),J/255,-imag(C)/np.sqrt(N))
                # PLOTS LIMITS        
plt.xlim(0, 0.6)
plt.ylim(-1, 2)

plt.xlabel('j/255')
plt.legend(['real(C)/sqrt(N)', '-imag(C)/sqrt(N)'])
Z = ifft(C)
fig = plt.figure(3)

plt.xlim(0, 0.6)
plt.ylim(0, 1)

plt.plot(I,real(Z)
,I,imag(Z))
plt.legend(['real(Z(I))', 'imag(Z(I))'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`
% D4FASLITFTS
% Fourier transformation of step function of width 0 to d.
% The FT of the FT is also shown
function D4FASLITFTS;


I=(0:1:255);
d=20;

X= (logical(I)>0) - (logical(I-d)>0);

figure(1);
plot(I,real(X),I,imag(X));
axis([0 300 -0.5 1.5]);                  % PLOTS LIMITS                    
xlabel('i');
legend('I1(Y)');





C= fft(X);
N = length(C);
J= (0:1:N-1);
figure(2);
axis([0 0.6 0 1]);  

plot(J/255,real(C)/sqrt(N),J/255,-imag(C)/sqrt(N));
                % PLOTS LIMITS        
axis([0 0.6 -1 2]);
xlabel('j/255');
legend('real(C)/sqrt(N)','-imag(C)/sqrt(N)');



Z = ifft(C);
figure(3);
axis([0 0.6 0 1]);  
plot(I,real(Z),I,imag(Z));
legend('real(Z(I))','imag(Z(I))');`,cCode:"",defaultParams:{}},{id:"D5FARECTS",title:"D5FARECTS - D5FARECTS The diffraction pattern of a rectangular aperture.\r",description:"D5FARECTS The diffraction pattern of a rectangular aperture.\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64
from mpl_toolkits.mplot3d import Axes3D

# D5FARECTS The diffraction pattern of a rectangular aperture.
# The width in the x-direction is d, in y-direction a.
# One may look at the plot from different angles, change colors
# and make a "Contour Plot".


N = 40
D = 4
A = 2
Lamda = 4
I = 0:N
J = 0:N
nx = length(I)
ny = length(J)
Z = zeros(nx,ny)
for r=1:nx
        for c=1:ny
            Xi = -4 + 0.20001*r
            Yi = -4 + 0.20001*c
            Z(r,c)= power(np.sin(2*np.pi*D*(Xi/(2*Lamda)))/(2*np.pi*D*(Xi/(2*Lamda))),2)*power(np.sin(2*np.pi*A*(Yi/(2*Lamda)))/(2*np.pi*A*(Yi/(2*Lamda))),2)
F= Z
fig = plt.figure(1)

ax = plt.gca()
if not hasattr(ax, 'plot_surface'):
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')
    X, Y = np.meshgrid(np.arange(F.shape[1]), np.arange(F.shape[0]))
    ax.plot_surface(X, Y, F, cmap='viridis')
# PLOTS LIMITS                    
axis([0 40 0 40 0 1])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% D5FARECTS The diffraction pattern of a rectangular aperture.
% The width in the x-direction is d, in y-direction a.
% One may look at the plot from different angles, change colors
% and make a "Contour Plot".

function D5FARECTS;

N = 40;
D = 4;
A = 2;
Lamda = 4;


I = 0:N;
J = 0:N;

nx = length(I);
ny = length(J);
Z = zeros(nx,ny);
for r=1:nx;
        for c=1:ny;
            Xi = -4 + 0.20001*r; 
            Yi = -4 + 0.20001*c;
            Z(r,c)= power(sin(2*pi*D*(Xi/(2*Lamda)))/(2*pi*D*(Xi/(2*Lamda))),2)*power(sin(2*pi*A*(Yi/(2*Lamda)))/(2*pi*A*(Yi/(2*Lamda))),2);
        end;
end;




F= Z;

figure(1);

mesh(F);



                 % PLOTS LIMITS                    
axis([0 40 0 40 0 1]);


`,cCode:"",defaultParams:{}},{id:"D6FARONS",title:"D6FARONS - D6FARONS\r",description:"D6FARONS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# D6FARONS
# Diffraction on a round aperture of radius a, using wavelength ?.
# The graph is not normalized.
# X is distace:Slit-Screen,
# R is coordinate on Screen,
# All length in mm, parameters are globally defined above the graph.
# Three round apertures with different Radii a1, a2, and a3


R = np.arange(-10.01, 10.01+0.1, 0.1)
X = 1000
Lamda = 0.010
a1 = 1.5
a2 = 3
a3 = 6
I1 = (besselj(1,(2*np.pi*a1*R/(Lamda*X)))/(2*np.pi*a1*R/(Lamda*X)))**2
I2 = (besselj(1,(2*np.pi*a2*R/(Lamda*X)))/(2*np.pi*a2*R/(Lamda*X)))**2
I3 = (besselj(1,(2*np.pi*a3*R/(Lamda*X)))/(2*np.pi*a3*R/(Lamda*X)))**2
fig = plt.figure(1)

plt.plot(R,I1,R,I2,R,I3)

plt.xlim(-15, 10)
plt.ylim(0, 0.3)
;                  # PLOTS LIMITS                    
plt.xlabel('R')
plt.legend(['I1(R)', 'I2(R)', 'I3(R)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% D6FARONS
% Diffraction on a round aperture of radius a, using wavelength ?.
% The graph is not normalized.
% X is distace:Slit-Screen,
% R is coordinate on Screen,
% All length in mm, parameters are globally defined above the graph.
% Three round apertures with different Radii a1, a2, and a3

function D6FARONS;

R = (-10.01:0.1:10.01);
X = 1000;
Lamda = 0.010;
a1 = 1.5;
a2 = 3;
a3 = 6;

I1 = (besselj(1,(2*pi*a1*R/(Lamda*X)))./(2*pi*a1*R/(Lamda*X))).^2;
I2 = (besselj(1,(2*pi*a2*R/(Lamda*X)))./(2*pi*a2*R/(Lamda*X))).^2;
I3 = (besselj(1,(2*pi*a3*R/(Lamda*X)))./(2*pi*a3*R/(Lamda*X))).^2;

figure(1);
plot(R,I1,R,I2,R,I3);
axis([-15 10 0 0.3]);                  % PLOTS LIMITS                    
xlabel('R');
legend('I1(R)','I2(R)','I3(R)');
`,cCode:"",defaultParams:{}},{id:"D7FARON3DS",title:"D7FARON3DS - D7FARON3DS\r",description:"D7FARON3DS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64
from mpl_toolkits.mplot3d import Axes3D

# D7FARON3DS
# One may look at the plot from different angles, change colors, and make a "Contour Plot".
# Radius of aperture is a
# The coordinate on the observation screen is R
# Wavelength ?, distance from aperture to screen is X.
# 3D diffraction pattern of a round aperture as a circular
# symmetric plot using two coordinates.


N = 30
D = 2
A = 0.1
Lamda = 0.0005
X = 4000
I = 0:N
J = 0:N
nx = length(I)
ny = length(J)
G = zeros(nx,ny)
for r=1:nx
        for c=1:ny
            Xi = -20 + 1.5001*r
            Yi = -20 + 1.5001*c
            R = np.sqrt(Xi**2+Yi**2)
            G(r,c)= (( besselj(1,(2*np.pi*A*R/(X*Lamda)))/(2*np.pi*A*R/(X*Lamda))))**2
fig = plt.figure(1)

ax = plt.gca()
if not hasattr(ax, 'plot_surface'):
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')
    X, Y = np.meshgrid(np.arange(real(G.shape[1]), np.arange(real(G.shape[0]))
    ax.plot_surface(X, Y, real(G, cmap='viridis')
)
                 # PLOTS LIMITS                    
axis([0 N 0 N 0 0.3])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% D7FARON3DS
% One may look at the plot from different angles, change colors, and make a "Contour Plot".
% Radius of aperture is a
% The coordinate on the observation screen is R
% Wavelength ?, distance from aperture to screen is X.
% 3D diffraction pattern of a round aperture as a circular
% symmetric plot using two coordinates.

function D7FARON3DS;

N = 30;
D = 2;
A = 0.1;
Lamda = 0.0005;
X = 4000;

I = 0:N;
J = 0:N;

nx = length(I);
ny = length(J);
G = zeros(nx,ny);
for r=1:nx;
        for c=1:ny;
            Xi = -20 + 1.5001*r;
            Yi = -20 + 1.5001*c; 
            R = sqrt(Xi^2+Yi^2);
            G(r,c)= (( besselj(1,(2*pi*A*R/(X*Lamda)))/(2*pi*A*R/(X*Lamda))))^2;
        end;
end;






figure(1);

mesh(real(G));
                 % PLOTS LIMITS                    
axis([0 N 0 N 0 0.3])`,cCode:"",defaultParams:{}},{id:"D8FARONEXS",title:"D8FARONEXS - D8FARONEXS\r",description:"D8FARONEXS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# D8FARONEXS
# Graph of part of the diffraction pattern of a round aperture of radius a and
# wavelength ????.
# The graph is not normalized.
# X is distace:Slit-Screen,
# R is coordinate on Screen,
# All length in mm, parameters are globally defined above the graph.


R = np.arange(3, 10+0.1, 0.1)
X = 1000
Lamda = 0.010
a = 1.5
I = (besselj(1,(2*np.pi*a*R/(Lamda*X)))/(2*np.pi*a*R/(Lamda*X)))**2
fig = plt.figure(1)

plt.plot(R,I)

plt.xlim(3, 10)
plt.ylim(0, 0.02)
;                  # PLOTS LIMITS                    
plt.xlabel('R')
plt.legend(['I(R)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% D8FARONEXS
% Graph of part of the diffraction pattern of a round aperture of radius a and
% wavelength ????.
% The graph is not normalized.
% X is distace:Slit-Screen,
% R is coordinate on Screen,
% All length in mm, parameters are globally defined above the graph.

function D8FARONEXS;
R = (3:0.1:10);
X = 1000;
Lamda = 0.010;
a = 1.5;

I = (besselj(1,(2*pi*a*R/(Lamda*X)))./(2*pi*a*R/(Lamda*X))).^2;

figure(1);
plot(R,I);
axis([3 10 0 0.02]);                  % PLOTS LIMITS                    
xlabel('R');
legend('I(R)');

`,cCode:"",defaultParams:{}},{id:"D9FAGRAMPS",title:"D9FAGRAMPS - D9FAGRAMPS\r",description:"D9FAGRAMPS\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# D9FAGRAMPS
# Diffraction on an amplitude grating at normal incidence.
# Width of openings d, center to center distance of strips a, wavelength ????, distance
# from grating to screen X and coordinate on Screen Y.
# All distances and wavelength in mm, number of lines N.
# All parameters are globally defined above the graph.
# D(A) is the diffraction factor
# I(A) is the interference factor, normalized to 1. The numerator is plotted separately to
# show where the main maxima are located (0/0).
# P(A) is the product of Interference and diffraction factor.


Theta = np.arange(-0.5001, 0.5+0.0002, 0.0002)
d= 0.001
Lamda = 0.0005
a = 0.002
N = 6
D = (np.sin(np.pi*(d/Lamda)*np.sin(Theta))/(np.pi*(d/Lamda)*np.sin(Theta)))**2
I = (np.sin(np.pi*(a/Lamda)*np.sin(Theta)*N)/(N*np.sin(np.pi*(a/Lamda)*np.sin(Theta))))**2
Y = (np.sin(np.pi*(a/Lamda)*np.sin(Theta)*N))**2
P = D*I
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(Theta,I,Theta,Y)

plt.xlim(-0.6, 0.6)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['I(	heta)', 'Y(	heta)'])
plt.subplot(2, 1, 2)

plt.plot(Theta,I,Theta,D,Theta,P)

plt.xlim(-0.6, 0.6)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['I(	heta)', 'D(	heta)', 'P(	heta)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% D9FAGRAMPS
% Diffraction on an amplitude grating at normal incidence.
% Width of openings d, center to center distance of strips a, wavelength ????, distance
% from grating to screen X and coordinate on Screen Y.
% All distances and wavelength in mm, number of lines N.
% All parameters are globally defined above the graph.
% D(A) is the diffraction factor
% I(A) is the interference factor, normalized to 1. The numerator is plotted separately to
% show where the main maxima are located (0/0).
% P(A) is the product of Interference and diffraction factor.

function D9FAGRAMPS;

Theta = (-0.5001:0.0002:0.5);
d= 0.001;
Lamda = 0.0005;
a = 0.002;
N = 6;

D = (sin(pi*(d/Lamda)*sin(Theta))./(pi*(d/Lamda)*sin(Theta))).^2;
I = (sin(pi*(a/Lamda)*sin(Theta)*N)./(N*sin(pi*(a/Lamda)*sin(Theta)))).^2;
Y = (sin(pi*(a/Lamda).*sin(Theta)*N)).^2;
P = D.*I;


figure(1);
subplot(2,1,1);
plot(Theta,I,Theta,Y);
axis([-0.6 0.6 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('I(	heta)','Y(	heta)');


subplot(2,1,2);
plot(Theta,I,Theta,D,Theta,P);
axis([-0.6 0.6 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('I(	heta)','D(	heta)','P(	heta)');
`,cCode:"",defaultParams:{}},{id:"DA1FAGRSTEP1S",title:"DA1FAGRSTEP1S - DA1FAGRSTEP1S\r",description:"DA1FAGRSTEP1S\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# DA1FAGRSTEP1S
# Diffraction on an step grating with width d, center to center distance of steps a,
# height H, wavelength ????, distance from grating to screen X and coordinate on
# Screen Y. All distances and wavelength in mm, number of lines N .Normal incidence.
# All parameters are globally defined above the graph.
# D(?) is the diffraction factor, I(?) is the interference factor, normalized to 1.
# II(?) is the interfernce factor of the gratings with respect to the two planes.
# P(A) is the product of interference and diffraction factors.
# The intensity of the zeroth order and of the first orders change depending on the heigth H.
# If H is a multiple of ?, all light is in the zero order, if H is a multiple of ?/2, all light is in:
# the first order.


Theta =np.arange(-0.5001, 0.5+0.0002, 0.0002)
Lamda = 0.0005
a = 0.002
N = 6
d = 0.001
n1 = 10.25
n2 = 10
n3 = 10.37
n4 = 10.5
H1 = n1*Lamda
H2 = n2*Lamda
H3 = n3*Lamda
H4 = n4*Lamda
D = (np.sin(np.pi*(d/Lamda)*np.sin(Theta))/(np.pi*(d/Lamda)*np.sin(Theta)))**2
I = (np.sin(np.pi*(a/Lamda)*np.sin(Theta)*N)/(N*np.sin(np.pi*(a/Lamda)*np.sin(Theta))))**2
II1 =  (np.cos((np.pi/Lamda)*(d*np.sin(Theta)+H1)))**2
II2 =  (np.cos((np.pi/Lamda)*(d*np.sin(Theta)+H2)))**2
II3 =  (np.cos((np.pi/Lamda)*(d*np.sin(Theta)+H3)))**2
II4 =  (np.cos((np.pi/Lamda)*(d*np.sin(Theta)+H4)))**2
P1 = D*I*II1
P2 = D*I*II2
P3 = D*I*II3
P4 = D*I*II4
fig = plt.figure(1)

plt.plot(Theta,P1,Theta,P2,Theta,P3,Theta,P4,Theta,D)

plt.xlim(-1, 1)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['P1(	heta)', 'P2(	heta)', 'P3(	heta)', 'P4(	heta)', 'D(	heta)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% DA1FAGRSTEP1S
% Diffraction on an step grating with width d, center to center distance of steps a,
% height H, wavelength ????, distance from grating to screen X and coordinate on
% Screen Y. All distances and wavelength in mm, number of lines N .Normal incidence.
% All parameters are globally defined above the graph.
% D(?) is the diffraction factor, I(?) is the interference factor, normalized to 1.
% II(?) is the interfernce factor of the gratings with respect to the two planes.
% P(A) is the product of interference and diffraction factors.
% The intensity of the zeroth order and of the first orders change depending on the heigth H.
% If H is a multiple of ?, all light is in the zero order, if H is a multiple of ?/2, all light is in
% the first order.

function DA1FAGRSTEP1S;

Theta =(-0.5001:0.0002:0.5);
Lamda = 0.0005;

a = 0.002;
N = 6;
d = 0.001;
n1 = 10.25;
n2 = 10;
n3 = 10.37;
n4 = 10.5;
H1 = n1*Lamda;
H2 = n2*Lamda;
H3 = n3*Lamda;
H4 = n4*Lamda;


D = (sin(pi*(d/Lamda)*sin(Theta))./(pi*(d/Lamda)*sin(Theta))).^2;
I = (sin(pi*(a/Lamda)*sin(Theta)*N)./(N*sin(pi*(a/Lamda)*sin(Theta)))).^2;
II1 =  (cos((pi/Lamda)*(d*sin(Theta)+H1))).^2;
II2 =  (cos((pi/Lamda)*(d*sin(Theta)+H2))).^2;
II3 =  (cos((pi/Lamda)*(d*sin(Theta)+H3))).^2;
II4 =  (cos((pi/Lamda)*(d*sin(Theta)+H4))).^2;

P1 = D.*I.*II1;
P2 = D.*I.*II2;
P3 = D.*I.*II3;
P4 = D.*I.*II4;

figure(1);
plot(Theta,P1,Theta,P2,Theta,P3,Theta,P4,Theta,D);
axis([-1 1 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('P1(	heta)','P2(	heta)','P3(	heta)','P4(	heta)','D(	heta)');
`,cCode:"",defaultParams:{}},{id:"DA2FAGRSTEP2S",title:"DA2FAGRSTEP2S - DA2FAGRSTEP2S\r",description:"DA2FAGRSTEP2S\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# DA2FAGRSTEP2S
# Diffraction on an step grating with width d, center to center distance of steps a,
# height H, two wavelength ?1 and ????2 for 0th and first order, distance from grating to
# screen X and coordinate on screen Y.
# All distances and wavelength in mm, number of lines N .Normal incidence.
# All parameters are globally defined above the graph.
# D(?) is the diffraction factor, I(?) is the interference factor, normalized to 1.
# II(?) is the interference factor of the gratings with respect to the two planes.
# P(A) is the product of Interference and diffraction factors.
# The intensity of the zeroth order and of the first orders change depending on the heigth H.
# If H is a multiple of ?, all light is in the zero order, if H is a multiple of ?/2, all light is in:
# the first order.


Theta = np.arange(-0.7001, 0.7+0.0002, 0.0002)
d = 0.001
a = 0.002
N = 6
Lamda1 = 0.0007
Lamda2 = 0.0005
n1 = 1
n2 = 0.5
H = 0.00035
H1 = n1*Lamda1
H2 = n1*Lamda2
H3 = n2*Lamda1
H4 = n2*Lamda2
D1 = (np.sin(np.pi*(d/Lamda1)*np.sin(Theta))/(np.pi*(d/Lamda1)*np.sin(Theta)))**2
D2 = (np.sin(np.pi*(d/Lamda2)*np.sin(Theta))/(np.pi*(d/Lamda2)*np.sin(Theta)))**2
D3 = D1
D4 = D2
I1 = (np.sin(np.pi*(a/Lamda1)*np.sin(Theta)*N)/(N*np.sin(np.pi*(a/Lamda1)*np.sin(Theta))))**2
I2 = (np.sin(np.pi*(a/Lamda2)*np.sin(Theta)*N)/(N*np.sin(np.pi*(a/Lamda2)*np.sin(Theta))))**2
I3 = I1
I4 = I2
II1 = (np.cos((np.pi/Lamda1)*(d*np.sin(Theta)+H1)))**2
II2 = (np.cos((np.pi/Lamda2)*(d*np.sin(Theta)+H2)))**2
II3 = (np.cos((np.pi/Lamda1)*(d*np.sin(Theta)+H3)))**2
II4 = (np.cos((np.pi/Lamda2)*(d*np.sin(Theta)+H4)))**2
P1 = D1*I1*II1
P2 = D2*I2*II2
P3 = D1*I1*II3
P4 = D2*I2*II4
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(Theta,P1,Theta,P2,Theta,D1,Theta,D2)

plt.xlim(-0.8, 0.8)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
xlabel('	heta','Fontsize',12)
plt.legend(['P1(	heta)', 'P2(	heta)', 'D1(	heta)', 'D2(	heta)'])
plt.subplot(2, 1, 2)

plt.plot(Theta,P3,Theta,P4,Theta,D3,Theta,D4)

plt.xlim(-0.8, 0.8)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
xlabel('	heta','Fontsize',12)
plt.legend(['P3(	heta)', 'P4(	heta)', 'D3(	heta)', 'D4(	heta)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% DA2FAGRSTEP2S
% Diffraction on an step grating with width d, center to center distance of steps a,
% height H, two wavelength ?1 and ????2 for 0th and first order, distance from grating to
% screen X and coordinate on screen Y.
% All distances and wavelength in mm, number of lines N .Normal incidence.
% All parameters are globally defined above the graph.
% D(?) is the diffraction factor, I(?) is the interference factor, normalized to 1.
% II(?) is the interference factor of the gratings with respect to the two planes.
% P(A) is the product of Interference and diffraction factors.
% The intensity of the zeroth order and of the first orders change depending on the heigth H.
% If H is a multiple of ?, all light is in the zero order, if H is a multiple of ?/2, all light is in
% the first order.

function DA2FAGRSTEP2S;

Theta = (-0.7001:0.0002:0.7);
d = 0.001;
a = 0.002;
N = 6;
Lamda1 = 0.0007;
Lamda2 = 0.0005;
n1 = 1;
n2 = 0.5;
H = 0.00035;
H1 = n1*Lamda1;
H2 = n1*Lamda2;
H3 = n2*Lamda1;
H4 = n2*Lamda2;


D1 = (sin(pi*(d/Lamda1)*sin(Theta))./(pi*(d/Lamda1)*sin(Theta))).^2;
D2 = (sin(pi*(d/Lamda2)*sin(Theta))./(pi*(d/Lamda2)*sin(Theta))).^2;
D3 = D1;
D4 = D2;

I1 = (sin(pi*(a/Lamda1)*sin(Theta)*N)./(N*sin(pi*(a/Lamda1)*sin(Theta)))).^2;
I2 = (sin(pi*(a/Lamda2)*sin(Theta)*N)./(N*sin(pi*(a/Lamda2)*sin(Theta)))).^2;
I3 = I1;
I4 = I2;

II1 = (cos((pi/Lamda1)*(d*sin(Theta)+H1))).^2;
II2 = (cos((pi/Lamda2)*(d*sin(Theta)+H2))).^2;
II3 = (cos((pi/Lamda1)*(d*sin(Theta)+H3))).^2;
II4 = (cos((pi/Lamda2)*(d*sin(Theta)+H4))).^2;

P1 = D1.*I1.*II1;
P2 = D2.*I2.*II2;
P3 = D1.*I1.*II3;
P4 = D2.*I2.*II4;

figure(1);
subplot(2,1,1);
plot(Theta,P1,Theta,P2,Theta,D1,Theta,D2);
axis([-0.8 0.8 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta','Fontsize',12);
legend('P1(	heta)','P2(	heta)','D1(	heta)','D2(	heta)');

subplot(2,1,2);
plot(Theta,P3,Theta,P4,Theta,D3,Theta,D4);
axis([-0.8 0.8 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta','Fontsize',12);
legend('P3(	heta)','P4(	heta)','D3(	heta)','D4(	heta)');`,cCode:"",defaultParams:{}},{id:"DA3FECOR",title:"DA3FECOR - DA3FECOR\r",description:"DA3FECOR\r",category:"Optics - Diffraction",chapter:"3",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# DA3FECOR
# Cornu's spiral is obtained by plotting Fresnel's Integrals C(Y) and S(Y) on x and y
# axis, respectively.
# The highest value f of Y is globally defined


f=5
Y=(0:0.01:f)
[t,SY] = ode45(@Sf,Y,[0])
[t,CY] = ode45(@Cf,Y,[0])
fig = plt.figure(1)

plt.plot(CY,SY)

plt.xlim(0, 0.8)
plt.ylim(0, 0.8)

xlabel('C(Y)','Fontsize',12)
plt.legend(['S(Y)'])
Out = np.sin((np.pi/2)*T**2)
Out = np.cos((np.pi/2)*T**2)
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% DA3FECOR
% Cornu's spiral is obtained by plotting Fresnel's Integrals C(Y) and S(Y) on x and y
% axis, respectively.
% The highest value f of Y is globally defined
function DA3FECOR()

f=5;
Y=(0:0.01:f);

[t,SY] = ode45(@Sf,Y,[0]);
[t,CY] = ode45(@Cf,Y,[0]);


figure(1);
plot(CY,SY);
axis([0 0.8 0 0.8]);                
xlabel('C(Y)','Fontsize',12);
legend('S(Y)');





function Out=Sf(T,X)
Out = sin((pi/2)*T^2);
function Out=Cf(T,X)
Out = cos((pi/2)*T^2);
`,cCode:"",defaultParams:{}},{id:"C1COH2S",title:"C1COH2S - C1COH2S\r",description:"C1COH2S\r",category:"Optics - Coherence",chapter:"4",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# C1COH2S
# Intensity of two sources separated by s. Superposition of two double
# slit pattern.
# The slits have width d and separation a, one pattern is untilted with ? = 0, the
# other tilted by ? = s/Z , distance from sources to slit is Z.
# Distance from slit to screen is X, coordinate on screen is Y, Y/X = ?.
# By enlarging ?, starting from 0, one finds the first " fringe disappearence". If ?
# is further enlarged, the fringes reappear, but now the minima are not zero.
# Another point of view: Fringes may disapear for constant s and changing a.


Theta = np.arange(-0.006, 0.006+0.00009, 0.00009)
d = 0.05
a = 1
Z = 9000
s1 = 0
s2 = 1.5
s3 = 2.25
s4 = 2.6
Psi1 = s1/Z
Psi2 = s2/Z
Psi3 = s3/Z
Psi4 = s4/Z
Lamda = 0.0005
I1= ((np.sin(np.pi*(d/Lamda)*np.sin(Theta))**2)/((np.pi*(d/Lamda)*np.sin(Theta))**2))*(np.cos(np.pi*(a/Lamda)*np.sin(Theta)))**2
II1= ((np.sin(np.pi*(d/Lamda)*np.sin(Theta))**2)/((np.pi*(d/Lamda)*np.sin(Theta))**2))*(np.cos(np.pi*(a/Lamda)*(np.sin(Theta)+np.sin(Psi1))))**2
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.plot(Theta,I1+II1)

plt.xlim(-0.006, 0.006)
plt.ylim(0, 2)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['I1(	heta)+II1(	heta)'])
II2= ((np.sin(np.pi*(d/Lamda)*np.sin(Theta))**2)/((np.pi*(d/Lamda)*np.sin(Theta))**2))*(np.cos(np.pi*(a/Lamda)*(np.sin(Theta)+np.sin(Psi2))))**2
plt.subplot(2, 2, 2)

plt.plot(Theta,I1+II2)

plt.xlim(-0.006, 0.006)
plt.ylim(0, 2)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['I1(	heta)+II2(	heta)'])
II3= ((np.sin(np.pi*(d/Lamda)*np.sin(Theta))**2)/((np.pi*(d/Lamda)*np.sin(Theta))**2))*(np.cos(np.pi*(a/Lamda)*(np.sin(Theta)+np.sin(Psi3))))**2
plt.subplot(2, 2, 3)

plt.plot(Theta,I1+II3)

plt.xlim(-0.006, 0.006)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['I1(	heta)+II3(	heta)'])
II4= ((np.sin(np.pi*(d/Lamda)*np.sin(Theta))**2)/((np.pi*(d/Lamda)*np.sin(Theta))**2))*(np.cos(np.pi*(a/Lamda)*(np.sin(Theta)+np.sin(Psi4))))**2
plt.subplot(2, 2, 4)

plt.plot(Theta,I1+II4)

plt.xlim(-0.006, 0.006)
plt.ylim(0, 1.5)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['I1(	heta)+II4(	heta)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`%C1COH2S
%Intensity of two sources separated by s. Superposition of two double
%slit pattern.
%The slits have width d and separation a, one pattern is untilted with ? = 0, the
%other tilted by ? = s/Z , distance from sources to slit is Z.
%Distance from slit to screen is X, coordinate on screen is Y, Y/X = ?.
%By enlarging ?, starting from 0, one finds the first " fringe disappearence". If ?
%is further enlarged, the fringes reappear, but now the minima are not zero.
%Another point of view: Fringes may disapear for constant s and changing a.

function C1COH2S;

Theta = (-0.006:0.00009:0.006);
d = 0.05;
a = 1;
Z = 9000;
s1 = 0;
s2 = 1.5;
s3 = 2.25;
s4 = 2.6;
Psi1 = s1/Z;
Psi2 = s2/Z;
Psi3 = s3/Z;
Psi4 = s4/Z;
Lamda = 0.0005;

I1= ((sin(pi*(d/Lamda)*sin(Theta)).^2)./((pi*(d/Lamda)*sin(Theta)).^2)).*(cos(pi*(a/Lamda)*sin(Theta))).^2;

II1= ((sin(pi*(d/Lamda)*sin(Theta)).^2)./((pi*(d/Lamda)*sin(Theta)).^2)).*(cos(pi*(a/Lamda)*(sin(Theta)+sin(Psi1)))).^2;

figure(1);
subplot(2,2,1);
plot(Theta,I1+II1);
axis([-0.006 0.006 0 2]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('I1(	heta)+II1(	heta)'); 

II2= ((sin(pi*(d/Lamda)*sin(Theta)).^2)./((pi*(d/Lamda)*sin(Theta)).^2)).*(cos(pi*(a/Lamda)*(sin(Theta)+sin(Psi2)))).^2;

subplot(2,2,2);
plot(Theta,I1+II2);
axis([-0.006 0.006 0 2]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('I1(	heta)+II2(	heta)'); 

II3= ((sin(pi*(d/Lamda)*sin(Theta)).^2)./((pi*(d/Lamda)*sin(Theta)).^2)).*(cos(pi*(a/Lamda)*(sin(Theta)+sin(Psi3)))).^2;

subplot(2,2,3);
plot(Theta,I1+II3);
axis([-0.006 0.006 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('I1(	heta)+II3(	heta)'); 

II4= ((sin(pi*(d/Lamda)*sin(Theta)).^2)./((pi*(d/Lamda)*sin(Theta)).^2)).*(cos(pi*(a/Lamda)*(sin(Theta)+sin(Psi4)))).^2;

subplot(2,2,4);
plot(Theta,I1+II4);
axis([-0.006 0.006 0 1.5]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('I1(	heta)+II4(	heta)'); 


`,cCode:"",defaultParams:{}},{id:"C2COHEX",title:"C2COHEX - C2COHEX\r",description:"C2COHEX\r",category:"Optics - Coherence",chapter:"4",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# C2COHEX

# Intensity of an extended source of width s and interfernce diffraction on a
# double slit.

# Slit openings d and separation a. Distance from source to slit Z, from slit to
# screen X, coordinate on screen is Y, small angle approximation Y/X = ?.




a=1
d=0.05
Lamda = 0.0005
Z = 9000
s1 = 1
s2 = 1.5
s3 = 4.5
s4 = 5
Psi1 = s1/Z
Psi2 = s2/Z
Psi3 = s3/Z
Psi4 = s4/Z
k=0:1:200
Theta =0.01-k*0.0001
 nx = length(Theta)
 for r=1:nx
    I1(r)= quad(@fc,0,Psi1,[],[],Theta(r))
    I2(r)= quad(@fc,0,Psi2,[],[],Theta(r))
    I3(r)= quad(@fc,0,Psi3,[],[],Theta(r))
    I4(r)= quad(@fc,0,Psi4,[],[],Theta(r))
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.plot(Theta,I1)

plt.xlim(-0.01, 0.01)
plt.ylim(0, 3*10**(-4))
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['I1(	heta)'])
plt.subplot(2, 2, 2)

plt.plot(Theta,I2)

plt.xlim(-0.01, 0.01)
plt.ylim(0, 3*10**(-4))
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['I2(	heta)'])
plt.subplot(2, 2, 3)

plt.plot(Theta,I3)

plt.xlim(-0.01, 0.01)
plt.ylim(0, 3*10**(-4))
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['I3(	heta)'])
plt.subplot(2, 2, 4)

plt.plot(Theta,I4)

plt.xlim(-0.01, 0.01)
plt.ylim(0, 3*10**(-4))
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['I4(	heta)'])
Out = ((np.sin(np.pi*(d/Lamda)*(np.sin(Theta)+np.sin(Psi)))**2)/((np.pi*(d/Lamda)*(np.sin(Theta)+np.sin(Psi)))**2))*np.cos(np.pi*(a/Lamda)*(np.sin(Theta)+np.sin(Psi)))**2
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% C2COHEX

% Intensity of an extended source of width s and interfernce diffraction on a
% double slit.

% Slit openings d and separation a. Distance from source to slit Z, from slit to
% screen X, coordinate on screen is Y, small angle approximation Y/X = ?.



function C2COHEX;
global a d Lamda Z s1 Psi1 k Theta;
a=1;
d=0.05;
Lamda = 0.0005;
Z = 9000;
s1 = 1;
s2 = 1.5;
s3 = 4.5;
s4 = 5;

Psi1 = s1/Z;
Psi2 = s2/Z;
Psi3 = s3/Z;
Psi4 = s4/Z;

k=0:1:200;
Theta =0.01-k*0.0001;


 nx = length(Theta);
 for r=1:nx;
  
    I1(r)= quad(@fc,0,Psi1,[],[],Theta(r));
    I2(r)= quad(@fc,0,Psi2,[],[],Theta(r));
    I3(r)= quad(@fc,0,Psi3,[],[],Theta(r));
    I4(r)= quad(@fc,0,Psi4,[],[],Theta(r));
   
   
    
end;


figure(1);
subplot(2,2,1);
plot(Theta,I1);
axis([-0.01 0.01 0 3*10^(-4)]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('I1(	heta)');

subplot(2,2,2);
plot(Theta,I2);
axis([-0.01 0.01 0 3*10^(-4)]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('I2(	heta)');

subplot(2,2,3);
plot(Theta,I3);
axis([-0.01 0.01 0 3*10^(-4)]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('I3(	heta)');

subplot(2,2,4);
plot(Theta,I4);
axis([-0.01 0.01 0 3*10^(-4)]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('I4(	heta)');

function Out=fc(Psi,Theta)
global a d Lamda Z s1 Psi1;
Out = ((sin(pi*(d/Lamda)*(sin(Theta)+sin(Psi))).^2)./((pi*(d/Lamda)*(sin(Theta)+sin(Psi))).^2)).*cos(pi*(a/Lamda)*(sin(Theta)+sin(Psi))).^2;
`,cCode:"",defaultParams:{}},{id:"C3VIS2S",title:"C3VIS2S - C3VIS2S\r",description:"C3VIS2S\r",category:"Optics - Coherence",chapter:"4",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# C3VIS2S

# Visibility for two point sources.
# We have set Y'/X equal to s/Z


a = 1
Lamda = 0.0005
Z = 9000
s = np.arange(0.01, 10+0.01, 0.01)
V = np.cos(np.pi*((a*s)/(Lamda*Z)))
fig = plt.figure(1)

plt.plot(s,np.abs(V)
)
plt.xlim(0, 10)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('s')
plt.legend(['abs(V(s))'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% C3VIS2S

% Visibility for two point sources.
% We have set Y'/X equal to s/Z

function C3VIS2S;

a = 1;
Lamda = 0.0005;
Z = 9000;
s = (0.01:0.01:10);

V = cos(pi*((a*s)/(Lamda*Z)));

figure(1);
plot(s,abs(V));
axis([0 10 0 1]);                  % PLOTS LIMITS                    
xlabel('s');
legend('abs(V(s))');`,cCode:"",defaultParams:{}},{id:"C4VISEX",title:"C4VISEX - C4VISEX\r",description:"C4VISEX\r",category:"Optics - Coherence",chapter:"4",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# C4VISEX
# Visibility for an extended source.
# We have set Y'/X equal to s/Z

a = 1
Lamda = 0.0005
Z = 9000
s = 0.01:0.01:10
VV = np.sin(np.pi*((a*s)/(Lamda*Z)))/(np.pi*((a*s)/(Lamda*Z)))
fig = plt.figure(1)

plt.plot(s,np.abs(VV)
)
plt.xlim(0, 10)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('s')
plt.legend(['abs(VV(s))'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% C4VISEX
% Visibility for an extended source.
% We have set Y'/X equal to s/Z
function C4VISEX;

a = 1;
Lamda = 0.0005;
Z = 9000;
s = 0.01:0.01:10;

VV = sin(pi*((a*s)/(Lamda*Z)))./(pi*((a*s)/(Lamda*Z)));

figure(1);
plot(s,abs(VV));
axis([0 10 0 1]);                  % PLOTS LIMITS                    
xlabel('s');
legend('abs(VV(s))')`,cCode:"",defaultParams:{}},{id:"C5MICHSTS",title:"C5MICHSTS - C5MICHSTS\r",description:"C5MICHSTS\r",category:"Optics - Coherence",chapter:"4",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# C5MICHSTS
# Michelson's Stellar Interferometer
# Diffraction angle Y/X, wavelength ?, angle to be determined is ?.
# Interferometer distance of Mirror M1 and M4 is h.

# In the real set-up we change h to go from fringe pattern to no fringe pattern. From the
# difference of these two values we calculate the angle ?.

# ?n this simulation we choose an angle ? and show that the fringe pattern
# changes for the two values of h we determine.
# Example h equal 100 and 95.

Phi = 0.00005
X = 4000
Lamda = 0.0005
d = 0.5
h = 95
Y= np.arange(-30, 30+0.1, 0.1)
uI = (np.cos(np.pi*d*(Y/(X*Lamda))))**2
uII = (np.cos(np.pi*((Y/X)*d-h*Phi)/Lamda))**2
# This is an indication if there are fringes or not:
fig = plt.figure(1)

plt.plot(Y,uI+uII,Y,uI,Y,uII)

plt.xlim(-30, 30)
plt.ylim(0, 1.5)
;                  # PLOTS LIMITS                    
plt.xlabel('Y')
plt.legend(['uI(Y)+uII(Y)', 'uI(Y)', 'uII(Y)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% C5MICHSTS
% Michelson's Stellar Interferometer
% Diffraction angle Y/X, wavelength ?, angle to be determined is ?.
% Interferometer distance of Mirror M1 and M4 is h.

% In the real set-up we change h to go from fringe pattern to no fringe pattern. From the
% difference of these two values we calculate the angle ?.

% ?n this simulation we choose an angle ? and show that the fringe pattern
% changes for the two values of h we determine.
% Example h equal 100 and 95.
function C5MICHSTS;

Phi = 0.00005;
X = 4000;
Lamda = 0.0005;
d = 0.5;
h = 95;
Y= (-30:0.1:30);

uI = (cos(pi*d*(Y/(X*Lamda)))).^2;
uII = (cos(pi*((Y/X)*d-h*Phi)/Lamda)).^2;

%  This is an indication if there are fringes or not

figure(1);
plot(Y,uI+uII,Y,uI,Y,uII);
axis([-30 30 0 1.5]);                  % PLOTS LIMITS                    
xlabel('Y');
legend('uI(Y)+uII(Y)','uI(Y)','uII(Y)');`,cCode:"",defaultParams:{}},{id:"C6SUPERS",title:"C6SUPERS - C6SUPERS\r",description:"C6SUPERS\r",category:"Optics - Coherence",chapter:"4",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# C6SUPERS

# (i) of four different wavelength and (ii) for the integration over the same wavelength interval.
# Demonstration of the superposition of waves .
# The medium wavelength is ?m = 2

# 1. Summation over four waves


x = np.arange(-200, 200+0.5, 0.5)
Lamda1=1.85
Lamda2=1.95
Lamda3=2.05
Lamda4=2.15
y11=np.cos(2*np.pi*x/Lamda1)
y12=np.cos(2*np.pi*x/Lamda2)
y13=np.cos(2*np.pi*x/Lamda3)
y14=np.cos(2*np.pi*x/Lamda4)
y1=y11+y12+y13+y14
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(x,y1)

plt.xlim(-200, 200)
plt.ylim(-5, 5)
;                  # PLOTS LIMITS                    
plt.xlabel('x')
plt.legend(['y1(x)'])
# 2.Integration over the wavelength interval fro the superposition
nx = length(x)
for r=1:nx
       y41(r)= quad(@y41f,1.85,2.15,[],[],x(r))
# y41=quad(@y41f,1.85,2.15,0.1)
# y41 = quad(y41f,1.85,2.15,0.1)
plt.subplot(2, 1, 2)

plt.plot(x,y41)

plt.xlim(-200, 200)
plt.ylim(-0.5, 0.5)
;                  # PLOTS LIMITS                    
plt.xlabel('x')
plt.legend(['y41(x)'])
Out = np.cos(2*np.pi*x/Lamda)
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% C6SUPERS

% (i) of four different wavelength and (ii) for the integration over the same wavelength interval.
% Demonstration of the superposition of waves .
% The medium wavelength is ?m = 2

% 1. Summation over four waves

function C6SUPERS;

x = (-200:0.5:200);

Lamda1=1.85;
Lamda2=1.95;
Lamda3=2.05;
Lamda4=2.15;
y11=cos(2*pi*x/Lamda1);
y12=cos(2*pi*x/Lamda2);
y13=cos(2*pi*x/Lamda3);
y14=cos(2*pi*x/Lamda4);
y1=y11+y12+y13+y14;

figure(1);
subplot(2,1,1);
plot(x,y1);
axis([-200 200 -5 5]);                  % PLOTS LIMITS                    
xlabel('x');
legend('y1(x)');

% 2.Integration over the wavelength interval fro the superposition
nx = length(x);
for r=1:nx;
       y41(r)= quad(@y41f,1.85,2.15,[],[],x(r));    
end;
%y41=quad(@y41f,1.85,2.15,0.1);
%y41 = quad(y41f,1.85,2.15,0.1);


   

subplot(2,1,2);
plot(x,y41);
axis([-200 200 -0.5 0.5]);                  % PLOTS LIMITS                    
xlabel('x');
legend('y41(x)');


function Out = y41f(Lamda,x) 
Out = cos(2*pi*x./Lamda);`,cCode:"",defaultParams:{}},{id:"C7COHTEMS",title:"C7COHTEMS - C7COHTEMS\r",description:"C7COHTEMS\r",category:"Optics - Coherence",chapter:"4",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# C7COHTEMS

# Demonstration of the superposition of two waves when integrating over a
# wavelength interval.

# The medium wavelength is ?m = 2. A phase difference of ? in the x coordinate is studied
# for 0, 1/2 and 1 medium wavelength.


x = np.arange(-200, 200+1, 1)
LamdaM = 2
a1 = 0
a2 = 0.5
a3 = 1
Delta1 = LamdaM * a1
Delta2 = LamdaM * a2
Delta3 = LamdaM * a3
nx = length(x)
for r=1:nx
       y41(r)= quadl(@y41f,1.85,2.15,[],[],x(r))
       y51(r)= quadl(@y51f,1.85,2.15,[],[],x(r))
       y61(r)= quadl(@y61f,1.85,2.15,[],[],x(r))
# 1. Integration over the wavelength interval from 1.85 to 2.15 for the superposition of two
# of the waves, no phase difference, using ?1=?m*a1, where ?m is medium wavelength.
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(x,y41)

plt.xlim(-200, 200)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('x')
plt.legend(['y41(x)'])
# 2. Integration over the wavelength interval from 1.85 to 2.15 for the superposition of two
# waves, for phase difference, using ?= ??m*a2. The phase difference is (1/2) ?m.
# We have to use an expanded scale to see the result
plt.subplot(3, 1, 2)

plt.plot(x,y51)

plt.xlim(-200, 200)
plt.ylim(-0.05, 0.05)
;                  # PLOTS LIMITS                    
plt.xlabel('x')
plt.legend(['y51(x)'])
# 3. Integration over the wavelength interval from 1.85 to 2.15 for for the
# superposition of two waves, for phase difference, using ?3 = ??m*a3.
# The phase difference is 1 ?m. .

plt.subplot(3, 1, 3)

plt.plot(x,y61)

plt.xlim(-200, 200)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('x')
plt.legend(['y61(x)'])
Out = np.cos(2*np.pi*(x-Delta1)/Lamda) + np.cos(2*np.pi*x/Lamda)
Out = np.cos(2*np.pi*(x-Delta2)/Lamda) + np.cos(2*np.pi*x/Lamda)
Out = np.cos(2*np.pi*(x-Delta3)/Lamda) + np.cos(2*np.pi*x/Lamda)
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% C7COHTEMS

% Demonstration of the superposition of two waves when integrating over a
% wavelength interval.

% The medium wavelength is ?m = 2. A phase difference of ? in the x coordinate is studied
% for 0, 1/2 and 1 medium wavelength.

function C7COHTEMS;
global Delta1 Delta2 Delta3;
x = (-200:1:200);

LamdaM = 2;
a1 = 0;
a2 = 0.5;
a3 = 1;
Delta1 = LamdaM * a1;
Delta2 = LamdaM * a2;
Delta3 = LamdaM * a3;

nx = length(x);
for r=1:nx;
       y41(r)= quadl(@y41f,1.85,2.15,[],[],x(r));    
       y51(r)= quadl(@y51f,1.85,2.15,[],[],x(r));    
       y61(r)= quadl(@y61f,1.85,2.15,[],[],x(r)); 
end;



% 1. Integration over the wavelength interval from 1.85 to 2.15 for the superposition of two
% of the waves, no phase difference, using ?1=?m*a1, where ?m is medium wavelength.
figure(1);
subplot(3,1,1);
plot(x,y41);
axis([-200 200 -1 1]);                  % PLOTS LIMITS                    
xlabel('x');
legend('y41(x)');


% 2. Integration over the wavelength interval from 1.85 to 2.15 for the superposition of two
% waves, for phase difference, using ?= ??m*a2. The phase difference is (1/2) ?m.
% We have to use an expanded scale to see the result
subplot(3,1,2);
plot(x,y51);
axis([-200 200 -0.05 0.05]);                  % PLOTS LIMITS                    
xlabel('x');
legend('y51(x)');

% 3. Integration over the wavelength interval from 1.85 to 2.15 for for the
% superposition of two waves, for phase difference, using ?3 = ??m*a3.
% The phase difference is 1 ?m. .

subplot(3,1,3);
plot(x,y61);
axis([-200 200 -1 1]);                  % PLOTS LIMITS                    
xlabel('x');
legend('y61(x)');






function Out = y41f(Lamda,x) 
global Delta1;
Out = cos(2*pi*(x-Delta1)./Lamda) + cos(2*pi*x./Lamda);

function Out = y51f(Lamda,x) 
global Delta2;
Out = cos(2*pi*(x-Delta2)./Lamda) + cos(2*pi*x./Lamda);

function Out = y61f(Lamda,x) 
global Delta3;
Out = cos(2*pi*(x-Delta3)./Lamda) + cos(2*pi*x./Lamda);`,cCode:"",defaultParams:{}},{id:"C8CCOHINTS",title:"C8CCOHINTS - C8COHINTS\r",description:"C8COHINTS\r",category:"Optics - Coherence",chapter:"4",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# C8COHINTS

# Graphs for demonstration of the intensity of the superposition of two waves when
# integrating over a wavelength interval.

# The medium wavelength is ?m = 2. A phase difference of ? in the x coordinate is studied
# for 0, 1/2 and 1 medium wavelength.

x = np.arange(-200, 200+0.75, 0.75)
LamdaM = 2
a1 = 0
a2 = 0.5
a3 = 1
Delta1 =LamdaM * a1
Delta2 = LamdaM * a2
Delta3 = LamdaM * a3
# 1. Integration over the wavelength interval from 1.85 to 2.15 for the intensity
# superposition of two of the waves, no phase difference, using ????1 = ????m*a1,
# where ?m is the medium wavelength .
nx = length(x)
for r=1:nx
       y41(r)= quadl(@y41f,1.85,2.15,[],[],x(r))
       y51(r)= quadl(@y51f,1.85,2.15,[],[],x(r))
       y61(r)= quadl(@y61f,1.85,2.15,[],[],x(r))
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(x,y41**2)

plt.xlim(-200, 200)
plt.ylim(0, 0.4)
;                  # PLOTS LIMITS                    
plt.xlabel('x')
plt.legend(['y41(x)^2'])
# 2. Integration over the wavelength interval from 1.85 to 2.15 for the intensity
# superposition of two waves, for phase difference, using ? = a2.
# The phase difference is (1/2) ?m


plt.subplot(3, 1, 2)

plt.plot(x,y51**2)

plt.xlim(-200, 200)
plt.ylim(0, 0.01)
;                  # PLOTS LIMITS                    
plt.xlabel('x')
plt.legend(['y51(x)^2'])
# 3. Integration over the wavelength interval from 1.85 to 2.15 for the intensity superposition
# of two waves, for phase difference, using ?3 = LamdaM*a3.
# The phase difference is 1 LamdaM

plt.subplot(3, 1, 3)

plt.plot(x,y61**2)

plt.xlim(-200, 200)
plt.ylim(0, 0.4)
;                  # PLOTS LIMITS                    
plt.xlabel('x')
plt.legend(['y61(x)^2'])
Out = np.cos(2*np.pi*(x-Delta1)/Lamda) + np.cos(2*np.pi*x/Lamda)
Out = np.cos(2*np.pi*(x-Delta2)/Lamda) + np.cos(2*np.pi*x/Lamda)
Out = np.cos(2*np.pi*(x-Delta3)/Lamda) + np.cos(2*np.pi*x/Lamda)
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% C8COHINTS

% Graphs for demonstration of the intensity of the superposition of two waves when
% integrating over a wavelength interval.

% The medium wavelength is ?m = 2. A phase difference of ? in the x coordinate is studied
% for 0, 1/2 and 1 medium wavelength.
function C8CCOHINTS;
global Delta1 Delta2 Delta3;
x = (-200:0.75:200);

LamdaM = 2;

a1 = 0;
a2 = 0.5;
a3 = 1;


Delta1 =LamdaM * a1;
Delta2 = LamdaM * a2;
Delta3 = LamdaM * a3;

% 1. Integration over the wavelength interval from 1.85 to 2.15 for the intensity
% superposition of two of the waves, no phase difference, using ????1 = ????m*a1,
% where ?m is the medium wavelength .
nx = length(x);
for r=1:nx;
       y41(r)= quadl(@y41f,1.85,2.15,[],[],x(r));    
       y51(r)= quadl(@y51f,1.85,2.15,[],[],x(r));    
       y61(r)= quadl(@y61f,1.85,2.15,[],[],x(r)); 
end;

figure(1);
subplot(3,1,1);
plot(x,y41.^2);
axis([-200 200 0 0.4]);                  % PLOTS LIMITS                    
xlabel('x');
legend('y41(x)^2');

% 2. Integration over the wavelength interval from 1.85 to 2.15 for the intensity
% superposition of two waves, for phase difference, using ? = a2.
% The phase difference is (1/2) ?m


subplot(3,1,2);
plot(x,y51.^2);
axis([-200 200 0 0.01]);                  % PLOTS LIMITS                    
xlabel('x');
legend('y51(x)^2');

% 3. Integration over the wavelength interval from 1.85 to 2.15 for the intensity superposition
% of two waves, for phase difference, using ?3 = LamdaM*a3.
% The phase difference is 1 LamdaM

subplot(3,1,3);
plot(x,y61.^2);
axis([-200 200 0 0.4]);                  % PLOTS LIMITS                    
xlabel('x');
legend('y61(x)^2');




function Out = y41f(Lamda,x) 
global Delta1;
Out = cos(2*pi*(x-Delta1)./Lamda) + cos(2*pi*x./Lamda);

function Out = y51f(Lamda,x) 
global Delta2;
Out = cos(2*pi*(x-Delta2)./Lamda) + cos(2*pi*x./Lamda);

function Out = y61f(Lamda,x) 
global Delta3;
Out = cos(2*pi*(x-Delta3)./Lamda) + cos(2*pi*x./Lamda);`,cCode:"",defaultParams:{}},{id:"M11POELIPLIS",title:"M11POELIPLIS - M11POELIPLIS\r",description:"M11POELIPLIS\r",category:"Optics - Matrix Methods",chapter:"5",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# M11POELIPLIS
# Elliptical polarized light. Similar as discussed in FileFig.M9POELIP we plot
# np.cos( -2????x/360) on z- axis and np.cos( -2????x/360 + ????) on y-axis

x = np.arange(1, 360+1, 1)
Phi1 = 0
Phi2 = np.pi/4
Phi3 = np.pi/2
Phi4 = 3*np.pi/4
Phi5 = np.pi
Phi6 = (5*np.pi)/4
Phi7 = (3*np.pi)/2
Phi8 = 7*np.pi/4
y1 = np.cos(-2*np.pi*(x/360))
y2 = np.cos(-2*np.pi*(x/360))
y3 = np.cos(-2*np.pi*(x/360))
y4 = np.cos(-2*np.pi*(x/360))
y5 = np.cos(-2*np.pi*(x/360))
y6 = np.cos(-2*np.pi*(x/360))
y7 = np.cos(-2*np.pi*(x/360))
y8 = np.cos(-2*np.pi*(x/360))
yy1 = np.cos(-2*np.pi*(x/360) + Phi1)
yy2 = np.cos(-2*np.pi*(x/360) + Phi2)
yy3 = np.cos(-2*np.pi*(x/360) + Phi3)
yy4 = np.cos(-2*np.pi*(x/360) + Phi4)
yy5 = np.cos(-2*np.pi*(x/360) + Phi5)
yy6 = np.cos(-2*np.pi*(x/360) + Phi6)
yy7 = np.cos(-2*np.pi*(x/360) + Phi7)
yy8 = np.cos(-2*np.pi*(x/360) + Phi8)
fig = plt.figure(1)

plt.subplot(4, 1, 1)

plt.plot(y1,yy1)

plt.xlim(-1, 1)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('y1(x)')
plt.legend(['yy1(x)'])
plt.subplot(4, 1, 2)

plt.plot(y2,yy2)

plt.xlim(-1, 1)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('y2(x)')
plt.legend(['yy2(x)'])
plt.subplot(4, 1, 3)

plt.plot(y3,yy3)

plt.xlim(-1, 1)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('y3(x)')
plt.legend(['yy3(x)'])
plt.subplot(4, 1, 4)

plt.plot(y4,yy4)

plt.xlim(-1, 1)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('y4(x)')
plt.legend(['yy4(x)'])
fig = plt.figure(2)

plt.subplot(4, 1, 1)

plt.plot(y5,yy5)

plt.xlim(-1, 1)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('y5(x)')
plt.legend(['yy5(x)'])
plt.subplot(4, 1, 2)

plt.plot(y6,yy6)

plt.xlim(-1, 1)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('y6(x)')
plt.legend(['yy6(x)'])
plt.subplot(4, 1, 3)

plt.plot(y7,yy7)

plt.xlim(-1, 1)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('y7(x)')
plt.legend(['yy7(x)'])
plt.subplot(4, 1, 4)

plt.plot(y8,yy8)

plt.xlim(-1, 1)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('y8(x)')
plt.legend(['yy8(x)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% M11POELIPLIS
% Elliptical polarized light. Similar as discussed in FileFig.M9POELIP we plot
% cos( -2????x/360) on z- axis and cos( -2????x/360 + ????) on y-axis
function M11POELIPLIS;
x = (1:1:360);
Phi1 = 0;
Phi2 = pi/4;
Phi3 = pi/2;
Phi4 = 3*pi/4;
Phi5 = pi;
Phi6 = (5*pi)/4;
Phi7 = (3*pi)/2;
Phi8 = 7*pi/4;
y1 = cos(-2*pi*(x/360));
y2 = cos(-2*pi*(x/360));
y3 = cos(-2*pi*(x/360));
y4 = cos(-2*pi*(x/360));
y5 = cos(-2*pi*(x/360));
y6 = cos(-2*pi*(x/360));
y7 = cos(-2*pi*(x/360));
y8 = cos(-2*pi*(x/360));
yy1 = cos(-2*pi*(x/360) + Phi1);
yy2 = cos(-2*pi*(x/360) + Phi2);
yy3 = cos(-2*pi*(x/360) + Phi3);
yy4 = cos(-2*pi*(x/360) + Phi4);
yy5 = cos(-2*pi*(x/360) + Phi5);
yy6 = cos(-2*pi*(x/360) + Phi6);
yy7 = cos(-2*pi*(x/360) + Phi7);
yy8 = cos(-2*pi*(x/360) + Phi8);


figure(1);
subplot(4,1,1);
plot(y1,yy1);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y1(x)');
legend('yy1(x)');

subplot(4,1,2);
plot(y2,yy2);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y2(x)');
legend('yy2(x)');

subplot(4,1,3);
plot(y3,yy3);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y3(x)');
legend('yy3(x)');

subplot(4,1,4);
plot(y4,yy4);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y4(x)');
legend('yy4(x)');

figure(2);
subplot(4,1,1);
plot(y5,yy5);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y5(x)');
legend('yy5(x)');

subplot(4,1,2);
plot(y6,yy6);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y6(x)');
legend('yy6(x)');

subplot(4,1,3);
plot(y7,yy7);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y7(x)');
legend('yy7(x)');

subplot(4,1,4);
plot(y8,yy8);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y8(x)');
legend('yy8(x)');`,cCode:"",defaultParams:{}},{id:"of",title:"of - M2FRN2L\r",description:"M2FRN2L\r",category:"Optics - Matrix Methods",chapter:"5",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# M2FRN2L
# Fresnel's formulas as function of angle of incidence for first medium 1 and
# second medium 2 and n1<n2.
# .
# 1. Reflection coefficients.
# Absolute value and imaginary parts for p-case and s-case.

Theta = np.arange(0.1, 90+0.1, 0.1)
n1 = 1
n2 = 1.5
rp = ((n2/n1)*np.cos(2*(np.pi/360)*Theta)-np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/((n2/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
rs = (np.cos(2*(np.pi/360)*Theta)-(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.plot(Theta,np.abs(rp)
)
plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.title('p - case')
plt.legend(['abs(rp(	heta))'])
plt.subplot(2, 2, 2)

plt.plot(Theta,np.abs(rs)
)
plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.title('s - case')
plt.legend(['abs(rs(	heta))'])
plt.subplot(2, 2, 3)

plt.plot(Theta,angle(rp)
)
plt.xlim(0, 100)
plt.ylim(-4, 4)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['angle(rp(	heta))'])
plt.subplot(2, 2, 4)

plt.plot(Theta,angle(rs)
)
plt.xlim(0, 100)
plt.ylim(-4, 4)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['angle(rs(	heta))'])
# 2. Transimission coefficient.
# Absolute value and imaginary value part for p-case and s-case.

tp = (2*np.cos(2*(np.pi/360)*Theta))/((n2/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
ts = (2*np.cos(2*(np.pi/360)*Theta))/(np.cos(2*(np.pi/360)*Theta)+(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
fig = plt.figure(2)

plt.subplot(2, 2, 1)

plt.plot(Theta,np.abs(tp)
)
plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.title('p - case')
plt.legend(['abs(tp(	heta))'])
plt.subplot(2, 2, 2)

plt.plot(Theta,np.abs(ts)
)
plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.title('s - case')
plt.legend(['abs(ts(	heta))'])
plt.subplot(2, 2, 3)

plt.plot(Theta,angle(tp)
)
plt.xlim(0, 100)
plt.ylim(-2, 3)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['angle(tp(	heta))'])
plt.subplot(2, 2, 4)

plt.plot(Theta,angle(ts)
)
plt.xlim(0, 100)
plt.ylim(-2, 3)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['angle(ts(	heta))'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% M2FRN2L
% Fresnel's formulas as function of angle of incidence for first medium 1 and
% second medium 2 and n1<n2.
% .
% 1. Reflection coefficients.
% Absolute value and imaginary parts for p-case and s-case.
function M2FRN2L;
Theta = (0.1:0.1:90);
n1 = 1;
n2 = 1.5;

rp = ((n2/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./((n2/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));
rs = (cos(2*(pi/360)*Theta)-(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));

figure(1);
subplot(2,2,1);
plot(Theta,abs(rp));
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
title('p - case');
legend('abs(rp(	heta))');

subplot(2,2,2);
plot(Theta,abs(rs));
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
title('s - case');
legend('abs(rs(	heta))');

subplot(2,2,3);
plot(Theta,angle(rp));
axis([0 100 -4 4]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('angle(rp(	heta))');


subplot(2,2,4);
plot(Theta,angle(rs));
axis([0 100 -4 4]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('angle(rs(	heta))');

% 2. Transimission coefficient.
% Absolute value and imaginary value part for p-case and s-case.

tp = (2*cos(2*(pi/360)*Theta))./((n2/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));
ts = (2*cos(2*(pi/360)*Theta))./(cos(2*(pi/360)*Theta)+(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));

figure(2);
subplot(2,2,1);
plot(Theta,abs(tp));
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
title('p - case');
legend('abs(tp(	heta))');

subplot(2,2,2);
plot(Theta,abs(ts));
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
title('s - case');
legend('abs(ts(	heta))');

subplot(2,2,3);
plot(Theta,angle(tp));
axis([0 100 -2 3]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('angle(tp(	heta))');

subplot(2,2,4);
plot(Theta,angle(ts));
axis([0 100 -2 3]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('angle(ts(	heta))');

`,cCode:"",defaultParams:{}},{id:"of",title:"of - M3FRN2S\r",description:"M3FRN2S\r",category:"Optics - Matrix Methods",chapter:"5",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# M3FRN2S
# Fresnel's formulas as function of angle of incidence for first medium 1 and
# second medium 2 and n1>n2.

# 1. Reflection coefficients.
# Absolute value and imaginary parts for p-case and s-case.

n1 = 1.5
n2 = 1
Theta = np.arange(0.1, 90+0.1, 0.1)
rp = ((n2/n1)*np.cos(2*(np.pi/360)*Theta)-np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/((n2/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
rs = (np.cos(2*(np.pi/360)*Theta)-(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.plot(Theta,np.abs(rp)
)
plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.title('p - case')
plt.legend(['abs(rp(	heta))'])
plt.subplot(2, 2, 2)

plt.plot(Theta,np.abs(rs)
)
plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.title('s - case')
plt.legend(['abs(rs(	heta))'])
plt.subplot(2, 2, 3)

plt.plot(Theta,angle(rp)
)
plt.xlim(0, 100)
plt.ylim(-4, 4)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['angle(rp(	heta))'])
plt.subplot(2, 2, 4)

plt.plot(Theta,angle(rs)
)
plt.xlim(0, 100)
plt.ylim(-4, 4)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['angle(rs(	heta))'])
# 2. Transimission coefficient.
# Absolute value and imaginary value part for p-case and s-case.

tp = (2*np.cos(2*(np.pi/360)*Theta))/((n2/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
ts = (2*np.cos(2*(np.pi/360)*Theta))/(np.cos(2*(np.pi/360)*Theta)+(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
fig = plt.figure(2)

plt.subplot(2, 2, 1)

plt.plot(Theta,np.abs(tp)
)
plt.xlim(0, 100)
plt.ylim(0, 4)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.title('p - case')
plt.legend(['abs(tp(	heta))'])
plt.subplot(2, 2, 2)

plt.plot(Theta,np.abs(ts)
)
plt.xlim(0, 100)
plt.ylim(0, 2)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.title('s - case')
plt.legend(['abs(ts(	heta))'])
plt.subplot(2, 2, 3)

plt.plot(Theta,angle(tp)
)
plt.xlim(0, 100)
plt.ylim(-2, 3)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['angle(tp(	heta))'])
plt.subplot(2, 2, 4)

plt.plot(Theta,angle(ts)
)
plt.xlim(0, 100)
plt.ylim(-2, 3)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['angle(ts(	heta))'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% M3FRN2S
% Fresnel's formulas as function of angle of incidence for first medium 1 and
% second medium 2 and n1>n2.

% 1. Reflection coefficients.
% Absolute value and imaginary parts for p-case and s-case.
function M3FRN2S;
n1 = 1.5;
n2 = 1;

Theta = (0.1:0.1:90);


rp = ((n2/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./((n2/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));
rs = (cos(2*(pi/360)*Theta)-(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));

figure(1);
subplot(2,2,1);
plot(Theta,abs(rp));
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
title('p - case');
legend('abs(rp(	heta))');

subplot(2,2,2);
plot(Theta,abs(rs));
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
title('s - case');
legend('abs(rs(	heta))');

subplot(2,2,3);
plot(Theta,angle(rp));
axis([0 100 -4 4]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('angle(rp(	heta))');

subplot(2,2,4);
plot(Theta,angle(rs));
axis([0 100 -4 4]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('angle(rs(	heta))');

% 2. Transimission coefficient.
% Absolute value and imaginary value part for p-case and s-case.

tp = (2*cos(2*(pi/360)*Theta))./((n2/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));
ts = (2*cos(2*(pi/360)*Theta))./(cos(2*(pi/360)*Theta)+(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));

figure(2);
subplot(2,2,1);
plot(Theta,abs(tp));
axis([0 100 0 4]);                  % PLOTS LIMITS                    
xlabel('	heta');
title('p - case');
legend('abs(tp(	heta))');

subplot(2,2,2);
plot(Theta,abs(ts));
axis([0 100 0 2]);                  % PLOTS LIMITS                    
xlabel('	heta');
title('s - case');
legend('abs(ts(	heta))');

subplot(2,2,3);
plot(Theta,angle(tp));
axis([0 100 -2 3]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('angle(tp(	heta))');

subplot(2,2,4);
plot(Theta,angle(ts));
axis([0 100 -2 3]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('angle(ts(	heta))');



`,cCode:"",defaultParams:{}},{id:"M4SNELL",title:"M4SNELL - M4SNELL\r",description:"M4SNELL\r",category:"Optics - Matrix Methods",chapter:"5",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# M4SNELL
# Snellius Law for real and imaginary angle of refraction.
# We have n1 sin?1 = n2 sin?2, or ?2 = asin((n1/n2)sin?1).
# For n1> n2, after ?1is larger than the criticl angle, ?2 becomes complex.
# with x + iy for ?2



# 1. Graph of ????2 = asin((n1/n2)sin????1) from 0 to 90 for n1<n2

Theta1 = np.arange(1, 90+1, 1)
n1 = 1
n2 = 1.5
Theta2 = asin((n1/n2)*np.sin(2*(np.pi/360)*Theta1))
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(Theta1,Theta2)

plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
xlabel('	heta1','Fontsize',12)
plt.legend(['	heta2(	heta1)'])
plt.title('n1<n2')
# 2. Graph of ????2 = asin((n1/n2)sin????1) from 0 to 90 for n1>n2

Theta1 = np.arange(1, 90+1, 1)
nn1 = 1.5
nn2 =1
Theta2 = asin((nn1/nn2)*np.sin(2*(np.pi/360)*Theta1))
plt.subplot(2, 1, 2)

plt.plot(Theta1,Theta2)

plt.xlim(0, 60)
plt.ylim(0, 2)
;                  # PLOTS LIMITS                    
xlabel('	heta1','Fontsize',12)
plt.legend(['	heta2(	heta1)'])
plt.title('n1>n2')
# 3. Graphs of real and imaginary parts separately.

fig = plt.figure(2)

plt.subplot(1, 2, 1)

plt.plot(Theta1,real(Theta2)
)
plt.xlim(0, 100)
plt.ylim(0, 2)
;                  # PLOTS LIMITS                    
xlabel('	heta1','Fontsize',12)
plt.legend(['real(	heta2(	heta1))'])
plt.subplot(1, 2, 2)

plt.plot(Theta1,-imag(Theta2)
)
plt.xlim(0, 100)
plt.ylim(-1, 0)
;                  # PLOTS LIMITS                    
xlabel('	heta1','Fontsize',12)
plt.legend(['-imag(	heta2(	heta1))'])
Thetac = (360/(2*np.pi))*asin(nn2/nn1)
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% M4SNELL
% Snellius Law for real and imaginary angle of refraction.
% We have n1 sin?1 = n2 sin?2, or ?2 = asin((n1/n2)sin?1).
% For n1> n2, after ?1is larger than the criticl angle, ?2 becomes complex.
% with x + iy for ?2


function M4SNELL;
% 1. Graph of ????2 = asin((n1/n2)sin????1) from 0 to 90 for n1<n2

Theta1 = (1:1:90);
n1 = 1;
n2 = 1.5;
Theta2 = asin((n1/n2)*sin(2*(pi/360)*Theta1));

figure(1);
subplot(2,1,1);
plot(Theta1,Theta2);
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta1','Fontsize',12);
legend('	heta2(	heta1)');
title('n1<n2');

% 2. Graph of ????2 = asin((n1/n2)sin????1) from 0 to 90 for n1>n2

Theta1 = (1:1:90);
nn1 = 1.5;
nn2 =1;
Theta2 = asin((nn1/nn2)*sin(2*(pi/360)*Theta1));

subplot(2,1,2);
plot(Theta1,Theta2);
axis([0 60 0 2]);                  % PLOTS LIMITS                    
xlabel('	heta1','Fontsize',12);
legend('	heta2(	heta1)');
title('n1>n2');

% 3. Graphs of real and imaginary parts separately.

figure(2);
subplot(1,2,1);
plot(Theta1,real(Theta2));
axis([0 100 0 2]);                  % PLOTS LIMITS                    
xlabel('	heta1','Fontsize',12);
legend('real(	heta2(	heta1))');

subplot(1,2,2);
plot(Theta1,-imag(Theta2));
axis([0 100 -1 0]);                  % PLOTS LIMITS                    
xlabel('	heta1','Fontsize',12);
legend('-imag(	heta2(	heta1))');


Thetac = (360/(2*pi))*asin(nn2/nn1)`,cCode:"",defaultParams:{}},{id:"of",title:"of - M5FRINTN2L\r",description:"M5FRINTN2L\r",category:"Optics - Matrix Methods",chapter:"5",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# M5FRINTN2L

# Fresnel's formulas as function of angle of incidence for n1<n2
# for Rp = rp**2, Rs = rs**2, and Tp = 1- Rp, Ts = 1-Rs

# 1. Amplitude reflection coefficients.


n1 = 1
n2 = 1.5
Theta = np.arange(0, 90+0.4, 0.4)
rp = ((n2/n1)*np.cos(2*(np.pi/360)*Theta)-np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/((n2/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
rs = (np.cos(2*(np.pi/360)*Theta)-(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
# 2. Reflection: Intensities

Rp = rp**2
Rs = rs**2
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.plot(Theta,rp**2)

plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.title('p - case')
plt.legend(['rp(	heta)^2'])
plt.subplot(2, 2, 2)

plt.plot(Theta,rs**2)

plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.title('s - case')
plt.legend(['rs(	heta)^2'])
# 3. Transmission: Intensities

Tp = 1 - Rp
Ts = 1 - Rs
plt.subplot(2, 2, 3)

plt.plot(Theta,Tp)

plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['Tp(	heta)'])
plt.subplot(2, 2, 4)

plt.plot(Theta,Ts)

plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['Ts(	heta)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% M5FRINTN2L

% Fresnel's formulas as function of angle of incidence for n1<n2
% for Rp = rp^2, Rs = rs^2, and Tp = 1- Rp, Ts = 1-Rs

% 1. Amplitude reflection coefficients.

function M5FRINTN2L;
n1 = 1;
n2 = 1.5;
Theta = (0:0.4:90);

rp = ((n2/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./((n2/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));
rs = (cos(2*(pi/360)*Theta)-(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));

% 2. Reflection: Intensities

Rp = rp.^2;
Rs = rs.^2;

figure(1);
subplot(2,2,1);
plot(Theta,rp.^2);
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
title('p - case');
legend('rp(	heta)^2');

subplot(2,2,2);
plot(Theta,rs.^2);
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
title('s - case');
legend('rs(	heta)^2');

% 3. Transmission: Intensities

Tp = 1 - Rp;
Ts = 1 - Rs;

subplot(2,2,3);
plot(Theta,Tp);
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('Tp(	heta)');

subplot(2,2,4);
plot(Theta,Ts);
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('Ts(	heta)');
`,cCode:"",defaultParams:{}},{id:"of",title:"of - M6FRINTN2S\r",description:"M6FRINTN2S\r",category:"Optics - Matrix Methods",chapter:"5",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# M6FRINTN2S

# Fresnel's formulas as function of angle of incidence for n1>n2
# for Rp = rp**2, Rs = rs**2, and Tp = 1- Rp, Ts = 1-Rs

# 1. Amplitude reflection coefficients.


n1 = 1.5
n2 = 1
Theta = np.arange(0, 90+0.01, 0.01)
rp = ((n2/n1)*np.cos(2*(np.pi/360)*Theta)-np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/((n2/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
rs = (np.cos(2*(np.pi/360)*Theta)-(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
# 2. Reflection: Intensities

Rp = rp*conj(rp)
Rs = rs*conj(rs)
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.plot(Theta,Rp)

plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.title('p - case')
plt.legend(['Rp(	heta)'])
plt.subplot(2, 2, 2)

plt.plot(Theta,Rs)

plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.title('s - case')
plt.legend(['Rs(	heta)'])
# 3. Transmission: Intensities

Tp = 1 - Rp
Ts = 1 - Rs
plt.subplot(2, 2, 3)

plt.plot(Theta,Tp)

plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.title('p - case')
plt.legend(['Tp(	heta)'])
plt.subplot(2, 2, 4)

plt.plot(Theta,Ts)

plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.title('s - case')
plt.legend(['Ts(	heta)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% M6FRINTN2S

% Fresnel's formulas as function of angle of incidence for n1>n2
% for Rp = rp^2, Rs = rs^2, and Tp = 1- Rp, Ts = 1-Rs

% 1. Amplitude reflection coefficients.

function M6FRINTN2S;

n1 = 1.5;
n2 = 1;
Theta = (0:0.01:90);

rp = ((n2/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./((n2/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));
rs = (cos(2*(pi/360)*Theta)-(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));

% 2. Reflection: Intensities

Rp = rp.*conj(rp);
Rs = rs.*conj(rs);


figure(1);
subplot(2,2,1);
plot(Theta,Rp);
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
title('p - case');
legend('Rp(	heta)');

subplot(2,2,2);
plot(Theta,Rs);
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
title('s - case');
legend('Rs(	heta)');

% 3. Transmission: Intensities

Tp = 1 - Rp;
Ts = 1 - Rs;


subplot(2,2,3);
plot(Theta,Tp);
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
title('p - case');
legend('Tp(	heta)');

subplot(2,2,4);
plot(Theta,Ts);
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
title('s - case');
legend('Ts(	heta)');`,cCode:"",defaultParams:{}},{id:"M7FREVA",title:"M7FREVA - M7FREVA. Penetration into the less dense medium at total reflection.\r",description:"M7FREVA. Penetration into the less dense medium at total reflection.\r",category:"Optics - Matrix Methods",chapter:"5",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# M7FREVA. Penetration into the less dense medium at total reflection.

# Exponential factor for decrease of amplitude into the less
# dense medium with -Y for two different refractive indices:

# ?c is the critical angle

# Different refractive indices. The value "a" is used to "be off" the critical angle


# First we set
a = 2
n1 = 1.5
n2 = 1
Lamda = 0.0005
nn1 = 3.4
nn2 = 1
z = asin(n2/n1)
zz = asin(nn2/nn1)
Y = np.arange(-0.00005, -0.001+-0.00005, -0.00005)
Theta1c = z * 360/(2*np.pi)
Theta2c = zz * 360/(2*np.pi)

# Theta1c = 41.81
# Theta2c = 17.105
Theta1  = Theta1c + 2
Theta2 =  Theta2c + a
k2 = 2*(np.pi/Lamda) * n2
A = 1
kk2 = 2 * (np.pi/Lamda) * nn2
y1 = A*np.exp(Y*k2*np.sqrt((n1*np.sin((2*np.pi/360)*Theta1)/n2)**2 - 1))
y2 = A*np.exp(Y*kk2*np.sqrt((nn1*np.sin((2*np.pi/360)*Theta2)/nn2)**2 - 1))
fig = plt.figure(1)

plt.plot(Y,y1,Y,y2)

plt.xlim(-1e-3, 0)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('Y')
plt.legend(['y1(Y)', 'y2(Y)'])
# To study different angles, make refractive indices the same for both and change "a"
# to values larger than 2.
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% M7FREVA. Penetration into the less dense medium at total reflection.

% Exponential factor for decrease of amplitude into the less
% dense medium with -Y for two different refractive indices:

% ?c is the critical angle

% Different refractive indices. The value "a" is used to "be off" the critical angle

function M7FREVA;
% First we set
a = 2;
n1 = 1.5;
n2 = 1;
Lamda = 0.0005;
nn1 = 3.4;
nn2 = 1;
z = asin(n2/n1);  
zz = asin(nn2/nn1);

Y = (-0.00005:-0.00005:-0.001);

Theta1c = z * 360/(2*pi)
Theta2c = zz * 360/(2*pi)

% Theta1c = 41.81;
% Theta2c = 17.105;

Theta1  = Theta1c + 2;
Theta2 =  Theta2c + a;

k2 = 2*(pi/Lamda) * n2;
A = 1;
kk2 = 2 * (pi/Lamda) * nn2;

y1 = A*exp(Y*k2*sqrt((n1*sin((2*pi/360)*Theta1)/n2)^2 - 1));
y2 = A*exp(Y*kk2*sqrt((nn1*sin((2*pi/360)*Theta2)/nn2)^2 - 1));

figure(1);
plot(Y,y1,Y,y2);
axis([-1e-3 0 0 1]);                  % PLOTS LIMITS                    
xlabel('Y');
legend('y1(Y)','y2(Y)');

% To study different angles, make refractive indices the same for both and change "a"
% to values larger than 2.`,cCode:"",defaultParams:{}},{id:"M8POLIN",title:"M8POLIN - M8POLIN\r",description:"M8POLIN\r",category:"Optics - Matrix Methods",chapter:"5",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# M8POLIN
# Linearly polarized light.
# Graph of np.cos( 2?x/360) on x-axis and np.cos(2?x/360 + ?) on y-axis

x = np.arange(1, 360+1, 1)
# 1. Before enterting the birifringent plate X = 0
Phi1 = 0
y1 = np.cos(2*np.pi*(x/360))
z1 = np.cos(2*np.pi*(x/360) +  (2*np.pi*Phi1)/360)
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.plot(x,y1,x,z1)

plt.xlim(0, 400)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('x')
plt.title('Each seperate')
plt.legend(['y1(x)', 'z1(x)'])
plt.subplot(2, 2, 2)

plt.plot(y1,z1)

plt.xlim(-1, 1)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('y1')
plt.title('One plotted against the other')
plt.legend(['z1(y1)'])
# 2. At the plane X = L
Phi2 = 180
y1 = np.cos(2*np.pi*(x/360))
z1 = np.cos(2*np.pi*(x/360) +  (2*np.pi*Phi2)/360)
plt.subplot(2, 2, 3)

plt.plot(x,y1,x,z1)

plt.xlim(0, 400)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('x')
plt.title('Each seperate')
plt.legend(['y1(x)', 'z1(x)'])
plt.subplot(2, 2, 4)

plt.plot(y1,z1)

plt.xlim(-1, 1)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('y1')
plt.title('One plotted against the other')
plt.legend(['z1(y1)'])
# The resulting vibration is along the diagonal
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% M8POLIN
% Linearly polarized light.
% Graph of cos( 2?x/360) on x-axis and cos(2?x/360 + ?) on y-axis
function M8POLIN;
x = (1:1:360);

% 1. Before enterting the birifringent plate X = 0;
Phi1 = 0;
y1 = cos(2*pi*(x/360));
z1 = cos(2*pi*(x/360) +  (2*pi*Phi1)/360);

figure(1);
subplot(2,2,1);
plot(x,y1,x,z1);
axis([0 400 -1 1]);                  % PLOTS LIMITS                    
xlabel('x');
title('Each seperate');
legend('y1(x)','z1(x)');

subplot(2,2,2);
plot(y1,z1);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y1');
title('One plotted against the other');
legend('z1(y1)');

% 2. At the plane X = L
Phi2 = 180;
y1 = cos(2*pi*(x/360));
z1 = cos(2*pi*(x/360) +  (2*pi*Phi2)/360);

subplot(2,2,3);
plot(x,y1,x,z1);
axis([0 400 -1 1]);                  % PLOTS LIMITS                    
xlabel('x');
title('Each seperate');
legend('y1(x)','z1(x)');

subplot(2,2,4);
plot(y1,z1);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y1');
title('One plotted against the other');
legend('z1(y1)');

% The resulting vibration is along the diagonal`,cCode:"",defaultParams:{}},{id:"M9POELIP",title:"M9POELIP - M9POELIP Circular and ellipticlly polarized light\r",description:"M9POELIP Circular and ellipticlly polarized light\r",category:"Optics - Matrix Methods",chapter:"5",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# M9POELIP Circular and ellipticlly polarized light

# To demonstrate of circular or elliptically polarized light turning "left or "right".
# Four graphs are shown, extending from 0 to 90, 0 to 160, 0 to 235,
# and 0 to 315 degrees.

# The angle ranges (x) correspond to chosen time ranges. Left and right
# polarized light is described by positive or negative ?=?/2 in one component:
# Positive ?: We have y = Ey = A np.cos(-x), yy = Ez = Acos(-x +?) = -Asin(-x),

# Negative ?: We have y = Ey = A np.cos(-x), yy = Ez = Acos(-x -?) = Asin(-x),
# We write for Ez = bAsin(x). When looking in direction of the incoming light,
# "b = -1" is for "left" polarized light (counter clock wise), "b= 1" for "right"
# polarized light (clock wise).


x1 = np.arange(1, 90+1, 1)
x2 = np.arange(1, 160+1, 1)
x3 = np.arange(1, 235+1, 1)
x4 = np.arange(1, 315+1, 1)
b = -1
y1 = np.cos(-2*np.pi*(x1/360))
y2 = np.cos(-2*np.pi*(x2/360))
y3 = np.cos(-2*np.pi*(x3/360))
y4 = np.cos(-2*np.pi*(x4/360))
yy1 = b*np.sin(-2*np.pi*(x1/360))
yy2 = b*np.sin(-2*np.pi*(x2/360))
yy3 = b*np.sin(-2*np.pi*(x3/360))
yy4 = b*np.sin(-2*np.pi*(x4/360))
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.plot(y1,yy1)

plt.xlim(-1, 1)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('y1(x1)')
plt.legend(['yy1(x1)'])
plt.subplot(2, 2, 2)

plt.plot(y2,yy2)

plt.xlim(-1, 1)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('y2(x2)')
plt.legend(['yy2(x2)'])
plt.subplot(2, 2, 3)

plt.plot(y3,yy3)

plt.xlim(-1, 1)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('y3(x3)')
plt.legend(['yy3(x3)'])
plt.subplot(2, 2, 4)

plt.plot(y4,yy4)

plt.xlim(-1, 1)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('y4(x4)')
plt.legend(['yy4(x4)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% M9POELIP Circular and ellipticlly polarized light

% To demonstrate of circular or elliptically polarized light turning "left or "right".
% Four graphs are shown, extending from 0 to 90, 0 to 160, 0 to 235,
% and 0 to 315 degrees.

% The angle ranges (x) correspond to chosen time ranges. Left and right
% polarized light is described by positive or negative ?=?/2 in one component:
% Positive ?: We have y = Ey = A cos(-x), yy = Ez = Acos(-x +?) = -Asin(-x),

% Negative ?: We have y = Ey = A cos(-x), yy = Ez = Acos(-x -?) = Asin(-x),
% We write for Ez = bAsin(x). When looking in direction of the incoming light,
% "b = -1" is for "left" polarized light (counter clock wise), "b= 1" for "right"
% polarized light (clock wise).

function M9POELIP;
x1 = (1:1:90);
x2 = (1:1:160);
x3 = (1:1:235);
x4 = (1:1:315);
b = -1;

y1 = cos(-2*pi*(x1/360));
y2 = cos(-2*pi*(x2/360));
y3 = cos(-2*pi*(x3/360));
y4 = cos(-2*pi*(x4/360));

yy1 = b*sin(-2*pi*(x1/360));
yy2 = b*sin(-2*pi*(x2/360));
yy3 = b*sin(-2*pi*(x3/360));
yy4 = b*sin(-2*pi*(x4/360));

figure(1);
subplot(2,2,1);
plot(y1,yy1);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y1(x1)');
legend('yy1(x1)');

subplot(2,2,2);
plot(y2,yy2);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y2(x2)');
legend('yy2(x2)');

subplot(2,2,3);
plot(y3,yy3);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y3(x3)');
legend('yy3(x3)');


subplot(2,2,4);
plot(y4,yy4);
axis([-1 1 -1 1]);                  % PLOTS LIMITS                    
xlabel('y4(x4)');
legend('yy4(x4)');
`,cCode:"",defaultParams:{}},{id:"of",title:"of - MA3DIFINTRO\r",description:"MA3DIFINTRO\r",category:"Optics - Matrix Methods",chapter:"5",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# MA3DIFINTRO

# Fresnel's formulas as function of angle of incidence for n2<n1
# Graph of arg(zr) - arg(zrr).

# Complex zr for parallel and zrr for perpendicular case.

Theta = np.arange(0, 90+1, 1)
n2 = 1
n1 = 1.9
rp = ((n2/n1)*np.cos(2*(np.pi/360)*Theta)-np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/((n2/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
rs = (np.cos(2*(np.pi/360)*Theta)-(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
fig = plt.figure(1)

plt.plot(Theta,angle(rp)
-angle(rs))
plt.xlim(0, 100)
plt.ylim(-3.5, 3.5)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['angle(rp(	heta))-angle(rs(	heta))'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% MA3DIFINTRO

% Fresnel's formulas as function of angle of incidence for n2<n1
% Graph of arg(zr) - arg(zrr).

% Complex zr for parallel and zrr for perpendicular case.
function MA3DIFINTRO;
Theta = (0:1:90);
n2 = 1;
n1 = 1.9;

rp = ((n2/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./((n2/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));
rs = (cos(2*(pi/360)*Theta)-(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));


figure(1);
plot(Theta,angle(rp)-angle(rs));
axis([0 100 -3.5 3.5]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('angle(rp(	heta))-angle(rs(	heta))');`,cCode:"",defaultParams:{}},{id:"N1RECBOX",title:"N1RECBOX - N1RECBOX\r",description:"N1RECBOX\r",category:"Optics - Other",chapter:"6",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64
from mpl_toolkits.mplot3d import Axes3D

# N1RECBOX
# Modes of the rectangular box in two dimensions 
# Standing sine waves in x and y direction. Mode number and constants.
# x direction n1 and a
# y direction n2 and b
# The wave in each direction is shown and Contour and surface plots.
# The square is also shown as surface plot.

N = 20
a = 40
b = 40
n1 = 2
n2 = 2
Lamda1 = 2 * a /n1
Lamda2 = 2 * b /n2
i =(0:1:N)
j =(0:1:N)
x = (-40) + 2.001*i
y = (-40) + 2.0001*j
y1 = np.sin(2*np.pi*x/Lamda1)
y2 = np.sin(2*np.pi*y/Lamda2)
# 1. One Dimension
fig = plt.figure(1)

plt.subplot(1, 2, 1)

plt.plot(x,y1)

plt.xlim(-40, 20)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('Xi')
plt.legend(['y1(x)'])
plt.subplot(1, 2, 2)

plt.plot(y,y2)

plt.xlim(-40, 20)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('Yj')
plt.legend(['y2(y)'])
# 2. Amplitude, 2D
nx = length(x)
ny = length(y)
Z = zeros(nx,ny)
for r=1:nx
        for c=1:ny
            M11(r,c)= y1(r)*y2(c)
            MM11(r,c)= (y1(r)*y2(c))**2
fig = plt.figure(2)

plt.subplot(2, 2, 1)

plt.contour(M11)
plt.xlim(0, 20)
plt.ylim(0, 20)

plt.subplot(2, 2, 2)

ax = plt.gca()
if not hasattr(ax, 'plot_surface'):
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')
    X, Y = np.meshgrid(np.arange(M11.shape[1]), np.arange(M11.shape[0]))
    ax.plot_surface(X, Y, M11, cmap='viridis')
axis([0 20 0 20 -1 1])

# 3. Intensity, 2D

plt.subplot(2, 2, 3)

plt.contour(MM11)
plt.xlim(0, 20)
plt.ylim(0, 20)

plt.subplot(2, 2, 4)

ax = plt.gca()
if not hasattr(ax, 'plot_surface'):
    fig = plt.figure()
    ax = fig.add_subplot(111, projection='3d')
    X, Y = np.meshgrid(np.arange(MM11.shape[1]), np.arange(MM11.shape[0]))
    ax.plot_surface(X, Y, MM11, cmap='viridis')
axis([0 20 0 20 0 1])

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% N1RECBOX
% Modes of the rectangular box in two dimensions 
% Standing sine waves in x and y direction. Mode number and constants.
% x direction n1 and a
% y direction n2 and b
% The wave in each direction is shown and Contour and surface plots.
% The square is also shown as surface plot.
function N1RECBOX;
N = 20;
a = 40;
b = 40;
n1 = 2;
n2 = 2;

Lamda1 = 2 * a /n1;
Lamda2 = 2 * b /n2;

i =(0:1:N); 
j =(0:1:N);

x = (-40) + 2.001*i;
y = (-40) + 2.0001*j;

y1 = sin(2*pi*x/Lamda1);
y2 = sin(2*pi*y/Lamda2);

% 1. One Dimension
figure(1);
subplot(1,2,1);
plot(x,y1);
axis([-40 20 -1 1]);                  % PLOTS LIMITS                    
xlabel('Xi');
legend('y1(x)');

subplot(1,2,2);
plot(y,y2);
axis([-40 20 -1 1]);                  % PLOTS LIMITS                    
xlabel('Yj');
legend('y2(y)');

% 2. Amplitude, 2D
nx = length(x);
ny = length(y);
Z = zeros(nx,ny);
for r=1:nx;
        for c=1:ny;
            M11(r,c)= y1(r)*y2(c);
            MM11(r,c)= (y1(r)*y2(c))^2;
        end;
end;

figure(2);
subplot(2,2,1);
              
contour(M11);
axis([0 20 0 20]);  



subplot(2,2,2);
mesh(M11);
axis([0 20 0 20 -1 1])

% 3. Intensity, 2D

subplot(2,2,3);              
contour(MM11);
axis([0 20 0 20]);  

subplot(2,2,4);
mesh(MM11);
axis([0 20 0 20 0 1])
`,cCode:"",defaultParams:{}},{id:"N4SYMULANTb",title:"N4SYMULANTb - N4SYMULANTb Page 2 \r",description:"N4SYMULANTb Page 2 \r",category:"Optics - Other",chapter:"6",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# N4SYMULANTb Page 2 
# Numerical calculation

n1 = 1
n2 = 1.5
n3 = 2
# i = np.sqrt(-1)
# for a single interface, that is
M11= 1
M12 = 0
M21 = 0
M22 = 1
tt = (-2*n1*(M21*M12-M22*M11)/(M21 + M22*n1 + n3*M11 + n3*M12*n1))* conj(-2*n1*(M21*M12-M22*M11)/(M21 + M22*n1 + n3*M11 + n3*M12*n1))
# tt = 0.444
R = ((-(-n3*M12*n1-M22*n1+M21+n3*M11))/(M21+M22*n1+n3*M11+n3*M12*n1))**2
# R = 0.111
# One sees that R+TT is not 1 and tt is not the transmitted power
# However if n3*tt is the transmitted power T, one has:
T = n3*tt
# T=0.889
# T+R = 1
# and if n1 is not 1 we have more generally to write:
T = (n3/n1)*tt
# For antireflection coating one has eq. 6.27
nn1 = 1
nn2 = np.arange(1.1, 2+0.01, 0.01)
nn3 = 1.5
MM12 = (-i)/nn2
MM21 = (-i)*nn2
r = ((-(-n3*MM12*n1+MM21))/(MM21+n3*MM12*n1))
# since -i cancels out we have
MM12 = 1/nn2
MM21 = nn2
R = ((-(-nn3*MM12*nn1+MM21))/(MM21+nn3*MM12*nn1))**2
fig = plt.figure(1)

plt.plot(nn2,R)

plt.xlim(1, 1.5)
plt.ylim(0, 0.1)
;                  # PLOTS LIMITS                    
plt.xlabel('nn2')
plt.legend(['R(nn2)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% N4SYMULANTb Page 2 
% Numerical calculation
function N4SYMULANTb;
n1 = 1;
n2 = 1.5;
n3 = 2;
% i = sqrt(-1);
% for a single interface, that is
M11= 1;
M12 = 0;
M21 = 0;
M22 = 1;

tt = (-2*n1*(M21*M12-M22*M11)/(M21 + M22*n1 + n3*M11 + n3*M12*n1))* conj(-2*n1*(M21*M12-M22*M11)/(M21 + M22*n1 + n3*M11 + n3*M12*n1))
% tt = 0.444;

R = ((-(-n3*M12*n1-M22*n1+M21+n3*M11))/(M21+M22*n1+n3*M11+n3*M12*n1))^2;
% R = 0.111;

% One sees that R+TT is not 1 and tt is not the transmitted power
% However if n3*tt is the transmitted power T, one has
T = n3*tt;
% T=0.889
% T+R = 1;
% and if n1 is not 1 we have more generally to write
T = (n3/n1)*tt;
% For antireflection coating one has eq. 6.27
nn1 = 1;
nn2 = (1.1:0.01:2);
nn3 = 1.5;
MM12 = (-i)./nn2;
MM21 = (-i).*nn2;

r = ((-(-n3*MM12*n1+MM21))/(MM21+n3*MM12*n1));




% since -i cancels out we have
MM12 = 1./nn2;
MM21 = nn2;

R = ((-(-nn3*MM12*nn1+MM21))./(MM21+nn3*MM12*nn1)).^2;
figure(1);
plot(nn2,R);
axis([1 1.5 0 0.1]);                  % PLOTS LIMITS                    
xlabel('nn2');
legend('R(nn2)');
`,cCode:"",defaultParams:{}},{id:"N6PLSPS",title:"N6PLSPS - N6PLSPS\r",description:"N6PLSPS\r",category:"Optics - Other",chapter:"6",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# N6PLSPS
# Wave traveling with total internal reflection through a planar waveguide.
# Resonance condition of s-polarization.
# Global definition of n1, n2, n3, d and ? above the graph


n1 = 1.5
n2 = 1
n3 = 1
d = 18
Lamda = 2
Theta = np.arange(0, 90+1, 1)
y = 2*np.pi*n1*(d/Lamda)*np.cos(2*np.pi*Theta/360)
zs1 = (np.sqrt((n1**2)*(np.sin(2*np.pi*Theta/360))**2-n2**2))/(n1*np.cos(2*np.pi*Theta/360))
ys1 = -atan(zs1)
zs3 = (np.sqrt((n1**2)*(np.sin(2*np.pi*Theta/360))**2-n3**2))/(n1*np.cos(2*np.pi*Theta/360))
ys3 = -atan(zs3)
# ys is for m=1, yys for m=2, yyys for m=3
# For these parameters the angle
# Theta of the first three possible modes is determined

ys = -ys1 -ys3 + np.pi
yys = -ys1 -ys3 + np.pi*2
yyys = -ys1 -ys3 + np.pi*3
# Global Definition
Thetac = asin(n2/n1)
ThetaThetac = 360*Thetac/(2*np.pi)
# ThetaThetac = 41.81

fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(Theta,y,Theta,ys,Theta,yys,Theta,yyys)

plt.xlim(0, 90)
plt.ylim(0, 15)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['y(	heta)', 'ys(	heta)', 'yys(	heta)', 'yyys(	heta)'])
# At the cross-over point of y with ys, yys, or yyys respectively, the resonance condition is
# fulfilled.
# The functions ys, yys and yyys are complex in the region from horizontal appearance to
# zero. This is shown in the next graph where the argument is plotted. The complex region
# has to be disregarded for the determination of the cross-over point.

plt.subplot(2, 1, 2)

plt.plot(Theta,angle(ys)
,Theta,angle(yys),Theta,angle(yyys))
plt.xlim(0, 100)
plt.ylim(0, 0.6)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['angle(ys(	heta))', 'angle(yys(	heta))', 'angle(yyys(	heta))'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% N6PLSPS
% Wave traveling with total internal reflection through a planar waveguide.
% Resonance condition of s-polarization.
% Global definition of n1, n2, n3, d and ? above the graph

function N6PLSPS;
n1 = 1.5;
n2 = 1;
n3 = 1;
d = 18;
Lamda = 2;
Theta = (0:1:90);
y = 2*pi*n1*(d/Lamda)*cos(2*pi*Theta/360);
zs1 = (sqrt((n1^2)*(sin(2*pi*Theta/360)).^2-n2^2))./(n1*cos(2*pi*Theta/360));
ys1 = -atan(zs1);
zs3 = (sqrt((n1^2)*(sin(2*pi*Theta/360)).^2-n3^2))./(n1*cos(2*pi*Theta/360));
ys3 = -atan(zs3);

% ys is for m=1, yys for m=2, yyys for m=3
% For these parameters the angle
% Theta of the first three possible modes is determined

ys = -ys1 -ys3 + pi;
yys = -ys1 -ys3 + pi*2;
yyys = -ys1 -ys3 + pi*3;

%Global Definition
Thetac = asin(n2/n1);
ThetaThetac = 360*Thetac/(2*pi)
% ThetaThetac = 41.81

figure(1);
subplot(2,1,1);
plot(Theta,y,Theta,ys,Theta,yys,Theta,yyys);
axis([0 90 0 15]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('y(	heta)','ys(	heta)','yys(	heta)','yyys(	heta)');


% At the cross-over point of y with ys, yys, or yyys respectively, the resonance condition is
% fulfilled.
% The functions ys, yys and yyys are complex in the region from horizontal appearance to
% zero. This is shown in the next graph where the argument is plotted. The complex region
% has to be disregarded for the determination of the cross-over point.

subplot(2,1,2);
plot(Theta,angle(ys),Theta,angle(yys),Theta,angle(yyys));
axis([0 100 0 0.6]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('angle(ys(	heta))','angle(yys(	heta))','angle(yyys(	heta))');`,cCode:"",defaultParams:{}},{id:"N7PLPPS",title:"N7PLPPS - N7PLPPS\r",description:"N7PLPPS\r",category:"Optics - Other",chapter:"6",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# N7PLPPS
# Wave traveling with total internal reflection through a planar waveguide.
# Resonance condition for p-polarization.
# global definition of n1,n2,n3, d and ? above the graph

n1 = 1.5
n2 = 1
n3 = 1
d = 6
Lamda = 4.3
LamdaLamda = Lamda/n1
# LamdaLamda = 2.867

Theta = np.arange(0, 90+1, 1)
y = 2*np.pi*n1*(d/Lamda)*np.cos(2*np.pi*Theta/360)
zp1 = (np.sqrt((n1**2)*(np.sin(2*np.pi*Theta/360))**2-n2**2)*n1)/((n2**2)*np.cos(2*np.pi*Theta/360))
yp1 = -atan(zp1)
zp3 = (np.sqrt((n1**2)*(np.sin(2*np.pi*Theta/360))**2-n3**2)*n1)/((n3**2)*np.cos(2*np.pi*Theta/360))
yp3 = -atan(zp3)
# For the graph we use yp for m=1, yyp for m=2, yyyp for m=3

yp = -yp1 -yp3 + np.pi
yyp = -yp1 -yp3 + np.pi*2
yyyp = -yp1 -yp3 + np.pi*3
# Global Definition
Thetac = asin(n2/n1)
ThetaThetac = 360*Thetac/(2*np.pi)
# ThetaThetac = 41.81

fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(Theta,y,Theta,yp,Theta,yyp,Theta,yyyp)

plt.xlim(0, 90)
plt.ylim(0, 15)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['y(	heta)', 'yp(	heta)', 'yyp(	heta)', 'yyyp(	heta)'])
# At the cross-over point of y with yp, yyp, or yyyp respectively, the resonance condition is
# fulfilled.
# The functions yp, yyp and yyyp are complex in the region from horizontal appearance to
# zero. This is shown in the next graph where the argument is plotted. The complex region
# has to be disregarded for the determination of the cross-over point.

plt.subplot(2, 1, 2)

plt.plot(Theta,angle(yp)
,Theta,angle(yyp),Theta,angle(yyyp))
plt.xlim(0, 100)
plt.ylim(0, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['angle(yp(	heta))', 'angle(yyp(	heta))', 'angle(yyyp(	heta))'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% N7PLPPS
% Wave traveling with total internal reflection through a planar waveguide.
% Resonance condition for p-polarization.
% global definition of n1,n2,n3, d and ? above the graph
function N7PLPPS;

n1 = 1.5;
n2 = 1;
n3 = 1;
d = 6;
Lamda = 4.3;
LamdaLamda = Lamda/n1
% LamdaLamda = 2.867

Theta = (0:1:90);
y = 2*pi*n1*(d/Lamda)*cos(2*pi*Theta/360);
zp1 = (sqrt((n1^2)*(sin(2*pi*Theta/360)).^2-n2^2)*n1)./((n2^2)*cos(2*pi*Theta/360));
yp1 = -atan(zp1);
zp3 = (sqrt((n1^2)*(sin(2*pi*Theta/360)).^2-n3^2)*n1)./((n3^2)*cos(2*pi*Theta/360));
yp3 = -atan(zp3);

% For the graph we use yp for m=1, yyp for m=2, yyyp for m=3

yp = -yp1 -yp3 + pi;
yyp = -yp1 -yp3 + pi*2;
yyyp = -yp1 -yp3 + pi*3;

%Global Definition
Thetac = asin(n2/n1);
ThetaThetac = 360*Thetac/(2*pi)
% ThetaThetac = 41.81

figure(1);
subplot(2,1,1);
plot(Theta,y,Theta,yp,Theta,yyp,Theta,yyyp);
axis([0 90 0 15]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('y(	heta)','yp(	heta)','yyp(	heta)','yyyp(	heta)');

% At the cross-over point of y with yp, yyp, or yyyp respectively, the resonance condition is
% fulfilled.
% The functions yp, yyp and yyyp are complex in the region from horizontal appearance to
% zero. This is shown in the next graph where the argument is plotted. The complex region
% has to be disregarded for the determination of the cross-over point.

subplot(2,1,2);
plot(Theta,angle(yp),Theta,angle(yyp),Theta,angle(yyyp));
axis([0 100 0 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('angle(yp(	heta))','angle(yyp(	heta))','angle(yyyp(	heta))');

`,cCode:"",defaultParams:{}},{id:"N8CWGK",title:"N8CWGK - N8CWGK\r",description:"N8CWGK\r",category:"Optics - Other",chapter:"6",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# N8CWGK
# Dielectric circular waveguide, determination of k
# 1. Check for positive values of argument for J0, J1 and K0, K1

# Input Data: radius, wavelength and refractive
# indices
a = 3
Lamda = 2.39
n1 = 1.5
no =1
# We try the interval 
k = np.arange(2.65, 3.8+0.01, 0.01)
# Since x = (?a)**2 and y= (?a)**2
# We have for the square of the arguments of the Bessel functions
xx = (a**2)*(((n1**2)*4*np.pi**2)/(Lamda**2)-k**2)
yy = (a**2)*(k**2-((no**2)*4*np.pi**2)/(Lamda**2))
x = np.sqrt(xx)
y = np.sqrt(yy)
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(k,x,k,y)

plt.xlim(2.6, 3.8)
plt.ylim(0, 20)
;                  # PLOTS LIMITS                    
plt.xlabel('k')
plt.legend(['x(k)', 'y(k)'])
plt.subplot(2, 1, 2)

plt.plot(k,-besselj(1,x)
/(x*besselj(0,x)),k,besselk(1,y)/(y*besselk(0,y)))
plt.xlim(2.6, 3.8)
plt.ylim(-40, 10)
;                  # PLOTS LIMITS                    
plt.xlabel('k')
plt.legend(['-besselj(1,x)/(x*besselj(0,x))', 'besselk(1,y)/(y*besselk(0,y))'])
# From graph: First intersection
kk = 2.66
LamdaLamda = (2*np.pi)/kk
# LamdaLamda = 2.362
# Side calculation. If
LamdaLamdaLamda = 8
# we get
kkk = 2*np.pi/LamdaLamdaLamda
# and kkk = 0.785

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% N8CWGK
% Dielectric circular waveguide, determination of k
% 1. Check for positive values of argument for J0, J1 and K0, K1
function N8CWGK;
%Input Data: radius, wavelength and refractive
% indices
a = 3;
Lamda = 2.39;
n1 = 1.5;
no =1;


% We try the interval 
k = (2.65:0.01:3.8);


% Since x = (?a)^2 and y= (?a)^2
% We have for the square of the arguments of the Bessel functions
xx = (a^2)*(((n1^2)*4*pi^2)/(Lamda^2)-k.^2);
yy = (a^2)*(k.^2-((no^2)*4*pi^2)/(Lamda^2));

x = sqrt(xx);
y = sqrt(yy);

figure(1);
subplot(2,1,1);
plot(k,x,k,y);
axis([2.6 3.8 0 20]);                  % PLOTS LIMITS                    
xlabel('k');
legend('x(k)','y(k)');

subplot(2,1,2);
plot(k,-besselj(1,x)./(x.*besselj(0,x)),k,besselk(1,y)./(y.*besselk(0,y)));
axis([2.6 3.8 -40 10]);                  % PLOTS LIMITS                    
xlabel('k');
legend('-besselj(1,x)/(x*besselj(0,x))','besselk(1,y)/(y*besselk(0,y))');


% From graph: First intersection
kk = 2.66;
LamdaLamda = (2*pi)/kk
% LamdaLamda = 2.362;

% Side calculation. If
LamdaLamdaLamda = 8;
% we get
kkk = 2*pi/LamdaLamdaLamda
% and kkk = 0.785
`,cCode:"",defaultParams:{}},{id:"L10WRS",title:"L10WRS - L10WRS Radius of curvature and Beam waist.\r",description:"L10WRS Radius of curvature and Beam waist.\r",category:"Optics - Light Sources",chapter:"7",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# L10WRS Radius of curvature and Beam waist.
# 1. Radius of curvature
# Beam waist normalized to 1 , that is we plot (w(z) =w0 SQR( 1 + (z/zR)**2) and set
# w0 =.1, in cm. and zR = ?(?0)2 /? ? .01?/?, ? in cm.
# Radius of curvature R(z) = z + (zR)**2/z


zR = 100
z = np.arange(-100, 100+0.01, 0.01)
R = np.abs(z+((zR)**2)/z)
Rm = 2*zR
# At z = 1/2 of distance of mirrors, that is
# for for distance 200 at 100,
# the radius of curvature must be
# equal to the distance of the mirrors.

fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(z,R)

plt.xlim(-100, 100)
plt.ylim(0, 1000)
;                  # PLOTS LIMITS                    
plt.xlabel('z')
plt.legend(['R(z)'])
# 2. Beam waist
# Plots of two branches of the beam waist and the Asymptote to w(z), that is y = z/zR
# If z is in cm, we have set for w0=.1, ?=3.14*.01/zR in cm ( about 3 microns for zR =100)

y = (z*0.1)/zR; # and for the asymptote
yy = -y
w = 0.1*np.sqrt(1+(z/zR)**2); # and for the asymptote
ww = -0.1*np.sqrt(1+(z/zR)**2)
plt.subplot(2, 1, 2)

plt.plot(z,w,z,ww,z,y,z,yy)

plt.xlim(-100, 100)
plt.ylim(-0.2, 0.3)
;                  # PLOTS LIMITS                    
plt.xlabel('z')
plt.legend(['w(z)', 'ww(z)', 'y(z)', 'yy(z)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% L10WRS Radius of curvature and Beam waist.
% 1. Radius of curvature
% Beam waist normalized to 1 , that is we plot (w(z) =w0 SQR( 1 + (z/zR)^2) and set
% w0 =.1, in cm. and zR = ?(?0)2 /? ? .01?/?, ? in cm.
% Radius of curvature R(z) = z + (zR)^2/z

function L10WRS;

zR = 100;
z = (-100:0.01:100);
R = abs(z+((zR)^2)./z);
Rm = 2*zR;

% At z = 1/2 of distance of mirrors, that is
% for for distance 200 at 100,
% the radius of curvature must be
% equal to the distance of the mirrors.

figure(1);
subplot(2,1,1);
plot(z,R);
axis([-100 100 0 1000]);                  % PLOTS LIMITS                    
xlabel('z');
legend('R(z)');

% 2. Beam waist
% Plots of two branches of the beam waist and the Asymptote to w(z), that is y = z/zR
% If z is in cm, we have set for w0=.1, ?=3.14*.01/zR in cm ( about 3 microns for zR =100)

y = (z*0.1)/zR; % and for the asymptote
yy = -y;

w = 0.1*sqrt(1+(z/zR).^2); % and for the asymptote
ww = -0.1*sqrt(1+(z/zR).^2);

subplot(2,1,2);
plot(z,w,z,ww,z,y,z,yy);
axis([-100 100 -0.2 0.3]);                  % PLOTS LIMITS                    
xlabel('z');
legend('w(z)','ww(z)','y(z)','yy(z)');
`,cCode:"",defaultParams:{}},{id:"L11MOCONFCS",title:"L11MOCONFCS - L11MOCONFCS\r",description:"L11MOCONFCS\r",category:"Optics - Light Sources",chapter:"7",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# L11MOCONFCS

# Cartesian Coordinates for rectangular mirrors in confocal resonator.
# Field distribution as contour plot..

# The mode numbers m and n are for Hermitian Polynomials.
# The constant in the exponential is simulated by X.
# Small X correspond to small "waist width".


N = 40
X = 100
Y = 100
i = (0:1:N)
j = (0:1:N)
xi = (-20) + 1.00*i
yj = (-20) + 1.00*j
nx = length(i)
ny = length(j)
for r=1:nx
       for k=1:ny
            x = xi(r)
            y = yj(k)
            M00(r,k)  =(g(x,y)*H00(x,y))**2
            M01(r,k)  =(g(x,y)*H01(x,y))**2
            M02(r,k)  =(g(x,y)*H02(x,y))**2
            M10(r,k)  =(g(x,y)*H10(x,y))**2
            M11(r,k)  =(g(x,y)*H11(x,y))**2
            M12(r,k)  =(g(x,y)*H12(x,y))**2
            M20(r,k)  =(g(x,y)*H20(x,y))**2
            M21(r,k)  =(g(x,y)*H21(x,y))**2
            M22(r,k)  =(g(x,y)*H22(x,y))**2
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.contour(M00)
plt.xlim(0, 40)
plt.ylim(0, 40)

plt.legend(['M00'])

plt.subplot(2, 2, 2)

plt.contour(M10)
plt.xlim(0, 40)
plt.ylim(0, 40)

plt.legend(['M10'])


plt.subplot(2, 2, 3)

plt.contour(M01)
plt.xlim(0, 40)
plt.ylim(0, 40)

plt.legend(['M01'])

plt.subplot(2, 2, 4)

plt.contour(M11)
plt.xlim(0, 40)
plt.ylim(0, 40)

plt.legend(['M11'])

fig = plt.figure(2)

plt.subplot(3, 2, 1)

plt.contour(M20)
plt.xlim(0, 40)
plt.ylim(0, 40)

plt.legend(['M20'])


plt.subplot(3, 2, 2)

plt.contour(M21)
plt.xlim(0, 40)
plt.ylim(0, 40)

plt.legend(['M21'])

plt.subplot(3, 2, 3)

plt.contour(M02)
plt.xlim(0, 40)
plt.ylim(0, 40)

plt.legend(['M02'])

plt.subplot(3, 2, 4)

plt.contour(M12)
plt.xlim(0, 40)
plt.ylim(0, 40)

plt.legend(['M12'])

plt.subplot(3, 1, 3)

plt.contour(M22)
plt.xlim(0, 40)
plt.ylim(0, 40)

plt.legend(['M22'])



Out = x**2+y**2
Out = np.exp(-R(x,y)/X)
Out = 1
Out = 1
Out = x*np.sqrt(2/X)
Out = y*np.sqrt(2/Y)
Out = 4*((np.sqrt(2/Y)*y)**2)-2
Out =  4*((np.sqrt(2/X)*x)**2)-2
Out = H0x(x)*H0y(y)
Out = H0x(x)*H1y(y)
Out = H0x(x)*H2y(y)
Out = H1x(x)*H0y(y)
Out = H1x(x)*H1y(y)
Out = H1x(x)*H2y(y)
Out = H2x(x)*H0y(y)
Out = H2x(x)*H1y(y)
Out = H2x(x)*H2y(y)
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% L11MOCONFCS

% Cartesian Coordinates for rectangular mirrors in confocal resonator.
% Field distribution as contour plot..

% The mode numbers m and n are for Hermitian Polynomials.
% The constant in the exponential is simulated by X.
% Small X correspond to small "waist width".

function L11MOCONFCS;
global X Y;
N = 40;
X = 100;
Y = 100;
i = (0:1:N);
j = (0:1:N);

xi = (-20) + 1.00*i;
yj = (-20) + 1.00*j;
nx = length(i);
ny = length(j); 
for r=1:nx;
       for k=1:ny;
            x = xi(r);
            y = yj(k);
            M00(r,k)  =(g(x,y).*H00(x,y)).^2;
            M01(r,k)  =(g(x,y).*H01(x,y)).^2;
            M02(r,k)  =(g(x,y).*H02(x,y)).^2;
            M10(r,k)  =(g(x,y).*H10(x,y)).^2;
            M11(r,k)  =(g(x,y).*H11(x,y)).^2;
            M12(r,k)  =(g(x,y).*H12(x,y)).^2;
            M20(r,k)  =(g(x,y).*H20(x,y)).^2;
            M21(r,k)  =(g(x,y).*H21(x,y)).^2;
            M22(r,k)  =(g(x,y).*H22(x,y)).^2;
       end;
end;



figure(1);
subplot(2,2,1);
contour(M00);
axis([0 40 0 40]);  
legend('M00');

subplot(2,2,2);
contour(M10);
axis([0 40 0 40]);  
legend('M10');


subplot(2,2,3);    
contour(M01);
axis([0 40 0 40]);  
legend('M01');

subplot(2,2,4);      
contour(M11);
axis([0 40 0 40]);  
legend('M11');

figure(2);         
subplot(3,2,1);
contour(M20);
axis([0 40 0 40]);  
legend('M20');


subplot(3,2,2);
contour(M21);
axis([0 40 0 40]);  
legend('M21');

subplot(3,2,3);      
contour(M02);
axis([0 40 0 40]);  
legend('M02');

subplot(3,2,4);      
contour(M12);
axis([0 40 0 40]);  
legend('M12');

subplot(3,1,3);      
contour(M22);
axis([0 40 0 40]);  
legend('M22');


function Out=R(x,y)
Out = x.^2+y.^2;

function Out=g(x,y)
global X;
Out = exp(-R(x,y)./X);

function Out=H0x(x)
Out = 1;
function Out=H0y(y)
Out = 1;

function Out=H1x(x)
global Y;
Out = x.*sqrt(2/X);

function Out=H1y(y)
global Y;
Out = y.*sqrt(2/Y);

function Out=H2y(y)
global Y;
Out = 4*((sqrt(2/Y).*y).^2)-2;

function Out=H2x(x)
Out =  4*((sqrt(2/X).*x).^2)-2;

function Out=H00(x,y)
Out = H0x(x).*H0y(y);

function Out=H01(x,y)
Out = H0x(x).*H1y(y);

function Out=H02(x,y)
Out = H0x(x).*H2y(y);

function Out=H10(x,y)
Out = H1x(x).*H0y(y);

function Out=H11(x,y)
Out = H1x(x).*H1y(y);

function Out=H12(x,y)
Out = H1x(x).*H2y(y);

function Out=H20(x,y)
Out = H2x(x).*H0y(y);

function Out=H21(x,y)
Out = H2x(x).*H1y(y);

function Out=H22(x,y)
Out = H2x(x).*H2y(y);
`,cCode:"",defaultParams:{}},{id:"L12MOCY1to4S",title:"L12MOCY1to4S - L12MOCY1to4S\r",description:"L12MOCY1to4S\r",category:"Optics - Light Sources",chapter:"7",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# L12MOCY1to4S
# Cylindircal Coordinates for circular mirrors in confocal resonator.
# Field distribution as contour plot for graph 00, 10, 01, and 11.
# The L(l,p) functions are written out for 00 to 22. The constant in the exponential is
# X


X = 3
N = 30
i = (0:1:N)
j = (0:1:N)
xi = -3 + 0.20001*i
yj = -3 + 0.20001*j
nx = length(i)
ny = length(j)
for r=1:nx
       for k=1:ny
            x = xi(r)
            y = yj(k)
            M00(r,k)  =(np.cos(0*Beta(x,y))*q(x,y)*L00(x,y))**2
            M10(r,k)  =(np.cos(0*Beta(x,y))*q(x,y)*L01(x,y))**2
            M01(r,k)  =(np.cos(1*Beta(x,y))*q(x,y)*L10(x,y))**2
            M11(r,k)  =(np.cos(1*Beta(x,y))*q(x,y)*L11(x,y))**2
fig = plt.figure(1)

plt.subplot(2, 2, 1)

Mesh(M00)
axis([0 30 0 30 0 1])
plt.legend(['M00'])

plt.subplot(2, 2, 2)

Mesh(M10)
axis([0 30 0 30 0 1.5])
plt.legend(['M10'])

plt.subplot(2, 2, 3)

Mesh(M01)
axis([0 30 0 30 0 1])
plt.legend(['M01'])

plt.subplot(2, 2, 4)

Mesh(M11)
axis([0 30 0 30 0 3.5])
plt.legend(['M11'])


Out = x**2+y**2
Out = atan(x/y)
Out = np.exp(-R(x,y)/X)
Out = 4*R(x,y)/X
Out = np.cos(0*Beta(x,y))
Out = 1
Out = 1-u(x,y)
Out = 1
Out = 2-u(x,y)
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% L12MOCY1to4S
% Cylindircal Coordinates for circular mirrors in confocal resonator.
% Field distribution as contour plot for graph 00, 10, 01, and 11.
% The L(l,p) functions are written out for 00 to 22. The constant in the exponential is
% X

function L12MOCY1to4S;
global X;
X = 3;
N = 30;
i = (0:1:N);
j = (0:1:N);
xi = -3 + 0.20001*i;
yj = -3 + 0.20001*j;

nx = length(i);
ny = length(j); 
for r=1:nx;
       for k=1:ny;
            x = xi(r);
            y = yj(k);
            M00(r,k)  =(cos(0*Beta(x,y))*q(x,y)*L00(x,y)).^2;
            M10(r,k)  =(cos(0*Beta(x,y))*q(x,y)*L01(x,y)).^2;
            M01(r,k)  =(cos(1*Beta(x,y))*q(x,y)*L10(x,y)).^2;
            M11(r,k)  =(cos(1*Beta(x,y))*q(x,y)*L11(x,y)).^2;
       end;
end;

figure(1);         
subplot(2,2,1);
Mesh(M00);
axis([0 30 0 30 0 1]); 
legend('M00');

subplot(2,2,2);    
Mesh(M10);
axis([0 30 0 30 0 1.5]); 
legend('M10');

subplot(2,2,3);    
Mesh(M01);
axis([0 30 0 30 0 1]); 
legend('M01');

subplot(2,2,4);          
Mesh(M11);
axis([0 30 0 30 0 3.5]); 
legend('M11');

function Out=R(x,y)
Out = x^2+y^2;

function Out=Beta(x,y)
Out = atan(x/y);

function Out=q(x,y)
global X;
Out = exp(-R(x,y)/X);

function Out=u(x,y)
global X;
Out = 4*R(x,y)/X;

function Out=g(x,y)
Out = cos(0*Beta(x,y));

function Out=L00(x,y)
Out = 1;

function Out=L01(x,y)
Out = 1-u(x,y);

function Out=L10(x,y)
Out = 1;

function Out=L11(x,y)
Out = 2-u(x,y);
`,cCode:"",defaultParams:{}},{id:"L12MOCY5to9S",title:"L12MOCY5to9S - L12MOCY5to9S\r",description:"L12MOCY5to9S\r",category:"Optics - Light Sources",chapter:"7",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# L12MOCY5to9S
# Cylindircal Coordinates for circular mirrors in confocal resonator.
# Field distribution as contour plot of 02 to 20.
# The L(l,p) functions are written out for 00 to 22. The constant in the exponential is
# X.


X = 2
N = 30
i = (0:1:N)
j = (0:1:N)
xi = -4 + 0.30001*i
yj = -4 + 0.30001*j
nx = length(i)
ny = length(j)
for r=1:nx
       for k=1:ny
            x = xi(r)
            y = yj(k)
            M02(r,k)  =(np.cos(2*Beta(x,y))*q(x,y)*L20(x,y))**2
            M20(r,k)  =(np.cos(0*Beta(x,y))*q(x,y)*L02(x,y))**2
            M12(r,k)  =(np.cos(2*Beta(x,y))*q(x,y)*L21(x,y))**2
            M21(r,k)  =(np.cos(1*Beta(x,y))*q(x,y)*L12(x,y))**2
            M22(r,k)  =(np.cos(2*Beta(x,y))*q(x,y)*L22(x,y))**2
fig = plt.figure(1)

plt.subplot(3, 2, 1)

Mesh(M02)
axis([0 30 0 30 0 0.6])
plt.legend(['M02'])

plt.subplot(3, 2, 2)

Mesh(M20)
axis([0 30 0 30 0 6])
plt.legend(['M20'])

plt.subplot(3, 2, 3)

Mesh(M12)
axis([0 30 0 30 0 5])
plt.legend(['M12'])

plt.subplot(3, 2, 4)

Mesh(M21)
axis([0 30 0 30 0 5])
plt.legend(['M21'])

plt.subplot(3, 1, 3)

Mesh(M22)
axis([0 30 0 30 0 15])
plt.legend(['M22'])


Out = x**2+y**2
Out = atan(x/y)
Out = np.exp(-R(x,y)/X)
Out = 4*R(x,y)/X
Out = np.cos(0*Beta(x,y))
Out = 1-2*u(x,y)+(1/2)*u(x,y)**2
Out = 3-3*u(x,y)+(1/2)*u(x,y)**2
Out = 1
Out = 3 - u(x,y)
Out = 6-4*u(x,y)+(1/2)*u(x,y)**2
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% L12MOCY5to9S
% Cylindircal Coordinates for circular mirrors in confocal resonator.
% Field distribution as contour plot of 02 to 20.
% The L(l,p) functions are written out for 00 to 22. The constant in the exponential is
% X.

function L12MOCY5to9S;
global X;
X = 2;
N = 30;
i = (0:1:N);
j = (0:1:N);

xi = -4 + 0.30001*i;
yj = -4 + 0.30001*j;

nx = length(i);
ny = length(j); 
for r=1:nx;
       for k=1:ny;
            x = xi(r);
            y = yj(k);
            M02(r,k)  =(cos(2*Beta(x,y))*q(x,y)*L20(x,y)).^2;
            M20(r,k)  =(cos(0*Beta(x,y))*q(x,y)*L02(x,y)).^2;
            M12(r,k)  =(cos(2*Beta(x,y))*q(x,y)*L21(x,y)).^2;
            M21(r,k)  =(cos(1*Beta(x,y))*q(x,y)*L12(x,y)).^2;
            M22(r,k)  =(cos(2*Beta(x,y))*q(x,y)*L22(x,y)).^2;
       end;
end;

figure(1);
subplot(3,2,1);
Mesh(M02);
axis([0 30 0 30 0 0.6]); 
legend('M02');

subplot(3,2,2);
Mesh(M20);
axis([0 30 0 30 0 6]); 
legend('M20');

subplot(3,2,3);      
Mesh(M12);
axis([0 30 0 30 0 5]); 
legend('M12');

subplot(3,2,4);      
Mesh(M21);
axis([0 30 0 30 0 5]); 
legend('M21');

subplot(3,1,3);         
Mesh(M22);
axis([0 30 0 30 0 15]); 
legend('M22');

function Out=R(x,y)
Out = x^2+y^2;

function Out=Beta(x,y)
Out = atan(x/y);

function Out=q(x,y)
global X;
Out = exp(-R(x,y)/X);

function Out=u(x,y)
global X;
Out = 4*R(x,y)/X;

function Out=g(x,y)
Out = cos(0*Beta(x,y));

function Out=L02(x,y)
Out = 1-2*u(x,y)+(1/2)*u(x,y)^2;

function Out=L12(x,y)
Out = 3-3*u(x,y)+(1/2)*u(x,y)^2;

function Out=L20(x,y)
Out = 1;

function Out=L21(x,y)
Out = 3 - u(x,y);

function Out=L22(x,y)
Out = 6-4*u(x,y)+(1/2)*u(x,y)^2;
`,cCode:"",defaultParams:{}},{id:"LIRJEANS",title:"LIRJEANS - L1RJEANS\r",description:"L1RJEANS\r",category:"Optics - Light Sources",chapter:"7",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# L1RJEANS
# The Raleigh Jeans law gives the emitted radiation as Energy/frequency interval
# and per volume.It is given here as Ws/{(1/s)m**3}


v = (5e14:-0.01e14:1e12)
c = 3e8
k = 1.38e-23
T = 1000
y = 8*np.pi*k*T*(v**2)/(c**3)
fig = plt.figure(1)

plt.plot(v,y)

plt.xlim(0, 5e14)
plt.ylim(0, 3e-15)
;                  # PLOTS LIMITS                    
plt.xlabel('v')
plt.legend(['y(v)'])
# Frequency
# 1e11 is 3mm
# 1e14 is 3micron
# 1e17 is 3nm is 30A
# 3e11 is 1mm   
# 3e14 is 1micron
# 3e17 is 1nm is 10A


# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% L1RJEANS
% The Raleigh Jeans law gives the emitted radiation as Energy/frequency interval
% and per volume.It is given here as Ws/{(1/s)m^3}

function LIRJEANS;
v = (5e14:-0.01e14:1e12);
c = 3e8;
k = 1.38e-23
T = 1000;

y = 8*pi*k*T*(v.^2)/(c^3);
figure(1);
plot(v,y);
axis([0 5e14 0 3e-15]);                  % PLOTS LIMITS                    
xlabel('v');
legend('y(v)');

% Frequency
% 1e11 is 3mm
% 1e14 is 3micron
% 1e17 is 3nm is 30A
% 3e11 is 1mm   
% 3e14 is 1micron
% 3e17 is 1nm is 10A

`,cCode:"",defaultParams:{}},{id:"L2BBLS",title:"L2BBLS - L2BBLS\r",description:"L2BBLS\r",category:"Optics - Light Sources",chapter:"7",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# L2BBLS
# 1. Black body Radiation. Graph of f(x) =dL/d?, and x =?
# 2. Integration over the wavelength range from 3*10**-6 to 3*10**-5 meters to obtain the
# Radiance.
# 3. Multiplication with area times solid angle to obtain the Radiant energy.

# 1. Black body Radiation. Graph of dL/d????
# Constants for wavelength dependence

c2 = 1.43e-2
c1 = 1.18e-16
T = 1000
x=(3e-5:-0.01e-5:1e-7); # x in meters
# Planck's Law depending on wavelength

fig = plt.figure(1)

plt.plot(x,f(x)
)
plt.xlim(0, 3e-5)
plt.ylim(0, 5e9)
;                  # PLOTS LIMITS                    
plt.xlabel('x')
plt.legend(['f(x)'])
R = quad(@f,3e-6,3e-5)
# Radiance  R = 1.316e4

# 3. Multiplication with area times solid angle to obtain the Radiant energy.
# Area A, Solid angle SA

A = 0.1
SA = 4
RR = A*SA*R  
# RR = 5.263e3 Watts

# RR has the same value as the corresponding value when integrating over frequency.




Out = c1/((x**5)*(np.exp(c2/(x*T))-1))
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% L2BBLS
% 1. Black body Radiation. Graph of f(x) =dL/d?, and x =?
% 2. Integration over the wavelength range from 3*10^-6 to 3*10^-5 meters to obtain the
% Radiance.
% 3. Multiplication with area times solid angle to obtain the Radiant energy.

% 1. Black body Radiation. Graph of dL/d????
% Constants for wavelength dependence
function L2BBLS;
global c1 c2 T;
c2 = 1.43e-2;
c1 = 1.18e-16;
T = 1000;

x=(3e-5:-0.01e-5:1e-7); % x in meters
% Planck's Law depending on wavelength

figure(1);
plot(x,f(x));
axis([0 3e-5 0 5e9]);                  % PLOTS LIMITS                    
xlabel('x');
legend('f(x)');

R = quad(@f,3e-6,3e-5)
% Radiance  R = 1.316e4

% 3. Multiplication with area times solid angle to obtain the Radiant energy.
% Area A, Solid angle SA

A = 0.1;
SA = 4;

RR = A*SA*R  
% RR = 5.263e3 Watts

% RR has the same value as the corresponding value when integrating over frequency.


function Out = f(x) 
global c1 c2 T;
Out = c1./((x.^5).*(exp(c2./(x*T))-1));`,cCode:"",defaultParams:{}},{id:"L3BBFS",title:"L3BBFS - L3BBFS\r",description:"L3BBFS\r",category:"Optics - Light Sources",chapter:"7",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# L3BBFS

# 1. Black body Radiation. Graph of f(?) = dL/d?, ? is frequency
# 2. Integration over the wavelength range from 10**14 to 3*10**13 1/s to obtain the
# Radiance.
# 3. Multiplication with area times solid angle to obtain the Radiant energy.

# Constants for frequency dependence


c4 = 4.78e-11
c3 = 1.47e-50
T = 1000
v=(5e14:-0.01e14:1e12)
# Planck's Law depending on frequency

fig = plt.figure(1)

plt.plot(v,f(v)
)
plt.xlim(0, 5e14)
plt.ylim(0, 2e-10)
;                  # PLOTS LIMITS                    
plt.xlabel('v')
plt.legend(['f(v)'])
R = quad(@f,1e13,1e14)
# Radiance  R = 1.316e4 Watts

# 3. Multiplication with area times solid angle to obtain the Radiant energy.
# Area A, Solid angle SA

A = 0.1
SA = 4
RR = A*SA*R  
# RR = 5.263e3 Watts

# RR has the same value as the corresponding value when integrating over wavelength.


Out = (c3/(np.exp(c4*v/T)-1))*(v**3)
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% L3BBFS

% 1. Black body Radiation. Graph of f(?) = dL/d?, ? is frequency
% 2. Integration over the wavelength range from 10^14 to 3*10^13 1/s to obtain the
% Radiance.
% 3. Multiplication with area times solid angle to obtain the Radiant energy.

% Constants for frequency dependence

function L3BBFS;
global c3 c4 T;
c4 = 4.78e-11;
c3 = 1.47e-50;
T = 1000;

v=(5e14:-0.01e14:1e12);
% Planck's Law depending on frequency

figure(1);
plot(v,f(v));
axis([0 5e14 0 2e-10]);                  % PLOTS LIMITS                    
xlabel('v');
legend('f(v)');

R = quad(@f,1e13,1e14)
% Radiance  R = 1.316e4 Watts

% 3. Multiplication with area times solid angle to obtain the Radiant energy.
% Area A, Solid angle SA

A = 0.1;
SA = 4;

RR = A*SA*R  
% RR = 5.263e3 Watts

% RR has the same value as the corresponding value when integrating over wavelength.
function Out = f(v) 
global c3 c4 T;
Out = (c3./(exp(c4*v/T)-1)).*(v.^3);`,cCode:"",defaultParams:{}},{id:"L4STEFS",title:"L4STEFS - L4STEFS\r",description:"L4STEFS\r",category:"Optics - Light Sources",chapter:"7",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# L4STEFS

# The Stefan Boltzmann Law. The units are Power/area in Watt/m**2
# A linear and a logarithmic scale are used.

h = 6.626e-34
c = 3e8
k = 1.38e-23
T = np.arange(10, 10000+10, 10)
Sigma = (2/15)*(( (np.pi**5)*(k**4))/((c**2)*(h**3)))
# Sigma = 5.652e-8 kgs-3K-4
yT = Sigma*(T**4)
# Linear y-scale
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(T,yT)

plt.xlim(0, 1e4)
plt.ylim(0, 6e8)
;                  # PLOTS LIMITS                    
plt.xlabel('T')
plt.title('Linear y-scale')
plt.legend(['y(T)'])
# Logarithmic y-scale
plt.subplot(2, 1, 2)

semilogy(T,yT)
plt.xlim(0, 1e4)
plt.ylim(1e-4, 1e9)
;                  # PLOTS LIMITS                    
plt.xlabel('T')
plt.title('Logarithmic y-scale')
plt.legend(['y(T)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% L4STEFS

% The Stefan Boltzmann Law. The units are Power/area in Watt/m^2
% A linear and a logarithmic scale are used.
function L4STEFS;
h = 6.626e-34;
c = 3e8;
k = 1.38e-23;
T = (10:10:10000);
Sigma = (2/15)*(( (pi^5)*(k^4))/((c^2)*(h^3)))
% Sigma = 5.652e-8 kgs-3K-4
yT = Sigma*(T.^4);

% Linear y-scale
figure(1);
subplot(2,1,1);
plot(T,yT);
axis([0 1e4 0 6e8]);                  % PLOTS LIMITS                    
xlabel('T');
title('Linear y-scale');
legend('y(T)');

% Logarithmic y-scale
subplot(2,1,2);
semilogy(T,yT);
axis([0 1e4 1e-4 1e9]);                  % PLOTS LIMITS                    
xlabel('T');
title('Logarithmic y-scale');
legend('y(T)');`,cCode:"",defaultParams:{}},{id:"L5WIENS",title:"L5WIENS - L5WienS\r",description:"L5WienS\r",category:"Optics - Light Sources",chapter:"7",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# L5WienS
# Wien's displacement Law
# Graphs of Wien's displacement Law T = 0 to 8000

# Temperature in Kelvin
# Wavelength in meter

T = np.arange(100, 8000+1, 1)
Lamda = (1/T)*2.89e-6
fig = plt.figure(1)

plt.subplot(2, 1, 1)

semilogy(T,Lamda)
plt.xlim(0, 8000)
plt.ylim(1e-10, 1e-7)
;                  # PLOTS LIMITS                    
plt.xlabel('T')
plt.legend(['lambda(T)'])
# Graphs of Wien's displacement Law T = 0 to 500
TT = np.arange(10, 500+1, 1)
LamdaLamda = (1/TT)*2.89e-6
plt.subplot(2, 1, 2)

semilogy(TT,LamdaLamda)
plt.xlim(0, 500)
plt.ylim(1e-9, 1e-6)
;                  # PLOTS LIMITS                    
plt.xlabel('T')
plt.legend(['lambdalambda(TT)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% L5WienS
% Wien's displacement Law
% Graphs of Wien's displacement Law T = 0 to 8000

% Temperature in Kelvin
% Wavelength in meter
function L5WIENS;
T = (100:1:8000);
Lamda = (1./T)*2.89e-6;

figure(1);
subplot(2,1,1);
semilogy(T,Lamda);
axis([0 8000 1e-10 1e-7]);                  % PLOTS LIMITS                    
xlabel('T');
legend('lambda(T)');

% Graphs of Wien's displacement Law T = 0 to 500
TT = (10:1:500);
LamdaLamda = (1./TT)*2.89e-6;

subplot(2,1,2);
semilogy(TT,LamdaLamda);
axis([0 500 1e-9 1e-6]);                  % PLOTS LIMITS                    
xlabel('T');
legend('lambdalambda(TT)');

`,cCode:"",defaultParams:{}},{id:"L6BANDS",title:"L6BANDS - L6BANDS\r",description:"L6BANDS\r",category:"Optics - Light Sources",chapter:"7",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# L6BANDS
# Lorentian Line shape

# Frequency interval
m=11
Omega0 = 49/(2**m-1)
OmegaStep = 1/(2**m-1)
Omega = (OmegaStep:OmegaStep:1)
Tau = 1000
g1 = 2*((1/(2*Tau))/((1/((2*Tau)**2))+(Omega-Omega0)**2))
Q = Tau*Omega0
# Q = 23.937

fig = plt.figure(1)

plt.plot(Omega,g1)

plt.xlim(0, 0.04)
plt.ylim(0, 4000)
;                  # PLOTS LIMITS                    
plt.xlabel('omega')
plt.legend(['g1(omega)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% L6BANDS
% Lorentian Line shape
function L6BANDS;
% Frequency interval
m=11;

Omega0 = 49/(2^m-1);

OmegaStep = 1/(2^m-1);
Omega = (OmegaStep:OmegaStep:1);
Tau = 1000;

g1 = 2*((1/(2*Tau))./((1/((2*Tau)^2))+(Omega-Omega0).^2));
Q = Tau*Omega0
% Q = 23.937

figure(1);
plot(Omega,g1);
axis([0 0.04 0 4000]);                  % PLOTS LIMITS                    
xlabel('omega');
legend('g1(omega)');`,cCode:"",defaultParams:{}},{id:"of",title:"of - O1FRNKPSS\r",description:"O1FRNKPSS\r",category:"Optics - Optical Materials",chapter:"8",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# O1FRNKPSS
# Complex reflection coefficients of Fresnel' formulas as function of angle
# of incidence for values of n2 and K.

# Absolute value and imaginary parts are plotted.

# n1, n2, K and ? are globally defined at the graphs.
# Complex reflection coefficients zrp for parallel and zrs for perpendicular case.


Theta = np.arange(0, 90+1, 1)
K = 2
n1 = 1
n2 = 1.5
zrp = (((n2-i*K)/n1)*np.cos(2*(np.pi/360)*Theta)-np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))/(((n2-i*K)/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))
zrs = (np.cos(2*(np.pi/360)*Theta)-((n2-i*K)/n1)*np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+((n2-i*K)/n1)*np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))
fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(Theta,np.abs(zrp)
,Theta,np.abs(zrs))
plt.xlim(0, 100)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['abs(zrp(	heta))', 'abs(zrs(	heta))'])
plt.subplot(2, 1, 2)

plt.plot(Theta,angle(zrp)
,Theta,angle(zrs))
plt.xlim(0, 100)
plt.ylim(-3.5, 3.5)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['angle(zrp(	heta))', 'angle(zrs(	heta))'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% O1FRNKPSS
% Complex reflection coefficients of Fresnel' formulas as function of angle
% of incidence for values of n2 and K.

% Absolute value and imaginary parts are plotted.

% n1, n2, K and ? are globally defined at the graphs.
% Complex reflection coefficients zrp for parallel and zrs for perpendicular case.

function O1FRNKPSS;
Theta = (0:1:90);
K = 2;
n1 = 1;
n2 = 1.5;

zrp = (((n2-i*K)/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2))./(((n2-i*K)/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2));
zrs = (cos(2*(pi/360)*Theta)-((n2-i*K)/n1)*sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+((n2-i*K)/n1)*sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2));


figure(1);
subplot(2,1,1);
plot(Theta,abs(zrp),Theta,abs(zrs));
axis([0 100 -1 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('abs(zrp(	heta))','abs(zrs(	heta))');

subplot(2,1,2);
plot(Theta,angle(zrp),Theta,angle(zrs));
axis([0 100 -3.5 3.5]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('angle(zrp(	heta))','angle(zrs(	heta))');
`,cCode:"",defaultParams:{}},{id:"of",title:"of - O2FRSOPS Graphs of Ratios of reflection coefficients\r",description:"O2FRSOPS Graphs of Ratios of reflection coefficients\r",category:"Optics - Optical Materials",chapter:"8",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# O2FRSOPS Graphs of Ratios of reflection coefficients
# Reflection coefficients of Fresnel's formulas as function of angle
# of incidence for n and K. Real part and ratios of real parts are plotted.
# Refractive indices, K values, and ? are globally defined at the graphs.

# Complex zrp, zzrp, zzzrp for parallel and
# zrs, zzrs, zzzrs for perpendicular case.


K = 0.1
KK = 0.5
KKK = 2
n1 = 1
n2 = 1.5
nn2 = 3
Theta = np.arange(0, 90+1, 1)
# K = 0


zrp0 = ((n2/n1)*np.cos(2*(np.pi/360)*Theta)-np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/((n2/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
zrs0 = (np.cos(2*(np.pi/360)*Theta)-(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+(n2/n1)*np.sqrt(1-((n1/n2)*np.sin(2*(np.pi/360)*Theta))**2))
# K not 0

zrp = (((n2 -i*K)/n1)*np.cos(2*(np.pi/360)*Theta)-np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))/(((n2 -i*K)/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))
zrs = (np.cos(2*(np.pi/360)*Theta)-((n2-i*K)/n1)*np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+((n2-i*K)/n1)*np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))
# For differen n and K

zzrp = (((nn2 -i*KK)/n1)*np.cos(2*(np.pi/360)*Theta)-np.sqrt(1-((n1/(nn2-i*KK))*np.sin(2*(np.pi/360)*Theta))**2))/(((nn2 -i*KK)/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/(nn2-i*KK))*np.sin(2*(np.pi/360)*Theta))**2))
zzrs = (np.cos(2*(np.pi/360)*Theta)-((nn2-i*KK)/n1)*np.sqrt(1-((n1/(nn2-i*KK))*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+((nn2-i*KK)/n1)*np.sqrt(1-((n1/(nn2-i*KK))*np.sin(2*(np.pi/360)*Theta))**2))
zzzrp = (((nn2 -i*KKK)/n1)*np.cos(2*(np.pi/360)*Theta)-np.sqrt(1-((n1/(nn2-i*KKK))*np.sin(2*(np.pi/360)*Theta))**2))/(((nn2 -i*KKK)/n1)*np.cos(2*(np.pi/360)*Theta)+np.sqrt(1-((n1/(nn2-i*KKK))*np.sin(2*(np.pi/360)*Theta))**2))
zzzrs = (np.cos(2*(np.pi/360)*Theta)-((nn2-i*KKK)/n1)*np.sqrt(1-((n1/(nn2-i*KKK))*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+((nn2-i*KKK)/n1)*np.sqrt(1-((n1/(nn2-i*KKK))*np.sin(2*(np.pi/360)*Theta))**2))
fig = plt.figure(1)

plt.subplot(3, 2, 1)

plt.plot(Theta,real(zrp0)
,Theta,real(zrp),Theta,real(zzrp),Theta,real(zzzrp))
plt.xlim(0, 100)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['real(zrp0(	heta))', 'real(zrp(	heta))', 'real(zzrp(	heta))', 'real(zzzrp(	heta))'])
plt.subplot(3, 2, 2)

plt.plot(Theta,real(zrs0)
,Theta,real(zrs),Theta,real(zzrs),Theta,real(zzzrs))
plt.xlim(0, 100)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['real(zrs0(	heta))', 'real(zrs(	heta))', 'real(zzrs(	heta))', 'real(zzzrs(	heta))'])
# Ratio: p/s

plt.subplot(3, 1, 2)

plt.plot(Theta,real(zrp0)
/real(zrs0),Theta,real(zrp)/real(zrs),Theta,real(zzrp)/real(zzrs),Theta,real(zzzrp)/real(zzzrs))
plt.xlim(0, 100)
plt.ylim(-1, 1)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['real(zrp0(	heta))/real(zrs0(	heta))', 'real(zrp(	heta))/real(zrs(	heta))', 'real(zzrp(	heta))/real(zzrs(	heta))', 'real(zzzrp(	heta))/real(zzzrs(	heta))'])
# Ratio: s/p

plt.subplot(3, 1, 3)

plt.plot(Theta,real(zrs0)
/real(zrp0),Theta,real(zrs)/real(zrp),Theta,real(zzrs)/real(zzrp),Theta,real(zzzrs)/real(zzzrp))
plt.xlim(0, 100)
plt.ylim(-300, 200)
;                  # PLOTS LIMITS                    
plt.xlabel('	heta')
plt.legend(['real(zrs0(	heta))/real(zrp0(	heta))', 'real(zrs(	heta))/real(zrp(	heta))', 'real(zzrs(	heta))/real(zzrp(	heta))', 'real(zzzrs(	heta))/real(zzzrp(	heta))'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% O2FRSOPS Graphs of Ratios of reflection coefficients
% Reflection coefficients of Fresnel's formulas as function of angle
% of incidence for n and K. Real part and ratios of real parts are plotted.
% Refractive indices, K values, and ? are globally defined at the graphs.

% Complex zrp, zzrp, zzzrp for parallel and
% zrs, zzrs, zzzrs for perpendicular case.

function O2FRSOPS;
K = 0.1;
KK = 0.5;
KKK = 2;
n1 = 1;
n2 = 1.5;
nn2 = 3;
Theta = (0:1:90);
% K = 0


zrp0 = ((n2/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./((n2/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));
zrs0 = (cos(2*(pi/360)*Theta)-(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+(n2/n1)*sqrt(1-((n1/n2)*sin(2*(pi/360)*Theta)).^2));

% K not 0

zrp = (((n2 -i*K)/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2))./(((n2 -i*K)/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2));
zrs = (cos(2*(pi/360)*Theta)-((n2-i*K)/n1)*sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+((n2-i*K)/n1)*sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2));

% For differen n and K

zzrp = (((nn2 -i*KK)/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/(nn2-i*KK))*sin(2*(pi/360)*Theta)).^2))./(((nn2 -i*KK)/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/(nn2-i*KK))*sin(2*(pi/360)*Theta)).^2));
zzrs = (cos(2*(pi/360)*Theta)-((nn2-i*KK)/n1)*sqrt(1-((n1/(nn2-i*KK))*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+((nn2-i*KK)/n1)*sqrt(1-((n1/(nn2-i*KK))*sin(2*(pi/360)*Theta)).^2));
zzzrp = (((nn2 -i*KKK)/n1)*cos(2*(pi/360)*Theta)-sqrt(1-((n1/(nn2-i*KKK))*sin(2*(pi/360)*Theta)).^2))./(((nn2 -i*KKK)/n1)*cos(2*(pi/360)*Theta)+sqrt(1-((n1/(nn2-i*KKK))*sin(2*(pi/360)*Theta)).^2));
zzzrs = (cos(2*(pi/360)*Theta)-((nn2-i*KKK)/n1)*sqrt(1-((n1/(nn2-i*KKK))*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+((nn2-i*KKK)/n1)*sqrt(1-((n1/(nn2-i*KKK))*sin(2*(pi/360)*Theta)).^2));

figure(1);
subplot(3,2,1);
plot(Theta,real(zrp0),Theta,real(zrp),Theta,real(zzrp),Theta,real(zzzrp));
axis([0 100 -1 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('real(zrp0(	heta))','real(zrp(	heta))','real(zzrp(	heta))','real(zzzrp(	heta))');

subplot(3,2,2);
plot(Theta,real(zrs0),Theta,real(zrs),Theta,real(zzrs),Theta,real(zzzrs));
axis([0 100 -1 1]);                  % PLOTS LIMITS                    
xlabel('	heta');
legend('real(zrs0(	heta))','real(zrs(	heta))','real(zzrs(	heta))','real(zzzrs(	heta))');

% Ratio: p/s

subplot(3,1,2);
plot(Theta,real(zrp0)./real(zrs0),Theta,real(zrp)./real(zrs),Theta,real(zzrp)./real(zzrs),Theta,real(zzzrp)./real(zzzrs));
axis([0 100 -1 1]);                  % PLOTS LIMITS                    
xlabel('	heta');

legend('real(zrp0(	heta))/real(zrs0(	heta))','real(zrp(	heta))/real(zrs(	heta))','real(zzrp(	heta))/real(zzrs(	heta))','real(zzzrp(	heta))/real(zzzrs(	heta))');

% Ratio: s/p

subplot(3,1,3);
plot(Theta,real(zrs0)./real(zrp0),Theta,real(zrs)./real(zrp),Theta,real(zzrs)./real(zzrp),Theta,real(zzzrs)./real(zzzrp));
axis([0 100 -300 200]);                  % PLOTS LIMITS                    
xlabel('	heta');

legend('real(zrs0(	heta))/real(zrp0(	heta))','real(zrs(	heta))/real(zrp(	heta))','real(zzrs(	heta))/real(zzrp(	heta))','real(zzzrs(	heta))/real(zzzrp(	heta))');

`,cCode:"",defaultParams:{}},{id:"O3OSTINS",title:"O3OSTINS - O3OSTINS Graphs of n and K\r",description:"O3OSTINS Graphs of n and K\r",category:"Optics - Optical Materials",chapter:"8",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# O3OSTINS Graphs of n and K
# 1. Dielectric Function for models with one oscillator in the infrared spectral
# region.
# The dielectric constant for high frequencies is set arbitrarily to ?inf = 20.
# The model parameters are S, ?1, ?o. We set z = n - iK
# S and ?1 are dimensionless,
# ?o in cm**-1 i

v = np.arange(900, 1200+1, 1)
S1 = 0.09
Gamma1 = 0.02
Epsiloninf = 20
vo1 = 1050
z1 = np.sqrt(Epsiloninf+ S1/(1-(v/vo1)**2-(Gamma1*v)/vo1))
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(v,real(z1)
)
plt.xlim(900, 1200)
plt.ylim(-2, 15)
;                  # PLOTS LIMITS                    
plt.xlabel('v')
plt.legend(['real(z1(v))'])
plt.subplot(3, 1, 2)

plt.plot(v,imag(z1)
)
plt.xlim(900, 1200)
plt.ylim(-2, 22)
;                  # PLOTS LIMITS                    
plt.xlabel('v')
plt.legend(['imag(z1(v))'])
# 2. For an optical thin medium with little absorption we have the following
# approximations. The parameters must be chosen such that n is close to
# 1 and K is small.

vv = np.arange(0, 2+0.1, 0.1)
a = 0.5e-5
c = 1e-3
n = 1 + a*((1-vv**2)/((1-vv**2)**2+(vv**2)*c**2))
k = (a*(vv*c))/((1-vv**2)**2+(vv**2)*c**2)
plt.subplot(3, 2, 5)

plt.plot(vv,n)

plt.xlim(0, 2)
plt.ylim(0.99995, 1.00005)
;                  # PLOTS LIMITS                    
plt.xlabel('vv')
plt.legend(['n(vv)'])
plt.subplot(3, 2, 6)

plt.plot(vv,k)

plt.xlim(0, 2)
plt.ylim(0, 0.006)
;                  # PLOTS LIMITS                    
plt.xlabel('vv')
plt.legend(['k(vv)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% O3OSTINS Graphs of n and K
% 1. Dielectric Function for models with one oscillator in the infrared spectral
% region.
% The dielectric constant for high frequencies is set arbitrarily to ?inf = 20.
% The model parameters are S, ?1, ?o. We set z = n - iK
% S and ?1 are dimensionless,
% ?o in cm^-1 i
function O3OSTINS;
v = (900:1:1200);
S1 = 0.09;
Gamma1 = 0.02;
Epsiloninf = 20;
vo1 = 1050;
z1 = sqrt(Epsiloninf+ S1./(1-(v/vo1).^2-(Gamma1*v)/vo1));


figure(1);
subplot(3,1,1);
plot(v,real(z1));
axis([900 1200 -2 15]);                  % PLOTS LIMITS                    
xlabel('v');
legend('real(z1(v))');

subplot(3,1,2);
plot(v,imag(z1));
axis([900 1200 -2 22]);                  % PLOTS LIMITS                    
xlabel('v');
legend('imag(z1(v))');

% 2. For an optical thin medium with little absorption we have the following
% approximations. The parameters must be chosen such that n is close to
% 1 and K is small.

vv = (0:0.1:2);
a = 0.5e-5;
c = 1e-3;
n = 1 + a*((1-vv.^2)./((1-vv.^2).^2+(vv.^2)*c^2));
k = (a*(vv*c))./((1-vv.^2).^2+(vv.^2)*c^2);

subplot(3,2,5);
plot(vv,n);
axis([0 2 0.99995 1.00005]);                  % PLOTS LIMITS                    
xlabel('vv');
legend('n(vv)');

subplot(3,2,6);
plot(vv,k);
axis([0 2 0 0.006]);                  % PLOTS LIMITS                    
xlabel('vv');
legend('k(vv)');
`,cCode:"",defaultParams:{}},{id:"O4SELMRS",title:"O4SELMRS - O4SELMRS\r",description:"O4SELMRS\r",category:"Optics - Optical Materials",chapter:"8",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# O4SELMRS
# Graph for a demonstration of the "Sellmeir" presentation of the refractive index.

# For fused quartz we have
c1 = 1.448
c2 = 3.3e5
c3 = 1.23e11
Lamda = np.arange(4000, 8000+1, 1)
n = c1 + c2/(Lamda**2) + c3/(Lamda**4)
fig = plt.figure(1)

plt.plot(Lamda,n)

plt.xlim(4000, 8000)
plt.ylim(1.45, 1.47)
;                  # PLOTS LIMITS                    
xlabel('lambda','Fontsize',12)
plt.legend(['n(lambda)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% O4SELMRS
% Graph for a demonstration of the "Sellmeir" presentation of the refractive index.
function O4SELMRS;
% For fused quartz we have
c1 = 1.448;
c2 = 3.3e5;
c3 = 1.23e11;
Lamda = (4000:1:8000);
n = c1 + c2./(Lamda.^2) + c3./(Lamda.^4);

figure(1);
plot(Lamda,n);
axis([4000 8000 1.45 1.47]);                  % PLOTS LIMITS                    
xlabel('lambda','Fontsize',12);
legend('n(lambda)');`,cCode:"",defaultParams:{}},{id:"O5METALS",title:"O5METALS - O5METALS Calculation of n and K for Copper using the Drude model. \r",description:"O5METALS Calculation of n and K for Copper using the Drude model. \r",category:"Optics - Optical Materials",chapter:"8",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# O5METALS Calculation of n and K for Copper using the Drude model. 
# Calculation of real and imaginary part.
# Expression for low and high frequencies depending on angular frequency.
# 1. General Expression

c = 3e8
Sigma = 6e7; # (OHM m)**-1
Epsilono = 8.85e-12; # C**2/Nm
Tau = 1/4.1e11; # sec

# Angular frequency for 1mm wavelength is 2pi*300*10**9 see below
Omega = linspace(1e11,1e18,5000)
# Omega = (1e11:1e11:1e18)
# The general expression for n+iK=zM(Omega)
zm = np.sqrt(1+((i*Sigma)/(Epsilono*Omega))*(1/(1-i*Omega*Tau)))
fig = plt.figure(1)

plt.subplot(4, 1, 1)

loglog(Omega,real(zm))
plt.xlim(1e11, 1e18)
plt.ylim(1e-4, 1e5)

plt.xlabel('omega')
plt.legend(['real(zm(omega))'])
plt.subplot(4, 1, 2)

loglog(Omega,imag(zm))
plt.xlim(1e11, 1e18)
plt.ylim(1e-13, 1e5)

plt.xlabel('omega')
plt.legend(['imag(zm(omega))'])
# 2. High frequency limit

nh = 1 - Sigma/(Epsilono*(Omega**2)*Tau)
plt.subplot(4, 1, 3)

semilogx(Omega,nh,Omega,real(zm))
plt.xlim(1e14, 1e18)
plt.ylim(-1, 1.1)

plt.xlabel('omega')
plt.legend(['nh(omega)', 'real(zm(omega))'])
# 3. Low frequency limit

n1 = np.sqrt(Sigma/(2*Epsilono*Omega))
plt.subplot(4, 1, 4)

semilogx(Omega,n1,Omega,real(zm))
plt.xlim(1e11, 1e14)
plt.ylim(0, 6e3)

plt.xlabel('omega')
plt.legend(['n1(omega)', 'real(zm(omega))'])
# frequency
# 3e11 is 1mm
# 3e14 is 1micron
# 3e17 is 1nm is 10A
# 1e11 is 3mm
# 1e14 is 3micron
# 1e17 is 3nm is 30A

# angular frequency
# 1e11 is 3/(2pi) =0.477 mm
# 1e14 is 0.477 micron
# 1e17 is 0.477 nm is 47A

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% O5METALS Calculation of n and K for Copper using the Drude model. 
% Calculation of real and imaginary part.
% Expression for low and high frequencies depending on angular frequency.
% 1. General Expression
function O5METALS;
c = 3e8; 
Sigma = 6e7; % (OHM m)^-1
Epsilono = 8.85e-12; %C^2/Nm
Tau = 1/4.1e11; %sec

% Angular frequency for 1mm wavelength is 2pi*300*10^9 see below
Omega = linspace(1e11,1e18,5000);
%Omega = (1e11:1e11:1e18);

% The general expression for n+iK=zM(Omega)
zm = sqrt(1+((i*Sigma)./(Epsilono*Omega)).*(1./(1-i*Omega*Tau)));

figure(1);
subplot(4,1,1);
loglog(Omega,real(zm))
axis([1e11 1e18 1e-4 1e5]);
xlabel('omega');
legend('real(zm(omega))');

subplot(4,1,2);
loglog(Omega,imag(zm))
axis([1e11 1e18 1e-13 1e5]);
xlabel('omega');
legend('imag(zm(omega))');

%2. High frequency limit

nh = 1 - Sigma./(Epsilono*(Omega.^2)*Tau);

subplot(4,1,3);
semilogx(Omega,nh,Omega,real(zm))
axis([1e14 1e18 -1 1.1]);
xlabel('omega');
legend('nh(omega)','real(zm(omega))');

% 3. Low frequency limit

n1 = sqrt(Sigma./(2*Epsilono*Omega));

subplot(4,1,4);
semilogx(Omega,n1,Omega,real(zm));
axis([1e11 1e14 0 6e3]);
xlabel('omega');
legend('n1(omega)','real(zm(omega))');


% frequency
% 3e11 is 1mm
% 3e14 is 1micron
% 3e17 is 1nm is 10A
% 1e11 is 3mm
% 1e14 is 3micron
% 1e17 is 3nm is 30A

% angular frequency
% 1e11 is 3/(2pi) =0.477 mm
% 1e14 is 0.477 micron
% 1e17 is 0.477 nm is 47A
`,cCode:"",defaultParams:{}},{id:"O6SKINS",title:"O6SKINS - O6SKINS Skin Depth\r",description:"O6SKINS Skin Depth\r",category:"Optics - Optical Materials",chapter:"8",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# O6SKINS Skin Depth
# 1. Skin depth (in meters) for intensity depending on frequency


Epsilono = 8.85e-12 # C**2/Nm
c = 3e8
Omega = logspace(10,14,100)
Sigma = 6e7
One = np.sqrt((Epsilono*c**2)/(2*Omega*Sigma)); # in meter

fig = plt.figure(1)

plt.subplot(2, 1, 1)

plt.plot(Omega,One)
plt.xlim(0, 1e14)
plt.ylim(0, 10e-8)

plt.xlabel('omega')
plt.legend(['I(omega)'])
# 2. Skin depth (in meters) for intensity depending on wavelength
# ( for checking:For 1 mm wavelength angular frequency is 2?*300* 10**9)

Lamda = logspace(-9,-3,100)
One = np.sqrt((Epsilono*c*Lamda)/(4*np.pi*Sigma))
plt.subplot(2, 1, 2)

semilogx(Lamda,One)
plt.xlim(1e-7, 1e-3)
plt.ylim(0, 6e-8)

plt.xlabel('lambda')
plt.legend(['I(lambda)'])
# 1 10**-9 meter is 1 nm =.001 microns= 10A
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% O6SKINS Skin Depth
% 1. Skin depth (in meters) for intensity depending on frequency

function O6SKINS;

Epsilono = 8.85e-12 % C^2/Nm
c = 3e8;
Omega = logspace(10,14,100);
Sigma = 6e7;

One = sqrt((Epsilono*c^2)./(2*Omega*Sigma)); % in meter

figure(1);
subplot(2,1,1);
plot(Omega,One)
axis([0 1e14 0 10e-8]);
xlabel('omega');
legend('I(omega)');

% 2. Skin depth (in meters) for intensity depending on wavelength
% ( for checking:For 1 mm wavelength angular frequency is 2?*300* 10^9)

Lamda = logspace(-9,-3,100);
One = sqrt((Epsilono*c*Lamda)/(4*pi*Sigma));

subplot(2,1,2);
semilogx(Lamda,One)
axis([1e-7 1e-3 0 6e-8]);
xlabel('lambda');
legend('I(lambda)');

% 1 10^-9 meter is 1 nm =.001 microns= 10A`,cCode:"",defaultParams:{}},{id:"O7REFNKS",title:"O7REFNKS - O7REFNKS\r",description:"O7REFNKS\r",category:"Optics - Optical Materials",chapter:"8",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# O7REFNKS
# The reflectance R is plotted for normal incidence for fixed
# n depending on K.

Theta = 0
n1 = 1
n2 = 10
K = logspace(-3,2,100)
z = (((n2-i*K)/n1)*np.cos(2*(np.pi/360)*Theta)- np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))/(((n2-i*K)/n1)*np.cos(2*(np.pi/360)*Theta)+ np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))
R = z*conj(z)
fig = plt.figure(1)

plt.plot(K,R)

plt.xlim(0, 100)
plt.ylim(0.6, 1)

plt.xlabel('K')
plt.legend(['R(K)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% O7REFNKS
% The reflectance R is plotted for normal incidence for fixed
% n depending on K.
function O7REFNKS;

Theta = 0;
n1 = 1;
n2 = 10;
K = logspace(-3,2,100);
z = (((n2-i*K)/n1)*cos(2*(pi/360)*Theta)- sqrt(1-((n1./(n2-i*K))*sin(2*(pi/360)*Theta)).^2))./(((n2-i*K)/n1)*cos(2*(pi/360)*Theta)+ sqrt(1-((n1./(n2-i*K))*sin(2*(pi/360)*Theta)).^2));

R = z.*conj(z);
figure(1);
plot(K,R);
axis([0 100 0.6 1]);
xlabel('K');
legend('R(K)');`,cCode:"",defaultParams:{}},{id:"of",title:"of - O8ARDELS Fresnel's Formulas with Absorption\r",description:"O8ARDELS Fresnel's Formulas with Absorption\r",category:"Optics - Optical Materials",chapter:"8",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# O8ARDELS Fresnel's Formulas with Absorption

# Calculation of real part and argument of parallel zrp and perpendicular zrs case
# of Fresnel's formulas with absorption. We assume zrs = rs exp ids and zrp = rp exp idp
# and the argument as function of q.
# The difference of the angle of the two components of the reflected light is plotted.
# This angle is the angle discussed in chapter 5 for light elliptically polarized by reflection.


n1 = 1
n2 = 3
K = 5
Theta = np.arange(0, 89.9+1, 1)
zrp = (((n2-i*K)/n1)*np.cos(2*(np.pi/360)*Theta)- np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))/(((n2-i*K)/n1)*np.cos(2*(np.pi/360)*Theta)+ np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))
zrs = (np.cos(2*(np.pi/360)*Theta)-((n2-i*K)/n1)*np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))/(np.cos(2*(np.pi/360)*Theta)+((n2-i*K)/n1)*np.sqrt(1-((n1/(n2-i*K))*np.sin(2*(np.pi/360)*Theta))**2))
argDelta = angle(zrs)-angle(zrp)-np.pi
fig = plt.figure(1)

plt.plot(Theta,argDelta)

plt.xlim(0, 100)
plt.ylim(-0.1, 6.5)

plt.xlabel('	heta')
plt.legend(['argDelta(	heta)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% O8ARDELS Fresnel's Formulas with Absorption

% Calculation of real part and argument of parallel zrp and perpendicular zrs case
% of Fresnel's formulas with absorption. We assume zrs = rs exp ids and zrp = rp exp idp
% and the argument as function of q.
% The difference of the angle of the two components of the reflected light is plotted.
% This angle is the angle discussed in chapter 5 for light elliptically polarized by reflection.

function O8ARDELS;
n1 = 1;
n2 = 3;
K = 5;

Theta = (0:1:89.9);
zrp = (((n2-i*K)/n1)*cos(2*(pi/360)*Theta)- sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2))./(((n2-i*K)/n1)*cos(2*(pi/360)*Theta)+ sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2));
zrs = (cos(2*(pi/360)*Theta)-((n2-i*K)/n1)*sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2))./(cos(2*(pi/360)*Theta)+((n2-i*K)/n1)*sqrt(1-((n1/(n2-i*K))*sin(2*(pi/360)*Theta)).^2));

argDelta = angle(zrs)-angle(zrp)-pi;

figure(1);
plot(Theta,argDelta);
axis([0 100 -0.1 6.5]);
xlabel('	heta');
legend('argDelta(	heta)');`,cCode:"",defaultParams:{}},{id:"of",title:"of - OA1DELTAFfS\r",description:"OA1DELTAFfS\r",category:"Optics - Optical Materials",chapter:"8",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# OA1DELTAFfS
# Calculation of ratio of real part r of the parallel (p) and perpendicular (s) case,
# and the difference of the arguments of Fresnel's formulas with absorption.
# For values of K we calculate the absolute values of zp = rp exp i?p and
# zs = rs exp i?s and the argument as function of ?.

n = 2
K = 2
Theta = np.arange(0, 90+1, 1)
zp = ((n-i*K)*np.cos(2*np.pi*(Theta/360))-np.sqrt(1-((np.sin(2*np.pi*(Theta/360))**2)/((n-i*K)**2))))/((n-i*K)*np.cos(2*np.pi*(Theta/360))+np.sqrt(1-((np.sin(2*np.pi*(Theta/360))**2)/((n-i*K)**2))))
zs = (np.cos(2*np.pi*(Theta/360))-(n-i*K)*np.sqrt(1-((np.sin(2*np.pi*(Theta/360))**2)/((n-i*K)**2))))/(np.cos(2*np.pi*(Theta/360))+(n-i*K)*np.sqrt(1-((np.sin(2*np.pi*(Theta/360))**2)/((n-i*K)**2))))
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.plot(Theta,np.abs(zp)
)
plt.xlim(0, 90)
plt.ylim(0.2, 1)

plt.xlabel('	heta')
plt.legend(['abs(zp(	heta))'])
plt.subplot(2, 2, 2)

plt.plot(Theta,angle(zp)
)
plt.xlim(0, 90)
plt.ylim(-4, 0)

plt.xlabel('	heta')
plt.legend(['angle(zp(	heta))'])
plt.subplot(2, 2, 3)

plt.plot(Theta,np.abs(zs)
)
plt.xlim(0, 90)
plt.ylim(0.6, 1)

plt.xlabel('	heta')
plt.legend(['abs(zs(	heta))'])
plt.subplot(2, 2, 4)

plt.plot(Theta,angle(zs)
)
plt.xlim(0, 100)
plt.ylim(0, 4)

plt.xlabel('	heta')
plt.legend(['angle(zs(	heta))'])
# The ratio of the absolute value of zs/zp, that is P = tan? and the difference of the
# arguments of zs and zp, that is ?. (parallel (p), perpendicular (s))
fig = plt.figure(2)

plt.subplot(3, 1, 1)

plt.plot(Theta,np.abs(zs)
/np.abs(zp))
plt.xlim(0, 100)
plt.ylim(1, 3)

plt.xlabel('	heta')
plt.legend(['abs(zs(	heta))/abs(zp(	heta))'])
Delta = angle(zs)-angle(zp)
plt.subplot(3, 1, 2)

plt.plot(Theta,-Delta)

plt.xlim(0, 90)
plt.ylim(-8, 0)

plt.xlabel('	heta')
plt.legend(['-Delta'])
Psi = atan(np.abs(zs)/np.abs(zp))
plt.subplot(3, 1, 3)

plt.plot(Theta,Psi)

plt.xlim(0, 90)
plt.ylim(0.7, 1.2)

plt.xlabel('	heta')
plt.legend(['psi'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% OA1DELTAFfS
% Calculation of ratio of real part r of the parallel (p) and perpendicular (s) case,
% and the difference of the arguments of Fresnel's formulas with absorption.
% For values of K we calculate the absolute values of zp = rp exp i?p and
% zs = rs exp i?s and the argument as function of ?.
function OA1DELTAFFS;
n = 2;
K = 2;
Theta = (0:1:90);

zp = ((n-i*K)*cos(2*pi*(Theta/360))-sqrt(1-((sin(2*pi*(Theta/360)).^2)/((n-i*K)^2))))./((n-i*K)*cos(2*pi*(Theta/360))+sqrt(1-((sin(2*pi*(Theta/360)).^2)/((n-i*K)^2))));

zs = (cos(2*pi*(Theta/360))-(n-i*K)*sqrt(1-((sin(2*pi*(Theta/360)).^2)/((n-i*K)^2))))./(cos(2*pi*(Theta/360))+(n-i*K)*sqrt(1-((sin(2*pi*(Theta/360)).^2)/((n-i*K)^2))));

figure(1);
subplot(2,2,1);
plot(Theta,abs(zp));
axis([0 90 0.2 1]);
xlabel('	heta');
legend('abs(zp(	heta))');

subplot(2,2,2);
plot(Theta,angle(zp));
axis([0 90 -4 0]);
xlabel('	heta');
legend('angle(zp(	heta))');

subplot(2,2,3);
plot(Theta,abs(zs));
axis([0 90 0.6 1]);
xlabel('	heta');
legend('abs(zs(	heta))');

subplot(2,2,4);
plot(Theta,angle(zs));
axis([0 100 0 4]);
xlabel('	heta');
legend('angle(zs(	heta))');

% The ratio of the absolute value of zs/zp, that is P = tan? and the difference of the
% arguments of zs and zp, that is ?. (parallel (p), perpendicular (s))
figure(2);
subplot(3,1,1);
plot(Theta,abs(zs)./abs(zp));
axis([0 100 1 3]);
xlabel('	heta');
legend('abs(zs(	heta))/abs(zp(	heta))');

Delta = angle(zs)-angle(zp);

subplot(3,1,2);
plot(Theta,-Delta);
axis([0 90 -8 0]);
xlabel('	heta');
legend('-Delta');
Psi = atan(abs(zs)./abs(zp));

subplot(3,1,3);
plot(Theta,Psi);
axis([0 90 0.7 1.2]);
xlabel('	heta');
legend('psi');`,cCode:"",defaultParams:{}},{id:"OA2METPDS",title:"OA2METPDS - OA2METPDS\r",description:"OA2METPDS\r",category:"Optics - Optical Materials",chapter:"8",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# OA2METPDS
# Calculation of n and K from input values P and ? for
# exact and approximate expressions

Delta = 114
P = 0.50
Psi = atan(P)
k = np.arange(1, 40+1, 1)
Thetak = k * 2
# 1.Exact Expression

zk = np.sqrt((np.sin((2*np.pi*Thetak)/360)**2)+(((np.cos(2*Psi)+i*np.sin((2*np.pi*Delta)/360)*np.sin(2*Psi))*(np.sin((2*np.pi*Thetak)/360)**2))/(np.cos((2*np.pi*Thetak)/360)*(np.cos((2*np.pi*Delta)/360)*np.sin(2*Psi)+1)))**2)
nk = real(zk)
Kk = imag(zk)
# 2.For the approximation one disregards the sin**2 term
z1k =(((np.cos(2*Psi)+i*np.sin((2*np.pi*Delta)/360)*np.sin(2*Psi))*(np.sin((2*np.pi*Thetak)/360)**2))/(np.cos((2*np.pi*Thetak)/360)*(np.cos((2*np.pi*Delta)/360)*np.sin(2*Psi)+1)))
nnk = real(z1k)
KKk = imag(z1k)
# 3.Comparison
fig = plt.figure(1)

plt.subplot(3, 2, 1)

plt.plot(Thetak,real(zk)
,Thetak,real(z1k))
plt.xlim(0, 100)
plt.ylim(0, 4)

plt.xlabel('	hetak')
plt.legend(['real(zk)', 'real(z1k)'])
plt.subplot(3, 2, 2)

plt.plot(Thetak,imag(zk)
,Thetak,imag(z1k))
plt.xlim(0, 100)
plt.ylim(0, 8)

plt.xlabel('	hetak')
plt.legend(['imag(zk)', 'imag(z1k)'])
# 4. The approximation can be written as two real expressions

nnk = ((np.sin((2*np.pi*Thetak)/360)**2)*np.cos(2*Psi))/(np.cos((2*np.pi*Thetak)/360)*(1+np.cos((2*np.pi*Delta)/360)*np.sin(2*Psi)))
KKk = ((np.sin((2*np.pi*Thetak)/360)**2)*(np.sin(Delta)*np.sin(2*Psi)))/(np.cos((2*np.pi*Thetak)/360)*(1+np.cos((2*np.pi*Delta)/360)*np.sin(2*Psi)))
plt.subplot(3, 1, 2)

plt.plot(Thetak,nnk,Thetak,real(zk)
,Thetak,real(z1k))
plt.xlim(0, 80)
plt.ylim(0, 2)

plt.xlabel('	hetak')
plt.legend(['nnk', 'real(zk)', 'real(z1k)'])
plt.subplot(3, 1, 3)

plt.plot(Thetak,KKk,Thetak,imag(zk)
,Thetak,imag(z1k))
plt.xlim(0, 80)
plt.ylim(0, 8)

plt.xlabel('	hetak')
plt.legend(['KKk', 'imag(zk)', 'imag(z1k)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% OA2METPDS
% Calculation of n and K from input values P and ? for
% exact and approximate expressions
function OA2METPDS;
Delta = 114;
P = 0.50;
Psi = atan(P);
k = (1:1:40);
Thetak = k * 2;
% 1.Exact Expression

zk = sqrt((sin((2*pi*Thetak)/360).^2)+(((cos(2*Psi)+i*sin((2*pi*Delta)/360)*sin(2*Psi))*(sin((2*pi*Thetak)/360).^2))./(cos((2*pi*Thetak)/360)*(cos((2*pi*Delta)/360)*sin(2*Psi)+1))).^2);
nk = real(zk);
Kk = imag(zk);
% 2.For the approximation one disregards the sin^2 term
z1k =(((cos(2*Psi)+i*sin((2*pi*Delta)/360)*sin(2*Psi))*(sin((2*pi*Thetak)/360).^2))./(cos((2*pi*Thetak)/360)*(cos((2*pi*Delta)/360)*sin(2*Psi)+1)));
nnk = real(z1k);
KKk = imag(z1k);
% 3.Comparison
figure(1);
subplot(3,2,1);
plot(Thetak,real(zk),Thetak,real(z1k));
axis([0 100 0 4]);
xlabel('	hetak');
legend('real(zk)','real(z1k)');

subplot(3,2,2);
plot(Thetak,imag(zk),Thetak,imag(z1k));
axis([0 100 0 8]);
xlabel('	hetak');
legend('imag(zk)','imag(z1k)');

%4. The approximation can be written as two real expressions

nnk = ((sin((2*pi*Thetak)/360).^2)*cos(2*Psi))./(cos((2*pi*Thetak)/360)*(1+cos((2*pi*Delta)/360)*sin(2*Psi)));

KKk = ((sin((2*pi*Thetak)/360).^2)*(sin(Delta)*sin(2*Psi)))./(cos((2*pi*Thetak)/360)*(1+cos((2*pi*Delta)/360)*sin(2*Psi)));

subplot(3,1,2);
plot(Thetak,nnk,Thetak,real(zk),Thetak,real(z1k));
axis([0 80 0 2]);
xlabel('	hetak');
legend('nnk','real(zk)','real(z1k)');

subplot(3,1,3);
plot(Thetak,KKk,Thetak,imag(zk),Thetak,imag(z1k));
axis([0 80 0 8]);
xlabel('	hetak');
legend('KKk','imag(zk)','imag(z1k)');`,cCode:"",defaultParams:{}},{id:"for",title:"for - F10FTGAUSGS\r",description:"F10FTGAUSGS\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F10FTGAUSGS
# Complex Fourier transformation of Gauss function for
# two values of a and for general Fourier Transformation.
# The maximum is at i = 0. The FT (inverse) of the FT is also calculated.

i = np.arange(0, 325+1, 1)
A = 1
a = 100
aa = 50
y1 = A*np.exp(-a*((i/255)**2))
y2 = A*np.exp(-aa*((i/255)**2))
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(i/255,y1,i/255,y2)

plt.xlim(0, 1.5)
plt.ylim(0, 1)

plt.xlabel('i/255')
plt.legend(['y1', 'y2'])

c1 = fft(y1)
c2 = fft(y2)
N = length(c2)-1; # N=325
j=(0:1:N)
plt.subplot(3, 1, 2)

plt.plot(j,real(c1)
/np.sqrt(N+1),j,real(c2)/np.sqrt(N+1))
plt.xlim(0, 400)
plt.ylim(0, 2)

plt.xlabel('j')
plt.legend(['real(c1)/sqrt(N+1)', 'real(c2)/sqrt(N+1)'])
zf1 = ifft(c1)
zf2 = ifft(c2)
N2 = length(zf2)-1
i = (0:1:N2)
plt.subplot(3, 1, 3)

plt.plot(i/255,zf1,i/255,zf2)

plt.xlim(0, 0.6)
plt.ylim(0, 1)

plt.xlabel('i/255')
plt.legend(['zf1', 'zf2'])
# The coordinate is again i/255


# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% F10FTGAUSGS
% Complex Fourier transformation of Gauss function for
% two values of a and for general Fourier Transformation.
% The maximum is at i = 0. The FT (inverse) of the FT is also calculated.
function F10FTGAUSGS;
i = (0:1:325);
A = 1;
a = 100;
aa = 50;
y1 = A*exp(-a*((i/255).^2));
y2 = A*exp(-aa*((i/255).^2));

figure(1);
subplot(3,1,1);
plot(i/255,y1,i/255,y2);
axis([0 1.5 0 1]);
xlabel('i/255');
legend('y1','y2');

c1 = fft(y1);
c2 = fft(y2);
N = length(c2)-1; % N=325
j=(0:1:N);

subplot(3,1,2);
plot(j,real(c1)/sqrt(N+1),j,real(c2)/sqrt(N+1));
axis([0 400 0 2]);
xlabel('j');
legend('real(c1)/sqrt(N+1)','real(c2)/sqrt(N+1)');

zf1 = ifft(c1);
zf2 = ifft(c2);


N2 = length(zf2)-1;
i = (0:1:N2);

subplot(3,1,3);
plot(i/255,zf1,i/255,zf2);
axis([0 0.6 0 1]);
xlabel('i/255');
legend('zf1','zf2');
% The coordinate is again i/255

`,cCode:"",defaultParams:{}},{id:"F11CONVOS",title:"F11CONVOS - F11CONVOS\r",description:"F11CONVOS\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F11CONVOS
# Convolution integral for functions y and S

b2 = 0.2
f = 800
a = 1
Lamda = 0.0005
k = (2*np.pi)/Lamda
X = np.arange(0, 1+0.001, 0.001)
# tol = 0.01
# Function S
Sx = S(X)
# Function y
yx = y(X)
fig = plt.figure(1)

plt.subplot(2, 2, 1)

plt.plot(X,yx)

plt.xlim(0, 1)
plt.ylim(0, 1.5)

plt.xlabel('X')
plt.legend(['y(X)'])
plt.subplot(2, 2, 2)

plt.plot(X,Sx)

plt.xlim(0, 1)
plt.ylim(-1, 1)

plt.xlabel('X')
plt.legend(['S(X)'])
nx = length(X)
for jk=1:nx
    Ix(jk) = 2*quad(@If,0,0.5,[],[],X(jk))
plt.subplot(2, 1, 2)

plt.plot(X,Ix,X,Sx)

plt.xlim(0, 1)
plt.ylim(-1, 1)

plt.xlabel('X')
plt.legend(['I(X)', 'S(X)'])
Out = (logical(b2-X)>=0)
Out = np.sin((k*a*X)/f)
Out = y(XX)*(np.sin(k*a*(X-XX)/f))
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% F11CONVOS
% Convolution integral for functions y and S
function F11CONVOS;
global k a f b2;
b2 = 0.2;
f = 800;
a = 1;
Lamda = 0.0005;
k = (2*pi)/Lamda;

X = (0:0.001:1);
% tol = 0.01;
% Function S
Sx = S(X);

% Function y
yx = y(X);

figure(1);
subplot(2,2,1);
plot(X,yx);
axis([0 1 0 1.5]);
xlabel('X');
legend('y(X)');

subplot(2,2,2);
plot(X,Sx);
axis([0 1 -1 1]);
xlabel('X');
legend('S(X)');

nx = length(X);
for jk=1:nx
    Ix(jk) = 2*quad(@If,0,0.5,[],[],X(jk));
end;

subplot(2,1,2);
plot(X,Ix,X,Sx);
axis([0 1 -1 1]);
xlabel('X');
legend('I(X)','S(X)');

function Out=y(X)
global b2;
Out = (logical(b2-X)>=0);

function Out=S(X)
global k a f;
Out = sin((k*a*X)/f);

function Out=If(XX,X)
global k a f;
Out = y(XX).*(sin(k*a*(X-XX)/f));`,cCode:"",defaultParams:{}},{id:"F12FTDISC1S",title:"F12FTDISC1S - F12FTDISC1S\r",description:"F12FTDISC1S\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F12FTDISC1S

# Graph of cosine functions depending on i = 1,2,3....and frequencies 1/128,2/128
# and so on to 130/128. Look for the repetition.

# Length interval is i = 1,2,3...

i = np.arange(0, 140+1, 1)
# 1.Frequencies
# f = 1/128, 2/128, 3/128
y1 = np.cos(2*np.pi*(1/128)*i)
y2 = np.cos(2*np.pi*(2/128)*i)
y3 = np.cos(2*np.pi*(3/128)*i)
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(i,y1,i,y2,i,y3)

plt.xlim(0, 140)
plt.ylim(-1, 1)

plt.xlabel('i')
plt.legend(['y1', 'y2', 'y3'])

# 2.Frequency 64/128
y64 = np.cos(2*np.pi*(64/128)*i)
plt.subplot(3, 1, 2)

plt.plot(i,y64)

plt.xlim(0, 140)
plt.ylim(-1, 1)

plt.xlabel('i')
plt.legend(['y64'])

# 3.Frequencies
# 127/128, 128/128, 129/128, 130/128

y127 = np.cos(2*np.pi*(127/128)*i)
y128 = np.cos(2*np.pi*(128/128)*i); # will not show up on the graph
y129 = np.cos(2*np.pi*(129/128)*i); # same as 127/128 and 1/128
y130 = np.cos(2*np.pi*(130/128)*i); # same as 2/128

plt.subplot(3, 1, 3)

plt.plot(i,y127,i,y128,i,y129,i,y130)

plt.xlim(0, 140)
plt.ylim(-1, 1)

plt.xlabel('i')
plt.legend(['y127', 'y128', 'y129', 'y130'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% F12FTDISC1S

% Graph of cosine functions depending on i = 1,2,3....and frequencies 1/128,2/128
% and so on to 130/128. Look for the repetition.

% Length interval is i = 1,2,3...
function F12FTDISC1S;
i = (0:1:140);

% 1.Frequencies
% f = 1/128, 2/128, 3/128
y1 = cos(2*pi*(1/128)*i);
y2 = cos(2*pi*(2/128)*i);
y3 = cos(2*pi*(3/128)*i);

figure(1);
subplot(3,1,1);
plot(i,y1,i,y2,i,y3);
axis([0 140 -1 1]);
xlabel('i');
legend('y1','y2','y3');

% 2.Frequency 64/128
y64 = cos(2*pi*(64/128)*i);

subplot(3,1,2);
plot(i,y64);
axis([0 140 -1 1]);
xlabel('i');
legend('y64');

% 3.Frequencies
% 127/128, 128/128, 129/128, 130/128

y127 = cos(2*pi*(127/128)*i);
y128 = cos(2*pi*(128/128)*i); % will not show up on the graph
y129 = cos(2*pi*(129/128)*i); % same as 127/128 and 1/128
y130 = cos(2*pi*(130/128)*i); % same as 2/128

subplot(3,1,3);
plot(i,y127,i,y128,i,y129,i,y130);
axis([0 140 -1 1]);
xlabel('i');
legend('y127','y128','y129','y130');`,cCode:"",defaultParams:{}},{id:"show",title:"show - F13DTDISC2S\r",description:"F13DTDISC2S\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F13DTDISC2S
# The cos-function show "mirror" symmetry around the
# middle of the interval, at the beginning and at the end.

# Length interval is 1,2,3...
# 1.Frequencies f = 1/128, 2/128, 3/128
i = np.arange(0, 127+1, 1)
y1 = np.cos(2*np.pi*(1/128)*i)
y2 = np.cos(2*np.pi*(2/128)*i)
y3 = np.cos(2*np.pi*(63/128)*i)
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(i,y1,i,y2,i,y3)

plt.xlim(0, 140)
plt.ylim(-1, 1)

plt.xlabel('i')
plt.legend(['y1', 'y2', 'y3'])

# 2.Frequencies f=63/128, 64/128, 65/128
y63 = np.cos(2*np.pi*(63/128)*i)
y64 = np.cos(2*np.pi*(64/128)*i)
y65 = np.cos(2*np.pi*(65/128)*i)
plt.subplot(3, 1, 2)

plt.plot(i,y63,i,y64,i,y65)

plt.xlim(0, 128)
plt.ylim(-1, 1)

plt.xlabel('i')
plt.legend(['y63', 'y64', 'y65'])

# 3.Expended graph
j = np.arange(20, 50+1, 1)
y63j = np.cos(2*np.pi*(63/128)*j)
y64j = np.cos(2*np.pi*(64/128)*j)
y65j = np.cos(2*np.pi*(65/128)*j)
plt.subplot(3, 1, 3)

plt.plot(j,y63j,j,y64j,j,y65j)

plt.xlim(20, 50)
plt.ylim(-1, 1)

plt.xlabel('j')
plt.legend(['y63j', 'y64j', 'y65j'])

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% F13DTDISC2S
% The cos-function show "mirror" symmetry around the
% middle of the interval, at the beginning and at the end.
function F13DTDISC2S;
% Length interval is 1,2,3...
% 1.Frequencies f = 1/128, 2/128, 3/128
i = (0:1:127);
y1 = cos(2*pi*(1/128)*i);
y2 = cos(2*pi*(2/128)*i);
y3 = cos(2*pi*(63/128)*i);

figure(1);
subplot(3,1,1);
plot(i,y1,i,y2,i,y3);
axis([0 140 -1 1]);
xlabel('i');
legend('y1','y2','y3');

% 2.Frequencies f=63/128, 64/128, 65/128
y63 = cos(2*pi*(63/128)*i);
y64 = cos(2*pi*(64/128)*i);
y65 = cos(2*pi*(65/128)*i);

subplot(3,1,2);
plot(i,y63,i,y64,i,y65);
axis([0 128 -1 1]);
xlabel('i');
legend('y63','y64','y65');

% 3.Expended graph
j = (20:1:50);
y63j = cos(2*pi*(63/128)*j);
y64j = cos(2*pi*(64/128)*j);
y65j = cos(2*pi*(65/128)*j);

subplot(3,1,3);
plot(j,y63j,j,y64j,j,y65j);
axis([20 50 -1 1]);
xlabel('j');
legend('y63j','y64j','y65j');
`,cCode:"",defaultParams:{}},{id:"F14MICHOPS",title:"F14MICHOPS - F14MICHOPS\r",description:"F14MICHOPS\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F14MICHOPS

# Michelson interferometer. Beamsplitter is assumed to be ideal with 50-50
# efficinecy.Fringe pattern on displacement of mirrors.

# Amplitude and intensity pattern depending on displacement x of mirror.
# The "space coordinate" is a sequence of discreate points, all having the same
# distance.


# 1. Cosine function, one frequency, amplitude.
# The space coordinate runs from 0 to 127
i = np.arange(0, 127+1, 1)
kmax = 1; # we have k=1/128 as the frequency

nx = length(i)
for ui=1:nx
    sum = 0
    for rk=1:kmax
        sum = sum + np.cos(2*np.pi*(rk/128)*i(ui))
    u1(ui) = sum
fig = plt.figure(1)

plt.subplot(4, 1, 1)

plt.plot(i,u1)

plt.xlim(0, 140)
plt.ylim(-1, 1)

plt.xlabel('i')
plt.legend(['u1'])

# We just go through one cycle

# 2. Cosine function, one frequency, intensity.
plt.subplot(4, 1, 2)

plt.plot(i,(u1)
**2)
plt.xlim(0, 128)
plt.ylim(-1, 1)

plt.xlabel('i')
plt.legend(['(u1)^2'])
# 3. Cosine function, many frequencies, amplitude.
i = np.arange(0, 127+1, 1)
nx = length(i)
kmax = 20
for u2i=1:nx
    sum = 0
    for rk=1:kmax
        sum = sum + np.cos(2*np.pi*(rk/128)*i(u2i))
    u2(u2i) = sum
# k = 1/128, 2/128.. 20/128 are the frequencies,

plt.subplot(4, 1, 3)

plt.plot(i,u2)

plt.xlim(0, 140)
plt.ylim(-20, 20)

plt.xlabel('i')
plt.legend(['u2'])
# 4. Cosine function, many frequencies, intensity.


plt.subplot(4, 1, 4)

plt.plot(i,(u2**2)
)
plt.xlim(0, 140)
plt.ylim(0, 400)

plt.xlabel('i')
plt.legend(['(u2)^2'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% F14MICHOPS

% Michelson interferometer. Beamsplitter is assumed to be ideal with 50-50
% efficinecy.Fringe pattern on displacement of mirrors.

% Amplitude and intensity pattern depending on displacement x of mirror.
% The "space coordinate" is a sequence of discreate points, all having the same
% distance.

function F14MICHOPS;
% 1. Cosine function, one frequency, amplitude.
% The space coordinate runs from 0 to 127
i = (0:1:127);
kmax = 1; % we have k=1/128 as the frequency

nx = length(i);
for ui=1:nx
    sum = 0;
    for rk=1:kmax
        sum = sum + cos(2*pi*(rk/128)*i(ui));            
    end;
    u1(ui) = sum;
end;


figure(1);
subplot(4,1,1);
plot(i,u1);
axis([0 140 -1 1]);
xlabel('i');
legend('u1');

% We just go through one cycle

% 2. Cosine function, one frequency, intensity.
subplot(4,1,2);
plot(i,(u1).^2);
axis([0 128 -1 1]);
xlabel('i');
legend('(u1)^2');
% 3. Cosine function, many frequencies, amplitude.
i = (0:1:127);
nx = length(i);
kmax = 20;
for u2i=1:nx
    sum = 0;
    for rk=1:kmax
        sum = sum + cos(2*pi*(rk/128)*i(u2i));            
    end;
    u2(u2i) = sum;
end;
% k = 1/128, 2/128.. 20/128 are the frequencies,

subplot(4,1,3);
plot(i,u2);
axis([0 140 -20 20]);
xlabel('i');
legend('u2');
% 4. Cosine function, many frequencies, intensity.


subplot(4,1,4);
plot(i,(u2.^2));
axis([0 140 0 400]);
xlabel('i');
legend('(u2)^2');`,cCode:"",defaultParams:{}},{id:"F15FOLDS",title:"F15FOLDS - F15FOLDS\r",description:"F15FOLDS\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F15FOLDS
# Folding of the spectrum.
# For the sampling interval 1/255, highest frequency is 128,
# the frequencies are at 65, 85, 105, all below 127.

# a.Sample interval i/255
i = np.arange(0, 255+1, 1)
y1 = np.cos(2*np.pi*65*(i/255)) + np.cos(2*np.pi*85*(i/255)) + np.cos(2*np.pi*105*(i/255))
fig = plt.figure(1)

plt.subplot(3, 2, 1)

plt.plot(i/255,y1)

plt.xlim(0, 1)
plt.ylim(-2, 4)

plt.xlabel('i/255')
plt.legend(['y1'])

c = fft(y1)
N = length(c) - 1
j = (0:1:N)
plt.subplot(3, 2, 2)

plt.plot(j,real(c)
/np.sqrt(N+1))
plt.xlim(0, 140)
plt.ylim(-5, 10)

plt.xlabel('j')
plt.legend(['real(c)/sqrt(N+1)'])
# Frequency peaks are at 65 85 105

# b.Sample interval 2i/255

# For the sampling interval 2/255, highest frequency is 64, the original frequencies are at
# 65, 85, 105, all larger than 64 and appear folded.

y2 = np.cos(2*np.pi*65*((2*i)/255))+np.cos(2*np.pi*85*((2*i)/255)) + np.cos(2*np.pi*105*((2*i)/255))
plt.subplot(3, 2, 3)

plt.plot(2*(i/255)
,y2)
plt.xlim(0, 2)
plt.ylim(-2, 4)

plt.xlabel('2*(i/255)')
plt.legend(['y2'])

cc = fft(y2)
N = length(cc) - 1
j = (0:1:N)
plt.subplot(3, 2, 4)

plt.plot(j,real(cc)
/np.sqrt(N+1))
plt.xlim(0, 140)
plt.ylim(-5, 10)

plt.xlabel('j')
plt.legend(['real(cc)/sqrt(N+1)'])
# Frequency peaks appear 65 at--> 125
# 85 at--> 85
# 105 at--> 45

# c. Sample interval 4i/255
# For the sampling interval 4/255, highest frequency 32, the frequencies are
# higher than 1 times 32 and 2 times 32.

y4 = np.cos(2*np.pi*65*((4*i)/255)) + np.cos(2*np.pi*85*((4*i)/255)) + np.cos(2*np.pi*105*((4*i)/255))
plt.subplot(3, 2, 5)

plt.plot(4*(i/255)
, y4)
plt.xlim(0, 4)
plt.ylim(-2, 4)

plt.xlabel('4*(i/255)')
plt.legend(['y4'])

ccc = fft(y4)
N = length(ccc)-1
j = (0:1:N)
plt.subplot(3, 2, 6)

plt.plot(j,real(ccc)
/np.sqrt(N+1))
plt.xlim(0, 140)
plt.ylim(-5, 10)

plt.xlabel('j')
plt.legend(['real(ccc)/sqrt(N+1)'])
# Frequency peaks appear 65 at--> 5
# 85 at--> 85
# 105 at--> 90

# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% F15FOLDS
% Folding of the spectrum.
% For the sampling interval 1/255, highest frequency is 128,
% the frequencies are at 65, 85, 105, all below 127.
function F15FOLDS;
% a.Sample interval i/255
i = (0:1:255);
y1 = cos(2*pi*65*(i/255)) + cos(2*pi*85*(i/255)) + cos(2*pi*105*(i/255));

figure(1);
subplot(3,2,1);
plot(i/255,y1);
axis([0 1 -2 4]);
xlabel('i/255');
legend('y1');

c = fft(y1);
N = length(c) - 1;
j = (0:1:N);

subplot(3,2,2);
plot(j,real(c)/sqrt(N+1));
axis([0 140 -5 10]);
xlabel('j');
legend('real(c)/sqrt(N+1)');
% Frequency peaks are at 65 85 105

% b.Sample interval 2i/255

% For the sampling interval 2/255, highest frequency is 64, the original frequencies are at
% 65, 85, 105, all larger than 64 and appear folded.

y2 = cos(2*pi*65*((2*i)/255))+cos(2*pi*85*((2*i)/255)) + cos(2*pi*105*((2*i)/255));

subplot(3,2,3);
plot(2*(i/255),y2);
axis([0 2 -2 4]);
xlabel('2*(i/255)');
legend('y2');

cc = fft(y2);
N = length(cc) - 1;
j = (0:1:N);


subplot(3,2,4);
plot(j,real(cc)/sqrt(N+1));
axis([0 140 -5 10]);
xlabel('j');
legend('real(cc)/sqrt(N+1)');
% Frequency peaks appear 65 at--> 125
%                        85 at--> 85
%                       105 at--> 45

% c. Sample interval 4i/255
% For the sampling interval 4/255, highest frequency 32, the frequencies are
% higher than 1 times 32 and 2 times 32.

y4 = cos(2*pi*65*((4*i)/255)) + cos(2*pi*85*((4*i)/255)) + cos(2*pi*105*((4*i)/255));

subplot(3,2,5);
plot(4*(i/255), y4);
axis([0 4 -2 4]);
xlabel('4*(i/255)');
legend('y4');

ccc = fft(y4);
N = length(ccc)-1;
j = (0:1:N);

subplot(3,2,6);
plot(j,real(ccc)/sqrt(N+1));
axis([0 140 -5 10]);
xlabel('j');
legend('real(ccc)/sqrt(N+1)');

% Frequency peaks appear 65 at--> 5
%                        85 at--> 85
%                       105 at--> 90
`,cCode:"",defaultParams:{}},{id:"and",title:"and - F16APODIS\r",description:"F16APODIS\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F16APODIS
# Fourier transformation of sine-function and Appodisation


# 1.Original function
f = 31
k = np.arange(0, 255+1, 1)
y = np.cos(2*np.pi*f*(k/255))
fig = plt.figure(1)

plt.subplot(3, 2, 1)

plt.plot(k/255,y)

plt.xlim(0, 1)
plt.ylim(-1, 1)

plt.xlabel('k/255')
plt.legend(['y'])

# 2.Step function
d = 255
i = np.arange(0, 400+1, 1)
p = ((logical(i)>=0) - (logical(i-d)>=0))
plt.subplot(3, 2, 2)

plt.plot(i/255,real(p)
,i/255,imag(p))
plt.xlim(0, 2)
plt.ylim(-0.5, 1.5)

plt.xlabel('i/255')
plt.legend(['real(p)', 'imag(p)'])
yp = np.cos(2*np.pi*f*(i/255))*p
plt.subplot(3, 2, 3)

plt.plot(i/255,yp)

plt.xlim(0, 1.6)
plt.ylim(-1, 1)

plt.xlabel('i/255')
plt.legend(['yp'])

# 3.Fourier transformation of y times p, we have to use 255 points
k = np.arange(0, 255+1, 1)
x = np.cos(2*np.pi*f*(k/255))*((logical(k)>=0) - (logical(k-d)>=0))
c = fft(x)
N = length(c) - 1
j =(0:1:N)
plt.subplot(3, 2, 4)

plt.plot(j,real(c)
/np.sqrt(N+1))
plt.xlim(-5, 140)
plt.ylim(-2, 8)

plt.xlabel('j')
plt.legend(['real(c)/sqrt(N+1)'])
# 4.Triangle function
q = 1-k/255
ay = q*y
plt.subplot(3, 2, 5)

plt.plot(k/255,ay)

plt.xlim(0, 1)
plt.ylim(-1, 1)

plt.xlabel('k/255')
plt.legend(['ay'])

# 5.Fourier transformation of y times p, we have to use 255 points

c = fft(ay)
N = length(c) - 1
j = (0:1:N)
plt.subplot(3, 2, 6)

plt.plot(j, real(c)
/np.sqrt(N+1))
plt.xlim(0, 140)
plt.ylim(-2, 8)

plt.xlabel('j')
plt.legend(['real(c)/sqrt(N+1)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% F16APODIS
% Fourier transformation of sine-function and Appodisation

function F16APODIS;
% 1.Original function
f = 31;
k = (0:1:255);
y = cos(2*pi*f*(k/255));

figure(1);
subplot(3,2,1);
plot(k/255,y);
axis([0 1 -1 1]);
xlabel('k/255');
legend('y');

% 2.Step function
d = 255;
i = (0:1:400);
p = ((logical(i)>=0) - (logical(i-d)>=0));

subplot(3,2,2);
plot(i/255,real(p),i/255,imag(p));
axis([0 2 -0.5 1.5]);
xlabel('i/255');
legend('real(p)','imag(p)');

yp = cos(2*pi*f*(i/255)).*p;

subplot(3,2,3);
plot(i/255,yp);
axis([0 1.6 -1 1]);
xlabel('i/255');
legend('yp');

% 3.Fourier transformation of y times p, we have to use 255 points
k = (0:1:255);
x = cos(2*pi*f*(k/255)).*((logical(k)>=0) - (logical(k-d)>=0));
c = fft(x);
N = length(c) - 1;
j =(0:1:N);



subplot(3,2,4);
plot(j,real(c)/sqrt(N+1));
axis([-5 140 -2 8]);
xlabel('j');
legend('real(c)/sqrt(N+1)');

% 4.Triangle function
q = 1-k/255;
ay = q.*y;

subplot(3,2,5);
plot(k/255,ay);
axis([0 1 -1 1]);
xlabel('k/255');
legend('ay');

% 5.Fourier transformation of y times p, we have to use 255 points

c = fft(ay);
N = length(c) - 1;
j = (0:1:N);

subplot(3,2,6);
plot(j, real(c)/sqrt(N+1));
axis([0 140 -2 8]);
xlabel('j');
legend('real(c)/sqrt(N+1)');

`,cCode:"",defaultParams:{}},{id:"of",title:"of - F1FTSTEPS\r",description:"F1FTSTEPS\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F1FTSTEPS
# The real FT is used.
# Fourier transform of a SINGLE SIDED step function of width 0 to d.


i = np.arange(0, 255+1, 1)
d = 20
nx = length(i)
x = (logical(i)>=0) - (logical(i-d)>=0)

fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(i/255,real(x)
,i/255,imag(x))
plt.xlim(0, 1)
plt.ylim(-0.5, 1.5)

plt.xlabel('i/255')
plt.legend(['real(x)', 'imag(x)'])
# Fourier transform
c = fft(x)
# N = 128
N = length(c)-1
j = (0:1:N)
plt.subplot(3, 1, 2)

plt.plot(j/255,real(c)
/np.sqrt(N+1),j/255,-imag(c)/np.sqrt(N+1))
plt.xlim(0, 0.6)
plt.ylim(-1, 2)

plt.xlabel('j/255')
plt.legend(['real(c)/sqrt(N+1)', '-imag(c)/sqrt(N+1)'])
# The first zero of the FT
# is at 1/2d

# Fourier transform - inverse of Fourier transform
y = ifft(c)
N = length(c)-1
j = (0:1:N)
# 1/(2*d)=0.025

plt.subplot(3, 1, 3)

plt.plot(j/255,real(y)
,j/255,imag(y))
plt.xlim(0, 0.6)
plt.ylim(-0.5, 1.5)

plt.xlabel('j/255')
plt.legend(['real(y)', 'imag(y)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% F1FTSTEPS
% The real FT is used.
% Fourier transform of a SINGLE SIDED step function of width 0 to d.

function F1FTSTEPS;
i = (0:1:255);
d = 20;
nx = length(i);
x = (logical(i)>=0) - (logical(i-d)>=0)

figure(1);
subplot(3,1,1);
plot(i/255,real(x),i/255,imag(x));
axis([0 1 -0.5 1.5]);
xlabel('i/255');
legend('real(x)','imag(x)');

%Fourier transform
c = fft(x);
%N = 128
N = length(c)-1;
j = (0:1:N);

subplot(3,1,2);
plot(j/255,real(c)/sqrt(N+1),j/255,-imag(c)/sqrt(N+1));
axis([0 0.6 -1 2]);
xlabel('j/255');
legend('real(c)/sqrt(N+1)','-imag(c)/sqrt(N+1)');

% The first zero of the FT
% is at 1/2d

%Fourier transform - inverse of Fourier transform
y = ifft(c);
N = length(c)-1;
j = (0:1:N);

% 1/(2*d)=0.025

subplot(3,1,3);
plot(j/255,real(y),j/255,imag(y));
axis([0 0.6 -0.5 1.5]);
xlabel('j/255');
legend('real(y)','imag(y)');`,cCode:"",defaultParams:{}},{id:"of",title:"of - F2FTSTEPDS\r",description:"F2FTSTEPDS\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F2FTSTEPDS
# The real FT is used.
# Fourier transform of DOUBLE SIDED step function of width 0 to d.


# Original Function
i = np.arange(0, 255+1, 1)
d = 20
nx = length(i)
x = (logical(i)>=0) - (logical(i-d)>=0) + (logical(i-255+d)>=0)
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(i/255,real(x)
,i/255,imag(x))
plt.xlim(0, 1)
plt.ylim(-0.5, 1.5)

plt.xlabel('i/255')
plt.legend(['real(x)', 'imag(x)'])
# Fourier transform
c = fft(x)
# N = 128
N = length(c)-1
j = (0:1:N)
plt.subplot(3, 1, 2)

plt.plot(j/255,real(c)
/np.sqrt(N+1),j/255,-imag(c)/np.sqrt(N+1))
plt.xlim(0, 0.6)
plt.ylim(-2, 4)

plt.xlabel('j/255')
plt.legend(['real(c)/sqrt(N+1)', '-imag(c)/sqrt(N+1)'])
# The first zero of the FT
# is at 1/2d

# Fourier transform(inverse) of Fourier transform
z = ifft(c)
N = length(c)-1
k = (0:1:N)
# 1/(2*d)=0.025

plt.subplot(3, 1, 3)

plt.plot(i,real(z)
,i,imag(z))
plt.xlim(0, 300)
plt.ylim(-0.5, 1.5)

plt.xlabel('i')
plt.legend(['real(z)', 'imag(z)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% F2FTSTEPDS
% The real FT is used.
% Fourier transform of DOUBLE SIDED step function of width 0 to d.

function F2FTSTEPDS;
% Original Function
i = (0:1:255);
d = 20;
nx = length(i);
x = (logical(i)>=0) - (logical(i-d)>=0) + (logical(i-255+d)>=0);

figure(1);
subplot(3,1,1);
plot(i/255,real(x),i/255,imag(x));
axis([0 1 -0.5 1.5]);
xlabel('i/255');
legend('real(x)','imag(x)');

%Fourier transform
c = fft(x);
%N = 128
N = length(c)-1;
j = (0:1:N);

subplot(3,1,2);
plot(j/255,real(c)/sqrt(N+1),j/255,-imag(c)/sqrt(N+1));
axis([0 0.6 -2 4]);
xlabel('j/255');
legend('real(c)/sqrt(N+1)','-imag(c)/sqrt(N+1)');


% The first zero of the FT
% is at 1/2d

%Fourier transform(inverse) of Fourier transform
z = ifft(c);
N = length(c)-1;
k = (0:1:N);

% 1/(2*d)=0.025

subplot(3,1,3);
plot(i,real(z),i,imag(z));
axis([0 300 -0.5 1.5]);
xlabel('i');
legend('real(z)','imag(z)');`,cCode:"",defaultParams:{}},{id:"of",title:"of - F2FTSTEPDS\r",description:"F2FTSTEPDS\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F2FTSTEPDS
# The complex FT is used.
# Fourier transform of SINGLE SIDED step function of width 0 to d.


# Original Function
i = np.arange(0, 255+1, 1)
d = 20
nx = length(i)
x = (logical(i)>=0) - (logical(i-d)>=0)
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(i,real(x)
,i,imag(x))
plt.xlim(0, 300)
plt.ylim(-0.5, 1.5)

plt.xlabel('i')
plt.legend(['real(x)', 'imag(x)'])
# Fourier transform
c = fft(x)
# N = 128
N = length(c)-1
j = (0:1:N)
plt.subplot(3, 1, 2)

plt.plot(j/255,real(c)
/np.sqrt(N+1),j/255,-imag(c)/np.sqrt(N+1))
plt.xlim(0, 1)
plt.ylim(-1, 2)

plt.xlabel('j/255')
plt.legend(['real(c)/sqrt(N+1)', '-imag(c)/sqrt(N+1)'])
# The first zero of the FT
# is at 1/2d

# Fourier transform(inverse) of Fourier transform
z = ifft(c)
N = length(c)-1
k = (0:1:N)
# 1/(2*d)=0.025

plt.subplot(3, 1, 3)

plt.plot(i,real(z)
,i,imag(z))
plt.xlim(0, 300)
plt.ylim(-0.5, 1.5)

plt.xlabel('i')
plt.legend(['real(z)', 'imag(z)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% F2FTSTEPDS
% The complex FT is used.
% Fourier transform of SINGLE SIDED step function of width 0 to d.

function F3DTSTEPC1S;
% Original Function
i = (0:1:255);
d = 20;
nx = length(i);
x = (logical(i)>=0) - (logical(i-d)>=0);

figure(1);
subplot(3,1,1);
plot(i,real(x),i,imag(x));
axis([0 300 -0.5 1.5]);
xlabel('i');
legend('real(x)','imag(x)');

%Fourier transform
c = fft(x);
%N = 128
N = length(c)-1;
j = (0:1:N);

subplot(3,1,2);
plot(j/255,real(c)/sqrt(N+1),j/255,-imag(c)/sqrt(N+1));
axis([0 1 -1 2]);
xlabel('j/255');
legend('real(c)/sqrt(N+1)','-imag(c)/sqrt(N+1)');

% The first zero of the FT
% is at 1/2d

%Fourier transform(inverse) of Fourier transform
z = ifft(c);
N = length(c)-1;
k = (0:1:N);

% 1/(2*d)=0.025

subplot(3,1,3);
plot(i,real(z),i,imag(z));
axis([0 300 -0.5 1.5]);
xlabel('i');
legend('real(z)','imag(z)');`,cCode:"",defaultParams:{}},{id:"of",title:"of - F4FTSTEPOSS\r",description:"F4FTSTEPOSS\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F4FTSTEPOSS
# The complex FT is used.
# Fourier transform of DOUBLE SIDED step function of width 0 to d.


# Original Function
i = np.arange(0, 255+1, 1)
d = 20
nx = length(i)
x = (logical(i)>=0) - (logical(i-d)>=0) + (logical(i-255+d)>=0)
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(i,real(x)
,i,imag(x))
plt.xlim(0, 300)
plt.ylim(-0.5, 1.5)

plt.legend(['real(x)', 'imag(x)'])
plt.xlabel('i')
# Fourier transform
c = fft(x)
# N = 128
N = length(c)-1
j = (0:1:N)
plt.subplot(3, 1, 2)

plt.plot(j/255,real(c)
/np.sqrt(N+1),j/255,-imag(c)/np.sqrt(N+1))
plt.xlim(0, 1)
plt.ylim(-2, 4)

plt.xlabel('j/255')
plt.legend(['real(c)/sqrt(N+1)', '-imag(z)/sqrt(N+1)'])
# The first zero of the FT
# is at 1/2d

# Fourier transform(inverse) of Fourier transform
z = ifft(c)
N = length(c)-1
k = (0:1:N)
# 1/(2*d)=0.025

plt.subplot(3, 1, 3)

plt.plot(i,real(z)
,i,imag(z))
plt.xlim(0, 300)
plt.ylim(-0.5, 1.5)

plt.xlabel('i')
plt.legend(['real(z)', 'imag(z)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% F4FTSTEPOSS
% The complex FT is used.
% Fourier transform of DOUBLE SIDED step function of width 0 to d.

function F4FTSTEPOSS;
% Original Function
i = (0:1:255);
d = 20;
nx = length(i);
x = (logical(i)>=0) - (logical(i-d)>=0) + (logical(i-255+d)>=0);

figure(1);
subplot(3,1,1);
plot(i,real(x),i,imag(x));
axis([0 300 -0.5 1.5]);
legend('real(x)','imag(x)');
xlabel('i');

%Fourier transform
c = fft(x);
%N = 128
N = length(c)-1;
j = (0:1:N);

subplot(3,1,2);
plot(j/255,real(c)/sqrt(N+1),j/255,-imag(c)/sqrt(N+1));
axis([0 1 -2 4]);
xlabel('j/255');
legend('real(c)/sqrt(N+1)','-imag(z)/sqrt(N+1)');

% The first zero of the FT
% is at 1/2d

%Fourier transform(inverse) of Fourier transform
z = ifft(c);
N = length(c)-1;
k = (0:1:N);

% 1/(2*d)=0.025

subplot(3,1,3);
plot(i,real(z),i,imag(z));
axis([0 300 -0.5 1.5]);
xlabel('i');
legend('real(z)','imag(z)');
`,cCode:"",defaultParams:{}},{id:"of",title:"of - F5FTSINCRS\r",description:"F5FTSINCRS\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F5FTSINCRS
# The real FT is used.
# Fourier transform of sinz/z function of width 0 to d


# Original Function
i = np.arange(0, 255+1, 1)
d = 40
x = np.sin(2*np.pi*d*(i/255))/(2*np.pi*d*(i/255))
x(1) = 0
nx = length(i)
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(i,real(x)
,i,imag(x))
plt.xlim(0, 300)
plt.ylim(-0.5, 1.5)

plt.xlabel('i')
plt.legend(['real(x)', 'imag(x)'])
# Fourier transform
c = fft(x)
# N = 128
N = length(c)-1
j = (0:1:N)
plt.subplot(3, 1, 2)

plt.plot(j/255,real(c)
/np.sqrt(N+1),j/255,-imag(c)/np.sqrt(N+1))
plt.xlim(0, 0.6)
plt.ylim(-0.1, 0.3)

plt.xlabel('j/255')
plt.legend(['real(c)/sqrt(N+1)', '-imag(c)/sqrt(N+1)'])
# The first zero of the FT
# is at 1/2d

# Fourier transform(inverse) of Fourier transform
z = ifft(c)
N = length(c)-1
k = (0:1:N)
# 1/(2*d)=0.013

plt.subplot(3, 1, 3)

plt.plot(i,real(z)
,i,imag(z))
plt.xlim(0, 300)
plt.ylim(-0.5, 1.5)

plt.xlabel('i')
plt.legend(['real(z)', 'imag(z)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% F5FTSINCRS
% The real FT is used.
% Fourier transform of sinz/z function of width 0 to d

function F5FTSINCRS;
% Original Function
i = (0:1:255);
d = 40;
x = sin(2*pi*d*(i/255))./(2*pi*d*(i/255));
x(1) = 0;
nx = length(i);


figure(1);
subplot(3,1,1);
plot(i,real(x),i,imag(x));
axis([0 300 -0.5 1.5]);
xlabel('i');
legend('real(x)','imag(x)');

%Fourier transform
c = fft(x);
%N = 128
N = length(c)-1;
j = (0:1:N);

subplot(3,1,2);
plot(j/255,real(c)/sqrt(N+1),j/255,-imag(c)/sqrt(N+1));
axis([0 0.6 -0.1 0.3]);
xlabel('j/255');
legend('real(c)/sqrt(N+1)','-imag(c)/sqrt(N+1)');

% The first zero of the FT
% is at 1/2d

%Fourier transform(inverse) of Fourier transform
z = ifft(c);
N = length(c)-1;
k = (0:1:N);

% 1/(2*d)=0.013

subplot(3,1,3);
plot(i,real(z),i,imag(z));
axis([0 300 -0.5 1.5]);
xlabel('i');
legend('real(z)','imag(z)');`,cCode:"",defaultParams:{}},{id:"of",title:"of - F6FTSINCCS\r",description:"F6FTSINCCS\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F6FTSINCCS
# The complex FT is used.
# Fourier transform of sinz/z function of width 0 to d


# Original Function
i = np.arange(0, 255+1, 1)
d = 20
x = np.sin(2*np.pi*d*(i/255))/(2*np.pi*d*(i/255))
x(1) = 0
nx = length(i)
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(i/255,real(x)
,i/255,imag(x))
plt.xlim(0, 1)
plt.ylim(-0.5, 1.5)

plt.xlabel('i/255')
plt.legend(['real(x)', 'imag(x)'])
# Fourier transform
c = fft(x)
# N = 128
N = length(c)-1
j = (0:1:N)
plt.subplot(3, 1, 2)

plt.plot(j/255,real(c)
/np.sqrt(N+1),j/255,-imag(c)/np.sqrt(N+1))
plt.xlim(0, 1)
plt.ylim(-0.5, 0.5)

plt.xlabel('j/255')
plt.legend(['real(c)/sqrt(N+1)', '-imag(z)/sqrt(N+1)'])
# The first zero of the FT
# is at 1/2d

# Fourier transform(inverse) of Fourier transform
z = ifft(c)
N = length(c)-1
k = (0:1:N)
# 1/(2*d)=0.025

plt.subplot(3, 1, 3)

plt.plot(i,real(z)
,i,imag(z))
plt.xlim(0, 300)
plt.ylim(-0.5, 1.5)

plt.xlabel('i')
plt.legend(['real(z)', 'imag(z)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% F6FTSINCCS
% The complex FT is used.
% Fourier transform of sinz/z function of width 0 to d

function F6FTSINCCS;
% Original Function
i = (0:1:255);
d = 20;
x = sin(2*pi*d*(i/255))./(2*pi*d*(i/255));
x(1) = 0;
nx = length(i);


figure(1);
subplot(3,1,1);
plot(i/255,real(x),i/255,imag(x));
axis([0 1 -0.5 1.5]);
xlabel('i/255');
legend('real(x)','imag(x)');

%Fourier transform
c = fft(x);
%N = 128
N = length(c)-1;
j = (0:1:N);

subplot(3,1,2);
plot(j/255,real(c)/sqrt(N+1),j/255,-imag(c)/sqrt(N+1));
axis([0 1 -0.5 0.5]);
xlabel('j/255');
legend('real(c)/sqrt(N+1)','-imag(z)/sqrt(N+1)');

% The first zero of the FT
% is at 1/2d

%Fourier transform(inverse) of Fourier transform
z = ifft(c);
N = length(c)-1;
k = (0:1:N);

% 1/(2*d)=0.025

subplot(3,1,3);
plot(i,real(z),i,imag(z));
axis([0 300 -0.5 1.5]);
xlabel('i');
legend('real(z)','imag(z)');`,cCode:"",defaultParams:{}},{id:"of",title:"of - F7FTSTEP183S\r",description:"F7FTSTEP183S\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F7FTSTEP183S
# Complex Fourier transform of step function of width 0 to d.
# 183 points are used. The FT(inverse) of the FT is also shown.


# Original Function
i = np.arange(0, 183+1, 1)
d = 20
x = (logical(i)>=0) - (logical(i-d)>=0)
nx = length(i)
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(i,real(x)
,i,imag(x))
plt.xlim(0, 200)
plt.ylim(-0.5, 1.5)

plt.xlabel('i')
plt.legend(['real(x)', 'imag(x)'])
# Fourier transform
c = fft(x)
# N = 128
N = length(c)-1
j = (0:1:N)
plt.subplot(3, 1, 2)

plt.plot(j,real(c)
/np.sqrt(N+1),j,-imag(c)/np.sqrt(N+1))
plt.xlim(0, 200)
plt.ylim(-2, 2)

plt.xlabel('j')
plt.legend(['real(c)/sqrt(N+1)', '-imag(z)/sqrt(N+1)'])
# The first zero of the FT
# is at 1/2d

# Fourier transform(inverse) of Fourier transform
z = ifft(c)
N = length(c)-1
k = (0:1:N)
# 1/(2*d)=0.025

plt.subplot(3, 1, 3)

plt.plot(i,real(z)
,i,imag(z))
plt.xlim(0, 200)
plt.ylim(-0.5, 1.5)

plt.xlabel('i')
plt.legend(['real(z)', 'imag(z)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% F7FTSTEP183S
% Complex Fourier transform of step function of width 0 to d.
% 183 points are used. The FT(inverse) of the FT is also shown.

function F7FTSTEP183S;
% Original Function
i = (0:1:183);
d = 20;
x = (logical(i)>=0) - (logical(i-d)>=0)
nx = length(i);


figure(1);
subplot(3,1,1);
plot(i,real(x),i,imag(x));
axis([0 200 -0.5 1.5]);
xlabel('i');
legend('real(x)','imag(x)');

%Fourier transform
c = fft(x);
%N = 128
N = length(c)-1;
j = (0:1:N);

subplot(3,1,2);
plot(j,real(c)/sqrt(N+1),j,-imag(c)/sqrt(N+1));
axis([0 200 -2 2]);
xlabel('j');
legend('real(c)/sqrt(N+1)','-imag(z)/sqrt(N+1)');
% The first zero of the FT
% is at 1/2d

%Fourier transform(inverse) of Fourier transform
z = ifft(c);
N = length(c)-1;
k = (0:1:N);

% 1/(2*d)=0.025

subplot(3,1,3);
plot(i,real(z),i,imag(z));
axis([0 200 -0.5 1.5]);
xlabel('i');
legend('real(z)','imag(z)');`,cCode:"",defaultParams:{}},{id:"of",title:"of - F8FTSINC183S\r",description:"F8FTSINC183S\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F8FTSINC183S
# Fourier transform of sinz/z function of width 0 to d
# The FT (inverse) of the FT is also shown


# Original Function
i = np.arange(0, 183+1, 1)
d = 20
x = np.sin(2*np.pi*d*(i/255))/(2*np.pi*d*(i/255))
x(1) = 0
nx = length(i)
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(i/255,real(x)
,i/255,imag(x))
plt.xlim(0, 0.8)
plt.ylim(-0.5, 1.5)

plt.xlabel('i/255')
plt.legend(['real(x)', 'imag(x)'])
# Fourier transform
c = fft(x)
# N = 183
N = length(c)-1
j = (0:1:N)
plt.subplot(3, 1, 2)

plt.plot(j/255,real(c)
/np.sqrt(N+1),j/255,-imag(c)/np.sqrt(N+1))
plt.xlim(0, 0.8)
plt.ylim(-0.5, 0.5)

plt.xlabel('j/255')
plt.legend(['real(c)/sqrt(N+1)', '-imag(c)/sqrt(N+1)'])
# The first zero of the FT
# is at 1/2d

# Fourier transform(inverse) of Fourier transform
z = ifft(c)
N = length(c)-1
k = (0:1:N)
# 1/(2*d)=0.025

plt.subplot(3, 1, 3)

plt.plot(i,real(z)
,i,imag(z))
plt.xlim(0, 200)
plt.ylim(-0.5, 1.5)

plt.xlabel('i')
plt.legend(['real(z)', 'imag(z)'])
# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% F8FTSINC183S
% Fourier transform of sinz/z function of width 0 to d
% The FT (inverse) of the FT is also shown

function F8FTSINC183S;
% Original Function
i = (0:1:183);
d = 20;
x = sin(2*pi*d*(i/255))./(2*pi*d*(i/255));
x(1) = 0;
nx = length(i);


figure(1);
subplot(3,1,1);
plot(i/255,real(x),i/255,imag(x));
axis([0 0.8 -0.5 1.5]);
xlabel('i/255');
legend('real(x)','imag(x)');

%Fourier transform
c = fft(x);
%N = 183
N = length(c)-1;
j = (0:1:N);

subplot(3,1,2);
plot(j/255,real(c)/sqrt(N+1),j/255,-imag(c)/sqrt(N+1));
axis([0 0.8 -0.5 0.5]);
xlabel('j/255');
legend('real(c)/sqrt(N+1)','-imag(c)/sqrt(N+1)');

% The first zero of the FT
% is at 1/2d

%Fourier transform(inverse) of Fourier transform
z = ifft(c);
N = length(c)-1;
k = (0:1:N);

% 1/(2*d)=0.025

subplot(3,1,3);
plot(i,real(z),i,imag(z));
axis([0 200 -0.5 1.5]);
xlabel('i');
legend('real(z)','imag(z)');`,cCode:"",defaultParams:{}},{id:"for",title:"for - F9FTGAUSS\r",description:"F9FTGAUSS\r",category:"Optics - Fourier Transform",chapter:"9",source:"matlab",pythonCode:`import matplotlib.pyplot as plt
import numpy as np
import io
import base64

# F9FTGAUSS
# Complex Fourier transformation of Gauss function for two values of a
# and for Fast Fourier Transformation.
# The maximum is at i = 0. The FT (inverse) of the FT is also calculated.

i = np.arange(0, 255+1, 1)
A = 1
a = 100
aa = 50
y1 = A*np.exp(-a*((i/255)**2))
y2 = A*np.exp(-aa*((i/255)**2))
fig = plt.figure(1)

plt.subplot(3, 1, 1)

plt.plot(i/255,y1,i/255,y2)

plt.xlim(0, 1)
plt.ylim(0, 1)

plt.xlabel('i/255')
plt.legend(['y1', 'y2'])

c1 = fft(y1)
c2 = fft(y2)
N = length(c2)-1; # N=255
j=(0:1:N)
plt.subplot(3, 1, 2)

plt.plot(j,real(c1)
/np.sqrt(N+1),j,real(c2)/np.sqrt(N+1))
plt.xlim(0, 300)
plt.ylim(0, 3)

plt.xlabel('j')
plt.legend(['real(c1)/sqrt(N+1)', 'real(c2)/sqrt(N+1)'])
zf1 = ifft(c1)
zf2 = ifft(c2)
N2 = length(zf2)-1
i = (0:1:N2)
# 1/(2*d)=0.025

plt.subplot(3, 1, 3)

plt.plot(i/255,zf1,i/255,zf2)

plt.xlim(0, 0.4)
plt.ylim(0, 1)

plt.xlabel('i/255')
plt.legend(['zf1', 'zf2'])
# The coordinate is again i/255


# Save plot to base64
buf = io.BytesIO()
plt.tight_layout()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
plt.close()
print(f"data:image/png;base64,{img_base64}")
`,matlabCode:`% F9FTGAUSS
% Complex Fourier transformation of Gauss function for two values of a
% and for Fast Fourier Transformation.
% The maximum is at i = 0. The FT (inverse) of the FT is also calculated.
function F9FTGAUSS;
i = (0:1:255);
A = 1;
a = 100;
aa = 50;
y1 = A*exp(-a*((i/255).^2));
y2 = A*exp(-aa*((i/255).^2));

figure(1);
subplot(3,1,1);
plot(i/255,y1,i/255,y2);
axis([0 1 0 1]);
xlabel('i/255');
legend('y1','y2');

c1 = fft(y1);
c2 = fft(y2);
N = length(c2)-1; % N=255
j=(0:1:N);

subplot(3,1,2);
plot(j,real(c1)/sqrt(N+1),j,real(c2)/sqrt(N+1));
axis([0 300 0 3]);
xlabel('j');
legend('real(c1)/sqrt(N+1)','real(c2)/sqrt(N+1)');

zf1 = ifft(c1);
zf2 = ifft(c2);


N2 = length(zf2)-1;
i = (0:1:N2);
% 1/(2*d)=0.025

subplot(3,1,3);
plot(i/255,zf1,i/255,zf2);
axis([0 0.4 0 1]);
xlabel('i/255');
legend('zf1','zf2');
% The coordinate is again i/255

`,cCode:"",defaultParams:{}}];function w1(){const e={};return wn.forEach(t=>{const n=t.category||"其他";e[n]||(e[n]=[]),e[n].push(t)}),S.jsxs("div",{className:"program-list",children:[S.jsxs("div",{className:"header",children:[S.jsx("h1",{children:"🔬 Optics & Berkeley Extension 程序集"}),S.jsxs("p",{className:"subtitle",children:["包含 ",wn.length," 个程序：",wn.filter(t=>t.source==="matlab").length," 个 MATLAB 程序和 ",wn.filter(t=>t.source==="c").length," 个 C 程序"]})]}),S.jsx("div",{className:"categories",children:Object.keys(e).sort().map(t=>S.jsxs("div",{className:"category-section",children:[S.jsx("h2",{children:t}),S.jsx("div",{className:"program-grid",children:e[t].map(n=>S.jsxs(ao,{to:`/program/${n.id}`,className:"program-card",children:[S.jsx("div",{className:"program-title",children:n.title}),S.jsx("div",{className:"program-description",children:n.description}),S.jsxs("div",{className:"program-meta",children:[S.jsx("span",{className:"program-source",children:n.source.toUpperCase()}),n.chapter&&S.jsxs("span",{className:"program-chapter",children:["Ch-",n.chapter]})]})]},n.id))})]},t))})]})}function k1({program:e}){const[t,n]=I.useState("python"),a=[];return e.pythonCode&&a.push({id:"python",label:"Python (Converted)"}),e.matlabCode&&a.push({id:"matlab",label:"MATLAB (Original)"}),e.cCode&&a.push({id:"c",label:"C (Original)"}),S.jsxs("div",{className:"source-code-display",children:[S.jsx("div",{className:"tabs",children:a.map(i=>S.jsx("button",{className:`tab ${t===i.id?"active":""}`,onClick:()=>n(i.id),children:i.label},i.id))}),S.jsxs("div",{className:"code-container",children:[t==="python"&&e.pythonCode&&S.jsx("pre",{className:"code-block",children:S.jsx("code",{children:e.pythonCode})}),t==="matlab"&&e.matlabCode&&S.jsx("pre",{className:"code-block",children:S.jsx("code",{children:e.matlabCode})}),t==="c"&&e.cCode&&S.jsx("pre",{className:"code-block",children:S.jsx("code",{children:e.cCode})})]})]})}function F1({pyodide:e,initialCode:t}){const[n,a]=I.useState(t||""),[i,l]=I.useState(!1),[o,r]=I.useState(null),[s,p]=I.useState("");I.useEffect(()=>{a(t||"")},[t]);async function m(){if(!(!e||i)){l(!0),r(null),p("⏳ 运行中...");try{const f=`
import sys, io, traceback
_stdout = io.StringIO()
_stderr = io.StringIO()
sys_stdout_bak, sys_stderr_bak = sys.stdout, sys.stderr
sys.stdout, sys.stderr = _stdout, _stderr
try:
    exec(compile(
        ${JSON.stringify(n)},
        '<user>', 'exec'
    ), globals(), globals())
except Exception:
    traceback.print_exc()
finally:
    sys.stdout, sys.stderr = sys_stdout_bak, sys_stderr_bak
out = _stdout.getvalue()
err = _stderr.getvalue()
`;await e.runPythonAsync(f);const h=e.globals.get("out"),b=e.globals.get("err");let y=null,g=h||"";if(g&&g.includes("data:image/png;base64,")){const v=g.match(/data:image\/png;base64,([A-Za-z0-9+/=]+)/);v&&(y=v[1],g=g.replace(/data:image\/png;base64,[A-Za-z0-9+/=]+/,"").trim())}y&&r(y),b?p(`❌ 错误:
`+b+(g?`

输出:
`+g:"")):g?p(g):y||p("✅ 代码运行成功（无输出）")}catch(f){p(`❌ 错误:
`+(f&&f.message?f.message:String(f))),console.error("Error:",f)}finally{l(!1)}}}return e?S.jsxs("div",{className:"python-editor",children:[S.jsxs("div",{className:"editor-header",children:[S.jsx("h3",{children:"🐍 Python 代码编辑器"}),S.jsx("button",{onClick:m,disabled:i,className:"run-button-editor",children:i?"⏳ 运行中...":"▶ 运行代码"})]}),S.jsx("textarea",{className:"code-editor",value:n,onChange:f=>a(f.target.value),spellCheck:!1,placeholder:"在此输入 Python 代码..."}),S.jsxs("div",{className:"results-section always-visible",children:[S.jsx("div",{className:"results-header",children:"📊 输出结果"}),o&&S.jsx(Gu,{imageData:o}),s?S.jsx(Hu,{text:s}):S.jsx("div",{className:"no-output",children:"运行代码后，结果将显示在这里"})]})]}):S.jsx("div",{className:"python-editor",children:S.jsxs("div",{className:"editor-header",children:[S.jsx("h3",{children:"🐍 Python 代码编辑器"}),S.jsx("div",{className:"loading-status",children:"⏳ 正在加载..."})]})})}function R1(){const[e,t]=I.useState(null),[n,a]=I.useState(!0),[i,l]=I.useState("正在加载 Python 环境...");return I.useEffect(()=>{async function o(){try{l("正在加载 Pyodide...（首次较慢，后续会缓存）");const r=document.createElement("script");r.src="https://cdn.jsdelivr.net/pyodide/v0.26.1/full/pyodide.js",r.async=!0,r.onload=async()=>{const s=await window.loadPyodide({indexURL:"https://cdn.jsdelivr.net/pyodide/v0.26.1/full/"});l("📦 正在加载 NumPy 和 Matplotlib..."),await s.loadPackage(["numpy","matplotlib"]),await s.runPythonAsync(`
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import numpy as np
import io
import base64
          `),t(s),a(!1),console.log("Pyodide loaded successfully")},document.body.appendChild(r)}catch(r){l("❌ 加载失败: "+r.message),console.error("Failed to load Pyodide:",r)}}o()},[]),n?S.jsx("div",{className:"app",children:S.jsxs("div",{style:{padding:"3rem",textAlign:"center"},children:[S.jsx("h1",{children:"Optics & Berkeley Extension Programs"}),S.jsx("p",{style:{color:"#6b7280",margin:"1rem 0"},children:"基于 React + Pyodide 的光学程序集"}),S.jsxs("div",{style:{fontSize:"1.2rem",color:"#9ca3af",marginTop:"2rem"},children:["⏳ ",i]})]})}):S.jsx("div",{className:"app",children:S.jsxs(x1,{children:[S.jsx(ja,{path:"/",element:S.jsx(w1,{})}),S.jsx(ja,{path:"/program/:programId",element:S.jsx(z1,{pyodide:e})}),S.jsx(ja,{path:"*",element:S.jsx(h1,{to:"/",replace:!0})})]})})}function z1({pyodide:e}){const{programId:t}=e1(),n=wn.find(a=>a.id===t);return n?S.jsxs("div",{children:[S.jsxs("div",{className:"header",children:[S.jsx(ao,{to:"/",className:"back-link",children:"← 返回列表"}),S.jsx("h1",{children:n.title}),S.jsx("p",{className:"subtitle",children:n.description})]}),S.jsx(k1,{program:n}),S.jsx(F1,{pyodide:e,initialCode:n.pythonCode}),S.jsx(N1,{pyodide:e,program:n})]}):S.jsxs("div",{className:"error-page",children:[S.jsx("h1",{children:"程序未找到"}),S.jsx(ao,{to:"/",children:"返回首页"})]})}rl.createRoot(document.getElementById("root")).render(S.jsx(Rs.StrictMode,{children:S.jsx(L1,{children:S.jsx(R1,{})})}));
