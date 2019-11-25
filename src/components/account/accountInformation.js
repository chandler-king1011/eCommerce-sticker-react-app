import React, { Component } from 'react';

import pageTitle from '../pageTitle';
import AccounInformationForm from './accountInformationForm';


class AccountInfo extends Component {

  onSubmit = (field) => {
    field.preventDefault();
    const fields = {};
    fields.email = field.target.children[0].children[1].value;
    fields.password = field.target.children[1].children[1].value;
    console.log(fields);
}

  render() {
    return(
      <div className="account-information">
        {pageTitle("account-information__page-title", "Account Information")}
        <AccounInformationForm className="account-information__form" handleSubmit={this.onSubmit} />
      </div>
    )
}
}

export default AccountInfo;