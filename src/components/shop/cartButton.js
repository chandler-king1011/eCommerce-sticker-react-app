import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function CartButton({className, icon, onClick}) {
    return (
        <a className={`${className} cart-button`} onClick={onClick} >
            <FontAwesomeIcon icon={icon} />
        </a>
    )
}

export default CartButton;