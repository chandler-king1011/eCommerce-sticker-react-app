import React, { Component } from 'react';

import { UnderlinedTitle } from './infoHelp';


class ShipSummary extends Component {
  render() {
    const { className }= this.props;
        return(
        <div className={`${className} ship-summary`}>
            <UnderlinedTitle className="ship-summary__title" title="Shipping To" />
            <div className="ship-summary__name">Chandler King</div>
            <div className="ship-summary__address">123 Any St Salem, UT 84653</div>
        </div>

    )
}
}
export default ShipSummary;
