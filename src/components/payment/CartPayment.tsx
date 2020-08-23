import React from "react";
import ICartArticle from "../../models/ICartArticle";
import {Button} from "react-bootstrap";

interface IProps {
    cartArticles: ICartArticle[]
}

const CartPayment: React.FC<IProps> = ({cartArticles}) =>
    <div data-testid={'cartPayment'}>
        <div>{`Total amount : ${getTotalAmount(cartArticles)} €`}</div>
        <Button>Pay</Button>
    </div>

const getTotalAmount = (cartArticles: ICartArticle[]) => cartArticles
    .reduce((acc: number, {price, quantity}: ICartArticle) => acc + price.value * quantity, 0)

export default CartPayment
export type ICartPaymentProps = IProps

