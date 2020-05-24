import cardReducer from "./reducer";
import {CardActionType} from "./type";
import {anArticle} from "../../data.mock";

describe('reducer spec', () => {

    describe('default handle', () => {
        test('should return initial state', () => {
            expect(
                cardReducer(undefined, {} as CardActionType)
            ).toEqual({
                articles: []
            })
        })
    })

    describe('handle "ADD_ARTICLE"', () => {
        const article = anArticle({name: 'Iphone'})
        const state = {
            articles: [anArticle({name: 'X1 carbon'})]
        }
        test('should add article', () => {
            expect(
                cardReducer(state, {
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
                cardReducer(state, {
                    type: 'ADD_ARTICLE',
                    payload: articleAlreadyAdded
                })
            ).toEqual({
                articles: state.articles
            })
        })
    })

    describe('handle "REMOVE_ARTICLE', () => {
        const articleToRemove = anArticle({name: 'Iphone'})
        test('should remove article', () => {
            expect(
                cardReducer({
                    articles: [
                        anArticle({name: 'X1 carbon'}),
                        articleToRemove
                    ]
                }, {
                    type: 'REMOVE_ARTICLE',
                    payload: articleToRemove
                })
            ).toEqual({
                articles: [anArticle({name: 'X1 carbon'})]
            })
        })
        test('should not remove article when state no contain article', () => {
            expect(
                cardReducer({
                    articles: [
                        anArticle({name: 'X1 carbon'})
                    ]
                }, {
                    type: 'REMOVE_ARTICLE',
                    payload: articleToRemove
                })
            ).toEqual({
                articles: [anArticle({name: 'X1 carbon'})]
            })
        })

    })
})