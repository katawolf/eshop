import {CardActionType} from "./type";
import IArticle from "../../models/IArticle";

const initialState: ICardState = {
    articles: []
}

export interface ICardState {
    articles: IArticle[]
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

const addArticle = (articles: IArticle[], article: IArticle) =>
    articles.find(({name}: IArticle) => article.name === name)
        ? [...articles]
        : [...articles, article]

const removeArticle = (articles: IArticle[], article: IArticle) =>
    articles.filter(({name}: IArticle) => name !== article.name)

export default cardReducer
