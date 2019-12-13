import React, { Component } from 'react';

import CartProduct from './cartProduct';
import history from '../../history';

function CartFooter({className, products, subtotal}) {
    return (
        <div className={`${className} cart-footer`}>
            <button onClick={() => history.push('/order/review')} className='cart-footer__checkout'>Checkout</button>
            <div className='cart-footer__subtotal'>
                <div className='subtotal__label'>Subtotal</div>
                <div className='subtotal__price'>{`$${subtotal}`}</div>
            </div>
        </div>

    )
}


class CartContent extends Component {
    render() {
        const {className, products, subtotal}  = this.props;
        let count = products.length;
        let productsJSX = products.map(product => <CartProduct key={product.id} title={product.product.title} price={product.product.price} quantity={product.quantity} />);

    return (
        <div className={`${className} cart-content`}>
            <div className='cart-content__title'>Cart ({count})</div>
            <div className='cart-content__products'>{productsJSX}</div>
            <CartFooter className='cart-content__footer' products={products} subtotal={subtotal}/>
        </div>
    )
  }
}

export default CartContent;