import ICartArticle from "./ICartArticle";
import IUser from "./IUser";

interface IOrder {
    orderId: string,
    cartArticles: ICartArticle[],
    user: IUser
}

export default IOrder