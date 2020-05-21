import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Services = () => {
  const [users, updateUsers] = useState([])
  const fetchUsers = async () => {
    const res = await axios.get('https://reqres.in/api/users')
    const users = res.data.data
    updateUsers(users)
    console.log(users)
  }
  useEffect(() => {
    console.log('changed!!!')
  })
  return (
    <div className="services">
      <div className="container">
        <h1> Services </h1>
        <button className="btn" onClick={fetchUsers}>Fetch users</button>
        <ul>
          {users.map((user) => {
            return <li key={user.id}>{user.first_name} {user.last_name}</li>
          })}
        </ul>
      </div>
    </div>
  )
}

export default Services

// https://reqres.in/api/users
// http://dummy.restapiexample.com/api/v1/employees
