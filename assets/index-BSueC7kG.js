function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index.es-BzkTtSO-.js","assets/index-BEY0PReG.js","assets/index-DiwrgTda.css","assets/pipeline-CM8HXC5H.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{B as N,e as x,d as M,f as H,h as O,j as W,_ as k,a as F,n as w,k as _,l as Q,m as V,o as $,p as E,q as J,b as B,g as z,c as K}from"./index-BEY0PReG.js";import{n as q,g as Y,a as G,v as X}from"./normalizeChainId-CnQz8pSh.js";import{g as b}from"./defaultDappMetadata-CB9cMZ0y.js";const Z=(n,t,a)=>JSON.stringify(n,(s,e)=>{const i=typeof e=="bigint"?e.toString():e;return typeof t=="function"?t(s,i):i},a);class ee extends N{constructor({body:t,error:a,url:s}){super("RPC Request failed.",{cause:a,details:a.message,metaMessages:[`URL: ${x(s)}`,`Request body: ${Z(t)}`]}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcRequestError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.code=a.code}}const ne=-1;class ae extends N{constructor(t,{code:a,docsPath:s,metaMessages:e,shortMessage:i}){super(i,{cause:t,docsPath:s,metaMessages:e||(t==null?void 0:t.metaMessages)}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"RpcError"}),Object.defineProperty(this,"code",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.name=t.name,this.code=t instanceof ee?t.code:a??ne}}class j extends ae{constructor(t,a){super(t,a),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"ProviderRpcError"}),Object.defineProperty(this,"data",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),this.data=a.data}}class v extends j{constructor(t){super(t,{code:v.code,shortMessage:"User rejected the request."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"UserRejectedRequestError"})}}Object.defineProperty(v,"code",{enumerable:!0,configurable:!0,writable:!0,value:4001});class I extends j{constructor(t){super(t,{code:I.code,shortMessage:"An error occurred when attempting to switch chain."}),Object.defineProperty(this,"name",{enumerable:!0,configurable:!0,writable:!0,value:"SwitchChainError"})}}Object.defineProperty(I,"code",{enumerable:!0,configurable:!0,writable:!0,value:4902});const u=typeof window<"u"?Q:void 0,te="08c4b07e3ad25f1a27c14a4e8cecb6f0",D="eip155",U="wallet_addEthereumChain",se=!0,y={requestedChains:"tw.wc.requestedChains",lastUsedChainId:"tw.wc.lastUsedChainId"};async function he(n,t,a){var h,f,m;const s=await S(n,a),e=n.walletConnect,{onDisplayUri:i}=e||{};i&&i&&s.events.addListener("display_uri",i);const{rpcMap:d,chainsToRequest:c}=L({client:n.client,chain:n.chain,optionalChains:(h=n.walletConnect)==null?void 0:h.optionalChains});s.session&&await s.connect({...e!=null&&e.pairingTopic?{pairingTopic:e==null?void 0:e.pairingTopic}:{},optionalChains:c,rpcMap:d}),T(c);const r=(await s.enable())[0];if(!r)throw new Error("No accounts found on provider.");const o=M(q(s.chainId));if(n){const p={optionalChains:(f=n.walletConnect)==null?void 0:f.optionalChains,chain:n.chain,pairingTopic:(m=n.walletConnect)==null?void 0:m.pairingTopic};u&&H(u,a,p)}return e!=null&&e.onDisplayUri&&s.events.removeListener("display_uri",e.onDisplayUri),A(r,o,s,t)}async function fe(n,t,a){const s=u?await O(u,a):null,e=await S(s?{chain:s.chain,client:n.client,walletConnect:{pairingTopic:s.pairingTopic,optionalChains:s.optionalChains}}:{client:n.client,walletConnect:{}},a,!0),i=e.accounts[0];if(!i)throw new Error("No accounts found on provider.");const d=M(q(e.chainId));return A(i,d,e,t)}async function S(n,t,a=!1){var h,f,m,p,P;const s=await W(t),e=n.walletConnect,{EthereumProvider:i,OPTIONAL_EVENTS:d,OPTIONAL_METHODS:c}=await k(()=>import("./index.es-BzkTtSO-.js"),__vite__mapDeps([0,1,2,3])),{rpcMap:l,chainsToRequest:r}=L({client:n.client,chain:n.chain,optionalChains:(h=n.walletConnect)==null?void 0:h.optionalChains}),o=await i.init({showQrModal:(e==null?void 0:e.showQrModal)===void 0?se:e.showQrModal,projectId:(e==null?void 0:e.projectId)||te,optionalMethods:c,optionalEvents:d,optionalChains:r,metadata:{name:((f=e==null?void 0:e.appMetadata)==null?void 0:f.name)||b().name,description:((m=e==null?void 0:e.appMetadata)==null?void 0:m.description)||b().description,url:((p=e==null?void 0:e.appMetadata)==null?void 0:p.url)||b().url,icons:[((P=e==null?void 0:e.appMetadata)==null?void 0:P.logoUrl)||b().logoUrl]},rpcMap:l,qrModalOptions:e==null?void 0:e.qrModalOptions,disableProviderPing:!0});if(o.events.setMaxListeners(Number.POSITIVE_INFINITY),a||o.session&&await o.disconnect(),t!=="walletConnect"){let g=function(){if(typeof window>"u"||!V())return;const C=s.mobile.universal||s.mobile.native,R=s.mobile.native||s.mobile.universal;$()?C&&E(C):J()?R&&E(R):C&&E(C)};o.signer.client.on("session_request_sent",g),o.events.addListener("disconnect",()=>{o.signer.client.off("session_request_sent",g)})}return o}function A(n,t,a,s){const e={address:n,async sendTransaction(r){return{transactionHash:await a.request({method:"eth_sendTransaction",params:[{gas:r.gas?w(r.gas):void 0,value:r.value?w(r.value):void 0,from:this.address,to:r.to,data:r.data}]})}},async signMessage({message:r}){return a.request({method:"personal_sign",params:[r,this.address]})},async signTypedData(r){const{domain:o,message:h,primaryType:f}=r,m={EIP712Domain:G({domain:o}),...r.types};X({domain:o,message:h,primaryType:f,types:m});const p=B({domain:o??{},message:h,primaryType:f,types:m},(P,g)=>K(g)?g.toLowerCase():g);return await a.request({method:"eth_signTypedData_v4",params:[this.address,p]})}};async function i(){a.removeListener("accountsChanged",c),a.removeListener("chainChanged",l),a.removeListener("disconnect",d),await a.disconnect()}function d(){T([]),u==null||u.removeItem(y.lastUsedChainId),i(),s.emit("disconnect",void 0)}function c(r){if(r[0]){const o={...e,address:z(r[0])};s.emit("accountChanged",o),s.emit("accountsChanged",r)}else d()}function l(r){const o=M(q(r));s.emit("chainChanged",o),u==null||u.setItem(y.lastUsedChainId,String(r))}return a.on("accountsChanged",c),a.on("chainChanged",l),a.on("disconnect",d),a.on("session_delete",d),[e,t,i,r=>oe(a,r)]}function ie(n){var t,a;return((a=(t=n.session)==null?void 0:t.namespaces[D])==null?void 0:a.methods)||[]}function re(n){var a,s,e;return((e=(s=(a=n.session)==null?void 0:a.namespaces[D])==null?void 0:s.chains)==null?void 0:e.map(i=>Number.parseInt(i.split(":")[1]||"")))??[]}async function oe(n,t){var s;const a=t.id;try{const e=re(n),i=ie(n);if(!e.includes(a)&&i.includes(U)){const c=await F(t),l=(s=c.explorers)==null?void 0:s[0],r=l?{blockExplorerUrls:[l.url]}:{};await n.request({method:U,params:[{chainId:w(c.chainId),chainName:c.name,nativeCurrency:c.nativeCurrency,rpcUrls:Y(c),...r}]});const o=await ce();o.push(a),T(o)}await n.request({method:"wallet_switchEthereumChain",params:[{chainId:w(a)}]})}catch(e){const i=typeof e=="string"?e:e==null?void 0:e.message;throw/user rejected request/i.test(i)?new v(e):new I(e)}}function T(n){localStorage==null||localStorage.setItem(y.requestedChains,JSON.stringify(n))}async function ce(){const n=localStorage.getItem(y.requestedChains);return n?JSON.parse(n):[]}function L(n){const t={};n.chain&&(t[n.chain.id]=_({chain:n.chain,client:n.client}));const a=((n==null?void 0:n.optionalChains)||[]).slice(0,10);for(const i of a)t[i.id]=_({chain:i,client:n.client});const s=a.map(i=>i.id)||[],e=n.chain?[n.chain.id,...s]:s.length>0?s:[1];return{rpcMap:t,chainsToRequest:e}}export{fe as autoConnectWC,he as connectWC};