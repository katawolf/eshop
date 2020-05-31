import React from "react";
import {ICartState} from "../../store/cart/reducer";
import {connect, ConnectedProps} from "react-redux";
import CartArticlesViewer from "./CartArticlesViewer";
import {removeCartArticle, updateCartArticle} from "../../store/cart/action";

const mapState = ({cartArticles}: ICartState) => ({cartArticles})

const mapDispatch = {
    updateCartArticle,
    removeCartArticle,
}

const connector = connect(mapState, mapDispatch)

type PropsFromRedux = ConnectedProps<typeof connector>

const CartArticlesViewerConnector: React.FC<PropsFromRedux> = (props) =>
    <div data-testid={'cartArticlesViewerConnector'}>
        <CartArticlesViewer {...props}/>
    </div>

export default connector(CartArticlesViewerConnector)