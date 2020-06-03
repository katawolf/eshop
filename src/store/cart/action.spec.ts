import {addCartArticle, cleanError, removeCartArticle, updateCartArticle} from "./action";
import {aCartArticle} from "../../data.mock";

describe('Article actions spec', () => {
    describe('add cart article', () => {
        test('should create action "ADD_CART_ARTICLE"', () => {
            expect(
                addCartArticle(aCartArticle())
            ).toEqual({
                type: 'ADD_CART_ARTICLE',
                payload: aCartArticle()
            })
        })
    })
    describe('remove cart article', () => {
        test('should create action "REMOVE_CART_ARTICLE"', () => {
            expect(
                removeCartArticle(aCartArticle())
            ).toEqual({
                type: 'REMOVE_CART_ARTICLE',
                payload: aCartArticle()
            })
        })
    })
    describe('update cart article', () => {
        test('should create action "UPDATE_CART_ARTICLE', () => {
            expect(
                updateCartArticle(aCartArticle())
            ).toEqual({
                type: 'UPDATE_CART_ARTICLE',
                payload: aCartArticle()
            })
        })
    })
    describe('should clean error', () => {
        test('should create action CLEAN_ERROR', () => {
            expect(
                cleanError()
            ).toEqual({
                type: 'CLEAN_ERROR',
            })
        })
    })
})