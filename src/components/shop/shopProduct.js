import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import Quantity from '../quantity';
import GreenPriceTag from '../greenPriceTag';

class ShopProduct extends Component {
    constructor() {
        super();

        this.handleAddToCart=this.handleAddToCart.bind(this);
    }

  handleAddToCart = () => {
        const cart = document.getElementById('shop-cart');
        if(cart.classList.contains('cart-hidden')) {
            cart.classList.remove('cart-hidden');
            const { id, title, description, price, belongsTo, imageUrl} = this.props;
            this.props.addItemToCart({ id, title, description, price, belongsTo, imageUrl});
        } else {
            cart.classList.add('cart-hidden');
        }
    }

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
                            <a className="shop-product__back__add-to-cart" onClick={this.handleAddToCart}>Add To Cart</a>
                        </div>
                    </div>
              </div>
            </div>
        )
    }
}



ShopProduct = connect(null, actions)(ShopProduct);
export default ShopProduct;