import IArticleSummary from "./IArticleSummary";
import Size from "./Size";

interface IArticle extends IArticleSummary {
    description: string
    availableSizes: Size[]
}

export default IArticle