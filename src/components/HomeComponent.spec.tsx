import HomeComponent from "./HomeComponent";
import {render, RenderResult, wait} from "@testing-library/react";
import * as articleService from '../services/article.service';
import React from "react";
import IArticle from "../models/IArticle";
import {act} from "react-dom/test-utils";
import {anArticle} from "../data.mock";

const articles: IArticle[] = [
    anArticle({name: 'IPhone'}),
    anArticle({name: 'Honor phone'})
];

describe('HomeComponent spec', () => {

    describe('On init', () => {

        const mockGetArticles = jest.spyOn(articleService, 'getArticles');

        let homeComponent: RenderResult

        beforeAll(async () => {
            mockGetArticles.mockReturnValue(Promise.resolve(articles))
            await act(async () => {
                homeComponent = component()
            })
        })

        afterEach(() => {
            mockGetArticles.mockClear()
        })

        test('Should render component', () => {
            expect(homeComponent.queryByTestId('HomeComponent')).toBeDefined()
        })

        test('Should load articles', () => {
            wait(() => {
                expect(mockGetArticles).toBeCalledTimes(1)
            })
        })

        test('Should display articles', () => {
            wait(() => {
                expect(homeComponent.queryByText('IPhone')).not.toBeNull()
                expect(homeComponent.getByText('Honor phone')).not.toBeNull()
            })
        })
    })
})

const component = () => render(<HomeComponent/>)