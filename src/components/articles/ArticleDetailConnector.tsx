import {addArticleToCard} from "../../store/card/action";
import {connect, ConnectedProps} from "react-redux";
import React from "react";
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
    <ArticleDetail article={article} addOnCart={addArticleToCard}/>

export default connector(ArticleDetailConnector)
