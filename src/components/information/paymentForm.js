import React, { Component } from 'react';
import { reduxForm, Field} from 'redux-form';

import { FormInput, FormButton } from '../formFields';
import history from '../../history';

class PaymentForm extends Component {
  render() {
    const { className, handleSubmit} = this.props;
    return(
        <form className={`${className} payment-form`} onSubmit={handleSubmit}>
            <Field className="payment-form__name-on-card" name="name" type="name" title="Name on Credit Card" placeholder="Name" component={FormInput} />
            <Field className="payment-form__card-number" name="card" type="card" title="Credit Card Number" placeholder="____-____-____-____" component={FormInput} />
            <div className="payment-form__exp-cvv">
                <Field className="payment-form__exp" name="expiration" type="expiration" title="Expiration Date" placeholder="MM/YYYY" component={FormInput}  />
                <Field className="payment-form__cvv" name="ccv" type="ccv" title="CCV" placeholder="CCV" component={FormInput}  />
            </div>
            <div className="payment-form__border"></div>
            <div className="payment-form__buttons">
                <Field className="payment-form__back" name="back" type="submit" title="Back" component={FormButton} onClick={() => history.push('/information/shipping')} gray={true} />
                <Field className="payment-form__pay" name="pay" type="submit" title="Pay and Complete Order" component={FormButton} onClick={() => history.push('/information/payment')} />
            </div>
        </form>
    )
}
}

PaymentForm = reduxForm({
    form: 'PaymentForm'
})(PaymentForm);


export default PaymentForm;