(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{197:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(210),o=n(203),l=o.default.figure.withConfig({displayName:"ImageEmbed__Figure",componentId:"gqb8j3-0"})(["margin:16px 0;text-align:center;img{width:100%;}figcaption{color:rgba(33,33,33,.51);font-size:.8em;font-style:italic;}"]),c=function(e){var t=e.image,n=e.caption,a=e.alt;return i.a.createElement(l,null,i.a.createElement("img",{src:t.resolutions.src,srcSet:t.resolutions.srcSet,alt:a}),n&&i.a.createElement("figcaption",null,n))};c.defaultProps={alt:""};var u=c,s=o.default.figure.withConfig({displayName:"CodeSandboxEmbed__Figure",componentId:"sc-1k0wayz-0"})(["margin:16px 0;text-align:center;img{width:100%;}figcaption{color:rgba(33,33,33,.51);font-size:.8em;font-style:italic;}"]),d=function(e){var t=e.embedUrl,n=e.title;return i.a.createElement(s,null,i.a.createElement("iframe",{src:t,style:{width:"100%",height:"500px",border:0,borderRadius:"4px",overflow:"hidden"},title:n,allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),n&&i.a.createElement("figcaption",null,n))},p=n(211),g=n.n(p),m=n(204),f=n(217),h=(n(42),n(13),n(94),n(208)),x=n(209),y=n.n(x);function M(){var e=b(["\n    font-size: 1.6em;\n  "]);return M=function(){return e},e}function w(){var e=b(["\n    max-width: 500px;\n    border-radius: 6px;\n    margin: auto;\n  "]);return w=function(){return e},e}function b(e,t){return t||(t=e.slice(0)),e.raw=t,e}var N=o.default.div.withConfig({displayName:"_styled__FormContainer",componentId:"erolvt-0"})(["color:white;background:linear-gradient(90deg,#765E9C,#622d8a);padding:16px 24px;display:flex;flex-direction:column;justify-content:space-between;align-items:center;border-radius:0;margin-left:-20px;margin-right:-20px;font-size:16px;margin-bottom:-41px;",""],m.a.tablet(w())),v=(o.default.div.withConfig({displayName:"_styled__TextContainer",componentId:"erolvt-1"})(["flex:1 1 0;padding-right:16px;"]),o.default.h3.withConfig({displayName:"_styled__MainText",componentId:"erolvt-2"})(["font-size:1.4em;font-weight:400;line-height:1.4;max-width:400px;margin:0;",""],m.a.tablet(M()))),E=o.default.p.withConfig({displayName:"_styled__SmallText",componentId:"erolvt-3"})(["margin:0;text-align:center;strong{font-weight:700;}"]),j=o.default.input.withConfig({displayName:"_styled__Input",componentId:"erolvt-4"})(["flex:1 1 0;font-weight:300;border:none;border-radius:4px;background-image:url(",");background-size:26px 26px;background-repeat:no-repeat;background-position:12px;height:32px;padding:6px 6px 6px 44px;margin:16px 12px 16px;max-width:calc(100% - 160px);"],y.a),C=o.default.form.withConfig({displayName:"_styled__Form",componentId:"erolvt-5"})(["display:flex;align-items:center;"]),L=function(e){var t=e.title,n=e.caption,r=Object(a.useState)(""),o=r[0],l=r[1],c=Object(a.useState)(!1),u=c[0],s=c[1],d=Object(a.useState)(!1),p=d[0],g=d[1];return Object(a.useEffect)(function(){p&&(s(!0),fetch("https://europe-west1-my-blog-aibolik.cloudfunctions.net/courseSignUp",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:o})}).then(function(e){return e.json()}).then(function(e){if(!e.data)throw new Error("Something went wrong");alert("Thanks for signing up. You will receive email when course is released"),l("")}).catch(function(e){alert(e.message)}).finally(function(){s(!1),g(!1)}))},[p]),i.a.createElement(N,null,t&&i.a.createElement(v,null,t),!t&&i.a.createElement(E,null,n),i.a.createElement(C,{onSubmit:function(e){e.preventDefault(),g(!0)}},i.a.createElement(j,{value:o,placeholder:"your@email.com",onChange:function(e){return l(e.target.value)}}),i.a.createElement(h.a,{loading:u,type:"submit"},"Sign Up")),t&&i.a.createElement(E,null,n))};n(279);function k(){var e=z(["\n    padding-right: 300px;\n  "]);return k=function(){return e},e}function T(){var e=z(["\n    padding: 0 16px 40px 48px;\n  "]);return T=function(){return e},e}function I(){var e=z(["\n    padding: 0 16px 40px 32px;\n  "]);return I=function(){return e},e}function z(e,t){return t||(t=e.slice(0)),e.raw=t,e}n.d(t,"StyledContent",function(){return D}),n.d(t,"pageQuery",function(){return S});var D=o.default.section.withConfig({displayName:"blog-post__StyledContent",componentId:"sc-1g9vcly-0"})(["padding:0 16px 40px;font-family:'Merriweather',Helvetica,Arial,serif;font-size:1.2em;line-height:1.4;.gatsby-highlight{font-size:.8em;}*:not(pre) > code[class*=\"language-\"]{","}blockquote{margin:1em 40px 1em 1em;padding-left:1em;border-left:4px solid rgba(33,33,33,.77);font-style:italic;}twitterwidget{margin:10px auto;}"," "," "," ul{list-style:circle outside none;}a{color:#765E9C;text-decoration:none;&:hover{text-decoration:underline;}}strong{font-weight:600;}"],function(e){return"\n      background: "+e.theme.codeBackground+";\n      color: "+e.theme.codeColor+";\n    "},m.a.tablet(I()),m.a.desktop(T()),m.a.desktopMedium(k())),S=(t.default=function(e){var t=e.data.contentfulBlogPost;return i.a.createElement(f.a,{hideNewsletterSignUp:!1===t.showNewsletterPromotion},i.a.createElement("article",null,i.a.createElement(r.a,{heroImage:g.a,title:t.title,publishDate:t.publishDate}),i.a.createElement(D,null,t.content.map(function(e){var t;switch(e.__typename){case"ContentfulBlogPostCopy":t=i.a.createElement("div",{key:e.id,dangerouslySetInnerHTML:{__html:e.copy.childMarkdownRemark.html}});break;case"ContentfulBlogPostImage":t=i.a.createElement(u,{key:e.id,image:e.image,caption:e.caption});break;case"ContentfulBlogPostEmbedCodeSandbox":t=i.a.createElement(d,{key:e.id,embedUrl:e.embedUrl,title:e.title});break;default:t="Content type is missing? Please say about it to twitter.com/aibolik_ :)"}return t}),t.show30dayReactPromotion&&i.a.createElement(L,{caption:i.a.createElement("em",null,"Sign up now and get the course ",i.a.createElement("strong",null,'"30-day-React"'),i.a.createElement("br",null),"for ",i.a.createElement("strong",null,"free")," when it is released")}))))},"3968737149")},204:function(e,t,n){"use strict";n.d(t,"a",function(){return r});n(29),n(30),n(13),n(51);var a=n(203),i={tablet:768,desktop:1020,desktopMedium:1280},r=Object.keys(i).reduce(function(e,t){return e[t]=function(){return Object(a.css)(["@media screen and (min-width:","em){","}"],i[t]/16,a.css.apply(void 0,arguments))},e},{})},206:function(e,t,n){var a;e.exports=(a=n(223))&&a.default||a},208:function(e,t,n){"use strict";n.d(t,"a",function(){return s});n(29),n(30),n(13),n(51),n(23);var a=n(0),i=n.n(a),r=n(203),o=n(204);function l(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n    padding: 0 16px;\n  "]);return l=function(){return e},e}var c=r.default.button.withConfig({displayName:"Button__Btn",componentId:"sc-11vzgof-0"})(["box-sizing:border-box;height:42px;padding:0 8px;border-radius:4px;border:none;color:",";background:linear-gradient(to right,rgba(74,79,105,1) 0%,rgba(73,84,142,1) 30%,rgba(74,120,141,1) 100%);cursor:pointer;",""],function(e){return e.theme.lightText},o.a.tablet(l())),u=Object(r.default)(c).withConfig({displayName:"Button__LoadableBtn",componentId:"sc-11vzgof-1"})(["position:relative;overflow:hidden;span{display:inline-block;position:relative;transition:transform .3s;}&:after{content:'';opacity:0;transition:opacity .3s;}&.loading{span{transform:translateX(-200%);}&:after{content:'';position:absolute;left:calc(50% - 10px);top:calc(50% - 10px);width:10px;height:10px;border:4px solid;border-left-color:transparent;border-radius:50%;opacity:1;animation:rotate 1s linear infinite;}}@keyframes rotate{0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}}"]),s=function(e){var t=e.children,n=e.loading,a=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["children","loading"]);return i.a.createElement(u,Object.assign({className:n?"loading":""},a),i.a.createElement("span",null,t))}},209:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjUxMS42MjZweCIgaGVpZ2h0PSI1MTEuNjI2cHgiIHZpZXdCb3g9IjAgMCA1MTEuNjI2IDUxMS42MjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMS42MjYgNTExLjYyNjsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiIGZpbGw9IiMwMDAwMDA1QyI+DQo8Zz4NCgk8cGF0aCBkPSJNNDkuMTA2LDE3OC43MjljNi40NzIsNC41NjcsMjUuOTgxLDE4LjEzMSw1OC41MjgsNDAuNjg1YzMyLjU0OCwyMi41NTQsNTcuNDgyLDM5LjkyLDc0LjgwMyw1Mi4wOTkNCgkJYzEuOTAzLDEuMzM1LDUuOTQ2LDQuMjM3LDEyLjEzMSw4LjcxYzYuMTg2LDQuNDc2LDExLjMyNiw4LjA5MywxNS40MTYsMTAuODUyYzQuMDkzLDIuNzU4LDkuMDQxLDUuODUyLDE0Ljg0OSw5LjI3Nw0KCQljNS44MDYsMy40MjIsMTEuMjc5LDUuOTk2LDE2LjQxOCw3LjdjNS4xNCwxLjcxOCw5Ljg5OCwyLjU2OSwxNC4yNzUsMi41NjloMC4yODdoMC4yODhjNC4zNzcsMCw5LjEzNy0wLjg1MiwxNC4yNzctMi41NjkNCgkJYzUuMTM3LTEuNzA0LDEwLjYxNS00LjI4MSwxNi40MTYtNy43YzUuODA0LTMuNDI5LDEwLjc1Mi02LjUyLDE0Ljg0NS05LjI3N2M0LjA5My0yLjc1OSw5LjIyOS02LjM3NiwxNS40MTctMTAuODUyDQoJCWM2LjE4NC00LjQ3NywxMC4yMzItNy4zNzUsMTIuMTM1LTguNzFjMTcuNTA4LTEyLjE3OSw2Mi4wNTEtNDMuMTEsMTMzLjYxNS05Mi43OWMxMy44OTQtOS43MDMsMjUuNTAyLTIxLjQxMSwzNC44MjctMzUuMTE2DQoJCWM5LjMzMi0xMy42OTksMTMuOTkzLTI4LjA3LDEzLjk5My00My4xMDVjMC0xMi41NjQtNC41MjMtMjMuMzE5LTEzLjU2NS0zMi4yNjRjLTkuMDQxLTguOTQ3LTE5Ljc0OS0xMy40MTgtMzIuMTE3LTEzLjQxOEg0NS42NzkNCgkJYy0xNC42NTUsMC0yNS45MzMsNC45NDgtMzMuODMyLDE0Ljg0NEMzLjk0OSw3OS41NjIsMCw5MS45MzQsMCwxMDYuNzc5YzAsMTEuOTkxLDUuMjM2LDI0Ljk4NSwxNS43MDMsMzguOTc0DQoJCUMyNi4xNjksMTU5Ljc0MywzNy4zMDcsMTcwLjczNiw0OS4xMDYsMTc4LjcyOXoiLz4NCgk8cGF0aCBkPSJNNDgzLjA3MiwyMDkuMjc1Yy02Mi40MjQsNDIuMjUxLTEwOS44MjQsNzUuMDg3LTE0Mi4xNzcsOTguNTAxYy0xMC44NDksNy45OTEtMTkuNjUsMTQuMjI5LTI2LjQwOSwxOC42OTkNCgkJYy02Ljc1OSw0LjQ3My0xNS43NDgsOS4wNDEtMjYuOTgsMTMuNzAyYy0xMS4yMjgsNC42NjgtMjEuNjkyLDYuOTk1LTMxLjQwMSw2Ljk5NWgtMC4yOTFoLTAuMjg3DQoJCWMtOS43MDcsMC0yMC4xNzctMi4zMjctMzEuNDA1LTYuOTk1Yy0xMS4yMjgtNC42NjEtMjAuMjIzLTkuMjI5LTI2Ljk4LTEzLjcwMmMtNi43NTUtNC40Ny0xNS41NTktMTAuNzA4LTI2LjQwNy0xOC42OTkNCgkJYy0yNS42OTctMTguODQyLTcyLjk5NS01MS42OC0xNDEuODk2LTk4LjUwMUMxNy45ODcsMjAyLjA0Nyw4LjM3NSwxOTMuNzYyLDAsMTg0LjQzN3YyMjYuNjg1YzAsMTIuNTcsNC40NzEsMjMuMzE5LDEzLjQxOCwzMi4yNjUNCgkJYzguOTQ1LDguOTQ5LDE5LjcwMSwxMy40MjIsMzIuMjY0LDEzLjQyMmg0MjAuMjY2YzEyLjU2LDAsMjMuMzE1LTQuNDczLDMyLjI2MS0xMy40MjJjOC45NDktOC45NDksMTMuNDE4LTE5LjY5NCwxMy40MTgtMzIuMjY1DQoJCVYxODQuNDM3QzUwMy40NDEsMTkzLjU2OSw0OTMuOTI3LDIwMS44NTQsNDgzLjA3MiwyMDkuMjc1eiIvPg0KPC9nPg0KPC9zdmc+DQo="},210:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(203),o=n(204),l=n(218);function c(){var e=f(["\n    margin-top: 1.2em;\n  "]);return c=function(){return e},e}function u(){var e=f(["\n      width: 35px;\n      height: 6px;\n      top: -18px;\n    "]);return u=function(){return e},e}function s(){var e=f(["\n    font-size: 3em;\n    margin-bottom: .2em;\n  "]);return s=function(){return e},e}function d(){var e=f(["\n    padding: 3em;\n  "]);return d=function(){return e},e}function p(){var e=f(["\n    width: 60%;\n    padding: 2em;\n  "]);return p=function(){return e},e}function g(){var e=f(["\n    padding-top: 45%;\n  "]);return g=function(){return e},e}function m(){var e=f(["\n    padding-top: 56.25%;\n  "]);return m=function(){return e},e}function f(e,t){return t||(t=e.slice(0)),e.raw=t,e}var h=r.default.section.withConfig({displayName:"Hero__HeroContainer",componentId:"sc-1ahfav4-0"})(["position:relative;color:",";"],function(e){return e.theme.lightText}),x=r.default.div.withConfig({displayName:"Hero__ImageContainer",componentId:"sc-1ahfav4-1"})(["height:0;overflow:hidden;padding-top:75%;background:red;position:relative;"," ",""],o.a.tablet(m()),o.a.desktop(g())),y=r.default.img.withConfig({displayName:"Hero__Img",componentId:"sc-1ahfav4-2"})(["position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;"]),M=r.default.span.withConfig({displayName:"Hero__ImageOverlay",componentId:"sc-1ahfav4-3"})(["position:absolute;top:0;left:0;width:100%;height:100%;background:",";opacity:.66;"],function(e){return e.theme.background}),w=r.default.div.withConfig({displayName:"Hero__TextContainer",componentId:"sc-1ahfav4-4"})(["position:absolute;top:0;bottom:0;padding:1em;display:flex;flex-direction:column;justify-content:center;"," ",""],o.a.tablet(p()),o.a.desktop(d())),b=r.default.h1.withConfig({displayName:"Hero__Title",componentId:"sc-1ahfav4-5"})(["",""],o.a.tablet(s())),N=r.default.p.withConfig({displayName:"Hero__PageExcerpt",componentId:"sc-1ahfav4-6"})(["line-height:1.5;margin:0;position:relative;&::after{content:'';position:absolute;width:20px;height:4px;background:white;top:-10px;left:0;","}",""],o.a.tablet(u()),o.a.tablet(c()));t.a=function(e){var t=e.heroImage,n=e.title,a=e.excerpt,r=e.publishDate;return i.a.createElement(h,null,i.a.createElement(x,null,i.a.createElement(y,{src:t}),i.a.createElement(M,null)),i.a.createElement(w,null,i.a.createElement(b,null,n),a&&i.a.createElement(N,null,a),r&&i.a.createElement(l.a,{publishDate:r,light:!0})))}},211:function(e,t,n){e.exports=n.p+"static/hero-9dca4da1d11547027543b2b9364aec21.png"},216:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(65),o=n.n(r);n.d(t,"a",function(){return o.a});n(206),n(9).default.enqueue,i.a.createContext({})},217:function(e,t,n){"use strict";var a=n(219),i=n(0),r=n.n(i),o=n(226),l=n.n(o),c=n(203),u=n(220),s=n.n(u),d=n(204),p=(n(240),n(241)),g=n(222),m=n.n(g),f=c.default.header.withConfig({displayName:"Avatar__Header",componentId:"sc-3kxqkb-0"})(["display:flex;flex-direction:row;padding:16px;"]),h=c.default.img.withConfig({displayName:"Avatar__Img",componentId:"sc-3kxqkb-1"})(["width:80px;height:80px;border-radius:50%;"]),x=c.default.div.withConfig({displayName:"Avatar__InfoContainer",componentId:"sc-3kxqkb-2"})(["display:flex;flex-direction:column;margin-left:16px;"]),y=c.default.h3.withConfig({displayName:"Avatar__Name",componentId:"sc-3kxqkb-3"})(["margin:0 0 8px;font-weight:100;"]),M=c.default.small.withConfig({displayName:"Avatar__Description",componentId:"sc-3kxqkb-4"})(["opacity:.87;margin-bottom:auto;"]),w=function(e){return r.a.createElement(f,null,r.a.createElement(h,{src:m.a}),r.a.createElement(x,null,r.a.createElement(y,null,"Aibol Kussain"),r.a.createElement(M,null,"Developer, Casual Tech blogger"),r.a.createElement(p.Follow,{username:"aibolik_"})))},b=n(216);function N(){var e=k(["\n    width: auto;\n    order: 1;\n  "]);return N=function(){return e},e}function v(){var e=k(["\n      background: rgba(255, 255, 255, .15);\n      margin-left: -16px;\n      margin-right: -16px;\n      padding-left: 16px;\n    "]);return v=function(){return e},e}function E(){var e=k(["\n    height: auto;\n  "]);return E=function(){return e},e}function j(){var e=k(["\n    display: none;\n  "]);return j=function(){return e},e}function C(){var e=k(["\n    width: 320px;\n\n    .twitter-follow-button {\n      display: block;\n    }\n  "]);return C=function(){return e},e}function L(){var e=k(["\n    position: fixed;\n    top: 0;\n\n    height: 100vh;\n    width: 280px;\n\n    .twitter-follow-button {\n      display: none;\n    }\n  "]);return L=function(){return e},e}function k(e,t){return t||(t=e.slice(0)),e.raw=t,e}var T=c.default.nav.withConfig({displayName:"Navigation__Nav",componentId:"l8pi7q-0"})(["background:",";color:",";"," ",""],function(e){return e.theme.background},function(e){return e.theme.lightText},d.a.tablet(L()),d.a.desktop(C())),I=c.default.div.withConfig({displayName:"Navigation__NavigationContainer",componentId:"l8pi7q-1"})(["position:relative;"]),z=c.default.button.attrs({className:function(e){return e.open&&"close"}}).withConfig({displayName:"Navigation__NavigationClose",componentId:"l8pi7q-2"})(["position:absolute;height:26px;top:8px;right:9px;display:flex;flex-direction:column;justify-content:space-between;cursor:pointer;background:none;border:none;& > span{display:block;width:26px;height:4px;background:white;border-radius:6px;transition:all .3s;}&.close > span{&:first-child{position:relative;top:10px;transform:rotate(45deg);}&:nth-child(2){opacity:0;}&:nth-child(3){position:relative;top:-9px;transform:rotate(-45deg);}}",""],d.a.tablet(j())),D=c.default.ul.attrs({className:function(e){return e.open&&"open"}}).withConfig({displayName:"Navigation__Sections",componentId:"l8pi7q-3"})(["display:flex;flex-direction:column;margin-bottom:0;padding:0 16px 10px;height:50px;overflow:hidden;list-style:none;font-size:22px;transition:height .3s ease;&.open{height:240px;}",""],d.a.tablet(E())),S=Object(c.default)(b.a).attrs({activeClassName:"active"}).withConfig({displayName:"Navigation__LinkItem",componentId:"l8pi7q-4"})(["display:block;width:calc(100% - 40px);padding:12px 0;color:",";text-decoration:none;order:2;&.active{color:",";font-weight:400;order:1;","}",""],function(e){return e.theme.secondaryLight},function(e){return e.theme.lightText},d.a.tablet(v()),d.a.tablet(N())),_=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).handleNavigationToggle=function(){n.setState(function(e){return{open:!e.open}})},n.state={open:!1},n}return n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,a.prototype.render=function(){return r.a.createElement(T,null,r.a.createElement(w,null),r.a.createElement(I,null,r.a.createElement(z,{open:this.state.open,onClick:this.handleNavigationToggle},r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)),r.a.createElement(D,{open:this.state.open},r.a.createElement(S,{to:"/"},"Blog"),r.a.createElement(S,{to:"/30-day-react"},"30-day-React"),r.a.createElement(S,{to:"/about"},"About"))))},a}(i.Component),O=n(208),A=n(209),U=n.n(A);function Y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Q(){var e=H(["\n    width: 300px;\n  "]);return Q=function(){return e},e}function F(){var e=H(["\n    font-size: 1.6em;\n  "]);return F=function(){return e},e}function H(e,t){return t||(t=e.slice(0)),e.raw=t,e}var P=c.default.div.withConfig({displayName:"SignUpForm__FormContainer",componentId:"sc-16n3nxy-0"})(["color:",";padding:60px 0;margin-bottom:-1px;text-align:center;background:linear-gradient(to right,"," 0%,#765E9C 100%);"],function(e){return e.theme.lightText},function(e){return e.theme.background}),J=c.default.h3.withConfig({displayName:"SignUpForm__CTAText",componentId:"sc-16n3nxy-1"})(["font-size:1.4em;font-weight:400;line-height:1.4;max-width:400px;margin:auto;",""],d.a.tablet(F())),B=c.default.form.withConfig({displayName:"SignUpForm__Form",componentId:"sc-16n3nxy-2"})(["margin-top:16px;"]),V=c.default.input.withConfig({displayName:"SignUpForm__Input",componentId:"sc-16n3nxy-3"})(["font-weight:300;border:none;border-radius:4px;background-image:url(",");background-size:26px 26px;background-repeat:no-repeat;background-position:12px;height:32px;padding:6px 6px 6px 44px;margin-right:12px;max-width:calc(100% - 160px);",""],U.a,d.a.tablet(Q())),R=function(e){var t,n;function a(t){var n;return(n=e.call(this,t)||this).state={email:"",state:"initial"},n.handleInputChange=n.handleInputChange.bind(Y(n)),n.handleSubmit=n.handleSubmit.bind(Y(n)),n}n=e,(t=a).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var i=a.prototype;return i.handleInputChange=function(e){this.setState({email:e.target.value})},i.handleSubmit=function(e){var t=this;e.preventDefault();var n=this.state.email;this.setState({state:"sending"}),fetch("https://f38w5n63n3.execute-api.us-east-1.amazonaws.com/signUp/processSIgnUpFormRequest",{method:"POST",body:JSON.stringify({email:n})}).then(function(e){t.setState({state:"subscribed",email:""})}).catch(function(e){t.setState({state:"error"}),console.error("error sending fetch",e)})},i.render=function(){var e="";switch(this.state.state){case"initial":case"sending":e="Sign Up to stay up to date in\nFrontEnd and JavaScript world";break;case"subscribed":e="Thanks for signing up for newsletters";break;case"error":e="There was some unexpected error. Try to refresh page and submit again";break;default:e="Sign Up to stay up to date in\nFrontEnd and JavaScript world"}return r.a.createElement(P,null,r.a.createElement(J,null,e),r.a.createElement(B,{onSubmit:this.handleSubmit},r.a.createElement(V,{value:this.state.email,onChange:this.handleInputChange,placeholder:"your@email.com"}),r.a.createElement(O.a,{loading:"sending"===this.state.state},"Sign Up")))},a}(i.Component),Z=function(e){return r.a.createElement("svg",{viewBox:"0 0 256 256",width:"25",height:"25",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid"},r.a.createElement("path",{d:"M241.87 256c7.8 0 14.13-6.32 14.13-14.13V14.13C256 6.33 249.67 0 241.87 0H14.13C6.33 0 0 6.33 0 14.13v227.74C0 249.67 6.32 256 14.13 256h227.74"}),r.a.createElement("path",{d:"M176.63 256v-99.14h33.28l4.98-38.63h-38.25V93.56c0-11.19 3.1-18.8 19.14-18.8l20.46-.02V40.2c-3.54-.47-15.68-1.52-29.81-1.52-29.5 0-49.7 18-49.7 51.07v28.49h-33.35v38.63h33.36V256h39.9",fill:"#4A4F69"}))},q=function(){return r.a.createElement("svg",{viewBox:"0 0 256 256",height:"25",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid"},r.a.createElement("path",{d:"M128 0a128 128 0 0 0-40.5 249.5c6.4 1.1 8.8-2.8 8.8-6.2l-.2-23.8C60.5 227.2 53 204.4 53 204.4c-5.8-14.8-14.2-18.8-14.2-18.8-11.6-7.9.8-7.7.8-7.7 12.9.9 19.7 13.1 19.7 13.1 11.4 19.6 30 14 37.2 10.7 1.2-8.3 4.5-14 8.1-17.1-28.4-3.3-58.3-14.2-58.3-63.3 0-14 5-25.4 13.2-34.3a46 46 0 0 1 1.3-34S71.5 49.7 96 66.3a122.7 122.7 0 0 1 64 0c24.5-16.6 35.2-13.1 35.2-13.1a46 46 0 0 1 1.3 33.9c8.2 9 13.2 20.3 13.2 34.3 0 49.2-30 60-58.5 63.2 4.6 4 8.7 11.7 8.7 23.7l-.2 35.1c0 3.4 2.4 7.4 8.8 6.1A128 128 0 0 0 128 0zM48 182.3c-.3.7-1.3.9-2.3.4-.9-.4-1.4-1.3-1.1-1.9.3-.6 1.3-.8 2.2-.4 1 .4 1.5 1.3 1.1 2zm6.2 5.7c-.6.5-1.8.3-2.6-.6-.8-1-1-2.1-.4-2.7.7-.6 1.8-.3 2.7.6.8.9 1 2 .3 2.7zm4.4 7.1c-.8.6-2.1 0-2.9-1-.8-1.2-.8-2.6 0-3.1.8-.6 2 0 2.9 1 .8 1.2.8 2.6 0 3.1zm7.3 8.4c-.7.7-2.2.5-3.3-.5-1.1-1-1.5-2.5-.8-3.3.8-.8 2.3-.5 3.4.5 1 1 1.4 2.5.7 3.3zm9.4 2.8c-.3 1-1.7 1.4-3.2 1-1.4-.4-2.4-1.6-2.1-2.6.3-1 1.7-1.5 3.2-1 1.5.4 2.4 1.6 2.1 2.6zm10.7 1.2c0 1-1.1 1.9-2.7 2-1.5 0-2.7-.9-2.8-2 0-1 1.2-1.9 2.8-1.9 1.5 0 2.7.8 2.7 1.9zm10.6-.4c.2 1-.9 2-2.4 2.3-1.5.3-2.8-.3-3-1.3-.2-1.1.9-2.2 2.3-2.4 1.6-.3 3 .3 3.1 1.4z"}))},G=function(e){return r.a.createElement("svg",{height:"24",viewBox:"0 0 256 209",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid"},r.a.createElement("path",{d:"M256 25.5a105 105 0 0 1-30.2 8.2 52.7 52.7 0 0 0 23.1-29c-10.1 6-21.4 10.4-33.3 12.7a52.5 52.5 0 0 0-89.5 48 149.1 149.1 0 0 1-108.3-55 52.3 52.3 0 0 0 16.3 70.2A52.3 52.3 0 0 1 10.3 74v.6a52.6 52.6 0 0 0 42.1 51.5 52.6 52.6 0 0 1-23.7 1c6.7 20.8 26 36 49 36.4A105.4 105.4 0 0 1 0 185.3a148.7 148.7 0 0 0 80.5 23.6c96.6 0 149.4-80 149.4-149.5l-.1-6.8A106.7 106.7 0 0 0 256 25.5"}))};function W(){var e=function(e,t){t||(t=e.slice(0));return e.raw=t,e}(["\n      height: auto;\n      margin-left: 35px;\n    "]);return W=function(){return e},e}var K=c.default.footer.withConfig({displayName:"Footer__FooterContainer",componentId:"awy42k-0"})(["height:45px;line-height:40px;padding:0 16px;background:linear-gradient(to right,"," 0%,#765E9C 100%);display:flex;justify-content:space-between;"],function(e){return e.theme.background}),X=c.default.p.withConfig({displayName:"Footer__Copyright",componentId:"awy42k-1"})(["margin:0;color:",";font-weight:100;"],function(e){return e.theme.lightText}),$=c.default.a.withConfig({displayName:"Footer__IconLink",componentId:"awy42k-2"})(["display:flex;height:40px;vertical-align:middle;align-items:center;"]),ee=c.default.div.withConfig({displayName:"Footer__SocialIcons",componentId:"awy42k-3"})(["display:flex;svg{fill:",";opacity:.52;transition:opacity .3s;margin-left:25px;height:20px;&:hover{opacity:1;}","}"],function(e){return e.theme.lightText},d.a.tablet(W())),te=function(e){return r.a.createElement(K,null,r.a.createElement(X,null,"© ",(new Date).getFullYear()," Aibol Kussain"),r.a.createElement(ee,null,r.a.createElement($,{href:"https://www.facebook.com/aib0lik",target:"_blank"},r.a.createElement(Z,null)),r.a.createElement($,{href:"https://github.com/aibolik",target:"_blank"},r.a.createElement(q,null)),r.a.createElement($,{href:"https://twitter.com/aibolik_",target:"_blank"},r.a.createElement(G,null))))};n(251),n(252);function ne(){var e=oe(["\n    position: relative;\n    left: 320px;\n    width: calc(100% - 320px);\n  "]);return ne=function(){return e},e}function ae(){var e=oe(["\n    position: relative;\n    left: 280px;\n    width: calc(100% - 280px);\n  "]);return ae=function(){return e},e}function ie(){var e=oe(["\n    flex-direction: row;\n  "]);return ie=function(){return e},e}function re(){var e=oe(["\n  ","\n\n  body {\n    font-family: 'Roboto Slab', 'Roboto', Arial;\n    font-weight: 300;\n  }\n"]);return re=function(){return e},e}function oe(e,t){return t||(t=e.slice(0)),e.raw=t,e}var le=Object(c.createGlobalStyle)(re(),s.a),ce={background:"#4A4F69",foreground:"rgba(33, 33, 33, .77)",codeBackground:"rgba(255,229,100,.2)",codeColor:"#4a4a4a",lightText:"#FFF",secondaryLight:"rgba(255, 255, 255, .8)"},ue=c.default.div.withConfig({displayName:"layout__Container",componentId:"sc-15yyf5u-0"})(["display:flex;flex-direction:column;",""],d.a.tablet(ie())),se=c.default.main.withConfig({displayName:"layout__ContentContainer",componentId:"sc-15yyf5u-1"})(["color:",";"," ",""],function(e){return e.theme.foreground},d.a.tablet(ae()),d.a.desktop(ne())),de=function(e){var t=e.children,n=e.hideNewsletterSignUp,i=a.data.site;return r.a.createElement(r.a.Fragment,null,r.a.createElement(le,null),r.a.createElement(c.ThemeProvider,{theme:ce},r.a.createElement("div",null,r.a.createElement(ue,null,r.a.createElement(l.a,{title:i.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]}),r.a.createElement(_,null),r.a.createElement(se,null,t,!n&&r.a.createElement(R,null),r.a.createElement(te,null))))))};de.defaultProps={hideNewsletterSignUp:!1};t.a=de},218:function(e,t,n){"use strict";var a=n(0),i=n.n(a),r=n(203),o=function(e){return i.a.createElement("svg",{className:"icon--calendar",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},i.a.createElement("circle",{cx:"386",cy:"210",r:"20"}),i.a.createElement("path",{d:"M432 40h-26V20a20 20 0 1 0-40 0v20h-91V20a20 20 0 1 0-40 0v20h-90V20a20 20 0 1 0-40 0v20H80a80 80 0 0 0-80 80v312a80 80 0 0 0 80 80h153a20 20 0 1 0 0-40H80c-22 0-40-18-40-40V120c0-22 18-40 40-40h25v20a20 20 0 1 0 40 0V80h90v20a20 20 0 1 0 40 0V80h91v20a20 20 0 1 0 40 0V80h26c22 0 40 18 40 40v114a20 20 0 1 0 40 0V120a80 80 0 0 0-80-80z"}),i.a.createElement("path",{d:"M391 270c-66.7 0-121 54.3-121 121s54.3 121 121 121 121-54.3 121-121-54.3-121-121-121zm0 202a81 81 0 0 1 0-162 81 81 0 0 1 0 162z"}),i.a.createElement("path",{d:"M420 371h-9v-21a20 20 0 1 0-40 0v41c0 11 9 20 20 20h29a20 20 0 1 0 0-40z"}),i.a.createElement("circle",{cx:"299",cy:"210",r:"20"}),i.a.createElement("circle",{cx:"212",cy:"297",r:"20"}),i.a.createElement("circle",{cx:"125",cy:"210",r:"20"}),i.a.createElement("circle",{cx:"125",cy:"297",r:"20"}),i.a.createElement("circle",{cx:"125",cy:"384",r:"20"}),i.a.createElement("circle",{cx:"212",cy:"384",r:"20"}),i.a.createElement("circle",{cx:"212",cy:"210",r:"20"}))},l=n(238),c=n.n(l),u=r.default.time.withConfig({displayName:"PublishDate__DateContainer",componentId:"t4x73o-0"})(["display:flex;font-family:'Merriweather',Georgia,Arial;font-style:italic;line-height:1.5;color:",";.icon--calendar{width:14px;height:24px;margin-right:8px;fill:",";}"],function(e){return e.light?"rgba(255, 255, 255, .87)":"rgba(33, 33, 33, .34)"},function(e){return e.light?"rgba(255, 255, 255, .87)":"rgba(33, 33, 33, .31)"});t.a=function(e){var t=e.publishDate,n=e.light;return i.a.createElement(u,{light:n},i.a.createElement(o,null),"Published on ",i.a.createElement("time",{dateTime:c()(t).format("YYYY-MM-DD")},c()(parseInt(t)).format("Do of MMMM, YYYY")))}},219:function(e){e.exports={data:{site:{siteMetadata:{title:"Aibol Kussain | Developer, Casual Tech blogger"}}}}},222:function(e,t,n){e.exports=n.p+"static/avatar-c8c610c1e51482dc121829824c85ab41.png"},223:function(e,t,n){"use strict";n.r(t);n(23);var a=n(0),i=n.n(a),r=n(98);t.default=function(e){var t=e.location,n=e.pageResources;return n?i.a.createElement(r.a,Object.assign({location:t,pageResources:n},n.json)):null}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-459d3e3dd0d9c3aae03b.js.map