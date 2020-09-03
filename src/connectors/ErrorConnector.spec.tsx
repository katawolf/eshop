import {render, RenderResult} from "@testing-library/react";
import React from "react";
import {Provider} from "react-redux";
import configStore from "../store/configStore";
import ErrorConnector from "./ErrorConnector";

jest.mock('../components/Error', () => () => <div data-testid={'error'} />)

describe('error connector spec', () => {
    let commandFormConnector: RenderResult

    describe('on init', () => {
        beforeEach(() => {
            commandFormConnector = component()
        })
        test('should display component', () => {
            expect(commandFormConnector.queryByTestId('errorConnector')).toBeInTheDocument()
        })
        test('should display error component', () => {
            expect(commandFormConnector.queryByTestId('error')).toBeInTheDocument()
        })
    })
})

const component = () => render(
    <Provider store={configStore}>
        <ErrorConnector/>
    </Provider>
)
