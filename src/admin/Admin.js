import React, {useContext} from "react"
import {Context} from "../context"
import {Link, Route, BrowserRouter, Switch} from "react-router-dom"
import Sidemenu from "./Sidemenu"
import AddNew from "./products/AddNew"

function Admin(){
  const value = useContext(Context)
  const name = value.firstName
  const signOut = value.signOut
  const user = value.user
  const loading = () => {
    if(!user) return <h5>loading...</h5>
  else return null
  }
  return(
  <div className="row home2">
    <div className="col col-2">
    <Sidemenu></Sidemenu>
    </div>
    <div className="col col-10">

    </div>
  </div>
  )
}

export default Admin
