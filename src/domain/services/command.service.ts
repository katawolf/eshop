import ICartArticle from "../models/ICartArticle";
import IUser from "../models/IUser";
import IBankCard from "../models/IBankCard";
import commandResource from "../../resources/command.resource";

const createCommand = async (cartArticles: ICartArticle[], user: IUser, bankCard: IBankCard): Promise<string> => {
    if (userIsNotValid(user) || bankCardIsNotValid(bankCard)) {
        throw new Error('An error occurred while creating the order.')
    }
    return await commandResource.createCommand(cartArticles, user, bankCard)
}

const userIsNotValid = ({firstName, lastName, email, address}: IUser) => !(firstName && lastName && email && address)

const bankCardIsNotValid = ({number, expirationDate, secretCode}: IBankCard) => !(number && expirationDate && secretCode)

export default createCommand