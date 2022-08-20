import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const Header = ({ loadData }) => {
  return (
    <div>
      <Navbar bg="light" expand="lg" className="shadow">
        <Container>
          <Navbar.Brand href="#home">Advertyzement</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link onClick={() => loadData()}>Get Users</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
