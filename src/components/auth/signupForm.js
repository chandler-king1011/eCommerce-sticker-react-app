import React, { Component } from 'react';
import { reduxForm, Field} from 'redux-form';

import { FormInput, FormButton } from '../formFields';
import Details from '../details';
import history from '../../history';

class SignUpForm extends Component {
  render() {
    const { className, handleSubmit} = this.props;
    const links = [{
        id: 0,
        title: 'At least 6 characters'

    }, {
        id: 1,
        title: 'At least one number'
        
    }, {
        id: 2,
        title: 'At least one symbol'
    
    }];
    return(
        <form className={`${className} sign-up__form`} onSubmit={handleSubmit}>
            <Field className="sign-up-form__name" name="name" type="name" title="Name" placeholder="Name" component={FormInput} />
            <Field className="sign-up-form__email" name="email" type="email" title="Email" placeholder="Email" component={FormInput} />
            <Field className="sign-up-form__password" name="password" type="password" title="Password" placeholder="Password" component={FormInput} />
            <Field className="sign-up-form__confirm-password" name="confirm" type="password" title="Confirm Password" placeholder="Confirm Password" component={FormInput} />


            <div className="sign-up-form__border"></div>
            <Field className="sign-up-form__back" name="back" type="button" title="Back" component={FormButton} onClick={() => console.log("go back")} gray={true} />
            <Field className="sign-up-form__login" name="login" type="submit" title="Login" component={FormButton} onClick={() => console.log("submitting")} />
            <Details className="sign-up-form__details" title="Password requirements" links={links}/>
        </form>
    )
}
}

SignUpForm = reduxForm({
    form: 'SignUpForm'
})(SignUpForm);


export default SignUpForm;