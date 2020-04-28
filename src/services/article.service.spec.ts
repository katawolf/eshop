import articleResource from "../resources/article.resource";
import {anArticle} from "../data.mock";
import IArticle from "../models/IArticle";
import {getArticles} from "./article.service";

describe('Article service', () => {
    describe('When call getArticles', () => {
        const articles = [anArticle({name: 'Iphone'}), anArticle({name: 'Honor phone'})]
        const mockGetArticles = jest.spyOn(articleResource, 'getArticles')
        let result: IArticle[]

        beforeEach(async () => {
            mockGetArticles.mockReturnValue(Promise.resolve(articles))
            result = await getArticles()
        })

        afterEach(() => {
            mockGetArticles.mockClear()
        })

        test('Should call article resource', () => {
            expect(mockGetArticles).toBeCalledTimes(1)
        })

        test('Should return articles', () => {
            expect(result).toEqual(articles)
        })
    })
})