import React from "react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Menu from "../../assets/icons/menu.png";
import MobileMenu from "../mobileMenu";
import disableScroll from "disable-scroll";

function NavBar() {
  const [open, setOpen] = useState(false);
  const toggleMobileMenu = () => {
    setOpen(!open);
  };
  useEffect(() => {
    if (open) {
      disableScroll.on();
    } else {
      disableScroll.off();
    }
  }, [open]);

  return (
    <>
      <div className="navBarWrapper">
        <div className="navBarTitle">
          <h1>CAKE</h1>
        </div>
        <div className="navBarLink">
          <NavLink to="/" className="link" activeClassName="">
            HOME
          </NavLink>
          <NavLink to="/recipes" className="link">
            RECIPES
          </NavLink>
          <NavLink to="/about" className="link">
            ABOUT
          </NavLink>
        </div>
      </div>

      <div className={open ? "navNone" : "navContent"}>
        <div className="navBarTitleMobile">
          <h1>CAKE</h1>
        </div>
        <div className="navBarBurger">
          <img
            className="menuIcon"
            src={Menu}
            alt="menuIcon"
            onClick={toggleMobileMenu}
          />
        </div>
      </div>

      {open && (
        <>
          <MobileMenu close={toggleMobileMenu} />
        </>
      )}
    </>
  );
}

export default NavBar;
