import { SET_SHOP_CATEGORIES, SET_SHOP_PRODUCTS, FILTER_PRODUCTS_BY_CATEGORY, FILTER_PRODUCTS_BY_QUERY  } from '../actions/types';

const INITIAL_STATE = {
    categories: [],
    selectedCategoryId: 0,
    products: [],
    filteredProducts: []
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
            let filteredProducts = []; 
            state.products.map(product => {
                if(product.belongsTo.includes(action.payload)) {
                    filteredProducts.push(product);
                }
            });
            return {
                ...state,
                filteredProducts
            }
        case FILTER_PRODUCTS_BY_QUERY: 
            filteredProducts = []; 
            state.products.map(product => {
                if(product.title.toLowerCase().includes(action.payload.toLowerCase())) {
                    filteredProducts.push(product);
                }
            });
            return {
                ...state,
                filteredProducts
            }
            
        default: return state;
    }
}