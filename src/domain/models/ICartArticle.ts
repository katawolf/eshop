import Size from "./Size";
import IArticle from "./IArticle";

export default interface ICartArticle extends IArticle {
    size: Size
    quantity: number
}