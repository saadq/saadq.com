import React from 'react'
import Helmet from 'react-helmet'
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
  return (
    <Wrapper>
      <Helmet title="Saad Quadri" />
      <div>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </div>
    </Wrapper>
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
