import { useContext } from "react"
import { SpeedContext } from "../context/SpeedContext"


export const useSpeed = () => {
  const context = useContext(SpeedContext)

  if(!context) {
    throw new Error("Use Speed must be used within a provider!")
  }

  return context;
}