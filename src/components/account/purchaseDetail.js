import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

class PurchaseDetail extends Component {
    render() {
        const { className } = this.props;
        return(
            <div className={`${className} purchase-detail`}>
                
            </div>
        )
    }
}

PurchaseDetail = connect(null, actions)(PurchaseDetail);
export default PurchaseDetail;