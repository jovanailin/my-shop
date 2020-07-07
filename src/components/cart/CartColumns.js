import React, {useContext} from "react"
import {Context} from "../../context"


function CartColumns(){


  return(

      <div className="row container mx-auto linkic cart-text">
        <div className="col-lg-2 col-md-3 col-6">PRODUCT</div>
        <div className="col-lg-2 col-md-3 col-6 d-flex justify-content-center align-items-center">NAME</div>
        <div className="col-lg-1 col-md-3 col-6 d-flex justify-content-center align-items-center">PRICE</div>
        <div className="col-lg-3 col-md-3 col-6 d-flex justify-content-center align-items-center">QUANTITY</div>
        <div className="col-lg-2 col-md-3 col-6 d-flex justify-content-center align-items-center">REMOVE</div>
        <div className="col-lg-2 col-md-3 col-6 d-flex justify-content-center align-items-center">TOTAL</div>
      </div>



  )
}

export default CartColumns
