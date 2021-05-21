import './Reports.css';
import React, { useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import { IoPeople } from "react-icons/io5";
import {Table,Col,Row} from 'reactstrap';
import { Switch } from 'react-router-dom';
import { NavLink, NavItem, NavDropdown, Nav, Navbar} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { ExclamationSquareFill } from 'react-bootstrap-icons';

const DailySale= ()=>{
  return(
    <Row className="mt-5">
      <Col className="mt-3 ml-5 mr-5">
        <Table hover>
          <thead>
            <tr>
              <th>Time</th>
              <th>Customers</th>
              <th>Products</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">09:00 AM</td>
                <td>Moin</td>
                <td>Shirt</td>
                <td>3</td>
                <td>400$</td>
              </tr>
              <tr>
                <td scope="row">09:00 AM</td>
                <td>Zahid</td>
                <td>Shirt</td>
                <td>1</td>
                <td>20$</td>
              </tr> 
            </tbody>
          </Table>
        </Col>
    </Row>
  )
}


const WeeklySale= ()=>{
    return(
    
    <Row className="mt-5">
          <Col className="mx-auto" sm='6'>
            <Table hover>

            <thead>
                <tr>
                  <th>Days</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">Monday</td>
                  <td>620$</td>
                  
                </tr>
                <tr>
                  <td scope="row">Tuesday</td>
                  <td>1110$</td>
                 
                </tr>
              </tbody>
              
            </Table>
          </Col>
        </Row>
    )
}


const MonthlySale= ()=>{
    return(
    
    <Row className="mt-5">
          <Col id="monthlysalecol" className="mx-auto" sm="6" >
            <Table hover>
            <thead>
                <tr>
                  <th>Month</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">Januaury</td>
                  <td>1000$</td>
                  
                </tr>
                <tr>
                  <td scope="row">Feburary</td>
                  <td>200$</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
    )
}


const TopProduct= ()=>{
  return(
    <Row className="mt-5">
      <Col className="mt-3 ml-5 mr-5">
        <Table hover>
          <thead>
            <tr>
              <th>Total</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">120$</td>
              <td>Rainbow Shirt</td>
              <td>10</td>
              <td>6000$</td>
            </tr>
            <tr>
              <td scope="row">100$</td>
              <td>Browny</td>
              <td>15</td>
              <td>2000$</td>
            </tr>              
          </tbody>
        </Table>
      </Col>
    </Row>
  )
}

function ReportAnalysis(){
  return(
    <div>
      <Navbar collapseOnSelect expand="md" sticky="top" className="navbar">
          <Navbar.Brand href="./DasboardAdmin.js" style={{color:"white"}}>SMAART ADMIN PANEL</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav class="offset-md-4">
              <NavDropdown title="Sales Analysis" id="collasible-nav-dropdown">
                <NavDropdown.Item className="navdd">Dashboard</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="navdd">Shopkeeper Details</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="navdd">Customer</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="navdd">POS</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item className="navdd">Merchandise</NavDropdown.Item>
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
      <Tabs defaultActiveKey="Product" transition={false} id="noanim-tab-example" className="mt-5">
        <Tab eventKey="Daily Sales" title="Daily Sales" tabClassName="tab-title">
          <DailySale/>
        </Tab>
        <Tab eventKey="Weekly Sales" title="Weekly Sales" tabClassName="tab-title">
          <WeeklySale/>
        </Tab>
        <Tab eventKey="Monthly Sales" title="Monthly Sales" tabClassName="tab-title">
          <MonthlySale/>
        </Tab>
        <Tab eventKey="Top Products" title="Top Products" tabClassName="tab-title">
          <TopProduct/>
        </Tab>
      </Tabs>
    </div>
  )
}

export default ReportAnalysis;

