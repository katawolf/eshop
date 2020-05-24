import {addArticleToCard, removeArticleToCard} from "./action";
import {anArticle} from "../../data.mock";

describe('Article actions spec', () => {

    describe('add article to card', () => {
        const article = anArticle()
        test('should create action "ADD_ARTICLE"', () => {
            expect(
                addArticleToCard(article)
            ).toEqual({
                type: 'ADD_ARTICLE',
                payload: article
            })
        })
    })

    describe('remove article to card', () => {
        const article = anArticle()
        test('should create action "REMOVE_ARTICLE', () => {
            expect(
                removeArticleToCard(article)
            ).toEqual({
                type: 'REMOVE_ARTICLE',
                payload: article
            })
        })
    })
})