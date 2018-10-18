module.exports = {
  siteMetadata: {
    siteName: 'saadq.com',
    author: 'Saad Quadri',
    basePath: 'http://saadq.com'
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-100232391-2'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-prismjs',
          'gatsby-remark-autolink-headers',
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 850
            }
          }
        ]
      }
    },
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: './src/common/assets/favicon.png',
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false
        }
      }
    }
  ]
}
