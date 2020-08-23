import {render, RenderResult} from "@testing-library/react";
import React from "react";
import {Provider} from "react-redux";
import configStore from "../../store/configStore";
import CartPaymentConnector from "./CartPaymentConnector";

jest.mock('../../components/payment/CartPayment', () => () => <div data-testid={'cartPayment'}>CartPayment</div>)

describe('cart payment connector spec', () => {
    let cartPaymentConnector: RenderResult

    describe('on init', () => {
        beforeEach(() => {
            cartPaymentConnector = component()
        })
        test('should display component', () => {
            expect(cartPaymentConnector.queryByTestId('cartPaymentConnector')).toBeInTheDocument()
        })
        test('should display cart payment component', () => {
            expect(cartPaymentConnector.queryByTestId('cartPayment')).toBeInTheDocument()
        })
    })
})

const component = () => render(
    <Provider store={configStore}>
        <CartPaymentConnector/>
    </Provider>
)
