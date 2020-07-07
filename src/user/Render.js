import React, {useContext,useState,useEffect} from "react"
import {Context} from "../context"
import {Link} from "react-router-dom"
import Navbar from "../components/Navbar"
import {Row,Col,Card,Button,Form,Modal} from "react-bootstrap"
import axios from "axios"

function Render(props){
  const order = props.order
  const [change,setChange]=useState("")
  const [feedback,setFeedback]=useState("")
  const orderStatus = (order) => {
    if(order.shipped && !order.delivered) return "shipped"
    if(order.delivered) return "delivered"
    if(order.feedback) return "completed"
    else return "awaiting shipment"
  }

  const loadButton = (order) => {
    if(order.shipped && !order.delivered) return (<Button onClick={()=>{ setChange(); saveChanges(order)}}>mark delivered</Button>)
    if(order.delivered) return (<Button disabled onClick={()=>{
    }}>order completed</Button>)
    else return (<Button disabled>awaiting shipment</Button>)
  }


    const saveChanges = (o) => {
      console.log(o.id)
      o.delivered = true;
      axios.patch(`https://us-central1-my-shop-c9e0b.cloudfunctions.net/webApi/api/v1/orders/${o.id}`,{"delivered":true})
      alert("order delivered!")
    }




  return(<Row className="p-1">
    <Col>

      <Form.Control as="select">
        {order.products.map((product,ind)=>{
        return(<option className="text-center" >{product.name}</option>)
      })}
    </Form.Control>

    </Col>
    <Col className="text-center">
      {order.date}
    </Col>
    <Col className="text-center">
      {orderStatus(order)}
    </Col>
    <Col className="text-center text-danger">
      {order.value}$
    </Col>
    <Col className="text-center text-danger">
      {loadButton(order)}
    </Col>
  </Row>)
}

export default Render
