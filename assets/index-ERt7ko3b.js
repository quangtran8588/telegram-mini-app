function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-Csn6hvsv.js","assets/index-DiwrgTda.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as c}from"./index-Csn6hvsv.js";import{e as u}from"./ethereum-BpnSmyVN.js";async function h(t){const{authenticate:a}=await c(()=>import("./index-Csn6hvsv.js").then(n=>n.a$),__vite__mapDeps([0,1]));return[await(await a(t)).user.wallet.getAccount(),t.chain||u]}async function l(t){const{getAuthenticatedUser:a}=await c(()=>import("./index-Csn6hvsv.js").then(n=>n.a$),__vite__mapDeps([0,1])),e=await a({client:t.client});if(!e)throw new Error("not authenticated");return[await e.wallet.getAccount(),t.chain||u]}export{l as autoConnectInAppWallet,h as connectInAppWallet};
