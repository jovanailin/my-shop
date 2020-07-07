import React, {useState, useContext} from 'react'
import {Link} from "react-router-dom"
import logo from "./logo.svg"
import {Context} from "../context"

function Toggle(){
  const value = useContext(Context)
  const toggle = value.toggle
  return(
    <nav className="container d-sm-block d-md-none">
      <ul className="nav-list navbar">
      <li className="nav-item">
        <Link to="/">
          <img src={logo} alt="store" className="navbar-brand" width="60" height="60"></img>
          <span className="text-success">GREENFOLK</span>
        </Link>
        </li>
        <li className="nav-item">
        <button onClick={toggle} className="navbar-toggler linkic"><i class="fas fa-bars fa-2x"></i></button>
        </li>
      </ul>
    </nav>
  )
}

export default Toggle
