import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Reveal from "./pages/Reveal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reveal" element={<Reveal />} />
      </Routes>
    </Router>
  );
}

export default App;
