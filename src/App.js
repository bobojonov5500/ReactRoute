import "./App.css";
import List from "./components/List";
import Navbar from "./components/Navbar";
import Boshsahifa from "./components/Boshsahifa";
import Forum from "./components/Forum";
import Maqola from "./components/Maqola";
import Nazm from "./components/Nazm";
import Nazr from "./components/Nazr";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App bg-neutral-950">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Boshsahifa />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/maqola" element={<Maqola />} />
        <Route path="/nazm" element={<Nazm />} />
        <Route path="/nazr" element={<Nazr />} />
      </Routes>
      <List />
    </div>
  );
}

export default App;
