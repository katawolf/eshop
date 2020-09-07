import React from "react";
import Menu from "../components/Menu";
import CartSummaryContainer from "../containers/cart/CartSummaryContainer";
import CommandFormContainer from "../containers/command/CommandFormContainer";
import ErrorConnector from "../containers/ErrorContainer";
import createCommand from "../domain/services/command.service";

const Command: React.FC = () => {
    return <div data-testid={'command'}>
        <Menu/>
        <ErrorConnector/>
        <CartSummaryContainer/>
        <CommandFormContainer createCommand={createCommand}/>
    </div>
}

export default Command