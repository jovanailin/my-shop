import React, {useContext,useState} from "react"
import {Context} from "../context"
import {Link} from "react-router-dom"
import styled from "styled-components"
import CartModal from "./cart/CartModal"
import Navbar from "./Navbar"

function Details() {
  const value = useContext(Context)
  const addToCart = value.addToCart
  const [quantity,setQuantity] = useState(1)
  const product = value.currentProduct
  let currentPrice = 0
  const [img,setImg] = useState(product.imgs[0])
  const setShow = value.setShow
  const show = value.show

  const handleShow = () => setShow(true);

  const addButton = () => {
    if(product.inStock==0) return <button disabled className="btn btn-light text-muted">Sold out</button>
    else return <button onClick={()=>{addToCart(product,img,quantity,currentPrice); handleShow()}} className="backToProducts btn bg-warning">Add to Cart</button>
  }

  const changeColor = (i) =>{
    setImg(product.imgs[i])
    console.log(img)
  }

  const increase = () =>{
    let q = quantity
    if(product.inStock>0) setQuantity(q+1)
    else console.log("out of stock!")
  }

  const decrease = () =>{
    let q = quantity
    if(quantity>0) setQuantity(q-1)
  }

  const getPrice = () =>{
    if(product.promotion) currentPrice = product.price  - 0.2*product.price;
    else currentPrice = product.price;
    return currentPrice;
  }
  const showPrice = () =>{
    if(product.promotion) return <div><OldPrice className="mt-2 mr-2 price2">{product.price}$</OldPrice><NewPrice className="mt-2 price2">{getPrice()}$</NewPrice></div>
    else return <div className="mt-2 price2">{getPrice()}$</div>
  }
  return (
        <div>
          <Navbar></Navbar>
          <div className="container py-5">
          <hr></hr>
          <CartModal product={product}></CartModal>
          <div className="shopic my-5 py-5 shop-bg"></div>

            <div className="row">
              <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                <h1>{product.name}</h1>
              </div>
            </div>

            <div className="row">
              <div className="col-10 mx-auto col-md-4 my-3">
                <img src={img} className="img-fluid" alt="" />
                <div className="card mt-5">
                  <div className="d-flex justify-content-around"> <span className="pl-2 my-auto">Colors:</span>
                  {
                    product.colors.map((color, index)=>{
                      return <span><button onClick={(e)=>changeColor(index,e)} className="colorButton my-auto" style={{background: color}}></button></span>
                    })
                  }
              </div>
                </div>

              </div>

              <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                <h4 className="text-blue">
                  <strong>
                    price :
                  <span className="m-2">{showPrice()}</span>
                  </strong>
                </h4>
                <div class="input-group mb-3 col-xs-2">
                  <div class="input-group-prepend">
                    <span class="input-group-text mr-2" id="basic-addon1">quantity:</span>
                  </div>
                  <button onClick={()=>{decrease()}} className="btn btn-sm btn-secondary btnQ mr-2">-</button><span>{quantity}</span><button onClick={()=>{increase()}} className="ml-2 btn btn-sm btn-secondary btnQ">+</button>
                 </div>

                <p className="text-capitalize font-weight-bold mt-3 mb-0">
                  some info about product :
                </p>
                <p className="text-muted lead">{product.info}</p>
                {/* buttons */}
                <div className="mb-2">
                  <Link to="/shop">
                    <button className="backToProducts btn bg-success">Back to Products</button>
                  </Link>
                </div>
                <div>
                  {addButton()}
                </div>
              </div>
            </div>
          </div>
        </div>
       );

}
const OldPrice = styled.span`
text-decoration: line-through;
`
const NewPrice = styled.span`
color: red;`

export default Details
