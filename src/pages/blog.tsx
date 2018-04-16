import React from 'react'
import styled, { injectGlobal } from 'styled-components'
import Link from 'gatsby-link'
import { lightTheme } from '../common/code'
import { FrontMatter } from '../common/types'

injectGlobal`
  ${lightTheme}
`

const Post = styled.div`
  margin: 2em 0;
`

const Heading = styled.h1`
  font-size: 1.5em;
  margin: 0;
`

const HeadingLink = styled(Link)`
  color: black;
  text-decoration: none;
`

const PostDate = styled.h2`
  font-size: 1em;
  font-weight: 400;
  margin: 0;
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
      {data.allMarkdownRemark.edges.map(({ node: post }) => (
        <Post key={post.id}>
          <Heading>
            <HeadingLink to={post.frontmatter.path}>
              {post.frontmatter.title}
            </HeadingLink>
          </Heading>
          <PostDate>{post.frontmatter.date}</PostDate>
        </Post>
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
