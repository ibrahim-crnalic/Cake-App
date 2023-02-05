import React from "react";
import Chef from "../../assets/images/mainChef.jpeg";

function MainChef() {
  return (
    <div className="mainChefWrapper">
      <div className="mainChefimage">
        <img src={Chef} alt="chefImage" />
      </div>
      <div className="mainChefBio">
        <h1> Regina Fallagne </h1>
        <p>
          Regina Fallagne was born, raised and educated in Los Angeles. Although
          she was born in Los Angeles she was raised with strong southern
          traditions. Both of her parents were from the south and migrated to
          Los Angeles in the early 50’s seeking a better life.Regina developed a
          love for baking at an early age. When she was only 10 years old she
          would always want to be in the kitchen with her grandmother when she
          came to visit. She would ask “Big Momma”, how much flour do you add to
          the batter? Or how much salt or baking powder, and the answer was
          usually something like “a little bit, a pinch or two handfuls”. This
          was confusing and didn’t make sense so she knew she just had to watch
          and learn by observation. By the age of 12 Regina had started her
          baking business with one loyal customer that would order a pound cake
          from her every week. Baking cakes and cookies were her favorite pass
          time. The love of baking soon expanded to cooking as well. Hours upon
          hours were spent studying cookbooks and experimenting with recipes. A
          recipe might look good but Regina always puts her personal spin on
          it.She enjoyed decorating and was good at it too. When she would
          receive invitations to showers and birthday parties she would ask the
          host if they would like for her to make the cake. This is how she
          starting building her customer base and soon thereafter established
          Regina’s Cakeplace.
        </p>
      </div>
    </div>
  );
}
export default MainChef;
