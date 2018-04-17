import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import Link from 'gatsby-link'
import { FrontMatter } from '../common/types'

const PostLink = styled.a`
  margin: 2em 0;
  display: block;
  color: inherit;
  text-decoration: none;
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
    <div>
      <h1>Blog Posts</h1>
      {data.allMarkdownRemark.edges.map(({ node: post }) => (
        <PostLink href={post.frontmatter.path} key={post.id}>
          <PostTitle>{post.frontmatter.title}</PostTitle>
          <PostDate>{post.frontmatter.date}</PostDate>
        </PostLink>
      ))}
    </div>
  )
}

export default Blog

export const pageQuery = graphql`
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
