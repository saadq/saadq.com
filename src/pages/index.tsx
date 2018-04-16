import React, { Fragment } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: auto 0;
  color: #555;
`

const Link = styled.a`
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

function Home() {
  return (
    <Wrapper>
      <p>Hello, I'm Saad. I'm a software developer.</p>
      <p>
        I'm an incoming intern at{' '}
        <Link href="https://www.rackspace.com/en-us">Rackspace</Link>.
        Previously, I've worked at{' '}
        <Link href="https://mozilla.org">Mozilla</Link>,{' '}
        <Link href="https://www.codecademy.com">Codecademy</Link>,{' '}
        <Link href="https://www.ieee.org/">IEEE</Link>, and{' '}
        <Link href="https://www.jnj.com/">J&amp;J</Link>.
      </p>
      <p>
        You can send me an <Link href="mailto:saad@saadq.com">email</Link> if
        you'd like to get in touch.
      </p>
    </Wrapper>
  )
}

export default Home
