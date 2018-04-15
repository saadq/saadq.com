import React from 'react'
import Link from 'gatsby-link'

interface Props {
  data: any
}

function Home({ data }: Props) {
  return (
    <div>
      <div>
        <h1>Welcome to {data.site.siteMetadata.siteName} !</h1>
        <div>
          <p>
            This is a gatsby starter, hosted on github:{' '}
            <a href="https://github.com/liuchong/gatsby-starter-blog-typescript/">
              liuchong/gatsby-starter-blog-typescript
            </a>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        siteName
      }
    }
  }
`
