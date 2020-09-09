import React from "react";
import Menu from "../components/Menu";
import CartSummaryContainer from "../containers/cart/CartSummaryContainer";
import OrderFormContainer from "../containers/order/OrderFormContainer";
import ErrorContainer from "../containers/ErrorContainer";

const Order: React.FC = () => {
    return <div data-testid={'order'}>
        <Menu/>
        <ErrorContainer/>
        <CartSummaryContainer/>
        <OrderFormContainer/>
    </div>
}

export default Order