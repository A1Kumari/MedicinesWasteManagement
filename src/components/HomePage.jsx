import React from "react";
import {Container,Row,Col,Image} from 'react-bootstrap';
import './home.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function HomePage() {
  return (
    <>
    <Container fluid>
      <Row className="hero align-items-center">
        <Col md={6} className="text-center">
          <div className="upload-container mx-auto">
            <div className="uploader">
              <Image src="src\assets\plus.png" className="img-fluid w-25 mx-auto" />
              <span>Upload your Stock File</span>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <h1>Know about your <br /> Stock Report</h1>
          <h3>Like never Before</h3>
        </Col>
      </Row>
    </Container>
    </>
  );
}
