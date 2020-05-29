import articleResource from "../resources/article.resource";
import {anArticle, anArticleSummary} from "../data.mock";
import IArticleSummary from "../models/IArticleSummary";
import {getArticle, getArticleSummaries} from "./article.service";
import IArticle from "../models/IArticle";

describe('Article service', () => {
    const articles = [anArticle({id: '1', name: 'Iphone'}), anArticle({id: '2', name: 'Honor phone'})]

    describe('When call getArticles', () => {
        const mockGetArticleSummaries = jest.spyOn(articleResource, 'getArticleSummaries')
        let result: IArticleSummary[]

        beforeEach(async () => {
            mockGetArticleSummaries.mockReturnValue(Promise.resolve(articles))
            result = await getArticleSummaries()
        })

        afterEach(() => {
            mockGetArticleSummaries.mockClear()
        })

        test('Should call article resource', () => {
            expect(mockGetArticleSummaries).toBeCalledTimes(1)
        })

        test('Should return articles', () => {
            expect(result).toEqual(articles)
        })
    })

    describe('when call getArticle', () => {
        const [article] = articles
        const mockGetArticle = jest.spyOn(articleResource, 'getArticle')
        let result: IArticle
        beforeEach(async () => {
            mockGetArticle.mockReturnValue(Promise.resolve(article))
            result = await getArticle('1')
        })
        test('Should call article resource', () => {
            expect(mockGetArticle).toBeCalledWith('1')
        })

        test('Should return articles', () => {
            expect(result).toEqual(article)
        })

    })
})