import articleResource from "../resources/article.resource";
import {anArticle, anArticleSummary} from "../data.mock";
import IArticleSummary from "../models/IArticleSummary";
import {getArticle, getArticleSummaries} from "./article.service";
import IArticle from "../models/IArticle";

describe('Article service', () => {
    describe('When call getArticles', () => {
        const articles = [anArticle({name: 'Iphone'}), anArticle({name: 'Honor phone'})]
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
        const articles = anArticle({name: 'Iphone'})
        const mockGetArticle = jest.spyOn(articleResource, 'getArticle')
        let result: IArticle
        beforeEach(async () => {
            mockGetArticle.mockReturnValue(Promise.resolve(articles))
            result = await getArticle()
        })
        test('Should call article resource', () => {
            expect(mockGetArticle).toBeCalledTimes(1)
        })

        test('Should return articles', () => {
            expect(result).toEqual(articles)
        })

    })
})