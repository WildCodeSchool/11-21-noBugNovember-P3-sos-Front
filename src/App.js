import "./App.css";
import Home from "./screens/Home";
import PanelAdmin from './screens/PanelAdmin'


import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
     {/*<Routes>*/}
     {/*   <Route path="/Home" element={Home}></Route>*/}
     {/*   <Route path="/" element={PanelAdmin}></Route>*/}

     {/* </Routes>*/}
      <PanelAdmin />
      
    </div>
  );
}

export default App;
