import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeComponent from "./components/HomeComponent";

const App: React.FC = () => {
    return (
        <div className="App">
            <HomeComponent/>
            <section className="container">
            </section>
        </div>
    );
}

export default App;
