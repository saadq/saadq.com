interface Post {
  node: {
    excerpt: string
    frontmatter: {
      date: string
      path: string
      title: string
    }
    id: string
  }
}

export { Post }
