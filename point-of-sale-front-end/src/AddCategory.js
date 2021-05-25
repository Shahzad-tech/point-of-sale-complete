import { Row,Col,Button, Form, FormGroup, Label, Input} from 'reactstrap';
import './Addproduct.css';
import './AddCategory.css';
import NavbarCustom from './Navbar.js';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AddCategory(){
    return(
        <div>
            <NavbarCustom title="Merchandise Management" dd1="Dashboard" dd1Route="dashboard" dd2="POS" dd2Route="pos" dd3="Cashier Registration" dd3Route="cashier" dd4="Customer Details" dd4Router="customer" dd5="Sales Analysis" dd5Route="sales"/>
            <div className="container-fluid">
                <Row sm='12'>
                    <Col sm='2'>
                        <Button id ="buto" as="input" type="submit" className="topbutton">
                            <Link to="/admin/merchandise">Back</Link>
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