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
    size: 'M'
})

describe('cart article card spec', () => {
    let cartArticleCard: RenderResult
    describe('on init', () => {
        beforeEach(() => {
            cartArticleCard = component({cartArticle})
        })
        test('should display component', () => {
            expect(cartArticleCard.queryByTestId('cartArticleCard')).not.toBeNull()
        })
        test('Should display image', () => {
            expect(
                cartArticleCard.getByTestId('img').getAttribute('src')
            ).toEqual('path/to/img.jpg')
        })
        test('Should display title (name + type)', () => {
            expect(cartArticleCard.queryByText('Shoes blue (shoes)')).not.toBeNull()
        })
        test('Should display price', () => {
            expect(cartArticleCard.queryByText('Price : 128 €')).not.toBeNull()
        })
        test('Should display size', () => {
            expect(cartArticleCard.queryByText('Size : M')).not.toBeNull()
        })
    });

    describe('When click on cart article card', () => {

        const history = createMemoryHistory()

        beforeEach(async () => {
            await act(async () => {
                cartArticleCard = component({cartArticle}, history)
                fireEvent.click(cartArticleCard.getByTestId('cartArticleCard'))
            })
        })
        test('should redirect on article detail page', () => {
            expect(history.location.pathname).toBe('/article/2')
        })
    })
})

const component = (partialProps: Partial<ICartArticleCardProps> = {}, history = createMemoryHistory()) => render(
    <Router history={history}>
        <CartArticleCard {...{cartArticle, ...partialProps}}/>
    </Router>)