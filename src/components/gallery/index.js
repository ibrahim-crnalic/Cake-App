import React from "react";
import Blueberry from "../../assets/images/blueberry.jpg";
import ChocolateBerries from "../../assets/images/chocolateBerries.jpg";
import Coconut from "../../assets/images/coconut.webp";
import Cranberry from "../../assets/images/cranberry.webp";
import GlutenFree from "../../assets/images/glutenFree.jpg";
import Keto from "../../assets/images/keto.webp";
import Pavlova from "../../assets/images/pavlova.jpg";
import Pistachio from "../../assets/images/pistachio.jpeg";
import Vegan from "../../assets/images/vegan.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";

SwiperCore.use([Navigation, Pagination]);

function Gallery() {
  return (
    <div className="galleryWrapper">
      <div className="galleryDesktop">
        {imgs.map((item) => {
          return (
            <div className="img">
              <img src={item} alt="img" />
            </div>
          );
        })}
      </div>
      <div className="innerSwiper">
      <Swiper navigation slidesPerView={1} loop={true} pagination={{clickable:true}}>
          {imgs.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="image">
                  <img src={item} alt="img"/>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
export default Gallery;

const imgs = [Blueberry, Coconut, GlutenFree, Keto, Pavlova, Pistachio];
