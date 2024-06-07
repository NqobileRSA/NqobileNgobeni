function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/BaseMover-BGL5KG4v.js","assets/index-6CgmdT28.js","assets/index-B2oW4YFJ.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as r}from"./index-6CgmdT28.js";async function _(a,e=!0){await a.addMover("base",async()=>{const{BaseMover:o}=await r(()=>import("./BaseMover-BGL5KG4v.js"),__vite__mapDeps([0,1,2]));return new o},e)}export{_ as loadBaseMover};
