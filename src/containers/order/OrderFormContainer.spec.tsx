import {render, RenderResult} from "@testing-library/react";
import React from "react";
import {Provider} from "react-redux";
import configStore from "../../store/configStore";
import OrderFormContainer from "./OrderFormContainer";

jest.mock('../../components/order/OrderForm', () => () => <div data-testid={'order-form'} />)

describe('order form container spec', () => {
    let orderFormContainer: RenderResult

    describe('on init', () => {
        beforeEach(() => {
            orderFormContainer = component()
        })
        test('should display container', () => {
            expect(orderFormContainer.queryByTestId('order-form-container')).toBeInTheDocument()
        })
        test('should display order form component', () => {
            expect(orderFormContainer.queryByTestId('order-form')).toBeInTheDocument()
        })
    })
})

const component = () => render(
    <Provider store={configStore}>
        <OrderFormContainer/>
    </Provider>
)
