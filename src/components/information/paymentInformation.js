import React, { Component } from 'react';

import pageTitle from '../pageTitle';
import PaymentForm from './paymentForm';

class PaymentInformation extends Component {

  render() {
    return(
        <div className="payment-information">
            {pageTitle("payment-information__title", "Payment Information")}
            <PaymentForm />
        </div>
    )
}
}

export default PaymentInformation;