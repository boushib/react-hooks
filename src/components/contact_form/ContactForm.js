import React, { useState } from 'react'
import useFormState from '../../hooks/useFormState'
import './ContactForm.scss'

const Form = () => {
  const [first_name, updateFirstName, resetFirstName] = useFormState('')
  const [last_name, updateLastName, resetLastName] = useFormState('')

  const resetForm = () => {
    resetFirstName()
    resetLastName()
  }

  return (
    <form>
      <input type="text" onChange={updateFirstName} value={first_name} placeholder="Enter your first name"/>
      <input type="text" onChange={updateLastName} value={last_name} placeholder="Enter your last name"/>
      <div className="first_name">First name: { first_name}</div>
      <div className="last_name">Last name: { last_name}</div>
      <button className="btn" type="button" onClick={resetForm}>Reset</button>
      {/* <input type="checkbox"/> */}
    </form>
  )
}
export default Form