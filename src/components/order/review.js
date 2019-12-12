import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import pageTitle from '../pageTitle';
import ReviewForm from './reviewForm';


class Review extends Component {
    componentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }

    onsubmit = (fields) => {
        console.log(fields);
    }
    
    render() {
        return (
            <div className="review">
                {pageTitle("review__page-title", "Order Review")}
                <ReviewForm className="review__form" handleSubmit={this.onSubmit} />
            </div>
        )
    }
}

Review = connect(null, actions)(Review);
export default Review;