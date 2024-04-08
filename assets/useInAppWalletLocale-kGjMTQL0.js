import{ah as r,an as t,as as b,aq as N,ay as S,aM as E,ag as O,ai as f,aD as Y,aB as p,ao as I,aP as v,aQ as Z,az as Q,at as h,aJ as P,ar as C,aC as W,ap as G,aR as H,aS as B,_ as z}from"./index-BzfMB0jv.js";function _(e){const[i,a]=r.useState(""),[o,l]=r.useState(),[s,M]=r.useState(!1),j=()=>{M(!0),!(!i||o)&&e.onSelect(i)},d=s&&!!o||!i&&!!e.emptyErrorMessage&&s;return t.jsxs("div",{children:[t.jsx("div",{style:{position:"relative"},children:t.jsx(b,{tabIndex:-1,placeholder:e.placeholder,variant:"outline",type:e.type,name:e.name,value:i,"data-error":d,onChange:g=>{a(g.target.value),e.errorMessage?l(e.errorMessage(g.target.value)):l(void 0)},onKeyDown:g=>{g.key==="Enter"&&j()}})}),s&&o&&t.jsxs(t.Fragment,{children:[t.jsx(N,{y:"xs"}),t.jsx(S,{color:"danger",size:"sm",children:o})]}),!(s&&o)&&!i&&e.emptyErrorMessage&&s&&t.jsxs(t.Fragment,{children:[t.jsx(N,{y:"xs"}),t.jsx(S,{color:"danger",size:"sm",children:e.emptyErrorMessage})]}),t.jsx(N,{y:"md"}),t.jsx(E,{variant:"accent",onClick:j,fullWidth:!0,children:e.submitButtonText})]})}function F(e){switch(e){case"google":return"Sign In - Google Accounts";default:return`Sign In - ${e.slice(0,1).toUpperCase()}${e.slice(1)}`}}function R(e){switch(e){case"facebook":return{width:715,height:555};default:return{width:350,height:500}}}function J(e,i){const{height:a,width:o}=R(e),l=(window.innerHeight-a)/2,s=(window.innerWidth-o)/2,M=window.open("",void 0,`width=${o}, height=${a}, top=${l}, left=${s}`);if(M){const j=F(e);M.document.title=j,M.document.body.innerHTML=V,M.document.body.style.background=i.colors.modalBg,M.document.body.style.color=i.colors.accentText}return M&&window.addEventListener("beforeunload",()=>{M==null||M.close()}),M}const V=`
<svg class="loader" viewBox="0 0 50 50">
  <circle
    cx="25"
    cy="25"
    r="20"
    fill="none"
    stroke="currentColor"
    stroke-width="4"
  />
</svg>

<style>
  body,
  html {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .loader {
    width: 50px;
    height: 50px;
    animation: spin 2s linear infinite;
  }

  .loader circle {
    animation: loading 1.5s linear infinite;
  }

  @keyframes loading {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
</style>
`,X="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI3MDUuNiIgaGVpZ2h0PSI3MjAiIHZpZXdCb3g9IjAgMCAxODYuNjkgMTkwLjUiIHhtbG5zOnY9Imh0dHBzOi8vdmVjdGEuaW8vbmFubyI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTE4NC41ODMgNzY1LjE3MSkiPjxwYXRoIGNsaXAtcGF0aD0ibm9uZSIgbWFzaz0ibm9uZSIgZD0iTS0xMDg5LjMzMy02ODcuMjM5djM2Ljg4OGg1MS4yNjJjLTIuMjUxIDExLjg2My05LjAwNiAyMS45MDgtMTkuMTM3IDI4LjY2MmwzMC45MTMgMjMuOTg2YzE4LjAxMS0xNi42MjUgMjguNDAyLTQxLjA0NCAyOC40MDItNzAuMDUyIDAtNi43NTQtLjYwNi0xMy4yNDktMS43MzItMTkuNDgzeiIgZmlsbD0iIzQyODVmNCIvPjxwYXRoIGNsaXAtcGF0aD0ibm9uZSIgbWFzaz0ibm9uZSIgZD0iTS0xMTQyLjcxNC02NTEuNzkxbC02Ljk3MiA1LjMzNy0yNC42NzkgMTkuMjIzaDBjMTUuNjczIDMxLjA4NiA0Ny43OTYgNTIuNTYxIDg1LjAzIDUyLjU2MSAyNS43MTcgMCA0Ny4yNzgtOC40ODYgNjMuMDM4LTIzLjAzM2wtMzAuOTEzLTIzLjk4NmMtOC40ODYgNS43MTUtMTkuMzEgOS4xNzktMzIuMTI1IDkuMTc5LTI0Ljc2NSAwLTQ1LjgwNi0xNi43MTItNTMuMzQtMzkuMjI2eiIgZmlsbD0iIzM0YTg1MyIvPjxwYXRoIGNsaXAtcGF0aD0ibm9uZSIgbWFzaz0ibm9uZSIgZD0iTS0xMTc0LjM2NS03MTIuNjFjLTYuNDk0IDEyLjgxNS0xMC4yMTcgMjcuMjc2LTEwLjIxNyA0Mi42ODlzMy43MjMgMjkuODc0IDEwLjIxNyA0Mi42ODljMCAuMDg2IDMxLjY5My0yNC41OTIgMzEuNjkzLTI0LjU5Mi0xLjkwNS01LjcxNS0zLjAzMS0xMS43NzYtMy4wMzEtMTguMDk4czEuMTI2LTEyLjM4MyAzLjAzMS0xOC4wOTh6IiBmaWxsPSIjZmJiYzA1Ii8+PHBhdGggZD0iTS0xMDg5LjMzMy03MjcuMjQ0YzE0LjAyOCAwIDI2LjQ5NyA0Ljg0OSAzNi40NTUgMTQuMjAxbDI3LjI3Ni0yNy4yNzZjLTE2LjUzOS0xNS40MTMtMzguMDEzLTI0Ljg1Mi02My43MzEtMjQuODUyLTM3LjIzNCAwLTY5LjM1OSAyMS4zODgtODUuMDMyIDUyLjU2MWwzMS42OTIgMjQuNTkyYzcuNTMzLTIyLjUxNCAyOC41NzUtMzkuMjI2IDUzLjM0LTM5LjIyNnoiIGZpbGw9IiNlYTQzMzUiIGNsaXAtcGF0aD0ibm9uZSIgbWFzaz0ibm9uZSIvPjwvZz48L3N2Zz4=",$="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGRhdGEtbmFtZT0iRWJlbmUgMSIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCIgaWQ9ImZhY2Vib29rLWxvZ28tMjAxOSI+PHBhdGggZmlsbD0iIzE4NzdmMiIgZD0iTTEwMjQsNTEyQzEwMjQsMjI5LjIzMDE2LDc5NC43Njk3OCwwLDUxMiwwUzAsMjI5LjIzMDE2LDAsNTEyYzAsMjU1LjU1NCwxODcuMjMxLDQ2Ny4zNzAxMiw0MzIsNTA1Ljc3Nzc3VjY2MEgzMDJWNTEySDQzMlYzOTkuMkM0MzIsMjcwLjg3OTgyLDUwOC40Mzg1NCwyMDAsNjI1LjM4OTIyLDIwMCw2ODEuNDA3NjUsMjAwLDc0MCwyMTAsNzQwLDIxMFYzMzZINjc1LjQzNzEzQzYxMS44MzUwOCwzMzYsNTkyLDM3NS40NjY2Nyw1OTIsNDE1Ljk1NzI4VjUxMkg3MzRMNzExLjMsNjYwSDU5MnYzNTcuNzc3NzdDODM2Ljc2OSw5NzkuMzcwMTIsMTAyNCw3NjcuNTU0LDEwMjQsNTEyWiI+PC9wYXRoPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Ik03MTEuMyw2NjAsNzM0LDUxMkg1OTJWNDE1Ljk1NzI4QzU5MiwzNzUuNDY2NjcsNjExLjgzNTA4LDMzNiw2NzUuNDM3MTMsMzM2SDc0MFYyMTBzLTU4LjU5MjM1LTEwLTExNC42MTA3OC0xMEM1MDguNDM4NTQsMjAwLDQzMiwyNzAuODc5ODIsNDMyLDM5OS4yVjUxMkgzMDJWNjYwSDQzMnYzNTcuNzc3NzdhNTE3LjM5NjE5LDUxNy4zOTYxOSwwLDAsMCwxNjAsMFY2NjBaIj48L3BhdGg+PC9zdmc+",q="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDM4IiBoZWlnaHQ9IjI1MDAiIHZpZXdCb3g9IjAgMCA0OTYuMjU1IDYwOC43MjgiIGlkPSJhcHBsZSI+PHBhdGggZmlsbD0iIzk5OSIgZD0iTTI3My44MSA1Mi45NzNDMzEzLjgwNi4yNTcgMzY5LjQxIDAgMzY5LjQxIDBzOC4yNzEgNDkuNTYyLTMxLjQ2MyA5Ny4zMDZjLTQyLjQyNiA1MC45OC05MC42NDkgNDIuNjM4LTkwLjY0OSA0Mi42MzhzLTkuMDU1LTQwLjA5NCAyNi41MTItODYuOTcxek0yNTIuMzg1IDE3NC42NjJjMjAuNTc2IDAgNTguNzY0LTI4LjI4NCAxMDguNDcxLTI4LjI4NCA4NS41NjIgMCAxMTkuMjIyIDYwLjg4MyAxMTkuMjIyIDYwLjg4M3MtNjUuODMzIDMzLjY1OS02NS44MzMgMTE1LjMzMWMwIDkyLjEzMyA4Mi4wMSAxMjMuODg1IDgyLjAxIDEyMy44ODVzLTU3LjMyOCAxNjEuMzU3LTEzNC43NjIgMTYxLjM1N2MtMzUuNTY1IDAtNjMuMjE1LTIzLjk2Ny0xMDAuNjg4LTIzLjk2Ny0zOC4xODggMC03Ni4wODQgMjQuODYxLTEwMC43NjYgMjQuODYxQzg5LjMzIDYwOC43MyAwIDQ1NS42NjYgMCAzMzIuNjI4YzAtMTIxLjA1MiA3NS42MTItMTg0LjU1NCAxNDYuNTMzLTE4NC41NTQgNDYuMTA1IDAgODEuODgzIDI2LjU4OCAxMDUuODUyIDI2LjU4OHoiPjwvcGF0aD48L3N2Zz4=",K={google:X,apple:q,facebook:$},ee=["email","google","apple","facebook"],te=e=>{var m;const i=e.locale,{chain:a,client:o}=O(),{done:l,wallet:s}=e,{modalSize:M}=r.useContext(f),j=r.useContext(Y);function d(n){j(c=>({...c,data:n}))}const g=p(),k={google:i.signInWithGoogle,facebook:i.signInWithFacebook,apple:i.signInWithApple},L=e.wallet.getConfig(),x=((m=L==null?void 0:L.auth)==null?void 0:m.options)||ee,T=x.includes("email"),D=x.filter(n=>n!=="email"),w=D.length>0,U=async n=>{try{const c=J(n,g);if(!c)throw new Error("Failed to open login window");const y=s.connect({chain:a,client:o,strategy:n,openedWindow:c,closeOpenedWindow:A=>{A.close()}});d({socialLogin:{type:n,connectionPromise:y}}),e.select(),await y,l()}catch(c){console.error(`Error sign in with ${n}`,c)}},u=D.length>1;return t.jsxs(I,{flex:"column",gap:"lg",children:[w&&t.jsx(I,{flex:u?"row":"column",center:"x",gap:"sm",style:{justifyContent:"space-between"},children:D.map(n=>{const c=u?C.lg:C.md;return t.jsxs(ie,{"aria-label":`Login with ${n}`,"data-variant":u?"icon":"full",variant:u?"outline":"secondary",fullWidth:!u,onClick:()=>{U(n)},children:[t.jsx(v,{src:K[n],width:c,height:c}),!u&&k[n]]},n)})}),M==="wide"&&w&&T&&t.jsx(Z,{text:i.or}),T&&t.jsx(_,{onSelect:n=>{d({emailLogin:n}),e.select()},placeholder:i.emailPlaceholder,name:"email",type:"email",errorMessage:n=>{const c=n.replace(/\+/g,"").toLowerCase();if(!/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,})$/g.test(c))return i.invalidEmail},emptyErrorMessage:i.emailRequired,submitButtonText:i.submitEmail})]})};function oe(e){const i=e.locale.emailLoginScreen,a=r.useContext(f),o=a.modalSize==="compact",{initialScreen:l,screen:s}=W();return t.jsxs(I,{fullHeight:!0,flex:"column",p:"lg",animate:"fadein",style:{minHeight:"250px"},children:[t.jsx(G,{onBack:s===e.wallet&&l===e.wallet?void 0:e.goBack,title:i.title}),o?t.jsx(N,{y:"xl"}):null,t.jsx(I,{expand:!0,flex:"column",center:"y",p:o?void 0:"lg",children:t.jsx(te,{...e})}),o&&(a.showThirdwebBranding!==!1||a.termsOfServiceUrl||a.privacyPolicyUrl)&&t.jsx(N,{y:"xl"}),t.jsxs(I,{flex:"column",gap:"lg",children:[t.jsx(H,{termsOfServiceUrl:a.termsOfServiceUrl,privacyPolicyUrl:a.privacyPolicyUrl}),a.showThirdwebBranding!==!1&&t.jsx(B,{})]})]})}const ie=Q(E)({"&[data-variant='full']":{display:"flex",justifyContent:"center",gap:h.md,fontSize:P.md,transition:"background-color 0.2s ease","&:active":{boxShadow:"none"}},"&[data-variant='icon']":{padding:h.sm,flexGrow:1}});async function ne(e){switch(e){case"es_ES":return(await z(()=>import("./es-Tu7E1SiO.js"),[])).default;case"ja_JP":return(await z(()=>import("./ja-Cr2IaMGr.js"),[])).default;case"tl_PH":return(await z(()=>import("./tl-wtTrNwkr.js"),[])).default;default:return(await z(()=>import("./en-1pSasFWz.js"),[])).default}}function Me(){const e=O().locale,[i,a]=r.useState(void 0);return r.useEffect(()=>{ne(e).then(o=>{a(o)})},[e]),i}export{te as I,oe as a,J as o,Me as u};
