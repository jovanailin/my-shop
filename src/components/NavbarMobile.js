import React, {useState, useContext} from 'react'
import {Link} from "react-router-dom"
import logo from "./logo.svg"
import {Context} from "../context"

function NavbarMobile(){
  const value = useContext(Context);
  const navbarCollapsed = value.navbarCollapsed
  const loggedIn = value.loggedIn
  const cart = value.cart

  const navlog = () => {
    if(!loggedIn) return <Link className="linkic nav-link" to="/login"> Log in </Link>
      else return <Link className="linkic nav-link" to="/account"> <i class="fas fa-user"></i> <span className="p-1">My Account</span></Link>
  }
  if(navbarCollapsed) return(null)
  else
  return(
    <nav className="container nav flex-column d-sm-block d-md-none">
      <ul className="nav-list">
      <li className="nav-item">
      <Link className="linkic nav-link" to="/">
        Home
      </Link>
      </li>
      <li className="nav-item">
        <Link  className="linkic nav-link" to="/shop">
          Shop
        </Link>
      </li>
      <li className="nav-item">
        <Link className="linkic nav-link" to="/">
          About
        </Link>
      </li>
      <li className="nav-item">
        <Link className="linkic nav-link" to="/">
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link  className="linkic nav-link" to="/cart">
          <i class="fas fa-shopping-cart"></i>
          <span className="cart-count">{cart.length}</span>
        </Link>
      </li>
      <li className="nav-item">
        {navlog()}
      </li>
      </ul>
    </nav>
  )
}

export default NavbarMobile
