import {cleanCartError} from "../store/cart/action";
import {connect, ConnectedProps} from "react-redux";
import React from "react";
import {ICartState} from "../store/cart/reducer";
import Error from "../components/Error";

const mapState = ({error}: ICartState) => ({error})

const mapDispatch = {
    cleanError: cleanCartError
}

const connector = connect(mapState, mapDispatch)

type IProps = ConnectedProps<typeof connector>

const ErrorContainer: React.FC<IProps> = (props: IProps) =>
    <div data-testid={'errorConnector'}>
        <Error {...props}/>
    </div>

export default connector(ErrorContainer)
