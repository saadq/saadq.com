import React from 'react'

export default ({ data }: any) => (
  <div>
    <h1>About {data.site.siteMetadata.siteName}</h1>
    <p>{"Awesome starter, isn't it?"}</p>
  </div>
)

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        siteName
      }
    }
  }
`
