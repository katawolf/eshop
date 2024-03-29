import {CartActionType} from "./type";
import ICartArticle from "../../domain/models/ICartArticle";

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
            return addCartArticleReducer(state, action.payload)
        case "REMOVE_CART_ARTICLE":
            return {
                ...state,
                error: undefined,
                cartArticles: removeCartArticle(state.cartArticles, action.payload)
            }
        case "UPDATE_CART_ARTICLE":
            return updateCartArticleReducer(state, action.payload)
        case "CLEAN_CART_ERROR":
            return {
                ...state,
                error: undefined
            }
        case "RESET_CART":
            return {...initialState}
        default:
            return {...state}
    }
}

const addCartArticleReducer = (state: ICartState, cartArticle: ICartArticle) => {
    let newState
    if (canAddCardArticle(state.cartArticles, cartArticle)) {
        newState = {
            ...state,
            error: undefined,
            cartArticles: addCartArticle(state.cartArticles, cartArticle)
        }
    } else {
        newState = {
            ...state,
            error: 'You can\'t add more quantity of max quantity article in cart'
        }
    }
    return newState
}

const canAddCardArticle = (cartArticles: ICartArticle[], cartArticle: ICartArticle) => {
    const oldCartArticle = cartArticles.find(it => cartArticlesAreEquals(it, cartArticle))
    const quantityIsSuperiorToMaxQuantityByCart = (cartArticle: ICartArticle) => cartArticle.quantity > cartArticle.maxQuantityByCart
    return !(quantityIsSuperiorToMaxQuantityByCart(cartArticle)
        || (oldCartArticle && quantityIsSuperiorToMaxQuantityByCart(concatCardArticle(cartArticle, oldCartArticle))))
}

const addCartArticle = (cartArticles: ICartArticle[], cartArticle: ICartArticle): ICartArticle[] => {
    const oldCartArticle = cartArticles.find(it => cartArticlesAreEquals(it, cartArticle))
    return oldCartArticle
        ? [...removeCartArticle(cartArticles, oldCartArticle), concatCardArticle(cartArticle, oldCartArticle)]
        : [...cartArticles, cartArticle]
}

const removeCartArticle = (cartArticles: ICartArticle[], cartArticle: ICartArticle) => cartArticles.filter(it => !cartArticlesAreEquals(it, cartArticle))

const updateCartArticleReducer = (state: ICartState, cartArticle: ICartArticle) => {
    let newState
    if (canUpdateCardArticle(state.cartArticles, cartArticle)) {
        newState = {
            ...state,
            error: undefined,
            cartArticles: updateCartArticle(state.cartArticles, cartArticle)
        }
    } else {
        newState = {...state,}
    }
    return newState
}

const canUpdateCardArticle = (cartArticles: ICartArticle[], cartArticle: ICartArticle) => {
    const quantityIsInferiorOrEqualToMaxQuantityByCart = (cartArticle: ICartArticle) => cartArticle.quantity <= cartArticle.maxQuantityByCart
    return quantityIsInferiorOrEqualToMaxQuantityByCart(cartArticle)
}

const updateCartArticle = (cartArticles: ICartArticle[], cartArticle: ICartArticle) =>
    cartArticles.find(it => cartArticlesAreEquals(it, cartArticle))
        ? [...removeCartArticle(cartArticles, cartArticle), cartArticle]
        : [...cartArticles]

const cartArticlesAreEquals = (cartArticle1: ICartArticle, cartArticle2: ICartArticle) => cartArticle1.id === cartArticle2.id

const concatCardArticle = (cartArticle: ICartArticle, {quantity}: ICartArticle) => ({
    ...cartArticle,
    quantity: cartArticle.quantity + quantity
})

export default cartReducer
