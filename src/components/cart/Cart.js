import React, {useContext} from "react"
import EmptyCart from "./EmptyCart"
import {Context} from "../../context"
import CartItem from "./CartItem"
import CartColumns from "./CartColumns"
import {Link} from "react-router-dom"
import Navbar from "../Navbar"

function Cart(){
  const value = useContext(Context)
  const cart = value.cart

  const checkout = () => {
    let sum = 0
    cart.forEach((product, i) => {
      sum = sum + product.total
    });
    value.setTotal(sum)

  }

  const printCart = () => {
    console.log(cart)
  }
  if(cart.length>0)
  return(
  <div>
    <Navbar></Navbar>
    <div className="home2">

      <button onClick={printCart}>PRINT</button>
      <div className="row cart-row"></div>
      <div className="container bg-white">
        <CartColumns></CartColumns>
        <hr></hr>
        <div className="row">
          {cart.map((product, index) => {
           return <CartItem product={product} ind={index} key={index}></CartItem>
         })}
        </div>
        <hr></hr>

      </div>
      <div className="container">
      <div className="row">
        <div className="col-10"></div>
        <div className="col-2"><Link to="/checkout"><button onClick={checkout} className="btn btn-lg bg-danger text-white">CHECK OUT</button></Link></div>
      </div>
      </div>

    </div>

  </div>
  )
  else return <div><Navbar></Navbar><EmptyCart></EmptyCart></div>
}

export default Cart
