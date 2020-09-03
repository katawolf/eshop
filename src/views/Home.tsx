import ArticlesViewer from "../components/article/ArticlesViewer";
import React, {useEffect, useState} from "react";
import {getArticles} from "../domain/services/article.service";
import Menu from "../components/Menu";
import IArticle from "../domain/models/IArticle";

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