import {render, RenderResult} from "@testing-library/react";
import React from "react";
import ArticlesViewer from "./ArticlesViewer";
import IArticleSummary from "../../models/IArticleSummary";
import {anArticle} from "../../data.mock";

jest.mock('./ArticleCard', () => () => <div data-testid={'articleCard'}>ArticleCard</div>)

const articles: IArticleSummary[] = [
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
            expect(articlesViewer.queryByTestId('articlesViewer')).toBeInTheDocument()
        })
        test('Should display article cards connector', () => {
            expect(articlesViewer.queryAllByTestId('articleCard')).toHaveLength(2)
        })
    })

})

const component = () => render(<ArticlesViewer articles={articles}/>)
