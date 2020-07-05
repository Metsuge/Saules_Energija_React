import React from "react";
import { withTranslation } from "react-i18next";

function AnObject({ list, number, t }) {
  let s = list[number].src;
  // let n = list[number].name;
  let secondpic = list[number].pic2;

  return (
    <>
      <p className="h2">{t(`listOfObjectsLT.id${list[number].id}.title`)}</p>
      <div className="object-div">
        <div className="img-object-div">
          <img alt="img" className="object-img" src={s} width="60%" />
          <img alt="img" className="object-img" src={secondpic} width="60%" />
        </div>

        <p className="object-text">
          {t(`listOfObjectsLT.id${list[number].id}.text`)}
        </p>
      </div>
    </>
  );
}

export default withTranslation("translation")(AnObject);
