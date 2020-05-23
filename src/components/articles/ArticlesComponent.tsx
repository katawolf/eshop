import React, {useEffect, useState} from "react";
import {CardDeck} from "react-bootstrap";
import {getArticles} from "../../services/article.service";
import IArticle from "../../models/IArticle";
import ArticleSummaryComponent from "./ArticleSummaryComponent";

const testId = 'ArticlesComponent'

const ArticlesComponent: React.FC = () => {

    const [articles, setArticles] = useState([] as IArticle[])

    useEffect(() => {
        getArticles().then(setArticles);
    }, [])

    return <div data-testid={testId}>
        <CardDeck>
            {articles.map(it => <div key={it.name}>
                <ArticleSummaryComponent article={it} cartArticles={[]}/>
            </div>)}
        </CardDeck>
    </div>
}

export default ArticlesComponent
