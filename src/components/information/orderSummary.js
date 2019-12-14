import React, { Component } from 'react';

import { connect } from 'react-redux';

import { UnderlinedTitle, InfoLabel,  } from './infoHelp';


class OrderSummary extends Component {
    render() {
    const { className } = this.props;
    const tax = 0.16;
    let subtotal = 0;
    this.props.cartProducts.map(cartProduct => {
        subtotal += (cartProduct.quantity * cartProduct.product.price);
    });;
    let stickerCount = 0;
    this.props.cartProducts.map(cartProduct => {
        stickerCount += cartProduct.quantity;
    });

    return (
        <div className={`${className} order-summary`} >
            <UnderlinedTitle className="order-summary__order-summary-title" title="Order Summary" />
            <InfoLabel className="order-summary__info-label" title={`${stickerCount} Stickers`} value={`$${subtotal}`}/>
            <InfoLabel className="order-summary__info-label" title="Taxes & Shipping" value={`$${tax}`}/>
            <InfoLabel className="info-label-green" title="Total" value={`$${subtotal + tax}`}/>
        </div>
)
}
}

function MapStateToProps(state) {
    const { cartProducts } = state.user;
    return {
        cartProducts
    }
}

OrderSummary = connect(MapStateToProps)(OrderSummary);
export default OrderSummary;

