import React from 'react'
import useToggle from '../../hooks/useToggle'
import './Toggler.scss'

function Toggler() {
  const [isHappy, toggleMood] = useToggle(true)
  const [isAvocado, toggleFruit] = useToggle(true)
  return (
    <div className="toggler">
      <h1 onClick={toggleMood}>{isHappy ? '😄' : '😕'}</h1>
      <h1 onClick={toggleFruit}>{isAvocado ? '🥑' : '🍊'}</h1>
    </div>
  )
}

export default Toggler
