import React from 'react'
import styled from 'styled-components'
import { Repository } from '../common/types'

const Wrapper = styled.div`
  width: 100%;
`

const Repositories = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  overflow: auto;
`

const RepoLink = styled.a`
  font-size: 14px;
  color: inherit;
  display: block;
  margin-bottom: 20px;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`

const Title = styled.div`
  font-weight: bold;
  margin: 0 20px 0 0;
  display: inline-block;
  width: 150px;
`

const Stars = styled.div`
  margin: 0;
  float: right;
`

const Description = styled.div`
  color: #777;
  margin: 0;
  display: inline-block;

  @media screen and (max-width: 768px) {
    display: block;
  }
`

interface State {
  loading: boolean
  repos: Array<Repository>
}

class OSS extends React.Component<{}, State> {
  state: State = {
    repos: [],
    loading: false
  }

  async componentDidMount() {
    try {
      this.setState({ loading: true })
      const response = await fetch('https://api.github.com/users/saadq/repos?per_page=100')
      const repos: Array<Repository> = await response.json()
      const sortedRepos = repos.sort(
        (a, b) => b.stargazers_count - a.stargazers_count
      )
      this.setState({ repos: sortedRepos, loading: false })
    } catch (err) {
      this.setState({ repos: [], loading: false })
    }
  }

  render() {
    if (this.state.loading) {
      return <p>Loading...</p>
    }

    return (
      <Wrapper>
        <h1>Open Source Software</h1>
        <Repositories>
          {this.state.repos.map((repo, i) => (
            <RepoLink href={repo.html_url} key={i}>
              <Title>{repo.name}</Title>
              <Stars>{repo.stargazers_count} ★</Stars>
              <Description>{repo.description}</Description>
            </RepoLink>
          ))}
        </Repositories>
      </Wrapper>
    )
  }
}

export default OSS
