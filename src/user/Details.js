import React, {useContext,useState,useEffect} from "react"
import {Context} from "../context"
import {Link} from "react-router-dom"
import Navbar from "../components/Navbar"
import {Row,Col,Card,Button,Form,Modal} from "react-bootstrap"
import axios from "axios"
import Render from "./Render"
function Details(props){
  const value = useContext(Context)
  const orders = value.orders
  const user = value.user
  const [change,setChange]=useState("")
  const number = props.number


  return(

  <div className="containter-fluid home2">
    <Card>
      <Row>
        <Col className="text-center">
          Products:
        </Col>
        <Col className="text-center">
          Date:
        </Col>
        <Col className="text-center">
          Status:
        </Col>
        <Col className="text-center">
          Ammount:
        </Col>
        <Col className="text-center">Action:</Col>
      </Row>
      {
        orders.map((order,index)=>{

          if(order.user_uid==user.uid)
          if(number==0)
          return(<Render order={order}></Render>)

          if(order.user_uid==user.uid)
          if(number==1) if(!order.shipped)
          return(<Render order={order}></Render>)

          if(order.user_uid==user.uid)
          if(number==2) if(order.shipped && !order.delivered)
          return(<Render order={order}></Render>)

          if(order.user_uid==user.uid)
          if(number==3) if(order.delivered)
          return(<Render order={order}></Render>)

        })
      }

    </Card>
  </div>
)
}

export default Details
