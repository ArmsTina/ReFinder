import React, { useState } from "react";
import "../styles/Popup.css";
import {
  Container,
  Row,
  Col,
  InputGroup,
  Button,
  Form,
  Card,
  Spinner,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";

function Popup() {
  const darkMode = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  const [searchValue, setSearchValue] = useState("");
  const [barFocus, setBarFocus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  async function handleSubmit() {
    if (!searchValue.trim()) return;

    setLoading(true);
    setResults([]);

    try {
      const res = await mockApiCall(searchValue);
      setResults(res);
    } catch (err) {
      console.error("Error fetching keywords:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function mockApiCall(input) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            keyword: `${input} guide`,
            reason: "This helps provide structured info.",
          },
          { keyword: `${input} tips`, reason: "Tips are quick and popular." },
          {
            keyword: `${input} 2025`,
            reason: "Adding a year increases relevance.",
          },
        ]);
      }, 1500);
    });
  }

  return (
    <Container
      className={`d-flex flex-column justify-content-start align-items-center text-center pt-4 ${
        darkMode ? "bg-dark text-white" : "bg-white text-dark"
      }`}
      style={{
        maxHeight: "500px",
        overflowY: "auto",
        width: "400px",
        paddingBottom: "1rem",
      }}
    >
      <Row className="w-100 justify-content-center mb-4">
        <Col xs={10}>
          <h4 className="mb-3">What would you like to search for?</h4>
          <InputGroup className={`mb-3 ${barFocus ? "focused" : ""}`}>
            <Form.Control
              placeholder="Type your topic or query..."
              aria-label="Search Bar"
              className="search-bar"
              value={searchValue}
              onFocus={() => setBarFocus(true)}
              onBlur={() => setBarFocus(false)}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <Button variant="dark" onClick={handleSubmit}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </Button>
          </InputGroup>
        </Col>
      </Row>

      {loading && (
        <Row className="w-100 justify-content-center mb-3">
          <Col xs="auto">
            <Spinner animation="border" role="status" />
            <p className="mt-2">Analyzing your input...</p>
          </Col>
        </Row>
      )}

      {results.length > 0 && (
        <div className="w-100 px-4 d-flex flex-column gap-3">
          {results.map((item, index) => (
            <Card className="w-100" key={index}>
              <Card.Body>
                <Card.Title>{item.keyword}</Card.Title>
                <Card.Text>{item.reason}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() =>
                    window.open(
                      `https://www.google.com/search?q=${item.keyword}`,
                      "_blank"
                    )
                  }
                >
                  Search on Google
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </Container>
  );
}

export default Popup;
