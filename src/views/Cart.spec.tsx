import {render, RenderResult} from "@testing-library/react"
import React from "react";
import Cart from "./Cart";

jest.mock('../components/Menu', () => () => <div data-testid={'menu'}/>)
jest.mock('../containers/cart/CartArticlesViewerContainer', () => () => <div
    data-testid={'cart-articles-viewer-container'}/>)

describe('cart spec', () => {
    let cartPage: RenderResult
    describe('on init', () => {
        beforeEach(() => {
            cartPage = component()
        })
        test('should display component', () => {
            expect(cartPage.queryByTestId('cart')).toBeInTheDocument()
        })
        test('should display menu component', () => {
            expect(cartPage.queryByTestId('menu')).toBeInTheDocument()
        })
        test('should display articles viewer container', () => {
            expect(cartPage.queryByTestId('cart-articles-viewer-container')).toBeInTheDocument()
        })
    })
})

const component = () => render(<Cart/>)