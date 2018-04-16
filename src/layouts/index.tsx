import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import { injectGlobal } from 'styled-components'
import reset from 'styled-reset'
import 'prismjs/themes/prism.css'

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
        <Link to="/blog">Blog</Link>
        <a href="/portfolio">Code</a>
      </header>
      {children()}
    </div>
  )
}

export default Layout
