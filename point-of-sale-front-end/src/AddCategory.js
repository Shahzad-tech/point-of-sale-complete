import { Row,Col,Button, Form, FormGroup, Label, Input} from 'reactstrap';
import './Addproduct.css';
import { IoPeople } from "react-icons/io5";
import { NavLink, NavDropdown, Nav, Navbar} from 'react-bootstrap';
import React, { useState } from 'react';

function AddCategory(){
    return(
        <div>
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
                        <div className="text-muted">Add Categories here</div>
                    </Col>
                </Row>
                <Col sm='12'>
                    <Form>
                        <Row>
                            <Col sm='8'>
                                <FormGroup>
                                        <Label for="productnamel">Category Name</Label>
                                        <Input type="text" name="productname" id="exampleEmail" placeholder="Enter Category Name" />
                                </FormGroup>
                            </Col>
                            <Col sm='4' id="categorycolumn">
                                <FormGroup>
                                    <Label for="exampleSelect">Category Code</Label>
                                    <Input type="text" name="select" id="exampleSelect" placeholder="Enter code here"/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm='12'>
                                <FormGroup>
                                <Label for="exampleText">Description</Label>
                                    <Input type="textarea" name="text" id="exampleText" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm='12'>
                                <FormGroup>
                                <Label for="exampleFile">Upload Model</Label>
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
                                <Button id="bottombutton">Add Category</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </div>
        </div>
    )
}

export default AddCategory