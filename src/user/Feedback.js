import React, {useContext,useState,useEffect} from "react"
import {Context} from "../context"
import {Link} from "react-router-dom"
import Navbar from "../components/Navbar"
import {Row,Col,Card,Button,Form} from "react-bootstrap"
import axios from "axios"

function Feedback(props) {
const feedback = props.feedback
return(
  <Row>
    <ul>
      {feedback.map((f,i)=>{
        return <li>f</li>
      })}
    </ul>
  </Row>
)



}

export default Feedback
