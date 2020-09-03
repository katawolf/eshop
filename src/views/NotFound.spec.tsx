import { RenderResult, render } from "@testing-library/react"
import React from "react";
import NotFound from "./NotFound";

describe('not found spec', () => {
    let notFound: RenderResult

    describe('on init', () => {
        beforeEach(() => {
            notFound = component()
        })
        test('should display "404 - page not found"', () => {
            expect(notFound.queryByText('404 - page not found')).toBeInTheDocument()
        })
    })
})

const component = () => render(<NotFound/>)