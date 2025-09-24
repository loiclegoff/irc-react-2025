export const LOAD_PARTS = "LOAD_PARTS";

export function loadParts(parts) {
  return {
    type: LOAD_PARTS,
    payload: parts
  }
}
