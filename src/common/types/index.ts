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

export { FrontMatter, Site }
