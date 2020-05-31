import IArticleSummary from "../../models/IArticleSummary";
import ICartArticle from "../../models/ICartArticle";

interface IAddCartArticleAction {
    type: 'ADD_CART_ARTICLE'
    payload: ICartArticle
}

interface IRemoveCartArticleAction {
    type: 'REMOVE_CART_ARTICLE'
    payload: ICartArticle
}

export type CartActionType = IAddCartArticleAction | IRemoveCartArticleAction