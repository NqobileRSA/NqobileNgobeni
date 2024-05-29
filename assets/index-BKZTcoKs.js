function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-D8Acdjia.js","assets/index-Bn8kfP7d.js","assets/index-DmuCkQ7k.css","assets/index-DDd13rPW.js","assets/index-DSEeqbfe.js","assets/index-kxNXHD45.js","assets/index-R7O0ZEHd.js","assets/index-DImf7Rj6.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-Bn8kfP7d.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-D8Acdjia.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DDd13rPW.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-DSEeqbfe.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-kxNXHD45.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-R7O0ZEHd.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DImf7Rj6.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
