import React, {useState} from "react";
import {Button, Card, Form} from "react-bootstrap";
import {formatPrice} from "../../domain/services/format.service";
import ICartArticle from "../../domain/models/ICartArticle";
import {useHistory} from "react-router-dom";

interface IProps {
    cartArticle: ICartArticle
    updateCartArticle: (cartArticle: ICartArticle) => void
    removeCartArticle: (cartArticle: ICartArticle) => void
}

const CartArticleCard: React.FC<IProps> = ({cartArticle : cartArticleFromProps, updateCartArticle, removeCartArticle}) => {
    const history = useHistory()
    const [cartArticle, setCartArticle] = useState(cartArticleFromProps)
    const {id, imgSrc, name, price, quantity, maxQuantityByCart} = cartArticle

    const updateQuantity = (quantity: number) => {
        setCartArticle({...cartArticle, quantity})
    }

    return <Card data-testid={'cart-article-card'}>
        <Card.Img data-testid='img' variant="top" src={imgSrc}/>
        <Card.Body>
            <Card.Title>{name} (shoes)</Card.Title>
            <Card.Text>Price : {formatPrice(price)}</Card.Text>
            <Card.Text>
                Quantity :
                <Form.Control data-testid={'quantity-select'} value={quantity}
                              as={'select'}
                              onChange={event => updateQuantity(Number(event.target.value))}>
                    {getAvailableQuantities(maxQuantityByCart).map(it => <option data-testid={`quantity-option`} key={it}>{it}</option>)}
                </Form.Control>
            </Card.Text>
            <Button onClick={() => history.push(`/article/${id}`)}>Details</Button>
            <Button onClick={() => updateCartArticle(cartArticle)}>Update</Button>
            <Button onClick={() => removeCartArticle(cartArticle)}>Remove</Button>
        </Card.Body>
    </Card>
}

const getAvailableQuantities = (max: number) => {
    let quantities: number[] = []
    for (let i = 1; i < max + 1; i++) {
        quantities = [...quantities, i]
    }
    return quantities
}
export default CartArticleCard
export type ICartArticleCardProps = IProps