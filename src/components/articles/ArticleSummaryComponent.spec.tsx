import React from "react";
import {render, RenderResult} from "@testing-library/react";
import ArticleSummaryComponent, {IArticleSummaryComponentProps} from "./ArticleSummaryComponent";
import IArticle from "../../models/IArticle";

const article: IArticle = {
    name: 'IPhone',
    imgSrc: '/src/image/iphone.jpg',
    description: 'a smartphone'
}
describe('ArticleCardComponent', () => {

    describe('On init', () => {

        let articleCardComponent: RenderResult

        beforeEach(() => {
            articleCardComponent = component({article})
        })
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
    })
})

const component = (partialProps: Partial<IArticleSummaryComponentProps> = {}) => render(
    <ArticleSummaryComponent {...{article, ...partialProps}}/>)
