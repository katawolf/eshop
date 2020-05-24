import React, {useEffect, useState} from "react";
import {CardDeck} from "react-bootstrap";
import {getArticles} from "../../services/article.service";
import IArticle from "../../models/IArticle";
import ArticleCardConnector from "./ArticleCardConnector";

const ArticlesViewer: React.FC = () => {

    const [articles, setArticles] = useState([] as IArticle[])

    useEffect(() => {
        getArticles().then(setArticles);
    }, [])

    return <CardDeck>
        {articles.map(it => <div key={it.name}>
            <ArticleCardConnector article={it}/>
        </div>)}
    </CardDeck>
}

export default ArticlesViewer
