import React from 'react'

export default function ArticleTitle(props) {
  return (
    <div className='articleTitle'>
      <div className='widthWrapper'>
        {props.title}
      </div>
    </div>
  )
}
