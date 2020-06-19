import {fireEvent, render, RenderResult} from "@testing-library/react"
import {aCartArticle, anArticle} from "../../data.mock";
import React from "react";
import ArticleDetail, {IArticleDetailProps} from "./ArticleDetail";
import Size from "../../models/Size";

const article = anArticle(
    {
        id: '1',
        name: 'name',
        price: {value: 125, currency: 'EUR'},
        imgSrc: '/src/img',
        description: 'a description',
        availableSizes: ['XS', "S", "M"]
    })

const cartArticle = aCartArticle({
    id: '1',
    name: 'name',
    price: {value: 125, currency: 'EUR'},
    imgSrc: '/src/img',
    description: 'a description',
    availableSizes: ['XS', "S", "M"],
    size: 'M'
})

describe('Article detail spec', () => {
    let articleDetail: RenderResult
    const cleanAddCartArticleError = jest.fn()
    describe('on init', () => {
        beforeEach(() => {
            cleanAddCartArticleError.mockClear()
            articleDetail = componentRender({article, cleanAddCartArticleError})
        })
        afterEach(() => {
            cleanAddCartArticleError.mockClear()
        })
        test('should display component', () => {
            expect(articleDetail.queryByTestId('articleDetail')).toBeInTheDocument()
        })
        test('should display main image', () => {
            expect(
                articleDetail.getByTestId('img').getAttribute('src')
            ).toEqual('/src/img')
        })
        test('should display price', () => {
            expect(articleDetail.queryByText('125 €')).toBeInTheDocument()
        })
        test('should display name', () => {
            expect(articleDetail.queryByText('name')).toBeInTheDocument()
        })
        test('should display description', () => {
            expect(articleDetail.queryByText('a description')).toBeInTheDocument()
        })
        test.each(['XS', 'S', 'M'] as Size[])('should propose %s available sizes', (size: Size) => {
            expect(articleDetail.queryByText(size)).toBeInTheDocument()
        })
        test('should display "Add on cart" button', () => {
            expect(articleDetail.queryByText('Add on cart')).toBeInTheDocument()
        })
        test('should not display error', () => {
            expect(articleDetail.queryByText('an error')).not.toBeInTheDocument()
        })
        test('should not call clean add cart article error method', () => {
            expect(cleanAddCartArticleError).not.toBeCalled()
        })
        describe('when there are an add cart article error', () => {
            beforeEach(() => {
                articleDetail.rerender(component({addCartArticleError: 'an error'}))
            })
            test('should display error', () => {
                expect(articleDetail.queryByText('an error')).toBeInTheDocument()
            })
        })
        describe('when unmount component', () => {
            beforeEach(() => {
                articleDetail.unmount()
            })
            test('should call clean add cart article error method', () => {
                expect(cleanAddCartArticleError).toBeCalledTimes(1)
            })
        })
    })
    describe('when not selected size', () => {
        const addCartArticle = jest.fn()
        beforeEach(() => {
            articleDetail = componentRender({article, addCartArticle})
        })
        afterEach(() => {
            addCartArticle.mockClear()
        })
        describe('and click on "Add to cart" button', () => {
            beforeEach(() => {
                fireEvent.click(articleDetail.getByText('Add on cart'))
            })
            test('should display "Please select size" text', () => {
                expect(articleDetail.queryByText('Please select a size')).toBeInTheDocument()
            })
            test('should not call addCartArticle', () => {
                expect(addCartArticle).not.toBeCalled()
            })
        })
    })
    describe.each(['XS', 'S', 'M'] as Size[])('when selected %s size', (size: Size) => {
        const addCartArticle = jest.fn()
        const cleanAddCartArticleError = jest.fn()
        beforeEach(() => {
            cleanAddCartArticleError.mockClear()
            articleDetail = componentRender({article, addCartArticle, cleanAddCartArticleError})
            fireEvent.change(articleDetail.getByTestId('sizeSelect'), {target: {value: size}})
        })
        afterEach(() => {
            addCartArticle.mockClear()
            cleanAddCartArticleError.mockClear()
        })
        describe('and click on "Add to cart" button', () => {
            beforeEach(() => {
                fireEvent.click(articleDetail.getByText('Add on cart'))
            })
            test('should not display "Please select size" text', () => {
                expect(articleDetail.queryByText('Please select a size')).not.toBeInTheDocument()
            })
            test('should call cleanAddCartArticleError', () => {
                expect(cleanAddCartArticleError).toBeCalledTimes(1)
            })
            test('should call addCartArticle', () => {
                expect(addCartArticle).toBeCalledWith({...cartArticle, size, quantity: 1})
            })
        })
    })
})

const componentRender = (partialProps: Partial<IArticleDetailProps> = {}) => render(component(partialProps))

const component = (partialProps: Partial<IArticleDetailProps> = {}) =>
    <ArticleDetail {...{
        article, addCartArticle: () => {
        }, cleanAddCartArticleError: () => {
        }, ...partialProps
    }} />