import React from "react";


import phonelogo from '../images/phone.svg';
import email from '../images/email.svg';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="main-footer">
          <ul className="footer-list">
            <li>
              <img alt="phoneLogo" src={phonelogo} />
            </li>
            <li>+370 688 54876</li>
          </ul>
          <ul className="footer-list">
            <li>
              <img alt="email" src={email} />
            </li>
            <li>saulesenergija@gmail.com</li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
