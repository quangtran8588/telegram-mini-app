import{aC as u,ah as n,ai as x,aD as d,aE as f,an as t,av as m,aF as C}from"./index-Csn6hvsv.js";import{u as g,I}from"./useInAppWalletLocale-Beho9zH-.js";function W(e){const{screen:o}=u(),{modalSize:a}=n.useContext(x),l=g(),s=n.useContext(d);function c(i){s(r=>({...r,data:i}))}return a==="wide"||o!==f.main&&a==="compact"?t.jsx(m,{walletId:e.wallet.id,selectWallet:()=>{c({}),e.select()}}):l?t.jsx(I,{locale:l,wallet:e.wallet,done:e.done,select:e.select,goBack:e.goBack}):t.jsx(C,{height:"195px"})}export{W as default};
