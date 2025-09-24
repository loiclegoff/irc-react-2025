import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RobotsList } from "./components/robot/robots-list";
import { Col, Container, Row } from "react-bootstrap";
import { PartsList } from "./components/part/parts-list";

function App() {
  const [selectedRobot, setSelectedRobot] = useState(null);

  // state is initialized by a props
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://robot-cpe-2024.cleverapps.io/robots"
      );
      const data = await response.json();
      setRobots(data);
    }
    // Get data from an API.
    fetchData();
  }, []);

  const [parts, setParts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://robot-cpe-2024.cleverapps.io/parts"
      );
      const data = await response.json();
      setParts(data);
    }
    // Get data from an API.
    fetchData();
  }, []);

  console.log(selectedRobot);

  return (
    <div className="app">
      <h1>Robot Shop</h1>
      <Container>
        <Row>
          <Col>
            <RobotsList robots={robots} setSelectedRobot={setSelectedRobot} />
          </Col>
          <Col>
            <PartsList parts={parts} selectedParts={selectedRobot?.parts} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
