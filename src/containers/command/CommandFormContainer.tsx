import React from "react";
import {connect, ConnectedProps} from "react-redux";
import {createCommand} from "../../store/cart/action";
import CommandForm from "../../components/command/CommandForm";

const mapDispatch = {
    createCommand,
}

const connector = connect(undefined, mapDispatch)

type IProps = ConnectedProps<typeof connector>

const CommandFormContainer: React.FC<IProps> = (props: IProps) =>
    <div data-testid={'commandFormConnector'}>
        <CommandForm {...props}/>
    </div>

export default connector(CommandFormContainer)
