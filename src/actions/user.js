import { SET_USER_PURCHASES, SET_PURCHASE_DETAIL, SET_CART_PRODUCTS, ADD_ITEM_TO_CART } from './types';

export function addItemToCart(item) {
    return({
        type: ADD_ITEM_TO_CART,
        payload: item
    });
}

export function fetchPurchaseDetails(id) {
    return({
        type: SET_PURCHASE_DETAIL,
        payload: id
    })
}

export function fetchCartProducts() {
    return({
        type: SET_CART_PRODUCTS,
        payload: [

            {
                id: 0,
                product: {
                id: 0,
                title:"Javascript in the Browser",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae non sapiente omnis ipsa id perspiciatis expedita, dolor eos error numquam at quasi eum necessitatibus.",
                price: 1.99,
                belongsTo: [0, 1],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
                quantity: 2
        },
            {
                id: 1,
                product: {
                id: 1,
                title:"Graph Database",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae non sapiente omnis ipsa id perspiciatis expedita, dolor eos error numquam at quasi eum necessitatibus.",
                price: 1.19,
                belongsTo: [0, 6],
                imageUrl: 'http://via.placeholder.com/80x80'
            },
            quantity: 3
        }
        ]
    })
}

export function fetchUserPurchases() {
    return({
        type: SET_USER_PURCHASES,
        payload: [
            {
                id: 0,
                total: 19.03,
                orderNumber: 'A123456',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Chandler King',
                    shippingAddress: '123 State St'
                }

            },
            {
                id: 1,
                total: 20.99,
                orderNumber: 'A225456',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Tylee King',
                    shippingAddress: '123 State St'
                }

            },
            {
                id: 2,
                total: 15.05,
                orderNumber: 'A333456',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Rae King',
                    shippingAddress: '123 State St'
                }

            },
            {
                id: 3,
                total: 11.18,
                orderNumber: 'A113456',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Rogue King',
                    shippingAddress: '123 State St'
                }

            },
            {
                id: 4,
                total: 17.07,
                orderNumber: 'A554456',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Rose King',
                    shippingAddress: '123 State St'
                }

            },
            {
                id: 5,
                total: 27.03,
                orderNumber: 'A124456',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Chandler King',
                    shippingAddress: '123 State St'
                }

            },
            {
                id: 6,
                total: 19.05,
                orderNumber: 'A111456',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Tylee King',
                    shippingAddress: '123 State St'
                }

            },
            {
                id: 7,
                total: 18.23,
                orderNumber: 'A123456',
                orderDate: new Date().toDateString(),
                creditCard: '-0000',
                user: {
                    name: 'Rogue King',
                    shippingAddress: '123 State St'
                }

            }
        ]
    })
}