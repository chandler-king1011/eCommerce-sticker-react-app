import React, { Component } from 'react';

import pageTitle from '../pageTitle';
import PaymentForm from './paymentForm';
import OrderSummary from './orderSummary';
import ShipSummary from './shipToSummary';

class PaymentInformation extends Component {

  render() {
    return(
        <div className="payment-information">
            {pageTitle("payment-information__title", "Payment Information")}
            <div className="payment-information__content">
                <PaymentForm className="payment-information__form" />
                <div className="payment-information__summary-wrapper">
                    <OrderSummary className="payment-information__order-summary" />
                    <ShipSummary className="payment-information__ship-to" />
                </div>
            </div>
        </div>
    )
}
}

export default PaymentInformation;