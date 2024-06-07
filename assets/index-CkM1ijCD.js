function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-Bz2FssLF.js","assets/index-6CgmdT28.js","assets/index-B2oW4YFJ.css","assets/index-DsZbWapv.js","assets/index-C9J8aCTU.js","assets/index-Da2MOSTa.js","assets/index-CNpTJpRa.js","assets/index-DuJDzRkI.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-6CgmdT28.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-Bz2FssLF.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DsZbWapv.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-C9J8aCTU.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-Da2MOSTa.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CNpTJpRa.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DuJDzRkI.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
