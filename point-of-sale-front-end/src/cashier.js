import { Button } from 'reactstrap';
import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';

import './POS-cashier.css';

function App(){
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return(
 <div>
        <div>

        <Navbar color="light" light expand="md">
        <NavbarBrand href="/">POS</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem > 
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            
          </Nav>
        </Collapse>
      </Navbar>
     
        </div>

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
                <Col style={mystyle} xs="9" >
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

    )

}


const mystyle = {

    // color: "white",
    // backgroundColor: "DodgerBlue",
    // padding: "10px",
    // fontFamily: "Arial",
    // border-right: "1px solid black";
  
}

export default App;