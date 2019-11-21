import React, { Component } from 'react';

import PageTitle from '../pageTitle';
import Purchases from './purchases';
import PurchaseDetail from './purchaseDetail';


class PurchaseHistory extends Component {
  render() {
    return(
        <div className="purchase-history">
          {PageTitle("purchase-history__page-title", "Purchase History")}
          <div className = "purchase-history__content">
            <Purchases className="purchase-history__purchases"/>
            <PurchaseDetail className="purchase-history__purchase-detail" />
          </div>
          <div className="purchase-history__bottom-border"></div>
        </div>
    )
}
}

export default PurchaseHistory;