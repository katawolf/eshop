import {addCartArticle, cleanAddCartArticleError} from "../../store/cart/action";
import {connect, ConnectedProps} from "react-redux";
import React from "react";
import IArticle from "../../models/IArticle";
import ArticleDetail from "./ArticleDetail";
import {ICartState} from "../../store/cart/reducer";

const mapState = ({addCartArticleError}: ICartState) => ({addCartArticleError: addCartArticleError})

const mapDispatch = {
    addCartArticle,
    cleanAddCartArticleError
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

interface IProps {
    article: IArticle,
}

const ArticleDetailConnector: React.FC<IProps & PropsFromRedux> = (props) =>
    <div data-testid={'articleDetailConnector'}>
        <ArticleDetail {...props}/>
    </div>

export default connector(ArticleDetailConnector)
