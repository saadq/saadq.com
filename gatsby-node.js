const path = require('path')

module.exports = {
  async createPages({ boundActionCreators, graphql }) {
    const { createPage } = boundActionCreators
    const blogPostTemplate = path.resolve(`src/templates/post.tsx`)

    const result = await graphql(`
      {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          limit: 1000
        ) {
          edges {
            node {
              excerpt(pruneLength: 250)
              html
              id
              frontmatter {
                path
                date
                title
              }
            }
          }
        }
      }
    `)

    if (result.errors) {
      throw result.errors
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {}
      })
    })
  }
}
