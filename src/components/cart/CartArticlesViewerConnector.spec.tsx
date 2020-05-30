import {render, RenderResult} from "@testing-library/react";
import React from "react";
import ArticlesViewerConnector from "./CartArticlesViewerConnector";
import {Provider} from "react-redux";
import configStore from "../../store/configStore";

jest.mock('./CartArticlesViewer', () => () => <div data-testid={'cartArticlesViewer'}>CartArticleViewer</div>)

describe('cart articles viewer connector spec', () => {
    let articlesViewerConnector: RenderResult

    describe('on init', () => {
        beforeEach(() => {
            articlesViewerConnector = component()
        })
        test('should display component', () => {
            expect(articlesViewerConnector.queryByTestId('cartArticlesViewerConnector')).toBeInTheDocument()
        })
        test('should display cart articles viewer component', () => {
            expect(articlesViewerConnector.queryByTestId('cartArticlesViewer')).toBeInTheDocument()
        })
    })
})

const component = () => render(
    <Provider store={configStore}>
        <ArticlesViewerConnector/>
    </Provider>
)