import React from "react";
import { Container, Row, Col } from 'reactstrap';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


function App() {
  return (
    <>
      <Container fluid className="App">
        <Row>
          <Col>
            <Header />
          </Col>
        </Row>

        <Row>
          <Col>
            <Footer />
          </Col>
        </Row>

      </Container>
    </>
  );
}

export default App;
