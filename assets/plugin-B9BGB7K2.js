function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/LinksPlugin-hU-hb_fo.js","assets/index-Bn8kfP7d.js","assets/index-DmuCkQ7k.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as o}from"./index-Bn8kfP7d.js";async function r(i,n=!0){const{LinksPlugin:t}=await o(()=>import("./LinksPlugin-hU-hb_fo.js"),__vite__mapDeps([0,1,2])),a=new t;await i.addPlugin(a,n)}export{r as loadLinksPlugin};
