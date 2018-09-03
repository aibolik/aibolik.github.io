require('dotenv').config()
const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  // return new Promise((resolve, reject) => {
  //   const blogPost = path.resolve(__dirname, 'src/templates/blog-post.js')
  //   resolve(
  //     graphql(
  //       `
  //         {
  //           allContentfulBlogPost {
  //             edges {
  //               node
  //             }
  //           }
  //         }
  //       `
  //     )
  //   )
  // })
}