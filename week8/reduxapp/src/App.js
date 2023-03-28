import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Cart from "./components/cart"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cart/>
    </div>
  );
}

export default App;
