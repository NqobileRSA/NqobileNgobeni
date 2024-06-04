function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ParallaxMover-B_FC9EIU.js","assets/index-CwLCdhlo.js","assets/index-Bh7l5nsI.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CwLCdhlo.js";async function l(a,r=!0){await a.addMover("parallax",async()=>{const{ParallaxMover:o}=await t(()=>import("./ParallaxMover-B_FC9EIU.js"),__vite__mapDeps([0,1,2]));return new o},r)}export{l as loadParallaxMover};
