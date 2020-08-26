import {render, RenderResult} from "@testing-library/react"
import React from "react";
import Payment from "./Payment";

jest.mock('./Menu', () => () => <div data-testid={'menu'}>Menu</div>)
jest.mock('../connectors/payment/CartPaymentConnector',
    () => () => <div data-testid={'cartPaymentConnector'}>CartPaymentConnector</div>)
jest.mock('./payment/BankCardForm', () => () => <div data-testid={'bankCardForm'}>BankCardForm</div>)
jest.mock('../connectors/cart/CartSummaryConnector', () => () => <div
    data-testid={'cartSummaryConnector'}>CartSummaryConnector</div>)

describe('payment spec', () => {
    let paymentPage: RenderResult
    describe('on init', () => {
        beforeEach(() => {
            paymentPage = component()
        })
        test('should display component', () => {
            expect(paymentPage.queryByTestId('payment')).toBeInTheDocument()
        })
        test('should display menu', () => {
            expect(paymentPage.queryByTestId('menu')).toBeInTheDocument()
        })
        test('should display cart summary connector', () => {
            expect(paymentPage.queryByTestId('cartSummaryConnector')).toBeInTheDocument()
        })
        test('should display bank card form component', () => {
            expect(paymentPage.queryByTestId('bankCardForm')).toBeInTheDocument()
        })
        test('should display cart payment connector', () => {
            expect(paymentPage.queryByTestId('cartPaymentConnector')).toBeInTheDocument()
        })
    })
})

const component = () => render(<Payment/>)
