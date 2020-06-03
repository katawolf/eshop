import ICartArticle from "../../models/ICartArticle";

interface IAddCartArticleAction {
    type: 'ADD_CART_ARTICLE'
    payload: ICartArticle
}

interface IRemoveCartArticleAction {
    type: 'REMOVE_CART_ARTICLE'
    payload: ICartArticle
}

interface IUpdateCartArticleAction {
    type: 'UPDATE_CART_ARTICLE'
    payload: ICartArticle
}

interface ICleanErrorAction {
    type: 'CLEAN_ERROR'
}

export type CartActionType = IAddCartArticleAction | IRemoveCartArticleAction | IUpdateCartArticleAction | ICleanErrorAction