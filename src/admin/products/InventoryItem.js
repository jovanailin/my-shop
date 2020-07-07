import React, {useContext, useState} from "react"
import {Context} from "../../context"
import {Row, Col, Card, Image, Form, Button} from "react-bootstrap"
import {Link} from "react-router-dom"
import axios from "axios"


function InventoryItem(props){
  const value = useContext(Context)
  const product = props.product
  const img = product.imgs[0]
  const name = product.name
  const length = product.imgs.length
  const [inStock,setInStock] = useState(product.inStock)
  const id = product.id

  const [newQuantity,setNewQuantity] = useState(0)

  const addNewQuantity = (e) =>{
    setNewQuantity(e.target.value)
  }

  const options = () => {
    if(length>1) return "YES"
    else return <span className="text-danger">NO</span>
  }

  const updateProduct = async (id) => {
    setInStock(newQuantity)
    product.inStock = newQuantity
    await axios.patch(`https://us-central1-my-shop-c9e0b.cloudfunctions.net/webApi/api/v1/products/${id}`,product)
  }

  return(
    <Row>
      <Col>
        <Row>
          <Col>
            <Image src={img} fluid></Image>
          </Col>
          <Col className="my-auto">
            <Link onClick={()=>{value.setCurrentProduct(product)}} to="/editproduct">{name}</Link>
          </Col>
        </Row>
      </Col>

      <Col className="my-auto text-center">
        {options()}
      </Col>

      <Col className="my-auto text-center">
        {inStock}
      </Col>

      <Col className="my-auto text-center">
        <Row>
          <Col className="p-0 m-0">
            <Form.Control onChange={addNewQuantity} value={newQuantity} ></Form.Control>
          </Col>
          <Col className="p-0 m-0">
            <Button onClick={()=>{updateProduct(id)}}>Save</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default InventoryItem
