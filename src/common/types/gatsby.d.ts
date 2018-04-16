declare const graphql: (query: TemplateStringsArray) => void

declare module '*.jpeg' {
  const url: string
  export default url
}
