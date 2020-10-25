import React from "react";
// import { useTranslation} from 'react-i18next';
import { withTranslation } from "react-i18next";

const About = ({ t, onLoad }) => {
  // const { t, i18n } = useTranslation();

  // const changeLanguage = code => {
  //   i18n.changeLanguage(code);
  // };

  return (
    <>
      <div onLoad={onLoad()}>
        <div className="about-section">
          <p className="intro-about" id="apieImone">
            {t("about.title")}
          </p>
          <p className="intro-p">UAB "Sun lux"</p>
        </div>

        {/* <button type="button" onClick={() => changeLanguage('en')}>{t('translation:en')}</button>
      <button type="button" onClick={() => changeLanguage('lt')}>{t('translation:lt')}</button> */}

        <div className="container-about">
          {/* <p className="about-text">UAB "Sun Lux"</p> */}
          {/* <p className="about-text">
          UAB „Saulės energija” įsteigta 1991 m. Įmonę įkūrė Puslaidininkių
          fizikos instituto laboratorijos kolektyvas siekdamas praktikoje
          įgyvendinti daugiamečius tyrimus.
        </p> */}

          <p className="about-text">{t("about.text")}</p>
        </div>
      </div>
    </>
  );
};

export default withTranslation("translation")(About);
