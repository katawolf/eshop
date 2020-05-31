import articleResource from "../resources/article.resource";
import IArticle from "../models/IArticle";

export const getArticles = (): Promise<IArticle[]> => articleResource.getArticles();

export const getArticle = (id: string): Promise<IArticle> => articleResource.getArticle(id)