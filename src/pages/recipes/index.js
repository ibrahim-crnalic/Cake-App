import React from "react";
import RecipesCards from "../../components/recipesCards";
import NavBar from "../../components/navBar";

function Recipes() {
  return (
    <div className="recipesWrapper ">
      <NavBar />
      <RecipesCards />
    </div>
  );
}
export default Recipes;
