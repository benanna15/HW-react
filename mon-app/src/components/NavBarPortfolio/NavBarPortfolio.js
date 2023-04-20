import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Dropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import './NavBarPortfolio.css';

const NavBar = () => {
  return (
    <Navbar bg="info" variant="info" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/">Portfolio</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/cv">
              Mon CV
            </Nav.Link>
            <Nav.Link as={Link} to="/UseEffectcompo">
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to="/HtmlCss">
              HTML/CSS
            </Nav.Link>
            <Nav.Link as={Link} to="/article/:id">
              Article
            </Nav.Link>
            <Dropdown className="ml-auto">
              <Dropdown.Toggle variant="dark" id="dropdown-basic">
                React.js
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-end">
                <Dropdown.Item as={Link} to="/Compteur">
                  Compteur useEffect
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/Liste">
                  Action
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/toggles">
                  Toggle
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/Object">
                  Metier
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
