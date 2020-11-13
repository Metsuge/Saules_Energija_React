import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { withTranslation } from "react-i18next";

//STYLES
import "./style.css";
import "../components/About/about.css";
import "../components/AnObject/AnObject.css";
import "../components/FootHead/Footer.css";
import "../components/Partners/Partners.css";
import "../components/Projects/Projects.css";
import "../components/Additional/pagination.css";
import "../components/Contacts/contacts.css";

//COMPONENTS
import Header from "./FootHead/Header";
import Partneriai from "./Partners/Partners";
import ProjectInMainPage from "./ProjectInMainPage";
import Footer from "./FootHead/Footer";
import About from "./About/About";
import Contacts from "./Contacts/Contacts";
import Projects from "./Projects/Projects";
import AnObject from "./AnObject/AnObject";

const onLoad = () => {
  window.scroll(0, 0);
  // document.getElementById('nav').classList.remove("open");
};

function importAll(r) {
  return r.keys().map(r);
}

const images20Big = importAll(
  require.context("../images/2020Big/", false, /\.(png|jpe?g|svg|JPG)$/)
);

const images19Big = importAll(
  require.context("../images/2019Big/", false, /\.(png|jpe?g|svg|JPG)$/)
);

const images1318Big = importAll(
  require.context("../images/2013-2018Big/", false, /\.(png|jpe?g|svg|JPG)$/)
);

const images1013Big = importAll(
  require.context("../images/2010-2013Big/", false, /\.(png|jpe?g|svg|JPG)$/)
);

const images1010Big = importAll(
  require.context("../images/2000-2010Big/", false, /\.(png|jpe?g|svg|JPG)$/)
);

//___________________________________________________________
const images20 = importAll(
  require.context("../images/2020/", false, /\.(png|jpe?g|svg|JPG)$/)
);

const images19 = importAll(
  require.context("../images/2019/", false, /\.(png|jpe?g|svg|JPG)$/)
);

const images1318 = importAll(
  require.context("../images/2013-2018/", false, /\.(png|jpe?g|svg|JPG)$/)
);

const images1013 = importAll(
  require.context("../images/2010-2013/", false, /\.(png|jpe?g|svg|JPG)$/)
);

const images0010 = importAll(
  require.context("../images/2000-2010/", false, /\.(png|jpe?g|svg|JPG)$/)
);

const images1990 = importAll(
  require.context("../images/1990-2000/", false, /\.(png|jpe?g|svg|JPG)$/)
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
    if (search > 0) listOfPics.push(pic);
  });

  return listOfPics;
};
// the list of all the photos, witch is passed as props to components
let listOfObjectsLT = [];
let listOfBiggerPics = [];

let id = 0 
const generateId = () => {
  return id++;
};

let idBig =0;
const generateBigId = () => {
  return idBig++;
};


//nrOfProjects - how many projects in the images folder
//importedPic - variable with imported pics
//year - year of the projects, used to create tags on each pic
const makeDataObject = (nrOfProjects, importedPic, tag) => {
  for (let i = 1; i < nrOfProjects + 1; i++) {
    listOfObjectsLT.push({
      src: getTheRightPic(i, importedPic),
      // id: `${i-1}`,
      id: generateId(),
      pics: getTheListOfRightPics(i, importedPic),
      tag: tag,
    });
  }
  return listOfObjectsLT;
};


const makeDataBiggerObject = (nrOfProjects, importedPic, tag) => {
  for (let i = 1; i < nrOfProjects + 1; i++) {
    listOfBiggerPics.push({
      src: getTheRightPic(i, importedPic),
      id: generateBigId(),
      pics: getTheListOfRightPics(i, importedPic),
      tag: tag,
    });
  }
  return listOfBiggerPics;
};


makeDataBiggerObject(12, images20Big, "2020");
makeDataBiggerObject(17, images19Big, "2019");
makeDataBiggerObject(20, images1318Big, "2013-2018");
makeDataBiggerObject(21, images1013Big, "2010-2013");

makeDataBiggerObject(34, images1010Big, "2000-2010");
makeDataBiggerObject(12, images1990, "1990-2000");

makeDataObject(12, images20, "2020");
makeDataObject(17, images19, "2019");
makeDataObject(20, images1318, "2013-2018");
makeDataObject(21, images1013, "2010-2013");
makeDataObject(34, images0010, "2000-2010");
makeDataObject(12, images1990, "1990-2000");


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
                />
              )}
            />
            <Route
              path="/about"
              exact
              component={() => <About onLoad={onLoad} />}
            />
            <Route
              path="/contacts"
              exact
              component={() => <Contacts onLoad={onLoad} />}
            />
            <Route
              path="/partners"
              exact
              component={() => <Partneriai onLoad={onLoad} />}
            />
            <Route
              path="/projects"
              exact
              component={() => (
                <Projects
                  onLoad={onLoad}
                  number={clickeddiv}
                  onObjectClick={this.onObjectClick}
                  listOfObjectsLT={listOfObjectsLT}
                  listOfBiggerPics={listOfBiggerPics}
                  t={t}
                />
              )}
            />
            <Route
              path="/"
              exact
              component={() => (
                <ProjectInMainPage
                  onLoad={onLoad}
                  onObjectClick={this.onObjectClick}
                  listOfObjectsLT={listOfObjectsLT}
                  t={t}
                />
              )}
            />
          </Switch>

          <Footer t={t} i18n={i18n} />
        </div>
      </Router>
    );
  }
}

export default withTranslation("translation")(App);
