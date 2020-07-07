import React, {useContext} from "react"
import {Context} from "../context"
import {Link} from "react-router-dom"
import Admin from "../admin/Admin"
import User from "../user/User"

function Account(){
  const value = useContext(Context)
  const name = value.firstName
  const signOut = value.signOut
  const user = value.user
  const loading = value.loading

  const isLoading = () => {
    if(loading) return <h3>Loading...</h3>
  }
  const renderUser = () => {
    if(user){
      if(user.admin==true) return (<Admin></Admin>)
      if(user.admin==false) return (<User></User>)
    }

  }

return (
  <div>
    {isLoading()}
    {renderUser()}

  </div>
)

}


export default Account
