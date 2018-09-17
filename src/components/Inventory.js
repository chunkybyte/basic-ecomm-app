import React from 'react';

import Item from './Item';

class Inventory extends React.Component {
    render() {
        return (
            <div>
                {this.props.list.map(item => <Item key={item.id} itemInfo={item} />)}
            </div>
        );
    }
}

export default Inventory;