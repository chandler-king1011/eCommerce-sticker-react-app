import React, { Component } from 'react';
import { connect } from 'react-redux';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

import * as actions from '../../actions';
import ShopSearchBar from './shopSearchBar';
import ShopProduct from './shopProduct';
import ShopCart from './shopCart';
import CartButton from './cartButton';

class Shop extends Component {

  componentDidMount() {
    const headerLinks = [
        {
            id: 0,
            title: "Login",
            path: "/signin"
        }
    ];
      this.props.setHeaderLinks(headerLinks);
      this.props.fetchShopCategories();
      this.props.fetchShopProducts();
  }

  shouldComponentUpdate(nextProps) {
      if (this.props != nextProps) {
          this.props.setNavbarLinks(nextProps.categories, (id) => this.props.filterProductsWithCategoryId(id));
      }
      return true;
  }

  handleAddToCart() {
    const cart = document.getElementById('shop-cart');
    if(cart.classList.contains('cart-hidden')) {
        cart.classList.remove('cart-hidden');
    } else {
        cart.classList.add('cart-hidden');
    }
  }

  onSubmit = (fields) => {
      event.preventDefault();
      this.props.filterProductsByQuery(fields.target[0].value);
  }

  render() {
    return(
        <div className="shop">
            <ShopCart className="shop__cart" />
            <CartButton className="open-cart-button" icon={faCartPlus} onClick={this.handleAddToCart}/>
            <ShopSearchBar  handleSubmit={this.onSubmit}/>
            <div className="shop__products">
                {this.props.filteredProducts.map(product => {
                    return (
                        <ShopProduct key={product.id} {...product} />
                    )
                })}
            </div>
        </div>
    )
}
}



function mapStateToProps(state) {
    const { categories, filteredProducts } = state.shop;
    return { 
        categories,
        filteredProducts
}
}


Shop = connect(mapStateToProps, actions)(Shop);
export default Shop;