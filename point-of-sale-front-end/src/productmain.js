

import Button from '@material-ui/core/Button';

import {FormControl,Jumbotron,Table,Row,Col,InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
import './productmain.css'

import React, { useState } from 'react';
import { IoMdSearch } from "react-icons/io";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';


function App(){

  const [isOpen, setIsOpen] = useState(false); //navbar things
  const toggle = () => setIsOpen(!isOpen); //navbarthings
  const [dropdownOpen, setDropdownOpen] = useState(false); //drop down things
  const togg = () => setDropdownOpen(prevState => !prevState); //drop down things


return(
    <div >
    
       <Navbar id="navbar" expand="md">
        <NavbarBrand href="/">POS</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem id="midnavitem">
            {/* <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                  Dropdown's menu is right-aligned
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem header>Header</DropdownItem>
                  <DropdownItem disabled>Action</DropdownItem>
                  <DropdownItem>Another Action</DropdownItem>
                  <DropdownItem divider/>
                  <DropdownItem>Another Really Really Long Action (Really!)</DropdownItem>
                </DropdownMenu>
              </Dropdown> */}

              <NavLink href="/components/">Produts</NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Navbar>
     
       <Jumbotron>
      <Row>
      <Col sm="7">
     <InputGroup placeholder="he">
        <InputGroupAddon addonType="prepend">
          <InputGroupText> <IoMdSearch/></InputGroupText>
         
        </InputGroupAddon>
        <Input placeholder="Search Product"/>
      </InputGroup>
      <br />
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
      </Jumbotron>
      </div>
)
}

export default App

