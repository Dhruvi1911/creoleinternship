import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactDOM from "react-dom/client";
import { Cmp1, Car } from "./components/classcmp";
import { Cmp, Job } from "./components/functioncmp";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { About } from "./route/about";
import { Home } from "./route/home";
import { Contact } from "./route/contact";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
export default App;
