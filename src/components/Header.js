import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" expand="lg">
                <LinkContainer to='/'>
                    <Navbar.Brand><h2 style={{ color: 'White', marginBottom: '-0.4rem' }}>SpaceX</h2></Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <LinkContainer to='/about'>
                            <Nav.Link><h4 style={{ color: 'White', marginBottom: '-0.4rem' }}>About Us</h4></Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header
