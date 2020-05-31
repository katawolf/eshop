import React from "react";
import {Button, Card} from "react-bootstrap";
import {formatPrice} from "../../services/format.service";
import ICartArticle from "../../models/ICartArticle";
import {useHistory} from "react-router-dom";

interface IProps {
    cartArticle: ICartArticle
    deleteCartArticle: (cartArticle: ICartArticle) => void
}

const CartArticleCard: React.FC<IProps> = ({cartArticle, deleteCartArticle}) => {
    const {id, imgSrc, name, price, size, quantity} = cartArticle
    const history = useHistory()

    return <Card data-testid={'cartArticleCard'}>
        <Card.Img data-testid='img' variant="top" src={imgSrc}/>
        <Card.Body>
            <Card.Title>{name} (shoes)</Card.Title>
            <Card.Text>Price : {formatPrice(price)}</Card.Text>
            <Card.Text>Size : {size}</Card.Text>
            <Card.Text>Quantity : {quantity}</Card.Text>
            <Button onClick={() => history.push(`/article/${id}`)}>Details</Button>
            <Button onClick={() => deleteCartArticle(cartArticle)}>Delete</Button>
        </Card.Body>
    </Card>
}

export default CartArticleCard
export type ICartArticleCardProps = IProps