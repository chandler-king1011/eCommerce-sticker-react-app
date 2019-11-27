import { SET_SHOP_CATEGORIES } from '../actions/types';

const INITIAL_STATE = {
    categories: [],
    selectedCategoryId: 0,
    productsSelected: []
}

export default function(state=INITIAL_STATE, action) {
    switch(action.type) {
        default: return state;
    }
}