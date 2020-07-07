import React, {useContext,useState,useEffect} from "react"
import {Context} from "../context"
import {Link} from "react-router-dom"
import Navbar from "../components/Navbar"
import {Row,Col,Card,Button,Form,Modal} from "react-bootstrap"
import axios from "axios"
import Feedback from "./Feedback"
import Details from "./Details"

function User(){
  const value = useContext(Context)
  const name = value.firstName
  const signOut = value.signOut
  const user = value.user
  const orders = value.orders
  const [number,setNumber]=useState(0)

  const shipping = () => {
    let n = 0
    orders.forEach((item, i) => {
      if(item.user_uid==user.uid) if(item.shipped==false) n=n+1
    });
    return n
  }

  const delivery = () => {
    let n = 0
    orders.forEach((item, i) => {
      if(item.user_uid==user.uid) if(item.shipped==true && !item.delivered) n=n+1
    });
    return n
  }

  const feedback = () => {
    let n = 0
    orders.forEach((item, i) => {
      if(item.user_uid==user.uid) if(item.delivered==true) n=n+1
    });
    return n
  }

  const allOrders = () => {
    let n = 0
    orders.forEach((item, i) => {
      if(item.user_uid==user.uid) n=n+1
    });
    return n

  }

  return(

    <div>
      <Navbar></Navbar>

        <div className="container-fluid home2">


            <Row >
              <Col></Col>
              <Col md={10}>
                <Card className="m-3">
                  <Card.Title className="p-2">
                    <span>{user.firstName}</span>
                    <span className="px-1">{user.lastName}</span>
                  </Card.Title>
                  <Card.Title className="p-2">
                    <Link to="/"><Button variant="danger" onClick={signOut}>Sign out</Button></Link>

                  </Card.Title>
                  <hr></hr>
                  <Card.Body>

                    <Row>
                      <Col className="text-center">All orders</Col>
                      <Col className="text-center">Awaiting shipment</Col>
                      <Col className="text-center">Awaiting Delivery</Col>
                      <Col className="text-center">Completed Orders</Col>
                    </Row>

                    <Row>
                      <Col className="text-center">

                          <Button className="w-25" onClick={()=>{
                              setNumber(0)
                          }}>{allOrders()}</Button>

                      </Col>
                      <Col className="text-center">

                          <Button onClick={()=>{
                              setNumber(1)
                            }} className="w-25">{shipping()}</Button>

                      </Col>
                      <Col className="text-center">

                          <Button onClick={()=>{
                              setNumber(2)
                            }} className="w-25">{delivery()}</Button>

                      </Col>
                      <Col className="text-center">

                          <Button onClick={()=>{
                              setNumber(3)
                          }} className="w-25">{feedback()}</Button>

                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
              <Col></Col>
            </Row>

            <Row>
              <Col></Col>
              <Col md={10}>
                <Details number={number}></Details>
              </Col>
              <Col></Col>
            </Row>

        </div>
    </div>

  )
}

export default User
