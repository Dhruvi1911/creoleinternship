import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Signup from "./components/signup";
import { Login } from "./components/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from './components/home';
function App() {
  return (
    <>
      <ToastContainer></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
