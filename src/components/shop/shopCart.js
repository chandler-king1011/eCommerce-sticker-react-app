import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import CartContent from './shopCartContent';


function CartButton({className, icon}) {
    return (
        <div className={`${className} cart-button`}>
            <FontAwesomeIcon icon={icon} />
        </div>
    )
}



class ShopCart extends Component {
    render() {
        const { className } = this.props;
        return(
            <div className={`${className} shop-cart`}>
                <CartButton className='shop-cart__toggle' icon={faTimes} />
                <CartContent className='shop-cart__content' products={[1, 2, 3]} />
            </div>
        )
    }
}

export default ShopCart;