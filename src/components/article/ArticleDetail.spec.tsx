import {fireEvent, render, RenderResult} from "@testing-library/react"
import {aCartArticle, anArticle} from "../../data.mock";
import React from "react";
import ArticleDetail, {IArticleDetailProps} from "./ArticleDetail";

const article = anArticle(
    {
        id: '1',
        name: 'name',
        price: {value: 125, currency: 'EUR'},
        imgSrc: '/src/img',
        description: 'a description',
    })

const cartArticle = aCartArticle({
    id: '1',
    name: 'name',
    price: {value: 125, currency: 'EUR'},
    imgSrc: '/src/img',
    description: 'a description',
})

describe('Article detail spec', () => {
    let articleDetail: RenderResult
    const cleanAddCartArticleError = jest.fn()
    describe('on init', () => {
        beforeEach(() => {
            cleanAddCartArticleError.mockClear()
            articleDetail = componentRender({article, cleanCartError: cleanAddCartArticleError})
        })
        afterEach(() => {
            cleanAddCartArticleError.mockClear()
        })
        test('should display component', () => {
            expect(articleDetail.queryByTestId('article-detail')).toBeInTheDocument()
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
                articleDetail.rerender(component({cartError: 'an error'}))
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
    describe('when click on "Add to cart" button', () => {
        const addCartArticle = jest.fn()
        beforeEach(() => {
            articleDetail = componentRender({article, addCartArticle})
            fireEvent.click(articleDetail.getByText('Add on cart'))
        })
        afterEach(() => {
            addCartArticle.mockClear()
        })
        test('should call addCartArticle', () => {
            expect(addCartArticle).toBeCalledWith({...cartArticle, quantity: 1})
        })
    })
})

const componentRender = (partialProps: Partial<IArticleDetailProps> = {}) => render(component(partialProps))

const component = (partialProps: Partial<IArticleDetailProps> = {}) =>
    <ArticleDetail {...{
        article, addCartArticle: () => {
        }, cleanCartError: () => {
        }, ...partialProps
    }} />