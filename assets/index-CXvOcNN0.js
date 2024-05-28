function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/CircleDrawer-DvxFoIta.js","assets/index-Cm10Xlev.js","assets/index-DrVD6npm.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as i}from"./index-Cm10Xlev.js";async function o(a,e=!0){const{CircleDrawer:r}=await i(()=>import("./CircleDrawer-DvxFoIta.js"),__vite__mapDeps([0,1,2]));await a.addShape("circle",new r,e)}export{o as loadCircleShape};
