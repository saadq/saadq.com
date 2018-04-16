import React from 'react'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  padding: 2em 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #777;
  font-size: 0.85em;
  opacity: 0.8;
`

const Copyright = styled.p``

const Link = styled.a`
  color: #777;
  transition: color 0.3s ease;
  text-decoration: none;
  padding: 0 0.5em;

  &:hover {
    color: black;
  }
`

function Footer() {
  return (
    <StyledFooter>
      <Copyright>
        © 2018 Saad Quadri. Built with Gatsby and TypeScript.
      </Copyright>
      <div>
        <Link href="https://github.com/saadq">GitHub</Link>
        <Link href="https://github.com/saadq">StackOverflow</Link>
        <Link href="https://github.com/saadq">YouTube</Link>
        <Link href="https://twitter.com/saadquadri">Twitter</Link>
      </div>
    </StyledFooter>
  )
}

export default Footer
