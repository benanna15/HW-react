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
          <Nav className="ml-auto flex-wrap">
            <Nav.Link as={Link} to="/cv">Mon CV</Nav.Link>
            <Nav.Link as={Link} to="/UseEffectcompo">Blog</Nav.Link>

           

            {/* <Nav.Link as={Link} to="/article/:id">
              Article
            </Nav.Link> */}
            <Dropdown className="ml-auto">
              <Dropdown.Toggle variant="dark" id="dropdown-basic">React.js</Dropdown.Toggle>
              <Dropdown.Menu className="dropdown-menu-end">
                <Dropdown.Item as={Link} to="/Compteur"> Compteur useEffect</Dropdown.Item>
                <Dropdown.Item as={Link} to="/Liste"> Action</Dropdown.Item>
                <Dropdown.Item as={Link} to="/toggles">Toggle</Dropdown.Item>
                <Dropdown.Item as={Link} to="/Object"> Metier</Dropdown.Item>
                <Dropdown.Item as={Link} to="/SetIntervalCompo"> Set Interval</Dropdown.Item>
                <Dropdown.Item as={Link} to="/MouseMove">Mouse Move </Dropdown.Item>

            < Dropdown.Item as={Link} to="/StyleGeneral">Style General</Dropdown.Item>
            <Dropdown.Item as={Link} to="/StyleSepare">Style Separe</Dropdown.Item>
            <Dropdown.Item as={Link} to="/StyleBackTick">Style BackTick</Dropdown.Item>
            <Dropdown.Item as={Link} to="/StyleFonction">Style Fonction</Dropdown.Item>
            <Dropdown.Item as={Link} to="/ApiGeneral">Api General</Dropdown.Item>
            <Dropdown.Item as={Link} to="/AxiosGet">Axios Get</Dropdown.Item>
            <Dropdown.Item as={Link} to="/AxiosPost">Axios Post</Dropdown.Item>
            <Dropdown.Item as={Link} to="/GetArticle">Get Article</Dropdown.Item>
            <Dropdown.Item as={Link} to="/GetArticleByID">Get Article By ID</Dropdown.Item>
            <Dropdown.Item as={Link} to="/AddArticle">Add Article</Dropdown.Item>
            <Dropdown.Item as={Link} to="/DeleteArticle">Delete Article</Dropdown.Item>
            <Dropdown.Item as={Link} to="/RouterGeneral">Router General</Dropdown.Item>
            <Dropdown.Item as={Link} to="/RouteDyn">Route Dyn</Dropdown.Item>
            <Dropdown.Item as={Link} to="/LinkExplication">Link Explication</Dropdown.Item>
            <Dropdown.Item as={Link} to="/UseLocation">Use Location</Dropdown.Item>

                
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
