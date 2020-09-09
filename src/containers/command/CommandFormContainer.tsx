import React from "react";
import {connect, ConnectedProps} from "react-redux";
import CommandForm from "../../components/command/CommandForm";
import {resetCart} from "../../store/cart/action";
import {ICartState} from "../../store/cart/reducer";
import createCommand from "../../domain/services/command.service";

const mapState = ({cartArticles}: ICartState) => ({cartArticles})

const mapDispatch = {
    resetCart,
}

const connector = connect(mapState, mapDispatch)

type IProps = ConnectedProps<typeof connector>

const CommandFormContainer: React.FC<IProps> = (props: IProps) =>
    <div data-testid={'command-form-container'}>
        <CommandForm {...{createCommand: createCommand, ...props}}/>
    </div>

export default connector(CommandFormContainer)
