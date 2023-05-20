import React, { useEffect, useState } from "react"
import {Nav, Navbar, NavDropdown, Offcanvas, Container} from 'react-bootstrap';
import { Link } from "react-router-dom"
import DropI18N from "../DropI18N/DropI18N";
import { useTranslation } from 'react-i18next';
import { useLocation } from "react-router-dom"

function NavbarOffCanva() {

  const [isAuth, setIsAuth] = useState(false);
	const { t } = useTranslation();
  let location = useLocation()

  useEffect(() => {

    console.log("location",location)

    if (localStorage.getItem("tokenPorteFolio")) {
      setIsAuth(true)
    } else {
      setIsAuth(false)
    }
  }, []);

  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} bg="warning" expand={expand} className="mb-3">
          <Container >
            <Navbar.Brand href="/">Cours React js</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  React js
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link as={Link} to="/"> 
                    <span className={`${location.pathname === "/" ? "fw-bolder" : ""}`} >Portfolio</span> 
                  </Nav.Link>
                  <Nav.Link as={Link}  to="/cv"> CV </Nav.Link>
                  <Nav.Link as={Link} to="/blog"> <span className={`${location.pathname === "/blog" ? "fw-bolder" : ""}`}>Blog</span>  </Nav.Link>
                  <Nav.Link as={Link} to="/login">{t('nav.login')}</Nav.Link>
                  {
                    isAuth &&
                    <>
                      <Nav.Link as={Link} to="/addarticle">Add Article</Nav.Link>
                      <>

                      <Nav.Link onClick={() => {
                        localStorage.setItem("tokenPorteFolio", "")
                        window.location.reload(); // en attendant Redux
                      }} >logout</Nav.Link>

                      {/* UseState */}
                      <NavDropdown title="UseState" active={location.pathname.startsWith("/UseState") ? "fw-bold" : ""}  id={`offcanvasNavbarDropdown-expand-${expand}`}  >
                        <NavDropdown.Item as={Link} to='/PresUseState'>Presentation du hooks</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/usfObject">
                          UseState Object
                        </NavDropdown.Item>
                        {/* <NavDropdown.Divider /> */}
                        <NavDropdown.Item as={Link} to="/UseStateToogle"> UseState Boolean (toogle) </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/UseStateList"> UseState Array ( list ) </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/UseStateNumber">  UseState Number </NavDropdown.Item>
                      </NavDropdown>

                      {/* UseEffect */}
                      <NavDropdown title="UseEffect" id={`offcanvasNavbarDropdown-expand-${expand}`}  >
                        <NavDropdown.Item as={Link} to="/PresUseEffect">Presentation UseEffect</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/UefVide">
                          UseEffect []
                        </NavDropdown.Item>
                        {/* <NavDropdown.Divider /> */}
                        <NavDropdown.Item as={Link} to="/useEffectDependance">
                          UseEffect [Avec Dependance]
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/UseEffectReturn">
                          UseEffect Avec Nettoyage ( Return )
                        </NavDropdown.Item>

                      </NavDropdown>

                      {/* Le Style */}
                      <Nav.Link as={Link} to="/StyleReact">CSS</Nav.Link>

                      {/* API */}
                      <NavDropdown title="API" id={`offcanvasNavbarDropdown-expand-${expand}`}
                      >
                        <NavDropdown.Item href="#action3">Axios get</NavDropdown.Item>
                        <NavDropdown.Item href="#action3">Axios post</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action3">Recuperer tous les articles</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                          Recuperer un article par son ID
                        </NavDropdown.Item>
                      </NavDropdown>

                      {/* Router */}
                      <NavDropdown title="Router" id={`offcanvasNavbarDropdown-expand-${expand}`} >
                        <NavDropdown.Item href="#action3">Fonctionnement</NavDropdown.Item>
                        <NavDropdown.Item href="#action3">Page 404</NavDropdown.Item>
                        <NavDropdown.Item href="#action3">route dynamique</NavDropdown.Item>
                        <NavDropdown.Item href="#action3">Link</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                          UseLocation
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action5">
                          UseParams
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action5">
                          Navigate
                        </NavDropdown.Item>
                      </NavDropdown>

                      {/* DataTable */}
                      <NavDropdown title="DataTable" id={`offcanvasNavbarDropdown-expand-${expand}`} >
                        <NavDropdown.Item href="#action3">Basic Sort</NavDropdown.Item>
                        <NavDropdown.Item href="#action3">Basic Expendable</NavDropdown.Item>
                        <NavDropdown.Item href="#action3">Barre de recherche</NavDropdown.Item>
                      </NavDropdown>

                      {/* Redux */}
                      <NavDropdown title="Authentification" id={`offcanvasNavbarDropdown-expand-${expand}`} >
                        <NavDropdown.Item href="#action3">Comment ca marche ?</NavDropdown.Item>
                      </NavDropdown>

                      {/* Hooks Avancé */}
                      <NavDropdown  title="Hooks Avancé" id={`offcanvasNavbarDropdown-expand-${expand}`}  >
                        <NavDropdown.Item as={Link} to="/UseReducerSection">UseReducer</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/UseReducerSimple">UseReducer Simple</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/UseReducerIntermediaire">UseReducer Intermediaire</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/UseReducerAdvanced">UseReducer Advanced</NavDropdown.Item>

                        <NavDropdown.Item as={Link} to="/UseMemoSection">UseMemo</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/UseCallBack">UseCallBack</NavDropdown.Item>
                        <NavDropdown.Item href="#action3">useMemo vs useCB</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/useRefsection">UseRef</NavDropdown.Item>
                      </NavDropdown>

                      {/* Redux */}
                      <NavDropdown title="Redux" id={`offcanvasNavbarDropdown-expand-${expand}`} >
                        <NavDropdown.Item href="#action3">Environnement</NavDropdown.Item>
                        <NavDropdown.Item href="#action3">UseSelector</NavDropdown.Item>
                        <NavDropdown.Item href="#action3">UseDispatch</NavDropdown.Item>
                      </NavDropdown>

                      <DropI18N />
                      </>
                    </>
                  }
                </Nav>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

    </>
  );
}

export default NavbarOffCanva;