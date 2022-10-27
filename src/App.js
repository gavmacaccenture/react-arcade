import "./App.css";
import Game from "./components/Game";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="snap" element={<Game />} />
    </Routes>
  );
}

export default App;
