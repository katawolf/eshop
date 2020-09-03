import React from "react";
import {ICartState} from "../../store/cart/reducer";
import {connect, ConnectedProps} from "react-redux";
import CartSummary from "../../components/cart/CartSummary";

const mapState = ({cartArticles}: ICartState) => ({cartArticles})

const connector = connect(mapState)

type IProps = ConnectedProps<typeof connector>

const CartSummaryContainer: React.FC<IProps> = (props: IProps) =>
    <div data-testid={'cart-summary-container'}>
        <CartSummary {...props}/>
    </div>

export default connector(CartSummaryContainer)
