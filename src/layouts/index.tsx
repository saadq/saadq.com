import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import styled, { injectGlobal } from 'styled-components'
import reset from 'styled-reset'
import Header from './Header'
import Footer from './Footer'

injectGlobal`
  body {
    margin: 0;
    font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
    font-weight: 300;
    font-size: 15px;
    line-height: 1.75;
    color: #212529;
  }
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
`

interface Props {
  children: () => JSX.Element
}

interface State {
  mode: 'light' | 'dark'
}

class Layout extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    const hours = new Date().getHours()
    const mode = hours > 6 && hours < 20 ? 'light' : 'dark'
    this.state = { mode }
  }

  switchMode = () => {
    this.setState(prevState => ({
      mode: prevState.mode === 'light' ? 'dark' : 'light'
    }))
  }

  render() {
    return (
      <Wrapper>
        <Helmet title="Saad Quadri" />
        <Header switchMode={this.switchMode} mode={this.state.mode} />
        <Main>{this.props.children()}</Main>
        <Footer />
      </Wrapper>
    )
  }
}

export default Layout
