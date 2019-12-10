import React, { Component } from 'react';

function CartFooter({className ,products}) {
    const price = 7.96;

    return (
        <div className={`${className} cart-footer`}>
            <button className='cart-footer__checkout'>Checkout</button>
            <div className='cart-footer__subtotal'>
                <div className='subtotal__label'>Subtotal</div>
                <div className='subtotal__price'>${price}</div>
            </div>
        </div>

    )
}


class CartContent extends Component {
    render() {
        const {className, products}  = this.props;
        let count = products.length;
        let productsJSX = products.map(product => <h1>{product}</h1>);

    return (
        <div className={`${className} cart-content`}>
            <div className='cart-content__title'>Cart ({count})</div>
            <div className='cart-content__products'>
                {productsJSX}
            </div>
            <CartFooter className='cart-content__footer' products={products} />
        </div>
    )
  }
}

export default CartContent;