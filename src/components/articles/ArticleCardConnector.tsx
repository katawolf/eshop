import {ICardState} from "../../store/card/reducer";
import {connect, ConnectedProps} from "react-redux";
import {addArticleToCard, removeArticleToCard} from "../../store/card/action";
import IArticleSummary from "../../models/IArticleSummary";
import React from "react";
import ArticleCard from "./ArticleCard";

const mapState = ({articles}: ICardState) => ({articles})

const mapDispatch = {
    addArticleToCard,
    removeArticleToCard
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

interface IProps {
    article: IArticleSummary,
}

const ArticleCardConnector: React.FC<IProps & PropsFromRedux> = ({article, articles, addArticleToCard, removeArticleToCard}) =>
    <ArticleCard article={article}
                 cartArticles={articles}
                 addToCart={article => addArticleToCard(article)}
                 removeToCart={article => removeArticleToCard(article)}/>

export default connector(ArticleCardConnector)
