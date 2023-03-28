import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Example } from "./Hooks/usestate";
import { Example2 } from "./Hooks/useEffect";
import { Example3 } from "./Hooks/useRef";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/usestate" element={<Example />} />
          <Route path="/useeffect" element={<Example2 />} />
          <Route path="/useRef" element={<Example3 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
