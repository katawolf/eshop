import ArticlesViewer from "./article/ArticlesViewer";
import React, {useEffect, useState} from "react";
import {getArticles} from "../services/article.service";
import Menu from "./Menu";
import IArticle from "../models/IArticle";

const Home: React.FC = () => {

    const [articles, setArticles] = useState([] as IArticle[])

    useEffect(() => {
        getArticles().then(setArticles);
    }, [])

    return <div data-testid={'home'}>
        <Menu/>
        <ArticlesViewer articles={articles}/>
    </div>
}

export default Home