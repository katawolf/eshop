import {fireEvent, render, RenderResult} from "@testing-library/react"
import React from "react"
import Menu from "./Menu";
import {createMemoryHistory} from "history";
import {Router} from "react-router-dom";

describe('menu component', () => {
    let menu: RenderResult
    const history = createMemoryHistory()

    describe('on init', () => {
        beforeEach(() => {
            menu = component()
        })
        test('should display component', () => {
            expect(menu.queryByTestId('menu')).not.toBeNull()
        })
    })
    describe('when click on "Eshop"', () => {
        beforeEach(() => {
            history.push('/not-home')
            menu = component(history)
            fireEvent.click(menu.getByText('Eshop'))
        })
        test('should redirect to home url', () => {
            expect(history.location.pathname).toBe('/')
        })
    })
    describe('when click on "Cart" button', () => {
        beforeEach(() => {
            menu = component(history)
            fireEvent.click(menu.getByText('Cart'))
        })
        test('should redirect to cart url', () => {
            expect(history.location.pathname).toBe('/cart')
        })
    })
})

const component = (history = createMemoryHistory()) => render(
    <Router history={history}>
        <Menu/>
    </Router>)