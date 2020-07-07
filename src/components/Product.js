import React, {useContext, useEffect} from "react"
import {Context} from "../context"
import styled from "styled-components"
import {Link} from "react-router-dom"


function Product(props){
const value = useContext(Context)
const {category, colors, id, imgs, inStock, info, name, price, promotion} = props.product
const product = props.product
const index = props.key
const addToCart = value.addToCart
let currentPrice = 0

const setShow = value.setShow
const show = value.show

const handleShow = () => setShow(true);

const calculatePrice = () =>{
  if(promotion) currentPrice = price-0.2*price;
  else currentPrice = price;
}

const productDetails = () => {
  value.setCurrentProduct(product)
}

const addButton = () => {
  if(product.inStock==0) return <button disabled className="btn btn-light text-muted">Sold out</button>
  if(imgs.length>1) return <Link to="/details"><button onClick={productDetails} className="btn btn-success">Choose options</button></Link>
  else return <button onClick={()=>{addToCart(product,imgs[0],1,currentPrice); handleShow()}} className="btn btn-warning">Add to Cart</button>
}

useEffect(()=>{
  calculatePrice()
})

const oldprice = () =>{
  if(promotion) return <div><OldPrice className="px-2 price">{price}$</OldPrice><NewPrice className="price">{price-0.2*price}$</NewPrice></div>
  else return <span className="mr-1 price">{price}$</span>
}

return(
  <>

  <ProductWrapper className="col-10 col-sm-6 col-md-4 col-lg-3 my-3">
      <div className="card">

        <div className="img-container p-5 card-img-top">

            <Link to="/details"><img onClick={productDetails} src={imgs[0]} alt="product" className="img-card-top embed-responsive-item img-fluid"></img></Link>

        </div>
        <div className="card-footer">
          <p className="text-align-center mb-0 w-100">
            {name}
          </p>
          <p className="text-green font-italic mb-0">
            {oldprice()}
          </p>
          <p className="p-2">
            {addButton()}
          </p>
        </div>
      </div>
    </ProductWrapper>
    </>
)

}

const OldPrice = styled.span`
text-decoration: line-through;
`
const NewPrice = styled.span`
color: red;
`
const Button = styled.button`

`

const ProductWrapper = styled.div`
.card{
  transition: all 1s linear;
  &:hover {
    .card{
      border: 0.04rem solid rgba(0,0,0,0.2);
      box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer {
      background: rgba(247,247,247);
    }
  }
  p{
    text-align: center;
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .img-card-top {
    transition: all 0.3s linear;
  }
  .img-container:hover .img-card-top {
    transform: scale(1.2);
  }
  .img-container:hover .cart-btn {
    transform: translate(0,0);
  }
}
`

export default Product
