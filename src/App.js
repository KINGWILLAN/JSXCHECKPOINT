import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Name from "./components/Name";
import Image from "./components/Image";
import Card from "react-bootstrap/Card";
import Price from "./components/Price";
import Description from "./components/Description";
import { Col, Row, Container } from "react-bootstrap";

let firstName = prompt("Enter your first name").trim();
const App = () => {
  return (
    <Container className="mt-5">
      <Row>
        <Col lg={{ span: 12, offset: 4 }}>
          <Card style={{ width: "18rem" }} className="justify-content-center">
            <Card.Header>{<p> Hello {firstName || "there!"}</p>}</Card.Header>
            <Image />
            <Card.Body>
              <Name />
              <Price></Price>
              <Description />
            </Card.Body>
            <Card.Footer>
              {firstName ? (
                <div className="d-flex justify-content-between align-items-center">
                  Hello, {firstName}
                  <image
                    width={200}
                    src="https://di-uploads-pod24.dealerinspire.com/iratoyotaofdanvers/uploads/2023/01/381092_MY23_Camry_US_XLE-Hybrid_03U5_001_DS-Front-7-8_2K-767x279.png"
                    alt="picture"
                  />
                </div>
              ) : (
                <div>Hello There!</div>
              )}
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
