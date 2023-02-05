import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import Recipes from "./pages/recipes";
import Footer from "./components/footer";
import About from "./pages/about";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/about" element={<About/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
      
    </>
  );
}

export default App;
