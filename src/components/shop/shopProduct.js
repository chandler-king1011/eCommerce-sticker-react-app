import React, { Component } from 'react';

import Quantity from '../quantity';
import GreenPriceTag from '../greenPriceTag';

class ShopProduct extends Component {
    render() {
        const { title, description, price } = this.props;
        return (
            <div className="shop-product">
                <div className="shop-product__top">
                    <div className="shop-product__title">{title}</div>
                    <div className="shop-product__description">{description}</div>
                </div>
                <div className="shop-product__bottom">
                    <div className="shop-product__price-incrementor-wrapper">
                        <GreenPriceTag className="shop-product__price" price={price} />
                        <Quantity quantity={1} className="shop-product__quantity" />
                    </div>
                    <div className="shop-product__button-wrapper">
                        <div className="shop-product__add-to-cart">Add To Cart</div>
                    </div>0
                </div>1
            </div>
        )
    }
}

export default ShopProduct;