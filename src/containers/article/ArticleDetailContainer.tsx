import {addCartArticle, cleanCartError} from "../../store/cart/action";
import {connect, ConnectedProps} from "react-redux";
import React from "react";
import IArticle from "../../domain/models/IArticle";
import ArticleDetail from "../../components/article/ArticleDetail";
import {ICartState} from "../../store/cart/reducer";

const mapState = ({error}: ICartState) => ({cartError: error})

const mapDispatch = {
    addCartArticle,
    cleanCartError
}

const connector = connect(mapState, mapDispatch)

interface IProps extends ConnectedProps<typeof connector> {
    article: IArticle,
}

const ArticleDetailContainer: React.FC<IProps> = (props: IProps) =>
    <div data-testid={'article-detail-container'}>
        <ArticleDetail {...props}/>
    </div>

export default connector(ArticleDetailContainer)
