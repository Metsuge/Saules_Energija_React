import React, { Component } from "react";
import { Link } from "react-router-dom";

import phonelogo from "../images/phone.svg";
import email from "../images/email.svg";
import lt from "../images/lt_flag.png";
import uk from "../images/uk_flag.png";

class Header extends Component {
  //sticky header
  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY > 100;
      const nav = document.getElementById("nav");
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
    return (
      <>
        <header>
          <nav className="nav" id="nav">
            <ul className="header-list">
              <li>
                <img alt="phone" src={phonelogo} />
              </li>
              <li>+370 688 54876</li>
            </ul>
            <ul className="header-list">
              <li>
                <img alt="email" src={email} />
              </li>
              <li>saulesenergija@gmail.com</li>
            </ul>
            <div className="flags">
              <a href="#eng" data-reload>
                <img alt="ENG" src={uk} />
              </a>
              <a href="#lt" data-reload>
                <img alt="LT" src={lt} />
              </a>
            </div>

            <ul className="nav-list">
              <Link style={{ color: "inherit", textDecoration: "none" }} to="/">
                <li className="underline">PAGRINDINIS</li>
              </Link>
              <Link style={{ color: "inherit", textDecoration: "none" }} to="/">
                <li className="underline">PROJEKTAI</li>
              </Link>
              <Link
                style={{ color: "inherit", textDecoration: "none" }} to="/contacts">
                <li className="underline">KONTAKTAI</li>
              </Link>
              <Link to="/partners" style={{ color: "inherit", textDecoration: "none" }}>
                <li className="underline">PARTNERIAI</li>
              </Link>
              <Link
                style={{ color: "inherit", textDecoration: "none" }} to="/about">
                <li className="underline">APIE MUS</li>
              </Link>
            </ul>
          </nav>
        </header>
      </>
    );
  }
}

export default Header;
