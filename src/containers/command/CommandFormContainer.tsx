import React from "react";
import {connect, ConnectedProps} from "react-redux";
import CommandForm from "../../components/command/CommandForm";
import {resetCart} from "../../store/cart/action";
import {ICartState} from "../../store/cart/reducer";
import ICartArticle from "../../domain/models/ICartArticle";
import IUser from "../../domain/models/IUser";
import IBankCard from "../../domain/models/IBankCard";

const mapState = ({cartArticles}: ICartState) => ({cartArticles})

const mapDispatch = {
    resetCart,
}

const connector = connect(mapState, mapDispatch)

interface IProps extends ConnectedProps<typeof connector> {
    createCommand: (cartArticles: ICartArticle[], user: IUser, bankCard: IBankCard) => Promise<String>
}

const CommandFormContainer: React.FC<IProps> = (props: IProps) =>
    <div data-testid={'command-form-container'}>
        <CommandForm {...props}/>
    </div>

export default connector(CommandFormContainer)
