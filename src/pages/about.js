import React from 'react'
import Hero from '../components/Hero'
import HeroImage from '../assets/hero.jpg'
import Layout from '../components/layout'
import { StyledContent } from '../templates/blog-post'

const AboutPage = () => (
  <Layout>
    <section>
      <Hero
        heroImage={HeroImage}
        title={'About me'}
        excerpt={'Here you can find out more about me: who I am, what I do, what I love, what I am passionate about'}
      />
      <StyledContent>
        <p>I am Aibol and I am 22 years old JavaScript developer. My motherland is Kazakhstan, but currently I live and work in Belarus, Minsk.</p>
        <p>I consider myself as a JavaScript developer with <em>strong(enough)</em> knowledge in FrontEnd. Love everything related to JavaScript, and I use it on FrontEnd(ReactJS) and BackeEnd(NodeJS). </p>
        <p>Previously, I worked as an Android Developer and also taught it while I was studying in University. In school I was olympiad student participating on different programming contests(ACM). In my opinion, that gave me strong foundation in Software Engineering world, however, I did not like ACM that much, since it was hard to see immediate results like website or application. Therefore, I am not in FrontEnd world :)</p>
        <p>I love learning new stuff and sharing what I learnt, so feel free to follow <a href="https://aibolik.github.io" target="_blank">my tech blog</a>. I am always open for new connections and ready to help where I can. To get in touch with me, just tweet me at <a href="https://twitter.com/aibolik_" target="_blank">@aibolik_</a>.</p>
      </StyledContent>
    </section>
  </Layout>
)

export default AboutPage