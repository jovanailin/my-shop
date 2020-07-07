import React, {useContext, useState, useEffect} from "react"
import {Context} from "../../context"
import {Link, Route, BrowserRouter, Switch} from "react-router-dom"
import Sidemenu from "../Sidemenu"
import InventoryItem from "./InventoryItem"
import {Card, Row, Col, Form} from "react-bootstrap"
import Pagination from "./Pagination"
import ReactPaginate from 'react-paginate';

function Inventory(){
  const value = useContext(Context)
  const name = value.firstName
  const signOut = value.signOut
  const user = value.user
  const products = value.products

  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(
      products.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, products]);



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
            Inventory
          </Col>
          Search by name:
          <Col>
            <Form.Control onChange={e => setSearch(e.target.value)}></Form.Control>
          </Col>
        </Row>
        </Card.Header>

        <Card.Body>

          <Row>
            <Col className="text-center">
              Product
            </Col>
            <Col className="text-center">
              Options
            </Col>
            <Col className="text-center">
              Available
            </Col>
            <Col className="text-center">
              Edit quantity:
            </Col>
          </Row>

            {filteredProducts.map((product, index) => {
             return <InventoryItem product={product}></InventoryItem>
           })}

        </Card.Body>
      </Card>

    </div>
  </div>
  )
}

export default Inventory
