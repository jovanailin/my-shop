import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "../context"
import Navbar from "./Navbar"

function Home(){
const value = useContext(Context)
const signOut = value.signOut
  return(

    <div>
      <Navbar></Navbar>
        <div className="home">
        


        <div className="row home-row"></div>
        <div className="row home-row">
        <div className="col-1 col-sm-3"></div>
        <div className="col-10 col-sm-6 home-div">
        <p className="pt-3">ECO FRIENDLY SHOP</p>
        <hr></hr>
        <p className="welcome-text pt-3">
        Welcome to Greenfolk, our environmental online Shop selling eco-friendly, zero-waste versions
        of everyday products.
        Our goal is to return to renewable, organic and recycle materials, have cleaner production
        and reduce energy and water consumtion. You can browse our products <span>
        <Link to="/shop">HERE.</Link>
        </span>
        </p>
        </div>
        <div className="col-1 col-sm-3"></div>
        </div>
        <div className="row home-row"></div>
        </div>
    </div>

  )
}

export default Home
