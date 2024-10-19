import { destroyTile } from "./helpers";
import { GridType, SpeedType } from "./types";

export const destroyWall = async (
  grid: GridType,
  row: number,
  col: number,
  isRight: number,
  speed: SpeedType
) => {
  if (isRight && grid[row][col + 1]) {
    await destroyTile(grid, row, col + 1, speed);
  } else if (grid[row + 1][col]) {
    await destroyTile(grid, row + 1, col, speed);
  } else {
    await destroyTile(grid, row, col, speed);
  }
};
