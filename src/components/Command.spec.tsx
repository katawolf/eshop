import {render, RenderResult} from "@testing-library/react"
import React from "react";
import Command from "./Command";

jest.mock('./Menu', () => () => <div data-testid={'menu'}/>)
jest.mock('../connectors/ErrorConnector', () => () => <div data-testid={'errorConnector'}/>)
jest.mock('../connectors/cart/CartSummaryConnector', () => () => <div data-testid={'cartSummaryConnector'}/>)
jest.mock('../connectors/command/CommandFormConnector', () => () => <div data-testid={'commandFormConnector'}/>)

describe('payment spec', () => {
    let paymentPage: RenderResult
    describe('on init', () => {
        beforeEach(() => {
            paymentPage = component()
        })
        test('should display component', () => {
            expect(paymentPage.queryByTestId('command')).toBeInTheDocument()
        })
        test('should display menu', () => {
            expect(paymentPage.queryByTestId('menu')).toBeInTheDocument()
        })
        test('should display error connector', () => {
            expect(paymentPage.queryByTestId('errorConnector')).toBeInTheDocument()
        })
        test('should display cart summary connector', () => {
            expect(paymentPage.queryByTestId('cartSummaryConnector')).toBeInTheDocument()
        })
        test('should display command form connector', () => {
            expect(paymentPage.queryByTestId('commandFormConnector')).toBeInTheDocument()
        })
    })
})

const component = () => render(<Command/>)
