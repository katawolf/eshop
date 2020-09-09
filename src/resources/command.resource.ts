import ICartArticle from "../domain/models/ICartArticle";
import IUser from "../domain/models/IUser";
import IBankCard from "../domain/models/IBankCard";
import ICommand from "../domain/models/ICommand";

let counter = 0

const commands: ICommand[] = []

class CommandResource {
    createCommand(cartArticles: ICartArticle[], user: IUser, bankCard: IBankCard): Promise<string> {
        const commandId = `${counter++}`
        commands.push({
            commandId,
            cartArticles,
            user
        })
        return Promise.resolve(commandId)
    }
}

const commandResource = new CommandResource()
export default commandResource