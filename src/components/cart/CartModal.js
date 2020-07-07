import React, {useContext, useState} from "react"
import {Context} from "../../context"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Link} from "react-router-dom"

function CartModal(props) {
  const value = useContext(Context)
  const product = props.product
  const setShow = value.setShow
  const show = value.show

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  if(product.imgs==undefined) return <></>
  else return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Item added to cart!</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className="card">

          <div className="card-top-img">
            <img src={product.img} className="img-fluid"></img>
          </div>

          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            <Link className="text-light" to="/cart">Go to Cart</Link>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CartModal
