import React from 'react';
import './App.css';
import PoodleCard from './components/PoodleCard';
import { Container, Row, Col } from 'reactstrap';
//import * as BS from 'reactstrap';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Our poodles are ready for adoption     
      </header>
      <div>
        <Container>
          <Row>
            <Col>
              <Link to="/poodle-detail/Scruffy">
                <PoodleCard image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2484882/scruffy.jpg" name="Scruffy"/>
              </Link>
            </Col>
            
            <Col>
              <Link to="/poodle-detail/Fluffy">
                <PoodleCard image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2484882/fluffy.jpg" name="Fluffy"/>
              </Link>
            </Col>

            <Col>  
              <Link to="/poodle-detail/Bozo"> 
                <PoodleCard image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2484882/bonzo.jpg" name="Bozo"/>
              </Link>
            </Col>

            <Col>  
              <Link to="/poodle-detail/Sir-Albert"> 
                <PoodleCard image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2484882/Sir%20Albert.jpg" name="Sir Albert"/>
              </Link>
            </Col>

            <Col>
              <Link to="/poodle-detail/Cupcake"> 
                <PoodleCard image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2484882/cupcake.jpg" name="Cupcake"/>
              </Link>
            </Col>

            <Col>  
              <Link to="/poodle-detail/Lolo">
                <PoodleCard image="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2484882/lolo.jpg" name="Lolo"/>
              </Link>
            </Col>

          </Row>
        </Container>
      </div>

    </div>
  );
}

export default App;