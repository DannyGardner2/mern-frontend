import React from 'react';
import { NavItem, NavLink, Nav, Container } from 'reactstrap'

function Navbar() {
    return (
        <Container>
            <Nav tabs>
                <NavItem>
                    <NavLink active href="/">
                        Home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/users/">
                        Users
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/adduser/">
                        Add User
                    </NavLink>
                </NavItem>
            </Nav>
        </Container>
    )
}

export default Navbar