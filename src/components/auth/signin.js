import React, { Component } from 'react';

import SignInForm from './signinForm';
import pageTitle from '../pageTitle';


class SignIn extends Component {

  onSubmit = (field) => {
      field.preventDefault();
      const fields = {};
      fields.email = field.target.children[0].children[1].value;
      fields.password = field.target.children[1].children[1].value;
      console.log(fields);
  }

  render() {
    return(
        <div className="sign-in">
            {pageTitle("sign-in__page-title", "Login")}
            <SignInForm handleSubmit={this.onSubmit} className='sign-in__form' />
        </div>
    )
}
}




export default SignIn;