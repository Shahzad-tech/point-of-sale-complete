import './ProductMain.css';
import './ViewCashier.css';
import {Table,Row,Col,InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';
import { IoMdSearch } from "react-icons/io";
import React, { useState, useEffect } from 'react';
import {NavbarCustom} from './Navbar.js';
import { Link } from 'react-router-dom';
import axios from 'axios';

function ViewCashier(){

  const[cashier, setCashier] = useState([]);

  useEffect(() => {
    getCashierList();
  },[]);

  const getCashierList = () => {
    axios.get('http://localhost:5000/cashiers').then((response) => {
      const data = response.data;
      setCashier(data);
      console.log(data);
    }).catch(() => {
      console.log('unable to receive data')
    });
  }

  return(
    <div>
      <NavbarCustom title="Cashier Registration" dd1="Dashboard" dd1Route="dashboard" dd2="POS" dd2Route="pos" dd3="Merchandise Management" dd3Route="merchandise" dd4="Customer Details" dd4Route="customer" dd5="Sales Analysis" dd5Route="sales"/>
      <br/>
      <p>{cashier.error}</p>
      <Row className="container-fluid">
        <Col sm="7">
          <InputGroup placeholder="he">
            <InputGroupAddon addonType="prepend">
              <InputGroupText><IoMdSearch size={24}/></InputGroupText>
            </InputGroupAddon>
              <Input placeholder="Search Cashier"/>
          </InputGroup>
          <br/>
          <InputGroup></InputGroup>
        </Col>
          <Col sm="5" className="topcolumn">
            <Link to="/admin/cashier/addcashier">
              <Button as="input" type="submit" style={{ color:"white", float:'right', backgroundColor:'rgb(113, 85, 170)', borderRadius:'22px', fontSize:'20px', fontFamily:'Verdana'}} >Add New Cashier</Button>
            </Link>
          </Col>
      </Row>
            <div className="container-fluid">
              <Row>
                <Col sm="12">
                  <Table hover>
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Counter No</th>
                        <th>Contact</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td scope="row"></td>
                        <td>Ali</td>
                        <td>2</td>
                        <td>090078601</td>
                      </tr>
                      <tr>
                        <td scope="row"></td>
                        <td>Arsalan</td>
                        <td>1</td>
                        <td>090078601</td>
                      </tr>
                      <tr>
                        <td scope="row"></td>
                        <td>Muhammad Ali</td>
                        <td>4</td>
                        <td>090078601</td>
                      </tr>
                      <tr>
                        <td scope="row"></td>
                        <td>Zain</td>
                        <td>1</td>
                        <td>090078601</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </div>
    </div>
  )
}

export default ViewCashier