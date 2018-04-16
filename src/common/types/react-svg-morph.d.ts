declare module 'react-svg-morph' {
  import React from 'react'

  interface Props extends React.SVGProps<{}> {
    width?: number
    height?: number
    viewBox?: string
    duration?: number
    rotation?: string
    preserveAspectRatio?: string
    easing?(t: number): number
    children?: JSX.Element
  }

  export class MorphReplace extends React.Component<Props> {}
}
