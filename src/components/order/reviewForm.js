import React, { Component } from 'react';
import { reduxForm, Field} from 'redux-form';

import history from '../../history';

import { FormButton } from '../formFields';
import ReviewProducts from './reviewProducts';

class ReviewForm extends Component {
  render() {
    const { className, handleSubmit} = this.props;

    return(
        <form className={`${className} review-form`} onSubmit={handleSubmit}>
            <div className="review-form__legend">
                <div className="review-form__legend__name">Name</div>
                <div className="review-form__legend__quantity">Quantity</div>
                <div className="review-form__legend__price">Price</div>
            </div>
            <ReviewProducts className="review-form__products" />

            <div className="review-form__footer-wrapper">
                <div className="review-form__buttons">
                    <Field className="review-form__" name="back" type="button" title="Back" component={FormButton} onClick={() => history.push('/shop')} gray={true} />
                    <Field className="review-form__proceed" name="proceed" type="submit" title="Proceed to Checkout" component={FormButton} onClick={() => history.push('/signin')} />
                </div>
                <div className="review-form__details review-details">
                    <div className="review-details__subtotal">
                        <div className="review-details__title">Subtotal</div>
                        <div className="review-details__value">$7.96</div>
                    </div>
                    <div className="review-details__tax">
                        <div className="review-details__title">Tax</div>
                        <div className="review-details__value">$0.16</div>
                    </div>
                    <div className="review-details__shipping">
                        <div className="review-details__title">Shipping</div>
                        <div className="review-details__value">$0.00</div>
                    </div>
                    <div className="review-details__total">
                        <div className="review-details__title">Total</div>
                        <div className="review-details__value">$8.12</div>
                    </div>
                </div>
            </div>
        </form>
    )
}
}

ReviewForm = reduxForm({
    form: 'ReviewForm'
})(ReviewForm);


export default ReviewForm;