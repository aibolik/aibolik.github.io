(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{200:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),l=n(261),i=n(202),r=n(264),c=i.default.article.withConfig({displayName:"BlogPreview__BlogContainer",componentId:"p0nxrb-0"})(["line-height:1.5;"]),s=i.default.h2.withConfig({displayName:"BlogPreview__Title",componentId:"p0nxrb-1"})(["font-size:1.8em;line-height:1.2;"]),u=function(e){var t=e.title,n=(e.slug,e.content),a=e.publishDate;return o.a.createElement(c,null,o.a.createElement(s,null,t),o.a.createElement("p",null,n.filter(function(e){return"ContentfulBlogPostCopy"===e.__typename})[0].copy.childMarkdownRemark.excerpt),o.a.createElement(r.a,{publishDate:a}))},p=n(211),d=n(213),m=n.n(d),f=n(223);n.d(t,"pageQuery",function(){return w});var g=i.default.section.withConfig({displayName:"pages__PostsContainer",componentId:"sc-18r3lwr-0"})(["padding:16px 16px 46px;"]),h=Object(i.default)(l.a).withConfig({displayName:"pages__Link",componentId:"sc-18r3lwr-1"})(["color:inherit;text-decoration:none;"]),w=(t.default=function(e){var t=e.data;return o.a.createElement(f.a,null,o.a.createElement("section",null,o.a.createElement(p.a,{heroImage:m.a,title:"Hi, there!",excerpt:"My name is Aibol, and I am passionate about FrontEnd, JavaScript and especially ReactJS. I write about things those seem interesting to me, so I hope you can get some useful stuff for yourself!"}),o.a.createElement(g,null,t.allContentfulBlogPost.edges.map(function(e){var t=e.node;return o.a.createElement(h,{to:"/blog/"+t.slug,key:t.id},o.a.createElement(u,t))}))))},"2336226542")}}]);
//# sourceMappingURL=component---src-pages-index-js-ce6cca0cc28f74352f6c.js.map