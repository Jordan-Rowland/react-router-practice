import React from "react";
import { Link, Switch, Route, useRouteMatch } from "react-router-dom";

import Settings from "./Settings";
import Info from "./Info";


function Profile() {
  const {path, url} = useRouteMatch()
  // const match = useRouteMatch()
  // console.log(match)
  console.log({path, url})
  return(
    <div>
      <Switch>
        Profile page!
        <Route exact path={`${path}`}>
          <ul>
              <li><Link to={`${url}/info`}>Profile Info</Link></li>
              <li><Link to={`${url}/settings`}>Profile Settings</Link></li>
          </ul>
        </Route>
        <Route path={`${path}/info`}>
          <Info />
        </Route>
        <Route path={`${path}/settings`}>
          <Settings />
        </Route>
      </Switch>
    </div>
  );
}

export default Profile;