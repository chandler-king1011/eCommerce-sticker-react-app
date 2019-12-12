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
            <ReviewProducts className="review-form__products" />
            <div className="review-form__buttons">
                <Field className="review-form__" name="back" type="button" title="Back" component={FormButton} onClick={() => history.push('/shop')} gray={true} />
                <Field className="review-form__proceed" name="proceed" type="submit" title="Proceed to Checkout" component={FormButton} onClick={() => history.push('/signin')} />
            </div>
        </form>
    )
}
}

ReviewForm = reduxForm({
    form: 'ReviewForm'
})(ReviewForm);


export default ReviewForm;