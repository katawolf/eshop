import IPrice from "./IPrice";

interface IArticleSummary {
    id: string
    name: string
    price: IPrice
    imgSrc: string
}

export default IArticleSummary