import React from "react";
import NavBar from "../navBar";
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();
  return (
    <div className="heroWrapper">
      <NavBar />
      <div className="heroContent">
        <h1> FEEL THE TASTE </h1>

        <button
          onClick={() => {
            navigate("/recipes");
          }}
        >
          BROWSE RECIPES
        </button>
      </div>
    </div>
  );
}
export default Hero;
