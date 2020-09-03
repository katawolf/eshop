import React from "react";
import Menu from "../components/Menu";
import CartSummaryConnector from "../containers/cart/CartSummaryContainer";
import CommandFormConnector from "../containers/command/CommandFormContainer";
import ErrorConnector from "../containers/ErrorContainer";

const Command: React.FC = () => {
    return <div data-testid={'command'}>
        <Menu/>
        <ErrorConnector/>
        <CartSummaryConnector/>
        <CommandFormConnector/>
    </div>
}

export default Command