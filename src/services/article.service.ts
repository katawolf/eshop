import IArticle from "../models/IArticle";
import articleResource from "../resources/article.resource";

export const getArticles = (): Promise<IArticle[]> => articleResource.getArticles();