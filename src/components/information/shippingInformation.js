import React, { Component } from 'react';


import pageTitle from '../pageTitle';
import ShippingForm from './shippingForm';
import OrderSummary from './orderSummary';

class ShippingInformation extends Component {
  render() {
    return(
        <div className="shipping-information">
            {pageTitle("shipping-information__title", "Shipping Address")}
            <div className="shipping-information__content">
                <ShippingForm className="shipping-information__form" />
                <OrderSummary className="shipping-information__order-summary" />
            </div>
        </div>
    )
}
}


export default ShippingInformation;