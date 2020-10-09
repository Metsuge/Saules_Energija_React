import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { withTranslation } from "react-i18next";

//STYLES
import "../Styles/style.css";
import "../Styles/aboutStyle.css";
import "../Styles/AnObject.css";
import "../Styles/Footer.css";
import "../Styles/Partners.css";
import "../Styles/Projects.css";
import "../Styles/pagination.css";


//COMPONENTS
import Header from "./Header";
import Partneriai from "./Partneriai";
import DarbaiLT from "./DarbaiLT";
import Footer from "./Footer";
import About from "./About";
import Contacts from "./Contacts";
import Projects from "./Projects";
import AnObject from "./AnObject";

const onLoad = () =>{
  window.scroll(0,0);
  // document.getElementById('nav').classList.remove("open");
}

function importAll(r) {
  return r.keys().map(r);
}

const images20 = importAll(
  require.context("../images/2020/", false, /\.(png|jpe?g|svg|JPG)$/)
);


const images19 = importAll(
  require.context("../images/2019/", false, /\.(png|jpe?g|svg|JPG)$/)
);

//main photo of the project
const getTheRightPic = (idOfPics, importedPic) => {
  let picture = "";
  importedPic.forEach((pic) => {
    let search = pic.search(`/${idOfPics}-1`);
    if (search > 0) picture = pic;
  });
  return picture;
};

//the rest of the photos for the project
const getTheListOfRightPics = (idOfPics, importedPic) => {
  let listOfPics = [];
  importedPic.forEach((pic) => {
    let search = pic.search(`/${idOfPics}-[2-9]`);
    if (search > 0 ) listOfPics.push(pic);
  });
  
  return listOfPics;
};
// the list of all the photos, witch is passed as props to components
let listOfObjectsLT = [];

let id = 0;
const generateId = () => {
  return id++
}

//nrOfProjects - how many projects in the images folder
//importedPic - variable with imported pics
//year - year of the projects, used to create tags on each pic
const makeDataObject = (nrOfProjects, importedPic, year) => {
  for (let i = 1; i < nrOfProjects+1; i++) {
    listOfObjectsLT.push({
      src: getTheRightPic(i, importedPic),
      // id: `${i-1}`,
      id: generateId(),
      pics: getTheListOfRightPics(i, importedPic),
      tag: "20" + year,
    });
  }
  return listOfObjectsLT;
};

makeDataObject(12, images20, 20);
makeDataObject(17, images19, 19);

let clickeddiv = 1;
class App extends Component {
  onObjectClick = (clickeddivffromdarbai) => {
    clickeddiv = clickeddivffromdarbai;
  };

  render() {
    const { t, i18n } = this.props;
    return (
      <Router>
        <div>
          <Header t={t} i18n={i18n} />

          <Switch>
            <Route
              path="/object/:id"
              exact
              component={() => (
                <AnObject
                  onLoad={onLoad}
                  t={t}
                  listOfObjectsLT={listOfObjectsLT}
                  number={clickeddiv}
                />
              )}
            />
            <Route 
              path="/about" 
              exact
              component={() => (
                <About
                onLoad={onLoad}
                 /> 
                 )}
              />
            <Route path="/contacts" exact component={() => (
                <Contacts
                  onLoad={onLoad}
                />
              )} />
            <Route path="/partners" exact component={() => (
                <Partneriai
                  onLoad={onLoad}
                />
              )} />
            <Route
              path="/projects"
              exact
              component={() => (
                <Projects
                  onLoad={onLoad}
                  number={clickeddiv}
                  onObjectClick={this.onObjectClick}
                  listOfObjectsLT={listOfObjectsLT}
                  t={t}
                />
              )}
            />
            <Route
              path="/"
              exact
              component={() => (
                <DarbaiLT
                  onLoad={onLoad}
                  onObjectClick={this.onObjectClick}
                  listOfObjectsLT={listOfObjectsLT}
                  t={t}
                />
              )}
            />
          </Switch>
        
            <Footer
            t={t} i18n={i18n}
            />
          
        </div>
      </Router>
    );
  }
}

export default withTranslation("translation")(App);
