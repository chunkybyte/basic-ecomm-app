import React from "react";
import { Container } from "reactstrap";

import { connect } from "react-redux";

import Header from "./Header";
import Inventory from "./Inventory";
import AddNew from "./AddNew";
import GrandTotal from "./GrandTotal";

const mapStateToProps = state => ({
  ...state
});

const App = props => {
  return (
    <Container>
      <Header />
      <AddNew />
      <Inventory list={props.data} />
      <GrandTotal />
    </Container>
  );
};

export default connect(mapStateToProps)(App);
