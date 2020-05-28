import {render, RenderResult} from "@testing-library/react"
import * as articleService from "../services/article.service";
import React from "react";
import Article from "./Article";
import {act} from "react-dom/test-utils";
import {MemoryRouter, Route, Switch} from "react-router-dom";
import {anArticle} from "../data.mock";

jest.mock('./articles/ArticleDetailConnector', () => () => <div
    data-testid={'articleDetailConnector'}>ArticleDetailConnector</div>)

describe('Article page', () => {
    const mockGetArticle = jest.spyOn(articleService, 'getArticle')
    let articlePage: RenderResult

    describe('on init', () => {
        beforeEach(async () => {
            mockGetArticle.mockResolvedValue(anArticle({id: '2'}))
            await act(async () => {
                articlePage = component()
            })
        })
        afterEach(() => {
            mockGetArticle.mockClear()
        })
        test('should load article with id 2', () => {
            expect(mockGetArticle).toBeCalledWith('2')
        })
        test('should display article detail component', () => {
            expect(articlePage.queryByTestId('articleDetailConnector')).not.toBeNull()
        })
    })
})

const component = () => render(
    <MemoryRouter initialEntries={['/article/2']}>
        <Route path="/article/:id" component={Article}/>
    </MemoryRouter>)
