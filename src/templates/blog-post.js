import React from 'react'
import Hero from '../components/Hero'
import ImageEmbed from '../components/ImageEmbed'
import HeroImage from '../assets/hero.jpg'
import styled from 'styled-components'
import { media } from '../helpers/style-helper'

const StyledContent = styled.section`
  padding: 0 16px 40px;

  font-family: 'Merriweather', Helvetica, Arial, serif;
  font-size: 1.2em;
  line-height: 1.4;

  ${media.tablet`
    padding: 0 16px 40px 32px;
  `}

  ${media.desktop`
    padding: 0 16px 40px 48px;
  `}

  ${media.desktopMedium`
    padding-right: 300px;
  `}

  ul {
    list-style: circle outside none;
  }

  a {
    color: #765E9C;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

const BlogPost = ({ data: { contentfulBlogPost: post } }) => (
  <article>
    <Hero 
      heroImage={HeroImage}
      title={post.title}
      publishDate={post.publishDate}
    />
    <StyledContent>
      {post.content.map(contentItem => {
        switch(contentItem.__typename) {
          case 'ContentfulBlogPostCopy':
            return <div dangerouslySetInnerHTML={{ __html: contentItem.copy.childMarkdownRemark.html }} />
          case 'ContentfulBlogPostImage':
            return <ImageEmbed image={contentItem.image} caption={contentItem.caption} />
        }        
      })}
    </StyledContent>
  </article>
)

export default BlogPost

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      publishDate(formatString: "x")
      content {
        __typename
        ... on ContentfulBlogPostCopy {
          id
          copy {
            childMarkdownRemark {
              html
            }
          }
        }
        ... on ContentfulBlogPostImage {
          id
          caption
          image {
            resolutions(quality: 100) {
              src
              srcSet
            }
          }
        }
      }
    }
  }
`