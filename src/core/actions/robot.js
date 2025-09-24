export const LOAD_ROBOTS = "LOAD_ROBOTS";
export const SELECT_ROBOT = "SELECT_ROBOT"

export function loadRobots(robots) {
  return {
    type: LOAD_ROBOTS,
    payload: robots
  }
}

export function selectRobot(partIds) {
  return {
    type: SELECT_ROBOT,
    payload: partIds
  }
}
