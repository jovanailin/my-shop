import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import NavbarMobile from "./components/NavbarMobile"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Switch,Route} from "react-router-dom"
import Home from "./components/Home"
import Default from "./components/Default"
import Shop from "./components/Shop"
import Toggle from "./components/Toggle"
import Bathroom from "./components/ProductCategory/Bathroom"
import Bedroom from "./components/ProductCategory/Bedroom"
import Kitchen from "./components/ProductCategory/Kitchen"
import Office from "./components/ProductCategory/Office"
import Login from "./components/Login"
import Details from "./components/Details"
import Cart from "./components/cart/Cart"
import Account from "./components/Account"
import Checkout from "./components/Checkout"
import AddNew from "./admin/products/AddNew"
import Inventory from "./admin/products/Inventory"
import EditProduct from "./admin/products/EditProduct"
import Orders from "./admin/Orders"
import Customers from "./admin/customers/Customers"
import Customer from "./admin/customers/Customer"
import AddNewUser from "./admin/customers/AddNewUser"




function App() {
  return (
      <React.Fragment>

        <Toggle></Toggle>
        <NavbarMobile></NavbarMobile>

          <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route exact path="/shop" component={Shop}></Route>
              <Route exact path="/shop/bathroom" component={Bathroom}></Route>
              <Route exact path="/shop/bedroom" component={Bedroom}></Route>
              <Route exact path="/shop/kitchen" component={Kitchen}></Route>
              <Route exact path="/shop/office" component={Office}></Route>
              <Route exact path="/login" component={Login}></Route>
              <Route exact path="/details" component={Details}></Route>
              <Route exact path="/cart" component={Cart}></Route>
              <Route exact path="/account" component={Account}></Route>
              <Route exact path="/addnewproduct" component={AddNew}></Route>
              <Route exact path="/inventory" component={Inventory}></Route>
              <Route exact path="/editproduct" component={EditProduct}></Route>
              <Route exact path="/checkout" component={Checkout}></Route>
              <Route exact path="/orders" component={Orders}></Route>
              <Route exact path="/customers" component={Customers}></Route>
              <Route exact path="/customer" component={Customer}></Route>
              <Route exact path="/addnewuser" component={AddNewUser}></Route>
              <Route component={Default}></Route>

            </Switch>
      </React.Fragment>
  );
}

export default App;
