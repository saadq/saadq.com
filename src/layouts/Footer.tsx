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

const CopyrightLink = styled.a`
  color: #777;
  transition: color 0.3s ease;
  text-decoration: none;

  &:hover {
    color: black;
  }
`

const SocialLinks = styled.div`
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

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
      <p>
        © {new Date().getFullYear()} Saad Quadri. <br />
        Built with{' '}
        <CopyrightLink href="https://gatsbyjs.org/">Gatsby,</CopyrightLink>{' '}
        <CopyrightLink href="https://reactjs.org/">React,</CopyrightLink> and{' '}
        <CopyrightLink href="https://typescriptlang.org/">
          TypeScript
        </CopyrightLink>.
      </p>
      <SocialLinks>
        <Link href="https://github.com/saadq/saadq.com">View Source</Link>
        <Link href="https://github.com/saadq">GitHub</Link>
        <Link href="https://stackoverflow.com/users/4033215/saadq">
          StackOverflow
        </Link>
        <Link href="https://youtube.com/saadq">YouTube</Link>
        <Link href="https://twitter.com/saadquadri">Twitter</Link>
        <Link href="https://linkedin.com/in/saadquadri">LinkedIn</Link>
      </SocialLinks>
    </StyledFooter>
  )
}

export default Footer
