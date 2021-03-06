import { Row,Col,Button, Form, FormGroup, Label, Input} from 'reactstrap';
import './Addproduct.css';
import './AddCategory.css';
import {NavbarCustom} from './Navbar.js';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AddCategory(){
    const [CnameError, setCNameError] = useState("");
    const[Cname,setCName] = useState("");

    const validate = (event) => {
        var val = event.target.value;
        setCNameError("");
        let error = "";
        if (!val) {
            setCNameError("Name cannot be blank");
        }
        else if(val.match(/\d/)){
            setCNameError("Number can't be added");
        }
        else if (val.length<=3){
            setCNameError("Name length too small");
        }
        else if(error){
            setCNameError(error);
        }
        setCName(val);
        return true;
    }

    return(
        <div>
            <NavbarCustom title="Merchandise Management" dd1="Dashboard" dd1Route="dashboard" dd2="POS" dd2Route="pos" dd3="Cashier Registration" dd3Route="cashier" dd4="Customer Details" dd4Route="customer" dd5="Sales Analysis" dd5Route="sales"/>
            <div className="container-fluid">
                <Row sm='12'>
                    <Col sm='2'>
                        <Link to="/admin/merchandise">
                            <Button id ="buto" as="input" type="submit" className="topbutton">
                                Back
                            </Button>
                        </Link>
                    </Col>
                </Row>
                <Row sm='12'>
                    <Col id="headingColumn">
                        <div className="text-muted">Add Categories here</div>
                    </Col>
                </Row>
                <Col sm='12'>
                    <Form>
                        <Row>
                            <Col sm='8'>
                                <FormGroup>
                                        <Label for="productnamel">Category Name</Label>
                                        <Input type="text" name="productname" id="exampleEmail" placeholder="Enter Category Name" value ={Cname} onChange={(e)=>{validate(e)}} required />
                                        <div style={{color:"red"}}>{CnameError}</div>
                                </FormGroup>
                            </Col>
                            <Col sm='4' id="categorycolumn">
                                <FormGroup>
                                    <Label for="exampleSelect">Category Code</Label>
                                    <Input type="text" name="select" id="exampleSelect" placeholder="Enter code here" required/>
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
                        <Row>
                            <Col sm='12'>
                                <FormGroup>
                                    <Label for="exampleFile">Upload Image</Label>
                                    <br/>
                                    <Input type="file" name="file" id="exampleFile" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm='12' className='mt-4' id="bottomcolumn">
                                <Button id="bottombutton">Add Category</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </div>
        </div>
    )
}

export default AddCategory