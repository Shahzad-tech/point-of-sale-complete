import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, DropdownMenu, DropdownItem , Dropdown, DropdownToggle, Form, Input} from 'reactstrap';
import './Cashier.css';
import { Link } from 'react-router-dom';
import 'react-credit-cards/es/styles-compiled.css';
import Cards from 'react-credit-cards';
import { FaCcMastercard, FaCcVisa } from "react-icons/fa";
import {HiCash} from "react-icons/hi"
import {AiFillBank} from "react-icons/ai"
import {NavbarCashier} from "./Navbar.js";

const CreditCard=()=>{
    
    const[expiry, setExpiry] = useState('');
    const[number,setNumber] = useState('');
    const[cvc, Setcvc] = useState('');
    const[focus, setFocus] = useState('');
    const[name, setName] = useState('');

    return(
        <div className="mt-5">
        <Cards
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focus}
        />
        <Form>      
            <Input type="number" name="number" placeholder='Card Number' value={number} onfocus={event=> setFocus(event.target.name)} onchange={event=>setNumber(event.target.value)}/>
            <Input className="mt-2" type="text"   name="name"   placeholder='Name' value={name} onfocus={event=> setFocus(event.target.name)} onchange={event=>setName(event.target.value)}/>
            <Input className="mt-2" name="chrome-autofill-dummy2" style={{display:"none"}} disabled/>
            <Row>
            <Col md='6'>
            <Input className="mt-2" type="number" name="expiry" placeholder='MM/YY Expiry'   value={expiry} onfocus={event=> setFocus(event.target.name)} onchange={event=>setExpiry(event.target.value)}/>
            </Col>
            <Col md='6'>
            <Input className="mt-2" type="number" name="cvc"    placeholder='CVC' value={cvc} onfocus={event=> setFocus(event.target.name)} onchange={event=>Setcvc(event.target.value)}/>
            </Col>
            </Row>
            {/* <Button className="mt-2" className="btn btn-info">Pay</Button> */}
            <FaCcMastercard size={30} color={"red"} style={{direction:"flex", float:"right"}}/>
            <FaCcVisa className="mr-2" size={30} color={"blue"} style={{direction:"flex", float:"right"}}/>
        </Form>
        </div>
    )
}

function Cashier(){

    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);
    const [text, setText] = useState(0);

    useEffect(() => {
        setText(0)
      },[]);
    
    const inputToAddName=()=>{
        if(text==1){
            return(
                <Form className="mt-0">
                    <Input type="text" placeholder="Enter User Name"></Input>
                    <Button type="submit" className="btn btn-info mt-2" style={{direction:"flex", float:"right"}}>Add Name</Button>
                </Form>
            )
        }   
    }
    

    return(
        <div>
        <NavbarCashier/>
        <Row className="mt-5">
            <Col md="2" >
            <Dropdown className="offset-1 mt-5" size="lg" isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle>
                    Cart Queue
                </DropdownToggle>
                <DropdownMenu >
                    <DropdownItem>cart 1</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>cart 2</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>cart 3</DropdownItem>
                </DropdownMenu>
            </Dropdown>
    
            </Col>
            <Col md='6' style={{borderRight:"1px solid silver", borderLeft:"1px solid silver"}}>
                <Row>
                    <Col sm="12" >
                    <h1 className="offset-5 mt-5">Cart</h1>
                    </Col>
                </Row>
                    <hr/>
                <Col sm="12">
                    <h5 className="text-muted">
                        Dress 1
                    </h5>        
                    <span className="text-dark" style={{fontSize:"17px"}}>2</span>
                   
                        <Button  color="primary" className="btn text-light offset-1">+</Button>
                        <Button   color="primary"  className="btn text-light twobuttons">-</Button>
                        <Button   color="dark" className="btn text-light  twobuttons" >Delete</Button>
                   
                    <span className="text-muted" style={{direction:"flex", float:"right",fontSize:"14px", marginTop:"1em"}}>1000Rs</span>
                    <hr/>
                    <h5 className="text-muted">
                        Dress 1
                    </h5>        
                    <span className="text-dark" style={{fontSize:"17px"}}>2</span>
                        <Button  color="primary" className="btn text-light offset-1">+</Button>
                        <Button   color="primary"  className="btn text-light twobuttons">-</Button>
                        <Button   color="dark" className="btn text-light  twobuttons" >Delete</Button>
                    <span className="text-muted" style={{direction:"flex", float:"right",fontSize:"14px", marginTop:"1em"}}>1000Rs</span>
                    <hr/>
                    <h5 className="text-muted">
                        Dress 1
                    </h5>        
                    <span className="text-dark" style={{fontSize:"17px"}}>2</span>
                        <Button  color="primary" className="btn text-light offset-1">+</Button>
                        <Button   color="primary"  className="btn text-light twobuttons">-</Button>
                        <Button   color="dark" className="btn text-light  twobuttons" >Delete</Button>
                    <span className="text-muted" style={{direction:"flex", float:"right",fontSize:"14px", marginTop:"1em"}}>1000Rs</span>
                    <hr/>
                    <span className="text-muted" style={{direction:"flex", float:"right",fontSize:"17px", marginTop:"1em"}} >
                        <h6 style={{textAlign:"right"}}>
                            Total (3) items
                            <br/>
                            <br/>
                            600Rs
                        </h6>
                        <br/>
                        <Link to="/pos/checkout">
                            <Button  color="danger" >
                                Proceed to checkout
                            </Button>
                        </Link>
                    </span>
                </Col>
            </Col>
            <Col md='4'>
                <div className="mt-5" style={{direction:"flex", textAlign:"center"}}>
                <h4 id='paymentHead'>Select Payment Method</h4>
                </div>
                <div className="offset-3" style={{direction:"flex", textAlign:"center"}} >
                <Link>
                <p className="paymentOptions mt-3">Pay with MasterCard<FaCcMastercard size={30} color={"red"} className="ml-2"/></p>
                </Link>
                <Link>
                <p className="paymentOptions">Pay with Visa<FaCcVisa size={30} color="blue" className="ml-2"/> </p>
                </Link>
                <Link>
                <p className="paymentOptions">Pay with Jazz Cash<HiCash size={30} color="red" className="ml-2"/></p>
                </Link>
                <Link>
                <p className="paymentOptions">Bank Transfer<AiFillBank  size={30} color="black" className="ml-2" /></p>
                </Link>
                </div>
                <hr/>
                <Link>
                <p style={{direction:"flex", textAlign:"center"}} onClick={()=>{setText(1)}}>Click to Add Name</p>
                </Link>
                {inputToAddName()}
                {/* <CreditCard/> */}
            </Col>
        </Row>
        </div>
    );
}

