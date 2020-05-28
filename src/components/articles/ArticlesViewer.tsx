import React from "react";
import {CardColumns} from "react-bootstrap";
import IArticleSummary from "../../models/IArticleSummary";
import ArticleCard from "./ArticleCard";

interface IProps {
    articles: IArticleSummary[]
}

const ArticlesViewer: React.FC<IProps> = ({articles}) => {

    return <CardColumns>
        {articles.map(it => <div key={it.id}>
            <ArticleCard article={it}/>
        </div>)}
    </CardColumns>
}

export default ArticlesViewer
