function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-h2Sdah50.js","assets/index-MNVjVShw.js","assets/index-DxIarnSq.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-MNVjVShw.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-h2Sdah50.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
