import ArticlesComponent from "./articles/ArticlesComponent";
import {render, RenderResult} from "@testing-library/react";
import React from "react";

jest.mock('./articles/ArticlesComponent', () => () => <div data-testid={'articles-component'}>ArticlesComponent</div>)

describe('Home component', () => {

    let homeComponent: RenderResult

    beforeEach(() => {
        homeComponent = component()
    })
    test('Should display articles component', () => {
        expect(homeComponent.queryByTestId('articles-component')).not.toBeNull()
    })
})

const component = () => render(<ArticlesComponent/>)