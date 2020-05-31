import React from "react";
import {ICartState} from "../../store/cart/reducer";
import {connect, ConnectedProps} from "react-redux";
import CartArticlesViewer from "./CartArticlesViewer";
import {removeCartArticle} from "../../store/cart/action";

const mapState = ({articles}: ICartState) => ({articles})

const mapDispatch = {
    removeCartArticle,
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

const CartArticlesViewerConnector: React.FC<PropsFromRedux> = ({articles, removeCartArticle}) =>
    <div data-testid={'cartArticlesViewerConnector'}>
        <CartArticlesViewer cartArticles={articles} deleteCartArticle={removeCartArticle}/>
    </div>

export default connector(CartArticlesViewerConnector)