import {anArticle} from "../data.mock";
import IArticleSummary from "../models/IArticleSummary";

class ArticleResource {
    getArticles(): Promise<IArticleSummary[]> {
        return Promise.resolve([
            anArticle({name: 'IPhone'}),
            anArticle({name: 'PS4'}),
            anArticle({name: 'Xbox'}),
            anArticle({name: 'Samsung Tv'}),
            anArticle({name: 'Lenovo Thinkpad'}),
            anArticle({name: 'HP computer'}),
            anArticle({name: 'Nintendo DS'}),
            anArticle({name: 'Iiyama display'}),
            anArticle({name: 'Honor phone'})
        ])
    }
}

const articleResource = new ArticleResource()
export default articleResource