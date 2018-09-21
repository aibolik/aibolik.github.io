require('dotenv').config()
const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve(__dirname, 'src/templates/blog-post.js')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost(
              filter: { node_locale: {eq: "en-US"} }
            ) {
              edges {
                node {
                  title
                  slug
                  hidden
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges

        posts.filter(post => post.hidden === false).forEach(({ node: { slug }}) => {
          createPage({
            path: `/blog/${slug}`,
            component: blogPost,
            context: {
              slug
            }
          })
        })
      })
    )
  })
}