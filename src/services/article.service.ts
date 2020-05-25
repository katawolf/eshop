import IArticleSummary from "../models/IArticleSummary";
import articleResource from "../resources/article.resource";

export const getArticles = (): Promise<IArticleSummary[]> => articleResource.getArticles();