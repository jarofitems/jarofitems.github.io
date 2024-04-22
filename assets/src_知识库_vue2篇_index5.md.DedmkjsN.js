import{_ as e,c as a,o as i,a3 as l}from"./chunks/framework.BM2i9-bh.js";const k=JSON.parse('{"title":"keep-alive的作用","description":"","frontmatter":{},"headers":[],"relativePath":"src/知识库/vue2篇/index5.md","filePath":"src/知识库/vue2篇/index5.md"}'),t={name:"src/知识库/vue2篇/index5.md"},o=l('<h1 id="keep-alive的作用" tabindex="-1">keep-alive的作用 <a class="header-anchor" href="#keep-alive的作用" aria-label="Permalink to &quot;keep-alive的作用&quot;">​</a></h1><p>是 Vue 提供的一个内置组件，可以用于保留组件状态或避免重新渲染</p><p><strong>场景：</strong></p><ul><li>有时候我们在搜索页面不小心点了别的页面，返回的时候还想看到我们之前搜索过的数据时，这时候要用到keep-alive标签包裹组件，这时候我们的这个组件就被缓存下来了。</li><li>商品列表页点击商品跳转到商品详情，返回后仍显示原有信息</li><li>订单列表跳转到订单详情，返回，等等场景</li></ul><h2 id="keep-alive-的作用" tabindex="-1">keep-alive 的作用 <a class="header-anchor" href="#keep-alive-的作用" aria-label="Permalink to &quot;keep-alive 的作用&quot;">​</a></h2><ul><li>缓存组件：当组件在 <code>&lt;keep-alive&gt;</code> 标签内时，不活跃的组件实例将被缓存，而不是销毁。</li><li>提高性能：通过减少组件的重新渲染，可以提高应用的性能。</li><li>保存状态：组件的状态在被缓存时保存下来，用户返回时能够保持原来的状态，提高用户体验。</li></ul><h2 id="keep-alive-钩子-生命周期" tabindex="-1">keep-alive 钩子(生命周期) <a class="header-anchor" href="#keep-alive-钩子-生命周期" aria-label="Permalink to &quot;keep-alive 钩子(生命周期)&quot;">​</a></h2><p>当组件在 <code>&lt;keep-alive&gt;</code> 内被切换时，它们会触发额外的生命周期钩子：</p><ul><li><strong>activated: 当组件被激活（插入到 DOM 树中）时调用</strong>。</li><li><strong>deactivated: 当组件被停用（从 DOM 树中移除）时调用</strong>。</li></ul><p>这些额外的生命周期钩子允许开发者在组件被缓存和恢复时执行特定的逻辑。</p><h2 id="何时使用keep-alive" tabindex="-1">何时使用keep-alive? <a class="header-anchor" href="#何时使用keep-alive" aria-label="Permalink to &quot;何时使用keep-alive?&quot;">​</a></h2><p>缓存组件，不用重复渲染的时候。 如，前端多个静态tab页面切换。可以优化性能</p><h2 id="vue常见的性能优化" tabindex="-1">vue常见的性能优化 <a class="header-anchor" href="#vue常见的性能优化" aria-label="Permalink to &quot;vue常见的性能优化&quot;">​</a></h2><ul><li>合理使用v-show和v-if</li><li>v-for加key，以及避免和v-if同时使用</li><li>自定义事件、DOM事件及时销毁</li><li>合理使用异步组件</li><li>合理使用Keep-live</li><li>前端通用优化，图片懒加载</li></ul>',14),r=[o];function n(p,s,d,c,v,h){return i(),a("div",null,r)}const _=e(t,[["render",n]]);export{k as __pageData,_ as default};
