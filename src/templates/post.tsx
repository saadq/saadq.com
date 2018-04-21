import React from 'react'
import Helmet from 'react-helmet'
import DisqusComments from 'react-disqus-comments'
import styled from 'styled-components'
import { FrontMatter } from '../common/types'

const Wrapper = styled.div`
  width: 100%;
  font-size: 16px;

  a {
    color: inherit;
  }

  hr {
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }
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
      <Helmet title={`Saad Quadri | ${post.frontmatter.title}`} />
      <div>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </div>
      <DisqusComments
        shortname="saadq-com"
        identifier={post.frontmatter.title}
        title={post.frontmatter.title}
      />
    </Wrapper>
  )
}

export default Post

export const query = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      id
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
