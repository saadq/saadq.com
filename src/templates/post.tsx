import * as React from 'react'
import Helmet from 'react-helmet'

interface Props {
  data: {
    markdownRemark: any
    site: any
  }
}

function Post({ data }: Props) {
  const { markdownRemark: post, site } = data
  return (
    <div>
      <Helmet
        title={`${site.siteMetadata.siteName} - ${post.frontmatter.title}`}
      />
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </div>
  )
}

export default Post

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
    site {
      siteMetadata {
        siteName
      }
    }
  }
`
