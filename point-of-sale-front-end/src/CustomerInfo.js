import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Col, Container, Row } from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './CustomerInfo.css';
import { NavLink,NavDropdown, Nav, Navbar} from 'react-bootstrap';
import { IoPeople } from "react-icons/io5";

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 }
]

export default function CustomerInfo() {

    return(
        <div> 
            <Navbar collapseOnSelect expand="md" sticky="top" className="navbar">
        <Navbar.Brand href="./DasboardAdmin.js" style={{color:"white"}}>SMAART ADMIN PANEL</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav class="offset-md-4">
            <NavDropdown title="Customer Information" id="collasible-nav-dropdown">
              <NavDropdown.Item className="navdd">Dashboard</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="navdd">Shopkeeper Details</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="navdd">Merchandise</NavDropdown.Item>
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
      <Container fluid>
            <Row>
                <Col xs lg={4} className='tab__bar'>
                <AppBar position="static" color="default">
                    <Tabs variant="fullWidth">
                        <Tab label="find by name" />
                        <Tab label="find by recent" />
                    </Tabs>
                </AppBar>
                <SwipeableViews>
                    list goes here
                </SwipeableViews>
                </Col>


                <Col xs lg={{ span: 7   , offset: 1}} className='form__info'>
                    <Autocomplete 
                        id="combo-box-demo"
                        options={top100Films}
                        getOptionLabel={(option) => option.title}
                        style={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Search Customer" variant="outlined"/>}
                    />
                
                    <Container fluid>
                        the details of the customer goes here 
                    </Container>
                </Col>
            </Row>
        </Container>
        </div>
    )
}