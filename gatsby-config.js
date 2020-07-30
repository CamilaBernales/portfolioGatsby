module.exports = {
  siteMetadata: {
    title: `Camila Bernales Portfolio`,
    description: `Hi! Welcome to my portfolio`,
    author: `@gatsbyjs, Camila Bernale`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-portfolio-camilabernales`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#282c34`,
        theme_color: `#282c34`,
        display: `minimal-ui`,
        icon: `src/images/favicondogui.jpg`,
      }
    }
  ]
}
