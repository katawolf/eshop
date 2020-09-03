import React from "react";
import {ICartState} from "../../store/cart/reducer";
import {connect, ConnectedProps} from "react-redux";
import CartArticlesViewer from "../../components/cart/CartArticlesViewer";
import {removeCartArticle, updateCartArticle} from "../../store/cart/action";

const mapState = ({cartArticles}: ICartState) => ({cartArticles})

const mapDispatch = {
    updateCartArticle,
    removeCartArticle,
}

const connector = connect(mapState, mapDispatch)

type IProps = ConnectedProps<typeof connector>

const CartArticlesViewerContainer: React.FC<IProps> = (props: IProps) =>
    <div data-testid={'cartArticlesViewerConnector'}>
        <CartArticlesViewer {...props}/>
    </div>

export default connector(CartArticlesViewerContainer)