import React from "react";
import Menu from "../components/Menu";
import ArticlesViewerContainer from "../containers/cart/CartArticlesViewerContainer";

const Cart: React.FC = () =>
    <div data-testid={'cart'}>
        <Menu/>
        <ArticlesViewerContainer/>
    </div>

export default Cart