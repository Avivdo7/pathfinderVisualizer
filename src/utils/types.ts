export type AlgorithmType = "DIJKSTRA" | "A_STAR" | "BFS" | "DFS";

export interface AlgoSelectType {
  name: string;
  value: AlgorithmType;
}

export type MazeType = "NONE" | "BINARY_TREE" | "RECURSIVE_DIVISION";

export interface MazeSelectType {
  name: string;
  value: MazeType;
}

export type TileType = {
  row: number;
  col: number;
  isEnd: boolean;
  isWall: boolean;
  isPath: boolean;
  distance: number;
  isTraversed: boolean;
  isStart: boolean;
  parent: TileType | null;
};

export type GridType = TileType[][];

export type SpeedType = 1.5 | 0.8 | 0.3;

export interface SpeedSelectType {
  name: string;
  value: SpeedType;
}
