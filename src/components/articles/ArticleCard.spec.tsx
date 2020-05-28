import React from "react";
import {fireEvent, render, RenderResult} from "@testing-library/react";
import ArticleCard, {IArticleCardProps} from "./ArticleCard";
import IArticleSummary from "../../models/IArticleSummary";
import {anArticle} from "../../data.mock";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import {act} from "react-dom/test-utils";

const article: IArticleSummary = anArticle({
    name: 'Shoes blue',
    imgSrc: '/src/image/iphone.jpg',
    price: {
        value: 128,
        currency: "EUR"
    }
})
const addToCart = () => {
}
const removeToCart = () => {
}

describe('ArticleCardComponent', () => {

    let articleCardComponent: RenderResult

    describe('On init', () => {

        beforeEach(() => {
            articleCardComponent = component({article})
        })
        test('Should display image', () => {
            expect(
                articleCardComponent.getByTestId('img').getAttribute('src')
            ).toEqual('/src/image/iphone.jpg')
        })
        test('Should display name', () => {
            expect(articleCardComponent.queryByText('Shoes blue')).not.toBeNull()
        })
        test('Should display price', () => {
            expect(articleCardComponent.queryByText('128 €')).not.toBeNull()
        })
    })

    describe('When click on article card', () => {

        const history = createMemoryHistory()

        beforeEach(async () => {
            await act(async () => {
                articleCardComponent = component({}, history)
                fireEvent.click(articleCardComponent.getByTestId('articleCard'))
            })
        })
        test('should redirect on article detail page', () => {
            expect(history.location.pathname).toBe('/article')
        })
    })

})

const component = (partialProps: Partial<IArticleCardProps> = {}, history = createMemoryHistory()) => render(
    <Router history={history}>
        <ArticleCard {...{article, ...partialProps}}/>
    </Router>)
