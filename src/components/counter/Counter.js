import React, { useState } from 'react'
import './counter.scss'

const Counter = () => {
  const [count, updateCount] = useState(0)
  return (
    <div className="counter">
      <div className="container">
        <h1>Counter</h1>
        <span className="count">{count}</span>
        <button className="btn" onClick={() => updateCount(count + 1)}>
          Increment
        </button>
      </div>
    </div>
  )
}

export default Counter
