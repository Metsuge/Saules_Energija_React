import React, { Component } from "react";
import "../Styles/style.css";
import "../Styles/aboutStyle.css";
import "../Styles/AnObject.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import slide3 from "../images/slide3.jpg";
import slide4 from "../images/slide4.jpg";
import slide5 from "../images/slide-1024x293.jpg";

import Header from "./Header";
import Partneriai from "./Partneriai";
import Slides from "./Slides";
import DarbaiLT from "./DarbaiLT";
import Footer from "./Footer";
import About from "./About";
import Contacts from "./Contacts";
import Projects from "./Projects";
import AnObject from "./AnObject";

import { withTranslation } from "react-i18next";

//LIST OF OBJECTS IN LT

const listOfObjectsLT = [
  { src: slide3, id: 0, name: "Name1", pic2: slide4 },
  { src: slide4, id: 1, name: "Name2", pic2: slide4 },
  { src: slide5, id: 2, name: "Name3", pic2: slide4 },
  { src: slide5, id: 3, name: "Name3", pic2: slide4 },
  { src: slide5, id: 4, name: "Name3", pic2: slide4 }
];

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
          <Slides />
          <Switch>
            <Route
              path="/object/:id"
              exact
              component={() => (
                <AnObject t={t} list={listOfObjectsLT} number={clickeddiv} />
              )}
            />
            <Route path="/about" exact component={About} />
            <Route path="/contacts" exact component={Contacts} />
            <Route path="/partners" exact component={Partneriai} />
            <Route
              path="/projects"
              exact
              component={() => <Projects onObjectClick={this.onObjectClick} />}
            />
            <Route
              path="/"
              exact
              component={() => <DarbaiLT onObjectClick={this.onObjectClick} t={t} />}
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
