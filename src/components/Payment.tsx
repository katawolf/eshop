import React from "react";
import Menu from "./Menu";
import CartPaymentConnector from "../connectors/payment/CartPaymentConnector";
import BankCardForm from "./payment/BankCardForm";
import CartSummaryConnector from "../connectors/cart/CartSummaryConnector";

const Payment: React.FC = () => {
    const updateBankCard = () => {
    }

    return <div data-testid={'payment'}>
        <Menu/>
        <CartSummaryConnector />
        <BankCardForm updateBankCard={updateBankCard} />
        <CartPaymentConnector/>
    </div>
}

export default Payment