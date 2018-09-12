require('dotenv').config()

const { CONTENTFUL_SPACE_ID: spaceId, CONTENTFUL_DELIVERY_TOKEN: accessToken } = process.env

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the delivery token need to be provided.'
  )
}

let contentfulConfig = { spaceId, accessToken }

module.exports = {
  siteMetadata: {
    title: 'Aibol Kussain - Personal WebSite and Blog',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-responsive-iframe',
          'gatsby-remark-prismjs',
        ]
      }
    },
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    }
  ],
}
