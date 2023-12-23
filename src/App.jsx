import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import About from "./components/pages/About";
import Navbar from "./components/Navbar";
import NavModal from "./components/NavModal";
import Footer from "./components/Footer";
import Confirmation from "./components/pages/Confirmation";

const App = () => {
  const [isModalShowing, setIsModalShowing] = useState(false);

  const openModal = () => {
    setIsModalShowing(!isModalShowing);
    document.body.classList.add("overflow-hidden");
  };

  const closeModal = () => {
    setIsModalShowing(!isModalShowing);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <>
      <Navbar openModal={openModal} />
      <NavModal isModalShowing={isModalShowing} closeModal={closeModal} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
