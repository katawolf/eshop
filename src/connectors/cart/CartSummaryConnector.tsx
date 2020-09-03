import React from "react";
import {ICartState} from "../../store/cart/reducer";
import {connect, ConnectedProps} from "react-redux";
import CartSummary from "../../components/cart/CartSummary";

const mapState = ({cartArticles}: ICartState) => ({cartArticles})

const connector = connect(mapState)

type IProps = ConnectedProps<typeof connector>

const CartSummaryConnector: React.FC<IProps> = (props: IProps) =>
    <div data-testid={'cartSummaryConnector'}>
        <CartSummary {...props}/>
    </div>

export default connector(CartSummaryConnector)
