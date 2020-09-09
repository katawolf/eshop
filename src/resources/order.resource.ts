import ICartArticle from "../domain/models/ICartArticle";
import IUser from "../domain/models/IUser";
import IBankCard from "../domain/models/IBankCard";
import IOrder from "../domain/models/IOrder";

let counter = 0

const orders: IOrder[] = []

class OrderResource {
    createOrder(cartArticles: ICartArticle[], user: IUser, bankCard: IBankCard): Promise<string> {
        const orderId = `${counter++}`
        orders.push({
            orderId,
            cartArticles,
            user
        })
        return Promise.resolve(orderId)
    }
}

const commandResource = new OrderResource()
export default commandResource