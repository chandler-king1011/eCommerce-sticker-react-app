import React, { Component } from 'react';

class Details extends Component {

  
  render() {
    const { className, title, links, makeLinks } = this.props;

    
    return(
        <div className={`${className} details`}>
          <div className="details__title">{title}</div>
          <div className={`details__links ${makeLinks ? "" : "details__items"}`}>
            {links.map(link => {
              if (!link.onClick) {
                return <div className="details__material" key={link.id}>{link.title}</div>
              }
              else {
                return <a className="details__link" onClick={link.onClick} key={link.id}>{link.title}</a>
            
              }
            })}
          </div>
        </div>
    )
    }
}

export default Details;