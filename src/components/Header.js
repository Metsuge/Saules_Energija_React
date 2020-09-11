import React, { Component } from "react";
import { Link } from "react-router-dom";

// import phonelogo from "../images/phone.svg";
// import email from "../images/email.svg";
import lt from "../images/lt_flag.png";
import uk from "../images/uk_flag.png";
// import Burger from './Burger';

import "../Styles/menu.css";
import menuLogo from "../images/open-menu.png";

class Header extends Component {
  //sticky header
  openMenu = () => {
    const navList = document.getElementById("nav");
    // const menuLogo = document.getElementById("menuLogo")

    if (window.innerWidth > 800) {
      // menuLogo.style.cursor = "none"
      console.log("click");
    } else if (window.innerWidth < 800) {
      navList.classList.toggle("open");
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY > 100;
      const nav = document.getElementById("nav-list");
      // const menuLogo = document.getElementById("menuLogo")
      // const navList = document.getElementById("nav");
      if (isTop) {
        nav.classList.add("scrolled");
        // menuLogo.classList.add("scrolled");
        // navList.style.top = "60px"
      } else {
        nav.classList.add("scrolled");
        // menuLogo.classList.add("scrolled");
        // navList.style.top = "60px"
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  render() {
    const t = this.props.t;
    const changeLanguage = (code) => {
      i18n.changeLanguage(code);
    };
    const { i18n } = this.props;
    return (
      <>
        <header>
          <ul id="nav-list">
            <div className="flags">
              <img
                className="en_flag flag_icon"
                onClick={() => changeLanguage("en")}
                alt="ENG"
                src={uk}
              />
              <img
                className="lt_flag flag_icon"
                onClick={() => changeLanguage("lt")}
                alt="LT"
                src={lt}
              />
            </div>
            <div id="menuLogo">
              <img
                className="menu_logo"
                src={menuLogo}
                onClick={() => this.openMenu()}
                alt="menu"
              ></img>
            </div>
            <nav className="nav" id="nav">
              <Link style={{ color: "inherit", textDecoration: "none" }} to="/">
                <li className="underline">{t("header.home")}</li>
              </Link>
              <Link
                style={{ color: "inherit", textDecoration: "none" }}
                to="/projects"
              >
                <li className="underline">{t("header.projects")}</li>
              </Link>
              <Link
                style={{ color: "inherit", textDecoration: "none" }}
                to="/contacts"
              >
                <li className="underline">{t("header.contacts")}</li>
              </Link>
              {/* <Link
                to="/partners"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                <li className="underline">{t("header.partners")}</li>
              </Link> */}
              <Link
                style={{ color: "inherit", textDecoration: "none" }}
                to="/about"
              >
                <li className="underline">{t("header.about_us")}</li>
              </Link>
            </nav>
          </ul>
        </header>
      </>
    );
  }
}

export default Header;
