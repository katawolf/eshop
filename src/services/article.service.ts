import IArticleSummary from "../models/IArticleSummary";
import articleResource from "../resources/article.resource";
import IArticle from "../models/IArticle";

export const getArticleSummaries = (): Promise<IArticleSummary[]> => articleResource.getArticleSummaries();

export const getArticle = (id: string): Promise<IArticle> => articleResource.getArticle(id)