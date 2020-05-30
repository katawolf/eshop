import React from "react";
import {Card} from "react-bootstrap";
import {formatPrice} from "../../services/format.service";
import ICartArticle from "../../models/ICartArticle";
import { useHistory } from "react-router-dom";

interface IProps {
    cartArticle: ICartArticle
}

const CartArticleCard: React.FC<IProps> = ({cartArticle: {id, imgSrc, name, price, size}}) => {
    const history = useHistory()

    return <Card data-testid={'cartArticleCard'} onClick={() => history.push(`/article/${id}`)}>
        <Card.Img data-testid='img' variant="top" src={imgSrc}/>
        <Card.Body>
            <Card.Title>{name} (shoes)</Card.Title>
            <Card.Text>Price : {formatPrice(price)}</Card.Text>
            <Card.Text>Size : {size}</Card.Text>
        </Card.Body>
    </Card>
}

export default CartArticleCard
export type ICartArticleCardProps = IProps