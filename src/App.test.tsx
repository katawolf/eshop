import React from 'react';
import {render, RenderResult} from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

jest.mock('./components/Home', () => () => <div data-testid={'home'}>Home</div>)
jest.mock('./components/Article', () => () => <div data-testid={'article'}>Article</div>)
jest.mock('./components/NotFound', () => () => <div data-testid={'notFound'}>notFound</div>)
jest.mock('./components/Cart', () => () => <div data-testid={'cart'}>cart</div>)
jest.mock('./components/Payment', () => () => <div data-testid={'payment'}>payment</div>)

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
    const shouldNotDisplayPaymentPage = () => {
        test('should not display payment page', () => {
            expect(app.queryByTestId('payment')).not.toBeInTheDocument()
        })
    }
    const shouldNotDisplayNotFoundPage = () => {
        test('should not display not found page', () => {
            expect(app.queryByTestId('notFound')).not.toBeInTheDocument()
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
        shouldNotDisplayPaymentPage()
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
        shouldNotDisplayPaymentPage()
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
        shouldNotDisplayPaymentPage()
        shouldNotDisplayNotFoundPage()
    })
    describe('path as /payment', () => {
        beforeEach(() => {
            app = component('/payment')
        })
        test('should display payment page', () => {
            expect(app.queryByTestId('payment')).toBeInTheDocument()
        })
        shouldNotDisplayHomePage()
        shouldNotDisplayArticlePage()
        shouldNotDisplayCartPage()
        shouldNotDisplayNotFoundPage()
    })
    describe('path as /unknown', () => {
        beforeEach(() => {
            app = component('/unknown')
        })
        test('should display not found page', () => {
            expect(app.queryByTestId('notFound')).toBeInTheDocument()
        })
        shouldNotDisplayHomePage()
        shouldNotDisplayArticlePage()
        shouldNotDisplayCartPage()
        shouldNotDisplayPaymentPage()
    })

})

const component = (path = '/') => render(
    <MemoryRouter initialEntries={[path]}>
        <App/>
    </MemoryRouter>
    )
