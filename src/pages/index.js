import React from 'react'
import GatsbyLink from 'gatsby-link'
import BlogPreview from '../components/BlogPreview'
import Hero from '../components/Hero'
import HeroImage from '../assets/hero.jpg'
import styled from 'styled-components'

const PostsContainer = styled.section`
  padding: 16px 16px 46px;
`

const Link = styled(GatsbyLink)`
  color: inherit;
  text-decoration: none;
`

const IndexPage = ({ data }) => (
  <section>
    <Hero
      heroImage={HeroImage}
      title={'Hi, there!'}
      excerpt={'My name is Aibol, and I am passionate about FrontEnd, JavaScript and especially ReactJS. I write about things those seem interesting to me, so I hope you can get some useful stuff for yourself!'}
    />
    <PostsContainer>
      {
        data.allContentfulBlogPost.edges.map(({ node }) => (
          <Link to={`/blog/${node.slug}`} key={node.id}><BlogPreview {...node} /></Link>
        )
        )
      }
    </PostsContainer>
  </section>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allContentfulBlogPost(
      filter: { node_locale: {eq: "en-US"}, hidden:{eq: false}},
      sort: { fields: [publishDate], order: DESC }
    ) {
      edges {
        node {
          id
          title
          slug
          publishDate(formatString: "x")
          content {
            __typename
            ... on ContentfulBlogPostCopy {
              copy {
                childMarkdownRemark {
                  excerpt(pruneLength: 250)
                }
              } 
            }
          }
        }
      }
    }
  }
`
