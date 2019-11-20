import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import AccountInformation from '../account/accountInformation';
import PurchaseHistory from '../account/purchaseHistory';

class Account extends Component {

  componentDidMount() {
      const navbarLinks = [
          {
            title: "Purchase History",
            component: <PurchaseHistory />,
            active: true
        },
          {
            title: "Account Information",
            component: <AccountInformation />,
            active: false
        },
      ];
      const headerLinks = [
          {title: "Shop"},
          {title: "Logout"}
    ]
      this.props.setHeaderLinks(headerLinks);
      this.props.setNavbarLinks(navbarLinks);

  }
  renderContent() {
     let jsx;
     if (this.props.navbarLinks) {
         this.props.navbarLinks.map(link => {
             if (link.active) {
                 jsx = link.component
             }
         })
         return jsx;
     }
  }
  render() {
    return(
        <div>
            {this.renderContent()}
        </div>
    )
}
}
function mapStateToProps(state) {
    const { headerLinks, navbarLinks} = state.headerNavbar;
    return {headerLinks, navbarLinks}
}

Account = connect(mapStateToProps, actions)(Account);
export default Account;