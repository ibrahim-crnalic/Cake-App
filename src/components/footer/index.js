import React from "react";
import FacebookIcon from "../../assets/icons/facebook.png";
import InstagramIcon from "../../assets/icons/instagram.png";
import ScrollToTop from "react-scroll-to-top";


function Footer() {
  return (
    <div className="footerWrapper">
      <div className="footerLeft">
        <h1>CAKE</h1>
        <p> we implement your delicious dreams.</p>
        <p>Baking the difference.</p>
      </div>
      <div className="footerCenter">
        <p className="title"> Address:</p>
        <a
          target="_blank"
          href="https://www.google.com/maps/place/D%C5%BEemala+Bijedi%C4%87a+25c,+Sarajevo+71000/@43.8499174,18.367688,17z/data=!3m1!4b1!4m6!3m5!1s0x4758c96dbb1d0ba7:0xa94c41d9ea2a7954!8m2!3d43.8499136!4d18.369882!16s%2Fg%2F11n0_ymdmd"
        >
          Dzemala Bijedica 25-C
        </a>
        <p className="title">Phone: </p>
        <a href="tel:+38733674409"> 033 674 409</a>
        <p className="title">Mail address:</p>
        <a href="mailto:nestooooooooo@gmail.com">nestooooooooo@gmail.com</a>
      </div>
      <div className="footerRight">
      <ScrollToTop smooth />
        <div className="socialMedia">
          <img src={FacebookIcon} alt="facebookIcon"/>
          <img src={InstagramIcon} alt="InstagramIcon"/>
        </div>
        <p>This website is built only for studying purposes</p>
        
      </div>
    </div>
  );
}
export default Footer;
