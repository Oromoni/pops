import "./App.css";
import Footer from "./Footer";
import Hero from "./Hero";
import Home from "./Home";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route element={<Hero />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
