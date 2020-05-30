import React from "react";
import {fireEvent, render, RenderResult} from "@testing-library/react";
import ArticleCard, {IArticleCardProps} from "./ArticleCard";
import IArticleSummary from "../../models/IArticleSummary";
import {anArticle} from "../../data.mock";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import {act} from "react-dom/test-utils";

const article: IArticleSummary = anArticle({
    id: '1',
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

describe('Article card spec', () => {

    let articleCard: RenderResult

    describe('On init', () => {

        beforeEach(() => {
            articleCard = component({article})
        })
        test('should display component', () => {
            expect(articleCard.queryByTestId('articleCard')).toBeInTheDocument()
        })
        test('Should display image', () => {
            expect(
                articleCard.getByTestId('img').getAttribute('src')
            ).toBe('/src/image/iphone.jpg')
        })
        test('Should display name', () => {
            expect(articleCard.queryByText('Shoes blue')).toBeInTheDocument()
        })
        test('Should display price', () => {
            expect(articleCard.queryByText('128 €')).toBeInTheDocument()
        })
    })

    describe('When click on article card', () => {

        const history = createMemoryHistory()

        beforeEach(() => {
            articleCard = component({article}, history)
            fireEvent.click(articleCard.getByTestId('articleCard'))
        })
        test('should redirect on article detail page', () => {
            expect(history.location.pathname).toBe('/article/1')
        })
    })

})

const component = (partialProps: Partial<IArticleCardProps> = {}, history = createMemoryHistory()) => render(
    <Router history={history}>
        <ArticleCard {...{article, ...partialProps}}/>
    </Router>)
