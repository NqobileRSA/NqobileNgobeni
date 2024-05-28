function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-DERYrKig.js","assets/index-Cm10Xlev.js","assets/index-DrVD6npm.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-Cm10Xlev.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-DERYrKig.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
