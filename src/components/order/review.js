import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import pageTitle from '../pageTitle';

class Review extends Component {
    componentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }
    render() {
        return (
            <div className="review">
                {pageTitle("review__page-title", "Order Review")}
            </div>
        )
    }
}

Review = connect(null, actions)(Review);
export default Review;