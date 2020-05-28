import IArticleSummary from "../../models/IArticleSummary";

interface IAddArticleAction {
    type: 'ADD_ARTICLE'
    payload: IArticleSummary
}

export type CardActionType = IAddArticleAction