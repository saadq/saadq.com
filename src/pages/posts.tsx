import React from 'react'
import Link from 'gatsby-link'
import { Post } from '../types'

interface Props {
  data: {
    allMarkdownRemark: {
      edges: Array<Post>
    }
  }
}

function Posts({ data }: Props) {
  return (
    <div>
      {data.allMarkdownRemark.edges
        .filter(edge => edge.node.frontmatter.title.length > 0)
        .map(({ node: post }) => (
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

export default Posts

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
