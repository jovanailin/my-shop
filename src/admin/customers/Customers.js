import React, {useContext, useState, useEffect} from "react"
import {Context} from "../../context"
import {Link, Route, BrowserRouter, Switch} from "react-router-dom"
import Sidemenu from "../Sidemenu"
import {Card, Row, Col, Form, Button, Table} from "react-bootstrap"
import CustomerDetails from "./CustomerDetails"
import axios from "axios"

function Customers(){
  const value = useContext(Context)
  const name = value.firstName
  const signOut = value.signOut
  const user = value.user
  const products = value.products
  const [users,setUsers] = useState(value.allUsers)
  const [changedUsers,setChangedUsers]=useState([])
  const [change,setChange]=useState("")

  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  useEffect(() => {
    setFilteredUsers(
      users.filter(u =>
        u.firstName.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, users]);

  const callBack = (u) => {
    let arr = [...changedUsers,u]
    setChangedUsers(arr)
  }

  const save = () => {
    changedUsers.forEach((item, i) => {
      axios.patch(`https://us-central1-my-shop-c9e0b.cloudfunctions.net/webApi/api/v1/users/${item.uid}`,item)
    });

  }

  const deleteFromUsers = (i) =>{
    let arr = [...users]
    arr.splice(i,1)
    setUsers(arr)
    setChange()
  }


  return(
  <div className="row home2">
    <div className="col col-1">
    <Sidemenu></Sidemenu>
    </div>
    <div className="col col-10">
      <Card className="m-5">
        <Card.Header>
        <Row>
          <Col>
            Customers  <Button onClick={()=>{
              setChange();
              save();
              alert("admin added!")
            }}>Save changes</Button>
          </Col>

          Search by name:
          <Col>
            <Form.Control onChange={e => setSearch(e.target.value)}></Form.Control>
          </Col>
        </Row>
        </Card.Header>

        <Card.Body>

          <Row className="mb-4">
            <Col className="text-center">
              Name
            </Col>
            <Col className="text-center">
              Status
            </Col>
            <Col className="text-center">
              Number of Orders
            </Col>
            <Col className="text-center">
              Make Admin
            </Col>

            <Col className="text-center">
              Remove user
            </Col>

          </Row>

          <hr></hr>

            {filteredUsers.map((u, index) => {
             return <CustomerDetails callBack={callBack} user={u} index={index} deleteFromUsers={deleteFromUsers}></CustomerDetails>
           })}

        </Card.Body>
      </Card>

    </div>
  </div>
  )
}

export default Customers
