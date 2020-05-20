import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'

class Navbar extends React.Component {
  render() {
    return (
      <nav>
        <div className="container">
          <div className="nav-brand">
            <NavLink to="/">React</NavLink>
          </div>
          <ul className="main-menu">
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
