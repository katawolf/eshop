import React from 'react';
import {render, RenderResult} from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

jest.mock('./components/Home', () => () => <div data-testid={'home'} />)
jest.mock('./components/Article', () => () => <div data-testid={'article'} />)
jest.mock('./components/NotFound', () => () => <div data-testid={'not-found'} />)
jest.mock('./components/Cart', () => () => <div data-testid={'cart'} />)
jest.mock('./components/Command', () => () => <div data-testid={'command'} />)
jest.mock('./components/CommandSuccess', () => () => <div data-testid={'command-success'} />)

describe('App component', () => {
    let app: RenderResult

    const shouldNotDisplayHomePage = () => {
        test('should not display home page', () => {
            expect(app.queryByTestId('home')).not.toBeInTheDocument()
        })
    }
    const shouldNotDisplayArticlePage = () => {
        test('should not display article page', () => {
            expect(app.queryByTestId('article')).not.toBeInTheDocument()
        })
    }
    const shouldNotDisplayCartPage = () => {
        test('should not display cart page', () => {
            expect(app.queryByTestId('cart')).not.toBeInTheDocument()
        })
    }
    const shouldNotDisplayCommandPage = () => {
        test('should not display command page', () => {
            expect(app.queryByTestId('command')).not.toBeInTheDocument()
        })
    }
    const shouldNotDisplayCommandSuccessPage = () => {
        test('should not display command success page', () => {
            expect(app.queryByTestId('command-success')).not.toBeInTheDocument()
        })
    }
    const shouldNotDisplayNotFoundPage = () => {
        test('should not display not found page', () => {
            expect(app.queryByTestId('not-found')).not.toBeInTheDocument()
        })
    }

    describe('path as /', () => {
        beforeEach(() => {
            app = component('/')
        })
        test('should display home page', () => {
            expect(app.queryByTestId('home')).toBeInTheDocument()
        })
        shouldNotDisplayArticlePage()
        shouldNotDisplayCartPage()
        shouldNotDisplayCommandPage()
        shouldNotDisplayCommandSuccessPage()
        shouldNotDisplayNotFoundPage()
    })
    describe('path as /article/2', () => {
        beforeEach(() => {
            app = component('/article/2')
        })
        test('should display article page', () => {
            expect(app.queryByTestId('article')).toBeInTheDocument()
        })
        shouldNotDisplayHomePage()
        shouldNotDisplayCartPage()
        shouldNotDisplayCommandPage()
        shouldNotDisplayCommandSuccessPage()
        shouldNotDisplayNotFoundPage()
    })
    describe('path as /cart', () => {
        beforeEach(() => {
            app = component('/cart')
        })
        test('should display cart page', () => {
            expect(app.queryByTestId('cart')).toBeInTheDocument()
        })
        shouldNotDisplayHomePage()
        shouldNotDisplayArticlePage()
        shouldNotDisplayCommandPage()
        shouldNotDisplayCommandSuccessPage()
        shouldNotDisplayNotFoundPage()
    })
    describe('path as /command', () => {
        beforeEach(() => {
            app = component('/command')
        })
        test('should display command page', () => {
            expect(app.queryByTestId('command')).toBeInTheDocument()
        })
        shouldNotDisplayHomePage()
        shouldNotDisplayArticlePage()
        shouldNotDisplayCartPage()
        shouldNotDisplayCommandSuccessPage()
        shouldNotDisplayNotFoundPage()
    })
    describe('path as /command-success', () => {
        beforeEach(() => {
            app = component('/command-success')
        })
        test('should display command page', () => {
            expect(app.queryByTestId('command-success')).toBeInTheDocument()
        })
        shouldNotDisplayHomePage()
        shouldNotDisplayArticlePage()
        shouldNotDisplayCartPage()
        shouldNotDisplayCommandPage()
        shouldNotDisplayNotFoundPage()
    })
    describe('path as /unknown', () => {
        beforeEach(() => {
            app = component('/unknown')
        })
        test('should display not found page', () => {
            expect(app.queryByTestId('not-found')).toBeInTheDocument()
        })
        shouldNotDisplayHomePage()
        shouldNotDisplayArticlePage()
        shouldNotDisplayCartPage()
        shouldNotDisplayCommandPage()
        shouldNotDisplayCommandSuccessPage()
    })

})

const component = (path = '/') => render(
    <MemoryRouter initialEntries={[path]}>
        <App/>
    </MemoryRouter>
    )
