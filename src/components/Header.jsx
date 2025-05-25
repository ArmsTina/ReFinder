import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import { faBars, faLanguage } from "@fortawesome/free-solid-svg-icons";
import { NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setDarkMode, setLanguage } from "../store";

function Header() {
  // To set darkmode
  let darkMode = useSelector((state) => state.darkMode);
  let language = useSelector((state) => state.language);
  let dispatch = useDispatch();

  function toggleDarkMode() {
    dispatch(setDarkMode());
  }

  function toggleLanguage(targetLang) {
    dispatch(setLanguage(targetLang));
  }

  const navDropdownTitle = <FontAwesomeIcon icon={faBars} />;

  return (
    <div className="header">
      <Navbar
        bg={darkMode ? "dark" : "white"}
        variant={darkMode ? "dark" : "white"}
      >
        <Container fluid>
          <Navbar.Brand href="#home">ReFinder</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="ms-auto">
            <Nav.Link href="#user">
              <FontAwesomeIcon icon={faUser} />
            </Nav.Link>
            <NavDropdown
              title={navDropdownTitle}
              data-bs-theme={darkMode ? "dark" : "light"}
              className={darkMode ? "dropdown-dark" : "dropdown-light"}
              align="end"
            >
              <NavDropdown.Item onClick={toggleDarkMode}>
                {darkMode ? (
                  <span>
                    <FontAwesomeIcon icon={faSun} /> Light Mode
                  </span>
                ) : (
                  <span>
                    <FontAwesomeIcon icon={faMoon} /> Dark Mode
                  </span>
                )}
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  toggleLanguage(language == "kr" ? "en" : "kr");
                }}
              >
                <span>
                  <FontAwesomeIcon icon={faLanguage} /> Toggle Language
                </span>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
