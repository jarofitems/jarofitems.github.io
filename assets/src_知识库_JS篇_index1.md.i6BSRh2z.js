import{_ as a,c as i,o as e,a3 as l}from"./chunks/framework.Dcugq_a2.js";const g=JSON.parse('{"title":"常规","description":"","frontmatter":{},"headers":[],"relativePath":"src/知识库/JS篇/index1.md","filePath":"src/知识库/JS篇/index1.md"}'),s={name:"src/知识库/JS篇/index1.md"},t=l(`<h1 id="常规" tabindex="-1">常规 <a class="header-anchor" href="#常规" aria-label="Permalink to &quot;常规&quot;">​</a></h1><h2 id="基本数据类型" tabindex="-1">基本数据类型 <a class="header-anchor" href="#基本数据类型" aria-label="Permalink to &quot;基本数据类型&quot;">​</a></h2><ul><li>number 数字类型</li><li>string 字符串类型</li><li>boolean 布尔值类型 步林</li><li>object 对象类型</li><li>undefined 为定义类型</li><li>null 空值类型</li><li>symbol 唯一类型(符号) 升波</li></ul><h2 id="this指向的含义" tabindex="-1">this指向的含义 <a class="header-anchor" href="#this指向的含义" aria-label="Permalink to &quot;this指向的含义&quot;">​</a></h2><p>《javascript高级程序设计》一书给出的解释是：</p><p>this对象是在运行时基于函数的执行环境绑定的：</p><ul><li>在全局函数中，this等于window，</li><li>在函数被作为某个对象调用时，this等于那个对象</li></ul><p>不过，匿名函数具有全局性，因此this对象同常指向window</p><h2 id="cookie与sessionstorage、localstorage区别" tabindex="-1">cookie与sessionStorage、localStorage区别 <a class="header-anchor" href="#cookie与sessionstorage、localstorage区别" aria-label="Permalink to &quot;cookie与sessionStorage、localStorage区别&quot;">​</a></h2><h3 id="cookie" tabindex="-1">cookie <a class="header-anchor" href="#cookie" aria-label="Permalink to &quot;cookie&quot;">​</a></h3><p>cookie若不设置时间，则表示这个cookie的生命期为浏览器会话期间，在没设置过期时间的情况关闭浏览器窗口，cookie就会消失。这种生命期为浏览器会话期的cookie被称为会话cookie。</p><h3 id="localstorage" tabindex="-1">localStorage <a class="header-anchor" href="#localstorage" aria-label="Permalink to &quot;localStorage&quot;">​</a></h3><p>localStorage的生命周期是永久性的。假若使用localStorage存储数据，即使关闭浏览器，也不会让数据消失，除非主动的去删除数据</p><h3 id="sessionstorage" tabindex="-1">sessionStorage <a class="header-anchor" href="#sessionstorage" aria-label="Permalink to &quot;sessionStorage&quot;">​</a></h3><p>sessionStorage 的生命周期是在浏览器关闭前。也就是说，在整个浏览器未关闭前，其数据一直都是存在的</p><h2 id="闭包" tabindex="-1">闭包 <a class="header-anchor" href="#闭包" aria-label="Permalink to &quot;闭包&quot;">​</a></h2><p><strong>定义：内部函数的作用域链依然保持着对父函数活动对象的引用，就是闭包</strong></p><p>闭包有两个作用：</p><ul><li>第一个就是可以读取自身函数外部的变量（沿着作用域链寻找）</li><li>第二个就是让这些外部变量始终保存在内存中</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> test</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> lives </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 50</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    lives </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 调用</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h3 id="什么是闭包" tabindex="-1">什么是闭包？ <a class="header-anchor" href="#什么是闭包" aria-label="Permalink to &quot;什么是闭包？&quot;">​</a></h3><ul><li>函数内嵌套函数</li><li>子函数引用了父函数的相关变量</li></ul><h3 id="为什么要函数嵌套函数" tabindex="-1">为什么要函数嵌套函数？ <a class="header-anchor" href="#为什么要函数嵌套函数" aria-label="Permalink to &quot;为什么要函数嵌套函数？&quot;">​</a></h3><p>是因为需要局部变量，所以才把变量放在一个函数里</p><ul><li>为什么要return呢？ 因为如果不 return，你就无法使用这个闭包。把 return test改成 window.test= test也是一样的，只要让外面可以访问到这个 test函数就行了</li></ul><h3 id="闭包的作用" tabindex="-1">闭包的作用？ <a class="header-anchor" href="#闭包的作用" aria-label="Permalink to &quot;闭包的作用？&quot;">​</a></h3><p>1，常常用来间接访问一个变量 2，函数内部可以使用函数外部的变量 闭包使用场景：常用来封装组件和插件，比如：表单操作和倒计时功能等等。 闭包特点：长期驻留在内存中，可以缓存数据，可以隔离作用域，避免全局污染。</p><h2 id="var、let和const的区别" tabindex="-1">var、let和const的区别 <a class="header-anchor" href="#var、let和const的区别" aria-label="Permalink to &quot;var、let和const的区别&quot;">​</a></h2><ul><li>var可以重复声明，全局调用，没有块级作用域</li><li>let不能重复声明，有块级作用域，变量可以修改</li><li>const 不能重复声明，有块级作用域，常量不可以修改</li></ul><h2 id="解释null和undefined" tabindex="-1">解释null和undefined <a class="header-anchor" href="#解释null和undefined" aria-label="Permalink to &quot;解释null和undefined&quot;">​</a></h2><p>JavaScript 中有两种底层类型：null 和 undefined。它们代表了不同的含义：</p><ul><li>尚未初始化：undefined；</li><li>空值：null。</li></ul><h2 id="轮询" tabindex="-1">轮询 <a class="header-anchor" href="#轮询" aria-label="Permalink to &quot;轮询&quot;">​</a></h2><p>定义：就是每隔一个固定的时间就向后端发起一个异步请求。 常用到的方式：setTimeout和setInterval，</p><h3 id="setinterval方式" tabindex="-1">setInterval方式： <a class="header-anchor" href="#setinterval方式" aria-label="Permalink to &quot;setInterval方式：&quot;">​</a></h3><p>优点：就是写法简单； 缺点：就是无限的循环，不太好把控。</p><p>总的来说轮询会比较浪费网络资源，而且不管请求有没有响应，都会接着发下一次请求，影响性能。</p><h3 id="长轮询" tabindex="-1">长轮询 <a class="header-anchor" href="#长轮询" aria-label="Permalink to &quot;长轮询&quot;">​</a></h3><p>定义：就是下一次请求的发出的前提条件就是前一次请求响应成功。 通常采用promise语法来写</p><h2 id="定时器" tabindex="-1">定时器 <a class="header-anchor" href="#定时器" aria-label="Permalink to &quot;定时器&quot;">​</a></h2><h3 id="一次性定时器" tabindex="-1">一次性定时器 <a class="header-anchor" href="#一次性定时器" aria-label="Permalink to &quot;一次性定时器&quot;">​</a></h3><p>setTimeout(callback, delay, rest) (色特特闷欧特) self.time = setTimeout(() =&gt; {</p><p>}, 1000);</p><h3 id="取消定时器-cleartimeout-克尼尔特闷欧特" tabindex="-1">取消定时器 clearTimeout (克尼尔特闷欧特) <a class="header-anchor" href="#取消定时器-cleartimeout-克尼尔特闷欧特" aria-label="Permalink to &quot;取消定时器  clearTimeout  (克尼尔特闷欧特)&quot;">​</a></h3><p>clearTimeout(self.time)</p><h3 id="定时加载定时器" tabindex="-1">定时加载定时器 <a class="header-anchor" href="#定时加载定时器" aria-label="Permalink to &quot;定时加载定时器&quot;">​</a></h3><p>setInterval(callback, delay, rest) (色特因特儿佛) self.time = setInterval(() =&gt; {</p><p>}, 1000);</p><h3 id="取消定时器-clearinterval-克里尔因特儿佛" tabindex="-1">取消定时器 clearInterval (克里尔因特儿佛) <a class="header-anchor" href="#取消定时器-clearinterval-克里尔因特儿佛" aria-label="Permalink to &quot;取消定时器 clearInterval  (克里尔因特儿佛)&quot;">​</a></h3><p>clearInterval(self.time)</p><h2 id="事件委托" tabindex="-1">事件委托 <a class="header-anchor" href="#事件委托" aria-label="Permalink to &quot;事件委托&quot;">​</a></h2><p>什么是事件委托：通俗的讲，事件就是onclick，onmouseover，onmouseout，等就是事件，委托呢，就是让别人来做，这个事件本来是加在某些元素上的，然而你却加到别人身上来做，完成这个事件。 也就是：利用冒泡的原理，把事件加到父级上，触发执行效果。 好处： 1、提高性能 2、新添加的原生还会有之前的事件</p><h2 id="常见状态码含义" tabindex="-1">常见状态码含义 <a class="header-anchor" href="#常见状态码含义" aria-label="Permalink to &quot;常见状态码含义&quot;">​</a></h2><p><strong>区分状态码</strong></p><ul><li>1××开头 - 信息性状态码，表示HTTP请求已被接收，需要进一步处理。</li><li>2××开头 - 成功状态码，表示请求已成功处理完成。</li><li>3××开头 - 重定向状态码，表示请求需要进一步的操作以完成。</li><li>4××开头 - 客户端错误状态码，表示请求包含错误或无法完成。</li><li>5××开头 - 服务器错误状态码，表示服务器无法完成有效的请求。 <strong>常见状态码</strong></li><li>200 - 请求成功，从客户端发送给服务器的请求被正常处理并返回</li><li>301 - 表示被请求的资源已经被永久移动到新的URI（永久重定向）</li><li>302 - 表示被请求的资源已经被临时移动到新的URI（临时重定向）</li><li>304 - 表示服务器资源未被修改；通常是在客户端发出了一个条件请求，服务器通过比较资源的修改时间来确定资源是否已被修改</li><li>400 - 服务器不理解请求，请求报文中存在语法错误</li><li>401 - 请求需要身份验证</li><li>403 - 服务器拒绝请求（访问权限出现问题）</li><li>404 - 被请求的资源不存在</li><li>405 - 不允许的HTTP请求方法，意味着正在使用的HTTP请求方法不被服务器允许</li><li>500 - 服务器内部错误，无法完成请求</li><li>503 - 服务器当前无法处理请求，一般是因为过载或维护</li></ul><h2 id="http请求-报文-都有什么组成" tabindex="-1">HTTP请求(报文)都有什么组成？ <a class="header-anchor" href="#http请求-报文-都有什么组成" aria-label="Permalink to &quot;HTTP请求(报文)都有什么组成？&quot;">​</a></h2><p>HTTP请求报文主要由三个部分组成：请求行、请求头和请求体。具体如下：</p><ul><li>请求行：包含请求方法、URI（请求的资源路径）和HTTP协议版本。例如：GET /index.html HTTP/1.1。</li><li>请求头（Header）: 包含了客户端向服务器发送的附加信息，例如浏览器类型、字符编码、认证信息等。请求头以键值对的形式存在，多个键值对之间以换行符分隔。例如：Accept-Language: zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7。</li><li>请求体（Body） : 存放请求参数，即浏览器向服务器传输数据的实体部分。常用于POST方法提交请求时，发送表单数据、JSON数据等类型的数据。</li></ul><p><strong>注意:并不是所有的HTTP请求都必须带有请求体，像GET请求通常不需要发送请求体</strong></p><h2 id="tcp和udp协议" tabindex="-1">TCP和UDP协议 <a class="header-anchor" href="#tcp和udp协议" aria-label="Permalink to &quot;TCP和UDP协议&quot;">​</a></h2><ul><li>UDP：在传送数据前不需要先建立连接，远地的主机在收到UDP报文后也不需要给出任何确认。</li><li>TCP： 提供面向连接的服务。在传送数据之前必须先建立连接，数据传送结束后要释放连接。</li></ul><h2 id="说明-和-之间的区别" tabindex="-1">说明“==”和“===”之间的区别？ <a class="header-anchor" href="#说明-和-之间的区别" aria-label="Permalink to &quot;说明“==”和“===”之间的区别？&quot;">​</a></h2><p>“==”仅检查值相等，而“===”是一个更严格的等式判定，如果两个变量的值或类型不同，则返回false。</p><h2 id="什么是全局变量-这些变量如何声明-使用全局变量有哪些问题" tabindex="-1">什么是全局变量？这些变量如何声明，使用全局变量有哪些问题？ <a class="header-anchor" href="#什么是全局变量-这些变量如何声明-使用全局变量有哪些问题" aria-label="Permalink to &quot;什么是全局变量？这些变量如何声明，使用全局变量有哪些问题？&quot;">​</a></h2><p>全局变量是整个代码长度可用的变量，也就是说这些变量没有任何作用域。var关键字用于声明局部变量或对象。如果省略var关键字，则声明一个全局变量。</p><h2 id="解构赋值" tabindex="-1">解构赋值 <a class="header-anchor" href="#解构赋值" aria-label="Permalink to &quot;解构赋值&quot;">​</a></h2><ul><li>1、左右两边结构必须一样</li><li>2、右边必须是个东西</li><li>3、声明和赋值不能分开（必须在一句话里完成） <strong>案例二</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {a, c, d}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{a: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, C: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">，d: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.1</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">og</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a, b, c);</span></span></code></pre></div>`,68),n=[t];function r(h,o,p,d,c,k){return e(),i("div",null,n)}const b=a(s,[["render",r]]);export{g as __pageData,b as default};
