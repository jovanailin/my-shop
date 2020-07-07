import React from "react"

function EmptyCart(){
  return(
    <div className="home">

    <div className="row home-row"></div>
    <div className="row home-row">
    <div className="col-1 col-sm-3"></div>
    <div className="col-10 col-sm-6 home-div d-flex align-items-center justify-content-center">


    <p className="welcome-text pt-3">
    <h1>Your Cart is Empty</h1>
    </p>
    </div>
    <div className="col-1 col-sm-3"></div>
    </div>
    <div className="row home-row"></div>
    </div>
  )
}

export default EmptyCart
