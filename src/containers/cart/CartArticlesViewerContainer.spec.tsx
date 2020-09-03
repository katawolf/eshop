import {render, RenderResult} from "@testing-library/react";
import React from "react";
import ArticlesViewerConnector from "./CartArticlesViewerContainer";
import {Provider} from "react-redux";
import configStore from "../../store/configStore";

jest.mock('../../components/cart/CartArticlesViewer', () => () => <div data-testid={'cart-articles-viewer'}/>)

describe('cart articles viewer container spec', () => {
    let articlesViewerContainer: RenderResult

    describe('on init', () => {
        beforeEach(() => {
            articlesViewerContainer = component()
        })
        test('should display container', () => {
            expect(articlesViewerContainer.queryByTestId('cart-articles-viewer-container')).toBeInTheDocument()
        })
        test('should display cart articles viewer component', () => {
            expect(articlesViewerContainer.queryByTestId('cart-articles-viewer')).toBeInTheDocument()
        })
    })
})

const component = () => render(
    <Provider store={configStore}>
        <ArticlesViewerConnector/>
    </Provider>
)