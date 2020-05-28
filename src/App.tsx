import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import {Provider} from "react-redux";
import store from "./store/configStore";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Navbar} from 'react-bootstrap';
import Article from "./components/Article";

const App: React.FC = () => {
    return (
        <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path={'/article/:id'} component={Article} />
                        <Route path={'/'} component={Home} />
                    </Switch>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
