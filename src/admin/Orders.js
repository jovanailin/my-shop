import React, {useContext,useState} from "react"
import {Context} from "../context"
import {Link, Route, BrowserRouter, Switch} from "react-router-dom"
import Sidemenu from "./Sidemenu"
import AddNew from "./products/AddNew"
import {Row,Col,Card,Button,Form} from "react-bootstrap"
import axios from "axios"

function Admin(){
  const value = useContext(Context)
  const orders = value.orders
  const users = value.allUsers
  const signOut = value.signOut
  const user = value.user
  const [change,setChange]=useState("")
  const loading = () => {
    if(!user) return <h5>loading...</h5>
  else return null
  }


const loadButton = (o) => {
  if(o.shipped && !o.delivered) return(<Button disabled>shipped</Button>)
  if(o.delivered) return(<Button variant="success" disabled>delivered</Button>)
  else return(<Button onClick={()=>{saveChanges(o);setChange()}}>ship the order</Button>)
}

const saveChanges = (o) => {
  o.shipped = true;
  axios.patch(`https://us-central1-my-shop-c9e0b.cloudfunctions.net/webApi/api/v1/orders/${o.id}`,{"shipped":true})
  alert("order shipped!")
}


const getUser = (i) => {
  let s = ""
  if(users.length>0)
  users.forEach((u, ind) => {
    console.log(u)
    if(u.uid==i) s=s+u.firstName+" "+u.lastName
  });
return s
}


  return(
  <div className="row home2">
    <div className="col col-2">
    <Sidemenu></Sidemenu>
    </div>
    <div className="col col-10">
      <Row>

        <Col md={10}>
          <Card className="m-3 bg-light">
            <Card.Title>
              Orders:
            </Card.Title>
            <hr></hr>
            <Card.Body>
              <Row>
                <Col>Products:</Col>
                <Col>Date:</Col>
                <Col className="text-center">Ammount:</Col>
                <Col>User:</Col>
                <Col></Col>
              </Row>

              {orders.map((o,i)=>{
                return(
                <div>
                  <Row>
                    <Col>
                      <Form.Control as="select">
                      {o.products.map((p,i)=>{
                        return(
                          <option>{p.name}</option>
                        )
                      })}</Form.Control>
                    </Col>
                    <Col>
                      {o.date}
                    </Col>
                    <Col className="text-center">
                      {o.value}$
                    </Col>
                    <Col>
                      {getUser(o.user_uid)}
                    </Col>
                    <Col>
                      {loadButton(o)}
                    </Col>

                  </Row>
                  <hr></hr>
                </div>
                )
              })}

            </Card.Body>
          </Card>
        </Col>

      </Row>
    </div>
  </div>
  )
}

export default Admin
