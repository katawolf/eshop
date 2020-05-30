import IArticleSummary from "../../models/IArticleSummary";
import ICartArticle from "../../models/ICartArticle";

interface IAddArticleAction {
    type: 'ADD_CART_ARTICLE'
    payload: ICartArticle
}

export type CartActionType = IAddArticleAction