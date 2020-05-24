import {render, RenderResult, wait} from "@testing-library/react";
import React from "react";
import IArticle from "../models/IArticle";
import {anArticle} from "../data.mock";
import * as articleService from "../services/article.service";
import {act} from "react-dom/test-utils";
import Home from "./Home";

jest.mock('./articles/ArticlesViewer', () => () => <div data-testid={'articlesViewer'}>ArticlesViewer</div>)

const articles: IArticle[] = [
    anArticle({name: 'IPhone'}),
    anArticle({name: 'Honor phone'})
];

describe('Home spec', () => {

    const mockGetArticles = jest.spyOn(articleService, 'getArticles')
    let homeComponent: RenderResult

    beforeEach(async () => {
        mockGetArticles.mockReturnValue(Promise.resolve(articles))
        await act(async () => {
            homeComponent = component()
        })
    })
    afterEach(() => {
        mockGetArticles.mockClear()
    })
    test('Should load articles', () => {
        wait(() => {
            expect(mockGetArticles).toBeCalledTimes(1)
        })
    })
    test('Should display articles viewer', () => {
        expect(homeComponent.queryByTestId('articlesViewer')).not.toBeNull()
    })
})

const component = () => render(<Home/>)