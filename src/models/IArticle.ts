import Size from "./Size";
import IPrice from "./IPrice";

interface IArticle {
    id: string
    name: string
    price: IPrice
    imgSrc: string
    description: string
    availableSizes: Size[]
}

export default IArticle