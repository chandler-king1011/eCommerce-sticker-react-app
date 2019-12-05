import React, { Component } from 'react';
import {reduxForm, Field} from 'redux-form';


function shopSearchForm(props) {
    const {className, placeHolder, input} = props;
    return(
        <input className={`${className} form-search-bar`} type="text" placeholder={placeHolder} {...input} />
    )
}

class ShopSearchBar extends Component {
    
    render() {
        const { handleSubmit, className } = this.props;
        return(
            <form className="shop-search-bar" onSubmit={handleSubmit}>
                <Field name="shop-search-bar" className={`${className} shop-search-bar__field`} placeHolder="Search" component={shopSearchForm} />
            </form>
        )
    }
}

ShopSearchBar = reduxForm({
    form: 'ShopSearchBar'
})(ShopSearchBar);

export default ShopSearchBar;