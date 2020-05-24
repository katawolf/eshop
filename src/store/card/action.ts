import IArticle from "../../models/IArticle";
import {CardActionType} from "./type";

export const addArticleToCard = (article: IArticle): CardActionType => ({
    type: "ADD_ARTICLE",
    payload: article
})

export const removeArticleToCard = (article: IArticle): CardActionType => ({
    type: "REMOVE_ARTICLE",
    payload: article
})