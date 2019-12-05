import React, { Component } from 'react';

class GreenPriceTag extends Component {
    render() {
        const { price, className } = this.props;
        return (
            <div className={`${className} green-price-tag`}>
                {`$${price}`}
            </div>
        )
    }
}

export default GreenPriceTag;

