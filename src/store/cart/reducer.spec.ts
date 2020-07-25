import cartReducer from "./reducer";
import {CartActionType} from "./type";
import {aCartArticle} from "../../data.mock";

describe('reducer spec', () => {
    describe('default handle', () => {
        test('should return initial state', () => {
            expect(
                cartReducer(undefined, {} as CartActionType)
            ).toEqual({
                cartArticles: []
            })
        })
    })
    describe('handle "ADD_CART_ARTICLE"', () => {
        test('should add article', () => {
            expect(
                cartReducer({
                    cartArticles: [aCartArticle({id: '2', name: 'X1 carbon', size: 'S', quantity: 1})]
                }, {
                    type: 'ADD_CART_ARTICLE',
                    payload: aCartArticle({id: '1', name: 'Iphone', size: 'M', quantity: 1})
                })
            ).toEqual({
                cartArticles: [
                    aCartArticle({id: '2', name: 'X1 carbon', size: 'S', quantity: 1}),
                    aCartArticle({id: '1', name: 'Iphone', size: 'M', quantity: 1})
                ]
            })
        })
        test('should not add and return error when the quantity is superior of max quantity by cart', () => {
            expect(
                cartReducer({
                    cartArticles: [
                        aCartArticle({id: '1', name: 'Iphone', size: 'M', quantity: 1}),
                    ]
                }, {
                    type: 'ADD_CART_ARTICLE',
                    payload: aCartArticle({id: '2', name: 'X1 carbon', size: 'S', quantity: 9, maxQuantityByCart: 8})
                })
            ).toEqual({
                error: 'You can\'t add more quantity of max quantity article in cart',
                cartArticles: [
                    aCartArticle({id: '1', name: 'Iphone', size: 'M', quantity: 1}),
                ]
            })
        })
        describe('article is already added', () => {
            test('should add article when the size is different', () => {
                expect(
                    cartReducer({
                       cartArticles: [
                           aCartArticle({id: '1', name: 'Iphone', size: 'M', quantity: 1}),
                           aCartArticle({id: '2', name: 'X1 carbon', size: 'S', quantity: 1})
                       ]
                    }, {
                        type: 'ADD_CART_ARTICLE',
                        payload: aCartArticle({id: '2', name: 'X1 carbon', size: 'M', quantity: 1})
                    })
                ).toEqual({
                    cartArticles: [
                        aCartArticle({id: '1', name: 'Iphone', size: 'M', quantity: 1}),
                        aCartArticle({id: '2', name: 'X1 carbon', size: 'S', quantity: 1}),
                        aCartArticle({id: '2', name: 'X1 carbon', size: 'M', quantity: 1})
                    ]
                })
            })
            test('should update quantity of article when is the same size', () => {
                expect(
                    cartReducer({
                        cartArticles: [
                            aCartArticle({id: '1', name: 'Iphone', size: 'M', quantity: 1}),
                            aCartArticle({id: '2', name: 'X1 carbon', size: 'S', quantity: 1})
                        ]
                    }, {
                        type: 'ADD_CART_ARTICLE',
                        payload: aCartArticle({id: '2', name: 'X1 carbon', size: 'S', quantity: 1})
                    })
                ).toEqual({
                    cartArticles: [
                        aCartArticle({id: '1', name: 'Iphone', size: 'M', quantity: 1}),
                        aCartArticle({id: '2', name: 'X1 carbon', size: 'S', quantity: 2})
                    ]
                })
            })
            test('should not add article and return error when the max quantity of article in cart is exceeded', () => {
                expect(
                    cartReducer({
                        cartArticles: [
                            aCartArticle({id: '1', name: 'Iphone', size: 'M', quantity: 1}),
                            aCartArticle({id: '2', name: 'X1 carbon', size: 'S', quantity: 8, maxQuantityByCart: 8})
                        ]
                    }, {
                        type: 'ADD_CART_ARTICLE',
                        payload: aCartArticle({id: '2', name: 'X1 carbon', size: 'S', quantity: 1, maxQuantityByCart: 8})
                    })
                ).toEqual({
                    error: 'You can\'t add more quantity of max quantity article in cart',
                    cartArticles: [
                        aCartArticle({id: '1', name: 'Iphone', size: 'M', quantity: 1}),
                        aCartArticle({id: '2', name: 'X1 carbon', size: 'S', quantity: 8, maxQuantityByCart: 8})
                    ]
                })
            })
            test('should not return error when article is added', () => {
                expect(
                    cartReducer({
                        error: 'an error',
                        cartArticles: []
                    }, {
                        type: 'ADD_CART_ARTICLE',
                        payload: aCartArticle({id: '1', name: 'Iphone', size: 'M', quantity: 1})
                    })
                ).toEqual({
                    cartArticles: [
                        aCartArticle({id: '1', name: 'Iphone', size: 'M', quantity: 1}),
                    ]
                })
            })
        })
    })
    describe('handle "REMOVE_CART_ARTICLE"', () => {
        test('should remove article', () => {
            expect(
                cartReducer({
                    cartArticles: [
                        aCartArticle({id: '1', name: 'Iphone', size: 'M', quantity: 1}),
                        aCartArticle({id: '1', name: 'Iphone', size: 'L', quantity: 1}),
                        aCartArticle({id: '2', name: 'X1 carbon', size: 'S', quantity: 1})
                    ]
                }, {
                    type: 'REMOVE_CART_ARTICLE',
                    payload: aCartArticle({id: '1', name: 'Iphone', size: 'M', quantity: 1})
                })
            ).toEqual({
                cartArticles: [
                    aCartArticle({id: '1', name: 'Iphone', size: 'L', quantity: 1}),
                    aCartArticle({id: '2', name: 'X1 carbon', size: 'S', quantity: 1})
                ]
            })
        })
        test('should not remove article when size is different', () => {
            expect(
                cartReducer({
                    cartArticles: [
                        aCartArticle({id: '1', name: 'Iphone', size: 'L', quantity: 1}),
                        aCartArticle({id: '2', name: 'X1 carbon', size: 'S', quantity: 1})
                    ]
                }, {
                    type: 'REMOVE_CART_ARTICLE',
                    payload: aCartArticle({id: '1', name: 'Iphone', size: 'M', quantity: 1})
                })
            ).toEqual({
                cartArticles: [
                    aCartArticle({id: '1', name: 'Iphone', size: 'L', quantity: 1}),
                    aCartArticle({id: '2', name: 'X1 carbon', size: 'S', quantity: 1})
                ]
            })
        })
        test('should not return error when article is removed', () => {
            expect(
                cartReducer({
                    error: 'an error',
                    cartArticles: [
                        aCartArticle({id: '1', name: 'Iphone', size: 'M', quantity: 1}),
                    ]
                }, {
                    type: 'REMOVE_CART_ARTICLE',
                    payload: aCartArticle({id: '1', name: 'Iphone', size: 'M', quantity: 1})
                })
            ).toEqual({
                cartArticles: []
            })
        })
    })
    describe('handle "UPDATE_CART_ARTICLE"', () => {
        test('should update article', () => {
            expect(
                cartReducer({
                    cartArticles: [
                        aCartArticle({id: '1', name: 'Iphone', size: 'L', quantity: 1}),
                        aCartArticle({id: '2', name: 'X1 carbon', size: 'S', quantity: 5})
                    ]
                }, {
                    type: 'UPDATE_CART_ARTICLE',
                    payload: aCartArticle({id: '2', name: 'X1 carbon', size: 'S', quantity: 10})
                })
            ).toEqual({
                cartArticles: [
                    aCartArticle({id: '1', name: 'Iphone', size: 'L', quantity: 1}),
                    aCartArticle({id: '2', name: 'X1 carbon', size: 'S', quantity: 10})
                ]
            })
        })
        test('should not update articles when article is already added but the size is different', () => {
            expect(
                cartReducer({
                    cartArticles: [
                        aCartArticle({id: '1', name: 'Iphone', size: 'L', quantity: 1}),
                        aCartArticle({id: '2', name: 'X1 carbon', size: 'S', quantity: 5})
                    ]
                }, {
                    type: 'UPDATE_CART_ARTICLE',
                    payload: aCartArticle({id: '2', name: 'X1 carbon', size: 'M', quantity: 10})
                })
            ).toEqual({
                cartArticles: [
                    aCartArticle({id: '1', name: 'Iphone', size: 'L', quantity: 1}),
                    aCartArticle({id: '2', name: 'X1 carbon', size: 'S', quantity: 5})
                ]
            })
        })
        test('should not update articles when article is not already added', () => {
            expect(
                cartReducer({
                    cartArticles: [
                        aCartArticle({id: '1', name: 'Iphone', size: 'L', quantity: 1}),
                    ]
                }, {
                    type: 'UPDATE_CART_ARTICLE',
                    payload: aCartArticle({id: '2', name: 'X1 carbon', size: 'M', quantity: 10})
                })
            ).toEqual({
                cartArticles: [
                    aCartArticle({id: '1', name: 'Iphone', size: 'L', quantity: 1}),
                ]
            })
        })
        test('should not update when the quantity is superior of max quantity by cart', () => {
            expect(
                cartReducer({
                    cartArticles: [
                        aCartArticle({id: '2', name: 'X1 carbon', size: 'S', quantity: 5})
                    ]
                }, {
                    type: 'UPDATE_CART_ARTICLE',
                    payload: aCartArticle({id: '2', name: 'X1 carbon', size: 'S', quantity: 10, maxQuantityByCart: 8})
                })
            ).toEqual({
                cartArticles: [
                    aCartArticle({id: '2', name: 'X1 carbon', size: 'S', quantity: 5})
                ]
            })
        })
        test('should not return error when article is updated', () => {
            expect(
                cartReducer({
                    error: 'An error',
                    cartArticles: [
                        aCartArticle({id: '2', name: 'X1 carbon', size: 'S', quantity: 5})
                    ]
                }, {
                    type: 'UPDATE_CART_ARTICLE',
                    payload: aCartArticle({id: '2', name: 'X1 carbon', size: 'S', quantity: 10})
                })
            ).toEqual({
                cartArticles: [
                    aCartArticle({id: '2', name: 'X1 carbon', size: 'S', quantity: 10})
                ]
            })
        })
    })
    describe('handle "CLEAN ERROR"', () => {
        test('should clean error', () => {
            expect(
                cartReducer({
                    error: 'An error',
                    cartArticles: [
                        aCartArticle({id: '2', name: 'X1 carbon', size: 'S', quantity: 5})
                    ]
                }, {
                    type: 'CLEAN_CART_ERROR',
                })
            ).toEqual({
                cartArticles: [
                    aCartArticle({id: '2', name: 'X1 carbon', size: 'S', quantity: 5})
                ]
            })
        })
    })
})