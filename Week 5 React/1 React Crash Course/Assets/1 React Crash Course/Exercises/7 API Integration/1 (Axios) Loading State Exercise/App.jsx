import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import Users from "./pages/Users.js";
import Nav from "./components/Nav.js";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:username" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
