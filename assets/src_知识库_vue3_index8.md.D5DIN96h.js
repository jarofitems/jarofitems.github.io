import{_ as e,c as a,o as c,l as t,a as n}from"./chunks/framework.BM2i9-bh.js";const x=JSON.parse('{"title":"watch 和 watchEffect 的区别","description":"","frontmatter":{},"headers":[],"relativePath":"src/知识库/vue3/index8.md","filePath":"src/知识库/vue3/index8.md"}'),h={name:"src/知识库/vue3/index8.md"},s=t("h1",{id:"watch-和-watcheffect-的区别",tabindex:"-1"},[n("watch 和 watchEffect 的区别 "),t("a",{class:"header-anchor",href:"#watch-和-watcheffect-的区别","aria-label":'Permalink to "watch 和 watchEffect 的区别"'},"​")],-1),l=t("p",null,"watch 和 watchEffect 都是监听器，watchEffect 是一个副作用函数，它们之间的区别有：",-1),f=t("ul",null,[t("li",null,"watch：既要指明监听数据的源，也要指明监听的回调；"),t("li",null,"watchEffect：可以自动监听数据源作为依赖，不用指明监听那个数据，监听的回调中用到哪个数据，那就监听哪个数据；"),t("li",null,"watch 可以访问改变前后的值，watchEffect 只能获取改变后的值；"),t("li",null,"watch运行的时候 不会立即执行，值改变后才会执行，而watchEffect运行后可立即执行，这一点可以通过watch的配置项immeriate改变；")],-1),o=[s,l,f];function r(i,d,w,_,u,m){return c(),a("div",null,o)}const E=e(h,[["render",r]]);export{x as __pageData,E as default};
