import React from "react";
import { Link } from "react-router-dom";
import { withTranslation } from "react-i18next";

import Slides from "./Slides";

const DarbaiLT = ({ onObjectClick, t, listOfObjectsLT }) => {
  //to show only 3 items in this component
  const listforDarbaiLT = listOfObjectsLT.slice(0, 3);
  return (
    <>    
    <Slides />
      <p className="h2">
        {t("DarbaiLT.title")}
      </p>
      <div className="img-section">
        {listforDarbaiLT.map((oneObject) => {
          return (
            <Link to={`/object/${oneObject.id}`}>
              <div
                onClick={() => onObjectClick(oneObject.id)}
                className="each-img img1"
              >
                <img alt="" className="darbai-img" src={oneObject.src} />
                <div className="text-container-glass"></div>
                <p className="textonimg">{t(`listOfObjectsLT.id${oneObject.id}.introtext`)}</p>
              </div>
            </Link>
          );
        })}
        
      </div>
      <div className="visiprojektai">
          <Link to="/projects"><p>{t('DarbaiLT.linkToProj')}</p></Link>
        </div>
    </>
  );  
};

export default withTranslation("translation")(DarbaiLT);
