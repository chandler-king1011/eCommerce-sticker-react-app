import React, { Component } from 'react';
import { connect } from 'react-redux';

function PurchaseDetailLabel({className, title, value}) {
    return (
        <div className={`${className} purchase-detail-label`}>
            <div className='purchase-detail-label__title'>{`${title}:`}</div>
            <div className='purchase-detail-label__value'>{value}</div>
        </div>
    )
}

class PurchaseDetail extends Component {

    render() {
        const { className, orderNumber, orderDate, user, total, creditCard } = this.props;
        const { name, shippingAddress} = user;
        return(
            <div className={`${className} purchase-detail`}>
                <div className= "purchase-detail__column-one">
                    <div className= "purchase-detail__number-date">
                        <PurchaseDetailLabel 
                            className='purchase-detail_order-number'
                            title='Order Number'
                            value={orderNumber}
                        />
                        <PurchaseDetailLabel 
                            className='purchase-detail_order-date'
                            title='Order Date'
                            value={orderDate}
                        />
                    </div>
                    <div className="purchase-detail__address-name">
                        <PurchaseDetailLabel 
                            className='purchase-detail_name'
                            title='Name'
                            value={name}
                        />
                        <PurchaseDetailLabel 
                            className='purchase-detail_shipping'
                            title='Shipping Address'
                            value={shippingAddress}
                        />
                    </div>
                </div>
                <div className="purchase-detail__column-two">
                    <div className="purchase-detail__total-card">
                        <PurchaseDetailLabel 
                            className='purchase-detail_total'
                            title='Total'
                            value={total}
                        />
                        <PurchaseDetailLabel 
                            className='purchase-detail_card'
                            title='Credit Card'
                            value={creditCard}
                        />
                    </div>
                    <div className="purchase-detail__links">
                        <a className="purchase-detail__track">Track Shipment</a>
                        <a className="purchase-detail__print">Print Receipt</a>
                    </div>
                </div>  
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { purchaseDetail } = state.user;
    return { 
        ...purchaseDetail
     };
}

PurchaseDetail = connect(mapStateToProps)(PurchaseDetail);
export default PurchaseDetail;