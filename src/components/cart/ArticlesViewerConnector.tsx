import React from "react";
import ArticlesViewer from "../articles/ArticlesViewer";
import {ICartState} from "../../store/cart/reducer";
import {connect, ConnectedProps} from "react-redux";

const mapState = ({articles}: ICartState) => ({articles})

const connector = connect(mapState)

type PropsFromRedux = ConnectedProps<typeof connector>

const ArticlesViewerConnector: React.FC<PropsFromRedux> = ({articles}) =>
    <div data-testid={'articlesViewerConnector'}>
        <ArticlesViewer articles={articles}/>
    </div>

export default connector(ArticlesViewerConnector)