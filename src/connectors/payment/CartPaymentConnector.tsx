import React from "react";
import {ICartState} from "../../store/cart/reducer";
import {connect, ConnectedProps} from "react-redux";
import CartPayment from "../../components/payment/CartPayment";

const mapState = ({cartArticles}: ICartState) => ({cartArticles})

const connector = connect(mapState)

type IProps = ConnectedProps<typeof connector>

const CartPaymentConnector: React.FC<IProps> = (props: IProps) =>
    <div data-testid={'cartPaymentConnector'}>
        <CartPayment {...props}/>
    </div>

export default connector(CartPaymentConnector)
