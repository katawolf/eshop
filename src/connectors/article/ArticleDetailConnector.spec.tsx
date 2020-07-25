import {render, RenderResult} from "@testing-library/react"
import {Provider} from "react-redux";
import configStore from "../../store/configStore";
import ArticleDetailConnector from "./ArticleDetailConnector";
import React from "react";
import {anArticle} from "../../data.mock";

jest.mock('../../components/article/ArticleDetail', () => () => <div data-testid={'articleDetail'}>ArticleDetail</div>)

const article = anArticle()

describe('article detail connector spec', () => {
    let articleDetailConnector: RenderResult
    describe('on init', () => {
        beforeEach(() => {
            articleDetailConnector = component()
        })
        test('should display component', () => {
            expect(articleDetailConnector.queryByTestId('articleDetailConnector')).toBeInTheDocument()
        })
        test('should display article detail component', () => {
            expect(articleDetailConnector.queryByTestId('articleDetail')).toBeInTheDocument()
        })
    })
})

const component = () => render(<Provider store={configStore}><ArticleDetailConnector article={article}/></Provider>)