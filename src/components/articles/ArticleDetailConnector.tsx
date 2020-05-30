import {addCartArticle} from "../../store/cart/action";
import {connect, ConnectedProps} from "react-redux";
import React from "react";
import IArticle from "../../models/IArticle";
import ArticleDetail from "./ArticleDetail";

const mapDispatch = {
    addCartArticle,
}

const connector = connect(undefined, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

interface IProps {
    article: IArticle,
}

const ArticleDetailConnector: React.FC<IProps & PropsFromRedux> = ({article, addCartArticle}) =>
    <div data-testid={'articleDetailConnector'}>
        <ArticleDetail article={article} addCartArticle={addCartArticle}/>
    </div>

export default connector(ArticleDetailConnector)
