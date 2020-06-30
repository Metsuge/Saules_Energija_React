import React from "react";
import slide3 from "../images/slide3.jpg";
import slide4 from "../images/slide4.jpg";
import slide5 from "../images/slide-1024x293.jpg";

import { Link } from "react-router-dom";
import { withTranslation } from 'react-i18next';


const listOfObjectsLT = [
  { src: slide3, id: 0, name: 'Name1', pic2: slide4, text: "Tekstas ant paveiksliuko"},
  { src: slide4, id: 1, name: 'Name2', pic2: slide4, text: "Tekstas ant paveiksliuko" },
  { src: slide5, id: 2, name: 'Name3', pic2: slide4, text: "Tekstas ant paveiksliuko" },
];



const DarbaiLT = ({onObjectClick, t}) => {
  return (
    <>
  
      <p id="PROJECTSINLT" className="h2">
        {t('LTprojects.title')}
      </p>

      <div className="img-section">
        {listOfObjectsLT.map((oneObject) => {
          return (
            <Link to={`/object/${oneObject.id}`}>
              <div
                onClick={() => onObjectClick(oneObject.id)}
                className="each-img img1"
              >
                <img alt="" className="darbai-img" src={oneObject.src} />
                <div className="text-container-glass"></div>
                <p className="textonimg">{oneObject.text}</p>
              </div>
              
            </Link>
            
          );
        })}
      </div>
      
    </>
  );
};

export default withTranslation('translation') (DarbaiLT);
