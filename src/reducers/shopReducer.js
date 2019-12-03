import { SET_SHOP_CATEGORIES, SET_SHOP_PRODUCTS, FILTER_PRODUCTS_BY_CATEGORY } from '../actions/types';

const INITIAL_STATE = {
    categories: [],
    selectedCategoryId: 0,
    productsSelected: [],
    products: []
}

export default function(state=INITIAL_STATE, action) {
    switch(action.type) {
        case SET_SHOP_PRODUCTS:
            return{
                ...state,
                products: action.payload
        }
        case SET_SHOP_CATEGORIES:
            return{
                ...state,
                categories: action.payload
            }
        case FILTER_PRODUCTS_BY_CATEGORY:
            console.log(action.payload);
            return{
                ...state,
            }
            
        default: return state;
    }
}