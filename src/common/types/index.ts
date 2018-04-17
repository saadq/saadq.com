interface FrontMatter {
  date: string
  path: string
  title: string
}

interface Site {
  siteMetadata: {
    siteName: string
  }
}

interface Repository {
  name: string
  description: string
  stargazers_count: number
  html_url: string
  fork: boolean
  [key: string]: any
}

export { FrontMatter, Site, Repository }
