import * as React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'

injectGlobal`
  ${reset}
`

interface Props {
  children: () => JSX.Element
}

function Layout({ children }: Props) {
  return (
    <div>
      <Helmet title="Saad Quadri" />
      <header>
        <Link to="/">
          <h3>saadq.com</h3>
        </Link>
        <Link to="/">Home</Link>
        <Link to="/posts/">Posts</Link>
        <Link to="/about/">About</Link>
      </header>
      {children()}
    </div>
  )
}

export default Layout
