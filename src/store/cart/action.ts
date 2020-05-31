import {CartActionType} from "./type";
import ICartArticle from "../../models/ICartArticle";

export const addCartArticle = (article: ICartArticle): CartActionType => ({
    type: "ADD_CART_ARTICLE",
    payload: article
})

export const removeCartArticle = (article: ICartArticle): CartActionType => ({
    type: "REMOVE_CART_ARTICLE",
    payload: article
})
