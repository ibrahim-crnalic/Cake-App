import React from "react";
import Gallery from "../../components/gallery";
import Hero from "../../components/hero";
import MainChef from "../../components/mainChef";

function HomePage () {
    return (
        <div className="homePageWrapper">
            <Hero/>
            <MainChef/>
            <Gallery/>
        </div>
    );
}
export default HomePage;