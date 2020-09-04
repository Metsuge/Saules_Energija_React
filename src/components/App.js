import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//STYLES
import "../Styles/style.css";
import "../Styles/aboutStyle.css";
import "../Styles/AnObject.css";

//COMPONENTS
import Header from "./Header";
import Partneriai from "./Partneriai";
import DarbaiLT from "./DarbaiLT";
import Footer from "./Footer";
import About from "./About";
import Contacts from "./Contacts";
import Projects from "./Projects";
import AnObject from "./AnObject";

import { withTranslation } from "react-i18next";

function importAll(r) {
  return r.keys().map(r);
}

const images20 = importAll(
  require.context("../images/2020/", false, /\.(png|jpe?g|svg|JPG)$/)
);

// const images19 = importAll(
//   require.context("../images/2019/", false, /\.(png|jpe?g|svg|JPG)$/)
// );


const getTheRightPic = (idOfPics, importedPic) => {
  let picture = "";
  importedPic.forEach((pic) => {
    let search = pic.search(`/${idOfPics}-1`);
    if (search > 0) picture = pic;
  });
  return picture;
};

const getTheListOfRightPics = (idOfPics, importedPic) => {
  let listOfPics = [];
  importedPic.forEach((pic) => {
    let search = pic.search(`/${idOfPics}-`);
    if (search > 0 ) listOfPics.push(pic);
  });
  
  return listOfPics;
};

let listOfObjectsLT = [];

const makeDataObject = (nrOfProjects) => {
  for (let i = 1; i < nrOfProjects+1; i++) {
    listOfObjectsLT.push({
      src: getTheRightPic(i, images20),
      id: `${i-1}`,
      pics: getTheListOfRightPics(i, images20),
      tag: "2020",
    });
  }
  return listOfObjectsLT;
};

makeDataObject(11);
console.log(listOfObjectsLT);

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
                  t={t}
                  listOfObjectsLT={listOfObjectsLT}
                  number={clickeddiv}
                />
              )}
            />
            <Route path="/about" exact component={About} />
            <Route path="/contacts" exact component={Contacts} />
            <Route path="/partners" exact component={Partneriai} />
            <Route
              path="/projects"
              exact
              component={() => (
                <Projects
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
                  onObjectClick={this.onObjectClick}
                  listOfObjectsLT={listOfObjectsLT}
                  t={t}
                />
              )}
            />
          </Switch>
          <div className="App-footer">
            <Footer />
          </div>
        </div>
      </Router>
    );
  }
}

export default withTranslation("translation")(App);
