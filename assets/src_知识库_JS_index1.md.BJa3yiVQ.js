import{_ as i,c as a,o as s,a3 as l}from"./chunks/framework.BM2i9-bh.js";const E=JSON.parse('{"title":"常规","description":"","frontmatter":{},"headers":[],"relativePath":"src/知识库/JS/index1.md","filePath":"src/知识库/JS/index1.md"}'),e={name:"src/知识库/JS/index1.md"},t=l(`<h1 id="常规" tabindex="-1">常规 <a class="header-anchor" href="#常规" aria-label="Permalink to &quot;常规&quot;">​</a></h1><h2 id="基本数据类型" tabindex="-1">基本数据类型 <a class="header-anchor" href="#基本数据类型" aria-label="Permalink to &quot;基本数据类型&quot;">​</a></h2><ul><li><p>number 数字类型</p></li><li><p>string 字符串类型</p></li><li><p>boolean 布尔值类型 步林</p></li><li><p>object 对象类型</p></li><li><p>undefined 为定义类型</p></li><li><p>null 空值类型</p></li><li><p>symbol 唯一类型(符号) 升波</p></li><li><p>BigInt 数字类型 比紧特</p></li><li><p>基本类型：String、Number、Boolean、Symbol、Undefined、Null</p></li><li><p>引用类型：Object</p></li></ul><h2 id="this指向的含义" tabindex="-1">this指向的含义 <a class="header-anchor" href="#this指向的含义" aria-label="Permalink to &quot;this指向的含义&quot;">​</a></h2><p>《javascript高级程序设计》一书给出的解释是：</p><p>this对象是在运行时基于函数的执行环境绑定的：</p><ul><li>在全局函数中，this等于window，</li><li>在函数被作为某个对象调用时，this等于那个对象</li></ul><p>不过，匿名函数具有全局性，因此this对象同常指向window</p><h2 id="cookie与sessionstorage、localstorage区别" tabindex="-1">cookie与sessionStorage、localStorage区别 <a class="header-anchor" href="#cookie与sessionstorage、localstorage区别" aria-label="Permalink to &quot;cookie与sessionStorage、localStorage区别&quot;">​</a></h2><h3 id="cookie" tabindex="-1">cookie <a class="header-anchor" href="#cookie" aria-label="Permalink to &quot;cookie&quot;">​</a></h3><ul><li>大小只有4kb</li><li>跨域不能共享</li><li>不安全，容易被劫持</li><li>只存在请求头中</li></ul><h3 id="localstorage" tabindex="-1">localStorage <a class="header-anchor" href="#localstorage" aria-label="Permalink to &quot;localStorage&quot;">​</a></h3><p>localStorage的生命周期是永久性的。假若使用localStorage存储数据，即使关闭浏览器，也不会让数据消失，除非主动的去删除数据</p><h3 id="sessionstorage" tabindex="-1">sessionStorage <a class="header-anchor" href="#sessionstorage" aria-label="Permalink to &quot;sessionStorage&quot;">​</a></h3><p>sessionStorage 的生命周期是在浏览器关闭前。也就是说，在整个浏览器未关闭前，其数据一直都是存在的</p><h2 id="闭包" tabindex="-1">闭包 <a class="header-anchor" href="#闭包" aria-label="Permalink to &quot;闭包&quot;">​</a></h2><p><strong>定义：内部函数的作用域链依然保持着对父函数活动对象的引用，就是闭包</strong></p><p>闭包有两个作用：</p><ul><li>第一个就是可以读取自身函数外部的变量（沿着作用域链寻找）</li><li>第二个就是让这些外部变量始终保存在内存中</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> test</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> lives </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 50</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(){</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    lives </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}()</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 调用</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h3 id="什么是闭包" tabindex="-1">什么是闭包？ <a class="header-anchor" href="#什么是闭包" aria-label="Permalink to &quot;什么是闭包？&quot;">​</a></h3><ul><li>函数内嵌套函数</li><li>子函数引用了父函数的相关变量</li></ul><p><strong>闭包是指有权访问另一个函数作用域中变量的函数</strong>，创建闭包的最常见的方式就是在一个函数内创建另一个函数，创建的函数可以访问到当前函数的局部变量。</p><p>闭包优点：</p><ul><li>创建全局私有变量，避免变量全局污染</li><li>可以实现封装、缓存等</li></ul><p><strong>闭包缺点：</strong></p><ul><li>创建的变量不能被回收，容易消耗内存，使用不当会导致内存溢出 解决： 在不需要使用的时候把变量设为null</li></ul><p><strong>使用场景：</strong></p><ul><li>用于创建全局私有变量</li><li>封装类和模块</li><li>实现函数柯里化</li></ul><h3 id="闭包一定会造成内存泄漏吗" tabindex="-1">闭包一定会造成内存泄漏吗？ <a class="header-anchor" href="#闭包一定会造成内存泄漏吗" aria-label="Permalink to &quot;闭包一定会造成内存泄漏吗？&quot;">​</a></h3><p>闭包并不一定会造成内存泄漏，如果在使用闭包后变量没有及时销毁，可能会造成内存泄漏的风险。只要合理的使用闭包，就不会造成内存泄漏。</p><h3 id="为什么要函数嵌套函数" tabindex="-1">为什么要函数嵌套函数？ <a class="header-anchor" href="#为什么要函数嵌套函数" aria-label="Permalink to &quot;为什么要函数嵌套函数？&quot;">​</a></h3><p>是因为需要局部变量，所以才把变量放在一个函数里</p><ul><li>为什么要return呢？ 因为如果不 return，你就无法使用这个闭包。把 return test改成 window.test= test也是一样的，只要让外面可以访问到这个 test函数就行了</li></ul><h3 id="闭包的作用" tabindex="-1">闭包的作用？ <a class="header-anchor" href="#闭包的作用" aria-label="Permalink to &quot;闭包的作用？&quot;">​</a></h3><ul><li>1，常常用来间接访问一个变量</li><li>2，函数内部可以使用函数外部的变量 <ul><li>闭包使用场景：常用来封装组件和插件，比如：表单操作和倒计时功能等等。</li><li>闭包特点：长期驻留在内存中，可以缓存数据，可以隔离作用域，避免全局污染。</li></ul></li></ul><h2 id="var、let和const的区别" tabindex="-1">var、let和const的区别 <a class="header-anchor" href="#var、let和const的区别" aria-label="Permalink to &quot;var、let和const的区别&quot;">​</a></h2><ul><li>var可以重复声明，全局调用，没有块级作用域</li><li>let不能重复声明，有块级作用域，变量可以修改</li><li>const 不能重复声明，有块级作用域，常量不可以修改</li></ul><p>暂时性死区： 在使用let、const命令声明变量之前，该变量都是不可用的。这在语法上，称为暂时性死区。使用var声明的变量不存在暂时性死区</p><h2 id="解释null和undefined" tabindex="-1">解释null和undefined <a class="header-anchor" href="#解释null和undefined" aria-label="Permalink to &quot;解释null和undefined&quot;">​</a></h2><p>JavaScript 中有两种底层类型：null 和 undefined。它们代表了不同的含义：</p><ul><li>尚未初始化：undefined；</li><li>空值：null。</li></ul><h2 id="for-in和for-of的区别" tabindex="-1">for in和for of的区别 <a class="header-anchor" href="#for-in和for-of的区别" aria-label="Permalink to &quot;for in和for of的区别&quot;">​</a></h2><ul><li>for…of 遍历获取的是对象的键值，for…in 获取的是对象的键名；</li><li>for… in 会遍历对象的整个原型链，性能非常差不推荐使用</li></ul><h2 id="foreach和map方法有什么区别" tabindex="-1">forEach和map方法有什么区别 <a class="header-anchor" href="#foreach和map方法有什么区别" aria-label="Permalink to &quot;forEach和map方法有什么区别&quot;">​</a></h2><p>两个方法都是用来遍历循环数组，区别如下：</p><ul><li>forEach()对数据的操作会改变原数组，该方法没有返回值；</li><li>map()方法不会改变原数组的值，返回一个新数组，新数组中的值为原数组调用函数处理之后的值；</li></ul><h2 id="轮询" tabindex="-1">轮询 <a class="header-anchor" href="#轮询" aria-label="Permalink to &quot;轮询&quot;">​</a></h2><p>定义：就是每隔一个固定的时间就向后端发起一个异步请求。 常用到的方式：setTimeout和setInterval，</p><h3 id="setinterval方式" tabindex="-1">setInterval方式： <a class="header-anchor" href="#setinterval方式" aria-label="Permalink to &quot;setInterval方式：&quot;">​</a></h3><p>优点：就是写法简单； 缺点：就是无限的循环，不太好把控。</p><p>总的来说轮询会比较浪费网络资源，而且不管请求有没有响应，都会接着发下一次请求，影响性能。</p><h3 id="长轮询" tabindex="-1">长轮询 <a class="header-anchor" href="#长轮询" aria-label="Permalink to &quot;长轮询&quot;">​</a></h3><p>定义：就是下一次请求的发出的前提条件就是前一次请求响应成功。 通常采用promise语法来写</p><h2 id="定时器" tabindex="-1">定时器 <a class="header-anchor" href="#定时器" aria-label="Permalink to &quot;定时器&quot;">​</a></h2><h3 id="一次性定时器" tabindex="-1">一次性定时器 <a class="header-anchor" href="#一次性定时器" aria-label="Permalink to &quot;一次性定时器&quot;">​</a></h3><p>setTimeout(callback, delay, rest) (色特特闷欧特) self.time = setTimeout(() =&gt; {</p><p>}, 1000);</p><h3 id="取消定时器-cleartimeout-克尼尔特闷欧特" tabindex="-1">取消定时器 clearTimeout (克尼尔特闷欧特) <a class="header-anchor" href="#取消定时器-cleartimeout-克尼尔特闷欧特" aria-label="Permalink to &quot;取消定时器  clearTimeout  (克尼尔特闷欧特)&quot;">​</a></h3><p>clearTimeout(self.time)</p><h3 id="定时加载定时器" tabindex="-1">定时加载定时器 <a class="header-anchor" href="#定时加载定时器" aria-label="Permalink to &quot;定时加载定时器&quot;">​</a></h3><p>setInterval(callback, delay, rest) (色特因特儿佛) self.time = setInterval(() =&gt; {</p><p>}, 1000);</p><h3 id="取消定时器-clearinterval-克里尔因特儿佛" tabindex="-1">取消定时器 clearInterval (克里尔因特儿佛) <a class="header-anchor" href="#取消定时器-clearinterval-克里尔因特儿佛" aria-label="Permalink to &quot;取消定时器 clearInterval  (克里尔因特儿佛)&quot;">​</a></h3><p>clearInterval(self.time)</p><h2 id="事件委托" tabindex="-1">事件委托 <a class="header-anchor" href="#事件委托" aria-label="Permalink to &quot;事件委托&quot;">​</a></h2><p>什么是事件委托：通俗的讲，事件就是onclick，onmouseover，onmouseout，等就是事件，委托呢，就是让别人来做，这个事件本来是加在某些元素上的，然而你却加到别人身上来做，完成这个事件。 也就是：利用冒泡的原理，把事件加到父级上，触发执行效果。</p><p>好处：</p><ul><li>1、提高性能</li><li>2、新添加的原生还会有之前的事件</li></ul><h2 id="常见状态码含义" tabindex="-1">常见状态码含义 <a class="header-anchor" href="#常见状态码含义" aria-label="Permalink to &quot;常见状态码含义&quot;">​</a></h2><p><strong>区分状态码</strong></p><ul><li>1××开头 - 信息性状态码，表示HTTP请求已被接收，需要进一步处理。</li><li>2××开头 - 成功状态码，表示请求已成功处理完成。</li><li>3××开头 - 重定向状态码，表示请求需要进一步的操作以完成。</li><li>4××开头 - 客户端错误状态码，表示请求包含错误或无法完成。</li><li>5××开头 - 服务器错误状态码，表示服务器无法完成有效的请求。 <strong>常见状态码</strong></li><li>200 - 请求成功，从客户端发送给服务器的请求被正常处理并返回</li><li>301 - 表示被请求的资源已经被永久移动到新的URI（永久重定向）</li><li>302 - 表示被请求的资源已经被临时移动到新的URI（临时重定向）</li><li>304 - 表示服务器资源未被修改；通常是在客户端发出了一个条件请求，服务器通过比较资源的修改时间来确定资源是否已被修改</li><li>400 - 服务器不理解请求，请求报文中存在语法错误</li><li>401 - 请求需要身份验证</li><li>403 - 服务器拒绝请求（访问权限出现问题）</li><li>404 - 被请求的资源不存在</li><li>405 - 不允许的HTTP请求方法，意味着正在使用的HTTP请求方法不被服务器允许</li><li>500 - 服务器内部错误，无法完成请求</li><li>503 - 服务器当前无法处理请求，一般是因为过载或维护</li></ul><h2 id="http请求-报文-都有什么组成" tabindex="-1">HTTP请求(报文)都有什么组成？ <a class="header-anchor" href="#http请求-报文-都有什么组成" aria-label="Permalink to &quot;HTTP请求(报文)都有什么组成？&quot;">​</a></h2><p>HTTP请求报文主要由三个部分组成：请求行、请求头和请求体。具体如下：</p><ul><li>请求行：包含请求方法、URI（请求的资源路径）和HTTP协议版本。例如：GET /index.html HTTP/1.1。</li><li>请求头（Header）: 包含了客户端向服务器发送的附加信息，例如浏览器类型、字符编码、认证信息等。请求头以键值对的形式存在，多个键值对之间以换行符分隔。例如：Accept-Language: zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7。</li><li>请求体（Body） : 存放请求参数，即浏览器向服务器传输数据的实体部分。常用于POST方法提交请求时，发送表单数据、JSON数据等类型的数据。</li></ul><p><strong>注意:并不是所有的HTTP请求都必须带有请求体，像GET请求通常不需要发送请求体</strong></p><h2 id="tcp和udp协议" tabindex="-1">TCP和UDP协议 <a class="header-anchor" href="#tcp和udp协议" aria-label="Permalink to &quot;TCP和UDP协议&quot;">​</a></h2><ul><li>UDP：在传送数据前不需要先建立连接，远地的主机在收到UDP报文后也不需要给出任何确认。</li><li>TCP： 提供面向连接的服务。在传送数据之前必须先建立连接，数据传送结束后要释放连接。</li></ul><h2 id="说明-和-之间的区别" tabindex="-1">说明“==”和“===”之间的区别？ <a class="header-anchor" href="#说明-和-之间的区别" aria-label="Permalink to &quot;说明“==”和“===”之间的区别？&quot;">​</a></h2><p>“==”仅检查值相等，而“===”是一个更严格的等式判定，如果两个变量的值或类型不同，则返回false。</p><h2 id="什么是全局变量-这些变量如何声明-使用全局变量有哪些问题" tabindex="-1">什么是全局变量？这些变量如何声明，使用全局变量有哪些问题？ <a class="header-anchor" href="#什么是全局变量-这些变量如何声明-使用全局变量有哪些问题" aria-label="Permalink to &quot;什么是全局变量？这些变量如何声明，使用全局变量有哪些问题？&quot;">​</a></h2><p>全局变量是整个代码长度可用的变量，也就是说这些变量没有任何作用域。var关键字用于声明局部变量或对象。如果省略var关键字，则声明一个全局变量。</p><h2 id="解构赋值" tabindex="-1">解构赋值 <a class="header-anchor" href="#解构赋值" aria-label="Permalink to &quot;解构赋值&quot;">​</a></h2><ul><li>1、左右两边结构必须一样</li><li>2、右边必须是个东西</li><li>3、声明和赋值不能分开（必须在一句话里完成） <strong>案例二</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {a, c, d}</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{a: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, C: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">，d: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">6</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.1</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">og</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a, b, c);</span></span></code></pre></div><h2 id="为什么0-1-0-2-0-3-如何让其相等" tabindex="-1">为什么0.1+0.2 ! == 0.3，如何让其相等 <a class="header-anchor" href="#为什么0-1-0-2-0-3-如何让其相等" aria-label="Permalink to &quot;为什么0.1+0.2 ! == 0.3，如何让其相等&quot;">​</a></h2><p>因为浮点数运算的精度问题。在计算机运行过程中，需要将数据转化成二进制，然后再进行计算。 因为浮点数自身小数位数的限制而截断的二进制在转化为十进制，就变成0.30000000000000004，所以在计算时会产生误差</p><h3 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h3><ul><li>将其先转换成整数，再相加之后转回小数。具体做法为先乘10相加后除以10</li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.1</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">/</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><ul><li>使用number对象的toFixed方法，只保留一位小数点</li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(n1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> n2).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toFixed</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span></code></pre></div><h2 id="说说作用域与作用域链" tabindex="-1">说说作用域与作用域链 <a class="header-anchor" href="#说说作用域与作用域链" aria-label="Permalink to &quot;说说作用域与作用域链&quot;">​</a></h2><ul><li>作用域是在运行时代码中的某些特定部分中变量，函数和对象的可访问性。换句话说，作用域决定了代码区块中变量和其他资源的可见性。ES6 之前 JavaScript 没有块级作用域，只有全局作用域和函数作用域。ES6 的到来，为我们提供了块级作用域。</li><li>作用域链指的是作用域与作用域之间形成的链条。当我们查找一个当前作用域没有定义的变量（自由变量）的时候，就会向上一级作用域寻找，如果上一级也没有，就再一层一层向上寻找，直到找到全局作用域还是没找到，就宣布放弃。这种一层一层的关系，就是作用域链 。</li></ul><h2 id="基础数据类型和引用数据类型有什么区别" tabindex="-1">基础数据类型和引用数据类型有什么区别？ <a class="header-anchor" href="#基础数据类型和引用数据类型有什么区别" aria-label="Permalink to &quot;基础数据类型和引用数据类型有什么区别？&quot;">​</a></h2><p>ECMAScript 规范中，共定义了 7 种数据类型，分为 基本类型 和 引用类型 两大类，如下所示：</p><p><strong>基本类型：String、Number、Boolean、Symbol、Undefined、Null</strong><strong>引用类型：Object</strong></p><ul><li>基本类型也称为简单类型，由于其占据空间固定，是简单的数据段，为了便于提升变量查询速度，将其存储在栈中，即按值访问。</li><li>引用类型也称为复杂类型，由于其值的大小会改变，所以不能将其存放在栈中，否则会降低变量查询速度，因此，其值存储在堆(heap)中，而存储在变量处的值，是一个指针，指向存储对象的内存处，即按址访问。引用类型除 Object 外，还包括 Function 、Array、RegExp、Date 等等。</li></ul><h2 id="for-in-和-for-of-的区别" tabindex="-1">for...in 和 for...of 的区别 <a class="header-anchor" href="#for-in-和-for-of-的区别" aria-label="Permalink to &quot;for...in 和 for...of 的区别&quot;">​</a></h2><p>JavaScript 原有的 for...in 循环，只能获得对象的键名，不能直接获取键值。ES6 提供 for...of 循环，允许遍历获得键值。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arr </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;b&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;c&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;d&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arr) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 0 1 2 3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">of</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> arr) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// a b c d</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="设计模式知道那些-具体用法" tabindex="-1">设计模式知道那些？具体用法 <a class="header-anchor" href="#设计模式知道那些-具体用法" aria-label="Permalink to &quot;设计模式知道那些？具体用法&quot;">​</a></h2><ul><li>单例模式：就是保证一个类只有一个实例，实现的方法一般是先判断实例存在与否，如果存在直接返回，如果不存在就创建了再返回，这就确保了一个类只有一个实例对象。在JavaScript里，单例作为一个命名空间提供者，从全局命名空间里提供一个唯一的访问点来访问该对象。</li><li>观察者模式: 观察者的使用场合就是：当一个对象的改变需要同时改变其它对象，并且它不知道具体有多少对象需要改变的时候，就应该考虑使用观察者模式。</li><li>工厂模式解决了重复实例化的问题，缺点，创建不同对象其中属性和方法都会重复建立，消耗内存；还有函数识别问题等等。</li></ul><h2 id="js事件代理-也称事件委托-是什么-及实现原理" tabindex="-1">JS事件代理（也称事件委托）是什么，及实现原理 <a class="header-anchor" href="#js事件代理-也称事件委托-是什么-及实现原理" aria-label="Permalink to &quot;JS事件代理（也称事件委托）是什么，及实现原理&quot;">​</a></h2><p>JS事件代理就是通过给父级元素（例如：ul）绑定事件，不给子级元素(例如：li)绑定事件，然后当点击子级元素时，通过事件冒泡机制在其绑定的父元素上触发事件处理函数，主要目的是为了提升性能，因为我不用给每个子级元素绑定事件，只给父级元素绑定一次就好了,在原生js里面是通过event对象的targe属性实现</p><h2 id="es6新特性" tabindex="-1">ES6新特性 <a class="header-anchor" href="#es6新特性" aria-label="Permalink to &quot;ES6新特性&quot;">​</a></h2><ul><li>1.箭头函数</li><li>2.解构赋值</li><li>3.模板字符串</li><li>4.promise</li><li>5.symbol Symbol是ES6中引入的一种新的基本数据类型,用于表示一个独一无二的值,不能与其他数据类型进行运算</li><li>6.新的变量声明方式-let和const</li><li>7.模块化-es6新增了模块化，根据功能封装模块，通过import导入，然后通过export导出也可以使用export default导出</li><li>8.for…of 循环,用于遍历可迭代对象(如数组、Map 和 Set)中的元素</li><li>9.扩展运算符:使用 ... 可以将数组或对象展开成多个参数,或者将多个参数合并成一个数组</li><li>10.展开运算符:在ES6中用...来表示展开运算符,它可以将数组或者对象进行展开</li><li>11.Map 和 Set，引入了两种新的数据结构，分别用于存储键值对和唯一值</li><li>12.Proxy，允许在对象和函数调用等操作前后添加自定义的行为</li><li>13.类（Class），引入了面向对象编程中类的概念</li><li>14.默认参数（Default Parameter），在定义函数时可以给参数设置默认值</li></ul>`,107),n=[t];function h(r,p,o,k,d,c){return s(),a("div",null,n)}const g=i(e,[["render",h]]);export{E as __pageData,g as default};
