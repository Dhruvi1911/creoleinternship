import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { Example } from './Hooks/usestate';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Example/>}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
