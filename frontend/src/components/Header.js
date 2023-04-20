//External Modules
import React from "react";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { useLoginContext } from "../providers/LoginProvider";

const Header = () => {
  const { isLoggedIn, logout } = useLoginContext();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Bolt and Dash</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            <NavDropdown>
              {isLoggedIn && (
                <>
                  <LinkContainer to="/videos">
                    <NavDropdown.Item>Videos</NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Item onClick={() => logout()}>
                    Logout
                  </NavDropdown.Item>
                </>
              )}
              {!isLoggedIn && <NavDropdown.Item>Sign In</NavDropdown.Item>}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
