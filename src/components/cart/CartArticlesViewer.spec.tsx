import {fireEvent, render, RenderResult} from "@testing-library/react"
import React from "react";
import CartArticlesViewer, {ICartArticlesViewerProps} from "./CartArticlesViewer";
import {aCartArticle} from "../../data.mock";
import {createMemoryHistory} from "history";
import {act} from "react-dom/test-utils";
import {Router} from "react-router-dom";

jest.mock('./CartArticleCard', () => () => <div data-testid={'cartArticleCard'}>CartArticleCard</div>)

const cartArticles = [
    aCartArticle({id: '1'}),
    aCartArticle({id: '2'}),
    aCartArticle({id: '3'})
]

describe('cart articles viewer spec', () => {
    let cartArticleViewer: RenderResult
    describe('on init', () => {
        beforeEach(() => {
            cartArticleViewer = component()
        })
        test('should display component', () => {
            expect(cartArticleViewer.queryByTestId('cartArticlesViewer')).toBeInTheDocument()
        })
        test('should display 3 cart article card', () => {
            expect(cartArticleViewer.queryAllByTestId('cartArticleCard')).toHaveLength(3)
        })
        test('should display "Pay cart" button', () => {
            expect(cartArticleViewer.queryByText('Pay cart')).toBeInTheDocument()
        })
    })
    describe('When click on "Pay cart" button', () => {
        const history = createMemoryHistory()

        beforeEach(async () => {
            await act(async () => {
                cartArticleViewer = component({}, history)
                fireEvent.click(cartArticleViewer.getByText('Pay cart'))
            })
        })
        test('should redirect on cart payment page', () => {
            expect(history.location.pathname).toBe('/cart/payment')
        })
    })
})

const component = (partialProps: Partial<ICartArticlesViewerProps> = {}, history = createMemoryHistory()) => render(
    <Router history={history}>
        <CartArticlesViewer {...{
            cartArticles,
            updateCartArticle: jest.fn(),
            removeCartArticle: jest.fn(),
            ...partialProps
        }}/>
    </Router>)