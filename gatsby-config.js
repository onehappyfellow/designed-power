/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Designed Power`,
    siteUrl: `https://www.designedpower.net`,
    description: `Engineered Electrical Equipment, Power Quality, and Energy Storage`,
    image: `/designedpower-icon.png`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/manufacturers/`
      }
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp", // if using dynamic images
  ]
};
