import React, {useContext, useState, useEffect} from "react"
import {BrowserRouter as Router} from "react-router-dom"
import axios from "axios"
import firebase from "./firebase"
import { auth } from './firebase';

const Context = React.createContext()


function ProductProvider(props){
const [navbarCollapsed,setNavbarCollapsed]=useState(true)
const [products, setProducts] = useState([])
const [productsAll, setProductsAll] = useState([])
const [bathroom, setBathroom] = useState([])
const [bedroom, setBedroom] = useState([])
const [office, setOffice] = useState([])
const [kitchen, setKitchen] = useState([])
const [chosenCat, setChosenCat] = useState("all")
const [firstName,setFirstName]= useState("")
const [orders,setOrders] = useState([])
const [currentCustomer,setCurrentCustomer]=useState({})

const [allUsers,setAllUsers]=useState([])

const [total,setTotal]=useState(0)

const [cart,setCart] = useState([])
const [show, setShow] = useState(false)

const[loggedIn,setLoggedIn] = useState(false)
const[currentProduct,setCurrentProduct] = useState({})

const [user,setUser]=useState({})
const [createdUser,setCreatedUser]=useState({})
const [uid,setUid]=useState("uid")

const [addNew, setAddNew] = useState(false)

const [loading,setLoading] = useState(false)

const [isCheckout,setIsCheckout] = useState(false)


useEffect(()=>{
authListener()
},[])

useEffect(()=>{
  loadProducts()
  loadUsers()
  getOrders()
},[])




const removeFromCart = (i) => {
  let c = [...cart]
  c.splice(i,1)
  setCart(c)

}


const addToCart = (p,i,q,c) => {
  let product = {...p}
  product.img = i;
  product.quantity = q;
  product.currentPrice = c;
  product.total=0
  let cartProducts = [...cart,product]
  setCart(cartProducts)
  setCurrentProduct(product)
}

const getOrders = async () => {

  const result = await axios.get("https://us-central1-my-shop-c9e0b.cloudfunctions.net/webApi/api/v1/orders");

  let temporders = []
  result.data.forEach((item, i) => {

    temporders = [...temporders,item]

  });
  setOrders(temporders)
  console.log(orders)
}


const createUser = (u,i) => {

  axios.post(`https://us-central1-my-shop-c9e0b.cloudfunctions.net/webApi/api/v1/users/${i}`,u)

}

const authListener = () => {
  firebase.auth().onAuthStateChanged((u)=>{
    if(u!=null) {
      setLoggedIn(true)
      loadUser(u.uid)

    }
    console.log("IF U",u)
  })
}

const loadUser = async (uid) => {
setLoading(true)
  const result = await axios.get(`https://us-central1-my-shop-c9e0b.cloudfunctions.net/webApi/api/v1/users/${uid}`)
setLoading(false)
  let obj = result.data
  obj.uid = uid

  setFirstName(result.data.firstName)
  setUser(obj)
  console.log(result.data)
}

const signOut = () => {
  firebase.auth().signOut()
  setLoggedIn(false)
  setUser(null)
  }

const loadProducts = async () => {

  const result = await axios.get("https://us-central1-my-shop-c9e0b.cloudfunctions.net/webApi/api/v1/products");

  let tempproducts = []
  let tempbath = []
  let tempbed = []
  let tempkitchen = []
  let tempoffice = []
  result.data.forEach((item, i) => {

    tempproducts = [...tempproducts,item]
    if(item.category=="bathroom") tempbath=[...tempbath,item]
    if(item.category=="bedroom") tempbed=[...tempbed,item]
    if(item.category=="kitchen") tempkitchen=[...tempkitchen,item]
    if(item.category=="office") tempoffice =[...tempoffice,item]
  });

  setProducts(tempproducts)
  setProductsAll(tempproducts)
  setBedroom(tempbed)
  setBathroom(tempbath)
  setOffice(tempoffice)
  setKitchen(tempkitchen)
}

const loadUsers = async () => {

  const result = await axios.get("https://us-central1-my-shop-c9e0b.cloudfunctions.net/webApi/api/v1/users");

  let tempusers = []

    result.data.forEach((item, i) => {

    if(item.admin==false)  tempusers = [...tempusers,item]

  });

  setAllUsers(tempusers)


}

const chooseCat = (cat) => {

}

const toggle = () => {
  navbarCollapsed ? setNavbarCollapsed(false) : setNavbarCollapsed(true)
}
  return(
    <Context.Provider value={{
      navbarCollapsed: navbarCollapsed,
      toggle: toggle,
      products: products,
      bedroom: bedroom,
      bathroom: bathroom,
      kitchen: kitchen,
      office: office,
      chooseCat: chooseCat,
      chosenCat: chosenCat,
      user: user,
      loadUser: loadUser,
      firstName: firstName,
      setFirstName: setFirstName,
      createUser: createUser,
      loggedIn: loggedIn,
      currentProduct: currentProduct,
      setCurrentProduct: setCurrentProduct,
      cart: cart,
      addToCart: addToCart,
      show: show,
      setShow: setShow,
      removeFromCart: removeFromCart,
      signOut: signOut,
      total: total,
      setTotal: setTotal,
      setAddNew: setAddNew,
      loading: loading,
      setCart: setCart,
      allUsers: allUsers,
      orders: orders,
      currentCustomer: currentCustomer,
      setCurrentCustomer: setCurrentCustomer
    }}>
      {props.children}
    </Context.Provider>
  )
}

const ProductConsumer = Context.Consumer;
export {ProductProvider, ProductConsumer, Context}
