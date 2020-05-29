import React from "react";
import {Navbar} from "react-bootstrap";

const Menu: React.FC = () =>
    <Navbar data-testid={'menu'} bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">Eshop</Navbar.Brand>
    </Navbar>

export default Menu