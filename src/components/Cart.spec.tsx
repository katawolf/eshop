import {render, RenderResult} from "@testing-library/react"
import React from "react";
import Cart from "./Cart";

jest.mock('./Menu', () => () => <div data-testid={'menu'}>Menu</div>)
jest.mock('./cart/CartArticlesViewerConnector', () => () => <div data-testid={'cartArticlesViewerConnector'}>CartArticlesViewerConnector</div>)

describe('cart spec', () => {
    let cartPage: RenderResult
    describe('on init', () => {
        beforeEach(() => {
            cartPage = component()
        })
        test('should display component', () => {
            expect(cartPage.queryByTestId('cart')).not.toBeNull()
        })
        test('should display menu', () => {
            expect(cartPage.queryByTestId('menu')).not.toBeNull()
        })
        test('should display articles viewer connector', () => {
            expect(cartPage.queryByTestId('cartArticlesViewerConnector')).not.toBeNull()
        })
    })
})

const component = () => render(<Cart/>)