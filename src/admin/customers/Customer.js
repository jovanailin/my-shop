import React, {useContext, useState} from "react"
import {Context} from "../../context"
import {Row, Col, Card, Image, Form, Button, Table} from "react-bootstrap"
import {Link} from "react-router-dom"
import axios from "axios"
import Sidemenu from "../Sidemenu"

function Customer(props){
const value=useContext(Context)
const customer=value.currentCustomer
const orders=value.orders

return(
  <div className="row home2">
    <div className="col col-1">
    <Sidemenu></Sidemenu>
    </div>
    <div className="col col-10">
      <Card className="m-5 light">
        <Card.Title className="p-2">
          Customer: {customer.firstName + " " + customer.lastName}

        </Card.Title>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Order Id:</th>
                <th>Date:</th>
                <th>Amount:</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((o,i)=>{

                if(o.user_uid==customer.uid) return(
                  <tr>
                    <td>
                      #
                    </td>
                    <td>
                      {o.id}
                    </td>
                    <td>
                      {o.date}
                    </td>
                    <td>
                      {o.value}$
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        </Card.Body>
      </Card>

    </div>
  </div>
)

}

export default Customer
