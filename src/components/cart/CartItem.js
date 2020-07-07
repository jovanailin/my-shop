import React, {useContext, useState, useEffect} from "react"
import {Context} from "../../context"


function CartItem(props){
  const value = useContext(Context)
  const product = props.product
  const index = props.ind
  const [quantity,setQuantity] = useState(product.quantity)
  const [total,setTotal] = useState(quantity*product.currentPrice)
  const removeFromCart = value.removeFromCart

  const calculateTotal = () => {
    setTotal(quantity*product.currentPrice)
    value.setTotal(total)
  }

  useEffect(()=>{
    setTotal(quantity*product.currentPrice)
    product.total=total
    product.quantity=quantity
  })

  const increase = () =>{
    let q = quantity
    if(product.inStock>0) setQuantity(q+1)
    else console.log("out of stock!")
  }

  const decrease = () =>{
    let q = quantity
    if(quantity>0) setQuantity(q-1)
  }

  return(

<div>
  <div className="row container bg-white mx-auto">
    <div className="col-lg-2 col-md-3 col-6"><img className="img-fluid" src={product.img}></img></div>
    <div className="col-lg-2 col-md-3 col-6 d-flex justify-content-center align-items-center">{product.name}</div>
    <div className="col-lg-1 col-md-3 col-6 d-flex justify-content-center align-items-center">{product.currentPrice}$</div>
    <div className="col-lg-3 col-md-3 col-6 d-flex justify-content-center align-items-center">
          <span className="mr-2" id="basic-addon1">quantity:</span>
        <button onClick={()=>{decrease()}} className="btn btn-secondary btn-sm btnQ">-</button><span className="mx-1">{quantity}</span><button onClick={()=>{increase()}} className="btn btn-sm btn-secondary btnQ">+</button>
    </div>
    <div className="col-lg-2 col-md-3 col-6 d-flex justify-content-center align-items-center"><button onClick={()=>{removeFromCart(index); console.log("Obrisan je: ",index)}} className="btn btn-sm"><i class="fas fa-trash-alt text-danger remove"></i></button></div>
    <div className="col-lg-2 col-md-3 col-6 d-flex justify-content-center align-items-center">{total}$</div>
  </div>
  <hr></hr>
</div>




  )
}

export default CartItem
