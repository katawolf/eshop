import React from 'react';
import {render, RenderResult} from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

jest.mock('./views/Home', () => () => <div data-testid={'home'} />)
jest.mock('./views/Article', () => () => <div data-testid={'article'} />)
jest.mock('./views/NotFound', () => () => <div data-testid={'not-found'} />)
jest.mock('./views/Cart', () => () => <div data-testid={'cart'} />)
jest.mock('./views/Order', () => () => <div data-testid={'order'} />)
jest.mock('./views/OrderSuccess', () => () => <div data-testid={'order-success'} />)

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
    const shouldNotDisplayOrderPage = () => {
        test('should not display order page', () => {
            expect(app.queryByTestId('order')).not.toBeInTheDocument()
        })
    }
    const shouldNotDisplayOrderSuccessPage = () => {
        test('should not display order success page', () => {
            expect(app.queryByTestId('order-success')).not.toBeInTheDocument()
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
        shouldNotDisplayOrderPage()
        shouldNotDisplayOrderSuccessPage()
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
        shouldNotDisplayOrderPage()
        shouldNotDisplayOrderSuccessPage()
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
        shouldNotDisplayOrderPage()
        shouldNotDisplayOrderSuccessPage()
        shouldNotDisplayNotFoundPage()
    })
    describe('path as /order', () => {
        beforeEach(() => {
            app = component('/order')
        })
        test('should display order page', () => {
            expect(app.queryByTestId('order')).toBeInTheDocument()
        })
        shouldNotDisplayHomePage()
        shouldNotDisplayArticlePage()
        shouldNotDisplayCartPage()
        shouldNotDisplayOrderSuccessPage()
        shouldNotDisplayNotFoundPage()
    })
    describe('path as /order-success', () => {
        beforeEach(() => {
            app = component('/order-success')
        })
        test('should display order page', () => {
            expect(app.queryByTestId('order-success')).toBeInTheDocument()
        })
        shouldNotDisplayHomePage()
        shouldNotDisplayArticlePage()
        shouldNotDisplayCartPage()
        shouldNotDisplayOrderPage()
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
        shouldNotDisplayOrderPage()
        shouldNotDisplayOrderSuccessPage()
    })

})

const component = (path = '/') => render(
    <MemoryRouter initialEntries={[path]}>
        <App/>
    </MemoryRouter>
    )
