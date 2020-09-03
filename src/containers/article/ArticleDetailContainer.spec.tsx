import {render, RenderResult} from "@testing-library/react"
import {Provider} from "react-redux";
import configStore from "../../store/configStore";
import React from "react";
import {anArticle} from "../../data.mock";
import ArticleDetailContainer from "./ArticleDetailContainer";

jest.mock('../../components/article/ArticleDetail', () => () => <div data-testid={'article-detail'}/>)

const article = anArticle()

describe('article detail container spec', () => {
    let articleDetailContainer: RenderResult
    describe('on init', () => {
        beforeEach(() => {
            articleDetailContainer = component()
        })
        test('should display container', () => {
            expect(articleDetailContainer.queryByTestId('article-detail-container')).toBeInTheDocument()
        })
        test('should display article detail component', () => {
            expect(articleDetailContainer.queryByTestId('article-detail')).toBeInTheDocument()
        })
    })
})

const component = () => render(<Provider store={configStore}><ArticleDetailContainer article={article}/></Provider>)