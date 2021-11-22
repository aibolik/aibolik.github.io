"use strict";(self.webpackChunkaibolik_github_io=self.webpackChunkaibolik_github_io||[]).push([[989],{8545:function(e,t,n){n.r(t),n.d(t,{StyledContent:function(){return B},default:function(){return z}});var i=n(1880),o=n(7294),a=n.n(o),l=n(3059),r=n(5658),c=r.default.figure.withConfig({displayName:"ImageEmbed__Figure",componentId:"gqb8j3-0"})(["margin:16px 0;text-align:center;img{width:100%;}figcaption{color:rgba(33,33,33,.51);font-size:.8em;font-style:italic;}"]),d=function(e){var t=e.image,n=e.caption,i=e.alt;return a().createElement(c,null,a().createElement("img",{src:t.resolutions.src,srcSet:t.resolutions.srcSet,alt:i}),n&&a().createElement("figcaption",null,n))};d.defaultProps={alt:""};var m,s,p,u,g,f=d,h=r.default.figure.withConfig({displayName:"CodeSandboxEmbed__Figure",componentId:"sc-1k0wayz-0"})(["margin:16px 0;text-align:center;img{width:100%;}figcaption{color:rgba(33,33,33,.51);font-size:.8em;font-style:italic;}"]),x=function(e){var t=e.embedUrl,n=e.title;return a().createElement(h,null,a().createElement("iframe",{src:t,style:{width:"100%",height:"500px",border:0,borderRadius:"4px",overflow:"hidden"},title:n,allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),n&&a().createElement("figcaption",null,n))},b=n(5873),w=n(9701),y=n(8776),_=(n(7420),n(2432)),E=n(6279),k=r.default.div.withConfig({displayName:"_styled__FormContainer",componentId:"erolvt-0"})(["color:white;background:linear-gradient(90deg,#765E9C,#622d8a);padding:16px 24px;display:flex;flex-direction:column;justify-content:space-between;align-items:center;border-radius:0;margin-left:-20px;margin-right:-20px;font-size:16px;margin-bottom:-41px;",""],w.B.tablet(m||(m=(0,i.Z)(["\n    max-width: 500px;\n    border-radius: 6px;\n    margin: auto;\n  "])))),C=(r.default.div.withConfig({displayName:"_styled__TextContainer",componentId:"erolvt-1"})(["flex:1 1 0;padding-right:16px;"]),r.default.h3.withConfig({displayName:"_styled__MainText",componentId:"erolvt-2"})(["font-size:1.4em;font-weight:400;line-height:1.4;max-width:400px;margin:0;",""],w.B.tablet(s||(s=(0,i.Z)(["\n    font-size: 1.6em;\n  "]))))),v=r.default.p.withConfig({displayName:"_styled__SmallText",componentId:"erolvt-3"})(["margin:0;text-align:center;strong{font-weight:700;}"]),S=r.default.input.withConfig({displayName:"_styled__Input",componentId:"erolvt-4"})(["flex:1 1 0;font-weight:300;border:none;border-radius:4px;background-image:url(",");background-size:26px 26px;background-repeat:no-repeat;background-position:12px;height:32px;padding:6px 6px 6px 44px;margin:16px 12px 16px;max-width:calc(100% - 160px);"],E.Z),I=r.default.form.withConfig({displayName:"_styled__Form",componentId:"erolvt-5"})(["display:flex;align-items:center;"]),N=function(e){var t=e.title,n=e.caption,i=(0,o.useState)(""),l=i[0],r=i[1],c=(0,o.useState)(!1),d=c[0],m=c[1],s=(0,o.useState)(!1),p=s[0],u=s[1];return(0,o.useEffect)((function(){p&&(m(!0),fetch("https://europe-west1-my-blog-aibolik.cloudfunctions.net/courseSignUp",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:l})}).then((function(e){return e.json()})).then((function(e){if(!e.data)throw new Error("Something went wrong");alert("Thanks for signing up. You will receive email when course is released"),r("")})).catch((function(e){alert(e.message)})).finally((function(){m(!1),u(!1)})))}),[p]),a().createElement(k,null,t&&a().createElement(C,null,t),!t&&a().createElement(v,null,n),a().createElement(I,{onSubmit:function(e){e.preventDefault(),u(!0)}},a().createElement(S,{value:l,placeholder:"your@email.com",onChange:function(e){return r(e.target.value)}}),a().createElement(_.L,{loading:d,type:"submit"},"Sign Up")),t&&a().createElement(v,null,n))},B=r.default.section.withConfig({displayName:"blog-post__StyledContent",componentId:"sc-1g9vcly-0"})(["padding:0 16px 40px;font-family:'Merriweather',Helvetica,Arial,serif;font-size:1.2em;line-height:1.4;.gatsby-highlight{font-size:.8em;}*:not(pre) > code[class*=\"language-\"]{","}blockquote{margin:1em 40px 1em 1em;padding-left:1em;border-left:4px solid rgba(33,33,33,.77);font-style:italic;}twitterwidget{margin:10px auto;}"," "," "," ul{list-style:circle outside none;}a{color:#765E9C;text-decoration:none;&:hover{text-decoration:underline;}}strong{font-weight:600;}"],(function(e){return"\n      background: "+e.theme.codeBackground+";\n      color: "+e.theme.codeColor+";\n    "}),w.B.tablet(p||(p=(0,i.Z)(["\n    padding: 0 16px 40px 32px;\n  "]))),w.B.desktop(u||(u=(0,i.Z)(["\n    padding: 0 16px 40px 48px;\n  "]))),w.B.desktopMedium(g||(g=(0,i.Z)(["\n    padding-right: 300px;\n  "])))),z=function(e){var t=e.data.contentfulBlogPost;return a().createElement(y.Z,{hideNewsletterSignUp:!1===t.showNewsletterPromotion},a().createElement("article",null,a().createElement(l.Z,{heroImage:b.Z,title:t.title,publishDate:t.publishDate}),a().createElement(B,null,t.content.map((function(e){var t;switch(e.__typename){case"ContentfulBlogPostCopy":t=a().createElement("div",{key:e.id,dangerouslySetInnerHTML:{__html:e.copy.childMarkdownRemark.html}});break;case"ContentfulBlogPostImage":t=a().createElement(f,{key:e.id,image:e.image,caption:e.caption});break;case"ContentfulBlogPostEmbedCodeSandbox":t=a().createElement(x,{key:e.id,embedUrl:e.embedUrl,title:e.title});break;default:t="Content type is missing? Please say about it to twitter.com/aibolik_ :)"}return t})),t.show30dayReactPromotion&&a().createElement(N,{caption:a().createElement("em",null,"Sign up now and get the course ",a().createElement("strong",null,'"30-day-React"'),a().createElement("br",null),"for ",a().createElement("strong",null,"free")," when it is released")}))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-4fe736aa61096f346fee.js.map