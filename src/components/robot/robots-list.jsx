import { Robot } from "./robot";
import { useSelector } from "react-redux";
import { selectAllRobots } from "../../core/selectors/index.js";

export function RobotsList({ setSelectedRobot }) {
  // const robots = useSelector((state) => state.robots);
  const robots = useSelector(selectAllRobots);

  return (
    <div>
      {robots.map((robot) => (
        <div
          onClick={() => {
            setSelectedRobot(robot);
            console.log("click");
          }}
        >
          <Robot key={robot.id} robot={robot} />
        </div>
      ))}
    </div>
  );
}
