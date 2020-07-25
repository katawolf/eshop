import {render, RenderResult} from "@testing-library/react"
import React from "react";
import CartArticlesViewer, {ICartArticlesViewerProps} from "./CartArticlesViewer";
import {aCartArticle} from "../../data.mock";

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
    })
})

const component = (partialProps: Partial<ICartArticlesViewerProps> = {}) => render(
    <CartArticlesViewer {...{
        cartArticles,
        updateCartArticle: jest.fn(),
        removeCartArticle: jest.fn(),
        ...partialProps
    }}/>)