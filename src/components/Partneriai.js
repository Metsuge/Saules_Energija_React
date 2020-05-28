import React from "react";


import slide3 from '../images/slide3.jpg';


const Partneriai = () => {
  return (
    <>
      <p id="partneriai2" class="h2">
        PARTNERIAI
      </p>
      <div class="main-img-partners">
        <div class="main-img-partners-each">
          <h3 class="partners-name">Pavadinimas</h3>
          <img src={slide3} />
        </div>
        <div class="main-img-partners-each">
          <h3 class="partners-name">Pavadinimas</h3>
          <img src={slide3} />
        </div>
        <div class="main-img-partners-each">
          <h3 class="partners-name">Pavadinimas</h3>
          <img src={slide3} />
        </div>
        <div class="main-img-partners-each">
          <h3 class="partners-name">Pavadinimas</h3>
          <img src={slide3} />
        </div>
      </div>
    </>
  );
};


export default Partneriai;