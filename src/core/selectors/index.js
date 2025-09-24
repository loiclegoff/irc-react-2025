export function selectAllRobots(state) {
  return state.robot.robots;
}

export function selectSelectedParts(state) {
  return state.part.parts.filter(part => state.robot.selectedPartIds.includes(part.id))
}