import{I as l,a as i,j as a,M as m,N as x,P as h,E as y,r as f,B as P,T as E}from"./index-D5DSkeF1.js";const b=l();function d(e=b){return i(e)}function p({styles:e,themeId:t,defaultTheme:n={}}){const s=d(n),o=typeof e=="function"?e(t&&s[t]||s):e;return a.jsx(m,{styles:o})}const S=e=>{var s;const t={systemProps:{},otherProps:{}},n=((s=e==null?void 0:e.theme)==null?void 0:s.unstable_sxConfig)??x;return Object.keys(e).forEach(o=>{n[o]?t.systemProps[o]=e[o]:t.otherProps[o]=e[o]}),t};function T(e){const{sx:t,...n}=e,{systemProps:s,otherProps:o}=S(n);let r;return Array.isArray(t)?r=[s,...t]:typeof t=="function"?r=(...c)=>{const u=t(...c);return h(u)?{...s,...u}:s}:r={...s,...t},{...o,sx:r}}function G(e){const{theme:t,name:n,props:s}=e;return!t||!t.components||!t.components[n]||!t.components[n].defaultProps?s:y(t.components[n].defaultProps,s)}const C=typeof window<"u"?f.useLayoutEffect:f.useEffect;function g(e){return a.jsx(p,{...e,defaultTheme:P,themeId:E})}function _(e){return function(n){return a.jsx(g,{styles:typeof e=="function"?s=>e({theme:s,...n}):e})}}function $(){return T}export{_ as a,d as b,T as e,G as g,$ as i,C as u};
