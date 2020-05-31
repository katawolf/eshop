import {render, RenderResult, wait} from "@testing-library/react";
import React from "react";
import {anArticle} from "../data.mock";
import * as articleService from "../services/article.service";
import {act} from "react-dom/test-utils";
import Home from "./Home";
import IArticle from "../models/IArticle";

jest.mock('./articles/ArticlesViewer', () => () => <div data-testid={'articlesViewer'}>ArticlesViewer</div>)
jest.mock('./Menu', () => () => <div data-testid={'menu'}>Menu</div>)

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
        test('should display menu', () => {
            expect(homeComponent.queryByTestId('menu')).toBeInTheDocument()
        })
        test('Should load articles', async () => {
            await wait(async () => {
                expect(mockGetArticles).toBeCalledTimes(1)
            })
        })
        test('Should display articles viewer', () => {
            expect(homeComponent.queryByTestId('articlesViewer')).toBeInTheDocument()
        })
    })
})

const component = () => render(<Home/>)