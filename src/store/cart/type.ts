import ICartArticle from "../../models/ICartArticle";
import IUser from "../../models/IUser";
import IBankCard from "../../models/IBankCard";

interface IAddCartArticleAction {
    type: 'ADD_CART_ARTICLE'
    payload: ICartArticle
}

interface IRemoveCartArticleAction {
    type: 'REMOVE_CART_ARTICLE'
    payload: ICartArticle
}

interface IUpdateCartArticleAction {
    type: 'UPDATE_CART_ARTICLE'
    payload: ICartArticle
}

interface ICleanCartErrorAction {
    type: 'CLEAN_CART_ERROR'
}

interface ICreateCommandAction {
    type: 'CREATE_COMMAND',
    payload: {user: IUser, bankCard: IBankCard}
}

export type CartActionType = IAddCartArticleAction | IRemoveCartArticleAction | IUpdateCartArticleAction | ICleanCartErrorAction | ICreateCommandAction