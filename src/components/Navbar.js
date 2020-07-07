import React, {useContext} from 'react';
import {Link} from "react-router-dom"
import logo from "./logo.svg"
import {Context} from "../context"

function Navbar(){
const value = useContext(Context)
const loggedIn = value.loggedIn
const cart = value.cart

const printCart = () => {
  console.log(cart)
}

const navlog = () => {
  if(!loggedIn) return <Link className="linkic" to="/login"> Log in </Link>
    else return <Link className="linkic" to="/account"> <i class="fas fa-user"></i> <span className="p-1">My Account</span></Link>
}

  return(
    <nav className="container d-none d-md-block bg-white my-navbar">
      <ul className="navbar nav-list">
      <li className="nav-item">
        <Link to="/">
          <img src={logo} alt="store"  className="navbar-brand" width="60" height="60"></img>
          <span className="text-success">GREENFOLK</span>
        </Link>
      </li>
      <li className="nav-item">
      <Link className="linkic" to="/">
        Home
      </Link>
      </li>
      <li className="nav-item">
        <Link  className="linkic" to="/shop">
          Shop
        </Link>
      </li>
      <li className="nav-item">
        <Link className="linkic" to="/">
          About
        </Link>
      </li>
      <li className="nav-item">
        
      </li>
      <li className="nav-item">
        <Link onClick={printCart()} className="linkic" to="/cart">
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

export default Navbar
