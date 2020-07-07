import React, {useContext, useState} from "react"
import {Context} from "../../context"
import {Row, Col, Card, Image, Form, Button} from "react-bootstrap"
import {Link} from "react-router-dom"
import axios from "axios"


function CustomerDetails(props){
  const value = useContext(Context)
  const user = props.user
  const [change,setChange]=useState("")
  const index = props.index

  const deleteUser = () => {
    console.log(user.uid)
    props.deleteFromUsers(index)
    axios.delete(`https://us-central1-my-shop-c9e0b.cloudfunctions.net/webApi/api/v1/users/${user.uid}`)
  }


  const addAdmin = (e) => {
    if(e.target.checked)
    {user.admin=true
    props.callBack(user)}
  }

  const addCustomer = (e) => {
    if(e.target.checked)
    {user.admin=false
    props.callBack(user)}
  }

  const status = () => {
    if(user.admin==true) return "ADMIN"
    else return "CUSTOMER"
  }

  return(
    <div>
      <Row>
        <Col className="text-center">
          <Link to="/customer"><Button onClick={()=>{
              value.setCurrentCustomer(user)
            }}>{user.firstName + " " + user.lastName}</Button></Link>
        </Col>
        <Col className="text-center">
          {status()}
        </Col>
        <Col className="text-center">
          {user.orders}
        </Col>
        <Col className="text-center">
          <Form.Check onChange={addAdmin} type="checkbox"></Form.Check>
        </Col>

        <Col className="text-center">
          <Button onClick={()=>{
              setChange();
              deleteUser();

              alert("user deleted!")
            }} variant="danger">Delete</Button>
        </Col>

      </Row>

      <hr></hr>

    </div>


  )
}

export default CustomerDetails
