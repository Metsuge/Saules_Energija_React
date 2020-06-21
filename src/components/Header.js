import React, { Component } from "react";
import { Link } from "react-router-dom";

// import phonelogo from "../images/phone.svg";
// import email from "../images/email.svg";
import lt from "../images/lt_flag.png";
import uk from "../images/uk_flag.png";
// import Burger from './Burger';

import '../Styles/menu.css'
import menuLogo from '../images/open-menu.png';

class Header extends Component {
  //sticky header
  openMenu = () => {
const navList = document.getElementById("nav-list");
const menuLogo = document.getElementById("menuLogo")

    if(window.innerWidth > 800){
      menuLogo.style.cursor = "none"
      console.log('click');
      
    } else if (window.innerWidth < 800) {
      navList.classList.toggle('open')
    };
    
    
    
    
    
  }

  // && !(navList.style.visibility = "hidden")

  componentDidMount() {
    window.addEventListener("scroll", () => {
      const isTop = window.scrollY > 100;
      const nav = document.getElementById("nav");
      const menuLogo = document.getElementById("menuLogo")
      const navList = document.getElementById("nav-list");
      if (isTop) {
        nav.classList.add("scrolled");
        menuLogo.classList.add("scrolled");
        // navList.style.top = "60px"
      } else {
        nav.classList.add("scrolled");
        menuLogo.classList.add("scrolled");
        // navList.style.top = "60px"
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
          <div id="menuLogo"><img className='menu_logo' src={menuLogo} onClick={() => this.openMenu()}></img></div> 
            {/* <ul className="header-list">
              <li>
                <img className="header-logo" alt="phone" src={phonelogo} />
              </li>
              <li>+370 688 54876</li>
            </ul>
            <ul className="header-list">
              <li>
                <img className="header-logo" alt="email" src={email} />
              </li>
              <li>saulesenergija@gmail.com</li>
            </ul> */}
           
            <div className="flags">
              <a href="#eng" data-reload>
                <img alt="ENG" src={uk} />
              </a>
              <a href="#lt" data-reload>
                <img alt="LT" src={lt} />
              </a>
            </div>

            <ul id="nav-list">
              
              <Link style={{ color: "inherit", textDecoration: "none" }} to="/">
                <li className="underline">PAGRINDINIS</li>
              </Link>
              <Link style={{ color: "inherit", textDecoration: "none" }} to="/projects">
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
