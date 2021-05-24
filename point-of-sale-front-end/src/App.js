import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Dashboard from './DashboardAdmin.js';
import AddProduct from './Addproduct.js';
import ProductEdit from './ProductEditDelete.js';
import Cashier from './Cashier.js';
import Product from './ProductMain.js';
import AddCashier from "./AddCashier.js";
import AddCategory from "./AddCategory.js";
import ViewCashier from "./ViewCashier.js";
import SalesAnalysis from "./Reports.js";
import CustomerInfo from "./CustomerInfo.js";
import NavbarCustom from "./Navbar.js";
import Main from "./MainAppScreen.js";
import Axios from "axios";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  // Axios({
  //   method: "GET",
  //   url: "http://localhost:5000/",
  //   headers: {
  //     "Content-Type": "application/json"
  //   }
  // }).then(res => {
  //   console.log(res.data);
  // });

  return (
    <Router>
      {/* <img top width="100%" src='./bg3.jfif' alt="Card image cap" /> */}
      <Switch>
        <Route path="/" exact component={Main}/>
        <Route path="/admin/dashboard" exact component={Dashboard}/>
        <Route path="/admin/sales" exact component={SalesAnalysis}/>
        <Route path="/admin/merchandise" exact component={Product}/>
        <Route path="/admin/merchandise/addproduct" exact component={AddProduct}/>
        <Route path="/admin/merchandise/addcategory" exact component={AddCategory}/>
        <Route path="/admin/customer" exact component={CustomerInfo}/>
        <Route path="/admin/pos" exact component={Cashier}/>
        <Route path="/admin/cashier" exact component={ViewCashier}/>
        <Route path="/admin/cashier/addcashier" exact component={AddCashier}/>
        <Route path="/pos" exact component={Cashier}/>
      </Switch>
    </Router>

    //<ProductEdit/>
    //<NavbarCustom/>
    
    
  );
}

export default App;
