import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { MorphReplace } from 'react-svg-morph'
import { Moon, Sun } from '../common/components'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 3em;
`

const Logo = styled(Link)`
  color: black;
  font-size: 1em;
  text-decoration: none;
  font-weight: bold;
`

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9em;
`

const NavLink = styled(Link)`
  color: #777;
  text-decoration: none;
  margin-right: 25px;
  text-transform: lowercase;
  transition: color 0.3s ease;

  &:hover {
    color: black;
  }
`

interface Props {
  mode: 'light' | 'dark'
  switchMode: () => void
}

function Header({ mode, switchMode }: Props) {
  return (
    <StyledHeader>
      <Logo to="/">saadq</Logo>
      <Nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/portfolio">Code</NavLink>
        <MorphReplace onClick={switchMode} width={24} height={24}>
          {mode === 'light' ? <Sun key="light" /> : <Moon key="dark" />}
        </MorphReplace>
      </Nav>
    </StyledHeader>
  )
}

export default Header
