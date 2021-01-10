module.exports = {
  plugins: [
    
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MitraMir`,
        short_name: `MitraMir`,
        start_url: `https://mitramir.netlify.app`,
        background_color: `#fff`,
        theme_color: `#b00234`,
        display: `standalone`,
        icon: 'src/images/favicon.png',
      },
    },{
      resolve: `@conradlin/gatsby-source-notion-database`,
      options: {
        sourceConfig: [
          {
            name: 'posts',
            table: 'https://www.notion.so/conradlin/1aa283fcd5ae4a73ba0f73c062de745e?v=6a40014bee144152b55203e2caf0c02e',
            cacheType: 'html'
          }
        ]
      }
    },
    
  ],
  siteMetadata: {
    siteTitle: 'mitramir',
  }
};
