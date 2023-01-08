import { Routes, Route, Navigate } from "react-router-dom";
//styles
import './App.css';
//components
import Landing from "./components/shared/Landing";
import CoinInformation from "./components/shared/CoinInformation";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/:id" element={<CoinInformation />} />
        <Route path="/" element={<Landing />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
