import {render, RenderResult} from "@testing-library/react"
import React from "react";
import Order from "./Order";

jest.mock('../components/Menu', () => () => <div data-testid={'menu'}/>)
jest.mock('../containers/ErrorContainer', () => () => <div data-testid={'error-container'}/>)
jest.mock('../containers/cart/CartSummaryContainer', () => () => <div data-testid={'cart-summary-container'}/>)
jest.mock('../containers/order/OrderFormContainer', () => () => <div data-testid={'order-form-container'}/>)

describe('order spec', () => {
    let orderView: RenderResult
    describe('on init', () => {
        beforeEach(() => {
            orderView = component()
        })
        test('should display component', () => {
            expect(orderView.queryByTestId('order')).toBeInTheDocument()
        })
        test('should display menu component', () => {
            expect(orderView.queryByTestId('menu')).toBeInTheDocument()
        })
        test('should display error container', () => {
            expect(orderView.queryByTestId('error-container')).toBeInTheDocument()
        })
        test('should display cart summary container', () => {
            expect(orderView.queryByTestId('cart-summary-container')).toBeInTheDocument()
        })
        test('should display command form container', () => {
            expect(orderView.queryByTestId('order-form-container')).toBeInTheDocument()
        })
    })
})

const component = () => render(<Order/>)
