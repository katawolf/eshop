import React from "react";
import {ICartState} from "../../store/cart/reducer";
import {connect, ConnectedProps} from "react-redux";
import CartArticlesViewer from "./CartArticlesViewer";

const mapState = ({articles}: ICartState) => ({articles})

const connector = connect(mapState)

type PropsFromRedux = ConnectedProps<typeof connector>

const CartArticlesViewerConnector: React.FC<PropsFromRedux> = ({articles}) =>
    <div data-testid={'cartArticlesViewerConnector'}>
        <CartArticlesViewer cartArticles={articles}/>
    </div>

export default connector(CartArticlesViewerConnector)