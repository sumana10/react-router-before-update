import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {Route, Link, Switch, BrowserRouter as Router} from "react-router-dom"

import User from "./User"
import Visit from "./Visit"
import notfound from "./notfound"


const routing = (
  <Router>
  <div>
    <ul>
     <li><Link to="/">Home</Link></li>
     <li><Link to="/user">User</Link></li>
     <li><Link to="/visit">Visit</Link></li>
    </ul>
  </div>
  <Switch>
    <Route path="/" exact component={App}/>
    <Route path="/user" exact component={User}/>
    <Route path="/visit" exact component={Visit}/>
    <Route component={notfound}/>
  </Switch>
  </Router>
)

ReactDOM.render(routing, document.getElementById("root"));
