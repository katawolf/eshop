import React from 'react';
import {render, RenderResult} from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

jest.mock('./components/Home', () => () => <div data-testid={'home'}>Home</div>)
jest.mock('./components/Article', () => () => <div data-testid={'article'}>Article</div>)
jest.mock('./components/NotFound', () => () => <div data-testid={'notFound'}>notFound</div>)

describe('App component', () => {
    let app: RenderResult

    describe('path as /', () => {
        beforeEach(() => {
            app = component('/')
        })
        test('should display home page', () => {
            expect(app.queryByTestId('home')).not.toBeNull()
        })
        test('should not display article page', () => {
            expect(app.queryByTestId('article')).toBeNull()
        })
        test('should not display not found page', () => {
            expect(app.queryByTestId('notFound')).toBeNull()
        })
    })
    describe('path as /article/2', () => {
        beforeEach(() => {
            app = component('/article/2')
        })
        test('should not display home page', () => {
            expect(app.queryByTestId('home')).toBeNull()
        })
        test('should display article page', () => {
            expect(app.queryByTestId('article')).not.toBeNull()
        })
        test('should not display not found page', () => {
            expect(app.queryByTestId('notFound')).toBeNull()
        })
    })
    describe('path as /unknown', () => {
        beforeEach(() => {
            app = component('/unknown')
        })
        test('should not display home page', () => {
            expect(app.queryByTestId('home')).toBeNull()
        })
        test('should not display article page', () => {
            expect(app.queryByTestId('article')).toBeNull()
        })
        test('should display not found page', () => {
            expect(app.queryByTestId('notFound')).not.toBeNull()
        })
    })
})

const component = (path = '/') => render(
    <MemoryRouter initialEntries={[path]}>
        <App/>
    </MemoryRouter>
    )
