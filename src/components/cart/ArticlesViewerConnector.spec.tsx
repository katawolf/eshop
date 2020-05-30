import {render, RenderResult} from "@testing-library/react";
import React from "react";
import ArticlesViewerConnector from "./ArticlesViewerConnector";
import {Provider} from "react-redux";
import configStore from "../../store/configStore";

jest.mock('../articles/ArticlesViewer', () => () => <div data-testid={'articlesViewer'}>component</div>)

describe('cart articles viewer spec', () => {
    let articlesViewerConnector: RenderResult

    describe('on init', () => {
        beforeEach(() => {
            articlesViewerConnector = component()
        })
        test('should display component', () => {
            expect(articlesViewerConnector.queryByTestId('articlesViewerConnector')).not.toBeNull()
        })
        test('should display article viewer component', () => {
            expect(articlesViewerConnector.queryByTestId('articlesViewer')).not.toBeNull()
        })
    })
})

const component = () => render(
    <Provider store={configStore}>
        <ArticlesViewerConnector/>
    </Provider>
)