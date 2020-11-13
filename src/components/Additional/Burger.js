import React from "react";
import "../components/Additional/burger.css";
import menuLogo from "../images/open-menu.png";

const Burger = () => {
  return (
    <>
      <div>
        <img className="menu_logo" src={menuLogo}></img>
      </div>
    </>
  );
};

export default Burger;
