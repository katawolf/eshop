import { render, RenderResult } from "@testing-library/react"
import React from "react"
import Menu from "./Menu";

describe('menu component', () => {
    let menu: RenderResult

    describe('on init', () => {
        beforeEach(() => {
            menu = component()
        })
        test('should display component', () => {
            expect(menu.queryByTestId('menu')).not.toBeNull()
        })
    })
})

const component = () => render(<Menu/>)