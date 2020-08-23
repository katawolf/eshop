import {render, RenderResult} from "@testing-library/react"
import React from "react";
import Cart from "./Cart";
import Payment from "./Payment";

jest.mock('./Menu', () => () => <div data-testid={'menu'}>Menu</div>)
jest.mock('../connectors/payment/CartPaymentConnector',
    () => () => <div data-testid={'cartPaymentConnector'}>CartPaymentConnector</div>)

describe('payment spec', () => {
    let cartPage: RenderResult
    describe('on init', () => {
        beforeEach(() => {
            cartPage = component()
        })
        test('should display component', () => {
            expect(cartPage.queryByTestId('payment')).toBeInTheDocument()
        })
        test('should display menu', () => {
            expect(cartPage.queryByTestId('menu')).toBeInTheDocument()
        })
        test('should display cart payment connector', () => {
            expect(cartPage.queryByTestId('cartPaymentConnector')).toBeInTheDocument()
        })
    })
})

const component = () => render(<Payment/>)
