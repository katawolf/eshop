import cartReducer from "./reducer";
import {CartActionType} from "./type";
import {aCartArticle} from "../../data.mock";
import ICartArticle from "../../models/ICartArticle";

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
                const articleAlreadyAdded = aCartArticle({id: '2', name: 'X1 carbon', size: 'S', quantity: 1})
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
    })
})