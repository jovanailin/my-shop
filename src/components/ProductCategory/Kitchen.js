import React, {useContext,useState,useEffect} from "react"
import {Context} from "../../context"
import Product from "../Product"
import styled from "styled-components"
import {Link} from "react-router-dom"
import CartModal from "../cart/CartModal"
import Navbar from "../Navbar"
import {Form, Pagination} from "react-bootstrap"

function Kitchen(){
  const value = useContext(Context)
  const [products,setProducts] = useState(value.kitchen)
  const product = value.currentProduct

  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setFilteredProducts(
      products.filter(product =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, products]);

  const byLowest = () => {
    let prod = [...products]
    prod.sort((a,b)=>{
      return a.price - b.price
    })

    setProducts(prod)
  }

  const byHighest = () => {
    let prod = [...products]
    prod.sort((a,b)=>{
      return b.price - a.price
    })

    setProducts(prod)
  }

  return(
  <div>
    <Navbar></Navbar>
      <div className="container">
        <CartModal product={product}></CartModal>
        <hr></hr>
        <div className="shopic my-5 py-5 shop-bg"></div>
        <div className="shopic my-5"> SHOP </div>

        <nav className="container">
          <ul className="navbar nav-list linkic d-flex justify-content-around">
            <li className="category">
              <Link className="linkic" to="/shop">
                All
              </Link>
              </li>
            <li className="category">
              <Link className="linkic" to="/shop/bathroom">
                Bathroom
              </Link>
            </li>
            <li className="category">
              <Link className="linkic" to="/shop/bedroom">
                Bedroom
              </Link>
            </li>
            <li className="category">
              <Link className="linkic" to="/shop/kitchen">
                Kitchen
              </Link>
            </li>
            <li className="category">
              <Link className="linkic" to="/shop/office">
                Home/Office
              </Link>
            </li>
          </ul>
        </nav>
        <hr></hr>
        <div className="d-flex">
          <div className="sort-div"> <span className="sort-span">Sort by price: </span></div>
          <button className="btn btn-info p-2 m-2" onClick={byLowest}>from lowest</button>
          <button className="btn btn-info p-2 m-2" onClick={byHighest}>from highest</button>
            <span className="px-2 my-auto">Search by name:</span>
            <Form.Control onChange={e => setSearch(e.target.value)} className="w-25 my-auto"></Form.Control>
        </div>
        <div className="row">

          {filteredProducts.map((product, index) => {
           return <Product product={product} key={index}></Product>
         })}

        </div>

     </div>
  </div>
  )
}

const Menu = styled.div`

`

export default Kitchen
