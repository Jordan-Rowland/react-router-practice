import React from "react";
import { Link, Switch, Route, Redirect } from "react-router-dom";


function Redirecter() {

  return(
    <div>
      <Link to="/">Home</Link>
      <Link to="/private">Private</Link>

      <Switch>
        <Route exact path="/">
          <h1>Home page, anyone is allowed here</h1>
        </Route>
        <Route path="/private">
          {
            isLoggedIn ?
            <h1>Protected page, must be logged in to be here</h1> :
            <Redirect to="/login" />
          }

        </Route>
      </Switch>
    </div>
  );
}

export default Redirecter;