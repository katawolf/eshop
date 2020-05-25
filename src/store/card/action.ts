import IArticleSummary from "../../models/IArticleSummary";
import {CardActionType} from "./type";

export const addArticleToCard = (article: IArticleSummary): CardActionType => ({
    type: "ADD_ARTICLE",
    payload: article
})

export const removeArticleToCard = (article: IArticleSummary): CardActionType => ({
    type: "REMOVE_ARTICLE",
    payload: article
})