import React, {useContext} from "react"
import {Context} from "../context"
import Form from "./Form"
import Navbar from "./Navbar"
import Paypal from "../paypal/Paypal"
import {Row, Col, Card, ListGroup,ListGroupItem} from "react-bootstrap"

function Checkout(){
  const value = useContext(Context)
  const total = value.total
  const cart = value.cart
  return(
    <div>
      <Navbar></Navbar>
      <div className="container-fluid home2">

        <Row >
          <Col></Col>
          <Col md={6}>
            <Card className="colCheckout mt-5">
              <Card.Title className="text-center">
                Order Summary
              </Card.Title>
              <Card.Subtitle className="text-center">
                There are {cart.length} items in the cart
              </Card.Subtitle>
              <Card.Body>
                <Card.Text className="checkout-text text-center">
                  <ListGroup>

                      {cart.map((item,index)=>{
                          return(<ListGroupItem>
                            <span className="pr-3">{item.name}</span>
                            <span className="pr-3">-</span>
                            <span className="pr-3">{item.quantity}</span>
                            <span className="pr-3">-</span>
                            <span className="pr-3 text-primary">{item.total}$</span>


                          </ListGroupItem>)
                      })}

                  </ListGroup>
                </Card.Text>
                <Card.Text className="text-center">Total: {total}$</Card.Text>
                <Card.Footer>
                  <Paypal total={total}></Paypal>
                </Card.Footer>
              </Card.Body>
            </Card>
          </Col>
          <Col></Col>
        </Row>

      </div>
    </div>
  )
}

export default Checkout
