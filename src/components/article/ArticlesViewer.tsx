import React from "react";
import {CardColumns} from "react-bootstrap";
import ArticleCard from "./ArticleCard";
import IArticle from "../../models/IArticle";

interface IProps {
    articles: IArticle[]
}

const ArticlesViewer: React.FC<IProps> = ({articles}) =>
    <CardColumns data-testid={'articlesViewer'}>
        {articles.map(it => <div key={it.id}>
            <ArticleCard article={it}/>
        </div>)}
    </CardColumns>

export default ArticlesViewer
