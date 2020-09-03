import {render, RenderResult} from "@testing-library/react";
import React from "react";
import {Provider} from "react-redux";
import configStore from "../store/configStore";
import ErrorConnector from "./ErrorContainer";

jest.mock('../components/Error', () => () => <div data-testid={'error'} />)

describe('error container spec', () => {
    let commandFormContainer: RenderResult

    describe('on init', () => {
        beforeEach(() => {
            commandFormContainer = component()
        })
        test('should display container', () => {
            expect(commandFormContainer.queryByTestId('error-container')).toBeInTheDocument()
        })
        test('should display error component', () => {
            expect(commandFormContainer.queryByTestId('error')).toBeInTheDocument()
        })
    })
})

const component = () => render(
    <Provider store={configStore}>
        <ErrorConnector/>
    </Provider>
)
