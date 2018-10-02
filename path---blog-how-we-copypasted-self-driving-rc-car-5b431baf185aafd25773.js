webpackJsonp([67123669313912],{413:function(e,t){e.exports={data:{contentfulBlogPost:{title:"How We CopyPasted Self-Driving(RC) Car",slug:"how-we-copypasted-self-driving-rc-car",publishDate:"1452546000000",content:[{__typename:"ContentfulBlogPostCopy",id:"c4gzHX0KKUosqAoikasOQU8",copy:{childMarkdownRemark:{html:'<p>About a month a ago, one university in our city organized event called <em>“Machine Learning Challenge(MLC)”</em>. Our teacher on the Machine Learning course, encouraged us(me and my friends) to take part in this <em>Challenge</em>. He also suggested us to implement Self-Driving Car.</p>\n<p>At first, it sounded very interesting but hard to do. But he told us about David Singleton, who made it in one weekend. And he gave us the post, where he was writing about how he did it. You can read original post <a href="http://blog.davidsingleton.org/nnrccar/">here</a>.</p>\n<p>David Singleton shared <a href="https://github.com/dps/nnrccar">his code on GitHub</a>, so anyone can download it and implement his own Self-Driving Car. That is what we actually did. The instruction is presented there.</p>\n<p>Here, let me say how it works and what we did in details</p>\n<p><em>First step</em>, we bought a cheap car in local store, that was red Hummer(oh, yeah!). We needed control over it by PC, so we disassembled radio controller of the car and added some <em>“Arduino Magic”</em>. After this, arduino that is connected to PC and radio controller gave us control of Car over PC(up, down, right, left on keyboard).</p>'}}},{__typename:"ContentfulBlogPostImage",id:"c2nGm9jzkoI4eCWSmGgKYGS",caption:"Arduino installation and Red Hummer",image:{resolutions:{src:"//images.ctfassets.net/w1fxlmsi3y1l/4CNUdVKk1yqukkSWe8sAmK/202fddea3302eb4b353f83be8ecc99d8/rccar.jpg?w=400&q=100",srcSet:"//images.ctfassets.net/w1fxlmsi3y1l/4CNUdVKk1yqukkSWe8sAmK/202fddea3302eb4b353f83be8ecc99d8/rccar.jpg?w=400&h=300&q=100 1x,\n//images.ctfassets.net/w1fxlmsi3y1l/4CNUdVKk1yqukkSWe8sAmK/202fddea3302eb4b353f83be8ecc99d8/rccar.jpg?w=600&h=450&q=100 1.5x,\n//images.ctfassets.net/w1fxlmsi3y1l/4CNUdVKk1yqukkSWe8sAmK/202fddea3302eb4b353f83be8ecc99d8/rccar.jpg?w=800&h=600&q=100 2x,\n//images.ctfassets.net/w1fxlmsi3y1l/4CNUdVKk1yqukkSWe8sAmK/202fddea3302eb4b353f83be8ecc99d8/rccar.jpg?w=1200&h=900&q=100 3x"}}},{__typename:"ContentfulBlogPostCopy",id:"c156tI2Ut4AuEWm2YksAwEw",copy:{childMarkdownRemark:{html:'<p><em>Second step</em>, here starts Machine Learning part. We had a code(<a href="https://github.com/dps/nnrccar">from David Singleton’s Repository</a>) to retrieve training data for our Neural Network(on what car drives by itself). It is consist of Java Application and Android Application. Android Application is installed on phone, that is attached to our Car. Then in <em>RECORD MODE</em> it sends data(as pixels from camera) to Java Application. Java Application also triggers Keyboard presses, so that we know at what picture which key was pressed.</p>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 56.25%; position: relative; height: 0; overflow: hidden;"\n          >\n            <iframe src="https://www.youtube.com/embed/QCb28hS4KUY?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          "></iframe>\n          </div>\n          </div>\n<p><em>Third step</em>, using data we acquired in <em>step two</em>, we build neural network. David Singleton made it on Octave, because he was passing <a href="http://ml-class.org/">Machine Learning course by Andrew Ng</a>(which I almost passed), and there was an assignment to implement neural networks code. He just used that code, and processed data through it. We also did the same thing, but we downloaded code from other sources(because he did not provide his code, due to Coursera Honor code).</p>\n<p><em>Fourth and final step</em>, after we process data through Octave, we have values for our Neural Network. We just put them in Java Application, and we can start <em>AUTO MODE</em>, which will drive our car. And here we are - Self-Driving Car.</p>\n<p>By the end, we did not have a good self-driving car. It drives by itself, but not quite accurate. At least, we tried. The problem is in our Neural Network implementation(I think).</p>\n<p>Of course, some details are missed, but if you want to study more about this topic here are some links:</p>\n<ul>\n<li><a href="http://blog.davidsingleton.org/nnrccar/">David Singleton’s Original Blogpost</a></li>\n<li><a href="http://ml-class.org/">Andrew Ng’s Machine Learning Course</a></li>\n<li><a href="https://www.bloomberg.com/features/2015-george-hotz-self-driving-car/">Geohot’s way better self-driving car(that can compete with Tesla, maybe)</a></li>\n<li><a href="https://www.google.com/?gws_rd=ssl">And of course, Google в помощь</a></li>\n</ul>'}}}]}},pathContext:{slug:"how-we-copypasted-self-driving-rc-car"}}}});
//# sourceMappingURL=path---blog-how-we-copypasted-self-driving-rc-car-5b431baf185aafd25773.js.map