import React from 'react'
import ReactDOM from 'react-dom/client'

function Greeting() {
  return (
    <h3 id="something" className="someValue">
      123123
    </h3>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<Greeting />)
