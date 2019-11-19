import React, { Component } from 'react';

import SignUpForm from './signupForm';
import pageTitle from '../pageTitle';


class SignUp extends Component {

  onSubmit = (field) => {
      field.preventDefault();
      const fields = {};
      fields.email = field.target.children[0].children[1].value;
      fields.password = field.target.children[1].children[1].value;
      console.log(fields);
  }

  render() {
    return(
        <div className="sign-up">
            {pageTitle("sign-up__page-title", "Register")}
            <SignUpForm handleSubmit={this.onSubmit} className='sign-up__form' />
        </div>
    )
}
}




export default SignUp;