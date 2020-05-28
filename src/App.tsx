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
                    <Navbar bg="dark" variant="dark" expand="lg">
                        <Navbar.Brand href="/">Eshop</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    </Navbar>
                    <br/>
                    <Switch>
                        <Route path={'/article'}>
                            <Article/>
                        </Route>
                        <Route path={'/'}>
                            <Home/>
                        </Route>
                    </Switch>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;
