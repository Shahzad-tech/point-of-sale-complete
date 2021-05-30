import "./Invoice.css"
import React, { useState,  useRef} from 'react';
import {Table, Col, Row, Button} from "reactstrap";
import { Link } from 'react-router-dom';


function Invoice(){
    
    return(
        <div>
            <Col md='12' className="topcol" >
                <Row>
                <Col xs='12' md='6'>
                    <h2 className="mt-5">Invoice</h2>
                </Col>
                <Col xs ='12' md='6' style={{textAlign:"right"}}>
                    <h4 className="paras mt-4" >SMAART</h4>
                    <h5 className="paras mt-3" >Islamabad</h5>
                    <h5 className="paras mt-3" >Pakistan</h5>
                </Col>
                </Row>
                <br/>
            </Col>
            <Col md='12'>
                <Row>
                <Col md='6'>
                    <h4 className="bottomTopheadings mt-4">
                        Name
                    </h4>
                    <h5 className="bottomTopdata text-muted">Shahzad</h5>
                    <h4 className="bottomTopheadings mt-2">
                        Address
                    </h4>
                    <h5 className="bottomTopdata text-muted">Street 123</h5>
                    <h4 className="bottomTopheadings mt-2">
                        City
                    </h4>
                    <h5 className="bottomTopdata text-muted">Islamabad</h5>
                
                </Col>
                <Col md='6' style={{textAlign:"right"}}>
                <h4 className="bottomTopheadings mt-4">Invoice#</h4>
                <h5 className="bottomTopdata text-muted">000001</h5>
                <h4 className="bottomTopheadings" >Date</h4>
                <h5 className="bottomTopdata text-muted">12/31/20</h5>
                <h4 className="bottomTopheadings" >Invoice Due Date</h4>
                <h5 className="bottomTopdata text-muted">12/31/20</h5>
                </Col>
                </Row>
            </Col>
            <hr/>
            <Col sm="12" >
                <Table borderless>
                    <thead>
                        <tr>
                        <th>Item</th>
                        <th>Description</th>
                        <th>Quantity</th>
                        <th>Tax</th>
                        <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td scope="row">1</td>
                        <td>Shirt</td>
                        <td>2</td>
                        <td>0%</td>
                        <td>110Rs</td>
                        </tr>
                        <tr>
                        <td scope="row">2</td>
                        <td>Pent</td>
                        <td>1</td>
                        <td>0%</td>
                        <td>250Rs</td>
                        </tr>
                        <tr>
                        <td scope="row">3</td>
                        <td>Coat</td>
                        <td>3</td>
                        <td>0%</td>
                        <td>340Rs</td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
            <hr/>
            <Col sm='12'>
                <Row>
                <Col className="finalamountcol" sm="8">
                <h4 className="bottomTopheadings mt-3">Note</h4>
                <h4 className="bottomTopheadings mt-2 text-muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, 
                    pulvinar facilisis justo mollis, auctor consequat urna. Morbi a bibendum metus. 
                    Donec scelerisque sollicitudin enim eu venenatis. Duis tincidunt laoreet ex
                </h4>
                </Col>
                <Col sm="4" style={{textAlign:"right",backgroundColor:"rgb(100,41,117)", color:"white"}}>
                    <h4 className="bottomTopheadings mt-5">Total</h4>
                    <h2 >700Rs</h2>
                </Col>
                </Row>
            </Col>
            <Link to="/pos">
                <Button className="dark">Done</Button>
            </Link>
        </div>
    )
}

export default Invoice