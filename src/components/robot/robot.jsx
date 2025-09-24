import { Card } from "react-bootstrap";
import { Visual } from "../visual";

export function Robot({ robot }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Title>{robot.title}</Card.Title>
      <Card.Body>
        <Visual type={robot.visual_type} source={robot.visual_src}></Visual>
      </Card.Body>
    </Card>
  );
}
