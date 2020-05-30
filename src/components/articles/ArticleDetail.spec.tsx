import {render, RenderResult, fireEvent} from "@testing-library/react"
import {aCartArticle, anArticle, anArticleSummary} from "../../data.mock";
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
    size: 'M'
})

describe('Article detail spec', () => {
    let articleDetail: RenderResult
    describe('on init', () => {
        beforeEach(() => {
            articleDetail = component({article})
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
        test.each(['XS', 'S', 'M'] as Size[])('should display %s available sizes', (size: Size) => {
            expect(articleDetail.queryByText(size)).toBeInTheDocument()
        })
        test('should display "Add on cart" button', () => {
            expect(articleDetail.queryByText('Add on cart')).toBeInTheDocument()
        })
    })
    describe('when not selected size', () => {
        const addCartArticle = jest.fn()
        beforeEach(() => {
            articleDetail = component({article, addCartArticle})
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
        beforeEach(() => {
            articleDetail = component({article, addCartArticle})
            fireEvent.change(articleDetail.getByTestId('select'), {target: {value: size}})
        })
        afterEach(() => {
            addCartArticle.mockClear()
        })
        describe('and click on "Add to cart" button', () => {
            beforeEach(() => {
                fireEvent.click(articleDetail.getByText('Add on cart'))
            })
            test('should not display "Please select size" text', () => {
                expect(articleDetail.queryByText('Please select a size')).not.toBeInTheDocument()
            })
            test('should call addCartArticle', () => {
                expect(addCartArticle).toBeCalledWith({...cartArticle, size, quantity: 1})
            })
        })
    })
})

const component = (partialProps: Partial<IArticleDetailProps> = {}) => render(
    <ArticleDetail {...{article, addCartArticle: () => {}, ...partialProps}} />)