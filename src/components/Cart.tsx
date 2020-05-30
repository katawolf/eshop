import React from "react";
import Menu from "./Menu";
import ArticlesViewerConnector from "./cart/ArticlesViewerConnector";

const Cart: React.FC = () =>
    <div data-testid={'cart'}>
        <Menu/>
        <ArticlesViewerConnector/>
    </div>

export default Cart