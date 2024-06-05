function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/StarDrawer-DMKC2GTY.js","assets/index-5kw29beN.js","assets/index-CJkpowHK.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as e}from"./index-5kw29beN.js";async function _(a,t=!0){const{StarDrawer:r}=await e(()=>import("./StarDrawer-DMKC2GTY.js"),__vite__mapDeps([0,1,2]));await a.addShape("star",new r,t)}export{_ as loadStarShape};
