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

function App() {
  return (
    //<Cashier/>
    //<ProductEdit/>
    <Product/>
  );
}

export default App;