export default Cashier;
// import React, { useState } from 'react';
// import { Container, Row, Col, Button } from 'reactstrap';
// import './Cashier.css';
// import { Link } from 'react-router-dom';

// function Cashier(){
//     return(
//         <div>
//             <br/>
//             <Container>
//                 <Row className= "upperrow" >
//                     <Col className= "mystyle" xs="2" >
//                         <Row>
//                             <h1>Orders</h1>
//                         </Row>
//                         <Row>

//                         <p>item1</p>
//                         <p>item2</p>
//                         <p>item3</p>
//                         </Row>
//                     </Col>
//                     <Col xs="9" >
//                         <Row>
//                             <h1>Cart</h1>
//                         </Row>
//                         <hr/>
//                         <Col sm="12">
//                         <h5 className="text-muted">
//                             Dress 1
//                         </h5>
                    
//                         <span>2</span>
//                         <Button  color="primary" className="btn text-light offset-1">+</Button>
//                         <Button   color="primary"  className="btn text-light twobuttons">-</Button>
//                         <Button   color="dark" className="btn text-light  twobuttons" >Delete</Button>
//                         <span className="offset-8">1000Rs</span>
//                     </Col>
//                         <hr/>
//                         <Col sm="12" className="text-muted">
//                         <h5>
//                             Dress 2
//                         </h5>
                    
//                         <span>2</span>
//                         <Button  color="primary" className="btn text-light offset-1">+</Button>
//                         <Button   color="primary"  className="btn text-light twobuttons">-</Button>
//                         <Button   color="dark" className="btn text-light  twobuttons" >Delete</Button>
//                         <span className="offset-8">1000Rs</span>
//                     </Col>
//                         <hr/>
//                     <Col sm="12">
//                         <h5 className="text-muted">
//                             Dress 3
//                         </h5>
                    
//                         <span>2</span>
//                         <Button  color="primary" className="btn text-light offset-1">+</Button>
//                         <Button   color="primary"  className="btn text-light twobuttons">-</Button>
//                         <Button   color="dark" className="btn text-light  twobuttons" >Delete</Button>
//                         <span className="offset-8" style={{direction:"rtl"}}>1000Rs</span>
//                     </Col>
//                     <hr/>

//                     <Col sm="12" className="clearfixe">

//                     <p >
//                         Total (2) items
//                     </p>
//                     <p>
//                         600Rs
//                     </p>
//                     <Link to="/pos/checkout">
//                         <Button  color="danger" className="btn text-light twobuttons offset-9" >
//                             Proceed to checkout
//                         </Button>
//                     </Link>
//                     </Col>
//                     </Col>
//                 </Row>
            
//             </Container>  
//         </div>
//     );
// }

// export default Cashier;