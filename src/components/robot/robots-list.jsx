import { Robot } from "./robot";

export function RobotsList({ robots, setSelectedRobot }) {
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
