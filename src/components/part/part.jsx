import { Button, Card } from "react-bootstrap";
import { Visual } from "../visual";

export function Part({
  id,
  title,
  price,
  description,
  visual_type,
  visual_src,
}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Title>{title}</Card.Title>
      <Card.Body>
        <Button>{price}</Button>
        <Visual type={visual_type} source={visual_src}></Visual>
      </Card.Body>
    </Card>
  );
}
