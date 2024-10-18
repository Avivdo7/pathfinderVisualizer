import { twMerge } from "tailwind-merge";
import { usePathfinding } from "../hooks/usePathfinding";
import { MAX_ROWS, MAX_COLS } from "../utils/constants";
import { Tile } from "./Tile";

export function Grid() {
  const { grid } = usePathfinding();

  return (
    <div
      className={twMerge(
        //Base classes
        "flex items-center flex-col justify-center border-sky-300",
        //Control grid height
        `lg:min-h-[${MAX_ROWS * 17}px] 
        md:min-h-[${MAX_ROWS * 15}px] 
        xs:min-h-[${MAX_ROWS * 8}px]
        min-h-[${MAX_ROWS * 7}px]`,
        //Control grid width
        `lg:min-w-[${MAX_COLS * 17}px] 
        md:min-w-[${MAX_COLS * 15}px] 
        xs:min-w-[${MAX_COLS * 8}px]
        min-w-[${MAX_COLS * 7}px]`
      )}
    >
      {grid.map((row, rowIndex) => (
        <div key={rowIndex} className="flex">
          {row.map((tile, tileIndex) => {
            const { isEnd, isStart, isPath, isTraversed, isWall } = tile;
            return (
              <Tile
                key={tileIndex}
                row={tile.row}
                col={tile.col}
                isEnd={isEnd}
                isStart={isStart}
                isPath={isPath}
                isTraversed={isTraversed}
                isWall={isWall}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}
