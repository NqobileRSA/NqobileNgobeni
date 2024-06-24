function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-C7J8x4ZP.js","assets/index-BPlqHa5g.js","assets/index-B2oW4YFJ.css","assets/index-DlPjY9R2.js","assets/index-eHr7oXsx.js","assets/index-qOFDvuUg.js","assets/index-CaXvklU1.js","assets/index-C8chLHkK.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-BPlqHa5g.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-C7J8x4ZP.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-DlPjY9R2.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-eHr7oXsx.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-qOFDvuUg.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CaXvklU1.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-C8chLHkK.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
