import {render, RenderResult} from "@testing-library/react";
import React from "react";
import ArticlesViewer from "./ArticlesViewer";
import {anArticle} from "../../data.mock";
import IArticle from "../../domain/models/IArticle";

jest.mock('./ArticleCard', () => () => <div data-testid={'article-card'}/>)

const articles: IArticle[] = [
    anArticle({id: '1', name: 'IPhone'}),
    anArticle({id: '2', name: 'Honor phone'})
];

describe('ArticlesViewer spec', () => {

    describe('On init', () => {
        let articlesViewer: RenderResult

        beforeEach(async () => {
            articlesViewer = component()
        })
        test('should display component', () => {
            expect(articlesViewer.queryByTestId('articles-viewer')).toBeInTheDocument()
        })
        test('Should display article cards connector', () => {
            expect(articlesViewer.queryAllByTestId('article-card')).toHaveLength(2)
        })
    })

})

const component = () => render(<ArticlesViewer articles={articles}/>)
