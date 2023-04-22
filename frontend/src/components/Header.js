//External Modules
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import { useLoginContext } from "../providers/LoginProvider";

const Header = () => {
  const { isLoggedIn, logout } = useLoginContext();

  return (
    <Navbar bg="primary" variant="dark" expand="lg" collapseOnSelect>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>Bolt and Dash</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto ">
            {isLoggedIn && (
              <>
                <LinkContainer to="/videos">
                  <Nav.Link>Videos</Nav.Link>
                </LinkContainer>

                <Nav.Link onClick={() => logout()}>Logout</Nav.Link>
              </>
            )}
            {!isLoggedIn && <Nav.Link>Sign In</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
