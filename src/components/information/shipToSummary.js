import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../../actions';

import { UnderlinedTitle } from './infoHelp';


class ShipSummary extends Component {
  render() {
    const { className }= this.props;
    const { name, address, city, state } = this.props.user;
        return(
        <div className={`${className} ship-summary`}>
            <UnderlinedTitle className="ship-summary__title" title="Shipping To" />
            <div className="ship-summary__name">{name}</div>
            <div className="ship-summary__address">{address}</div>
            <div className="ship-summary__city">{`${city}, ${state}`}</div>
            
        </div>

    )
}
}

function MapStateToProps(state) {
    const { user } = state.user;
    return {
        state,
        user
    }
}

ShipSummary = connect(MapStateToProps, actions)(ShipSummary);
export default ShipSummary;
