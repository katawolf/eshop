import React from "react";
import ICartArticle from "../../models/ICartArticle";
import {CardColumns} from "react-bootstrap";
import CartArticleCard from "./CartArticleCard";

interface IProps {
    cartArticles: ICartArticle[]
    updateCartArticle: (cartArticle: ICartArticle) => void
    removeCartArticle: (cartArticle: ICartArticle) => void
}

const CartArticlesViewer: React.FC<IProps> = ({cartArticles, updateCartArticle, removeCartArticle}) =>
    <CardColumns data-testid={'cartArticlesViewer'}>
        {cartArticles.map((cartArticle, index) => <div key={index}>
            <CartArticleCard {...{cartArticle, updateCartArticle, removeCartArticle}}/>
        </div>)}
    </CardColumns>

export default CartArticlesViewer
export type ICartArticlesViewerProps = IProps