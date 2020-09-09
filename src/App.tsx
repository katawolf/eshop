import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./views/Home";
import {Provider} from "react-redux";
import store from "./store/configStore";
import {Route, Switch} from 'react-router-dom';
import Article from "./views/Article";
import NotFound from "./views/NotFound";
import Cart from "./views/Cart";
import Order from "./views/Order";
import OrderSuccess from "./views/OrderSuccess";

const App: React.FC = () => {
    return (
        <div className="App">
            <Provider store={store}>
                <Switch>
                    <Route exact path={'/article/:id'} component={Article}/>
                    <Route exact path={'/cart'} component={Cart}/>
                    <Route exact path={'/order'} component={Order}/>
                    <Route exact path={'/order-success'} component={OrderSuccess}/>
                    <Route exact path={'/'} component={Home}/>
                    <Route path={'*'} component={NotFound}/>
                </Switch>
            </Provider>
        </div>
    );
}

export default App;
