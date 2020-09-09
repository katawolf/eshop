import {render, RenderResult} from "@testing-library/react";
import React from "react";
import {Provider} from "react-redux";
import configStore from "../../store/configStore";
import CommandFormContainer from "./CommandFormContainer";

jest.mock('../../components/command/CommandForm', () => () => <div data-testid={'command-form'} />)

describe('command form container spec', () => {
    let commandFormContainer: RenderResult

    describe('on init', () => {
        beforeEach(() => {
            commandFormContainer = component()
        })
        test('should display container', () => {
            expect(commandFormContainer.queryByTestId('command-form-container')).toBeInTheDocument()
        })
        test('should display command form component', () => {
            expect(commandFormContainer.queryByTestId('command-form')).toBeInTheDocument()
        })
    })
})

const component = () => render(
    <Provider store={configStore}>
        <CommandFormContainer/>
    </Provider>
)
