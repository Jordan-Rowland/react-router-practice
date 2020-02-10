import React from "react";
import { Link, Switch, Route } from "react-router-dom";

import Settings from "./Settings";
import Info from "./Info";


function Profile() {
  return(
    <div>
      <Switch>
        Profile page!
        <Route exact path="/profile">
          <ul>
              <li><Link to="/profile/info">Profile Info</Link></li>
              <li><Link to="/profile/settings">Profile Settings</Link></li>
          </ul>
        </Route>
        <Route path="/profile/info">
          <Info />
        </Route>
        <Route path="/profile/settings">
          <Settings />
        </Route>
      </Switch>
    </div>
  );
}

export default Profile;