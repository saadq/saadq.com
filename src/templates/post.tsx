import React from 'react'
import Helmet from 'react-helmet'
import { FrontMatter } from '../common/types'

interface Post {
  html: string
  frontmatter: FrontMatter
}

interface Props {
  data: {
    markdownRemark: Post
  }
}

function Post({ data }: Props) {
  const post = data.markdownRemark
  return (
    <div>
      <Helmet title="Saad Quadri" />
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
  }
`
