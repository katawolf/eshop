import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home";
import {Provider} from "react-redux";
import store from "./store/configStore";

const App: React.FC = () => {
    return (
        <div className="App">
            <Provider store={store}>
                <Home/>
            </Provider>
        </div>
    );
}

export default App;
