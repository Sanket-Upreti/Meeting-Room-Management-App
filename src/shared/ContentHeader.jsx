import React from 'react'

const ContentHeader = ({title, maxWidth="95", textAlign="left"}) => {
  return (
    <div className='content-header' style={{
        maxWidth: `${maxWidth}%`,
        textAlign: `${textAlign}`
    }}>{title}</div>
  )
}

export default ContentHeader