import React from "react";
import { Row, Col } from "reactstrap";

const Header = () => {
  return (
    <React.Fragment>
      <Row>
        <Col style={{ textAlign: "center", paddingTop: 40 }}>
          <h3>A Weird Shop</h3>
        </Col>
      </Row>
      <Row style={{ textAlign: "center" }}>
        <Col>
          <h6>Our Inventory</h6>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default Header;
