import {render, RenderResult} from "@testing-library/react"
import React from "react";
import Command from "./Command";

jest.mock('../components/Menu', () => () => <div data-testid={'menu'}/>)
jest.mock('../containers/ErrorContainer', () => () => <div data-testid={'error-container'}/>)
jest.mock('../containers/cart/CartSummaryContainer', () => () => <div data-testid={'cart-summary-container'}/>)
jest.mock('../containers/command/CommandFormContainer', () => () => <div data-testid={'command-form-container'}/>)

describe('command spec', () => {
    let paymentPage: RenderResult
    describe('on init', () => {
        beforeEach(() => {
            paymentPage = component()
        })
        test('should display component', () => {
            expect(paymentPage.queryByTestId('command')).toBeInTheDocument()
        })
        test('should display menu component', () => {
            expect(paymentPage.queryByTestId('menu')).toBeInTheDocument()
        })
        test('should display error container', () => {
            expect(paymentPage.queryByTestId('error-container')).toBeInTheDocument()
        })
        test('should display cart summary container', () => {
            expect(paymentPage.queryByTestId('cart-summary-container')).toBeInTheDocument()
        })
        test('should display command form container', () => {
            expect(paymentPage.queryByTestId('command-form-container')).toBeInTheDocument()
        })
    })
})

const component = () => render(<Command/>)
