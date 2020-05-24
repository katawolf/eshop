import IArticle from "../../models/IArticle";

interface IAddArticleAction {
    type: 'ADD_ARTICLE'
    payload: IArticle
}

interface IRemoveArticleAction {
    type: 'REMOVE_ARTICLE'
    payload: IArticle
}

export type CardActionType = IAddArticleAction | IRemoveArticleAction