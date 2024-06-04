import{_ as s,c as a,o as n,a3 as p}from"./chunks/framework.BM2i9-bh.js";const g=JSON.parse('{"title":"Set、Map的基本使用","description":"","frontmatter":{"title":"Set、Map的基本使用","order":5,"category":["前端"],"tag":["JavaScript"]},"headers":[],"relativePath":"src/JS常用/Set、Map的基本使用.md","filePath":"src/JS常用/Set、Map的基本使用.md"}'),e={name:"src/JS常用/Set、Map的基本使用.md"},l=p(`<p> </p><h1 id="set、map的基本使用" tabindex="-1">Set、Map的基本使用 <a class="header-anchor" href="#set、map的基本使用" aria-label="Permalink to &quot;Set、Map的基本使用&quot;">​</a></h1><p>Set与Map是都是Es6中提供的新的数据结构，Set 本身是一个构造函数，用来生成 Set 数据结构</p><h2 id="set实例的属性和方法" tabindex="-1">Set实例的属性和方法 <a class="header-anchor" href="#set实例的属性和方法" aria-label="Permalink to &quot;Set实例的属性和方法&quot;">​</a></h2><ul><li>Set的属性： <ul><li>size：返回集合所包含元素的数量</li></ul></li><li>Set的方法： <ul><li>操作方法 <ul><li>add(value)：向集合添加一个新的项</li><li>delete(value)：从集合中移除一个值</li><li>has(value)：如果值在集合中存在，返回true,否则false</li><li>clear(): 移除集合里所有的项</li></ul></li><li>遍历方法 <ul><li>keys()：返回一个包含集合中所有键的数组</li><li>values()：返回一个包含集合中所有值的数组</li><li>entries：返回一个包含集合中所有键值对的数组(感觉没什么用就不实现了)</li><li>forEach()：用于对集合成员执行某种操作，没有返回值</li></ul></li></ul></li></ul><h3 id="最常用来去重使用-去重方法有很多但是都没有它运行的快" tabindex="-1">最常用来去重使用，去重方法有很多但是都没有它运行的快 <a class="header-anchor" href="#最常用来去重使用-去重方法有很多但是都没有它运行的快" aria-label="Permalink to &quot;最常用来去重使用，去重方法有很多但是都没有它运行的快&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>var arr=[1,3,4,2,5,1,4]</span></span>
<span class="line"><span>// 这里原本是一个对象用了es6的语法 转化成了数组，就是转化数组之前已经过滤掉了重复的元素了</span></span>
<span class="line"><span>var arr2=[...new Set(arr)] //[1,3,4,2,5]</span></span></code></pre></div><h3 id="set常用语法如下" tabindex="-1">Set常用语法如下 <a class="header-anchor" href="#set常用语法如下" aria-label="Permalink to &quot;Set常用语法如下&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//初始化一个Set ，需要一个Array数组，要么空Set</span></span>
<span class="line"><span>var set = new Set([1,2,3,5,6]) </span></span>
<span class="line"><span>console.log(set)  // {1, 2, 3, 5, 6}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//添加元素到Set中</span></span>
<span class="line"><span>set.add(7) //{1, 2, 3, 5, 6, 7}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//删除Set中的元素</span></span>
<span class="line"><span>set.delete(3) // {1, 2, 5, 6, 7}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//检测是否含有此元素，有为true，没有则为false</span></span>
<span class="line"><span>set.has(2) //true</span></span></code></pre></div><h2 id="map-字典" tabindex="-1">Map 字典 <a class="header-anchor" href="#map-字典" aria-label="Permalink to &quot;Map 字典&quot;">​</a></h2><ul><li>Map的属性： <ul><li>size：返回字典所包含的元素个数</li></ul></li><li>Map的方法： <ul><li>操作方法 <ul><li>set(key, val): 向字典中添加新元素</li><li>get(key):通过键值查找特定的数值并返回</li><li>has(key):如果键存在字典中返回true,否则false</li><li>delete(key): 通过键值从字典中移除对应的数据</li><li>clear():将这个字典中的所有元素删除</li></ul></li><li>遍历方法： <ul><li>keys():将字典中包含的所有键名以数组形式返回</li><li>values():将字典中包含的所有数值以数组形式返回</li><li>forEach()：遍历字典的所有成员</li></ul></li></ul></li></ul><h3 id="map常用语法如下" tabindex="-1">Map常用语法如下 <a class="header-anchor" href="#map常用语法如下" aria-label="Permalink to &quot;Map常用语法如下&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>//初始化\`Map\`需要一个二维数组(请看 Map 数据结构)，或者直接初始化一个空\`Map\` </span></span>
<span class="line"><span>let map = new Map();</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//添加key和value值</span></span>
<span class="line"><span>map.set(&#39;Amy&#39;,&#39;女&#39;)</span></span>
<span class="line"><span>map.set(&#39;liuQi&#39;,&#39;男&#39;)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//是否存在key，存在返回true,反之为false</span></span>
<span class="line"><span>map.has(&#39;Amy&#39;) //true</span></span>
<span class="line"><span>map.has(&#39;amy&#39;) //false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//根据key获取value</span></span>
<span class="line"><span>map.get(&#39;Amy&#39;) //女</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//删除 key为Amy的value</span></span>
<span class="line"><span>map.delete(&#39;Amy&#39;)</span></span>
<span class="line"><span>map.get(&#39;Amy&#39;) //undefined  删除成功</span></span></code></pre></div><h2 id="object-keys" tabindex="-1">Object.keys() <a class="header-anchor" href="#object-keys" aria-label="Permalink to &quot;Object.keys()&quot;">​</a></h2><p>Object.keys(obj) 静态方法返回一个由给定对象自身的可枚举的字符串键属性名组成的数组。</p><p>for...in 循环会枚举原型链中的属性</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 简单数组</span></span>
<span class="line"><span>const arr = [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;];</span></span>
<span class="line"><span>console.log(Object.keys(arr)); // [&#39;0&#39;, &#39;1&#39;, &#39;2&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 类数组对象</span></span>
<span class="line"><span>const obj = { 0: &quot;a&quot;, 1: &quot;b&quot;, 2: &quot;c&quot; };</span></span>
<span class="line"><span>console.log(Object.keys(obj)); // [&#39;0&#39;, &#39;1&#39;, &#39;2&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 键的顺序随机的类数组对象</span></span>
<span class="line"><span>const anObj = { 100: &quot;a&quot;, 2: &quot;b&quot;, 7: &quot;c&quot; };</span></span>
<span class="line"><span>console.log(Object.keys(anObj)); // [&#39;2&#39;, &#39;7&#39;, &#39;100&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// getFoo 是一个不可枚举的属性</span></span>
<span class="line"><span>const myObj = Object.create(</span></span>
<span class="line"><span>  {},</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    getFoo: {</span></span>
<span class="line"><span>      value() {</span></span>
<span class="line"><span>        return this.foo;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>myObj.foo = 1;</span></span>
<span class="line"><span>console.log(Object.keys(myObj)); // [&#39;foo&#39;]</span></span></code></pre></div><p><strong>非对象参数会强制转换为对象</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 字符串具有索引作为可枚举的自有属性</span></span>
<span class="line"><span>console.log(Object.keys(&quot;foo&quot;)); // [&#39;0&#39;, &#39;1&#39;, &#39;2&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 其他基本类型没有自有属性</span></span>
<span class="line"><span>console.log(Object.keys(100)); // []</span></span></code></pre></div><h2 id="object-values" tabindex="-1">Object.values() <a class="header-anchor" href="#object-values" aria-label="Permalink to &quot;Object.values()&quot;">​</a></h2><p>Object.values(obj) 静态方法返回一个给定对象的自有可枚举字符串键属性值组成的数组。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>const obj = { foo: &quot;bar&quot;, baz: 42 };</span></span>
<span class="line"><span>console.log(Object.values(obj)); // [&#39;bar&#39;, 42]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 类数组对象</span></span>
<span class="line"><span>const arrayLikeObj1 = { 0: &quot;a&quot;, 1: &quot;b&quot;, 2: &quot;c&quot; };</span></span>
<span class="line"><span>console.log(Object.values(arrayLikeObj1)); // [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 具有随机键排序的类数组对象</span></span>
<span class="line"><span>// 使用数字键时，将按键的数字顺序返回值</span></span>
<span class="line"><span>const arrayLikeObj2 = { 100: &quot;a&quot;, 2: &quot;b&quot;, 7: &quot;c&quot; };</span></span>
<span class="line"><span>console.log(Object.values(arrayLikeObj2)); // [&#39;b&#39;, &#39;c&#39;, &#39;a&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// getFoo 是一个不可枚举的属性</span></span>
<span class="line"><span>const myObj = Object.create(</span></span>
<span class="line"><span>  {},</span></span>
<span class="line"><span>  {</span></span>
<span class="line"><span>    getFoo: {</span></span>
<span class="line"><span>      value() {</span></span>
<span class="line"><span>        return this.foo;</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    },</span></span>
<span class="line"><span>  },</span></span>
<span class="line"><span>);</span></span>
<span class="line"><span>myObj.foo = &quot;bar&quot;;</span></span>
<span class="line"><span>console.log(Object.values(myObj)); // [&#39;bar&#39;]</span></span></code></pre></div><p><strong>非对象参数会强制转换为对象</strong></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>// 字符串具有索引作为可枚举的自有属性</span></span>
<span class="line"><span>console.log(Object.values(&quot;foo&quot;)); // [&#39;f&#39;, &#39;o&#39;, &#39;o&#39;]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 其他基本类型没有自有属性</span></span>
<span class="line"><span>console.log(Object.values(100)); // []</span></span></code></pre></div>`,24),t=[l];function i(c,o,u,r,d,h){return n(),a("div",null,t)}const v=s(e,[["render",i]]);export{g as __pageData,v as default};
