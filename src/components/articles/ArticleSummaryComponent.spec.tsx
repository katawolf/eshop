import React from "react";
import {render, RenderResult} from "@testing-library/react";
import ArticleSummaryComponent, {IArticleSummaryComponentProps} from "./ArticleSummaryComponent";
import IArticle from "../../models/IArticle";
import {anArticle} from "../../data.mock";

const article: IArticle = anArticle({
    name: 'IPhone',
    imgSrc: '/src/image/iphone.jpg',
    description: 'a smartphone'
})
describe('ArticleCardComponent', () => {

    describe('On init', () => {

        let articleCardComponent: RenderResult

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
})

const component = (partialProps: Partial<IArticleSummaryComponentProps> = {}) => render(
    <ArticleSummaryComponent {...{article, cartArticles: [], ...partialProps}}/>)
