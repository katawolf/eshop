import {render, RenderResult, wait} from "@testing-library/react";
import React from "react";
import {act} from "react-dom/test-utils";
import * as articleService from '../../services/article.service';
import {anArticle} from "../../data.mock";
import IArticle from "../../models/IArticle";
import ArticlesViewer from "./ArticlesViewer";

jest.mock('./ArticleCardConnector', () => () => <div data-testid={'articleCardConnector'}>ArticleCardConnector</div>)

const articles: IArticle[] = [
    anArticle({name: 'IPhone'}),
    anArticle({name: 'Honor phone'})
];

describe('ArticlesViewer spec', () => {

    const mockGetArticles = jest.spyOn(articleService, 'getArticles');

    describe('On init', () => {

        let articlesComponent: RenderResult

        beforeAll(async () => {
            mockGetArticles.mockReturnValue(Promise.resolve(articles))
            await act(async () => {
                articlesComponent = component()
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
        test('Should display article cards', () => {
            wait(() => {
                expect(articlesComponent.queryAllByTestId('articleCardConnector')).toHaveLength(2)
            })
        })
    })

})

const component = () => render(<ArticlesViewer/>)
