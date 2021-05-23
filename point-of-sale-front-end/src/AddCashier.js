import './Addproduct.css';
import './AddCashier.css';
import { Row,Col,Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { IoPeople } from "react-icons/io5";
import { NavLink, NavDropdown, Nav, Navbar} from 'react-bootstrap';
import React, { useState } from 'react';

function AddCashier(){
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
            <div className="container-fluid">
                <Row sm='12'>
                    <Col sm='2'>
                        <Button id ="buto" as="input" type="submit" class="topbutton">
                            Back
                        </Button>
                    </Col>
                </Row>
                <Row sm='12'>
                    <Col id="headingColumn">
                        <div className="text-muted">Add Shopkeeper Details Here</div>
                    </Col>
                </Row>
                <Col sm='12'>
                    <Form>
                        <Row>
                            <Col sm='8'>
                                <FormGroup>
                                        <Label for="productnamel">Cashier Name</Label>
                                        <Input type="text" name="productname" id="exampleEmail" placeholder="Enter name here" />
                                </FormGroup>
                            </Col>
                            <Col sm='4' id="categorycolumn">
                                <FormGroup>
                                    <Label for="exampleSelect">Counter number</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                        <option>Counter 1</option>
                                        <option>Counter 2</option>
                                        <option>Counter 3</option>
                                        <option>Counter 4</option>
                                        <option>Counter 5</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm='12'>
                                <FormGroup>
                                <Label for="exampleText">Address</Label>
                                    <Input type="textarea" name="text" id="exampleText" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row >
                            <Col sm='6'>
                                <FormGroup>
                                    <Label for="number">Contact Number</Label>
                                    <Input type="text" name="number" id="exampleEmail"/>
                                </FormGroup>
                            </Col>
                            <Col sm='6'>
                                <FormGroup>
                                    <Label for="dob">Date of Birth</Label>
                                    <Input type="date" name="dob" id="exampleEmail"/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row >
                            <Col sm='6'>
                                <FormGroup>
                                    <Label for="username">Username</Label>
                                    <Input type="text" name="username" id="exampleEmail"/>
                                </FormGroup>
                            </Col>
                            <Col sm='6'>
                                <FormGroup>
                                    <Label for="password">Password</Label>
                                    <Input type="password" name="password" id="exampleEmail"/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm='12'>
                                <FormGroup>
                                <Label for="exampleFile">Upload Image</Label>
                                <br/>
                                <Input type="file" name="file" id="exampleFile" />
                                {/* <FormText color="muted">
                                This is some placeholder block-level help text for the above input.
                                It's a bit lighter and easily wraps to a new line.
                                </FormText> */}
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm='12' className='mt-4' id="bottomcolumn">
                                <Button id="bottombutton">Add Product</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </div>
        </div>
    )
}

export default AddCashier