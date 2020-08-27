import React from "react";
import Menu from "./Menu";
import CartSummaryConnector from "../connectors/cart/CartSummaryConnector";
import CommandFormConnector from "../connectors/command/CommandFormConnector";

const Command: React.FC = () => {
    return <div data-testid={'command'}>
        <Menu/>
        <CartSummaryConnector/>
        <CommandFormConnector/>
    </div>
}

export default Command