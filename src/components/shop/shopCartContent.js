import React, { Component } from 'react';


class CartContent extends Component {
    render() {
        const {className, products}  = this.props;
        const count = products.length;
    return (
        <div className={`${className} cart-content`}>
            <div className='cart-content__title'>Cart ({count})</div>
            <div className='cart-content__products'>

            </div>
            <div className='cart-content__footer'>
                
            </div>
        </div>
    )
  }
}

export default CartContent;