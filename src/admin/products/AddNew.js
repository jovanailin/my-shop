
import React, {useContext, useState} from "react"
import {Context} from "../../context"
import {Link, Route, BrowserRouter} from "react-router-dom"
import Sidemenu from "../Sidemenu"
import {Form, Row, Col, InputGroup, FormControl, Button, Modal, Card} from "react-bootstrap"
import axios from "axios"

function AddNew(){
  const value = useContext(Context)

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const signOut = value.signOut
  const user = value.user

  const [name,setName]=useState("")
  const [category,setCategory]=useState("")
  const [colors,setColors]=useState([])
  const [imgs,setImgs]=useState([])
  const [currentColor,setCurrentColor]=useState("")
  const [currentImage,setCurrentImage]=useState("")
  const [inStock,setInStock]=useState(0)
  const [price,setPrice]=useState(0)
  const [promotion,setPromotion]=useState(true)
  const [info,setInfo]=useState("")


  const addNewProduct = () => {
      let product = {}
      product.name = name;
      product.info = info;
      product.price = price;
      product.promotion = promotion;
      product.category = category;
      product.colors = [...colors];
      product.imgs = [...imgs];
      product.inStock = inStock;
      axios.post(`https://us-central1-my-shop-c9e0b.cloudfunctions.net/webApi/api/v1/products`,product)
      clearFrom()
    }

  const clearFrom = () => {
    setName("")
    setCategory("")
    setColors([])
    setImgs([])
    setInStock(0)
    setPrice(0)
    setPromotion(false)
    setInfo("")
    setCurrentColor("")
    setCurrentImage("")
  }

  const addName = (e) => {
    setName(e.target.value)
  }

  const addCategory = (e) => {
    setCategory(e.target.value)
  }

  const addC = (e) => {
    setCurrentColor(e.target.value)
  }
  const addColor = () => {
    let tempcolors = [...colors]
    tempcolors.push(currentColor)
    setColors(tempcolors)
  }

  const addI = (e) => {
    setCurrentImage(e.target.value)
  }

  const addImage = () => {
    let tempimages = [...imgs]
    tempimages.push(currentImage)
    setImgs(tempimages)
  }

  const addInStock = (e) => {
    setInStock(e.target.value)
  }

  const addPrice = (e) => {
    setPrice(e.target.value)
  }

  const addPromotion = (e) => {
    if(e.target.value==="true") setPromotion(true)
    if(e.target.value==="false") setPromotion(false)
  }

  const addInfo = (e) => {
    setInfo(e.target.value)
  }

  const loading = () => {
    if(!user) return <h5>loading...</h5>
  else return null
  }
  return(

      <div className="row home2">
        <div className="col col-2">
        <Sidemenu></Sidemenu>
          <Modal show={show} onHide={handleClose}>
             <Modal.Header closeButton>
               <Modal.Title>New product added!</Modal.Title>
             </Modal.Header>
             <Modal.Body>You have successfully added a new product!</Modal.Body>
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
                <h4>Add a new product:</h4>
              </Row>
            </Card.Header>

            <Card.Body>
              <Row>
              <Col>
                <Form>
                  <Form.Group>
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control onChange={addName} value={name}></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Select Category</Form.Label>
                      <Form.Control as="select" onChange={addCategory}>
                          <option>bathroom</option>
                          <option>bedroom</option>
                          <option>kitchen</option>
                          <option>office</option>
                        </Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Add a color:</Form.Label>
                    <Row>
                      <Col><Form.Control onChange={addC} value={currentColor} sm="auto"></Form.Control></Col>
                      <Col><Button onClick={addColor} xs="auto">+</Button></Col>
                    </Row>
                    <Form.Label> Colors: </Form.Label>
                    <Form.Control as="select">
                      {colors.map((color, index) => {
                       return <option>{color}</option>
                     })}

                    </Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Add img URL:</Form.Label>
                      <Row>
                        <Col><Form.Control onChange={addI} value={currentImage} sm="auto"></Form.Control></Col>
                        <Col><Button onClick={addImage} xs="auto">+</Button></Col>
                      </Row>
                    <Form.Label>Images:</Form.Label>
                    <Form.Control as="select">
                      {imgs.map((img, index) => {
                       return <option>{img}</option>
                     })}
                    </Form.Control>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>In Stock:</Form.Label>
                    <Row>
                      <Col><Form.Control onChange={addInStock} value={inStock}></Form.Control></Col>
                      <Col></Col>
                      <Col></Col>
                      <Col></Col>
                    </Row>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Pice:</Form.Label>
                    <Row>
                      <Col><Form.Control onChange={addPrice} value={price}></Form.Control></Col>
                      <Col></Col>
                      <Col></Col>
                      <Col></Col>
                    </Row>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Promotion:</Form.Label>
                    <Row>
                      <Col><Form.Control onChange={addPromotion} value={promotion} as="select">
                          <option>true</option>
                          <option>false</option>
                        </Form.Control></Col>
                      <Col></Col>
                      <Col></Col>
                      <Col></Col>
                    </Row>
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Product info:</Form.Label>
                    <Form.Control onChange={addInfo} value={info} as="textarea" rows="3" />
                  </Form.Group>
                  <Button variant="primary" onClick={()=>{addNewProduct(); handleShow()}}>
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

export default AddNew
