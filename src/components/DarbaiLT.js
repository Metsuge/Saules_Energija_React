import React from "react";


import slide3 from '../images/slide3.jpg';

const DarbaiLT = () => {
  return (
    <>
      <p id="PROJECTSINLT" class="h2">
        DARBAI LIETUVOJE
      </p>
      <div class="img-section">
        <div class="each-img img1">
          <img class="darbai-img" src={slide3} />
          <div class="text-container-glass"></div>
          <p class="textonimg">Tekstas ant paveiksliuko</p>
        </div>
        <div class="each-img ">
          <img class="darbai-img" src={slide3}/>
          <div class="text-container-glass"></div>
          <p class="textonimg">Tekstas ant paveiksliuko</p>
        </div>
        <div class="each-img img3">
          <img class="darbai-img" src={slide3} />
          <div class="text-container-glass"></div>
          <p class="textonimg">Tekstas ant paveiksliuko</p>
        </div>
        <div class="each-img img1">
          <img class="darbai-img" src={slide3} />
          <div class="text-container-glass"></div>
          <p class="textonimg">Tekstas ant paveiksliuko</p>
        </div>
      </div>
      <section class="partners">
            <div class="each-img-partners">
                <img src={slide3} />
                <div class="text-container">
                    <p class="textonimg">Tekstas ant paveiksliuko</p>
                </div>
            </div>
            <div class="each-img-partners">
                <img src={slide3} />
                <div class="text-container">
                    <p class="textonimg">Tekstas ant paveiksliuko</p>
                </div>
            </div>
            <div class="each-img-partners">
                <img src={slide3} />
                <div class="text-container">
                    <p class="textonimg">Tekstas ant paveiksliuko</p>
                </div>
            </div>
            <div class="each-img-partners">
                <img src={slide3} />
                <div class="text-container">
                    <p class="textonimg">Tekstas ant paveiksliuko</p>
                </div>
            </div>
        </section>
    </>
  );
};

export default DarbaiLT;
