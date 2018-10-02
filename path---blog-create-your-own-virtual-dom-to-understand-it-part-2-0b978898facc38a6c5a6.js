webpackJsonp([0xe06b836ba4f8],{410:function(e,t){e.exports={data:{contentfulBlogPost:{title:"Create your own virtual DOM to understand it (Part 2)",slug:"create-your-own-virtual-dom-to-understand-it-part-2",publishDate:"1532811600000",content:[{__typename:"ContentfulBlogPostCopy",id:"c34nCBGUypG0maqoQmqEy0G",copy:{childMarkdownRemark:{html:'<p><em>This article is the continuation of first part(so you better read <a href="http://aibolik.github.io/blog/create-your-own-virtual-dom-to-understand-it-part-1">first part</a> too :), where we learnt how to create virtual nodes with JSX-like function <strong>hyperscript</strong> and render them. In this part we will implement <strong>“diffing” algorithm</strong> of virtual DOM, that is the main advantage of it.</em></p>\n<p><em>Originally, I was inspired by the talk of <a href="https://medium.com/@stefanjudis">Stefan Judis</a> at Web Rebels 2018, so feel free to take a look at it <a href="https://www.youtube.com/watch?v=kghSjWmNJyQ&#x26;feature=youtu.be">here</a>.</em></p>\n<p>Okay, we have a simple function component that renders dynamic component. Let’s make it a bit complex by introducing its own state and converting it into class with render method. Also we can separate out new <em><strong>People component</strong></em>, that will responsible for rendering only list of emojis. Here how it will look like after:</p>'}}},{__typename:"ContentfulBlogPostImage",id:"c2oobcUVgfySQeYuyyme2QE",caption:"People component that renders list of emojis given in its properties",image:{resolutions:{src:"//images.ctfassets.net/w1fxlmsi3y1l/3jQG8KyMWA4kSYAco4mUGc/cdeb5d92d0eb1ad64be2f8a3d04463f3/1_gP5nb4zbPqgKgwtTNWdneA.png?w=400&q=100",srcSet:"//images.ctfassets.net/w1fxlmsi3y1l/3jQG8KyMWA4kSYAco4mUGc/cdeb5d92d0eb1ad64be2f8a3d04463f3/1_gP5nb4zbPqgKgwtTNWdneA.png?w=400&h=238&q=100 1x,\n//images.ctfassets.net/w1fxlmsi3y1l/3jQG8KyMWA4kSYAco4mUGc/cdeb5d92d0eb1ad64be2f8a3d04463f3/1_gP5nb4zbPqgKgwtTNWdneA.png?w=600&h=357&q=100 1.5x,\n//images.ctfassets.net/w1fxlmsi3y1l/3jQG8KyMWA4kSYAco4mUGc/cdeb5d92d0eb1ad64be2f8a3d04463f3/1_gP5nb4zbPqgKgwtTNWdneA.png?w=800&h=476&q=100 2x"}}},{__typename:"ContentfulBlogPostCopy",id:"c3ycPhvZrNSi0yc442SASgm",copy:{childMarkdownRemark:{html:'<p>Nothing special with this component: it just renders list of items that is given in its props. <strong>Note</strong>: we introduced <code class="language-text">render</code> method here — it actually creates virtual DOM that we use to render real DOM. And here is how our <em><strong>App component</strong></em> will change:</p>'}}},{__typename:"ContentfulBlogPostImage",id:"c61UPiBcOhqCwQsoOAEE0Eo",caption:"App component turned into class component",image:{resolutions:{src:"//images.ctfassets.net/w1fxlmsi3y1l/5XPsWPsFIQwwiuCGMsgC20/f57012e55104a295b7dda58958a097c7/1_23EwA0oCCuzbjJvBpM2RTQ.png?w=400&q=100",srcSet:"//images.ctfassets.net/w1fxlmsi3y1l/5XPsWPsFIQwwiuCGMsgC20/f57012e55104a295b7dda58958a097c7/1_23EwA0oCCuzbjJvBpM2RTQ.png?w=400&h=372&q=100 1x,\n//images.ctfassets.net/w1fxlmsi3y1l/5XPsWPsFIQwwiuCGMsgC20/f57012e55104a295b7dda58958a097c7/1_23EwA0oCCuzbjJvBpM2RTQ.png?w=600&h=558&q=100 1.5x,\n//images.ctfassets.net/w1fxlmsi3y1l/5XPsWPsFIQwwiuCGMsgC20/f57012e55104a295b7dda58958a097c7/1_23EwA0oCCuzbjJvBpM2RTQ.png?w=800&h=744&q=100 2x,\n//images.ctfassets.net/w1fxlmsi3y1l/5XPsWPsFIQwwiuCGMsgC20/f57012e55104a295b7dda58958a097c7/1_23EwA0oCCuzbjJvBpM2RTQ.png?w=1200&h=1116&q=100 3x"}}},{__typename:"ContentfulBlogPostCopy",id:"c6J5qG6hHq0EGeuyEEigKUU",copy:{childMarkdownRemark:{html:'<p>Two things to mention here:</p>\n<ol>\n<li>\n<p>We set its state in its constructor and create <em>timer,</em> that updates its state every 1 second(1000ms)</p>\n</li>\n<li>\n<p>We call <code class="language-text">setState</code> method to update its state.</p>\n</li>\n</ol>\n<p>You can find what does <code class="language-text">setState</code> method in <a href="https://reactjs.org/docs/faq-state.html#what-does-setstate-do">React’s documentation</a>. We will implement almost the same functionality here — update its <strong>state</strong> object and <strong>make our component to re-render.</strong> Of course React’s implementation is not that trivial, it makes bunch of optimizations on top of it, but come on, we are just building it :)</p>\n<p>Since the <code class="language-text">setState</code> is the method that every function will call, it makes sense to create an <em>abstract class</em> that implements it. When you write <code class="language-text">class MyApp extends React.Component</code> in React you are <em>inheriting</em> the <a href="https://reactjs.org/docs/glossary.html#components">**Component</a>** class and can use its methods. Okay, let’s scratch our simple Base Component class:</p>'}}},{__typename:"ContentfulBlogPostImage",id:"c61E1J4y5iMCasqMOAsGYmG",caption:"Base Component implementation",image:{resolutions:{src:"//images.ctfassets.net/w1fxlmsi3y1l/2ySUrBGr2kUs44M2IyoMoc/1f51c0e6f44e7b8268ccff4a5446acd9/1_D5-dNjonvaqEbQC98iUt9A.png?w=400&q=100",srcSet:"//images.ctfassets.net/w1fxlmsi3y1l/2ySUrBGr2kUs44M2IyoMoc/1f51c0e6f44e7b8268ccff4a5446acd9/1_D5-dNjonvaqEbQC98iUt9A.png?w=400&h=334&q=100 1x,\n//images.ctfassets.net/w1fxlmsi3y1l/2ySUrBGr2kUs44M2IyoMoc/1f51c0e6f44e7b8268ccff4a5446acd9/1_D5-dNjonvaqEbQC98iUt9A.png?w=600&h=501&q=100 1.5x,\n//images.ctfassets.net/w1fxlmsi3y1l/2ySUrBGr2kUs44M2IyoMoc/1f51c0e6f44e7b8268ccff4a5446acd9/1_D5-dNjonvaqEbQC98iUt9A.png?w=800&h=668&q=100 2x"}}},{__typename:"ContentfulBlogPostCopy",id:"c6oBPbOpDvGS0sOU0u4EIm6",copy:{childMarkdownRemark:{html:'<p>Basically, we just initiate our component with <code class="language-text">props</code> and <code class="language-text">state</code> fields and implement <code class="language-text">setState</code> method that basically rewrites our state and calls <code class="language-text">renderComponent</code> with itself in its parameters. I’ll explain it now, but first of all let’s make changes to our components:</p>'}}},{__typename:"ContentfulBlogPostImage",id:"c4cfCjFObuUkY0EEoy0M8o8",caption:"Changes to our components",image:{resolutions:{src:"//images.ctfassets.net/w1fxlmsi3y1l/3dx2SW7r5KSSy2iCecOkUi/90dbf35ba336873f406f44006dce2f41/1_eKQkT7QW7w98peWRoGDFLw.png?w=400&q=100",srcSet:"//images.ctfassets.net/w1fxlmsi3y1l/3dx2SW7r5KSSy2iCecOkUi/90dbf35ba336873f406f44006dce2f41/1_eKQkT7QW7w98peWRoGDFLw.png?w=400&h=362&q=100 1x,\n//images.ctfassets.net/w1fxlmsi3y1l/3dx2SW7r5KSSy2iCecOkUi/90dbf35ba336873f406f44006dce2f41/1_eKQkT7QW7w98peWRoGDFLw.png?w=600&h=543&q=100 1.5x"}}},{__typename:"ContentfulBlogPostCopy",id:"c21zDQf9tQUqygSCQgo40Um",copy:{childMarkdownRemark:{html:'<p>Okay, now we have our <strong>App</strong> and <strong>People</strong> components updated I’ll try to explain what <strong><code class="language-text">renderComponent</code></strong> should do.</p>\n<ol>\n<li>\n<p>It grabs the old base(current DOM before change that is saved in component.base)</p>\n</li>\n<li>\n<p>Renders virtual DOM — that we can get from <em>component.render</em> method and saves it into <em>component.base.</em></p>\n</li>\n<li>\n<p>Replaces the old child with the new one</p>\n</li>\n</ol>\n<p>Here it is:</p>'}}},{__typename:"ContentfulBlogPostImage",id:"c1ZQc0LNXsIcG6eeM62AkSk",caption:"renderComponent function implementation",image:{resolutions:{src:"//images.ctfassets.net/w1fxlmsi3y1l/40x7BUgqFyMmy48CMaK8Sk/8955306d30bfacd53d5236c3c6ab9275/1_ECgKa89HTXvXDMrIghlilg.png?w=400&q=100",srcSet:"//images.ctfassets.net/w1fxlmsi3y1l/40x7BUgqFyMmy48CMaK8Sk/8955306d30bfacd53d5236c3c6ab9275/1_ECgKa89HTXvXDMrIghlilg.png?w=400&h=248&q=100 1x,\n//images.ctfassets.net/w1fxlmsi3y1l/40x7BUgqFyMmy48CMaK8Sk/8955306d30bfacd53d5236c3c6ab9275/1_ECgKa89HTXvXDMrIghlilg.png?w=600&h=372&q=100 1.5x,\n//images.ctfassets.net/w1fxlmsi3y1l/40x7BUgqFyMmy48CMaK8Sk/8955306d30bfacd53d5236c3c6ab9275/1_ECgKa89HTXvXDMrIghlilg.png?w=800&h=496&q=100 2x"}}},{__typename:"ContentfulBlogPostCopy",id:"c4pOeOPDnwsCgUSaKKmWEQE",copy:{childMarkdownRemark:{html:'<blockquote>\n<p>I’ve added parent parameter, to that we could use <code class="language-text">parent.appendChild</code> when we render the root component first time.</p>\n</blockquote>\n<p>One little change to make it perfect is to change a little bit <code class="language-text">renderNode</code> function. Remember how it looked before:</p>'}}},{__typename:"ContentfulBlogPostImage",id:"c6vs4kKz452o6wIc2swiMio",caption:"renderNode before",image:{resolutions:{src:"//images.ctfassets.net/w1fxlmsi3y1l/3JOuwZLVG0e2QcgMeSysOw/a108754c46fbfb0b11e83da50f208dd6/renderNode.png?w=400&q=100",srcSet:"//images.ctfassets.net/w1fxlmsi3y1l/3JOuwZLVG0e2QcgMeSysOw/a108754c46fbfb0b11e83da50f208dd6/renderNode.png?w=400&h=278&q=100 1x,\n//images.ctfassets.net/w1fxlmsi3y1l/3JOuwZLVG0e2QcgMeSysOw/a108754c46fbfb0b11e83da50f208dd6/renderNode.png?w=600&h=416&q=100 1.5x"}}},{__typename:"ContentfulBlogPostCopy",id:"c1tB1hUn1heMIoGEGGIuCcc",copy:{childMarkdownRemark:{html:'<p>It only handles DOM elements, but actually we have something like this in our <strong>App component’s</strong> <code class="language-text">render</code> method:</p>\n<div class="gatsby-highlight" data-language="javascript">\n      <pre class="language-javascript"><code class="language-javascript"><span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">\'div\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token keyword">class</span><span class="token punctuation">:</span> <span class="token string">\'app\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n         <span class="token function">h</span><span class="token punctuation">(</span><span class="token string">\'h1\'</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token string">\'Simple vDOM\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n         <span class="token function">h</span><span class="token punctuation">(</span>People<span class="token punctuation">)</span>\n       <span class="token punctuation">)</span></code></pre>\n      </div>\n<p>As you can see <strong><code class="language-text">nodeName</code></strong> can take not only string values, but also another component/function to render, in our case this is <em><strong>People component</strong></em>. We need to make sure we handle them properly — basically we need to initiate the component, render it and do this with all of its children. Here is our updated <code class="language-text">renderNode</code> implementation:</p>'}}},{__typename:"ContentfulBlogPostImage",id:"c3qh4zvJ0UUCsY8cGgcCUwm",caption:"updated renderNode function",image:{resolutions:{src:"//images.ctfassets.net/w1fxlmsi3y1l/Hwp9Aj7ymGiQq86o6426i/97d7e0033f52c802368c3afc427d73ae/1_udGX7_pc2dUa3vVwRvyVlw.png?w=400&q=100",srcSet:"//images.ctfassets.net/w1fxlmsi3y1l/Hwp9Aj7ymGiQq86o6426i/97d7e0033f52c802368c3afc427d73ae/1_udGX7_pc2dUa3vVwRvyVlw.png?w=400&h=380&q=100 1x,\n//images.ctfassets.net/w1fxlmsi3y1l/Hwp9Aj7ymGiQq86o6426i/97d7e0033f52c802368c3afc427d73ae/1_udGX7_pc2dUa3vVwRvyVlw.png?w=600&h=569&q=100 1.5x,\n//images.ctfassets.net/w1fxlmsi3y1l/Hwp9Aj7ymGiQq86o6426i/97d7e0033f52c802368c3afc427d73ae/1_udGX7_pc2dUa3vVwRvyVlw.png?w=800&h=759&q=100 2x,\n//images.ctfassets.net/w1fxlmsi3y1l/Hwp9Aj7ymGiQq86o6426i/97d7e0033f52c802368c3afc427d73ae/1_udGX7_pc2dUa3vVwRvyVlw.png?w=1200&h=1139&q=100 3x"}}},{__typename:"ContentfulBlogPostCopy",id:"e4jpSzrjA4Ai8aasWquOg",copy:{childMarkdownRemark:{html:"<p>That’s it about rendering! Now our app works perfectly: any state change will cause app to re-render — as a result every child element/component will be updated. To leverage from this approach let’s move update operation in our application from <em><strong>App component</strong></em> to <em><strong>People component</strong></em> <em>(remove constructor from App and write it inside People)</em>:</p>"}}},{__typename:"ContentfulBlogPostImage",id:"c6wOwOROQrC0S0aYIWkSu46",caption:"constructor of People component",image:{resolutions:{src:"//images.ctfassets.net/w1fxlmsi3y1l/6JCSyTFD9YymIM2W0iiQCC/f85a304527885000810edf265cdfd5d7/1_suVzr44RaWNPduSMVh1t9Q.png?w=400&q=100",srcSet:"//images.ctfassets.net/w1fxlmsi3y1l/6JCSyTFD9YymIM2W0iiQCC/f85a304527885000810edf265cdfd5d7/1_suVzr44RaWNPduSMVh1t9Q.png?w=400&h=261&q=100 1x,\n//images.ctfassets.net/w1fxlmsi3y1l/6JCSyTFD9YymIM2W0iiQCC/f85a304527885000810edf265cdfd5d7/1_suVzr44RaWNPduSMVh1t9Q.png?w=600&h=391&q=100 1.5x,\n//images.ctfassets.net/w1fxlmsi3y1l/6JCSyTFD9YymIM2W0iiQCC/f85a304527885000810edf265cdfd5d7/1_suVzr44RaWNPduSMVh1t9Q.png?w=800&h=521&q=100 2x,\n//images.ctfassets.net/w1fxlmsi3y1l/6JCSyTFD9YymIM2W0iiQCC/f85a304527885000810edf265cdfd5d7/1_suVzr44RaWNPduSMVh1t9Q.png?w=1200&h=782&q=100 3x"}}},{__typename:"ContentfulBlogPostCopy",id:"c2dmFScHnQsKuuC0A4OAS2q",copy:{childMarkdownRemark:{html:'<p>And update <code class="language-text">render</code> method of People from this: <code class="language-text">return h(&#39;ul&#39;, null, ...props.list.map(item =&gt; h(&#39;li&#39;, null, item)))</code> to this <code class="language-text">return h(&#39;ul&#39;, null, ...state.list.map(item =&gt; h(&#39;li&#39;, null, item)))</code></p>\n<p>Now only <em><strong>People component</strong></em> will be re-rendered when its state updates. Compare these GIFs:</p>'}}},{__typename:"ContentfulBlogPostImage",id:"uRlmmUb6bmAOeYIUAK62M",caption:"Application re-render before",image:{resolutions:{src:"//images.ctfassets.net/w1fxlmsi3y1l/4mYYEvftHWoyoA6EiswkUu/40d13877eb2af7a35e7c6e86b655cdd5/app_rerender_before.gif?w=400&q=100",srcSet:"//images.ctfassets.net/w1fxlmsi3y1l/4mYYEvftHWoyoA6EiswkUu/40d13877eb2af7a35e7c6e86b655cdd5/app_rerender_before.gif?w=400&h=227&q=100 1x"}}},{__typename:"ContentfulBlogPostImage",id:"c33CjbVn1KgCq0ymiOwI4IA",caption:"Application re-render after",image:{resolutions:{src:"//images.ctfassets.net/w1fxlmsi3y1l/10sM7bBTRmuMaKEMu4KCou/af0635579b15e617748240a44c0628eb/app_rerender_after.gif?w=400&q=100",srcSet:"//images.ctfassets.net/w1fxlmsi3y1l/10sM7bBTRmuMaKEMu4KCou/af0635579b15e617748240a44c0628eb/app_rerender_after.gif?w=400&h=227&q=100 1x"}}},{__typename:"ContentfulBlogPostCopy",id:"YlcwwIk8UMKAgSoWscQ4e",copy:{childMarkdownRemark:{html:"<p>As you can see only the list updates, while the headline(Simple vDOM) does not re-render. Now we made our components <strong>Autonomous.</strong></p>\n<blockquote>\n<p><strong>Note 1</strong>: I’ve changes a bit styles: displayed items in <strong>flex</strong> row, so that adding new items will not cause reflow.\n<strong>Note 2:</strong> To see which parts of the website re-render you can enable **Paint flashing **in Chrome Dev Tools -> More(… icon)-> More tools -> Rendering)</p>\n</blockquote>\n<h2>Diffing algorithm</h2>\n<p>Well, it looks more like <em>React-ish</em> but re-rendering whole app when we just add a new item to the list is awful. Now it’s time to introduce “<strong>Diffing” algorithm</strong> that will make our application more powerful.</p>\n<p>In our case, we can just naively check if there are any new items in new virtual Node, and if there are any, we will just append it. So let’s start implementing it step by step. First of all, if there is no DOM provided, we just want render our virtual node and append it to the parent:</p>"}}},{__typename:"ContentfulBlogPostImage",id:"Z6el7Lc5uUGiYmg4GwG2Q",caption:"Render our app and append it to the parent, if there is no DOM to compare",image:{resolutions:{src:"//images.ctfassets.net/w1fxlmsi3y1l/62rKOgwlriqeCgcCiGgSuE/3f325e248d29706ceb5930a19e7f8d5f/1_8lZ2fUQEgnjgfFZvNL4YFg.png?w=400&q=100",srcSet:"//images.ctfassets.net/w1fxlmsi3y1l/62rKOgwlriqeCgcCiGgSuE/3f325e248d29706ceb5930a19e7f8d5f/1_8lZ2fUQEgnjgfFZvNL4YFg.png?w=400&h=319&q=100 1x,\n//images.ctfassets.net/w1fxlmsi3y1l/62rKOgwlriqeCgcCiGgSuE/3f325e248d29706ceb5930a19e7f8d5f/1_8lZ2fUQEgnjgfFZvNL4YFg.png?w=600&h=479&q=100 1.5x,\n//images.ctfassets.net/w1fxlmsi3y1l/62rKOgwlriqeCgcCiGgSuE/3f325e248d29706ceb5930a19e7f8d5f/1_8lZ2fUQEgnjgfFZvNL4YFg.png?w=800&h=638&q=100 2x"}}},{__typename:"ContentfulBlogPostCopy",id:"c3ocJiGL23eKk26Sw0YMyk4",copy:{childMarkdownRemark:{html:"<p>This is applicable for the <em>first run</em> — where there is no DOM rendered yet, and the only place where we give parent in its parameters. So we can use it for initial rendering, here how we will do it:</p>"}}},{__typename:"ContentfulBlogPostImage",id:"c5OrAMXNY3YAUqagmsUgoUC",caption:"Rendering app first time",image:{resolutions:{src:"//images.ctfassets.net/w1fxlmsi3y1l/aiGApMWdxekGee8MEK6O2/620836295d775b77f8f466d2a1302d1a/1_4gZn82zKuRjhrG1k2V3XFQ.png?w=400&q=100",srcSet:"//images.ctfassets.net/w1fxlmsi3y1l/aiGApMWdxekGee8MEK6O2/620836295d775b77f8f466d2a1302d1a/1_4gZn82zKuRjhrG1k2V3XFQ.png?w=400&h=215&q=100 1x,\n//images.ctfassets.net/w1fxlmsi3y1l/aiGApMWdxekGee8MEK6O2/620836295d775b77f8f466d2a1302d1a/1_4gZn82zKuRjhrG1k2V3XFQ.png?w=600&h=323&q=100 1.5x,\n//images.ctfassets.net/w1fxlmsi3y1l/aiGApMWdxekGee8MEK6O2/620836295d775b77f8f466d2a1302d1a/1_4gZn82zKuRjhrG1k2V3XFQ.png?w=800&h=430&q=100 2x"}}},{__typename:"ContentfulBlogPostCopy",id:"c3XcKDC2UpiukCmIqAwmOMi",copy:{childMarkdownRemark:{html:'<p>Okay, now we rendered our app, the <em><strong>People component</strong></em> will update its state after 1 second(remember the <em>timer</em> we set?). That will cause our <code class="language-text">renderComponent</code> to be called, so it will also be changed:</p>'}}},{__typename:"ContentfulBlogPostImage",id:"c4gTQWXjLZeeYyQkI2mGysm",caption:"updated renderComponent",image:{resolutions:{src:"//images.ctfassets.net/w1fxlmsi3y1l/6CBHFWPkhqGq6s680wWak2/719a0fe3a17a3c406e17d3a2c12bc908/1_WDNSeZ6pk67WgR256eTB6A.png?w=400&q=100",srcSet:"//images.ctfassets.net/w1fxlmsi3y1l/6CBHFWPkhqGq6s680wWak2/719a0fe3a17a3c406e17d3a2c12bc908/1_WDNSeZ6pk67WgR256eTB6A.png?w=400&h=151&q=100 1x,\n//images.ctfassets.net/w1fxlmsi3y1l/6CBHFWPkhqGq6s680wWak2/719a0fe3a17a3c406e17d3a2c12bc908/1_WDNSeZ6pk67WgR256eTB6A.png?w=600&h=227&q=100 1.5x,\n//images.ctfassets.net/w1fxlmsi3y1l/6CBHFWPkhqGq6s680wWak2/719a0fe3a17a3c406e17d3a2c12bc908/1_WDNSeZ6pk67WgR256eTB6A.png?w=800&h=303&q=100 2x,\n//images.ctfassets.net/w1fxlmsi3y1l/6CBHFWPkhqGq6s680wWak2/719a0fe3a17a3c406e17d3a2c12bc908/1_WDNSeZ6pk67WgR256eTB6A.png?w=1200&h=454&q=100 3x"}}},{__typename:"ContentfulBlogPostCopy",id:"c34OhMcaoV2YOgmO4gMUwKC",copy:{childMarkdownRemark:{html:'<p>Firstly, we create the virtual DOM with <code class="language-text">component.render</code> method, then we just compare it with its current DOM state(that we saved in <code class="language-text">component.base</code> field), and save the result of <strong><code class="language-text">diff</code></strong> in it again. So our <strong><code class="language-text">diff</code></strong> function should check if there are any new child, and in case it is true, we just <em>append</em> it. Here how it could look like:</p>'}}},{__typename:"ContentfulBlogPostImage",id:"c4aZZ9BWKY06uicwwGQwuaK",caption:"Simple diffing that checks for new children",image:{resolutions:{src:"//images.ctfassets.net/w1fxlmsi3y1l/6mSW9YudPiIu2CeIqEMeOk/886b37b5a735004fff5c8d08da3147f1/1_wEA0oTjVUZPluaaaqYzSHg.png?w=400&q=100",srcSet:"//images.ctfassets.net/w1fxlmsi3y1l/6mSW9YudPiIu2CeIqEMeOk/886b37b5a735004fff5c8d08da3147f1/1_wEA0oTjVUZPluaaaqYzSHg.png?w=400&h=264&q=100 1x,\n//images.ctfassets.net/w1fxlmsi3y1l/6mSW9YudPiIu2CeIqEMeOk/886b37b5a735004fff5c8d08da3147f1/1_wEA0oTjVUZPluaaaqYzSHg.png?w=600&h=396&q=100 1.5x,\n//images.ctfassets.net/w1fxlmsi3y1l/6mSW9YudPiIu2CeIqEMeOk/886b37b5a735004fff5c8d08da3147f1/1_wEA0oTjVUZPluaaaqYzSHg.png?w=800&h=527&q=100 2x,\n//images.ctfassets.net/w1fxlmsi3y1l/6mSW9YudPiIu2CeIqEMeOk/886b37b5a735004fff5c8d08da3147f1/1_wEA0oTjVUZPluaaaqYzSHg.png?w=1200&h=791&q=100 3x"}}},{__typename:"ContentfulBlogPostCopy",id:"c6bMrSMVF8keo42mEAc4Csu",copy:{childMarkdownRemark:{html:"<p>That’s it, we made it! Now take a look how it looks in our 3rd iteration:</p>"}}},{__typename:"ContentfulBlogPostImage",id:"c17Pnmdq1ma2GuAo2ucSks4",caption:"Re-rendering with diffing algorithm",image:{resolutions:{src:"//images.ctfassets.net/w1fxlmsi3y1l/OPDUr6e4aOAyYQsCUiKEQ/a7c7cdb42e61a929b9281cce0eec6ab0/rerender_with_diff.gif?w=400&q=100",srcSet:"//images.ctfassets.net/w1fxlmsi3y1l/OPDUr6e4aOAyYQsCUiKEQ/a7c7cdb42e61a929b9281cce0eec6ab0/rerender_with_diff.gif?w=400&h=226&q=100 1x"}}},{__typename:"ContentfulBlogPostCopy",id:"c3JpWTaHfna4iIuAWogkwEy",copy:{childMarkdownRemark:{html:'<p>As you can see the whole application and list do not re-render. Only the new child is added to list.</p>\n<p>This is just a simple example with simple “<em>diffing” algorithm,</em> but <em>hopefully</em> it will <strong>make sense for those who are new to these concept*</strong>. *It can not be compared to what React does. Here is just a few things what is there in <a href="https://reactjs.org/docs/reconciliation.html">React’s diffing </a>algorithm:</p>\n<ol>\n<li>\n<p>Comparing the types</p>\n</li>\n<li>\n<p>Comparing the attributes(props)</p>\n</li>\n<li>\n<p>Comparing the children</p>\n</li>\n</ol>\n<p>And of course there are tons of optimization under the hood, that makes React so powerful and beautiful UI library.</p>\n<blockquote>\n<h1>If you liked this and <a href="https://medium.com/@aibolkussain/create-your-own-virtual-dom-to-understand-it-part-1-47b9b6fc6dfb">previous</a> posts feel free to clap(👏) for me, that will motivate me to do stuff like this more. Thanks for reading!</h1>\n</blockquote>\n<p>Resources:</p>\n<ul>\n<li>\n<p><a href="https://youtu.be/kghSjWmNJyQ">Stefan Judis: What the v…DOM? | Web Rebels 2018</a></p>\n</li>\n<li>\n<p><a href="https://codepen.io/stefanjudis/pen/vjYWNO">Implementation of this experiment by Stefan Judis in CodePen</a></p>\n</li>\n<li>\n<p><a href="https://github.com/aibolik/simple-vdom">GitHub repo of this experiment</a></p>\n</li>\n<li>\n<p><a href="https://reactjs.org/docs/reconciliation.html">React’s diffing algorithm</a></p>\n</li>\n</ul>'}}}]}},pathContext:{slug:"create-your-own-virtual-dom-to-understand-it-part-2"}}}});
//# sourceMappingURL=path---blog-create-your-own-virtual-dom-to-understand-it-part-2-0b978898facc38a6c5a6.js.map