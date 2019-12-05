import { SET_SHOP_CATEGORIES, SET_SHOP_PRODUCTS, FILTER_PRODUCTS_BY_CATEGORY, FILTER_PRODUCTS_BY_QUERY } from './types';


export function filterProductsByQuery(query) {
    return({
        type: FILTER_PRODUCTS_BY_QUERY,
        payload: query
    })
}


export function filterProductsWithCategoryId(id) {
    return({
        type: FILTER_PRODUCTS_BY_CATEGORY,
        payload: id
    })
}

export function fetchShopCategories() {
    return({
        type: SET_SHOP_CATEGORIES,
        payload: [
            {
                id: 0,
                title: "All"
            },
            {
                id: 1,
                title: "Javascript"
            },
            {
                id: 2,
                title: "UI/UX"
            },
            {
                id: 3,
                title: "Linux"
            },
            {
                id: 4,
                title: "Python"
            },
            {
                id: 5,
                title: "UML"
            },
            {
                id: 6,
                title: "Ruby"
            }
        ]
    })
}

export function fetchShopProducts() {
    return({
        type: SET_SHOP_PRODUCTS,
        payload: [
            {
                id: 0,
                title:"Javascript in the Browser",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae non sapiente omnis ipsa id perspiciatis expedita, dolor eos error numquam at quasi eum necessitatibus.",
                price: 1.99,
                belongsTo: [0, 1]
            },
            {
                id: 1,
                title:"Graph Database",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae non sapiente omnis ipsa id perspiciatis expedita, dolor eos error numquam at quasi eum necessitatibus.",
                price: 1.19,
                belongsTo: [0, 6]
            },
            {
                id: 2,
                title:"Full Stack Development",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae non sapiente omnis ipsa id perspiciatis expedita, dolor eos error numquam at quasi eum necessitatibus.",
                price: 1.25,
                belongsTo: [0, 1, 4]
            },
            {
                id: 3,
                title:"User Interface Design",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae non sapiente omnis ipsa id perspiciatis expedita, dolor eos error numquam at quasi eum necessitatibus.",
                price: 5.00,
                belongsTo: [0, 2]
            },
            {
                id: 4,
                title:"Javascript Development",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae non sapiente omnis ipsa id perspiciatis expedita, dolor eos error numquam at quasi eum necessitatibus.",
                price: 12.99,
                belongsTo: [0, 1]
            },
            {
                id: 5,
                title:"User Experience Design",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae non sapiente omnis ipsa id perspiciatis expedita, dolor eos error numquam at quasi eum necessitatibus.",
                price: 1.99,
                belongsTo: [0, 2]
            },
            {
                id: 6,
                title:"Advanced OOP",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae non sapiente omnis ipsa id perspiciatis expedita, dolor eos error numquam at quasi eum necessitatibus.",
                price: 2.19,
                belongsTo: [0, 6]
            }
        ]
    })
}