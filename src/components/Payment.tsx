import React from "react";
import Menu from "./Menu";
import CartPaymentConnector from "../connectors/payment/CartPaymentConnector";
import BankCardForm from "./payment/BankCardForm";
import CartSummaryConnector from "../connectors/cart/CartSummaryConnector";
import UserForm from "./user/UserForm";

const Payment: React.FC = () => {
    const updateBankCard = () => {
    }
    const updateUser = () => {
    }

    return <div data-testid={'payment'}>
        <Menu/>
        <CartSummaryConnector/>
        <UserForm updateUser={updateUser}/>
        <BankCardForm updateBankCard={updateBankCard}/>
        <CartPaymentConnector/>
    </div>
}

export default Payment