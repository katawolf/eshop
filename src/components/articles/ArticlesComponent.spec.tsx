import {fireEvent, render, RenderResult, wait} from "@testing-library/react";
import React from "react";
import {act} from "react-dom/test-utils";
import * as articleService from '../../services/article.service';
import {anArticle} from "../../data.mock";
import IArticle from "../../models/IArticle";
import ArticlesComponent from "./ArticlesComponent";

const articles: IArticle[] = [
    anArticle({name: 'IPhone'}),
    anArticle({name: 'Honor phone'})
];

describe('ArticlesComponent spec', () => {

    const mockGetArticles = jest.spyOn(articleService, 'getArticles');

    describe('On init', () => {


        let articlesComponent: RenderResult

        beforeAll(async () => {
            mockGetArticles.mockReturnValue(Promise.resolve(articles))
            await act(async () => {
                articlesComponent = component()
            })
        })

        afterEach(() => {
            mockGetArticles.mockClear()
        })

        test('Should render component', () => {
            expect(articlesComponent.queryByTestId('HomeComponent')).toBeDefined()
        })

        test('Should load articles', () => {
            wait(() => {
                expect(mockGetArticles).toBeCalledTimes(1)
            })
        })

        test('Should display articles', () => {
            wait(() => {
                expect(articlesComponent.queryByText('IPhone')).not.toBeNull()
                expect(articlesComponent.getByText('Honor phone')).not.toBeNull()
            })
        })

        test('Should display add to basket button for each article', () => {
            wait(() => {
                expect(articlesComponent.queryAllByTestId('addBasketButton')).toHaveLength(2)
                expect(articlesComponent.queryAllByText('Add to basket')).toHaveLength(2)
            })
        })
    })

    // describe('When add article in basket', () => {
    //
    //     let ArticlesComponent: RenderResult
    //
    //     beforeAll(async () => {
    //         mockGetArticles.mockReturnValue(Promise.resolve(articles))
    //         await act(async () => {
    //             ArticlesComponent = component()
    //             fireEvent.click(ArticlesComponent.getByTestId('addBasketButton'))
    //         })
    //     })
    //
    //     afterEach(() => {
    //         mockGetArticles.mockClear()
    //     })
    //
    //     test('Should ', () => {
    //
    //     })
    //
    // })
})

const component = () => render(<ArticlesComponent/>)
