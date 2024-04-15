import{_ as s,c as i,o as a,a3 as n}from"./chunks/framework.Dcugq_a2.js";const y=JSON.parse('{"title":"原型与原型链","description":"","frontmatter":{},"headers":[],"relativePath":"src/知识库/JS篇/index4.md","filePath":"src/知识库/JS篇/index4.md"}'),h={name:"src/知识库/JS篇/index4.md"},t=n(`<h1 id="原型与原型链" tabindex="-1">原型与原型链 <a class="header-anchor" href="#原型与原型链" aria-label="Permalink to &quot;原型与原型链&quot;">​</a></h1><h2 id="一、构造函数" tabindex="-1">一、构造函数 <a class="header-anchor" href="#一、构造函数" aria-label="Permalink to &quot;一、构造函数&quot;">​</a></h2><p>构造函数和普通函数本质上没什么区别，只不过使用了new关键字创建对象的函数，被叫做了构造函数。构造函数的首字母一般是大写，用以区分普通函数，当然不大写也不会有什么错误。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">age</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   	this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">   	this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> age;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.species </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;人类&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">say</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> per1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;xiaoming&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span></code></pre></div><h2 id="二、原型对象" tabindex="-1">二、原型对象 <a class="header-anchor" href="#二、原型对象" aria-label="Permalink to &quot;二、原型对象&quot;">​</a></h2><p>在js中，每一个函数类型的数据，都有一个叫做prototype的属性，这个属性指向的是一个对象，就是所谓的原型对象。</p><img src="https://jitems.gitee.io/myblog/docs/zs5.png" alt="solar"><p>对于原型对象来说，它有个constructor属性，指向它的构造函数。</p><img src="https://jitems.gitee.io/myblog/docs/zs6.png" alt="solar"><p>那么这个原型对象有什么用呢？最主要的作用就是用来存放实例对象的公有属性和公有方法。</p><p>在上面那个例子里species属性和say方法对于所有实例来说都一样，放在构造函数里，那每创建一个实例，就会重复创建一次相同的属性和方法，显得有些浪费。这时候，如果把这些公有的属性和方法放在原型对象里共享，就会好很多。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">age</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.name </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> name;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.age </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> age;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.species </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;人类&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">say</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> () {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> per1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;xiaoming&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">20</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> per2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;xiaohong&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">19</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(per1.species); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 人类 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(per2.species); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 人类</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">per1.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">say</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Hello</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">per2.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">say</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Hello</span></span></code></pre></div><p>可是这里的species属性和say方法不是实例对象自己的，为什么可以直接用点运算符访问？这是因为在js中，对象如果在自己的这里找不到对应的属性或者方法，就会查看构造函数的原型对象，如果上面有这个属性或方法，就会返回属性值或调用方法。所以有时候，我们会用per1.constructor查看对象的构造函数：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(per1.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">constructor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Person()</span></span></code></pre></div><p>这个constructor是原型对象的属性，在这里能被实例对象使用，原因就是上面所说的。那如果原型对象上也没有找到想要的属性呢？这就要说到原型链了。</p><h2 id="三、原型链" tabindex="-1">三、原型链 <a class="header-anchor" href="#三、原型链" aria-label="Permalink to &quot;三、原型链&quot;">​</a></h2><p>说原型链之前，先来了解两个概念</p><h3 id="_1、显示原型" tabindex="-1">1、显示原型 <a class="header-anchor" href="#_1、显示原型" aria-label="Permalink to &quot;1、显示原型&quot;">​</a></h3><p>显示原型就是利用prototype属性查找原型，只是这个是函数类型数据的属性</p><h3 id="_2、隐式原型" tabindex="-1">2、隐式原型 <a class="header-anchor" href="#_2、隐式原型" aria-label="Permalink to &quot;2、隐式原型&quot;">​</a></h3><p>隐式原型是利用__proto__属性查找原型，这个属性指向当前对象的构造函数的原型对象，这个属性是对象类型数据的属性，所以可以在实例对象上面使用</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(per1.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">__proto__</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(per2.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">__proto__</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span></code></pre></div><p>根据上面，就可以得出constructor、prototype和__proto__之间的关系了</p><img src="https://jitems.gitee.io/myblog/docs/zs7.png" alt="solar"><h3 id="_3、原型链" tabindex="-1">3、原型链 <a class="header-anchor" href="#_3、原型链" aria-label="Permalink to &quot;3、原型链&quot;">​</a></h3><p>既然这个是对象类型的属性，而原型对象也是对象，那么原型对象就也有这个属性，但是原型对象的__proto__又是指向哪呢？</p><p>我们来分析一下，既然原型对象也是对象，那我们只要找到对象的构造函数就能知道__proto__的指向了。而js中，对象的构造函数就是Object()，所以对象的原型对象，就是Object.prototype。既然原型对象也是对象，那原型对象的原型对象，就也是Object.prototype。不过Object.prototype这个比较特殊，它没有上一层的原型对象，或者说是它的__proto__指向的是null。</p><p>所以上面的关系图可以拓展成下面这种：</p><img src="https://jitems.gitee.io/myblog/docs/zs8.png" alt="solar"><p>到这里，就可以回答前面那个问题了，<strong>如果某个对象查找属性，自己和原型对象上都没有，那就会继续往原型对象的原型对象上去找，这个例子里就是Object.prototype，这里就是查找的终点站了，在这里找不到，就没有更上一层了（null里面啥也没有），直接返回undefined。</strong></p><p>可以看出，<strong>整个查找过程都是顺着__proto__属性，一步一步往上查找，形成了像链条一样的结构，这个结构，就是原型链。所以，原型链也叫作隐式原型链</strong>。</p><p>正是因为这个原因，我们在创建对象、数组、函数等等数据的时候，都自带一些属性和方法，这些属性和方法是在它们的原型上面保存着，所以它们自创建起就可以直接使用那些属性和方法。</p><h2 id="函数也是一种对象" tabindex="-1">函数也是一种对象 <a class="header-anchor" href="#函数也是一种对象" aria-label="Permalink to &quot;函数也是一种对象&quot;">​</a></h2><p>函数在js中，也算是一种特殊的对象，所以，可以想到的是，函数是不是也有一个__proto__属性？答案是肯定的，既然如此，那就按上面的思路，先来找找函数对象的构造函数。</p><p>在js中，所有函数都可以看做是Function()的实例，而Person()和Object()都是函数，所以它们的构造函数就是Function()。Function()本身也是函数，所以Function()也是自己的实例，听起来既怪异又合理，但是就是这么回事。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Person.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">constructor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Function); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Object.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">constructor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Function); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Function.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">constructor</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Function); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span></code></pre></div><p>既然知道了函数的构造函数，那么函数的__proto__指向我们也就知道了，就是Function.prototype</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Person.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">__proto__</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Object.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">__proto__</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Function.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">__proto__</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> Function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// true</span></span></code></pre></div><p>根据这几个结论，我们就能拓展出一张更大的关系图了</p><img src="https://jitems.gitee.io/myblog/docs/zs9.png" alt="solar"><h2 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h2><ul><li>构造函数是使用了new关键字的函数，用来创建对象，所有函数都是Function()的实例</li><li>原型对象是用来存放实例对象的公有属性和公有方法的一个公共对象，所有原型对象都是Object()的实例</li><li>原型链又叫隐式原型链，是由__proto__属性串联起来，原型链的尽头是Object.prototype</li></ul>`,42),p=[t];function l(k,e,r,E,d,o){return a(),i("div",null,p)}const c=s(h,[["render",l]]);export{y as __pageData,c as default};
