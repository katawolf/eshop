import {render, RenderResult} from "@testing-library/react";
import React from "react";
import {Provider} from "react-redux";
import configStore from "../../store/configStore";
import CartPaymentConnector from "./CommandFormConnector";

jest.mock('../../components/command/CommandForm', () => () => <div data-testid={'commandForm'} />)

describe('command form connector spec', () => {
    let commandFormConnector: RenderResult

    describe('on init', () => {
        beforeEach(() => {
            commandFormConnector = component()
        })
        test('should display component', () => {
            expect(commandFormConnector.queryByTestId('commandFormConnector')).toBeInTheDocument()
        })
        test('should display command form component', () => {
            expect(commandFormConnector.queryByTestId('commandForm')).toBeInTheDocument()
        })
    })
})

const component = () => render(
    <Provider store={configStore}>
        <CartPaymentConnector/>
    </Provider>
)
