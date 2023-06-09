import { motion } from "framer-motion";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";

import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" index element={<Home />} />
            <Route path="about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
