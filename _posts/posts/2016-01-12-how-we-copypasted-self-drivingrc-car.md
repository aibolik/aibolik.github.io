---
layout:	post
title:	How We CopyPasted Self-Driving(RC) Car
category: blog
---

About a month a ago, one university in our city organized event called _"Machine Learning Challenge(MLC)"_. Our teacher on the Machine Learning course, encouraged us(me and my friends) to take part in this _Challenge_. He also suggested us to implement **Self-Driving Car**.

At first, it sounded very interesting but hard to do. But he told us about David Singleton, who made it in one weekend. And he gave us the post, where he was writing about how he did it. You can read original post [here][blogpost].

David Singleton shared [his code on GitHub][nnrccar], so anyone can download it and implement his own Self-Driving Car. That is what we actually did. The instruction is presented there.

Here, let me say how it works and what we did in details

_**First step**_, we bought a cheap car in local store, that was **red Hummer**(oh, yeah!). We needed control over it by PC, so we disassembled radio controller of the car and added some _"Arduino Magic"_. After this, arduino that is connected to PC and radio controller gave us control of Car over PC(up, down, right, left on keyboard).

![Radio Controlled Car - Hummer][rccar] 

_**Second step**_, here starts **Machine Learning part.** We had a code([from David Singleton's Repository][nnrccar]) to retrieve training data for our Neural Network(on what car drives by itself). It is consist of Java Application and Android Application. Android Application is installed on phone, that is attached to our Car. Then in _RECORD MODE_ it sends data(as pixels from camera) to Java Application. Java Application also triggers Keyboard presses, so that we know at what picture which key was pressed.

<iframe width="560" height="315" src="https://www.youtube.com/embed/QCb28hS4KUY" frameborder="0" allowfullscreen></iframe> 

_**Third step**_, using data we acquired in _step two_, we build neural network. David Singleton made it on Octave, because he was passing [Machine Learning course by Andrew Ng][mlclass](which I almost passed), and there was an assignment to implement neural networks code. He just used that code, and processed data through it. We also did the same thing, but we downloaded code from other sources(because he did not provide his code, due to Coursera Honor code). 

_**Fourth and final step**_, after we process data through Octave, we have values for our Neural Network. We just put them in Java Application, and we can start _AUTO MODE_, which will drive our car. And here we are - **Self-Driving Car.**

By the end, we did not have a good self-driving car. It drives by itself, but not quite accurate. At least, we tried. The problem is in our Neural Network implementation(I think). 

Of course, some details are missed, but if you want to study more about this topic here are some links:

* [David Singleton's Original Blogpost][blogpost]
* [Andrew Ng's Machine Learning Course][mlclass]
* [Geohot's way better self-driving car(that can compete with Tesla, maybe)][geohotselfdrivingcar]
* [And of course, Google в помощь](http://google.com)

[blogpost]:	http://blog.davidsingleton.org/nnrccar/
[nnrccar]: 	https://github.com/dps/nnrccar
[rccar]:	{{ site.baseurl }}/img/blog/rccar.jpg
[mlclass]:	http://ml-class.org   
[geohotselfdrivingcar]:	http://www.bloomberg.com/features/2015-george-hotz-self-driving-car/