import React, { Component } from 'react';
import { reduxForm, Field} from 'redux-form';

import { FormInput, FormButton } from '../formFields';

class SignInForm extends Component {
  render() {
    const { className, handleSubmit} = this.props;  
    return(
        <form className={`${className} sign-in__form`} onSubmit={handleSubmit}>
            <Field className="sign-in-form__email" name="email" type="email" title="Email" placeholder="Email" component={FormInput} />
            <Field className="sign-in-form__password" name="password" type="password" title="Password" placeholder="Password" component={FormInput} />
            <div className="sign-in-form__border"></div>
            <Field className="sign-in-form__login" name="login" type="submit" title="Login" component={FormButton} onClick={() => console.log("submitting")} />
        </form>
    )
}
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm);


export default SignInForm;