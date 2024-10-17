import { useContext } from "react";
import { PathfindingContext } from "../context/PathfindingContext";

export const usePathfinding = () => {
  const context = useContext(PathfindingContext);

  if (!context) {
    throw new Error("Use Pathfinding must be used within a provider!");
  }

  return context;
};
