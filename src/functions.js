//reloading anchors
const dataReload = document.querySelectorAll("[data-reload]");

//language translations
const language = {
  eng: {
    pagr: "MAIN",
    projektai: "PROJECTS",
    kontaktai: "CONTACTS",
    kontaktai2: "CONTACTS",
    partneriai: "PARTNERS",
    partneriai2: "PARTNERS",
    apieMus: "ABOUT US",
    apieImone: "ABOUT THE COMPANY",
    phone: "Phone number",
    emaill: "Email",
    adress: "Adress",
    sunandwind: "Sustanable sun and wind energy",
    companyInfo: "Company information",
    companyCode: "Company code: 302819713",
    VAT: "VAT: LT100007003016",
    PROJECTSINLT: "OUR PROJECTS IN LITHUANIA",
  },
};

const arrayOfKeys = Object.keys(language.eng); //keys of the traslation Object, ARRAY OF STRINGS
const arrayOfIds = []; //elements with only those id, which has a translation on specific page

for (let i = 0; i < arrayOfKeys.length; i++) {
  let currentId = document.getElementById(arrayOfKeys[i]);
  if (currentId) {
    arrayOfIds.push(currentId.id);
  }
}

//changing those html elements which have a translation
const changeLang = () => {
  for (let i = 0; i < arrayOfIds.length; i++) {
    const foundElement = arrayOfKeys.find((id) => id === arrayOfIds[i]);
    document.getElementById(foundElement).textContent =
      language.eng[foundElement];
  }
};

//define language via window hash
if (window.location.hash) {
  if (window.location.hash === "#eng") {
    changeLang();
  }
}

for (let i = 0; i < dataReload.length; i++) {
  dataReload[i].onclick = function () {
    setTimeout(function () {
      window.location.reload(true);
    }, 100);
  };
}
//__________________ SLIDER ________________

const carouselSlide = document.querySelector(".slider-slides");
const carouselImages = document.querySelectorAll(".slider-slides img");

//buttons
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";

nextBtn.addEventListener("click", () => {
  if(counter>= carouselImages.length -1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
});

prevBtn.addEventListener("click", () => {
  if(counter<=0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
});

carouselSlide.addEventListener("transitionend", () => { //excutes function once transition ends
  if(carouselImages[counter].id === 'lastClone'){
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
  }

  if(carouselImages[counter].id === 'firstClone'){
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = "translateX(" + (-size * counter) + "px)";
  }
  
});
