
import React, {useContext, useState} from "react"
import {Context} from "../../context"
import {Link, Route, BrowserRouter} from "react-router-dom"
import Sidemenu from "../Sidemenu"
import {Form, Row, Col, InputGroup, FormControl, Button, Modal, Card} from "react-bootstrap"
import axios from "axios"
import firebase from "../../firebase"






function AddNewUser(){

  const functions = firebase.functions()
  const createNewUser = firebase.functions().httpsCallable('createNewUser');

  const value = useContext(Context)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [admin,setAdmin]=useState(false)

  const user = value.user

  const addFirstName = (e) => {
    setFirstName(e.target.value)
  }

  const addLastName = (e) => {
    setLastName(e.target.value)
  }

  const addEmail = (e) => {
    setEmail(e.target.value)
  }

  const addPassword = (e) => {
    setPassword(e.target.value)
  }

  const addAdmin = (e) => {
    if(e.target.value=="true") setAdmin(true)
    else setAdmin(false)
  }

  const signUp = () => {
    let newUser = {}
    newUser.email = email
    newUser.password = password
    newUser.firstName = firstName
    newUser.lastName = lastName
    newUser.orders=0
    newUser.admin = admin
    createNewUser(newUser).then(result =>{
      console.log("ovo je rezultat", result)
    })
    handleShow()
  }



  return(

      <div className="row home2">
        <div className="col col-2">
        <Sidemenu></Sidemenu>
          <Modal show={show} onHide={handleClose}>
             <Modal.Header closeButton>
               <Modal.Title>New user added!</Modal.Title>
             </Modal.Header>
             <Modal.Body>You have successfully added a new user!</Modal.Body>
             <Modal.Footer>
               <Button variant="secondary" onClick={handleClose}>
                 Close
               </Button>
               <Button variant="primary" onClick={handleClose}>
                 Save Changes
               </Button>
             </Modal.Footer>
           </Modal>
        </div>
        <div className="col col-4 m-5">
          <Card border="primary" bg="light">
            <Card.Header>
              <Row>
                <h4>Add a new user:</h4>
              </Row>
            </Card.Header>

            <Card.Body>
              <Row>
              <Col>
                <Form>
                  <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control onChange={addFirstName} value={firstName}></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control onChange={addLastName} value={lastName}></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" onChange={addEmail} value={email}></Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={addPassword} value={password}></Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Make Admin</Form.Label>
                    <Form.Control as="select"onChange={addAdmin} value={admin}>
                      <option>false</option>
                      <option>true</option>
                    </Form.Control>
                  </Form.Group>


                  <Button variant="primary" onClick={signUp}>
                    Submit
                  </Button>
                </Form>
              </Col>
              </Row>
            </Card.Body>
          </Card>
        </div>
      </div>


  )
}

export default AddNewUser
