import React from "react";
import ICartArticle from "../../models/ICartArticle";
import {CardColumns} from "react-bootstrap";
import CartArticleCard from "./CartArticleCard";

interface IProps {
    cartArticles: ICartArticle[]
    removeCartArticle: (cartArticle: ICartArticle) => void
}

const CartArticlesViewer: React.FC<IProps> = ({cartArticles, removeCartArticle}) =>
    <CardColumns data-testid={'cartArticlesViewer'}>
        {cartArticles.map((cartArticle, index) => <div key={index}>
            <CartArticleCard {...{cartArticle, removeCartArticle}}/>
        </div>)}
    </CardColumns>

export default CartArticlesViewer
export type ICartArticlesViewerProps = IProps