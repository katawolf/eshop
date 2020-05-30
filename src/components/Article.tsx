import React, {useEffect, useState} from "react";
import IArticle from "../models/IArticle";
import {getArticle} from "../services/article.service";
import ArticleDetailConnector from "./articles/ArticleDetailConnector";
import {useParams} from "react-router-dom";
import Menu from "./Menu";

const Article: React.FC = () => {
    const [article, setArticle] = useState(undefined as IArticle | undefined)
    const {id} = useParams()

    useEffect(() => {
        getArticle(id).then(setArticle)
    }, [id])

    return <div data-testid={'articlePage'}>
        <Menu/>
        {article && <ArticleDetailConnector article={article}/>}
    </div>
}

export default Article