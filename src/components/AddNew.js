import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { sumbitItem } from '../actions/index';

// import store from '../store/configure-store';

const mapDispatchToProps = (dispatch) => ({
    sumbitItem: itemData => dispatch(sumbitItem(itemData))
});

class AddNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showForm: false
        };

        this.nameRef = React.createRef();
        this.quantityRef = React.createRef();
        this.priceRef = React.createRef();
        
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            showForm: !this.state.showForm
        });
    }

    submitItemToStore = () => {
        const newItem = {
            "name": this.nameRef.current.value,
            "quantity": parseFloat(this.quantityRef.current.value),
            "price": parseFloat(this.priceRef.current.value),
        }

        this.props.sumbitItem(newItem);
        this.setState({
            showForm: !this.state.showForm
        });
    }

    render() {
        return(
            <React.Fragment>
                <Row>
                    <Col style={{textAlign:'right'}}>
                    <Button color="success" onClick={this.toggle}>+ Add New</Button>
                    </Col>
                </Row>
                <Modal isOpen={this.state.showForm} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add a New Item</ModalHeader>
                    <ModalBody style={{textAlign: 'center'}}>
                        <form>
                            <label>
                                Name:
                                <input type="text" name="name" className="inpField" ref={this.nameRef} />
                            </label>
                            <label>
                                Quantity:
                                <input type="number" name="quantity" className="inpField" ref={this.quantityRef} />
                            </label>
                            <label>
                                Price:
                                <input type="text" name="price" className="inpField" ref={this.priceRef} />
                            </label>
                        </form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={this.submitItemToStore}>Add Item</Button>
                        <Button color="danger" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </React.Fragment>
        );
    }
}

export default connect(null, mapDispatchToProps)(AddNew);