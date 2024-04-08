function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BzfMB0jv.js","assets/index-DiwrgTda.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as c}from"./index-BzfMB0jv.js";import{e as u}from"./ethereum-B9KVmc1o.js";async function h(t){const{authenticate:a}=await c(()=>import("./index-BzfMB0jv.js").then(n=>n.a$),__vite__mapDeps([0,1]));return[await(await a(t)).user.wallet.getAccount(),t.chain||u]}async function l(t){const{getAuthenticatedUser:a}=await c(()=>import("./index-BzfMB0jv.js").then(n=>n.a$),__vite__mapDeps([0,1])),e=await a({client:t.client});if(!e)throw new Error("not authenticated");return[await e.wallet.getAccount(),t.chain||u]}export{l as autoConnectInAppWallet,h as connectInAppWallet};
