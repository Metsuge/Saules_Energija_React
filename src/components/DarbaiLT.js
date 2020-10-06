import React from "react";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";
import prosolar from '../images/logo/prosolar-logo-new.png';
import fronius from '../images/logo/fronius.webp';
import aleo from '../images/logo/aleo_logo.png';
import renusol from '../images/logo/Renusol.webp'
import namas from "../images/namas.png";
import background from "../images/whitesky.png";

import sukasi from '../images/besisukantys.jpg';
import linija from '../images/linijamoduliu.jpg';
import mill from '../images/malunas.jpg';

const DarbaiLT = ({ onObjectClick, t, listOfObjectsLT }) => {
  //to show only *insert nr* items in this component
  const listforDarbaiLT = listOfObjectsLT.slice(0, 6);
  return (
    <>
      {/* <Slides /> */}

      <div className="cover">
        <img alt="background" className="coverimg main" src={background}></img>
        <div className="DarbaiLT-about-section">
          <p className="intro-about">Saulės elektrinės ir vėjo jėgainės</p>
        </div>
      </div>
      <div className="cover2">
        <div className="cropped-pics">
        <img alt="namas" src={linija} className="namas" ></img>
          <img alt="namas" src={sukasi} className="namas" ></img>
          <img alt="namas" src={mill} className="namas" ></img>
          <img alt="namas" src={namas} className="namas" ></img>
        </div>
        <p className="intro-p">
          Daugiau nei 30 metų patirtis, aukštos kvalifikacijos personalas ir tik
          laiko patikrinta, geriausios kokybės naudojama įranga
        </p>
      </div>
      <div className="partnercover">
      <p className="intro-about ">Partneriai</p>
      <div className="partnercoverflex">
        <div className="main-img-partners-each">
            <a href="http://prosolar.cz">
              
              <img alt="pic" src={prosolar} />
            </a>
          </div>
          <div className="main-img-partners-each">
            <a href="https://www.fronius.com/en">
              
              <img alt="pic" src={fronius} />
            </a>
          </div>
          <div className="main-img-partners-each">
            <a href="https://www.renusol.com/en/">
              
              <img alt="pic" src={renusol} />
            </a>
          </div>
          <div className="main-img-partners-each">
            <a href="https://www.aleo-solar.com/">
              
              <img alt="pic" src={aleo} />
            </a>
          </div>
      </div>
      </div>


      <div className="pagrindinis-div">
        <p className="intro-about">{t("DarbaiLT.title")}</p>

        <div className="img-section">
          {listforDarbaiLT.map((oneObject) => {
            return (
              <Link to={`/object/${oneObject.id}`}>
                <div
                  onClick={() => onObjectClick(oneObject.id)}
                  className="each-img"
                >
                  <img alt="" className="darbai-img" src={oneObject.src} />

                  {/* <div className="text-section">
                    <p className="textonimg">
                      {t(`listOfObjectsLT.id${oneObject.id}.introtext`)}
                    </p>
                  </div> */}
                </div>
              </Link>
            );
          })}
          <div className="visiprojektai">
            <Link to="/projects">
              <p>{t("DarbaiLT.linkToProj")}</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default withTranslation("translation")(DarbaiLT);
