import {CartActionType} from "./type";
import IArticleSummary from "../../models/IArticleSummary";

const initialState: ICartState = {
    articles: []
}

export interface ICartState {
    articles: IArticleSummary[]
}

const cartReducer = (state = initialState, action: CartActionType): ICartState => {
    switch (action.type) {
        case 'ADD_ARTICLE':
            return {
                ...state,
                articles: addArticle(state.articles, action.payload)
            }
        default:
            return {...state}
    }
}

const addArticle = (articles: IArticleSummary[], article: IArticleSummary) =>
    articles.find(({name}: IArticleSummary) => article.name === name)
        ? [...articles]
        : [...articles, article]

export default cartReducer
