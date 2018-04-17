import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

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
  transition: color 0.3s ease;

  &.active {
    color: black;
    font-weight: bold;
  }

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    color: black;
  }
`

function Header() {
  return (
    <StyledHeader>
      <Logo to="/">saadq</Logo>
      <Nav>
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink exact to="/blog" activeClassName="active">
          Blog
        </NavLink>
        <NavLink exact to="/oss" activeClassName="active">
          OSS
        </NavLink>
      </Nav>
    </StyledHeader>
  )
}

export default Header
