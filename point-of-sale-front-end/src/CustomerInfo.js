import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Col, Container, Row } from 'react-bootstrap'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import './CustomerInfo.css';
import NavbarCustom from './Navbar.js';

const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 }
]

export default function CustomerInfo() {

    return(
        <div> 
            <NavbarCustom title="Customer Details" dd1="Dashboard" dd2="POS" dd3="Merchandise Management" dd4="Cashier Registration" dd5="Sales Analysis"/>
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