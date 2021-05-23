import Button from '@material-ui/core/Button';
import {Table,Row,Col,InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import './productmain.css'
import React, { useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import { IoPeople } from "react-icons/io5";
import { NavLink,NavDropdown, Nav, Navbar} from 'react-bootstrap';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

function Product(){
  return(
    <div >
      <Navbar collapseOnSelect expand="md" sticky="top" className="navbar">
        <Navbar.Brand href="./DasboardAdmin.js" style={{color:"white"}}>SMAART ADMIN PANEL</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav class="offset-md-4">
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
                    <Button as="input" type="submit" style={{ color:"white", float:'right', backgroundColor:'rgb(113, 85, 170)', borderRadius:'22px', fontSize:'20px', fontFamily:'Verdana'}}>Add Product</Button>
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
                  <Button as="input" type="submit" style={{ color:"white", float:'right', backgroundColor:'rgb(113, 85, 170)', borderRadius:'22px', fontSize:'20px', fontFamily:'Verdana'}}>Add Category</Button>
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

