import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./views/Home";
import {Provider} from "react-redux";
import store from "./store/configStore";
import {Route, Switch} from 'react-router-dom';
import Article from "./views/Article";
import NotFound from "./views/NotFound";
import Cart from "./views/Cart";
import Command from "./views/Command";
import CommandSuccess from "./views/CommandSuccess";

const App: React.FC = () => {
    return (
        <div className="App">
            <Provider store={store}>
                <Switch>
                    <Route exact path={'/article/:id'} component={Article}/>
                    <Route exact path={'/cart'} component={Cart}/>
                    <Route exact path={'/command'} component={Command}/>
                    <Route exact path={'/command-success'} component={CommandSuccess}/>
                    <Route exact path={'/'} component={Home}/>
                    <Route path={'*'} component={NotFound}/>
                </Switch>
            </Provider>
        </div>
    );
}

export default App;
