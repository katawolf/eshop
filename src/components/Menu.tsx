import React from "react";
import {Nav, Navbar, NavLink} from "react-bootstrap";
import {useHistory} from "react-router-dom";

const Menu: React.FC = () => {
    const history = useHistory()
    return <>
        <Navbar data-testid={'menu'} bg="dark" variant="dark" expand="lg">
            <Navbar.Brand onClick={() => history.push('/')}>Eshop</Navbar.Brand>
            <Nav className="mr-auto">
                <NavLink onClick={() => history.push('/cart')}>Cart</NavLink>
            </Nav>
        </Navbar>
    </>
}

export default Menu