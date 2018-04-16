import React from 'react'
import Helmet from 'react-helmet'
import ReactDisqusComments from 'react-disqus-comments'
import styled from 'styled-components'
import { FrontMatter } from '../common/types'

const Wrapper = styled.div`
  width: 100%;
`

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
    <Wrapper>
      <Helmet title="Saad Quadri" />
      <div>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </div>
      <ReactDisqusComments
        shortname="saadq-com"
        identifier={post.frontmatter.title + post.frontmatter.id}
        title={post.frontmatter.title}
      />
    </Wrapper>
  )
}

export default Post

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        siteName
        basePath
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      id
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        id
      }
    }
  }
`
