function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-CgREeKpD.js","assets/index-Cm10Xlev.js","assets/index-DrVD6npm.css","assets/index-CXvOcNN0.js","assets/index-C4Tu5WpL.js","assets/index-DMSp3JqM.js","assets/index-DwgAZZ0x.js","assets/index-WxrtG8K9.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-Cm10Xlev.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-CgREeKpD.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-CXvOcNN0.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-C4Tu5WpL.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-DMSp3JqM.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-DwgAZZ0x.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-WxrtG8K9.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
