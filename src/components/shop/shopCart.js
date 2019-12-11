import React, { Component } from 'react';
import { connect } from 'react-redux';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import * as actions from '../../actions';
import CartContent from './shopCartContent';
import CartButton from './cartButton';



class ShopCart extends Component {

    componentDidMount() {
        this.props.fetchCartProducts();
    }

     handleAddToCart() {
        const cart = document.getElementById('shop-cart');
        if(cart.classList.contains('cart-hidden')) {
            cart.classList.remove('cart-hidden');
        } else {
            cart.classList.add('cart-hidden');
        }
    }

    render() {
        const { className } = this.props;
        return(
            <div id="shop-cart" className={`${className} shop-cart cart-hidden`}>
                <CartButton className='shop-cart__toggle' icon={faTimes} onClick={this.handleAddToCart} />
                <CartContent className='shop-cart__content' products={this.props.cartProducts} />
            </div>
        )
    }
}
function mapStateToProps(state) {
    const { cartProducts }  = state.user
    return {
        cartProducts
    }
}

ShopCart = connect(mapStateToProps, actions)(ShopCart);
export default ShopCart;