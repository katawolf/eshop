import {render, RenderResult} from "@testing-library/react"
import React from "react";
import Cart from "./Cart";

jest.mock('./Menu', () => () => <div data-testid={'menu'}></div>)
jest.mock('./cart/ArticlesViewerConnector', () => () => <div data-testid={'articlesViewerConnector'}></div>)

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
            expect(cartPage.queryByTestId('articlesViewerConnector')).not.toBeNull()
        })
    })
})

const component = () => render(<Cart/>)