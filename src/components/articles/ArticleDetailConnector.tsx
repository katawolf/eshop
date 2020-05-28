import {ICardState} from "../../store/card/reducer";
import {addArticleToCard, removeArticleToCard} from "../../store/card/action";
import {connect, ConnectedProps} from "react-redux";
import IArticleSummary from "../../models/IArticleSummary";
import React from "react";
import ArticleCard from "./ArticleCard";
import IArticle from "../../models/IArticle";
import ArticleDetail from "./ArticleDetail";

const mapDispatch = {
    addArticleToCard,
}

const connector = connect(undefined, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

interface IProps {
    article: IArticle,
}

const ArticleDetailConnector: React.FC<IProps & PropsFromRedux> = ({article, addArticleToCard}) =>
    <ArticleDetail article={article} addOnCart={addArticleToCard} />

export default connector(ArticleDetailConnector)
