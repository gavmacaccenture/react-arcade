import "./App.css";
import Game from "./components/Game";
import Home from "./components/Home";
import MI from "./MI";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="snap" element={<Game />} />
      <Route path="mi" element={<MI />} />
    </Routes>
  );
}

export default App;
