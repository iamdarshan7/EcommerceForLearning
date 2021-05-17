import React from "react";
import { Navbar, Nav, Container, Row} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header() {
    return (
    <header>
        <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>

            <LinkContainer to="/">
                <Navbar.Brand>SahiShop</Navbar.Brand>
            </LinkContainer>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">

                    <LinkContainer to="/cart">
                        <Nav.Link><i className="fas fa-shopping-cart"> Cart</i></Nav.Link>
                    </LinkContainer>
                    
                    <LinkContainer to="/login">
                        <Nav.Link><i className="fas fa-user"> Login</i></Nav.Link>
                    </LinkContainer>

                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </header>
);
}  

export default Header;
