import React from "react";
import { connect } from "react-redux";
import { Row, Col } from "reactstrap";

const mapStateToProps = state => ({
  ...state
});

class GrandTotal extends React.Component {
  constructor(props) {
    super(props);
  }

  grandTotal = () => {
    const data = this.props.data;
    const total = data.reduce(
      (total, item) => total + item.quantity * item.price,
      0.0
    );
    return total;
  };

  render() {
    return (
      <Row className="grandTotal">
        <Col>Grand Total : {this.grandTotal()}</Col>
      </Row>
    );
  }
}

export default connect(mapStateToProps)(GrandTotal);
