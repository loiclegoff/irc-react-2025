export const LOAD_ROBOTS = "LOAD_ROBOTS";

export function loadRobots(robots) {
  return {
    type: LOAD_ROBOTS,
    payload: robots
  }
}
