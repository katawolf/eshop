import IArticleSummary from "./IArticleSummary";
import Size from "./Size";

export default interface ICartArticle extends IArticleSummary {
    size: Size
    quantity: number
}