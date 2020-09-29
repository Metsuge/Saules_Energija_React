import React from "react";
import { withTranslation } from "react-i18next";

function AnObject({ listOfObjectsLT, number, t, onLoad }) {
  let s = listOfObjectsLT[number].src;
  let listOfAdditionalPics = listOfObjectsLT[number].pics;

  return (
    <>
      <div onLoad={onLoad()}>
        <p className="h2">
          {t(`listOfObjectsLT.id${listOfObjectsLT[number].id}.title`)}
        </p>
        <div className="object-div">
          
          <div className="img-object-div">
            <img alt="img" className="object-img" src={s} width="40%" />
            {listOfAdditionalPics.map((pic) => {
              return (
                <img alt="img" className="object-img" src={pic} width="40%" />
              );
            })}
          </div>
  
          {/* <p className="object-text">
            {t(`listOfObjectsLT.id${listOfObjectsLT[number].id}.text`)}
          </p> */}
        </div>
      </div>
    </>
  );
}

export default withTranslation("translation")(AnObject);
