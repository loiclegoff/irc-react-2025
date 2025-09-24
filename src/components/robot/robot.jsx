import { Card } from "react-bootstrap";
import { Visual } from "../visual";
import { useDispatch } from "react-redux";
import { selectRobot } from "../../core/actions/robot";

export function Robot({ robot }) {
  const dispatch = useDispatch();

  function onRobotSelected() {
    dispatch(selectRobot(robot.parts));
  }

  return (
    <Card style={{ width: "18rem" }} onClick={onRobotSelected}>
      <Card.Title>{robot.title}</Card.Title>
      <Card.Body>
        <Visual type={robot.visual_type} source={robot.visual_src}></Visual>
      </Card.Body>
    </Card>
  );
}
