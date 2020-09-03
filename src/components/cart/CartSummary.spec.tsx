import {render, RenderResult} from "@testing-library/react"
import React from "react"
import {aCartArticle} from "../../data.mock";
import CartSummary, {ICartSummaryProps} from "./CartSummary";

const cartArticles = [
    aCartArticle({id: '1', price: {value: 12.00, currency: 'EUR'}, quantity: 2}),
    aCartArticle({id: '2', price: {value: 9.75, currency: 'EUR'}, quantity: 5}),
    aCartArticle({id: '3', price: {value: 100, currency: 'EUR'}, quantity: 1})
]

describe('cart summary spec', () => {
    let cartSummary: RenderResult
    describe('on init', () => {
        beforeEach(() => {
            cartSummary = component({cartArticles})
        })
        test('should display component', () => {
            expect(cartSummary.queryByTestId('cart-summary')).toBeInTheDocument()
        })
        test('should display total amount', () => {
            expect(cartSummary.queryByText('Total amount : 172.75 €')).toBeInTheDocument()
        })
    })
})

const component = (partialProps: Partial<ICartSummaryProps> = {}) => render(
    <CartSummary {...{cartArticles, ...partialProps}}/>)