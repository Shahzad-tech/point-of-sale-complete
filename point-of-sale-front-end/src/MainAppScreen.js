import './MainAppScreen.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Lock, People } from 'react-bootstrap-icons';
import {Row, Col, Container, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Main() {
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
              <input type='text' placeholder='Username' name='name'/>
            </Row> 
            <Row className="rowss">
              <Lock color="rgb(100, 41, 117)" size={20} />
              <input type='password' placeholder='Password' name='password'/>
            </Row>
            <Row className="rowss">
              <Link to="/pos">
                <Button id="but" as="input" type="submit" value="Continue            >" />{' '}
              </Link>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Main;
