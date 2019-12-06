import React, { Component } from 'react';

import Quantity from '../quantity';
import GreenPriceTag from '../greenPriceTag';

class ShopProduct extends Component {
    render() {
        const { title, description, price } = this.props;
        return (
            <div className="shop-product">
              <div className="shop-product__front">
                  <img className="shop-product__front__image" src="http://via.placeholder.com/220x220" />
                  <div className='shop-product__front__title'>{title}</div>

              </div>  
              <div className="shop-product__back">
                <div className="shop-product__back__top">
                        <div className="shop-product__back__title">{title}</div>
                        <div className="shop-product__back__description">{description}</div>
                    </div>
                    <div className="shop-product__back__bottom">
                        <div className="shop-product__back__price-incrementor-wrapper">
                            <GreenPriceTag className="shop-product__back__price" price={price} />
                            <Quantity quantity={1} className="shop-product__back__quantity" />
                        </div>
                        <div className="shop-product__back__button-wrapper">
                            <div className="shop-product__back__add-to-cart">Add To Cart</div>
                        </div>
                    </div>
              </div>
            </div>
        )
    }
}

export default ShopProduct;