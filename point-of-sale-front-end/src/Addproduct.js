import { Row,Col,Button, Form, FormGroup, Label, Input} from 'reactstrap';
import './Addproduct.css';
import {NavbarCustom} from './Navbar.js';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AddProduct(){
    const[categories, setCategory] = useState([]);
    const [PnameError, setPNameError] = useState("");
    const [PName, setPName] = useState("");
    const[pCategory,setPCat] = useState("60b0d250f96320d9ecb607b8");
    const[pDesc,setPDesc] = useState("");
    const[pPrice,setPPrice] = useState();
    const[pQty,setPQty] = useState();
    const[pImg,setPImg] = useState("60b0d250f96320d9ecb607b8");

    useEffect(() => {
        getCategoryList();
    },[]);

    const getCategoryList = () => {
        axios.get('http://localhost:5000/categories').then((response) => {
        const data = response.data;
        setCategory(data);
        console.log(data);
        }).catch(() => {console.log('unable to receive data')
        });
    }

    const validate = (event) => {
        var val = event.target.value;
        setPNameError("");
        let error = "";
        if (!val) {
            setPNameError("Name cannot be blank");
        }
        else if(val.match(/\d/)){
            setPNameError("Number can't be added");
        }
        else if (val.length<=3){
            setPNameError("Name length too small");
        }
        else if(error){
            setPNameError(error);
        }
        setPName(val);
        return true;
    }

    const submitHandle = ()=> {
        // alert(PName, pCategory, pPrice, pQty, pDesc,pImg);
        const data = {PName, pCategory,pDesc, pQty, pPrice,pImg};
        alert(data);
        axios.post('http://localhost:5000/products/add', data).then(response => {
            alert("product added successfully");
        //     // setCategory(data);
        //     // console.log(data);
        });
        setPName("");
        setPDesc("");
        setPPrice("");
        setPQty("");
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
                        <div className="text-muted">Add Products here</div>
                    </Col>
                </Row>
                <Col sm='12'>
                    <Form>
                        <Row>
                            <Col sm='8'>
                                <FormGroup>
                                        <Label for="productnamel">Product Name</Label>
                                        <Input type="text" name="productname" id="exampleEmail" placeholder="Enter Product Name" value ={PName} onChange={(e)=>{validate(e)}} required />
                                        <div style={{color:"red"}}>{PnameError}</div>
                                </FormGroup>
                            </Col>
                            <Col sm='4' id="categorycolumn">
                                <FormGroup>
                                    <Label for="exampleSelect">Choose Category</Label>
                                    <Input type="select" name="select" id="exampleSelect">
                                    {categories.map(category =>{
                                        return(
                                            <option>{category.name}</option>
                                        )
                                    })}
                                    </Input>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm='12'>
                                <FormGroup>
                                <Label for="exampleText">Description</Label>
                                    <Input type="textarea" name="text" id="exampleText" value={pDesc} onChange={(e)=>{setPDesc(e.target.value)}}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row >
                            <Col sm='6'>
                                <FormGroup>
                                    <Label for="quantity">Quantity</Label>
                                    <Input type="number" name="quantity" id="exampleEmail" value={pQty} placeholder="Enter an integer number" required onChange={(e)=>{setPQty(e.target.value)}} />
                                </FormGroup>
                            </Col>
                            <Col sm='6'>
                                <FormGroup>
                                    <Label for="price">Price</Label>
                                    <Input type="number" name="price" id="exampleEmail" value={pPrice} placeholder="Enter a number" required onChange={(e)=>{setPPrice(e.target.value)}}/>
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm='12'>
                                <FormGroup>
                                    <Label for="exampleFile">Upload Picture</Label>
                                    <br/>
                                    <Input type="file" name="file" id="exampleFile" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm='12' className='mt-4' id="bottomcolumn">
                                <Button id="bottombutton" onClick={()=>{submitHandle()}}>Add Product</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </div>
        </div>
    )
}

export default AddProduct