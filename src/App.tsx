import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import {Provider} from "react-redux";
import store from "./store/configStore";
import {Route, Switch} from 'react-router-dom';
import Article from "./components/Article";
import NotFound from "./components/NotFound";

const App: React.FC = () => {
    return (
        <div className="App">
            <Provider store={store}>
                <Switch>
                    <Route exact path={'/article/:id'} component={Article}/>
                    <Route exact path={'/'} component={Home}/>
                    <Route path={'*'} component={NotFound}/>
                </Switch>
            </Provider>
        </div>
    );
}

export default App;
