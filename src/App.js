import "./App.css";
import Home from "./screens/Home";
import PanelAdmin from './screens/PanelAdmin'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Route path="/Home" element={Home}></Route>
      <Route path="/PanelAdmin" element={PanelAdmin}></Route>

      
    </div>
  );
}

export default App;
