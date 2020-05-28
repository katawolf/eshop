import {anArticle} from "../data.mock";
import IArticle from "../models/IArticle";
import IArticleSummary from "../models/IArticleSummary";

class ArticleResource {
    getArticleSummaries(): Promise<IArticleSummary[]> {
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

    getArticle(): Promise<IArticle> {
        return Promise.resolve(anArticle({name: 'Basket Adidas'}))
    }
}

const articleResource = new ArticleResource()
export default articleResource