import React from 'react'

const style = {
  display: 'flex',
  flexDirection: 'row', 
  border: '1px solid',
  height: '150px'
}

const Row = ({ children }) => <div style={style}>{children}</div>

export { Row }