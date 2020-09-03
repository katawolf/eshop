import React from "react";
import ICartArticle from "../../domain/models/ICartArticle";

interface IProps {
    cartArticles: ICartArticle[]
}

const CartSummary: React.FC<IProps> = ({cartArticles}) =>
    <div data-testid={'cart-summary'}>
        <div>{`Total amount : ${getTotalAmount(cartArticles)} €`}</div>
    </div>

const getTotalAmount = (cartArticles: ICartArticle[]) => cartArticles
    .reduce((acc: number, {price, quantity}: ICartArticle) => acc + price.value * quantity, 0)

export default CartSummary
export type ICartSummaryProps = IProps
