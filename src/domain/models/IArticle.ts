import IPrice from "./IPrice";

interface IArticle {
    id: string
    name: string
    price: IPrice
    imgSrc: string
    description: string
    maxQuantityByCart: number
}

export default IArticle