import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import SignInForm from './signinForm';
import pageTitle from '../pageTitle';



class SignIn extends Component {
  
  componentDidMount() {
      this.props.setHeaderLinks([]);
      this.props.setNavbarLinks([]);
  }  

  onSubmit = (field) => {
      field.preventDefault();
      const fields = {};
      fields.email = field.target.children[0].children[1].value;
      fields.password = field.target.children[1].children[1].value;
      this.props.signIn(fields.email, fields.password);
      this.props.history.push('/account');

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



SignIn = connect(null, actions)(SignIn);
export default SignIn;