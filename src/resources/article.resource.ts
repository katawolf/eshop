import {anArticle} from "../data.mock";
import IArticle from "../models/IArticle";
import IArticleSummary from "../models/IArticleSummary";

const articles = [
    anArticle({id: '1', name: 'IPhone'}),
    anArticle({id: '2', name: 'PS4'}),
    anArticle({id: '3', name: 'Xbox'}),
    anArticle({id: '4', name: 'Samsung Tv'}),
    anArticle({id: '5', name: 'Lenovo Thinkpad'}),
    anArticle({id: '6', name: 'HP computer'}),
    anArticle({id: '7', name: 'Nintendo DS'}),
    anArticle({id: '8', name: 'Iiyama display'}),
    anArticle({id: '9', name: 'Honor phone'})
]

class ArticleResource {
    getArticleSummaries(): Promise<IArticleSummary[]> {
        return Promise.resolve(articles)
    }

    getArticle(id: string): Promise<IArticle> {
        const article = articles.find(it => it.id === id)
        return article ? Promise.resolve(article) : Promise.reject("Article not found")
    }
}

const articleResource = new ArticleResource()
export default articleResource