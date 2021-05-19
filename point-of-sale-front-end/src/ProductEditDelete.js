import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Jumbotron,
    Row,
    Col,
    Button
  } from 'reactstrap';

import './ProductEditDelete.css'
import React, { useState } from 'react';
import { BsPencil } from "react-icons/bs";
import { FiDelete } from "react-icons/fi";
import { Table } from 'reactstrap';

function App(){

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
            
           
            
            <Col id="col" md='12'>    
            <Row>
                <Col id="col" sm='12' md='2'>
                <Button id="buto" as="input" type="submit" class="topbutton" onClick={event =>  window.location.href='./Addproduct'}>
                Back
                </Button>
                </Col>
                <Col sm='12' md='6'>
                <h4 id="addproductheading" className="text-muted mt-1">
                    Modify Product
                </h4>
                </Col>
                <Col sm='12' md='4' id="buttonCols">
                <Button id ="editbutton"as="input" type="submit" class="topbutton" >
                <span className="mr-2"><BsPencil/></span>Edit
                </Button>
                <Button id="deletebutton" as="input" type="submit" class="topbutton" >
               <span className="mr-2"><FiDelete/></span>
                Delete
                </Button>
                </Col>
            </Row>
            </Col>
            <Row>
            <Col md='6' className="mt-5 offset-3">
                <Table  responsive>
                    <tbody>
                    <tr>
                        <th scope="row">Product Name</th>
                        <td>Rainbow</td>
            
                        </tr>
                        <tr>
                        <th scope="row">Category</th>
                        <td>Men</td>
                       
                        </tr>
                        <tr>
                        <th scope="row">Quantity</th>
                        <td>4</td>
                      
                        </tr>
                        <tr>
                        <th scope="row">Price</th>
                        <td>20$</td>

                        </tr>
                        <tr>
                        <th scope="row">Description</th>
                        <td>The product is new to the market and has all other things</td>

                        </tr>

                    </tbody>
                </Table>
            </Col>
            </Row>
          
            </Jumbotron>

        </div>
    )
}
export default App;