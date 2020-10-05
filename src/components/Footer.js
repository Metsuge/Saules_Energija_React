import React from "react";
import { Link } from "react-router-dom";

// import phonelogo from "../images/phone.svg";
// import email from "../images/email.svg";

const Footer = ({ t }) => {
  return (
    <>
      <footer className="footer-main">
        <nav id="nav-footer">
          <div className="main-footer">
            {/* <ul className="footer-list"> */}
              {/* <li>
                <img alt="phoneLogo" src={phonelogo} />
              </li> */}
              {/* <li style={{ width: "100px" }}>+370 688 54876</li> */}

              {/* <li>
                <img alt="email" src={email} />
              </li> */}
              {/* <li>edmundaszilinskas@gmail.com</li> */}
              
            {/* </ul> */}
            <div className="footer-rekvizitai">
              <li><p style={{fontWeight: "bold"}}>UAB "Sun Lux"</p></li>
              <li>+370 688 54876</li>
              <li>edmundaszilinskas@gmail.com</li>
              <li>Ringaudų sen., Virbališkių km., Saulės g. 1, Kaunas</li>
              <li>{t("contacts.VAT")} LT100007002916</li>
              <li>{t("contacts.comp_code")} 302821529</li>
            </div>
          </div>
          <div  className="menu-columns">
            <div className="column">
              <Link style={{ color: "inherit", textDecoration: "none" }} to="/">
                <li className="underline underline-footer">{t("header.home")}</li>
              </Link>
              <Link
                style={{ color: "inherit", textDecoration: "none" }}
                to="/projects"
              >
                <li className="underline underline-footer">
                  {t("header.projects")}
                </li>
              </Link>
            </div>
  
            <div className="column">
              <Link
                style={{ color: "inherit", textDecoration: "none" }}
                to="/contacts"
              >
                <li className="underline underline-footer">
                  {t("header.contacts")}
                </li>
              </Link>
              <Link
                style={{ color: "inherit", textDecoration: "none" }}
                to="/partners"
              >
                <li className="underline underline-footer">
                  {t("header.partners")}
                </li>
              </Link>
              <Link
                style={{ color: "inherit", textDecoration: "none" }}
                to="/about"
              >
                <li className="underline underline-footer">
                  {t("header.about_us")}
                </li>
              </Link>
            </div>
          </div>
        </nav>
        <div className="rights">
          <p>Visos teisės saugomos © 2020 </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
