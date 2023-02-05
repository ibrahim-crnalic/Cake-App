import React from "react";
import NavBar from "../../components/navBar";

function About() {
  return (
    <>
    <NavBar/>
    <div className="aboutWrapper">
      <div className="aboutText">
        <h1>About us</h1>
        <p>
          Welcome to Cake, the ultimate destination for cake lovers! We're
          dedicated to sharing the best cake recipes and baking tips to help you
          create delicious treats in the comfort of your own home. Our website
          is packed with a wide range of cake recipes, from classic favorites to
          creative and innovative new creations. Whether you're a beginner baker
          or a seasoned pro, you'll find recipes to suit your skill level and
          taste preferences. At Cake, we believe that baking should be fun and
          accessible to everyone. That's why we've included step-by-step
          instructions and helpful tips to guide you through the baking process.
          We also provide nutrition information so you can make informed choices
          about the ingredients you use. In addition to our delicious cake
          recipes, we also offer a wealth of baking tips and tricks, from how to
          make the perfect cake batter to decorating techniques. We believe that
          with the right tools and knowledge, anyone can bake amazing cakes at
          home. So why wait? Get your apron on and start baking with Cake today!
          Whether you're looking for a classic yellow cake or a fun and colorful
          unicorn cake, we've got a recipe for you.
        </p>
        <p className="footnote">*This text is provided using Open AI  </p>
      </div>
      <div className="aboutMap">
      <iframe
          width="100%"
          height="300"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=Dzemala%20Bijedica%20St%2025c,%20Sarajevo%2071000&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameborder="0"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
        ></iframe>
      </div>
    </div>
    </>
  );
}
export default About;
