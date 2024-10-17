import { useContext } from "react"
import { TileContext } from "../context/TileContext"


export const useTile = () =>{
  const context = useContext(TileContext);

  if(!context) {
    throw new Error("Use Tile must be used within a provider!");
  }

  return context;
}