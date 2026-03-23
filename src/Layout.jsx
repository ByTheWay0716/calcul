import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Layout = ({ children, user }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(!!user);

    const handleLogout = () => {
        // Implement logout logic here
        setIsLoggedIn(false);
    };

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">NEON—VAULT</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        {isLoggedIn ? (
                            <>  {/* Render user info and logout button */}  
                                <Nav.Link>{user.name}</Nav.Link>
                                <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                            </>
                        ) : (
                            <Nav.Link href="/sign-in">Sign In</Nav.Link>
                        )}
                        {window.location.pathname !== '/gameplayer' && (  /* Conditional nav hiding for GamePlayer page */  
                            <Nav.Link href="/games">Games</Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <main>{children}</main>
        </div>
    );
};

export default Layout;