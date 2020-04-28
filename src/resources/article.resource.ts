import {anArticle} from "../data.mock";
import IArticle from "../models/IArticle";

class ArticleResource {
    getArticles(): Promise<IArticle[]> {
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