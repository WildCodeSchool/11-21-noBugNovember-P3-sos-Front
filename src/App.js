import "./App.css";
import Home from "./screens/Home";
import PanelAdmin from './screens/PanelAdmin'
import IdentificationAdmin from "./screens/IdentificationAdmin";

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="admin-controler" element={<PanelAdmin />}></Route>
        <Route path="admin" element={<IdentificationAdmin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
