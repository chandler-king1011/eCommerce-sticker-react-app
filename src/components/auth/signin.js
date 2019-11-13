import React, { Component } from 'react';

import SignInForm from './signinForm';


class SignIn extends Component {

  onSubmit = (field) => {
      field.preventDefault();
      console.log(field);
  }

  render() {
    return(
        <div className="sign-in">
            <SignInForm handleSubmit={this.onSubmit} className='sign-in__form' />
        </div>
    )
}
}




export default SignIn;