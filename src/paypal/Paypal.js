import React, {useState,useRef,useEffect,useContext} from "react"
import {ListGroup, ListGroupItem} from "react-bootstrap"
import {Context} from "../context"
import axios from "axios"

function Paypal(props) {
  const {total} = props
  const paypal = useRef()
  const value = useContext(Context)
  const cart = value.cart
  const setCart = value.setCart
  const user = value.user
  const orders = value.orders


 const [paidFor, setPaidFor] = useState(false);
 const [error, setError] = useState(null);
 const paypalRef = useRef();

 const addOrder = () => {


   let order = {}
   let date = new Date()
   order.products = [...cart]
   order.value = total
   order.date = formatDate(date)
   order.shipped=false
   order.delivered=false
   order.feedback=false
   order.user_uid = user.uid
   createOrder(order)
   updateUser()
 }

 const createOrder = (order) => {
     axios.post(`https://us-central1-my-shop-c9e0b.cloudfunctions.net/webApi/api/v1/orders/`,order)
 }

 const updateUser = () => {
   let number = user.orders+1
   axios.patch(`https://us-central1-my-shop-c9e0b.cloudfunctions.net/webApi/api/v1/users/${user.uid}`,{"orders":number})
 }

 const updateInStock = () => {
   let products = [...cart]
   products.forEach((item, i) => {
     let newStock = item.inStock - item.quantity
     axios.patch(`https://us-central1-my-shop-c9e0b.cloudfunctions.net/webApi/api/v1/products/${item.id}`,{"inStock":newStock})
   });

 }

 const formatDate = (date) => {

   let month = '' + (date.getMonth() + 1)
   let day = '' + date.getDate()
   let year = date.getFullYear()

 if (month.length < 2)
     month = '0' + month;
 if (day.length < 2)
     day = '0' + day;

 return [year, month, day].join('-');
 }

 useEffect(() => {
     window.paypal
         .Buttons({
             createOrder: (data, actions) => {
                 return actions.order.create({
                     purchase_units: [{
                         description: 'Laptop store checkout',
                         amount: {
                             currency_code: 'USD',
                             value: total,
                         }
                     }]
                 });
             },
             onApprove: async (data, actions) => {
                 const order = await actions.order.capture();
                 setPaidFor(true);
                 setCart([])
                 addOrder()
                 updateInStock()
                 console.log('ORDER', order);
             },
             onError: err => {
                 setError(err);
                 console.error('ERROR', err);
             },
         })
         .render(paypalRef.current);
 }, [cart]);

 if (paidFor) {
     return (
         <div className="text-center text-success">
             Thanks for making the purchase.
         </div>
     )
 }

 if (error) {
     return (
         <div className="text-center text-danger">
             Error in processing order. Please Retry again
         </div>
     )
 }



  return(
    <div ref={paypalRef} id="paypal">

    </div>
  )
}

export default Paypal
