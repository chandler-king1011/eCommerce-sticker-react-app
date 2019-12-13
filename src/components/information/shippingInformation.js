import React, { Component } from 'react';

import pageTitle from '../pageTitle';
import ShippingForm from './shippingForm';

class ShippingInformation extends Component {

  render() {
    return(
        <div className="shipping-information">
            {pageTitle("shipping-information__title", "Shipping Address")}
            <ShippingForm className="shipping-information__form" />
        </div>
    )
}
}

export default ShippingInformation;