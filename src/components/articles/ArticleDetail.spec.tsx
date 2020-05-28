import {render, RenderResult, fireEvent} from "@testing-library/react"
import {anArticle, anArticleSummary} from "../../data.mock";
import React from "react";
import ArticleDetail, {IArticleDetailProps} from "./ArticleDetail";

const article = anArticle(
    {
        name: 'name',
        price: {value: 125, currency: 'EUR'},
        imgSrc: '/src/img',
        description: 'a description',
        availableSizes: ['XS', "S", "M"]
    })

describe('Article detail spec', () => {
    let articleDetail: RenderResult
    describe('on init', () => {
        beforeEach(() => {
            articleDetail = component({article})
        })
        test('should display main image', () => {
            expect(
                articleDetail.getByTestId('img').getAttribute('src')
            ).toEqual('/src/img')
        })
        test('should display price', () => {
            expect(articleDetail.queryByText('125 €')).not.toBeNull()
        })
        test('should display name', () => {
            expect(articleDetail.queryByText('name')).not.toBeNull()
        })
        test('should display description', () => {
            expect(articleDetail.queryByText('a description')).not.toBeNull()
        })
        test('should display available sizes', () => {
            expect(articleDetail.queryByText('XS, S, M')).not.toBeNull()
        })
        test('should display "Add on cart" button', () => {
            expect(articleDetail.queryByText('Add on cart')).not.toBeNull()
        })
    })

    describe('Should click on "Add to cart" button', () => {
        const addOnCart = jest.fn()

        beforeEach(() => {
            articleDetail = component({article, addOnCart})
            fireEvent.click(articleDetail.getByText('Add on cart'))
        })
        test('should call addOnCart prop', () => {
            expect(addOnCart).toBeCalledWith(article)
        })
    })
})

const component = (partialProps: Partial<IArticleDetailProps> = {}) => render(
    <ArticleDetail {...{article, addOnCart: () => {}, ...partialProps}} />)