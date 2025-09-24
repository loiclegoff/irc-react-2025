import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RobotsList } from "./components/robot/robots-list";
import { Col, Container, Row } from "react-bootstrap";
import { PartsList } from "./components/part/parts-list";
import { useDispatch } from "react-redux";
import { loadRobots } from "./core/actions/robot.js";
import { loadParts } from "./core/actions/part.js";

function App() {
  const [selectedRobot, setSelectedRobot] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://robot-cpe-2024.cleverapps.io/robots"
      );
      const data = await response.json();
      // même chose dispatch({ type: "LOAD_PARTS", payload: data });
      dispatch(loadRobots(data));
    }
    // Get data from an API.
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://robot-cpe-2024.cleverapps.io/parts"
      );
      const data = await response.json();
      dispatch(loadParts(data));
    }
    // Get data from an API.
    fetchData();
  }, []);

  return (
    <div className="app">
      <h1>Robot Shop</h1>
      <Container>
        <Row>
          <Col>
            <RobotsList setSelectedRobot={setSelectedRobot} />
          </Col>
          <Col>
            <PartsList parts={[]} selectedParts={selectedRobot?.parts} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
