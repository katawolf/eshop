import ArticlesViewer from "./articles/ArticlesViewer";
import React, {useEffect, useState} from "react";
import IArticle from "../models/IArticle";
import {getArticles} from "../services/article.service";

const Home: React.FC = () => {

    const [articles, setArticles] = useState([] as IArticle[])

    useEffect(() => {
        getArticles().then(setArticles);
    }, [])

    return <>
        <ArticlesViewer articles={articles}/>
    </>
}

export default Home