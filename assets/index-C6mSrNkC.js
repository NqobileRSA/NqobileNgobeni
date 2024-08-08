function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-B92V2D7a.js","assets/index-B0Q3MkYb.js","assets/index-DxIarnSq.css","assets/index-C8Hx47zL.js","assets/index-CIqsbG2j.js","assets/index-C0E8TjDQ.js","assets/index-BT90YQZk.js","assets/index-CqOiYb8g.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-B0Q3MkYb.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-B92V2D7a.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-C8Hx47zL.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-CIqsbG2j.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-C0E8TjDQ.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BT90YQZk.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CqOiYb8g.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
