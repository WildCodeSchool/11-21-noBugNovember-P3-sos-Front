import "./App.css";

import * as ReactDOM from "react-dom";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Home from "./screens/Home";

import PanelAdmin from "./screens/PanelAdmin";
import FirstVisit from "./screens/FirstVisit";
import ArticlesGrid from "./screens/ArticlesGrid";
import Parcours from "./components/Parcours";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/etapes" element={<FirstVisit />} />
        <Route path="/articlesGrid" element={<ArticlesGrid />} />
        <Route path="/admin" element={PanelAdmin} />
      </Routes>
    </div>
  );
}

export default App;
