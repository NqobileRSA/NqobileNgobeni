function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/index-BCgfKY9F.js","assets/index-Bp6i1tNJ.js","assets/index-CHNL0R1u.css","assets/index-B8p9QOPI.js","assets/index-Bv9FejTQ.js","assets/index-xz4-eDuN.js","assets/index-CMd8d6Pw.js","assets/index-r1GaNbnz.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as t}from"./index-Bp6i1tNJ.js";async function s(a,_=!0){const{loadBaseMover:o}=await t(()=>import("./index-BCgfKY9F.js"),__vite__mapDeps([0,1,2])),{loadCircleShape:i}=await t(()=>import("./index-B8p9QOPI.js"),__vite__mapDeps([3,1,2])),{loadColorUpdater:r}=await t(()=>import("./index-Bv9FejTQ.js"),__vite__mapDeps([4,1,2])),{loadOpacityUpdater:d}=await t(()=>import("./index-xz4-eDuN.js"),__vite__mapDeps([5,1,2])),{loadOutModesUpdater:e}=await t(()=>import("./index-CMd8d6Pw.js"),__vite__mapDeps([6,1,2])),{loadSizeUpdater:l}=await t(()=>import("./index-r1GaNbnz.js"),__vite__mapDeps([7,1,2]));await o(a,!1),await i(a,!1),await r(a,!1),await d(a,!1),await e(a,!1),await l(a,!1),await a.refresh(_)}export{s as loadBasic};
