import {render, RenderResult} from "@testing-library/react"
import React from "react";
import OrderSuccess from "./OrderSuccess";


describe('order success component spec', () => {
    let orderSuccessPage: RenderResult
    describe('on init', () => {
        beforeEach(() => {
            orderSuccessPage = component()
        })
        test('should display component', () => {
            expect(orderSuccessPage.queryByTestId('order-success')).toBeInTheDocument()
        })
    })
})

const component = () => render(<OrderSuccess/>)
