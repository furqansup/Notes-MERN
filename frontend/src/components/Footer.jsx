import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer
      style={{
        width:'100%',
        position: "relative",
        display: "flex",
        justifyContent: "center",
        bottom: 0,
      }}
    >
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; Note Snap</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
