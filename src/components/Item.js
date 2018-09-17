import React from 'react';
import { Row, Col } from 'reactstrap';

const Item = (props) => {
    return (
        <Row className="itemEntry">
            <Col xs={8}>
                <h5>{props.itemInfo.name}</h5>
            </Col>
            <Col xs={2}>
                Price : <b>{props.itemInfo.price}</b>
                <br/>
                Quantity : <b>{props.itemInfo.quantity}</b>
            </Col>
            <Col xs={2} style={{textAlign: 'right'}}>
                Total : <b>{props.itemInfo.price * props.itemInfo.quantity}</b>
            </Col>
        </Row>
    );
};

export default Item;