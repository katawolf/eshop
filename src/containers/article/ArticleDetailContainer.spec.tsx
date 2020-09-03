import {render, RenderResult} from "@testing-library/react"
import {Provider} from "react-redux";
import configStore from "../../store/configStore";
import React from "react";
import {anArticle} from "../../data.mock";
import ArticleDetailContainer from "./ArticleDetailContainer";

jest.mock('../../components/article/ArticleDetail', () => () => <div data-testid={'article-detail'}/>)

const article = anArticle()

describe('article detail connector spec', () => {
    let articleDetailConnector: RenderResult
    describe('on init', () => {
        beforeEach(() => {
            articleDetailConnector = component()
        })
        test('should display component', () => {
            expect(articleDetailConnector.queryByTestId('article-detail-container')).toBeInTheDocument()
        })
        test('should display article detail component', () => {
            expect(articleDetailConnector.queryByTestId('article-detail')).toBeInTheDocument()
        })
    })
})

const component = () => render(<Provider store={configStore}><ArticleDetailContainer article={article}/></Provider>)