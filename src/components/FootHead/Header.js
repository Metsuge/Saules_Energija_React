import React, { Component } from "react";
import { Link } from "react-router-dom";

import lt from "../../images/lt_flag.png";
import uk from "../../images/uk_flag.png";

import "../Additional/burger.css";
import menuLogo from "../../images/open-menu.png";

const closemenu = () => {
  window.addEventListener("click", function (e) {
    if (!document.getElementById("nav-list").contains(e.target)) {
      document.getElementById("nav").classList.remove("open");
    }
  });
};

const closeagain = () => {
  document.getElementById("nav").classList.remove("open");
};

// const close = () => {
//   const wtfr = document.getElementById('nav');
// }

class Header extends Component {
  //sticky header
  openMenu = () => {
    const navList = document.getElementById("nav");

    if (window.innerWidth > 800) {
      console.log("click");
    } else if (window.innerWidth < 800) {
      navList.classList.toggle("open");
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY > 100;
      const nav = document.getElementById("nav-list");
      if (isTop) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.add("scrolled");
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

    closemenu();
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
              <Link
                style={{ color: "inherit", textDecoration: "none" }}
                to="/about"
                onClick={() => closeagain()}
              >
                <li className="underline">{t("header.about_us")}</li>
              </Link>
              <Link
                style={{ color: "inherit", textDecoration: "none" }}
                to="/contacts"
                onClick={() => closeagain()}
              >
                <li className="underline">{t("header.contacts")}</li>
              </Link>
              <Link
                style={{ color: "inherit", textDecoration: "none" }}
                to="/"
                onClick={() => closeagain()}
              >
                <li className="underline">{t("header.home")}</li>
              </Link>
              <Link
                style={{ color: "inherit", textDecoration: "none" }}
                to="/projects"
                onClick={() => closeagain()}
              >
                <li className="underline">{t("header.projects")}</li>
              </Link>

              <Link
                to="/partners"
                style={{ color: "inherit", textDecoration: "none" }}
                onClick={() => closeagain()}
              >
                <li className="underline">{t("header.partners")}</li>
              </Link>
            </nav>
          </ul>
        </header>
      </>
    );
  }
}

export default Header;
