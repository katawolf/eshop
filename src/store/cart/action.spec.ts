import {addCartArticle} from "./action";
import {aCartArticle} from "../../data.mock";

describe('Article actions spec', () => {

    describe('add article to card', () => {
        const article = aCartArticle()
        test('should create action "ADD_ARTICLE"', () => {
            expect(
                addCartArticle(article)
            ).toEqual({
                type: 'ADD_CART_ARTICLE',
                payload: article
            })
        })
    })
})