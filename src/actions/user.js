import { SET_USER_PURCHASES } from './types';

export function fetchUserPurchases() {
    return({
        type: SET_USER_PURCHASES,
        payload: [
            {
                id: 0,
                total: 19.03,
                orderNumber: 'A123456',
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
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
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Rogue King',
                    shippingAddress: '123 State St'
                }

            }
        ]
    })
}