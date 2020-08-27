import {addCartArticle, cleanCartError, createCommand, removeCartArticle, updateCartArticle} from "./action";
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
    describe('should clean add cart article error', () => {
        test('should create action CLEAN_ERROR', () => {
            expect(
                cleanCartError()
            ).toEqual({
                type: 'CLEAN_CART_ERROR',
            })
        })
    })
    describe('should create command', () => {
        test('should create action CREATE_COMMAND', () => {
            expect(
                createCommand()
            ).toEqual({
                type: 'CREATE_COMMAND',
            })
        })
    })
})