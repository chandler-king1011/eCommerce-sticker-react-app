import React, { Component } from 'react';

import GreenPriceTag from '../greenPriceTag';

class ReviewProduct extends Component {
    render() {
        const { image, title, quantity, price } = this.props;
        return (
            <div className="review-product">
                <img className="review-product__image" src={image} />
                <div className="review-product__title">{title}</div>
                <div className="review-product__quantity">{quantity}</div>
                <GreenPriceTag className="review-product__price" price={price * quantity} />
            </div>
        )
    }
}

export default ReviewProduct;