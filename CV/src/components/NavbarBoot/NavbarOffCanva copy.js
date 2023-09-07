import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";
import DropI18N from "../DropI18N/DropI18N";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getToken } from "../../redux/slices/auth.slice";
import { useDispatch } from "react-redux";
import { setAuth } from "../../redux/slices/auth.slice";
import { toggleDarkMode } from "../../redux/slices/dark.slice";
import Button from "react-bootstrap/Button";
import i18n from "../../i18n/config";

function NavbarOffCanva() {
  const darkMode = useSelector((state) => state.dark);

  const dispatch = useDispatch();
  const [language, setLanguage] = useState(i18n.language);
  useEffect(() => {
    const handleChangeLanguage = () => {
      console.log("la langue a changé ! Nouvelle langue :", i18n.language);
      setLanguage(i18n.language);
    };
    i18n.on("languageChanged", handleChangeLanguage);
    return () => {
      i18n.off("languageChanged", handleChangeLanguage);
    };
  }, [i18n]);
  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);
  //const [isAuth, setIsAuth] = useState();

  let location = useLocation();
  console.log("location", location.pathname);
  const GETTOKEN = useSelector(getToken);
  console.log("GETTOKEN", GETTOKEN);
  console.log(typeof GETTOKEN);
  //const _getToken =useSelector((state)=>state.auth.fetchAuth.token)
  //console.log("_getToken", _getToken );
  const { t } = useTranslation();

  /* useEffect(() => {
  if(localStorage.getItem("tokenBlog")){
  console.log("localSotorage plein je suis auth");
// setIsAuth(true)
}else{
console.log("je ne suis pas auth");
//setIsAuth(false)
}
}, []); */

  /* const dispatch = useDispatch();

useEffect(() => {
  const storedToken = localStorage.getItem("tokenBlog");
  if (storedToken) {
    dispatch(setAuth(true));
  } else {
    dispatch(setAuth(false));
  }
}, []); */

  return (
    <>
      {["sm"].map((expand) => (
        <Navbar
          key={expand}
          bg={darkMode ? "dark" : "saumon"}
          expand={expand}
          className={
            darkMode
              ? "text-white mb-3   border-white  border-nav "
              : "mb-3 border-nav"
          }
         
        >
          {/*  <Button onClick={handleToggleDarkMode} variant="dark" className="btn-sm m-1">DarkMode</Button> */}

          <Container
            className={`mx-auto size no-auto-rtl  ${
              language === "he" ? "" : ""
            }`}
            
          >
            {/*   <Navbar.Brand href="/">Cours React js</Navbar.Brand> */}

            <Navbar.Brand href="/">
              <div className="d-flex justify-content-start ">
                <h4 className="mt-3 my-name respo-nav mr-auto ">Anna Beniard </h4>
                <p className="font-weight-light mt-3 ms-2 my-fs">
                  {" "}
                  / Full Stack Developer
                </p>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />

            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Full Stack Developer
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
            
                <Nav
                  className={` align-items-center respo-onglets  ${
                    language === "he"
                      ? " flex-grow-1 auto-rtl navlang dir-rtl "
                      : " flex-grow-1  container-parent navlang justify-content-end dir-ltr "
                  }`}
                 /*  dir={`${
                    language === "he"
                      ? "rtl "
                      : "ltr"
                  }`} */
                 
                >
                  
                  <Nav.Link as={Link} to="/Accueil" >
               
                    <span
                      className={`d-flex mt-3 logo-nav ${
                        location.pathname === "/" ? "fw-bold" : ""
                      }  `}
                    >
                      
                      <i className="bi bi-house bi-lg me-1 ms-1"></i>
                      <p className="titre-nav">{ t("nav.home") }</p>
                     
                    </span>
                  </Nav.Link>

                  <Nav.Link as={Link} to="/Portfolio">
                    <span
                      className={` d-flex mt-3 logo-nav ${
                        location.pathname === "/Portfolio" ? "fw-bold" : ""
                      }`}
                    >
                    
                       <i class="bi bi-folder me-1 ms-1 "> </i>
                    
                       <p className="titre-nav">{t("nav.portfolio")}</p>
                   
                      
                    </span>
                  </Nav.Link>

                  <Nav.Link as={Link} to="/cv">
                    <span
                      className={`d-flex mt-3 logo-nav ${
                        location.pathname === "/cv" ? "fw-bold" : ""
                      }`}
                    >
              
                      <i className="bi bi-file-person ms-1 me-1"> </i>
                      <p className="titre-nav">{ t("nav.cv") }</p>
                    
                     
                      
                    </span>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/blog">
                    <span
                      className={` d-flex mt-3 logo-nav ${
                        location.pathname === "/blog" ? "fw-bold" : ""
                      }`}
                    >
                       
                       <i className="bi bi-card-text ms-1 me-1"> </i>
                       <p className="titre-nav">{t("nav.blog")}</p>
                      
                      
                    </span>

                  </Nav.Link>
               

              <NavDropdown title={<i className="bi bi-globe mt-2 "></i>}>
                <DropI18N />
               
              </NavDropdown>


                  <Nav.Link as={Link} to="/login">
                    <i class="bi bi-person bold logo-compte"> </i>
                   {/*  //{t("nav.login")} */}
                  </Nav.Link>

                  {GETTOKEN && (
                    <>
                      <Nav.Link as={Link} to="/UseReducerExo">
                        <span
                          className={` ${
                            location.pathname === "/UseReducerExo"
                              ? "fw-bold"
                              : ""
                          }`}
                        >
                          {t("UseReducerExo")}
                        </span>
                      </Nav.Link>

                      <NavDropdown
                        title="Modif-Portfolio"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                        menuVariant={darkMode ? "dark" : "light"}
                      >
                        <NavDropdown.Item as={Link} to="/AddPortfolio">
                          Add Portfolio{" "}
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/DeletePortfolio">
                          {" "}
                          Delete Portfolio
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/UpdatePortfolio">
                          {" "}
                          Update Portfolio{" "}
                        </NavDropdown.Item>
                      </NavDropdown>

                      <Nav.Link
                        as={Link}
                        onClick={() => {
                          localStorage.setItem("tokenBlog", "");
                          window.location.reload();
                        }}
                      >
                        Logout
                      </Nav.Link>

                      {/* UseState */}
                      <NavDropdown
                        active={
                          location.pathname === "/PresUseState" ? "fw-bold" : ""
                        }
                        title="UseState"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                        menuVariant={darkMode ? "dark" : "light"}
                      >
                        <NavDropdown.Item as={Link} to="/PresUseState">
                          Presentation du hooks
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/usfObject">
                          UseState Object
                        </NavDropdown.Item>
                        {/* <NavDropdown.Divider /> */}
                        <NavDropdown.Item as={Link} to="/UseStateToogle">
                          {" "}
                          UseState Boolean (toogle){" "}
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/UseStateList">
                          {" "}
                          UseState Array ( list ){" "}
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/UseStateNumber">
                          {" "}
                          UseState Number{" "}
                        </NavDropdown.Item>
                      </NavDropdown>

                      {/* UseEffect */}
                      <NavDropdown
                        title="UseEffect"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                        menuVariant={darkMode ? "dark" : "light"}
                      >
                        <NavDropdown.Item as={Link} to="/PresUseEffect">
                          Presentation UseEffect
                        </NavDropdown.Item>
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
                      <Nav.Link as={Link} to="/StyleReact">
                        CSS dans React
                      </Nav.Link>

                      {/* API */}
                      <NavDropdown
                        title="API"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                        menuVariant={darkMode ? "dark" : "light"}
                      >
                        <NavDropdown.Item href="#action3">
                          Axios get
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action3">
                          Axios post
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action3">
                          Recuperer tous les articles
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action4">
                          Recuperer un article par son ID
                        </NavDropdown.Item>
                      </NavDropdown>

                      {/* Router */}
                      <NavDropdown
                        title="Router"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                        menuVariant={darkMode ? "dark" : "light"}
                      >
                        <NavDropdown.Item href="#action3">
                          Fonctionnement
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action3">
                          Page 404
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action3">
                          route dynamique
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action3">
                          Link
                        </NavDropdown.Item>
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
                      <NavDropdown
                        title="DataTable"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                        menuVariant={darkMode ? "dark" : "light"}
                      >
                        <NavDropdown.Item as={Link} to="/DataTableBasique">
                          DataTable Basique
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/DataTableSort">
                          DataTableSort
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/DataTableFull">
                          DataTable Full
                        </NavDropdown.Item>
                      </NavDropdown>

                      {/* Redux */}
                      <NavDropdown
                        title="Authentification"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                        menuVariant={darkMode ? "dark" : "light"}
                      >
                        <NavDropdown.Item href="#action3">
                          Comment ca marche ?
                        </NavDropdown.Item>
                      </NavDropdown>

                      {/* Hooks Avancé */}
                      <NavDropdown
                        title="Hooks Avancé"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                        menuVariant={darkMode ? "dark" : "light"}
                      >
                        <NavDropdown.Item as={Link} to="/DataTableFull">
                          UseReducer
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/DataTableFull">
                          UseMemo
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/DataTableFull">
                          UseCallback
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/DataTableFull">
                          useMemo vs useCB
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/PresUseRef">
                          UseRef
                        </NavDropdown.Item>
                      </NavDropdown>

                      {/* Redux */}
                      <NavDropdown
                        title="Redux"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                        menuVariant={darkMode ? "dark" : "light"}
                      >
                        <NavDropdown.Item as={Link} to="/DataTableFull">
                          Environnement
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/DataTableFull">
                          UseSelector
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/DataTableFull">
                          UseDispatch
                        </NavDropdown.Item>
                      </NavDropdown>

                      <NavDropdown
                        title="Articles"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                        menuVariant={darkMode ? "dark" : "light"}
                      >
                        <NavDropdown.Item as={Link} to="/AddArticle">
                          add Article
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/DeleteArticle">
                          Delete Article
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/UpdateArticle">
                          Update Article
                        </NavDropdown.Item>
                      </NavDropdown>

                      <NavDropdown
                        title="Form"
                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                        menuVariant={darkMode ? "dark" : "light"}
                      >
                        <NavDropdown.Item as={Link} to="/HKBase">
                          Hook Form Base{" "}
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/HFSelect">
                          Hook Form Select{" "}
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/HFBlur">
                          Hook Form Blur{" "}
                        </NavDropdown.Item>
                        <NavDropdown.Item as={Link} to="/FormikExemple">
                          Formik{" "}
                        </NavDropdown.Item>
                      </NavDropdown>
                    </>
                  )}
                </Nav>
              
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <div className="form-check form-switch dark-button justify-content-end">
              <label
                className="form-check-label switch "
                htmlFor="toggleSwitch"
              >
                <input
                  className="form-check-input checkbox  "
                  type="checkbox"
                  checked={darkMode}
                  onChange={handleToggleDarkMode}
                  id="toggleSwitch"
                />
                <span className="slider"></span>
              </label>
            </div>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavbarOffCanva;
