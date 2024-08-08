function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-DI00ntVH.js","assets/index-CNH0dGMS.js","assets/index-DxIarnSq.css","assets/index-C0N5il5_.js","assets/index-Cej8j-GL.js","assets/index-Bj_v4p60.js","assets/index-BjNmWVvA.js","assets/index-CjveDioq.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CNH0dGMS.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-DI00ntVH.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-C0N5il5_.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Cej8j-GL.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-Bj_v4p60.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BjNmWVvA.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-CjveDioq.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
