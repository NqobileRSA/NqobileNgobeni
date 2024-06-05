function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-qtdKcC64.js","assets/index-5kw29beN.js","assets/index-CJkpowHK.css","assets/index-B4A-kTHp.js","assets/index-_poFABT9.js","assets/index-Bfci7lh9.js","assets/index-BLllOwex.js","assets/index-BAUQ7YET.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-5kw29beN.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-qtdKcC64.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-B4A-kTHp.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-_poFABT9.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-Bfci7lh9.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-BLllOwex.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-BAUQ7YET.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
