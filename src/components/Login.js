import React, {useState, useContext} from "react"
import {Link} from "react-router-dom"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import firebase from "../firebase"
import {Context} from "../context"
import Navbar from "./Navbar"

function Login(){
  const value = useContext(Context)
  const name = value.firstName
  const setFirstName = value.setFirstName
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [email2,setEmail2]=useState("")
  const [password2,setPassword2]=useState("")
  const [newFirstName,setNewFirstName] = useState("")
  const [newLastName,setNewLastName] = useState("")
  const [disabledForm1,setDisabledForm1] = useState("")
  const [disabledForm2,setDisabledForm2] = useState("")
  let newUser = {}

  const test = () =>{
    console.log(value.uid)
    console.log(value.createdUser)
  }

    const signUp = (e) => {
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email2, password2).then((data)=>{

        newUser.firstName = newFirstName;
        newUser.lastName = newLastName;
        newUser.email = email2;
        newUser.password = password2;
        newUser.admin=false;
        newUser.orders=0
        newUser.orders=[]
        newUser.uid=data.user.uid
        value.createUser(newUser,data.user.uid)

      }).catch((err)=>{
        console.log(err)
      })
    }


  const login = (e) => {
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password).then((res)=>{
    }).catch((err)=>{
      console.log(err)
    })
  }

  const emailLogIn = (e) => {
    if(e.target.value == "")
      setDisabledForm2("")

    if(e.target.value !== "")
      setDisabledForm2(true)

      setEmail(e.target.value)
  }

  const emailSignUp = (e) => {
    if(e.target.value == "")
      setDisabledForm1("")

    if(e.target.value !== "")
      setDisabledForm1(true)

      setEmail2(e.target.value)
  }

  const passwordLogIn = (e) => {
    if(e.target.value == "")
      setDisabledForm2("")

    if(e.target.value !== "")
      setDisabledForm2(true)

      setPassword(e.target.value)
  }

  const passwordSignUp = (e) => {
    if(e.target.value == "")
      setDisabledForm1("")

    if(e.target.value !== "")
      setDisabledForm1(true)

      setPassword2(e.target.value)
  }

  const FirstNameSignUp = (e) => {
    if(e.target.value == "")
      setDisabledForm1("")

    if(e.target.value !== "")
      setDisabledForm1(true)

      setNewFirstName(e.target.value)
  }

  const LastNameSignUp = (e) => {
    if(e.target.value == "")
      setDisabledForm1("")

    if(e.target.value !== "")
      setDisabledForm1(true)

      setNewLastName(e.target.value)
  }

  return(
    <div>
      <Navbar></Navbar>
        <div className="home">

          <div className="row login-row"></div>
          <div className="row d-flex login pt-5">
          <div className="col-1 col-md-2">

          </div>
          <div className="col-10 col-md-4">
          <div className="p-2 welcome-text login-div">

          <Form>
            <Form.Group disabled={disabledForm1}>
              <div>
                <h3 className="card-title text-center">LOG IN</h3>
                <Form.Label>Email address</Form.Label>
                  <Form.Control onChange={emailLogIn} value={email} name="name" id="email" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Enter email"></Form.Control>

              </div>
              <div>
                <Form.Label>Password</Form.Label>
                <Form.Control onChange={passwordLogIn} value={password} name="password" id="password" type="password" class="form-control" placeholder="Password"></Form.Control>
              </div>

          <Button block onClick={login}><span className="login2"><Link block to="/account" className="text-white">Log in</Link></span></Button>
          </Form.Group>

          </Form>

          </div>
          </div>

          <div className="d-block d-md-none col-1">

          </div>

          <div className="d-block d-md-none col-1">

          </div>

          <div className="col-10 col-md-4 px-xs-1">
          <div className="welcome-text p-2 login-div">

          <form id="form2">
            <fieldset disabled={disabledForm2}>
              <div class="form-group">
                  <h3 className="card-title text-center">SIGN UP</h3>
                <label>First name</label>
                  <input onChange={FirstNameSignUp} value={newFirstName} type="name" class="form-control" aria-describedby="emailHelp" placeholder="Enter email"/>

              </div>
              <div class="form-group">
                <label>Last name</label>
                  <input onChange={LastNameSignUp} value={newLastName} type="name" class="form-control" aria-describedby="emailHelp" placeholder="Enter email"/>

              </div>
              <div class="form-group">
                <label>Email address</label>
                  <input onChange={emailSignUp} value={email2} type="email" class="form-control"aria-describedby="emailHelp" placeholder="Enter email"/>

              </div>
              <div class="form-group">
                <label>Password</label>
                <input onChange={passwordSignUp} value={password2} type="password" class="form-control" placeholder="Password"/>
              </div>
              <div class="form-group">
                <label>Repeat password</label>
                  <input type="email" class="form-control" type="password" aria-describedby="emailHelp" placeholder="Enter email"/>

              </div>

              <button onClick={signUp} type="submit" class="btn btn-block btn-success">Sign up</button>
            </fieldset>

          </form>

          </div>
          </div>
          <div className="col-1 col-md-2">

          </div>
          </div>



          <div className="row background home-row"></div>
        </div>
    </div>
  )
}

export default Login
