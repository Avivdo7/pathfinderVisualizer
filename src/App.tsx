import { PathfindingProvider } from "./context/PathfindingContext";
import { SpeedProvider } from "./context/SpeedContext";
import { TileProvider } from "./context/TileContext";

function App() {
  return (
    <PathfindingProvider>
      <TileProvider>
        <SpeedProvider>
          <h1 className="px-5 text-3xl font-bold h-screen w-screen bg-blue-500">
            pathfinder
          </h1>
        </SpeedProvider>
      </TileProvider>
    </PathfindingProvider>
  );
}

export default App;
