import {render, RenderResult} from "@testing-library/react"
import * as articleService from "../domain/services/article.service";
import React from "react";
import Article from "./Article";
import {act} from "react-dom/test-utils";
import {MemoryRouter, Route} from "react-router-dom";
import {anArticle} from "../data.mock";

jest.mock('../containers/article/ArticleDetailContainer', () => () => <div data-testid={'article-detail-container'}/>)
jest.mock('../components/Menu', () => () => <div data-testid={'menu'}/>)

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
        test('should display component', () => {
            expect(articlePage.queryByTestId('article')).toBeInTheDocument()
        })
        test('should display menu component', () => {
            expect(articlePage.queryByTestId('menu')).toBeInTheDocument()
        })
        test('should load article with id 2', () => {
            expect(mockGetArticle).toBeCalledWith('2')
        })
        test('should display article detail container', () => {
            expect(articlePage.queryByTestId('article-detail-container')).toBeInTheDocument()
        })
    })
})

const component = () => render(
    <MemoryRouter initialEntries={['/article/2']}>
        <Route path="/article/:id" component={Article}/>
    </MemoryRouter>)
