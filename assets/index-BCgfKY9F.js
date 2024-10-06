function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-DA-1jVPS.js","assets/index-Bp6i1tNJ.js","assets/index-CHNL0R1u.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-Bp6i1tNJ.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-DA-1jVPS.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};
