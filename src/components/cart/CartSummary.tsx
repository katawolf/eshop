import React from "react";
import ICartArticle from "../../models/ICartArticle";

interface IProps {
    cartArticles: ICartArticle[]
}

const CartSummary: React.FC<IProps> = ({cartArticles}) =>
    <div data-testid={'cartSummary'}>
        <div>{`Total amount : ${getTotalAmount(cartArticles)} €`}</div>
    </div>

const getTotalAmount = (cartArticles: ICartArticle[]) => cartArticles
    .reduce((acc: number, {price, quantity}: ICartArticle) => acc + price.value * quantity, 0)

export default CartSummary
export type ICartSummaryProps = IProps
