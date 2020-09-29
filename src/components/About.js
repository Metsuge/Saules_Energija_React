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
        <p id="apieImone" className="h2">
          {t("about.title")}
        </p>
        {/* <button type="button" onClick={() => changeLanguage('en')}>{t('translation:en')}</button>
      <button type="button" onClick={() => changeLanguage('lt')}>{t('translation:lt')}</button> */}

        <div className="container-about">
          <p className="about-text">UAB "Sun Lux"</p>
          {/* <p className="about-text">
          UAB „Saulės energija” įsteigta 1991 m. Įmonę įkūrė Puslaidininkių
          fizikos instituto laboratorijos kolektyvas siekdamas praktikoje
          įgyvendinti daugiamečius tyrimus.
        </p> */}

          <p className="about-text">
            Turime daugiau nei 30 m. patirtį, specializuojamės fotoelektrinių
            modulių gamyboje, saulės, vėjo ir kombinuotų saulės – vėjo
            mikroelektrinių projektavime bei įrengime. Ilgametė patirtis,
            aukštos kvalifikacijos personalas ir tik laiko patikrinta,
            geriausios kokybės naudojama įranga leidžia įgyvendinti
            optimaliausius energetinius sprendimus. Mūsų bendrovė vienintelė
            Lietuvoje galinti pasigirti tokia gausa sėkmingai įdiegtų ir
            veikiančių projektų. Pagrindinės teikiamos paslaugos yra mažųjų
            atsinaujinančiosios energijos elektrinių įrengimas įvairiems
            vartotojams: mokykloms, kolegijoms, universitetams, ūkininkams,
            sodybų ir sodų namelių savininkams ir kitiems privatiems,
            visuomeniniams bei valstybiniams elektros energijos vartotojams.
            Įrengiame autonomines jėgaines objektuose, kur nėra energetikos
            sistemos elektros energijos paskirstymo tinklo, sujungtas su
            skirstomaisiais tinklais saulės ir vėjo mikroelektrines,
            kompleksines elektros ir šilumos tiekimo energetines sistemas.
          </p>
        </div>
      </div>
    </>
  );
};

export default withTranslation("translation")(About);
