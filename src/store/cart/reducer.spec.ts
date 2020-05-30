import cartReducer from "./reducer";
import {CartActionType} from "./type";
import {anArticleSummary} from "../../data.mock";

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
        const article = anArticleSummary({id: '1', name: 'Iphone'})
        const state = {
            articles: [anArticleSummary({id: '2', name: 'X1 carbon'})]
        }
        test('should add article', () => {
            expect(
                cartReducer(state, {
                    type: 'ADD_ARTICLE',
                    payload: article
                })
            ).toEqual({
                articles: [...state.articles, article]
            })
        })
        test('should not add article when article is already added', () => {
            const [articleAlreadyAdded] = state.articles
            expect(
                cartReducer(state, {
                    type: 'ADD_ARTICLE',
                    payload: articleAlreadyAdded
                })
            ).toEqual({
                articles: state.articles
            })
        })
    })
})