import React from "react";
import {CardDeck} from "react-bootstrap";
import IArticleSummary from "../../models/IArticleSummary";
import ArticleCardConnector from "./ArticleCardConnector";

interface IProps {
    articles: IArticleSummary[]
}

const ArticlesViewer: React.FC<IProps> = ({articles}) => {

    return <CardDeck>
        {articles.map(it => <div key={it.name}>
            <ArticleCardConnector article={it}/>
        </div>)}
    </CardDeck>
}

export default ArticlesViewer
