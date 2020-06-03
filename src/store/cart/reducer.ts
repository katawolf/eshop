import {CartActionType} from "./type";
import ICartArticle from "../../models/ICartArticle";

const initialState: ICartState = {
    cartArticles: []
}

export interface ICartState {
    error?: string
    cartArticles: ICartArticle[]
}

const cartReducer = (state = initialState, action: CartActionType): ICartState => {
    switch (action.type) {
        case 'ADD_CART_ARTICLE':
            try {
                return {
                    ...state,
                    error: undefined,
                    cartArticles: addCartArticle(state.cartArticles, action.payload)
                }
            } catch (e) {
                return {
                    ...state,
                    error: e.message
                }
            }
        case "REMOVE_CART_ARTICLE":
            return {
                ...state,
                error: undefined,
                cartArticles: removeCartArticle(state.cartArticles, action.payload)
            }
        case "UPDATE_CART_ARTICLE":
            return {
                ...state,
                error: undefined,
                cartArticles: updateCartArticle(state.cartArticles, action.payload)
            }
        case "CLEAN_ERROR":
            return {
                ...state,
                error: undefined
            }
        default:
            return {...state}
    }
}

const addCartArticle = (cartArticles: ICartArticle[], cartArticle: ICartArticle): ICartArticle[] => {
    const oldCartArticle = cartArticles.find(it => cartArticlesAreEquals(it, cartArticle))
    if (oldCartArticle && oldCartArticle.quantity === oldCartArticle.maxQuantityByCart) {
        throw new Error('You can\'t add this article because The maximum quantity of this article in your cart is reached')
    }
    return oldCartArticle
        ? [...removeCartArticle(cartArticles, oldCartArticle), concatCardArticle(oldCartArticle, cartArticle)]
        : [...cartArticles, cartArticle]
}

const removeCartArticle = (cartArticles: ICartArticle[], cartArticle: ICartArticle) => cartArticles.filter(it => !cartArticlesAreEquals(it, cartArticle))

const updateCartArticle = (cartArticles: ICartArticle[], cartArticle: ICartArticle) =>
    cartArticles.find(it => cartArticlesAreEquals(it, cartArticle))
        ? [...removeCartArticle(cartArticles, cartArticle), cartArticle]
        : [...cartArticles]

const cartArticlesAreEquals = (cartArticle1: ICartArticle, cartArticle2: ICartArticle) =>
    cartArticle1.id === cartArticle2.id && cartArticle1.size === cartArticle2.size

const concatCardArticle = (cartArticle: ICartArticle, {quantity}: ICartArticle) => ({
    ...cartArticle,
    quantity: cartArticle.quantity + quantity
})

export default cartReducer
