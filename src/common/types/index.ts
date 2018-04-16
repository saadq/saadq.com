interface FrontMatter {
  date: string
  path: string
  title: string
  id: string
}

interface Site {
  siteMetadata: {
    siteName: string
  }
}

export { FrontMatter, Site }
