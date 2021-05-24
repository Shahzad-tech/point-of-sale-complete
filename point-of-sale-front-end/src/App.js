import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Lock, People } from 'react-bootstrap-icons';
import {Row, Col, Container, Button} from 'react-bootstrap';
import Dashboard from './DashboardAdmin.js';
import AddProduct from './Addproduct.js';
import ProductEdit from './ProductEditDelete.js';
import Cashier from './Cashier.js';
import Product from './ProductMain.js';
import AddCashier from "./AddCashier.js";
import AddCategory from "./AddCategory.js";
import ViewCashier from "./ViewCashier.js";
import ReportAnalysis from "./Reports.js";
import CustomerInfo from "./CustomerInfo.js";
import NavbarCustom from "./Navbar.js";
import Main from "./MainAppScreen.js";
import Axios from "axios";

function App() {
  Axios({
    method: "GET",
    url: "http://localhost:5000/",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => {
    console.log(res.data);
  });
  
  return (
    //<Cashier/>
    //<ProductEdit/>
    //<Product/>
    //<AddCashier/>
    //<AddProduct/>
    //<ViewCashier/>
    //<ReportAnalysis/>
    //<Dashboard/>
    //<CustomerInfo/>
    //<NavbarCustom/>
    //<AddCategory/>
    <Main/>
  );
}

export default App;
