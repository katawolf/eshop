import {render, RenderResult} from "@testing-library/react"
import React from "react";
import Cart from "./Cart";

jest.mock('./Menu', () => () => <div data-testid={'menu'}>Menu</div>)
jest.mock('../connectors/cart/CartArticlesViewerConnector',
    () => () => <div data-testid={'cartArticlesViewerConnector'}>CartArticlesViewerConnector</div>)

describe('cart spec', () => {
    let cartPage: RenderResult
    describe('on init', () => {
        beforeEach(() => {
            cartPage = component()
        })
        test('should display component', () => {
            expect(cartPage.queryByTestId('cart')).toBeInTheDocument()
        })
        test('should display menu', () => {
            expect(cartPage.queryByTestId('menu')).toBeInTheDocument()
        })
        test('should display articles viewer connector', () => {
            expect(cartPage.queryByTestId('cartArticlesViewerConnector')).toBeInTheDocument()
        })
    })
})

const component = () => render(<Cart/>)