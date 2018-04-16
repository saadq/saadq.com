import React from 'react'
import Link from 'gatsby-link'
import { FrontMatter } from '../common/types'

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
  const posts = data.allMarkdownRemark.edges
  return (
    <div>
      {posts.map(({ node: post }) => (
        <div key={post.id}>
          <h1>
            <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
          </h1>
          <h2>{post.frontmatter.date}</h2>
        </div>
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
