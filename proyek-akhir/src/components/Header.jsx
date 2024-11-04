import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Logo from "../../public/NewLogo2.png";
import '../style/Header.css';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-primary shadow" data-bs-theme="light">
      <Container>
        <Navbar.Brand>
          <img src={Logo} alt="Logo Proyek" className="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="navbar-content">
          <Nav className="nav-content me-auto">
            <Link to="/main/dashboard" className="nav-link">
              Dashboard
            </Link>
            <Link to="/main/waitlist" className="nav-link">
              Waiting List
            </Link>
            <NavDropdown title="Catalog" id="nav-dropdown">
              <NavDropdown.Header>Dropdown header</NavDropdown.Header>
              <NavDropdown.Item eventKey="2">Another action</NavDropdown.Item>
              <NavDropdown.Item eventKey="3">Something else here</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Navbar.Text className="nav-akun">
            Signed in as: <a href="#admin" className="text-primary">Admin</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
