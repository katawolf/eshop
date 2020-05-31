import {addCartArticle, removeCartArticle} from "./action";
import {aCartArticle} from "../../data.mock";

describe('Article actions spec', () => {

    describe('add cart article', () => {
        const article = aCartArticle()
        test('should create action "ADD_CART_ARTICLE"', () => {
            expect(
                addCartArticle(article)
            ).toEqual({
                type: 'ADD_CART_ARTICLE',
                payload: article
            })
        })
    })

    describe('remove cart article', () => {
        const article = aCartArticle()
        test('should create action "REMOVE_CART_ARTICLE"', () => {
            expect(
                removeCartArticle(article)
            ).toEqual({
                type: 'REMOVE_CART_ARTICLE',
                payload: article
            })
        })
    })
})