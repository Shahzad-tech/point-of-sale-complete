import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {Row, Col, Container, Button} from 'react-bootstrap'

function App() {
  return (
    <Container className="bg">
      <Row className="box">
        
        <Col className="brand" md={8} xs={6}>
          <div>SMAART</div>
        </Col>
        
        <Col className="login" md={4} xs={6}>
          
          <form>
            
            <Row className="rowss" id="first">
              <label>Username</label>
            </Row>
            
            <Row className="rowss">
              <input type='text' placeholder='Enter your name' name='name'/>
            </Row>

            <Row className="rowss" id="first">
              <label>Password</label>
            </Row>
                
            <Row className="rowss">
              <input type='password' placeholder='Enter your password' name='password'/>
            </Row>
            
            <Row className="rowss" id="first">
              <Button id="but" as="input" type="submit" value="Submit" />{' '}
            </Row>
          </form>

          

        </Col>
      </Row>
    </Container>
  );
}

export default App;
