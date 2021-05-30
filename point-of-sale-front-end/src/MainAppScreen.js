import './MainAppScreen.css';
import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Lock, People } from 'react-bootstrap-icons';
import {Row, Col, Container, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Main() {
  const[username,setUsername] = useState("");
  const[password,setPassword] = useState("");
  const[path,setPath] = useState("/");
  const [UnameError, setUNameError] = useState("");

  const validate = (event) => {
    var val = event.target.value;
    setUNameError("");
    setPath("/");
    let error = "";
    if (!val) {
      setUNameError("Username cannot be blank");
    }
    else if(error){
      setUNameError(error);
    }
    setUsername(val);
    if(username.includes("admin")){
      setPath("/admin/dashboard");
    }
    else if(username.includes("cashier")) {
      setPath("/pos");
    }
    return true;
  }

  const reset =() => {
    // setPath("/");
    setUsername("");
    setPassword("");
  }

  return (
    <Container className="bg">
      <Row className="box">
        <Col className="brand" md={8} xs={6}>
          <Row>
            <Col className="text1">
            SMAART
            <p className="text11">Smart Mirror Automated Augmented Reality based Try-on</p>
            </Col>
          </Row>
        </Col>
        <Col className="login" md={4} xs={6}>
          <Row>
            <Col className="text2">
              LOGIN
            </Col>
          </Row>
          <form>
            <Row className="rowss">
              <People color="rgb(100, 41, 117)" size={20} />
              <input type='text' placeholder='Enter username' name='username' value ={username} onChange={(e)=>{validate(e)}}/>
              <div style={{color:"red"}}>{UnameError}</div>
            </Row> 
            <Row className="rowss">
              <Lock color="rgb(100, 41, 117)" size={20} />
              <input type='password' placeholder='Enter password' name='password'/>
            </Row>
            <Row className="rowss">
              <Link to={path}>
                <Button id="but" as="input" type="submit" value="Continue            >" onClick={()=>{reset()}}/>{' '}
              </Link>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
