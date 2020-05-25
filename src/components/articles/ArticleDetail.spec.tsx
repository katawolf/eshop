import { render, RenderResult } from "@testing-library/react"
import {anArticle} from "../../data.mock";
import React from "react";
import ArticleDetail, {IArticleDetailProps} from "./ArticleDetail";

const article = anArticle({name: 'name'})

describe('Article detail spec', () => {
    let articleDetail: RenderResult
    describe('on init', () => {
        beforeEach(() => {
            articleDetail = component({article})
        })
        test('should display main image', () => {
            expect(articleDetail.queryByText('name')).not.toBeNull()
        })
        test('should display name', () => {
            expect(articleDetail.queryByText('name')).not.toBeNull()
        })
    })
})

const component = (partialProps: Partial<IArticleDetailProps> = {}) => render(<ArticleDetail {...{article, ...partialProps}} />)