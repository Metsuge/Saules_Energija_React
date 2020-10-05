import React from "react";


import prosolar from '../images/logo/prosolar-logo-new.png';
import fronius from '../images/logo/fronius.webp';
import aleo from '../images/logo/aleo_logo.png';
import renusol from '../images/logo/Renusol.webp';


const Partneriai = () => {
  return (
    <>
      <p id="partneriai2" className="h2">
        PARTNERIAI
      </p>
      <div className="main-img-partners">
        <div className="main-img-partners-each">
          <a href="http://prosolar.cz">
            <h3 className="partners-name">Professional Solar Products (ProSolar®)</h3>
            <img alt="pic" src={prosolar} />
          </a>
        </div>
        <div className="main-img-partners-each">
          <a href="https://www.fronius.com/en">
            <h3 className="partners-name">Fronius</h3>
            <img alt="pic" src={fronius} />
          </a>
        </div>
        <div className="main-img-partners-each">
          <a href="https://www.renusol.com/en/">
            <h3 className="partners-name">Renusol</h3>
            <img alt="pic" src={renusol} />
          </a>
        </div>
        <div className="main-img-partners-each">
          <a href="https://www.aleo-solar.com/">
            <h3 className="partners-name">Aleo</h3>
            <img alt="pic" src={aleo} />
          </a>
        </div>
      </div>
    </>
  );
};


export default Partneriai;