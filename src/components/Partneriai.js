import React from "react";


import slide3 from '../images/slide3.jpg';


const Partneriai = () => {
  return (
    <>
      <p id="partneriai2" className="h2">
        PARTNERIAI
      </p>
      <div className="main-img-partners">
        <div className="main-img-partners-each">
          <h3 className="partners-name">Pavadinimas</h3>
          <img alt="pic" src={slide3} />
        </div>
        <div className="main-img-partners-each">
          <h3 className="partners-name">Pavadinimas</h3>
          <img alt="pic" src={slide3} />
        </div>
        <div className="main-img-partners-each">
          <h3 className="partners-name">Pavadinimas</h3>
          <img alt="pic" src={slide3} />
        </div>
        <div className="main-img-partners-each">
          <h3 className="partners-name">Pavadinimas</h3>
          <img alt="pic" src={slide3} />
        </div>
      </div>
    </>
  );
};


export default Partneriai;