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
                articles: []
            })
        })
    })

    describe('handle "ADD_ARTICLE"', () => {
        const article = aCartArticle({id: '1', name: 'Iphone', size: 'M'})
        const state = {
            articles: [aCartArticle({id: '2', name: 'X1 carbon', size: 'S'})]
        }
        test('should add article', () => {
            expect(
                cartReducer(state, {
                    type: 'ADD_CART_ARTICLE',
                    payload: article
                })
            ).toEqual({
                articles: [...state.articles, article]
            })
        })
        describe('article is already added', () => {
            test('should add article when the size is different', () => {
                const [articleOnState] = state.articles
                const articleAlreadyAdded: ICartArticle = {...articleOnState, size: 'M'}
                expect(
                    cartReducer(state, {
                        type: 'ADD_CART_ARTICLE',
                        payload: articleAlreadyAdded
                    })
                ).toEqual({
                    articles: [...state.articles, articleAlreadyAdded]
                })
            })
            test('should not add article when is the same size', () => {
                const [articleAlreadyAdded] = state.articles
                expect(
                    cartReducer(state, {
                        type: 'ADD_CART_ARTICLE',
                        payload: articleAlreadyAdded
                    })
                ).toEqual({
                    articles: state.articles
                })
            })
        })
    })
})