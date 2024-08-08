function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BAqCYqaK.js","assets/index-D1XGg_o-.js","assets/index-DxIarnSq.css","assets/index-Dytj5ets.js","assets/index-jjmMpBab.js","assets/index-CoSDeQWu.js","assets/index-DhYoUGwm.js","assets/index-BaEtj7b1.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-D1XGg_o-.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BAqCYqaK.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-Dytj5ets.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-jjmMpBab.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CoSDeQWu.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DhYoUGwm.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BaEtj7b1.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
