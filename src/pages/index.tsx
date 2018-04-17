import React from 'react'
import styled from 'styled-components'
import avatar from '../common/assets/sq.jpeg'

interface StyleProps {
  imageLoaded: boolean
}

const Wrapper = styled.div`
  margin: auto 0;
  color: #666;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`

const Avatar = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 5em;

  @media screen and (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 2em;
  }
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
      <Avatar src={avatar} />
      <div>
        <p>Hello, I'm Saad. I'm a software developer.</p>
        <p>
          I'm an incoming intern at{' '}
          <Link href="https://www.rackspace.com/en-us">Rackspace</Link>. <br />
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
      </div>
    </Wrapper>
  )
}

export default Home
