import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styled, { injectGlobal } from 'styled-components'
import Header from './Header'
import Footer from './Footer'
import { generateTitle } from '../common/util'
import highlighting from '../common/highlighting'

injectGlobal`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    font-weight: 300;
    font-size: 15px;
    line-height: 1.75;
    color: #212529;
  }

  ${highlighting}
`

const Wrapper = styled.div`
  width: 85%;
  max-width: 850px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  flex-grow: 1;
  display: flex;
  width: 100%;
`

interface Props {
  children: () => JSX.Element
  location: Location
}

function Layout({ children, location }: Props) {
  return (
    <Wrapper>
      <Helmet title={generateTitle(location)} />
      <Header />
      <Main>{children()}</Main>
      <Footer />
    </Wrapper>
  )
}

export default Layout
