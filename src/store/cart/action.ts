import {CartActionType} from "./type";
import ICartArticle from "../../models/ICartArticle";

export const addCartArticle = (cartArticle: ICartArticle): CartActionType => ({
    type: "ADD_CART_ARTICLE",
    payload: cartArticle
})

export const removeCartArticle = (cartArticle: ICartArticle): CartActionType => ({
    type: "REMOVE_CART_ARTICLE",
    payload: cartArticle
})

export const updateCartArticle = (cartArticle: ICartArticle): CartActionType => ({
    type: 'UPDATE_CART_ARTICLE',
    payload: cartArticle
})

export const cleanCartError = (): CartActionType => ({
    type: "CLEAN_CART_ERROR"
})

export const createCommand = (): CartActionType => ({
    type: "CREATE_COMMAND"
})
