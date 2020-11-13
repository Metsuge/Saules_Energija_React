import React from "react";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";

import prosolar from "../images/logo/prosolar-logo-new.png";
import fronius from "../images/logo/fronius.webp";
import aleo from "../images/logo/aleo_logo.png";
import renusol from "../images/logo/Renusol.webp";

import background from "../images/cover5.jpg";
import photos4 from "../images/4photos.jpg";
// import sukasi from "../images/besisukantys.jpg";
// import linija from "../images/linijamoduliu.jpg";
// import mill from "../images/malunas.jpg";
// import namas from "../images/namas.png";

const DarbaiLT = ({ onObjectClick, t, listOfObjectsLT, onLoad }) => {
  //to show only *insert nr* items in this component
  const listforDarbaiLT = listOfObjectsLT.slice(0, 6);
  return (
    <>
      {/* <Slides /> */}

      <div onLoad={onLoad()}>
        <div className="cover">
          <img
            alt="background"
            className="coverimg main"
            src={background}
          ></img>
          <div className="DarbaiLT-about-section">
            <p className="intro-about ">
              <span className="bolder">SAULĖS ELEKTRINĖS IR VĖJO JĖGAINĖS</span>
            </p>
          </div>
        </div>
        <div className="cover2">
          <div className="cropped-pics">
            <img alt="namas" src={photos4} className="namas"></img>
          </div>
          <div className="button_apie_mus_div">
            <p className="intro-p">
              30 metų patirtis, aukštos kvalifikacijos personalas ir
              tik laiko patikrinta, geriausios kokybės naudojama įranga
            </p>
            <Link
              style={{ color: "inherit", textDecoration: "none" }}
              to="/about"
            >
              <button className="button_apie_mus" type="button">
                Apie mus
              </button>
            </Link>
          </div>
        </div>
        <div className="partnercover">
          <p className="intro-about">Partneriai</p>
          <div className="partnercoverflex">
            <div className="main-img-partners-each">
              <a target="_blank" rel="noopener noreferrer" href="http://prosolar.cz">
                <img alt="prosolar" src={prosolar} />
              </a>
            </div>
            <div className="main-img-partners-each">
              <a target="_blank" rel="noopener noreferrer" href="https://www.fronius.com/en">
                <img alt="fronius" src={fronius} />
              </a>
            </div>
            <div className="main-img-partners-each">
              <a target="_blank" rel="noopener noreferrer" href="https://www.renusol.com/en/">
                <img alt="renusol" src={renusol} />
              </a>
            </div>
            <div className="main-img-partners-each">
              <a target="_blank" rel="noopener noreferrer" href="https://www.aleo-solar.com/">
                <img alt="aleo" src={aleo} />
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
              <Link to="/projects" style={{textDecoration: "none"}}>
                <p>{t("DarbaiLT.linkToProj")}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default withTranslation("translation")(DarbaiLT);
