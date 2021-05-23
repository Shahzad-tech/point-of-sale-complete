import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Lock, People } from 'react-bootstrap-icons';
import {Row, Col, Container, Button} from 'react-bootstrap';
import Dashboard from './DasboardAdmin.js';
import AddProduct from './Addproduct.js';
import ProductEdit from './ProductEditDelete';
import Cashier from './cashier.js';
import Product from './productmain';
import AddCashier from "./AddCashier.js";
import AddCategory from "./AddCategory.js";
import ViewCashier from "./ViewCashiers.js";
import ReportAnalysis from "./Reports.js";
import CustomerInfo from "./CustomerInfo.js";
import NavbarCustom from "./Navbar.js";

function App() {
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
    <NavbarCustom/>
  );
}

export default App;
