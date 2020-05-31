import {CartActionType} from "./type";
import ICartArticle from "../../models/ICartArticle";

const initialState: ICartState = {
    articles: []
}

export interface ICartState {
    articles: ICartArticle[]
}

const cartReducer = (state = initialState, action: CartActionType): ICartState => {
    switch (action.type) {
        case 'ADD_CART_ARTICLE':
            return {
                ...state,
                articles: addCartArticle(state.articles, action.payload)
            }
        case "REMOVE_CART_ARTICLE":
            return {
                ...state,
                articles: removeCartArticle(state.articles, action.payload)
            }
        default:
            return {...state}
    }
}

const addCartArticle = (cartArticles: ICartArticle[], cartArticle: ICartArticle): ICartArticle[] => {
    const oldCartArticle = cartArticles.find(it => cartArticlesAreEquals(it, cartArticle))
    return oldCartArticle
        ? [...removeCartArticle(cartArticles, oldCartArticle), concatCardArticle(oldCartArticle, cartArticle)]
        : [...cartArticles, cartArticle]
}

const removeCartArticle = (cartArticles: ICartArticle[], cartArticle: ICartArticle) => cartArticles.filter(it => !cartArticlesAreEquals(it, cartArticle))

const cartArticlesAreEquals = (cartArticle1: ICartArticle, cartArticle2: ICartArticle) =>
    cartArticle1.id === cartArticle2.id && cartArticle1.size === cartArticle2.size

const concatCardArticle = (cartArticle: ICartArticle, {quantity}: ICartArticle) => ({
    ...cartArticle,
    quantity: cartArticle.quantity + quantity
})

export default cartReducer
