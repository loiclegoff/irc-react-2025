import { Part } from "./part";

export function PartsList({ parts, selectedParts }) {
  if (!selectedParts) {
    return null;
  }

  return (
    <div>
      {parts
        .filter((part) => selectedParts.includes(part.id))
        .map((part) => (
          <Part key={part.id} {...part} />
        ))}
    </div>
  );
}
