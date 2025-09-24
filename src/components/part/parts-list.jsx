import { useSelector } from "react-redux";
import { Part } from "./part";
import { selectSelectedParts } from "../../core/selectors";

export function PartsList() {
  const selectedParts = useSelector(selectSelectedParts);

  return (
    <div>
      {selectedParts.map((part) => (
        <Part key={part.id} {...part} />
      ))}
    </div>
  );
}
