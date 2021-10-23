import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/navigation.css'
const Navigation = () => {
    return (
        <Navbar  className="color-nav" collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand><img style={{width:'150px', height:'75px'}} src="../assets/LOGO2.png"/></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                    <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;