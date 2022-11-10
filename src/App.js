import { CoordsProvider } from "contexts/CoordsProvider";
import Home from "page/Home";

export default function App() {
  return (
    <CoordsProvider>
      <Home />
    </CoordsProvider>
  );
}
