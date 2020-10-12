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
            <div className="footer-rekvizitai">
              <li key="compName">
                <p style={{ fontWeight: "bold" }}>UAB "Sun Lux"</p>
              </li>
              <li key="phone">+370 688 54876</li>
              <li key="email">edmundaszilinskas@gmail.com</li>
              <li key="adress">Ringaudų sen., Virbališkių km., Saulės g. 1, Kaunas</li>
              <li key="VAT">{t("contacts.VAT")} LT100007002916</li>
              <li key="compCOde">{t("contacts.comp_code")} 302821529</li>
            </div>
          </div>
          <div className="menu-columns">
            <div className="column">
              <Link style={{ color: "inherit", textDecoration: "none" }} to="/">
                <li className="underline underline-footer">
                  {t("header.home")}
                </li>
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
