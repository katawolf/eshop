import React from "react";
import ICartArticle from "../../models/ICartArticle";
import {Button, CardColumns} from "react-bootstrap";
import CartArticleCard from "./CartArticleCard";
import {useHistory} from "react-router-dom";

interface IProps {
    cartArticles: ICartArticle[]
    updateCartArticle: (cartArticle: ICartArticle) => void
    removeCartArticle: (cartArticle: ICartArticle) => void
}

const CartArticlesViewer: React.FC<IProps> = ({cartArticles, updateCartArticle, removeCartArticle}) => {
    const history = useHistory()
    return <div data-testid={'cartArticlesViewer'}>
        <CardColumns>
            {cartArticles.map((cartArticle, index) => <div key={index}>
                <CartArticleCard {...{cartArticle, updateCartArticle, removeCartArticle}}/>
            </div>)}
        </CardColumns>
        <Button onClick={() => history.push('/payment')}>{'Pay cart'}</Button>
    </div>
}

export default CartArticlesViewer
export type ICartArticlesViewerProps = IProps