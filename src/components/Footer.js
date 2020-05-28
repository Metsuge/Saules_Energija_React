import React from "react";


import phonelogo from '../images/phone.svg';
import email from '../images/email.svg';

const Footer = () => {
  return (
    <>
      <footer>
        <div class="main-footer">
          <ul class="footer-list">
            <li>
              <img src={phonelogo} />
            </li>
            <li>+370 688 54876</li>
          </ul>
          <ul class="footer-list">
            <li>
              <img src={email} />
            </li>
            <li>saulesenergija@gmail.com</li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;
