import {addCartArticle, cleanCartError} from "../../store/cart/action";
import {connect, ConnectedProps} from "react-redux";
import React from "react";
import IArticle from "../../models/IArticle";
import ArticleDetail from "../../components/article/ArticleDetail";
import {ICartState} from "../../store/cart/reducer";

const mapState = ({error}: ICartState) => ({cartError: error})

const mapDispatch = {
    addCartArticle,
    cleanCartError
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
