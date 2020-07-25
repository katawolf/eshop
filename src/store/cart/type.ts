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

interface ICleanCartErrorAction {
    type: 'CLEAN_CART_ERROR'
}

export type CartActionType = IAddCartArticleAction | IRemoveCartArticleAction | IUpdateCartArticleAction | ICleanCartErrorAction