import {render, RenderResult, wait} from "@testing-library/react";
import React from "react";
import ArticlesViewer from "./ArticlesViewer";
import IArticle from "../../models/IArticle";
import {anArticle} from "../../data.mock";

jest.mock('./ArticleCardConnector', () => () => <div data-testid={'articleCardConnector'}>ArticleCardConnector</div>)

const articles: IArticle[] = [
    anArticle({name: 'IPhone'}),
    anArticle({name: 'Honor phone'})
];

describe('ArticlesViewer spec', () => {

    describe('On init', () => {

        let articlesComponent: RenderResult

        beforeAll(async () => {
            articlesComponent = component()
        })
        test('Should display article cards connector', () => {
            wait(() => {
                expect(articlesComponent.queryAllByTestId('articleCardConnector')).toHaveLength(2)
            })
        })
    })

})

const component = () => render(<ArticlesViewer articles={articles}/>)
