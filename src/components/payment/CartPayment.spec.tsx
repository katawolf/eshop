import {render, RenderResult} from "@testing-library/react"
import React from "react";
import CartPayment, {ICartPaymentProps} from "./CartPayment";
import {aCartArticle} from "../../data.mock";

const cartArticles = [
    aCartArticle({id: '1', price: {value: 12.00, currency: 'EUR'}, quantity: 2}),
    aCartArticle({id: '2', price: {value: 9.75, currency: 'EUR'}, quantity: 5}),
    aCartArticle({id: '3', price: {value: 100, currency: 'EUR'}, quantity: 1})
]

describe('cart payment spec', () => {
    let cartPayment: RenderResult
    describe('on init', () => {
        beforeEach(() => {
            cartPayment = component({cartArticles})
        })
        test('should display component', () => {
            expect(cartPayment.queryByTestId('cartPayment')).toBeInTheDocument()
        })
        test('should display total amount', () => {
            expect(cartPayment.queryByText('Total amount : 172.75 €')).toBeInTheDocument()
        })
        test('should display "Pay" button', () => {
            expect(cartPayment.queryByText('Pay')).toBeInTheDocument()
        })
    })
})

const component = (partialProps: Partial<ICartPaymentProps> = {}) => render(<CartPayment {...{cartArticles, ...partialProps}}/>)
