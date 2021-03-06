import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { Repository } from '../common/types'

const Wrapper = styled.div`
  width: 100%;
  margin-top: 25px;
`

const RepoLink = styled.a`
  font-size: 14px;
  color: inherit;
  display: block;
  text-decoration: none;
  padding-bottom: 20px;

  @media screen and (max-width: 768px) {
    padding-top: 20px;
    border-bottom: 1px solid #ddd;
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

class Projects extends React.Component<{}, State> {
  state: State = {
    repos: [],
    loading: false
  }

  fetchRepos() {
    return fetch('https://api.github.com/users/saadq/repos?per_page=100')
      .then(response => response.json())
      .then((repos: Array<Repository>) => {
        return repos
          .filter(
            repo =>
              !repo.fork ||
              (repo.name.includes('Materialize') || repo.name.includes('blyss'))
          )
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
      })
  }

  componentDidMount() {
    this.setState({ loading: true })
    this.fetchRepos().then(repos => {
      this.setState({ repos, loading: false })
    })
  }

  render() {
    if (this.state.loading) {
      return <p>Loading...</p>
    }

    return (
      <Wrapper>
        {this.state.repos.map((repo, i) => (
          <RepoLink href={repo.html_url} key={i}>
            <Title>{repo.name}</Title>
            <Stars>{repo.stargazers_count} ★</Stars>
            <Description>{repo.description}</Description>
          </RepoLink>
        ))}
      </Wrapper>
    )
  }
}

export default Projects
