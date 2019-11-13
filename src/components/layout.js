import React, { Component } from 'react';

import Header from './header_nav/header';
import Navbar from './header_nav/navbar';

export default class Layout extends Component {
  render() {
    return (
      <div className='layout'>
        {this.props.children}
        <Header />
        <Navbar />
      </div>
    );
  }
}
