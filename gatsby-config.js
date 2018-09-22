require('dotenv').config()
const config = require('./data/SiteConfig')
const urljoin = require('url-join')
 
const { CONTENTFUL_SPACE_ID: spaceId, CONTENTFUL_DELIVERY_TOKEN: accessToken } = process.env

if (!spaceId || !accessToken) {
  throw new Error(
    'Contentful spaceId and the delivery token need to be provided.'
  )
}

let contentfulConfig = { spaceId, accessToken }

module.exports = {
  siteMetadata: {
    siteUrl: urljoin(config.siteUrl),
    title: config.siteTitle,
    rssMetadata: {
      site_url: urljoin(config.siteUrl),
      feed_url: urljoin(config.siteUrl, config.siteRss),
      title: config.siteTitle,
      description: config.siteDescription,
      image_url: `${urljoin(
        config.siteUrl,
      )}/logos/logo-1024.png`,
      author: config.userName,
      copyright: config.copyright
    }
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
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: config.googleAnalyticsID
      }
    },
    {
      resolve: 'gatsby-plugin-sitemap'
    }
  ],
}
