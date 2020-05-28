import React, { Component } from "react";
import "../Styles/style.css";
import "../Styles/aboutStyle.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



import Header from "./Header";
import Partneriai from "./Partneriai";
import Slides from "./Slides";
import DarbaiLT from "./DarbaiLT";
import Footer from "./Footer";
import About from "./About";
import Contacts from "./Contacts";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Slides />
          <Switch>
            <Route path="/about" exact component={About} />
            <Route path="/contacts" exact component={Contacts} />
            <DarbaiLT />
            <Partneriai />
            
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
