import React, { useState } from "react";
import Blueberry from "../../assets/images/blueberry.jpg";
import ChocolateBerries from "../../assets/images/chocolateBerries.jpg";
import Coconut from "../../assets/images/coconut.webp";
import Cranberry from "../../assets/images/cranberry.webp";
import GlutenFree from "../../assets/images/glutenFree.jpg";
import Keto from "../../assets/images/keto.webp";
import Pavlova from "../../assets/images/pavlova.jpg";
import Pistachio from "../../assets/images/pistachio.jpeg";
import Vegan from "../../assets/images/vegan.png";
import Modal from "../modal";

function RecipesCards() {
  const [open, setOpen] = useState(false);
  const [id, setId] = useState(null);

  if (open) {
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "hidden";
    }
  } else {
    if (typeof window != "undefined" && window.document) {
      document.body.style.overflow = "auto";
    }
  }

  return (
    <>
      <div className="recipesCardWrapper">
        {data.map((item, index) => {
          return (
            <div className="cardContent">
              <div className="cardImage">
                <img src={item.image} />
              </div>
              <div className="cardText">
                <h1> {item.title}</h1>
                <p>{item.text}</p>
              </div>
              <div className="cardButton">
                <button
                  onClick={() => {
                    setOpen(true);
                    setId(index);
                  }}
                >
                  SEE RECIPE
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {open && (
        <>
          <Modal id={id} setOpen={setOpen} title={data[id].title} />
        </>
      )}
    </>
  );
}
export default RecipesCards;

const data = [
  {
    image: Blueberry,
    title: "Blueberry Cheesecake",
    text: "Fruit makes cheesecake healthy, right?",
  },
  {
    image: ChocolateBerries,
    title: "Chocolate Cake with Berries",
    text: "I think it looks beautiful and it tastes delicious!",
  },
  {
    image: Coconut,
    title: "Classic Coconut Cake",
    text: "This perfect coconut cake sets the bar for homemade cakes everywhere.",
  },
  {
    image: Cranberry,
    title: "White Chocolate Cranberry Cake",
    text: "The perfect holiday treat - light fluffy cake with fresh cranberry filling between each layer. ",
  },
  {
    image: GlutenFree,
    title: "Gluten Free Chocolate Cake",
    text: "This classic chocolate cake has a perfectly tender crumb with plenty of moisture. ",
  },
  {
    image: Keto,
    title: "Keto Cake",
    text: "This isn't just your ordinary cake recipe. ",
  },
  {
    image: Pavlova,
    title: "The Perfect Pavlova",
    text: "Pavlovas are a creation of love.",
  },
  {
    image: Pistachio,
    title: "Pistachio and Lemon Cake",
    text: "It's such a unique flavor. Rich, nutty, earthy, and very distinct. ",
  },
  {
    image: Vegan,
    title: "Vegan Chocolate Cake",
    text: "The ultimate healthy chocolate cake that tastes like a traditional Chocolate Cake. ",
  },
];
