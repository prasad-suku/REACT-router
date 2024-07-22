import React from 'react'
import { Link } from 'react-router-dom'
// import 'index.css'
function Navbar() {


  return (
    <nav>
        <h3>LOGO</h3>
        <ul>
            <Link to="/">home</Link>
            <Link to="/about">about</Link>
            <Link to="/contact">contact</Link>
            <Link to="/service">service</Link>
        </ul>
    </nav>
  )
}

export default Navbar