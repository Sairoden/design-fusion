import Canvas from "./canvas";

// PAGES
import { Customizer, Home } from "./pages";

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
    </main>
  );
}

export default App;

// 43 minutes ka na
