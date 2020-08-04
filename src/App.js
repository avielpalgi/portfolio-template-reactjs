import React from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './Components/Menu';
import ProfileDetails from './Components/ProfileDetails';
//import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Link, withRouter,Switch } from "react-router-dom";
import Contact from './Components/Contact';
import Projects from './Components/Projects';
import "../src/FontawsomeIcons";

function App() {


  return (
    <div className="container-fluid App">
      <div className="row">
        <div id="Menu" className="col-3">
          <Menu />
        </div>
        <div id="ProfileDetails" className="col-9">
          <Switch>
            <Route exact path="/">
              <ProfileDetails />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
            <Route path="/Projects">
              <Projects />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default withRouter(App);
