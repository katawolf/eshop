import IArticleSummary from "../../models/IArticleSummary";
import React from "react";

interface IProps {
    article: IArticleSummary
}

const ArticleDetail: React.FC<IProps> = ({article}) => <>{article.name}</>

export default ArticleDetail
export type IArticleDetailProps = IProps