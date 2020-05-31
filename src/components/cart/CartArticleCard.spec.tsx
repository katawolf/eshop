import {fireEvent, render, RenderResult} from "@testing-library/react";
import React from "react";
import CartArticleCard, {ICartArticleCardProps} from "./CartArticleCard";
import {aCartArticle} from "../../data.mock";
import {createMemoryHistory} from "history";
import {act} from "react-dom/test-utils";
import {Router} from "react-router-dom";

const cartArticle = aCartArticle({
    id: '2',
    name: 'Shoes blue',
    imgSrc: 'path/to/img.jpg',
    price: {value: 128, currency: "EUR"},
    size: 'M',
    quantity: 12
})

describe('cart article card spec', () => {
    let cartArticleCard: RenderResult
    describe('on init', () => {
        beforeEach(() => {
            cartArticleCard = component({cartArticle})
        })
        test('should display component', () => {
            expect(cartArticleCard.queryByTestId('cartArticleCard')).toBeInTheDocument()
        })
        test('Should display image', () => {
            expect(
                cartArticleCard.getByTestId('img').getAttribute('src')
            ).toBe('path/to/img.jpg')
        })
        test('Should display title (name + type)', () => {
            expect(cartArticleCard.queryByText('Shoes blue (shoes)')).toBeInTheDocument()
        })
        test('Should display price', () => {
            expect(cartArticleCard.queryByText('Price : 128 €')).toBeInTheDocument()
        })
        test('Should display size', () => {
            expect(cartArticleCard.queryByText('Size : M')).toBeInTheDocument()
        })
        test('Should display quantity', () => {
            expect(cartArticleCard.queryByText('Quantity : 12')).toBeInTheDocument()
        })
        test('should display "Details" button', () => {
            expect(cartArticleCard.queryByText('Details')).toBeInTheDocument()
        })
        test('should display "Update" button', () => {
            expect(cartArticleCard.queryByText('Update')).toBeInTheDocument()
        })
        test('should display "Remove" button', () => {
            expect(cartArticleCard.queryByText('Remove')).toBeInTheDocument()
        })
    });
    describe('When click on "Details" button', () => {

        const history = createMemoryHistory()

        beforeEach(async () => {
            await act(async () => {
                cartArticleCard = component({cartArticle}, history)
                fireEvent.click(cartArticleCard.getByText('Details'))
            })
        })
        test('should redirect on article detail page', () => {
            expect(history.location.pathname).toBe('/article/2')
        })
    })
    describe('when click on "Update" button', () => {
        const updateCartArticle = jest.fn()

        beforeEach(() => {
            cartArticleCard = component({updateCartArticle})
            fireEvent.click(cartArticleCard.getByText('Update'))
        })
        afterEach(() => {
            updateCartArticle.mockClear()
        })
        test('should call update cart article prop', () => {
            expect(updateCartArticle).toBeCalledWith(cartArticle)
        })
    })
    describe('when click on "Remove" button', () => {
        const removeCartArticle = jest.fn()

        beforeEach(() => {
            cartArticleCard = component({removeCartArticle})
            fireEvent.click(cartArticleCard.getByText('Remove'))
        })
        afterEach(() => {
            removeCartArticle.mockClear()
        })
        test('should call remove cart article prop', () => {
            expect(removeCartArticle).toBeCalledWith(cartArticle)
        })
    })
})

const component = (partialProps: Partial<ICartArticleCardProps> = {}, history = createMemoryHistory()) => render(
    <Router history={history}>
        <CartArticleCard {...{
            cartArticle,
            updateCartArticle: jest.fn(),
            removeCartArticle: jest.fn(),
            ...partialProps
        }}/>
    </Router>)