import IArticleSummary from "../../models/IArticleSummary";
import {CartActionType} from "./type";

export const addArticleToCart = (article: IArticleSummary): CartActionType => ({
    type: "ADD_ARTICLE",
    payload: article
})
