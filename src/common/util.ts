function capitalize(str: string) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase()
}

function generateTitle(location: Location) {
  const base = 'Saad Quadri'

  switch (location.pathname) {
    case '/':
      return base

    case '/oss':
      return `${base} | OSS`

    default:
      return `${base} | ${capitalize(location.pathname.slice(1))}`
  }
}

export { capitalize, generateTitle }
