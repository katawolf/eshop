import ICartArticle from "./ICartArticle";
import IUser from "./IUser";

interface ICommand {
    commandId: string,
    cartArticles: ICartArticle[],
    user: IUser
}

export default ICommand