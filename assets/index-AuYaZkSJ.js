function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CcQ8yU5N.js","assets/index-jwy4mifw.js","assets/index-B2oW4YFJ.css","assets/index-DbJyVX-1.js","assets/index-BcHi2K6D.js","assets/index-DiomY3qd.js","assets/index-uWqt2p2s.js","assets/index-z-i0vqx6.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-jwy4mifw.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CcQ8yU5N.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DbJyVX-1.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-BcHi2K6D.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-DiomY3qd.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-uWqt2p2s.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-z-i0vqx6.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
