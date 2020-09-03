import articleResource from "../../resources/article.resource";
import {anArticle} from "../../data.mock";
import {getArticle, getArticles} from "./article.service";
import IArticle from "../models/IArticle";

describe('Article service', () => {
    const articles = [anArticle({id: '1', name: 'Iphone'}), anArticle({id: '2', name: 'Honor phone'})]

    describe('When call getArticles', () => {
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

    describe('when call getArticle', () => {
        const [article] = articles
        const mockGetArticle = jest.spyOn(articleResource, 'getArticle')
        let result: IArticle
        beforeEach(async () => {
            mockGetArticle.mockReturnValue(Promise.resolve(article))
            result = await getArticle('1')
        })
        afterEach(() => {
            mockGetArticle.mockClear()
        })
        test('Should call article resource', () => {
            expect(mockGetArticle).toBeCalledWith('1')
        })

        test('Should return articles', () => {
            expect(result).toEqual(article)
        })

    })
})