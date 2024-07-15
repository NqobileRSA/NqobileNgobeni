function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CNQ2kZQI.js","assets/index-C1t7UpAt.js","assets/index-DxIarnSq.css","assets/index-CvTEa7vt.js","assets/index-B42Az93g.js","assets/index-Blrmg-nq.js","assets/index-Bo0P79nT.js","assets/index-qN0SaI4B.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-C1t7UpAt.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CNQ2kZQI.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-CvTEa7vt.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-B42Az93g.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-Blrmg-nq.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-Bo0P79nT.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-qN0SaI4B.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
