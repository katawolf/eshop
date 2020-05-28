import React, {useEffect, useState} from "react";
import IArticle from "../models/IArticle";
import {getArticle} from "../services/article.service";
import ArticleDetailConnector from "./articles/ArticleDetailConnector";

const Article: React.FC = () => {
    const [article, setArticle] = useState(undefined as IArticle | undefined)

    useEffect(() => {
        getArticle().then(setArticle)
    }, [])

    return <>{article && <ArticleDetailConnector article={article}/>}</>
}

export default Article