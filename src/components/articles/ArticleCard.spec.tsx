import React from "react";
import {fireEvent, render, RenderResult} from "@testing-library/react";
import ArticleCard, {IArticleCardProps} from "./ArticleCard";
import IArticle from "../../models/IArticle";
import {anArticle} from "../../data.mock";

const article: IArticle = anArticle({
    name: 'IPhone',
    imgSrc: '/src/image/iphone.jpg',
    description: 'a smartphone'
})
const addToCart = () => {}
const removeToCart = () => {}

describe('ArticleCardComponent', () => {

    let articleCardComponent: RenderResult

    describe('On init', () => {

        const shouldDisplayDefaultArticleValues = () => {
            test('Should display name', () => {
                expect(articleCardComponent.queryByText('IPhone')).not.toBeNull()
            })
            test('Should display image', () => {
                expect(
                    articleCardComponent.getByTestId('img').getAttribute('src')
                ).toEqual('/src/image/iphone.jpg')
            })
            test('Should display description', () => {
                expect(articleCardComponent.queryByText('a smartphone')).not.toBeNull()
            })
        }

        describe('When article is NOT on cart', () => {
            beforeEach(() => {
                articleCardComponent = component({article, cartArticles: []})
            })
            shouldDisplayDefaultArticleValues()
            test('should display "Add to basket" button', () => {
                expect(articleCardComponent.queryByText('Add to cart')).not.toBeNull()
            })
            test('should not display "Remove to basket" button', () => {
                expect(articleCardComponent.queryByText('Remove to cart')).toBeNull()
            })
        })

        describe('When article is on cart', () => {
            beforeEach(() => {
                articleCardComponent = component({article, cartArticles: [article]})
            })
            shouldDisplayDefaultArticleValues()
            test('should not display "Add to cart" button', () => {
                expect(articleCardComponent.queryByText('Add to cart')).toBeNull()
            })
            test('should display "Remove to basket" button', () => {
                expect(articleCardComponent.queryByText('Remove to cart')).not.toBeNull()
            })
        })
    })

    describe('When add article on cart', () => {
        const addToCart = jest.fn()

        beforeEach(() => {
            articleCardComponent = component({article, cartArticles: [], addToCart})
            fireEvent.click(articleCardComponent.getByTestId('addToCardButton'))
        })
        test('should call addToCart', () => {
            expect(addToCart).toBeCalledWith(article)
        })
    })

    describe('When remove article on cart', () => {
        const removeToCart = jest.fn()

        beforeEach(() => {
            articleCardComponent = component({article, cartArticles: [article], removeToCart})
            fireEvent.click(articleCardComponent.getByTestId('removeToCardButton'))
        })
        test('should call addToCart', () => {
            expect(removeToCart).toBeCalledWith(article)
        })
    })
})

const component = (partialProps: Partial<IArticleCardProps> = {}) => render(
    <ArticleCard {...{article, cartArticles: [], addToCart, removeToCart, ...partialProps}}/>)
