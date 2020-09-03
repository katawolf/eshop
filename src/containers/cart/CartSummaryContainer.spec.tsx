import {render, RenderResult} from "@testing-library/react";
import React from "react";
import {Provider} from "react-redux";
import configStore from "../../store/configStore";
import CartSummaryConnector from "./CartSummaryContainer";

jest.mock('../../components/cart/CartSummary', () => () => <div data-testid={'cart-summary'}/>)

describe('cart summary container spec', () => {
    let cartSummaryContainer: RenderResult

    describe('on init', () => {
        beforeEach(() => {
            cartSummaryContainer = component()
        })
        test('should display container', () => {
            expect(cartSummaryContainer.queryByTestId('cart-summary-container')).toBeInTheDocument()
        })
        test('should display cart summary component', () => {
            expect(cartSummaryContainer.queryByTestId('cart-summary')).toBeInTheDocument()
        })
    })
})

const component = () => render(
    <Provider store={configStore}>
        <CartSummaryConnector/>
    </Provider>
)
