import React, { Component } from 'react';
import { reduxForm, Field} from 'redux-form';

import { FormInput, FormButton } from '../formFields';
import Details from '../details';
import history from '../../history';

class SignInForm extends Component {
  render() {
    const { className, handleSubmit} = this.props;
    const links = [{
        id: 0,
        title: 'Not Registered? Create account here.',
        onClick: () => history.push('/signup')
    }, {
        id: 1,
        title: 'Forgot account email?',
        onClick: () => console.log('Forgot email')
    }, {
        id: 2,
        title: 'Forgot password?',
        onClick: () => console.log('Forgot password')
    }];
    return(
        <form className={`${className} sign-in__form`} onSubmit={handleSubmit}>
            <Field className="sign-in-form__email" name="email" type="email" title="Email" placeholder="Email" component={FormInput} />
            <Field className="sign-in-form__password" name="password" type="password" title="Password" placeholder="Password" component={FormInput} />
            <div className="sign-in-form__border"></div>
            <Field className="sign-in-form__login" name="login" type="submit" title="Login" component={FormButton} />
            <Details className="sign-in-form__details" title="Quick Links" links={links} makeLinks={true}/>
        </form>
    )
}
}

SignInForm = reduxForm({
    form: 'SignInForm'
})(SignInForm);


export default SignInForm;