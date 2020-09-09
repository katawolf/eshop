import React from "react";
import {connect, ConnectedProps} from "react-redux";
import OrderForm from "../../components/order/OrderForm";
import {resetCart} from "../../store/cart/action";
import {ICartState} from "../../store/cart/reducer";
import createOrder from "../../domain/services/order.service";

const mapState = ({cartArticles}: ICartState) => ({cartArticles})

const mapDispatch = {
    resetCart,
}

const connector = connect(mapState, mapDispatch)

type IProps = ConnectedProps<typeof connector>

const OrderFormContainer: React.FC<IProps> = (props: IProps) =>
    <div data-testid={'order-form-container'}>
        <OrderForm {...{createOrder, ...props}}/>
    </div>

export default connector(OrderFormContainer)
