import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import * as actions from '../../actions';
import CartContent from './shopCartContent';




function CartButton({className, icon}) {
    return (
        <div className={`${className} cart-button`}>
            <FontAwesomeIcon icon={icon} />
        </div>
    )
}



class ShopCart extends Component {

    componentDidMount() {
        this.props.fetchCartProducts();
    }

    render() {
        const { className } = this.props;
        return(
            <div className={`${className} shop-cart`}>
                <CartButton className='shop-cart__toggle' icon={faTimes} />
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