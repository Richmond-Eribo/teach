import React, {ReactNode} from 'react'

type Props = {
  children: ReactNode
  width: number
}

function TextWrapper({children, width}: Props) {
  return (
    <article className={`width text-text-light`}>
      {children}
      <style jsx>{`
        p {
          margin-bottom: 3px;
        }
        .width {
          width: ${width + 10}px;
        }
      `}</style>
    </article>
  )
}

export default TextWrapper
