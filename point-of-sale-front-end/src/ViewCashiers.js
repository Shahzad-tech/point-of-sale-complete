import './productmain.css';
import './ViewCashier.css';
import {Table,Row,Col,InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';
import { IoPeople } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { NavLink, NavDropdown, Nav, Navbar} from 'react-bootstrap';
import React, { useState } from 'react';

function ViewCashier(){
    return(
        <div>
            <Navbar collapseOnSelect expand="md" sticky="top" className="navbar">
                <Navbar.Brand href="./DasboardAdmin.js" style={{color:"white"}}>SMAART ADMIN PANEL</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav class="offset-md-4">
                        <NavDropdown title="Shopkeeper Details" id="collasible-nav-dropdown">
                        <NavDropdown.Item className="navdd">Dashboard</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item className="navdd">Merchandise</NavDropdown.Item>
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
                    <Button as="input" type="submit" style={{ color:"white", float:'right', backgroundColor:'rgb(113, 85, 170)', borderRadius:'22px', fontSize:'20px', fontFamily:'Verdana'}} >Add New Cashier</Button>
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
                        <th>Contact</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td scope="row"></td>
                        <td>Classical</td>
                        <td>Shirts</td>
                        <td>3</td>
                      </tr>
                      <tr>
                        <td scope="row"></td>
                        <td>Rainbow</td>
                        <td>Shirts</td>
                        <td>2</td>
                      </tr>
                      <tr>
                        <td scope="row"></td>
                        <td>Modern Warfare</td>
                        <td>Shirts</td>
                        <td>4</td>
                      </tr>
                      <tr>
                        <td scope="row"></td>
                        <td>Girly</td>
                        <td>Womens</td>
                        <td>1</td>
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