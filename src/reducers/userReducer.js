import { SET_USER_PURCHASES, SET_PURCHASE_DETAIL, SET_CART_PRODUCTS, ADD_ITEM_TO_CART, AUTHENTICATE_USER} from '../actions/types';

const INITIAL_STATE = {
    user: {},
    purchases: [],
    purchaseDetail: {
            id: -1,
            total: 0,
            orderNumber: 'Select an order',
            orderDate: '',
            creditCard: '',
            user: {
                name: "",
                shippingAddress: ""
            }
    },
    cartProducts: []
}

export default function(state=INITIAL_STATE, action) {
    switch(action.type) {
        case AUTHENTICATE_USER: 
            const { user } = action.payload;
            return {
                ...state,
                user
            }
        case SET_USER_PURCHASES:
            return{
                ...state,
                purchases: action.payload
            }
        case SET_PURCHASE_DETAIL: 
            let purchaseDetail;
            state.purchases.map(purchase => {
                if (purchase.id == action.payload) {
                    purchaseDetail = purchase;
                } 
            })
            return{
                ...state,
                purchaseDetail
            }
        case SET_CART_PRODUCTS:
            return {
                ...state,
                cartProducts: action.payload
            }
        case ADD_ITEM_TO_CART: 
            let exists = false;
            const newCP = action.payload;
            let cartProducts = [];
            state.cartProducts.map(cartProduct => {
                if (cartProduct.product.id == newCP.id) {
                    exists = true;
                    cartProduct.quantity += 1;
                }
                cartProducts.push(cartProduct);
                })
                if (exists == false) {
                    cartProducts.push({
                        id: state.cartProducts.length + 1,
                        product: newCP,
                        quantity: 1
                    });
                }

            return {
                ...state,
                cartProducts: cartProducts
            }

        default: 
            return state;
    }
}