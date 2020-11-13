import React from "react";

import prosolar from "../../images/logo/prosolar-logo-new.png";
import fronius from "../../images/logo/fronius.webp";
import aleo from "../../images/logo/aleo_logo.png";
import renusol from "../../images/logo/Renusol.webp";

const Partneriai = ({ onLoad }) => {
  return (
    <>
      <div onLoad={onLoad()}>
        <p id="partneriai2" className="h2">
          PARTNERIAI
        </p>
        <div className="main-img-partners">
          <div className="main-img-partners-each">
            <a target="_blank" rel="noopener noreferrer" href="http://prosolar.cz">
              <img alt="pic" src={prosolar} />
            </a>
          </div>
          <div className="main-img-partners-each">
            <a target="_blank" rel="noopener noreferrer" href="https://www.fronius.com/en">
              <img alt="pic" src={fronius} />
            </a>
          </div>
          <div className="main-img-partners-each">
            <a target="_blank" rel="noopener noreferrer" href="https://www.renusol.com/en/">
              <img alt="pic" src={renusol} />
            </a>
          </div>
          <div className="main-img-partners-each">
            <a target="_blank" rel="noopener noreferrer" href="https://www.aleo-solar.com/">
              <img alt="pic" src={aleo} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partneriai;
