import Button from '@material-ui/core/Button';
import {FormControl,Jumbotron,Table,Row,Col,InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import './productmain.css'
import React, { useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import { IoPeople } from "react-icons/io5";
import classnames from 'classnames';
import IconButton from '@material-ui/core/IconButton';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import {Route, Switch, Link, BrowserRouter} from 'react-router-dom';

// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
//   TabContent, TabPane
// } from 'reactstrap';

import { NavLink, NavItem, NavDropdown, Nav, Navbar} from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import ProductEdit from './ProductEditDelete';

function Product(){
  return(
    <div >
      <Navbar collapseOnSelect expand="md" sticky="top" className="navbar">
        <Navbar.Brand href="./DasboardAdmin.js" style={{color:"white"}}>SMAART ADMIN PANEL</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav class="offset-md-4" id="navd">
            <NavDropdown title="Merchandise" id="collasible-nav-dropdown">
              <NavDropdown.Item className="navdd">Dashboard</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="navdd">Shopkeeper Details</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="navdd">Customer</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="navdd">POS</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="navdd">Sales Analysis</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav class="ml-auto">
            <NavLink>
              <span>AdminName</span>
              <IoPeople  style={{color: 'white', marginLeft:'4px'}} size={32}/>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <br/>
        <Tabs defaultActiveKey="Product" transition={false} id="noanim-tab-example">
          <Tab eventKey="Product" title="Product" class="ml-auto">
          <div class="container">
            <Row>
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
                <Button id ="but" as="input" type="submit" class="topbutton" onClick={event =>  window.location.href='./Addproduct'}>Add Product</Button>
              </Col>
            </Row>
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
          <Tab eventKey="Category" title="Category">
            <div class="container">
              <Row>
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
                  <Button id ="but" as="input" type="submit" class="topbutton" onClick={event =>  window.location.href='./Addproduct'}>Add Category</Button>
                </Col>
              </Row>
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
        </Tabs>
    </div>
  )
}

export default Product;

