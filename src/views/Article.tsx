import React, {useEffect, useState} from "react";
import IArticle from "../domain/models/IArticle";
import {getArticle} from "../domain/services/article.service";
import ArticleDetailContainer from "../containers/article/ArticleDetailContainer";
import {useParams} from "react-router-dom";
import Menu from "../components/Menu";

const Article: React.FC = () => {
    const [article, setArticle] = useState(undefined as IArticle | undefined)
    const {id} = useParams()

    useEffect(() => {
        getArticle(id).then(setArticle)
    }, [id])

    return <div data-testid={'article'}>
        <Menu/>
        {article && <ArticleDetailContainer article={article}/>}
    </div>
}

export default Article