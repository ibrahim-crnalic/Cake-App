import React from "react";
import { NavLink } from "react-router-dom";
import Close from "../../assets/icons/close.png";

function MobileMenu(props) {
  return (
    <div className="mobileMenuWrapper">

      <div className="menuHead">
        <img
          src={Close}
          className="closeIcon"
          onClick={props.close}
          alt="closeIcon"
        />
      </div>
      <div className="menuBody">
        <NavLink to="/" className="link" onClick={props.close}>
          HOME
        </NavLink>
        <NavLink to="/recipes" className="link" onClick={props.close}>
          RECIPES
        </NavLink>
        <NavLink to="/about" className="link" onClick={props.close}>
          ABOUT
        </NavLink>
      </div>
    </div>
  );
}
export default MobileMenu;
