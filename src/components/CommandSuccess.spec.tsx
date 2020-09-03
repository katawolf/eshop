import {render, RenderResult} from "@testing-library/react"
import React from "react";
import CommandSuccess from "./CommandSuccess";


describe('command success component spec', () => {
    let commandSuccessPage: RenderResult
    describe('on init', () => {
        beforeEach(() => {
            commandSuccessPage = component()
        })
        test('should display component', () => {
            expect(commandSuccessPage.queryByTestId('command-success')).toBeInTheDocument()
        })
    })
})

const component = () => render(<CommandSuccess/>)
