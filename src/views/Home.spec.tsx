import {render, RenderResult, wait} from "@testing-library/react";
import React from "react";
import {anArticle} from "../data.mock";
import * as articleService from "../domain/services/article.service";
import {act} from "react-dom/test-utils";
import Home from "./Home";
import IArticle from "../domain/models/IArticle";

jest.mock('../components/article/ArticlesViewer', () => () => <div data-testid={'articles-viewer'}/>)
jest.mock('../components/Menu', () => () => <div data-testid={'menu'}/>)

const articles: IArticle[] = [
    anArticle({id: '1', name: 'IPhone'}),
    anArticle({id: '2', name: 'Honor phone'})
];

describe('Home spec', () => {
    let homeComponent: RenderResult

    describe('on init', () => {
        const mockGetArticles = jest.spyOn(articleService, 'getArticles')
        beforeEach(async () => {
            mockGetArticles.mockReturnValue(Promise.resolve(articles))
            await act(async () => {
                homeComponent = component()
            })
        })
        afterEach(() => {
            mockGetArticles.mockClear()
        })
        test('should display component', () => {
            expect(homeComponent.queryByTestId('home')).toBeInTheDocument()
        })
        test('should display menu component', () => {
            expect(homeComponent.queryByTestId('menu')).toBeInTheDocument()
        })
        test('Should load articles', async () => {
            await wait(async () => {
                expect(mockGetArticles).toBeCalledTimes(1)
            })
        })
        test('Should display articles viewer component', () => {
            expect(homeComponent.queryByTestId('articles-viewer')).toBeInTheDocument()
        })
    })
})

const component = () => render(<Home/>)