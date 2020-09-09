import React from "react";
import Menu from "../components/Menu";
import CartSummaryContainer from "../containers/cart/CartSummaryContainer";
import CommandFormContainer from "../containers/command/CommandFormContainer";
import ErrorContainer from "../containers/ErrorContainer";

const Command: React.FC = () => {
    return <div data-testid={'command'}>
        <Menu/>
        <ErrorContainer/>
        <CartSummaryContainer/>
        <CommandFormContainer/>
    </div>
}

export default Command