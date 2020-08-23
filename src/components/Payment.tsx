import React from "react";
import Menu from "./Menu";
import CartPaymentConnector from "../connectors/payment/CartPaymentConnector";

const Payment: React.FC = () =>
    <div data-testid={'payment'}>
        <Menu/>
        <CartPaymentConnector/>
    </div>

export default Payment