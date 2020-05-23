import ArticlesViewer from "./articles/ArticlesViewer";
import {render, RenderResult} from "@testing-library/react";
import React from "react";

jest.mock('./articles/ArticlesViewer', () => () => <div data-testid={'articlesViewer'}>ArticlesViewer</div>)

describe('Home spec', () => {

    let homeComponent: RenderResult

    beforeEach(() => {
        homeComponent = component()
    })
    test('Should display articles viewer', () => {
        expect(homeComponent.queryByTestId('articlesViewer')).not.toBeNull()
    })
})

const component = () => render(<ArticlesViewer/>)