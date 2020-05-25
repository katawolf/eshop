import {CardActionType} from "./type";
import IArticleSummary from "../../models/IArticleSummary";

const initialState: ICardState = {
    articles: []
}

export interface ICardState {
    articles: IArticleSummary[]
}

const cardReducer = (state = initialState, action: CardActionType): ICardState => {
    switch (action.type) {
        case 'ADD_ARTICLE':
            return {
                ...state,
                articles: addArticle(state.articles, action.payload)
            }
        case "REMOVE_ARTICLE":
            return {
                ...state,
                articles: removeArticle(state.articles, action.payload)
            }
        default:
            return {...state}
    }
}

const addArticle = (articles: IArticleSummary[], article: IArticleSummary) =>
    articles.find(({name}: IArticleSummary) => article.name === name)
        ? [...articles]
        : [...articles, article]

const removeArticle = (articles: IArticleSummary[], article: IArticleSummary) =>
    articles.filter(({name}: IArticleSummary) => name !== article.name)

export default cardReducer
