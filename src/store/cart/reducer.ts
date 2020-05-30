import {CartActionType} from "./type";
import ICartArticle from "../../models/ICartArticle";

const initialState: ICartState = {
    articles: []
}

export interface ICartState {
    articles: ICartArticle[]
}

const cartReducer = (state = initialState, action: CartActionType): ICartState => {
    switch (action.type) {
        case 'ADD_CART_ARTICLE':
            return {
                ...state,
                articles: addArticle(state.articles, action.payload)
            }
        default:
            return {...state}
    }
}

const addArticle = (articles: ICartArticle[], article: ICartArticle) =>
    articles.find(({name, size}: ICartArticle) => article.name === name && article.size === size)
        ? [...articles]
        : [...articles, article]

export default cartReducer
