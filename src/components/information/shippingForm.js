import React, { Component } from 'react';
import { reduxForm, Field} from 'redux-form';

import { FormInput, FormButton } from '../formFields';
import history from '../../history';

class ShippingForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;

    return(
        <form className={`${className} shipping-form`} onSubmit={handleSubmit}>
            <Field className="shipping-form__name" name="name" type="name" title="Name" placeholder="Name" component={FormInput} />
            <Field className="shipping-form__street" name="street" type="street" title="Street Address" placeholder="Street Address" component={FormInput} />
            <Field className="shipping-form__city" name="city" type="city" title="City" placeholder="City" component={FormInput} />
            <div className="shipping-form__state-zip-wrapper">
                <Field className="shipping-form__state" name="state" type="state" title="State" placeholder="State" component={FormInput} />
                <Field className="shipping-form__zip" name="zip" type="zip" title="Zipcode" placeholder="Zipcode" component={FormInput} />
            </div>
            <div className="shipping-form__border"></div>
            <div className="shipping-form__buttons">
                <Field className="shipping-form__back" name="back" type="button" title="Back" component={FormButton} onClick={() => history.push('/order/review')} gray={true} />
                <Field className="shipping-form__use-address" name="use" type="submit" title="Use this Address" component={FormButton} onClick={() => history.push('/information/payment')} />
            </div>
        </form>
    )
}
}

ShippingForm = reduxForm({
    form: 'ShippingForm'
})(ShippingForm);


export default ShippingForm;