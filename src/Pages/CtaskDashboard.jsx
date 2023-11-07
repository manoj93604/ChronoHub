import React from 'react';
import Container from 'react-bootstrap/Container';
import '../Assets/css/Welcome.css'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


const Welcome = () => {

  return (
    <Container fluid>
       <Row style={{paddingLeft: '35px', paddingRight: '35px', marginTop:'30px'}}>
        <Col lg={12}>
          <h1 style={{fontSize: '1.71429em'}}>Your Works</h1>
          <hr></hr>
        </Col>
      </Row>

      <Row style={{paddingLeft: '35px', paddingRight: '35px'}}>

      <div className="d-flex justify-content-between mb-3">
        <h6 style={{ marginRight: '10px' }}>Recent Projects</h6>
        <Button style={{ backgroundColor: "#385a64", border: 0 }} size='sm' > View All </Button>
      </div>

        <Col xs={12} md={6} lg={4} className='mb-3'>
          <Card>
            <Card.Header>Quote</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                  posuere erat a ante.{' '}
                </p>
                <footer className="blockquote-footer">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={4} className='mb-3'>
          <Card>
            <Card.Header>Quote</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                  posuere erat a ante.{' '}
                </p>
                <footer className="blockquote-footer">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={6} lg={4} className='mb-3'>
          <Card>
            <Card.Header>Quote</Card.Header>
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  {' '}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                  posuere erat a ante.{' '}
                </p>
                <footer className="blockquote-footer">
                  Someone famous in <cite title="Source Title">Source Title</cite>
                </footer>
              </blockquote>
            </Card.Body>
          </Card>
        </Col>
        <hr></hr>
      </Row>

    </Container>
  );
}

export default Welcome;