function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CsukV5NE.js","assets/index-DdggzL-P.js","assets/index-DiwrgTda.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as c}from"./index-DdggzL-P.js";import{e as u}from"./ethereum-C0lJSrEU.js";async function h(t){const{authenticate:e}=await c(()=>import("./index-CsukV5NE.js").then(n=>n.i),__vite__mapDeps([0,1,2]));return[await(await e(t)).user.wallet.getAccount(),t.chain||u]}async function l(t){const{getAuthenticatedUser:e}=await c(()=>import("./index-CsukV5NE.js").then(n=>n.i),__vite__mapDeps([0,1,2])),a=await e({client:t.client});if(!a)throw new Error("not authenticated");return[await a.wallet.getAccount(),t.chain||u]}export{l as autoConnectInAppWallet,h as connectInAppWallet};
