import React from 'react'
import Link from 'gatsby-link'
import BlogPost from '../components/BlogPost'
import Hero from '../components/Hero'
import HeroImage from '../assets/hero.jpg'

const IndexPage = () => (
  <div>
    <Hero 
      heroImage={HeroImage} 
      title={'Hi, there!'}
      excerpt={'My name is Aibol, and I am passionate about FrontEnd, JavaScript and especially ReactJS. I write about things those seem interesting to me, so I hope you can get some useful stuff for yourself!'}
    />
    <BlogPost />
    <BlogPost />
  </div>
)

export default IndexPage
