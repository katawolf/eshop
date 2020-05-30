import React from "react";
import ICartArticle from "../../models/ICartArticle";
import {CardColumns} from "react-bootstrap";
import CartArticleCard from "./CartArticleCard";

interface IProps {
    cartArticles: ICartArticle[]
}

const CartArticlesViewer: React.FC<IProps> = ({cartArticles}) =>
    <CardColumns data-testid={'cartArticlesViewer'}>
        {cartArticles.map((cartArticle, index) => <div key={index}>
            <CartArticleCard {...{cartArticle}}/>
        </div>)}
    </CardColumns>

export default CartArticlesViewer
export type ICartArticlesViewerProps = IProps