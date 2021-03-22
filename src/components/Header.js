import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container } from 'react-bootstrap'


const Header = () => {
    return (
        <header>
            <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
                <Container>
                    <LinkContainer to='/'>
                        <Navbar.Brand>Memory Card Game</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse>
                        <Nav className="ml-auto">

                            <Nav.Link href='https://github.com/charlyfinos/'>Github</Nav.Link>

                            <LinkContainer to='https://github.com/charlyfinos/'>
                                <Nav.Link>Portfolio</Nav.Link>
                            </LinkContainer>

                            <LinkContainer to='/about'>
                                <Nav.Link>About</Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
