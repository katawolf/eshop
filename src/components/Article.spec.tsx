import { RenderResult, render } from "@testing-library/react"
import * as articleService from "../services/article.service";
import React from "react";
import Article from "./Article";
import {act} from "react-dom/test-utils";

jest.mock('./articles/ArticleDetailConnector', () => () => <div data-testid={'articleDetailConnector'}>ArticleDetailConnector</div>)

describe('Article page', () => {
    const mockGetArticle = jest.spyOn(articleService, 'getArticle')
    let articlePage: RenderResult

    describe('on init', () => {
        beforeEach(async () => {
            await act(async () => {
                articlePage = component()
            })
        })
        test('should load article', () => {
            expect(mockGetArticle).toBeCalledTimes(1)
        })
        test('should display article detail component', () => {
            expect(articlePage.queryByTestId('articleDetailConnector')).not.toBeNull()
        })
    })
})

const component = () => render(<Article/>)