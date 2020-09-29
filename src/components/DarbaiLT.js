import React from "react";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";
// import Slides from "./Slides";

const DarbaiLT = ({ onObjectClick, t, listOfObjectsLT }) => {
  //to show only *insert nr* items in this component
  const listforDarbaiLT = listOfObjectsLT.slice(0, 6);
  return (
    <>
      {/* <Slides /> */}
      <div className="pagrindinis-div">
        <div className="DarbaiLT-about-section">
          <p className="intro-about">Saulės jėgainės</p>
          <p className="intro-p">Daugiau nei 30 metų patirtis, aukštos kvalifikacijos personalas ir tik laiko patikrinta,
            geriausios kokybės naudojama įranga</p>
        </div>
        <p className="h2">{t("DarbaiLT.title")}</p>

        <div className="img-section">
          {listforDarbaiLT.map((oneObject) => {
            return (
              <Link to={`/object/${oneObject.id}`}>
                <div
                  onClick={() => onObjectClick(oneObject.id)}
                  className="each-img"
                >
                  <img alt="" className="darbai-img" src={oneObject.src} />

                  <div className="text-section">
                    <p className="textonimg">
                      {t(`listOfObjectsLT.id${oneObject.id}.introtext`)}
                    </p>
                  </div>
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
