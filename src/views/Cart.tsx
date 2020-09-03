import React from "react";
import Menu from "../components/Menu";
import ArticlesViewerConnector from "../containers/cart/CartArticlesViewerContainer";

const Cart: React.FC = () =>
    <div data-testid={'cart'}>
        <Menu/>
        <ArticlesViewerConnector/>
    </div>

export default Cart