import {render, RenderResult} from "@testing-library/react"
import React from "react";
import Error, {IErrorProps} from "./Error";


describe('error component spec', () => {
    let cartPage: RenderResult
    describe('on init', () => {
        beforeEach(() => {
            cartPage = component({error: 'an error'})
        })
        test('should display component', () => {
            expect(cartPage.queryByTestId('error')).toBeInTheDocument()
        })
        test('should display error', () => {
            expect(cartPage.queryByText('an error')).toBeInTheDocument()
        })
    })
    describe('when unmount component', () => {
        const cleanError = jest.fn()
        beforeEach(() => {
            cartPage = component({cleanError, error: 'an error'})
            cartPage.unmount()
        })
        test('should call clean error method', () => {
            expect(cleanError).toBeCalledTimes(1)
        })
    })
})

const component = (partialProps: Partial<IErrorProps> = {}) => render(<Error {...{cleanError: () => {}, ...partialProps}}/>)
