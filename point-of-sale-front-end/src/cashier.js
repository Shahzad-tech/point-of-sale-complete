import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import NavbarCustom from './Navbar.js';
import './Cashier.css';

function Cashier(){
    return(
        <div>
            <NavbarCustom title="Cashier" dd1="Dashboard" dd2="Dashboard" dd3="Dashboard" dd4="Dashboard" dd5="Dashboard"/>
            <br/>
            <Container>
                <Row className= "upperrow" >
                    <Col className= "mystyle" xs="2" >
                        <Row>
                            <h1>Orders</h1>
                        </Row>
                        <Row>

                        <p>item1</p>
                        <p>item2</p>
                        <p>item3</p>
                        </Row>
                    </Col>
                    <Col xs="9" >
                        <Row>
                            <h1>Cart</h1>
                        </Row>
                        <hr/>
                        <Col sm="12">
                        <h5 className="text-muted">
                            Dress 1
                        </h5>
                    
                        <span>2</span>
                        <Button  color="primary" className="btn text-light offset-1">+</Button>
                        <Button   color="primary"  className="btn text-light twobuttons">-</Button>
                        <Button   color="dark" className="btn text-light  twobuttons" >Delete</Button>
                        <span className="offset-8">1000Rs</span>
                    </Col>
                        <hr/>
                        <Col sm="12" className="text-muted">
                        <h5>
                            Dress 2
                        </h5>
                    
                        <span>2</span>
                        <Button  color="primary" className="btn text-light offset-1">+</Button>
                        <Button   color="primary"  className="btn text-light twobuttons">-</Button>
                        <Button   color="dark" className="btn text-light  twobuttons" >Delete</Button>
                        <span className="offset-8">1000Rs</span>
                    </Col>
                        <hr/>
                    <Col sm="12">
                        <h5 className="text-muted">
                            Dress 3
                        </h5>
                    
                        <span>2</span>
                        <Button  color="primary" className="btn text-light offset-1">+</Button>
                        <Button   color="primary"  className="btn text-light twobuttons">-</Button>
                        <Button   color="dark" className="btn text-light  twobuttons" >Delete</Button>
                        <span className="offset-8" style={{direction:"rtl"}}>1000Rs</span>
                    </Col>
                    <hr/>

                    <Col sm="12" className="clearfixe">

                    <p >
                        Total (2) items
                    </p>
                    <p>
                        600Rs
                    </p>
                    <Button  color="danger" className="btn text-light twobuttons offset-9" >Proceed to checkout</Button>

                    </Col>


                    
                    
                    </Col>
                </Row>
            
            </Container>  
        </div>
    );
}

export default Cashier;