import React, { useState } from "react";
import "../styles/Popup.css";
import { Container, Row, Col, InputGroup, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Popup() {
  const [searchValue, setSearchValue] = useState("");
  const [barFocus, setBarFocus] = useState(false);
  const [search, setSearch] = useState(false);
  const [showLoad, setShowLoad] = useState(false);
  const [showButton, setShowButton] = useState(false);

  function handleSubmit() {
    console.log(searchValue);
    setSearch(true);
    setShowLoad(true);
    setTimeout(() => {
      setShowLoad(false);
      setShowButton(true);
    }, 1000);
  }

  return (
    <Container className="d-flex justify-content-center align-items-center text-center">
      <Row className="gap-3">
        <Col xs={12}>
          {showButton && <h3>Perfect keyword is ready!</h3>}
          {!showButton && <h3>Tell us what to search!</h3>}
        </Col>
        {!search && (
          <Col xs={12}>
            <InputGroup className={`mb-3 ${barFocus ? "focused" : ""}`}>
              <Form.Control
                placeholder="Search"
                aria-label="Search Bar"
                className={`search-bar`}
                value={searchValue}
                onFocus={() => {
                  setBarFocus(true);
                }}
                onBlur={() => {
                  setBarFocus(false);
                }}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
              />
              <Button variant="dark" onClick={handleSubmit}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </Button>
            </InputGroup>
          </Col>
        )}
        {showLoad && (
          <Col xs={12}>
            <div class="loader"></div>
          </Col>
        )}
        {showButton && (
          <>
            <Col xs={12}>
              <Button
                variant="primary"
                onClick={() =>
                  window.open(
                    `https://www.google.com/search?q=${searchValue}`,
                    "_blank"
                  )
                }
                style={{ width: "138px" }}
              >
                Let's go!
              </Button>
            </Col>
            <Col xs={12}>
              <Button
                variant="primary"
                onClick={() => {
                  setSearch(false);
                  setShowButton(false);
                }}
                style={{ width: "138px" }}
              >
                Search Another
              </Button>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
}

export default Popup;
