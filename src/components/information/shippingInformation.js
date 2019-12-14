import React, { Component } from 'react';
import { connect } from 'react-redux';



import pageTitle from '../pageTitle';
import ShippingForm from './shippingForm';
import { UnderlinedTitle, InfoLabel,  } from './infoHelp';

class ShippingInformation extends Component {
  render() {
    const tax = 0.16;
    let subtotal = 0;
    this.props.cartProducts.map(cartProduct => {
        subtotal += (cartProduct.quantity * cartProduct.product.price);
    });;
    let stickerCount = 0;
    this.props.cartProducts.map(cartProduct => {
        stickerCount += cartProduct.quantity;
    });
    return(
        <div className="shipping-information">
            {pageTitle("shipping-information__title", "Shipping Address")}
            <div className="shipping-information__content">
                <ShippingForm className="shipping-information__form" />
                <div className="shipping-information__order-summary">
                    <UnderlinedTitle className="shipping-information__order-summary-title" title="Order Summary" />
                    <InfoLabel className="order-summary__info-label" title={`${stickerCount} Stickers`} value={`$${subtotal}`}/>
                    <InfoLabel className="order-summary__info-label" title="Taxes & Shipping" value={`$${tax}`}/>
                    <InfoLabel className="info-label-green" title="Total" value={`$${subtotal + tax}`}/>
                </div>
            </div>
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

ShippingInformation = connect(MapStateToProps)(ShippingInformation);
export default ShippingInformation;