function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-woFojrpQ.js","assets/index-CwLCdhlo.js","assets/index-Bh7l5nsI.css","assets/index-DO-X9d-J.js","assets/index-B3hecYKD.js","assets/index-CzrOWEqr.js","assets/index-Df7uD3gC.js","assets/index-DuEAIN_h.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-CwLCdhlo.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-woFojrpQ.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DO-X9d-J.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-B3hecYKD.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-CzrOWEqr.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-Df7uD3gC.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-DuEAIN_h.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
