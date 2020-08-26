import {render, RenderResult} from "@testing-library/react";
import React from "react";
import {Provider} from "react-redux";
import configStore from "../../store/configStore";
import CartSummaryConnector from "./CartSummaryConnector";

jest.mock('../../components/cart/CartSummary', () => () => <div data-testid={'cartSummary'}>CartSummary</div>)

describe('cart summary connector spec', () => {
    let cartSummaryConnector: RenderResult

    describe('on init', () => {
        beforeEach(() => {
            cartSummaryConnector = component()
        })
        test('should display component', () => {
            expect(cartSummaryConnector.queryByTestId('cartSummaryConnector')).toBeInTheDocument()
        })
        test('should display cart payment component', () => {
            expect(cartSummaryConnector.queryByTestId('cartSummary')).toBeInTheDocument()
        })
    })
})

const component = () => render(
    <Provider store={configStore}>
        <CartSummaryConnector/>
    </Provider>
)
