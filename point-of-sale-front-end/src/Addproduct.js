import { Row,Col,Jumbotron, Button, Form, FormGroup, Label, Input} from 'reactstrap';
import './Addproduct.css'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';

import React, { useState } from 'react';

function AddProduct(){
    const [isOpen, setIsOpen] = useState(false); //navbar things
    const toggle = () => setIsOpen(!isOpen); //navbarthings
    return(
        <div>

        <Navbar id="navbar" expand="md">
                <NavbarBrand href="/">POS</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                    <NavItem id="midnavitem">
                    <NavLink href="/components/">Products</NavLink>
                    </NavItem>
                    
                </Nav>
                </Collapse>
         </Navbar>

            <Jumbotron>
            <Col sm='12'>
                <Row>
                <Col sm='2'>
                <Button id ="buto" as="input" type="submit" class="topbutton" onClick={event =>  window.location.href='./Addproduct'}>
                Back
                </Button>
                </Col>
                <Col id="headingColumn" sm='7'>
                <h4 id="addproductheading" className="text-muted">
                    Add Products here
                </h4>
                </Col>
                </Row>
            </Col>
            <Col sm='12'>
            <Form>
                <Row>
            <Col sm='8'>
            <FormGroup>
                    <Label for="productnamel">Product Name</Label>
                    <Input type="text" name="productname" id="exampleEmail" placeholder="Enter Product" />
             </FormGroup>
            </Col>
            <Col sm='4' id="categorycolumn">
             <FormGroup>
            <Label for="exampleSelect">Choose Category</Label>
            <Input type="select" name="select" id="exampleSelect">
            <option>Category A</option>
            <option>Category B</option>
            <option>Category C</option>
            <option>Category D</option>
            <option>Category E</option>
            </Input>
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
        <Row >
            <Col sm='6'>
        <FormGroup>
                    <Label for="quantity">Quantity</Label>
                    <Input type="number" name="quantity" id="exampleEmail" placeholder="12" />
        </FormGroup>
        </Col>
        <Col sm='6'>
        <FormGroup>
                    <Label for="price">Price</Label>
                    <Input type="number" name="price" id="exampleEmail" placeholder="110$" />
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
        <Button id="bottombutton">Add Product</Button>
        </Col>
        </Row>
        </Form>
            </Col>
            </Jumbotron>
        </div>
    )


}

export default AddProduct