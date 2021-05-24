import Button from '@material-ui/core/Button';
import {Table,Row,Col,InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import './ProductMain.css';
import React, { useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import NavbarCustom from './Navbar.js';
import { Link } from 'react-router-dom';


function Product(){
  return(
    <div >
      <NavbarCustom title="Merchandise Management" dd1="Dashboard" dd1Route="dashboard" dd2="POS" dd2Route="pos" dd3="Cashier Registration" dd3Route="cashier" dd4="Customer Details" dd4Router="customer" dd5="Sales Analysis" dd5Route="sales"/>
      <Tabs defaultActiveKey="Product" transition={false} id="noanim-tab-example">
        <Tab eventKey="Product" title="Product" tabClassName="tab-title">
            <Row className="container-fluid">
                  <Col sm="7">
                    <InputGroup placeholder="he">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText><IoMdSearch size={24}/></InputGroupText>
                      </InputGroupAddon>
                      <Input placeholder="Search Product"/>
                    </InputGroup>
                    <br/>
                    <InputGroup></InputGroup>
                  </Col>
                  <Col sm="5" className="topcolumn">
                    <Link to="/admin/merchandise/addproduct">
                      <Button as="input" type="submit" style={{ color:"white", float:'right', backgroundColor:'rgb(113, 85, 170)', borderRadius:'22px', fontSize:"20px", fontFamily:'Verdana'}}>Add Product</Button>
                    </Link>
                  </Col>
            </Row>
            <div class="container-fluid">
              <Row>
                <Col sm="12">
                  <Table hover>
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th>Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td scope="row"></td>
                        <td>Classical</td>
                        <td>Shirts</td>
                        <td>3</td>
                        <td>400$</td>
                      </tr>
                      <tr>
                        <td scope="row"></td>
                        <td>Rainbow</td>
                        <td>Shirts</td>
                        <td>2</td>
                        <td>600$</td>
                      </tr>
                      <tr>
                        <td scope="row"></td>
                        <td>Modern Warfare</td>
                        <td>Shirts</td>
                        <td>4</td>
                        <td>1200$</td>
                      </tr>
                      <tr>
                        <td scope="row"></td>
                        <td>Girly</td>
                        <td>Womens</td>
                        <td>1</td>
                        <td>129$</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </div>
        </Tab>
        <Tab eventKey="Category" title="Category" tabClassName="tab-title">
            <Row className="container-fluid">
                <Col sm="7">
                  <InputGroup placeholder="he">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText><IoMdSearch size={24}/></InputGroupText>
                    </InputGroupAddon>
                    <Input placeholder="Search Category"/>
                  </InputGroup>
                  <br/>
                  <InputGroup></InputGroup>
                </Col>
                <Col sm="5" className="topcolumn">
                  <Link to="/admin/merchandise/addcategory">
                    <Button as="input" type="submit" style={{ color:"white", float:'right', backgroundColor:'rgb(113, 85, 170)', borderRadius:'22px', fontSize:'20px', fontFamily:'Verdana'}}>Add Category</Button>
                  </Link>
                </Col>
            </Row>
            <div class="container-fluid">
              <Row>
                <Col sm="12">
                  <Table hover>
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Code</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td scope="row"></td>
                        <td>Classical</td>
                        <td>Shirts</td>
                      </tr>
                      <tr>
                        <td scope="row"></td>
                        <td>Rainbow</td>
                        <td>Shirts</td>
                      </tr>
                      <tr>
                        <td scope="row"></td>
                        <td>Modern Warfare</td>
                        <td>Shirts</td>
                      </tr>
                      <tr>
                        <td scope="row"></td>
                        <td>Girly</td>
                        <td>Womens</td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
            </div>
        </Tab>
      </Tabs>
    </div>
  )
}

export default Product;

