import React from 'react'
import { graphql } from 'gatsby'
import Hero from '../components/Hero'
import ImageEmbed from '../components/ImageEmbed'
import HeroImage from '../assets/hero.jpg'
import styled from 'styled-components'
import { media } from '../helpers/style-helper'
import Layout from '../components/layout'
import 'prismjs/themes/prism-tomorrow.css'

// Temporarily
export const StyledContent = styled.section`
  padding: 0 16px 40px;

  font-family: 'Merriweather', Helvetica, Arial, serif;
  font-size: 1.2em;
  line-height: 1.4;

  .gatsby-highlight {
    font-size: .8em;
  }

  *:not(pre) > code[class*="language-"] {
    ${props => `
      background: ${props.theme.codeBackground};
      color: ${props.theme.codeColor};
    `}
  }

  blockquote {
    margin: 1em 40px 1em 1em;
    padding-left: 1em;
    border-left: 4px solid rgba(33, 33, 33, .77);

    font-style: italic;
  }

  twitterwidget {
    margin: 10px auto;
  }

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

  strong {
    font-weight: 600;
  }
`

const BlogPost = ({ data: { contentfulBlogPost: post } }) => (
  <Layout>
    <article>
      <Hero
        heroImage={HeroImage}
        title={post.title}
        publishDate={post.publishDate}
      />
      <StyledContent>
        {post.content.map(contentItem => {
          let content;
          switch(contentItem.__typename) {
            case 'ContentfulBlogPostCopy':
              content = <div dangerouslySetInnerHTML={{ __html: contentItem.copy.childMarkdownRemark.html }} />
              break
            case 'ContentfulBlogPostImage':
              content = <ImageEmbed image={contentItem.image} caption={contentItem.caption} />
              break
            default:
              content = 'Content type is missing? Please say about it to twitter.com/aibolik_ :)'
          }
          return content
        })}
      </StyledContent>
    </article>
  </Layout>
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
