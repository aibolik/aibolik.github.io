console.log('ENV1', process.env);

require('dotenv').config()

console.log('ENV2', process.env);

const { CONTENFUL_SPACE_ID: spaceId, CONTENTFUL_DELIVERY_TOKEN: accessToken } = process.env

console.log('spaceId', process.env.CONTENFUL_SPACE_ID);
console.log('accessToken', process.env.CONTENTFUL_DELIVERY_TOKEN);
console.log('SPACE_ID', spaceId);
console.log('ACESS TOKEN', accessToken);

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
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-contentful',
      options: contentfulConfig,
    }
  ],
}
