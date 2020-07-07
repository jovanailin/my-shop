import React, {useContext, useState, useEffect} from "react"
import {Context} from "../../context"
import {Link, Route, BrowserRouter, Switch} from "react-router-dom"
import Sidemenu from "../Sidemenu"
import {Row, Col, Card, Button, Carousel, Form, Modal} from "react-bootstrap"
import axios from "axios"

function EditProduct() {
  const value = useContext(Context)
  const product = value.currentProduct
  const [imgs,setImgs] = useState(product.imgs)
  const [colors,setColors] = useState(product.colors)
  const [name,setName]=useState(product.name)
  const [info,setInfo]=useState(product.info)
  const [price,setPrice]=useState(product.price)
  const [prom,setProm]=useState(product.promotion)
  const [inStock,setInStock]=useState(product.inStock)
  const [change,setChange]=useState("")

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const EditProduct = () => {
    let obj = {}
    obj.imgs = [...imgs]
    obj.colors = [...colors]
    obj.name = name
    obj.info = info
    obj.price = price
    obj.promotion = prom
    obj.inStock = inStock
    axios.patch(`https://us-central1-my-shop-c9e0b.cloudfunctions.net/webApi/api/v1/products/${product.id}`,obj)
  }

  const deleteProduct = () => {
    axios.delete(`https://us-central1-my-shop-c9e0b.cloudfunctions.net/webApi/api/v1/products/${product.id}`)
  }

  const changeName = (e) => {
    setName(e.target.value)
  }

  const changeInfo = (e) => {
    setInfo(e.target.value)
  }

  const changePrice = (e) => {
    setPrice(e.target.value)
  }

  const changeInStock = (e) => {
    setInStock(e.target.value)
  }

  const changePromotion = (e) => {
    if(e.target.value=="true") setProm(true)
    else setProm(false)
  }

  const addColor = (e) => {
    let arr = [...colors,e.target.value]
    setColors(arr)
  }

  const addImage = (e) => {
    let arr = [...colors,e.target.value]
    setImgs(arr)
  }

  const promotion = () =>{
    if(prom) return "TRUE"
    else return "FALSE"
  }

return(
  <div className="row home2">
    <Modal show={show} onHide={handleClose}>
       <Modal.Header closeButton>
         <Modal.Title>Product updated!</Modal.Title>
       </Modal.Header>
       <Modal.Body>Product has been updated!</Modal.Body>
       <Modal.Footer>
         <Button variant="secondary" onClick={handleClose}>
           Close
         </Button>
         <Button variant="primary" onClick={handleClose}>
           Save Changes
         </Button>
       </Modal.Footer>
     </Modal>
    <div className="col col-1">
    <Sidemenu></Sidemenu>
    </div>
    <div className="col col-10">
      <Row className="m-5">
        <Col lg={4} >
          <Card>
            <Card.Header>
              <h6>Product: {product.name}</h6>
            </Card.Header>
            <Card.Body>
              <Carousel bg="dark">
                {imgs.map((img, index) => {
                 return <Carousel.Item sm="true"><img  className="d-block w-100" src={img}></img></Carousel.Item>
               })}
              </Carousel>


              <Card.Text>
                Product price: <span className="text-primary">{price}$</span>
              </Card.Text>
              <Card.Text>
                Promotion: <span className="text-primary">{promotion()}</span>
              </Card.Text>
              <Card.Text>
                Category: <span className="text-primary">{product.category}</span>
              </Card.Text>
              <Card.Text>
                In stock: <span className="text-primary">{inStock}</span>
              </Card.Text>
              <Card.Title>
                Prodcut description:
              </Card.Title>
              <Card.Text>
                {info}
              </Card.Text>
              <Button onClick={()=>{
                  setChange();
                  deleteProduct();
                  alert("Product deleted!")
                }} variant="danger">DELETE PRODUCT</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card border="primary" bg="light">
            <Card.Header>
              <Row>
                <h6>Edit product:</h6>
              </Row>
            </Card.Header>

            <Card.Body>
              <Row>
              <Col>
                <Form>
                  <Form.Group>
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control value={name} onChange={changeName}></Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Add a color:</Form.Label>
                    <Row>
                      <Col><Form.Control onChange={addColor} sm="auto"></Form.Control></Col>
                      <Col><Button xs="auto">+</Button></Col>
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
                        <Col><Form.Control onChange={addImage} sm="auto"></Form.Control></Col>
                        <Col><Button xs="auto">+</Button></Col>
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
                      <Col><Form.Control value={inStock} onChange={changeInStock}></Form.Control></Col>
                      <Col></Col>
                      <Col></Col>
                      <Col></Col>
                    </Row>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Pice:</Form.Label>
                    <Row>
                      <Col><Form.Control value={price} onChange={changePrice}></Form.Control></Col>
                      <Col></Col>
                      <Col></Col>
                      <Col></Col>
                    </Row>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Promotion:</Form.Label>
                    <Row>
                      <Col><Form.Control onChange={changePromotion} as="select">
                          <option>true</option>
                          <option>false</option>
                        </Form.Control></Col>
                      <Col></Col>
                      <Col></Col>
                      <Col></Col>
                    </Row>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Product info:</Form.Label>
                    <Form.Control value={info} onChange={changeInfo} as="textarea" rows="3" />
                  </Form.Group>
                  <Button onClick={()=>{
                      setChange();
                      EditProduct();
                      handleShow()
                    }} variant="primary">
                    Save changes
                  </Button>
                </Form>
              </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  </div>
)
}

export default EditProduct
