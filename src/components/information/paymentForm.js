import React, { Component } from 'react';
import { reduxForm, Field} from 'redux-form';

import { FormInput, FormButton } from '../formFields';
import history from '../../history';

class PaymentForm extends Component {
  render() {
    const { className, handleSubmit} = this.props;
    return(
        <form className={`${className} payment-form`} onSubmit={handleSubmit}>
            <Field className="payment-form__name" name="name" type="name" title="Name" placeholder="Name" component={FormInput} />
            <Field className="payment-form__email" name="email" type="email" title="Email" placeholder="Email" component={FormInput} />
            <Field className="payment-form__password" name="password" type="password" title="Password" placeholder="Password" component={FormInput} />
            <Field className="payment-form__confirm" name="confirm" type="password" title="Confirm Password" placeholder="Confirm Password" component={FormInput} />
            <div className="payment-form__border"></div>
            <div className="payment-form__buttons">
                <Field className="payment-form__back" name="back" type="button" title="Back" component={FormButton} onClick={() => history.push('/signin')} gray={true} />
                <Field className="payment-form__create" name="create" type="submit" title="Create Account" component={FormButton} onClick={() => history.push('./account')} />
            </div>
        </form>
    )
}
}

PaymentForm = reduxForm({
    form: 'PaymentForm'
})(PaymentForm);


export default PaymentForm;