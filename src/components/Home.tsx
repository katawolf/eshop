import ArticlesViewer from "./articles/ArticlesViewer";
import React, {useEffect, useState} from "react";
import IArticleSummary from "../models/IArticleSummary";
import {getArticleSummaries} from "../services/article.service";
import Menu from "./Menu";

const Home: React.FC = () => {

    const [articles, setArticles] = useState([] as IArticleSummary[])

    useEffect(() => {
        getArticleSummaries().then(setArticles);
    }, [])

    return <>
        <Menu/>
        <ArticlesViewer articles={articles}/>
    </>
}

export default Home