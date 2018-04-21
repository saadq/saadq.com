import React from 'react'
import Helmet from 'react-helmet'
import styled, { injectGlobal } from 'styled-components'
import Link from 'gatsby-link'
import { FrontMatter } from '../common/types'

const Wrapper = styled.div`
  width: 100%;
  margin-top: 2.5em;
`

const PostLink = styled.a`
  margin: 2em 0;
  display: block;
  color: inherit;
  text-decoration: none;
  border-bottom: 1px solid #ddd;
  padding-bottom: 2em;
`

const PostTitle = styled.h2`
  margin: 0;
`

const PostDate = styled.h2`
  font-size: 1em;
  font-weight: 400;
  margin: 0;
  line-height: 1;
`

interface PostNode {
  node: {
    excerpt: string
    frontmatter: FrontMatter
    id: string
  }
}

interface Props {
  data: {
    allMarkdownRemark: {
      edges: Array<PostNode>
    }
  }
}

function Blog({ data }: Props) {
  return (
    <Wrapper>
      {data.allMarkdownRemark.edges.map(({ node: post }) => (
        <PostLink href={post.frontmatter.path} key={post.id}>
          <PostTitle>{post.frontmatter.title}</PostTitle>
          <PostDate>{post.frontmatter.date}</PostDate>
        </PostLink>
      ))}
    </Wrapper>
  )
}

export default Blog

export const query = graphql`
  query PostsQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
          }
        }
      }
    }
  }
`
