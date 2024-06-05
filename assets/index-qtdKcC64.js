function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-CFV-mP3T.js","assets/index-5kw29beN.js","assets/index-CJkpowHK.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-5kw29beN.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-CFV-mP3T.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};
