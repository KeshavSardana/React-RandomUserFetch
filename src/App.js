import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";
import { Container, Row, Col } from "reactstrap";
import Axios from "axios";
import MyCard from "./MyCard.js";

const App = () => {
  const [details, setDetails] = useState({});

  const fetchData = async () => {
    var response = await Axios.get("https://randomuser.me/api/");
    console.log("data is :", response);
    var details = response.data.results[0];
    setDetails(details);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container fluid className="App">
      <Row>
        <Col md={4} sm={8} className="offset-md-4 offset-sm-2">
          <MyCard details={details} />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
