import React, { Component } from 'react';
import { reduxForm, Field} from 'redux-form';

import { FormInput, FormButton, LongGrayButton } from '../formFields';
import history from '../../history';

class AccountInformationForm extends Component {
  constructor() {
      super();

      this.state = {
          changePassword: false
      };

      this.updatePassword = this.updatePassword.bind(this);
  }

  updatePassword() {
      this.setState({
          changePassword: true
      });
  }


  render() {
    const { className, handleSubmit} = this.props;
    return(
        <form className={`${className} account-info__form`} onSubmit={handleSubmit}>
            <div className="account-info-form__column-one">
                <Field className="account-info-form__name" name="name" type="name" title="Name" placeholder="Name" component={FormInput} />
                <Field className="account-info-form__email" name="email" type="email" title="Email" placeholder="Email" component={FormInput} />
                {this.state.changePassword ?
                <div className= "account-info-form__change-password-fields">
                    <div className= "account-info-form__spacer"></div>
                    <Field className="account-info-form__current-password" name="current-password" type="password" title="Current Password" placeholder="Current Password" component={FormInput} />
                    <Field className="account-info-form__new-password" name="new-password" type="password" title="New Password" placeholder="New Password" component={FormInput} />
                    <Field className="account-info-form__confirm-password" name="confirm-password" type="password" title="Confirm Password" placeholder="Confirm Password" component={FormInput} />
                    <div className="account-info-form__border"></div>
                    <div className="account-info-form__change-pw-buttons">
                        <Field className="account-info-form__cancel" name="cancel" type="button" title="Cancel" component={FormButton} onClick={() => this.setState({ changePassword: false})} gray={true} />
                        <Field className="account-info-form__update" name="update" type="submit" title="Update Information" component={FormButton} onClick={() => {console.log("changed password")}} />
                    </div>
                </div>
                :
                <Field className="account-info-form__change-password" name="change-password" type="button" title="Change Password" long={true} component={LongGrayButton} onClick={() => this.updatePassword()} />
                }
            </div>
            <div className="account-info-form__column-two">
                <Field className="account-info-form__street" name="street" type="street" title="Street Address" placeholder="Street Address" component={FormInput} />
                <Field className="account-info-form__city" name="city" type="city" title="City" placeholder="City" component={FormInput} />
                <div className="account-info-form__state-zipcode">
                    <Field className="account-info-form__state" name="state" type="state" title="State" placeholder="State" component={FormInput} />
                    <Field className="account-info-form__zipcode" name="zipcode" type="zipcode" title="Zipcode" placeholder="Zipcode" component={FormInput} />
                </div>
            </div>
        </form>
    )
}
}

AccountInformationForm = reduxForm({
    form: 'AccountInformationForm'
})(AccountInformationForm);


export default AccountInformationForm;