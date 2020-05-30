import {addArticleToCart} from "./action";
import {anArticleSummary} from "../../data.mock";

describe('Article actions spec', () => {

    describe('add article to card', () => {
        const article = anArticleSummary()
        test('should create action "ADD_ARTICLE"', () => {
            expect(
                addArticleToCart(article)
            ).toEqual({
                type: 'ADD_ARTICLE',
                payload: article
            })
        })
    })
})